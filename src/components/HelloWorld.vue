<template>
  <div>
    <h1 class="title">"Tweets"</h1>
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
        <div class="tweet" v-for="(tweet, index) of tweets" v-bind:key="index">
          <router-link v-bind:to="{
            name: 'userTweet',
            params: { id: tweet.id, userId: tweet.userId }
          }">
            <div class="tweet_avatar tweet_avatar--circle" v-if="tweet.userColor" v-bind:style="{backgroundColor: tweet.userColor}" />
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
    </div>
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'

export default {
  name: 'tweets',
  data: () => ({
    tweets: []
  }),
  methods: {
    getTweets () {
      this.tweets = store.getTweets()
    }
  },
  created () {
    if (store.state.fetched) {
      this.getTweets()
    }
    ee.on('api-fetch', this.getTweets)
  }
}
</script>
