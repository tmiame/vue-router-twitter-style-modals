<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
import store from '@/store.js'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    store.fetch()
  }
}
</script>
