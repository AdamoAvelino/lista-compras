export default [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChankName: "login" */ '../../views/auth/Login'),
    meta: {
      showMenu: false,
      title: 'login',
      icon: 'home'
    }
  }
]
