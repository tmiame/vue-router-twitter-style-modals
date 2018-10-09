import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import TweetModal from './views/TweetModal.vue'
import TweetSingle from './views/TweetSingle.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        twModalView: true
      }
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/:userId',
      name: 'user',
      component: User,
      meta: {
        twModalView: true
      }
    },
    {
      path: '/:userId/tweet/:id',
      name: 'userTweet',
      alias: 'tweet',
      components: {
        default: TweetSingle,
        modal: false
      },
      beforeEnter: (to, from, next) => {
        // Default view
        if (from.matched[0] && from.matched[0].components.default) {
          to.matched[0].components.default = from.matched[0].components.default
        }
        // Modal view
        if (from.name !== null && from.meta.twModalView) {
          to.matched[0].components.modal = TweetModal
        }
        next()
      }
    },
    {
      path: '/tweet/:id',
      name: 'tweet',
      components: {
        default: TweetSingle,
        modal: false
      },
      beforeEnter: (to, from, next) => {
        // Default view
        if (from.matched[0] && from.matched[0].components.default) {
          to.matched[0].components.default = from.matched[0].components.default
        }
        // Modal view
        if (from.name !== null && from.meta.twModalView) {
          to.matched[0].components.modal = TweetModal
        }
        next()
      }
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
