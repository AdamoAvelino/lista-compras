<template>
  <div v-if="!loading"
  class='container-fluid min-vh-100 d-flex flex-column align-items-center'>
  <div class="text-white text-center p-5">
    <i class="fa fa-list-alt text-warning h1" aria-hidden="true"></i>
    <h3>Monte sua lista de compras</h3>
    <p class="mb-0">Esqueça a cardeneta e utilize seu celuar</p>
    <small>É mais simples e o meio ambiente agradece</small>
  </div>
    <div class="col-sm-4">
      <div class="card" id='login'>
        <div class="card-header bg-primary text-white text-center">
          <h5>Login</h5>
        </div>
          <div class="card-body">
            <form v-on:submit.prevent="doLogin">
              <div class="form-group">
                <input
                required
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="E-mail">
              </div>
              <div class="form-group">
                <input
                required
                type="password"
                v-model="form.senha"
                class="form-control"
                placeholder="Senha">
              </div>
              <div class="form-group text-center">
                <button class="btn btn-primary btn-block">
                  <span v-if='!logando'>Entrar</span>
                  <div v-else class="spinner-border spinner-border-sm text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {

  data: () => ({
    logando: false,
    form: {
      email: 'adamo.avelino@gmail.com',
      senha: 'aav@1982'
    }
  }),

  methods: {
    ...mapActions('global', ['ActionSetLoading']),
    ...mapActions('auth', ['ActionSetUser']),
    async doLogin () {
      this.logando = true
      try {
        const { email, senha } = this.form
        const res = await this.$firebase.auth().signInWithEmailAndPassword(email, senha)
        if (res.user.uid) {
          this.ActionSetUser(res.user.uid)
          this.$router.push({ name: 'home' })
        }
      } catch (erro) {
        console.log('Não Autorizado')
      }
      this.logando = false
    }
  },

  computed: {
    ...mapState('global', ['loading'])
  }
}
</script>

<style scoped lang='scss'>
  #login {
    background-color: var(--gray-light);
  }
  .btn-primary {
    &:hover {
      background: var(--primary-dark);
    }
  }
</style>
