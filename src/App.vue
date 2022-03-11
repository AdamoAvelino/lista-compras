<template>
  <div id="app" class=''>
    <div class="container-fluid">
      <div v-if="showMenuBar">
        <div class="row">
          <div class="col-md-2">
            <menu-component></menu-component>
          </div>
          <div class="col-md-10 shadow mb-5">
            <div class="row">
              <menu-top-component></menu-top-component>
            </div>
              <spinner-component v-if="loading"/>
              <router-view v-show="!loading"/>
              <footer-component></footer-component>
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
import FooterComponent from './components/FooterComponent'
// window.localStorage.removeItem('vuex')
export default {
  components: { SpinnerComponent, MenuComponent, MenuTopComponent, FooterComponent },
  methods: {
    ...mapActions('global', ['ActionSetLoading'])
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
