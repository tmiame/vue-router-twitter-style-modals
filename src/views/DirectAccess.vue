<template>
  <div class="page">
    <h1 class="title">"Direct access to tweet page"</h1>
    <TweetsComponent v-bind:tweets="items" />
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'
import TweetsComponent from '@/components/Tweets'

export default {
  name: 'directAccess',
  data: () => ({
    items: []
  }),
  components: {
    TweetsComponent
  },
  methods: {
    getTweets () {
      this.items = store.getTweets()
    }
  },
  created () {
    if (store.state.fetched) {
      this.getTweets()
    } else {
      store.fetch()
    }
    ee.on('api-fetch', this.getTweets)
  }
}
</script>
