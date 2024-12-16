import { QiankunProps, qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp, type App as TApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import "./style.css";

let app: TApp<Element>;

async function start({ container }: QiankunProps = {}) {
  app = createApp(App)
  app.use(router)

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
