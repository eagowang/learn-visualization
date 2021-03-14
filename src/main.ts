import { createApp } from 'vue';
import {
  ElButton,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElSpace,
  ElCard,
  ElHeader,
  ElContainer,
  ElMain,
  ElFooter,
} from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
const components = [
  ElButton,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElSpace,
  ElCard,
  ElHeader,
  ElContainer,
  ElMain,
  ElFooter,
];
components.forEach((component) => {
  app.component(component.name, component);
});
app.mount('#app');
