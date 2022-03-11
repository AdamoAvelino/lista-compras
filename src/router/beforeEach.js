import store from '../store'
export default async (to, from, next) => {
  try {
    const isLoged = await store.getters['auth/user']
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
