import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Dev only: serves the Vercel functions in /api from the Vite dev server, so the
 * booking form works with `npm run dev` (no `vercel dev` needed). In production
 * Vercel runs /api itself. Env vars come from .env / .env.local.
 */
function vercelApiDev() {
  return {
    name: 'vercel-api-dev',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const [k, v] of Object.entries(env)) process.env[k] ??= v
      // Without delivery config, log bookings to the terminal instead of failing.
      process.env.BOOKING_DRY_RUN ??= '1'

      server.middlewares.use('/api', async (req, res, next) => {
        const name = req.url.split('?')[0].replace(/^\/+|\/+$/g, '')
        if (!/^[a-z0-9-]+$/i.test(name)) return next()

        let mod
        try {
          mod = await server.ssrLoadModule(`/api/${name}.js`)
        } catch {
          return next()
        }

        const chunks = []
        for await (const c of req) chunks.push(c)
        const raw = Buffer.concat(chunks).toString()
        try {
          req.body = raw && req.headers['content-type']?.includes('json') ? JSON.parse(raw) : raw
        } catch {
          req.body = raw
        }

        res.status = (code) => ((res.statusCode = code), res)
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
          return res
        }
        try {
          await mod.default(req, res)
        } catch (e) {
          server.config.logger.error(String(e?.stack || e))
          if (!res.headersSent) res.status(500).json({ ok: false, error: 'Error interno.' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), vercelApiDev()],
})
