"""Descarga los subsets latin/latin-ext de Google Fonts + Coolvetica y genera
resources/fonts/fonts.css con rutas locales. Uso puntual, no forma parte del sitio."""
import re, os, urllib.request, hashlib

OUT = r"C:\Users\javie\Programar\jose\resources\fonts"
SCRATCH = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"}

os.makedirs(OUT, exist_ok=True)

def get(url, binary=False):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    return data if binary else data.decode("utf-8")

css = open(os.path.join(SCRATCH, "gf.css"), encoding="utf-8").read()

# Cada @font-face va precedido de un comentario con el nombre del subset.
blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S)
keep = [(s, b) for s, b in blocks if s in ("latin", "latin-ext")]

out_rules = []
for subset, block in keep:
    m = re.search(r"font-family:\s*'([^']+)'", block)
    fam = m.group(1)
    url = re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1)
    slug = fam.lower().replace(" ", "-")
    fname = f"{slug}-{subset}.woff2"
    path = os.path.join(OUT, fname)
    if not os.path.exists(path):
        open(path, "wb").write(get(url, binary=True))
    rule = block.replace(url, f"../fonts/{fname}")
    rule = re.sub(r"url\(\.\./fonts/", "url(./", rule)  # fonts.css vive junto a los woff2
    out_rules.append(f"/* {fam} · {subset} */\n" + rule.strip())

# Coolvetica (cdnfonts) — fuente gratuita de Ray Larabie / Typodermic.
cv_path = os.path.join(OUT, "coolvetica.woff")
if not os.path.exists(cv_path):
    open(cv_path, "wb").write(get("https://fonts.cdnfonts.com/s/13277/coolvetica.woff", binary=True))
out_rules.append(
    "/* Coolvetica · Ray Larabie (Typodermic), uso libre */\n"
    "@font-face {\n"
    "  font-family: 'Coolvetica';\n"
    "  font-style: normal;\n"
    "  font-weight: 400;\n"
    "  font-display: swap;\n"
    "  src: url(./coolvetica.woff) format('woff');\n"
    "}"
)

header = (
    "/* ════════════════════════════════════════════════════════════\n"
    "   TIPOGRAFÍAS AUTOALOJADAS\n"
    "   Servidas desde el propio dominio para no enviar la IP de cada\n"
    "   visitante a servidores de terceros (fonts.gstatic.com / cdnfonts).\n"
    "   Regenerar con scripts/selfhost_fonts.py si cambian las familias.\n"
    "   ════════════════════════════════════════════════════════════ */\n\n"
)
open(os.path.join(OUT, "fonts.css"), "w", encoding="utf-8").write(header + "\n\n".join(out_rules) + "\n")

for f in sorted(os.listdir(OUT)):
    print(f, os.path.getsize(os.path.join(OUT, f)))
