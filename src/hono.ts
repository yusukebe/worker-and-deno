import { Context } from './context.js'

export class Hono {
  context: Context
  constructor() {
    this.context = new Context('Hello')
  }
  hello() {
    this.context.say()
  }
  handle(req: Request) {
    const url = req.url
    const message = `You access: ${url}: ${this.context.getMessage()}`
    return new Response(message)
  }
  fire() {
    // @ts-ignore
    addEventListener('fetch', (event: FetchEvent) => {
      event.respondWith(this.handle(event.request))
    })
  }
}
