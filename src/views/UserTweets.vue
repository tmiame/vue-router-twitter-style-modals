<template>
  <div class="page">
    <TweetsComponent v-bind:tweets="items" />
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'
import TweetsComponent from '@/components/Tweets'

export default {
  name: 'userTweets',
  data: () => ({
    title: false,
    items: []
  }),
  components: {
    TweetsComponent
  },
  methods: {
    getTweets () {
      const userId = this.$route.params.userId
      const user = store.getRefineUser(userId)

      if (!user) {
        this.$router.replace({ name: 'error' })
      }

      this.title = this.$route.params.userId
      this.items = store.getRefineUserTweets(userId)
    }
  },
  created () {
    ee.on('api-fetch', this.getTweets)

    if (!store.state.fetched) {
      store.fetch()
    } else {
      this.getTweets()
    }
  }
}
</script>
