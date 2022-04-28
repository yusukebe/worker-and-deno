import { Hono } from './dist/hono.js'
import { serve } from 'https://deno.land/std@0.136.0/http/server.ts'

const app = new Hono()
serve((req: Request) => {
  return app.handle(req)
})
console.log('http://localhost:8000/')
