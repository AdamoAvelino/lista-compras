<template>
  <div class="container-fluid">
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'home',

  methods: {
    ...mapActions('global', ['ActionSetLoading'])
  },

  beforeMount () {
    this.ActionSetLoading(true)
  },

  mounted () {
    setTimeout(() => {
      this.ActionSetLoading(false)
    }, 1000)
  }
}
</script>
