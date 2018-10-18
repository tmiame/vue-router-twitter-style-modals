<template>
  <div class="page">
    <h1 class="title">"Users"</h1>
    <div class="tweets" v-if="users && users.length">
      <div class="tweet tweet--user u-hover" v-for="(user, index) of users" v-bind:key="index">
        <router-link v-bind:to="{
          name: 'userTweets',
          params: { userId: user.userId }
        }">
          <div class="tweet_avatar" v-if="user.userColor" v-bind:style="{backgroundColor: user.userColor}" />
          <div class="tweet_name" v-text="user.userName" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'

export default {
  name: 'users',
  data: () => ({
    users: []
  }),
  methods: {
    getUsers () {
      this.users = store.getUsers()
    }
  },
  created () {
    ee.on('api-fetch', this.getUsers)

    if (!store.state.fetched) {
      store.fetch()
    } else {
      this.getUsers()
    }
  }
}
</script>
