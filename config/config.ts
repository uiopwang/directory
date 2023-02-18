import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/console/new/directory', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
