<template>
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
                name: 'userTweets',
                params: { userId: tweet.userId }
              }"
              v-text="tweet.userName"
              v-on:click.stop />
            <div class="tweet_media" v-if="tweet.media" v-bind:data-color="tweet.media">
              {{ tweet.media }}
            </div>
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
                name: 'userTweets',
                params: { userId: tweet.userId }
              }"
              v-text="tweet.userName"
              v-on:click.stop />
            <div class="tweet_media" v-if="tweet.media" v-bind:data-color="tweet.media">
              {{ tweet.media }}
            </div>
            <div class="tweet_text u-hover" v-if="tweet.text" v-text="tweet.text" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tweetsComponent',
  props: {
    tweets: {
      type: Array
    }
  }
}
</script>
