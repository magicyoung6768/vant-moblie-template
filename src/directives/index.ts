import { type App, type Directive } from 'vue'

const modules = import.meta.glob('./*', { eager: true })

export default {
  install(app: App<Element>) {
    Object.keys(modules).forEach(key => {
      const name = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
      const { default: directive } = modules[key] as { default?: Directive }
      console.log(directive, name)
      if (directive) {
        app.directive(name, directive)
      }
    })
  }
}
