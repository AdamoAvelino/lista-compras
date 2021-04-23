<template>
  <div class="row mt-2">
    <div class="col-sm-3">
      <h1 class='title-page text-white'>{{ title }}</h1>
    </div>
    <div class="col-sm-9 d-flex justify-content-end">
      <slot name='content-right'></slot>
    </div>
    <div class="col-sm-12">
      <hr class='bg-dark'>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
