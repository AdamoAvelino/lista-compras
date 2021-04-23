export default [
  {
    name: 'mercado',
    path: '/mercado',
    component: () => import(/* webpackChanckName: 'mercado' */ '../../views/mercado/Lista.vue'),
    meta: {
      title: 'Mercado',
      showMenu: true,
      icon: 'shopping-bag'
    }
  }
]
