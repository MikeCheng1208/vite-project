import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes } from './router';
import { piniaInstall } from '@/modules/pinia.js';

import 'virtual:svg-icons-register';
import 'virtual:windi.css';

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, ctx => {
  piniaInstall(ctx);
});
