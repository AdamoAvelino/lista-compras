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
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(26,29,31);
    background: linear-gradient(0deg,rgba(0,0,0,0.98) 8%, rgba(0,0,0,0.88) 50%, rgba(0,0,0,0.98) 100%);
    color: var(--gray-light);
  }
</style>
