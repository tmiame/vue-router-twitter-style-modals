<template>
  <div class="page">
    <h1 class="title">"{{ title }} Tweets"</h1>
    <div class="nestedRoutes">
      <h2 class="nestedRoutes_title">NestedRoutes</h2>
      <div class="nestedRoutes_links">
        <router-link v-bind:to="`/${$route.params.userId}`" class="u-hover">Tweets</router-link>
        <router-link v-bind:to="`/${$route.params.userId}/media`" class="u-hover">Media</router-link>
        <router-link v-bind:to="`/${$route.params.userId}/profile`" class="u-hover">profile</router-link>
      </div>
      <div class="nestedRoutes_view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data: () => ({
    title: false
  }),
  methods: {
    setTitle () {
      this.title = this.$route.params.userId
    }
  },
  created () {
    this.setTitle()
  }
}
</script>
