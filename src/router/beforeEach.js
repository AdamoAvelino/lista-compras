import store from '../store'
export default async (to, from, next) => {
  try {
    // store.dispatch('auth/ActionSetUser', '')
    const isLoged = await store.getters['auth/user']
    // console.log(to.name)
    // console.log(isLoged)
    // console.log((to.name !== 'login'))
    if (!isLoged && to.name !== 'login') {
      next({ name: 'login' })
    } else if (to.name === 'login' && isLoged) {
      next({ name: 'home' })
    } else {
      next()
    }
  } catch (erro) {
    console.log(erro)
    next()
  }
}
