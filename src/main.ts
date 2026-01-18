import 'vant/lib/index.css'
import 'tailwindcss/tailwind.css'
import '@vant/touch-emulator'
import 'lib-flexible'

import mitt from 'mitt'
import VConsole from 'vconsole'
import { Component, createApp } from 'vue'

import App from './App.vue'
import directives from './directives'
import router from './router'
import store from './stores'

const app = createApp(App)

const components = import.meta.glob('./components/*/index.vue', {
  import: 'default',
  eager: true
})
Object.values(components as Component).forEach(component => {
  app.component(component.name, component)
})

app.config.globalProperties.$mitt = new (mitt as any)()

if (import.meta.env.MODE !== 'production') {
  new VConsole()
}

app.use(router).use(store).use(directives).mount('#app')
