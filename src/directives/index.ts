import type { App } from 'vue'

const modules = import.meta.glob('./*', { eager: true })

export default {
  install(app: App<Element>) {
    Object.keys(modules).forEach(key => {
      const name = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
      const module: any = modules[key]
      console.log(module, name)
      if (module.default) {
        app.directive(name, module.default)
      }
    })
  }
}
