import { Quasar } from 'quasar';
import { QiankunProps, qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp, type App as TApp } from 'vue';
import App from './App.vue';
import { i18n } from "./lib/plugins/i18n";
import { quasarOptions } from './lib/plugins/quasar';
import { router } from './router';

let app: TApp<Element>;

async function start({ container }: QiankunProps = {}) {
  app = createApp(App)
  app.use(router)
  app.use(Quasar, quasarOptions)
  app.use(i18n)

  const selector = '#app'
  const rootContainer = container
    ? container.querySelector(selector)
    : document.querySelector(selector)
  
  if (rootContainer) {
    app.mount(rootContainer)
  }
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    start(props)
  },
  update() {},
  unmount() {
    app.unmount()
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  start()
}
