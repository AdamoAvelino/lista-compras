export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChanckName: "home" */ '../../views/principal/Home'),
    meta: {
      title: 'Home',
      showMenu: true,
      icon: 'home'
    }
  }
]
