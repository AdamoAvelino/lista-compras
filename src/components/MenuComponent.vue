<template>
<div class='row menu-nav min-vh-100'>
  <div class="col-12">
    <header class='header-menu text-white'>
      <p>
        <i class="fa fa-cart-plus pt-3 text-warning" aria-hidden="true"></i>
         Lista de Compra
         <small>Controle de compras mensais</small>
      </p>
    </header>

    <nav class="nav flex-column">
      <router-link
      :key="key"
      v-for="(route, key) in routes"
      class='nav-link'
      exact
      exact-active-class="active"
      :to="{ name: route.name }"
      >
      <i class="fa" :class="`fa-${route.meta.icon}`" aria-hidden="true"></i>
      {{ route.meta.title }}
      </router-link>
    </nav>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    routes () {
      return this.$router.options.routes.filter((route) => {
        return route.meta.showMenu
      })
    }
  }

}
</script>

<style scoped lang='scss'>
.menu-nav {
  background: var(--dark);
  a {
    color: var(--primary);
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    font-size: 0.9rem;
    &.active {
      color: var(--primary-dark)
    }
    &:hover{
      color: var(--white);
      background: var(--primary);
    }

  }

  .nav{
    margin: auto -15px;
    background: var(--gray-medium);
  }

  .nav a .fa{
    margin-right: 5px;
    color: var(--warning);
    text-shadow: -1px 1px 1px rgba(0,0,0, 0.2)
  }
  .header-menu {
    border-bottom: solid 1px rgba(0,0,0,0.1);

  }
}

</style>
