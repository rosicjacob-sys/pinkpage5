// Zero-dep static server for Animation DB. Serves built dist/ on loopback.
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('./dist/', import.meta.url))
const PORT = Number(process.env.PORT || 8480)
const HOST = process.env.HOST || '127.0.0.1'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webmanifest': 'application/manifest+json',
  '.map': 'application/json; charset=utf-8',
}

createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    if (path.endsWith('/')) path += 'index.html'
    let file = normalize(join(ROOT, path))
    if (!file.startsWith(ROOT)) {
      res.writeHead(403)
      return res.end('Forbidden')
    }
    let body
    try { body = await readFile(file) } catch {
      file = join(ROOT, 'index.html')
      body = await readFile(file)
    }
    const ext = extname(file)
    res.setHeader('Content-Type', TYPES[ext] || 'application/octet-stream')
    if (ext === '.html') res.setHeader('Cache-Control', 'no-cache')
    else if (file.includes(`${normalize('/assets/')}`))
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    res.writeHead(200)
    res.end(body)
  } catch {
    res.writeHead(500)
    res.end('Server error')
  }
}).listen(PORT, HOST, () => {
  console.log(`Animation DB static server → http://${HOST}:${PORT}`)
})
