export class Context {
  message: string
  constructor(m: string) {
    this.message = m
  }
  say() {
    console.log(this.message)
  }
  getMessage() {
    return this.message
  }
}
