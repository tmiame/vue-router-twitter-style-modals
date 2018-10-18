'use strict'

import ee from '@/event-emitter.js'
import api from '@/api/index.js'

export default {
  state: {
    fetched: false,
    users: [],
    tweets: []
  },

  async fetch () {
    const data = await api.getApiData()
    if (data && data.users && data.users.length) {
      this.setUsers(data.users)
    }
    if (data && data.tweets && data.tweets.length) {
      this.setTweets(data.tweets)
    }
    this.state.fetched = true
    ee.emit('api-fetch')
  },

  setTweets (tweets = []) {
    for (let i = 0; i < tweets.length; i++) {
      const userProfile = this.getRefineUser(tweets[i].userId)
      tweets[i] = Object.assign({}, tweets[i], userProfile)
    }
    this.state.tweets = tweets
  },

  setUsers (users = []) {
    this.state.users = users
  },

  getTweets () {
    return this.state.tweets
  },

  getUsers () {
    return this.state.users
  },

  getRefineUser (userId = false) {
    if (!userId || !this.state.users.length) {
      return false
    }
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].userId === userId) {
        return this.state.users[i]
      }
      if (this.state.users.length === i) {
        return false
      }
    }
  },

  getRefineTweet (tweetId = false) {
    if (!tweetId || !this.state.tweets.length) {
      return false
    }
    for (let i = 0; i < this.state.tweets.length; i++) {
      if (this.state.tweets[i].id === tweetId) {
        return this.state.tweets[i]
      }
      if (this.state.tweets.length === i) {
        return false
      }
    }
  },

  getRefineUserTweets (userId, type = false) {
    return this.state.tweets.filter(tweet => {
      if (type === 'media') {
        return (tweet.userId === userId && tweet.type === 'media')
      } else {
        return (tweet.userId === userId)
      }
    })
  }
}
