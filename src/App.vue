<template>
  <div id="app" class=''>
    <spinner-component v-if="loading"/>
    <div class="container-fluid" v-else>
      <div v-if="showMenuBar">
        <div class="row">
          <div class="col-md-2">
            <menu-component></menu-component>
          </div>
          <div class="col-md-10 shadow">
            <div class="row">
              <menu-top-component></menu-top-component>
            </div>
              <router-view/>
          </div>
        </div>
      </div>
      <div v-else>
            <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SpinnerComponent from './components/SpinnerComponent'
import MenuComponent from './components/MenuComponent'
import MenuTopComponent from './components/MenuTopComponent'

export default {
  components: { SpinnerComponent, MenuComponent, MenuTopComponent },
  methods: {
    ...mapActions('global', ['ActionSetLoading'])
  },

  beforeMount () {
    this.ActionSetLoading(true)
  },

  mounted () {
    this.ActionSetLoading(false)
  },

  computed: {
    ...mapState('global', ['loading']),
    showMenuBar () {
      return this.$route.name !== 'login'
    }
  }

}
</script>

<style lang="scss">

</style>
