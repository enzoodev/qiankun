const routes = [
  {
    path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About'), meta: {
      title: 'Meu title de meta',
      subtitle: 'Meu subtitle de meta',
  } },
];

export default routes;
