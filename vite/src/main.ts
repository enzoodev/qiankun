import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './public-path';
import routes from './router';

let router: any = null;
let instance: any = null;
let history: any = null;

function render(props: any = {}) {
  const { container } = props;
  history = createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'
  );
  
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.mount(
    container ? container.querySelector('#app') : '#app'
  );
}

// Standalone mode
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}

export async function mount(props: any) {
  render(props);
}

export async function unmount() {
  if (instance) {
    instance.unmount();
    if (instance._container) {
      instance._container.innerHTML = '';
    }
    instance = null;
    router = null;
    history?.destroy();
  }
}

export default {
  bootstrap,
  mount,
  unmount,
};