<template>
  <div class="single">
    <div class="single_conatiner">
      <h1 class="title">"Tweet"</h1>
      <div class="tweetModal" v-if="tweet">
        <div class="tweet_avatar" v-if="tweet.userColor" v-bind:style="{backgroundColor: tweet.userColor}" />
        <div class="tweet_content">
          <router-link
            class="tweet_name u-hover"
            v-if="tweet.userId && tweet.userName"
            v-bind:to="{
              name: 'userTweets',
              params: { userId: tweet.userId }
            }"
            v-text="tweet.userName"
            v-on:click.stop />
          <div class="tweet_media" v-if="tweet.media" v-bind:data-color="tweet.media">
            {{ tweet.media }}
          </div>
          <div class="tweet_text" v-if="tweet.text" v-text="tweet.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'

export default {
  name: 'tweetSingle',
  data: () => ({
    tweet: false
  }),
  methods: {
    getTweets () {
      const userId = this.$route.params.userId
      const user = store.getRefineUser(userId)

      const tweetId = Number(this.$route.params.id)
      const tweet = store.getRefineTweet(tweetId)

      if (!tweet) {
        this.$router.replace({ name: 'error' })
      }

      if ((userId && !user) || (userId && tweet.userId !== user.userId)) {
        this.$router.replace({ name: 'error' })
      }

      this.tweet = tweet
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

<style scoped lang="scss">
.tweetModal {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6vmin 4vmin;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
}
</style>
