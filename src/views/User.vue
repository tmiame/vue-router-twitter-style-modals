<template>
  <div class="page">
    <h1 class="title">"{{ $route.params.userId }} Tweets"</h1>
    <div class="grid">
      <div class="tweets" v-if="tweets && tweets.length">
        <h3 class="subtitle">"/tweet/:tweet_id"</h3>
        <div class="tweet" v-for="(tweet, index) of tweets" v-bind:key="index">
          <router-link v-bind:to="{
            name: 'tweet',
            params: { id: tweet.id }
          }">
            <div class="tweet_avatar" v-if="tweet.userColor" v-bind:style="{backgroundColor: tweet.userColor}" />
            <div class="tweet_content">
              <router-link
                class="tweet_name u-hover"
                v-if="tweet.userId && tweet.userName"
                v-bind:to="{
                  name: 'user',
                  params: { userId: tweet.userId }
                }"
                v-text="tweet.userName"
                v-on:click.stop />
              <div class="tweet_text u-hover" v-if="tweet.text" v-text="tweet.text" />
            </div>
          </router-link>
        </div>
      </div>
      <div class="tweets" v-if="tweets && tweets.length">
        <h3 class="subtitle">"/:organization/tweet/:tweet_id"</h3>
        <div class="tweet u-hover" v-for="(tweet, index) of tweets" v-bind:key="index">
          <router-link v-bind:to="{
            name: 'userTweet',
            params: { id: tweet.id, userId: tweet.userId }
          }">
            <div class="tweet_avatar" v-if="tweet.userColor" v-bind:style="{backgroundColor: tweet.userColor}" />
            <div class="tweet_content">
              <div class="tweet_name" v-if="tweet.userName" v-text="tweet.userName" />
              <div class="tweet_text" v-if="tweet.text" v-text="tweet.text" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'

export default {
  name: 'home',
  data: () => ({
    tweets: []
  }),
  methods: {
    getTweets () {
      const userId = this.$route.params.userId
      const user = store.getRefineUser(userId)

      if (!user) {
        this.$router.replace({ name: 'error' })
      }

      this.tweets = store.getRefineUserTweets(userId)
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
