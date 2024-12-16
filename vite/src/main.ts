import { QiankunProps, qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp, type App } from 'vue';
import Root from './App.vue';
import { router } from './router';
import "./style.css";

const appName = 'patrimonio'

let app: App;

async function start({ container }: QiankunProps = {}) {
  app = createApp(Root)
  app.use(router)
  app.mount(
    container
      ? container.querySelector(`#${appName}-app`)
      : document.querySelector(`#${appName}-app`)
  )
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
