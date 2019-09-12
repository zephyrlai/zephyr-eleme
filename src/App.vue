<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue'

export default {
  name: 'app',
  components: {
    VHeader
  }
}
</script>


<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
