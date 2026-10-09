#!/usr/bin/env python3
"""Consolida el plan en dos entregables estáticos, generados desde docs/:

  - plan-completo.md : todo el texto en un solo archivo Markdown (ideal para
    compartir por URL a una IA o robot; es texto puro).
  - completo.html    : una sola página HTML con el contenido ya incrustado
    (bonita para humanos y también legible por máquinas, sin depender de JS).

El orden se toma de _sidebar.md, igual que el sitio navegable. Corre en local
o desde CI. Requiere el paquete 'markdown' solo para el HTML.
"""
import re, os, sys, datetime

EXCLUDE_GROUPS = {'Colaboración'}
SIDEBAR = '_sidebar.md'
OUT_MD = 'plan-completo.md'
OUT_HTML = 'completo.html'
SITE = os.environ.get('SITE_URL', '')

def parse_sidebar(text):
    items, group = [], ''
    for line in text.splitlines():
        m = re.match(r'^-\s+\*\*(.+?)\*\*', line)
        if m:
            group = m.group(1).strip(); continue
        m = re.match(r'^\s+-\s+\[(.+?)\]\((.+?)\)', line)
        if m:
            title, href = m.group(1).strip(), m.group(2).strip()
            if group in EXCLUDE_GROUPS: continue
            if not re.search(r'\.md($|[#?])', href, re.I): continue
            href = re.sub(r'[#?].*$', '', href)
            href = href.lstrip('/')  # el sidebar usa rutas absolutas del sitio; el filesystem las quiere relativas al repo
            items.append((group, title, href))
    return items

def read_body(href):
    lines = open(href, encoding='utf-8').read().split('\n')
    if lines and lines[0].startswith('> **'):
        lines = lines[1:]
    return '\n'.join(lines).strip()

def sec_id(href):
    return 'sec-' + re.sub(r'[^a-z0-9]+', '-', href.lower()).strip('-')

def resolve_root(dirp, target):
    return os.path.normpath(os.path.join(dirp, target)).replace(os.sep, '/')

# ---------- Markdown consolidado ----------
def fix_md_frag(body, href, secmap):
    """Reescribe enlaces del cuerpo Markdown para que el archivo consolidado no
    tenga enlaces rotos: las imágenes relativas (que no existen en un solo
    archivo) se reducen a su texto alternativo; los enlaces a otra sección del
    propio documento se vuelven anclas internas; y cualquier enlace que apunte
    fuera del documento se deja como texto plano. Solo se conservan los enlaces
    externos (http, mailto) y las anclas que ya empiezan por '#'."""
    dirp = os.path.dirname(href)
    def img_repl(m):
        alt, src = m.group(1), m.group(2)
        if re.match(r'^(https?:|data:|/)', src):
            return m.group(0)
        return '![%s](%s)' % (alt, resolve_root(dirp, src))
    body = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', img_repl, body)
    def a_repl(m):
        label, h = m.group(1), m.group(2)
        if h.startswith('#') or re.match(r'^(https?:|mailto:)', h):
            return m.group(0)
        clean = re.sub(r'[#?].*$', '', h)
        if re.search(r'\.md$', clean, re.I):
            rr = resolve_root(dirp, clean)
            if rr in secmap:
                return '[%s](#%s)' % (label, secmap[rr])
            return label
        return label
    return re.sub(r'(?<!\!)\[([^\]]+)\]\(([^)]+)\)', a_repl, body)


def build_md(items):
    secmap = {href: sec_id(href) for _, _, href in items if os.path.exists(href)}
    out = ['# Plan de gobierno de Cartagena de Indias', '',
           'Propuesta cívica abierta para Cartagena de Indias, en construcción: las marcas [PENDIENTE] indican datos que aún faltan. Todo el contenido en un solo '
           'archivo, generado desde los archivos de `docs/`.' + (' Versión navegable: ' + SITE if SITE else ''), '',
           f'_Generado el {datetime.date.today().isoformat()}. No editar a mano: '
           'la fuente son los archivos de `docs/`._', '']
    # Índice con anclas internas
    out += ['## Contenido', '']
    last = None
    for group, title, href in items:
        if href not in secmap: continue
        if group != last:
            out += ['', f'**{group}**', '']; last = group
        out.append('- [%s](#%s)' % (title, secmap[href]))
    out += ['']
    # Cuerpo
    last, missing = None, []
    for group, title, href in items:
        if not os.path.exists(href):
            missing.append(href); continue
        if group != last:
            out += ['', f'# {group}', '']; last = group
        out += ['<a id="%s"></a>' % secmap[href], '',
                fix_md_frag(read_body(href), href, secmap), '', '---', '']
    open(OUT_MD, 'w', encoding='utf-8').write('\n'.join(out).rstrip() + '\n')
    return missing

# ---------- HTML estático ----------
def fix_fragment(frag, href, secmap):
    dirp = os.path.dirname(href)
    def img_repl(m):
        whole, src = m.group(0), m.group(1)
        if re.match(r'^(https?:|data:|/|#)', src): return whole
        return whole.replace('src="%s"' % src, 'src="%s"' % resolve_root(dirp, src))
    frag = re.sub(r'<img\b[^>]*\bsrc="([^"]+)"[^>]*>', img_repl, frag)
    def a_repl(m):
        h, inner = m.group(1), m.group(2)
        if h.startswith('#'): return m.group(0)
        clean = re.sub(r'[#?].*$', '', h)
        if not re.match(r'^(https?:|mailto:)', h) and re.search(r'\.md$', clean, re.I):
            rr = resolve_root(dirp, clean)
            if rr in secmap:
                return '<a href="#%s">%s</a>' % (secmap[rr], inner)
        return inner  # cualquier enlace que apunte fuera: texto plano (solo vínculos internos)
    return re.sub(r'<a\b[^>]*\bhref="([^"]*)"[^>]*>(.*?)</a>', a_repl, frag, flags=re.S)

CSS = """
:root{--theme:#0b5d7a;--ink:#2c3e50;--muted:#5f7480;--line:#e3e8e6;--soft:#f1f7fa}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);line-height:1.7}
header.bar{position:sticky;top:0;z-index:10;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.6rem 1.2rem}
header.bar .title{font-weight:700;color:var(--theme);font-size:.95rem}
header.bar a{color:var(--ink);text-decoration:none;font-size:.82rem;border:1px solid var(--line);padding:.35rem .7rem;border-radius:6px;margin-left:.4rem}
header.bar a:hover{border-color:var(--theme);color:var(--theme)}
.wrap{max-width:860px;margin:0 auto;padding:1.5rem 1.2rem 5rem}
.lead{color:var(--muted);font-size:.9rem;border-left:4px solid var(--theme);background:var(--soft);padding:.6rem .9rem;border-radius:0 6px 6px 0}
#toc{margin:2rem 0;padding:1.2rem 1.4rem;background:var(--soft);border:1px solid var(--line);border-radius:8px}
#toc h2{margin:0 0 .6rem;font-size:1rem;color:var(--theme)}
#toc .grp{margin-top:.8rem;font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);font-weight:700}
#toc ul{list-style:none;margin:.2rem 0 0;padding:0}#toc li{margin:.12rem 0}
#toc a{color:var(--ink);text-decoration:none;font-size:.9rem}#toc a:hover{color:var(--theme);text-decoration:underline}
h1.group-title{margin:3.2rem 0 0;padding:.3rem 0 .5rem;color:var(--theme);font-size:1.05rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:2px solid var(--theme)}
section.doc{scroll-margin-top:70px;padding:1rem 0 1.5rem;border-bottom:1px dashed var(--line)}
section.doc h1{font-size:1.7rem;margin-top:1.2rem}section.doc h2{font-size:1.3rem;margin-top:1.8rem}section.doc h3{font-size:1.08rem}
img{max-width:100%;height:auto}a{color:var(--theme)}
blockquote{border-left:4px solid var(--theme);background:var(--soft);margin:1rem 0;padding:.5rem 1rem;color:#34464f}
code{background:#eef2f0;padding:.1em .35em;border-radius:4px;font-size:.88em}
pre{background:#f6f8fa;padding:1rem;border-radius:8px;overflow:auto}pre code{background:none;padding:0}
table{border-collapse:collapse;width:100%;margin:1rem 0;font-size:.92rem;display:block;overflow-x:auto}
th,td{border:1px solid var(--line);padding:.5rem .6rem;text-align:left;vertical-align:top}th{background:var(--soft)}
.toTop{position:fixed;right:1rem;bottom:1rem;background:var(--theme);color:#fff;text-decoration:none;padding:.5rem .7rem;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.2)}
@media print{
  @page{size:A4;margin:15mm}
  header.bar,.toTop,.lead{display:none}
  .wrap{max-width:none;width:auto;margin:0;padding:0}
  #content,section.doc{width:auto}
  a{color:var(--ink);text-decoration:none}
  section.doc{border:none}
  h1.group-title,section.doc h1,section.doc h2,section.doc h3{break-after:avoid}
  #toc{break-after:page}
  table{display:table;width:100%;table-layout:fixed;overflow:visible;font-size:.72rem}
  th,td{overflow-wrap:anywhere;word-break:break-word}
  pre{white-space:pre-wrap;word-break:break-word}
}
"""

def build_html(items):
    import markdown
    secmap = {href: sec_id(href) for _, _, href in items if os.path.exists(href)}
    toc, body, last = [], [], None
    for group, title, href in items:
        if href not in secmap: continue
        md = markdown.Markdown(extensions=['tables', 'fenced_code', 'sane_lists', 'attr_list'])
        frag = fix_fragment(md.convert(read_body(href)), href, secmap)
        if group != last:
            body.append('<h1 class="group-title" id="grp-%s">%s</h1>'
                        % (re.sub(r'[^a-z0-9]+','-',group.lower()).strip('-'), group))
            toc.append({'group': group, 'items': []}); last = group
        body.append('<section class="doc" id="%s">%s</section>' % (secmap[href], frag))
        toc[-1]['items'].append((title, secmap[href]))
    toc_html = ['<div id="toc"><h2>Contenido</h2>']
    for g in toc:
        toc_html.append('<div class="grp">%s</div><ul>' % g['group'])
        for t, i in g['items']:
            toc_html.append('<li><a href="#%s">%s</a></li>' % (i, t))
        toc_html.append('</ul>')
    toc_html.append('</div>')
    page = f"""<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Plan de gobierno de Cartagena de Indias: plan completo</title>
<meta name="description" content="Propuesta cívica abierta para Cartagena de Indias, todo el contenido en una sola página."/>
<style>{CSS}</style></head>
<body>
<header class="bar"><span class="title">Plan de gobierno de Cartagena de Indias</span>
<nav><a href="index.html">Sitio navegable</a><a href="#" onclick="window.print();return false;">Guardar como PDF</a></nav></header>
<div class="wrap">
<p class="lead">Todo el plan en una sola página. Documento estático generado desde los archivos fuente; para navegarlo con barra lateral y buscador, usa el <a href="index.html">sitio navegable</a>.</p>
{''.join(toc_html)}
<div id="content">{''.join(body)}</div>
</div>
<a class="toTop" href="#" title="Volver arriba">&#8593;</a>
</body></html>
"""
    open(OUT_HTML, 'w', encoding='utf-8').write(page)

def main():
    items = parse_sidebar(open(SIDEBAR, encoding='utf-8').read())
    missing = build_md(items)
    build_html(items)
    n = sum(1 for _,_,h in items if os.path.exists(h))
    print('%s: %d KB | %s: %d KB | %d secciones'
          % (OUT_MD, os.path.getsize(OUT_MD)//1024, OUT_HTML, os.path.getsize(OUT_HTML)//1024, n))
    if missing:
        print('FALTAN:', missing, file=sys.stderr); sys.exit(1)

if __name__ == '__main__':
    main()
