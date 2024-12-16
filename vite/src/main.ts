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
  bootstrap() {
    console.log(`[${appName}] bootstrap`)
  },
  mount(props) {
    console.log(`[${appName}] mount`, props)
    start(props)
  },
  update(props) {
    console.log(`[${appName}] update`, props)
  },
  unmount() {
    console.log(`[${appName}] unmount`)
    app.unmount()
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  start()
}
