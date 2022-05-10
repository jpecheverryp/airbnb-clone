<template>
  <div style="text-align: center">
    <img src="https://cdn.custom-cursor.com/cursors/chrome_dino_t-rex_455.png" alt="">
    <br />
    <br />
    <h1>ERROR</h1>
    {{error.message}} - {{error.statusCode}}
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Error'
      }
    },
    props: {
      error: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>