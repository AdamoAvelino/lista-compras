<template>
<div>
  <header-page-component title='Listas de compra'>
    <div slot='content-right'>
        <button class='btn btn-primary btn-sm' v-on:click.prevent="createList">
        <i class="fa fa-plus-circle mr-1" aria-hidden="true"></i>
        Adicinar lista
      </button>
    </div>
  </header-page-component>
</div>
</template>
<script>
import HeaderPageComponent from '../../components/HeaderPageComponet'

export default {
  components: {
    HeaderPageComponent
  },

  methods: {
    createList () {
      this.$router.push({ name: 'criarlista' })
    }
  }

}
</script>
