export default [
  {
    name: 'lista',
    path: '/lista',
    component: () => import(/* webpackChankName: 'lista' */ '../../views/lista/Lista.vue'),
    meta: {
      title: 'Lista de Compras',
      showMenu: true,
      icon: 'list'
    }
  },
  {
    name: 'criarlista',
    path: '/criarlista',
    component: () => import(/* webpackChanckName: 'crialista' */ '../../views/lista/Criar.vue'),
    meta: {
      title: 'Criar Lista',
      showMenu: false,
      icon: ''
    }
  }
]
