// Converte um documento Markdown do kit em PDF para enviar ao cliente.
// Uso: node ferramentas/gerar-pdf.mjs <arquivo.md> [saida.pdf]
// Requer Edge ou Chrome instalados (ou a variável NAVEGADOR com o caminho do executável).

import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { join, dirname, basename, resolve } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { marked } from "marked";

marked.use({ breaks: true });

const [entrada, saidaArg] = process.argv.slice(2);
if (!entrada) {
  console.error("Uso: node ferramentas/gerar-pdf.mjs <arquivo.md> [saida.pdf]");
  process.exit(1);
}

const md = readFileSync(entrada, "utf8");
const saida = resolve(saidaArg ?? entrada.replace(/\.md$/i, ".pdf"));

// Aviso de placeholders esquecidos: não bloqueia, só lista.
const pendentes = md
  .split(/\r?\n/)
  .map((linha, i) => ({ linha, n: i + 1 }))
  .filter(({ linha }) => /\[[^\]\n]*\](?!\()|DD\/MM/.test(linha) && !/^\s*\[[ x]\]/i.test(linha) && !/\| *\[[ x]\] *\|/i.test(linha));
if (pendentes.length) {
  console.warn(`⚠️  ${pendentes.length} linha(s) com placeholder não preenchido:`);
  for (const { linha, n } of pendentes.slice(0, 15)) console.warn(`   ${n}: ${linha.trim().slice(0, 100)}`);
}

const aqui = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(aqui, "estilo.css"), "utf8");
const titulo = (md.match(/^#\s+(.+)$/m)?.[1] ?? basename(entrada)).trim();
const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${titulo}</title><style>${css}</style></head><body>${marked.parse(md)}</body></html>`;

const pasta = mkdtempSync(join(tmpdir(), "kit-pdf-"));
const htmlPath = join(pasta, "doc.html");
writeFileSync(htmlPath, html);

const candidatos = [
  process.env.NAVEGADOR,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const navegador = candidatos.find((c) => existsSync(c));
if (!navegador) {
  console.error("Edge/Chrome não encontrado. Defina NAVEGADOR com o caminho do executável.");
  process.exit(1);
}

try {
  execFileSync(navegador, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--user-data-dir=${join(pasta, "perfil")}`,
    `--print-to-pdf=${saida}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: "ignore" });
} finally {
  rmSync(pasta, { recursive: true, force: true });
}

console.log(`✅ PDF gerado: ${saida}`);
