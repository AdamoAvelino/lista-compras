<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary w-100 shadow">
    <div class="collapse navbar-collapse" id="navbarTop">
    </div>
    <button class='btn btn-warning btn-sm' v-on:click.prevent="logout">
      <div v-if="!deslogando">
        <i class="fa fa-power-off mr-2"></i>
        Logaout
      </div>
      <div class="spinner-border spinner-border-sm text-dark" role="status" v-else>
        <span class="sr-only">Loading...</span>
      </div>
    </button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    deslogando: false
  }),
  methods: {
    ...mapActions('auth', ['ActionRemoveUser']),
    async logout () {
      this.deslogando = true
      try {
        await this.$firebase.auth().signOut()
        await this.ActionRemoveUser()
        this.$router.push({ name: 'login' })
      } catch (erro) {
        console.log(erro)
      }
      this.deslogando = false
    }
  }

}
</script>
