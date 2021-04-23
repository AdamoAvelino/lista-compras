<template>
  <div class="loading">
    <div class="spinner-border text-primary" role="status">

      <span class="sr-only">Loading...</span>
    </div>
    <div class="text-white">Aguarde um momento ...</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
  .loading {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
  }
</style>
