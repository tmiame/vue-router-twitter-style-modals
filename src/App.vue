<template>
  <div id="app">
    <div class="header">
      <router-link to="/" class="header_logo">
        <img src="./assets/logo.png">
      </router-link>
      <div class="header_nav">
        <router-link to="/" class="u-hover">Home</router-link>
        <router-link to="/users" class="u-hover">Users</router-link>
      </div>
      <div class="header_links">
        <a class="u-hover" href="https://github.com/tmiame/vue-router-twitter-style-modals">Github</a>
        <a class="u-hover" href="https://twitter.com/tmiame/">Twitter</a>
      </div>
    </div>
    <router-view class="app_view_default" />
    <router-view class="app_view_modal" name="modal" />
  </div>
</template>

<style lang="scss">
* {
  -webkit-tap-highlight-color: rgba(#42b983, 0.1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ebf4ec;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  @media (min-width: 1000px) { font-size: 15px; }
  @media (max-width: 780px) { font-size: 2vw; }
  @media (max-width: 580px) { font-size: 3vw; }
}
#app {
  padding-bottom: 10vmin;
}

.u-hover {
  &:hover {
    color: #42b983 !important;
    transition: color 200ms ease !important;
  }
}

.title {
  line-height: 1;
  font-size: 6vmin;
  padding: 6vmin 0;
  position: relative;
  left: -0.1em;
}

.subtitle {
  white-space: pre;
  word-spacing: normal;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  line-height: 1.5;
  font-size: 110%;
  padding: 0.25em 0.5em;
  background-color: rgba(#42b983, 0.2);
  color: darken(#42b983, 15%);
  border-radius: 5px;
  display: inline-block;
}

.title--cover {
  line-height: 1;
  padding: 6vmin 0;
  text-align: center;
  background-color: #42b983;
  color: #ffffff;
  left: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(mix(#2c3e50, #000000, 30%), 0.85);
  z-index: 99999;
  padding: 3vmax;
  cursor: zoom-out;
}
.modal_conatiner {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  cursor: auto;
  overflow: hidden;
}

.grid {
  @media (min-width: 1000px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    > div {
      min-width: 48.5%;
      margin-right: 3%;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 1000px) {
    > div {
      margin-bottom: 10%;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.tweets {
  position: relative;
}
.tweet {
  padding: 6vmin 4vmin;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  margin-top: 3vmin;
  &:first-child { margin-top: 0; }
  > a {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &--user > a {
    align-items: center;
  }
}
.tweet_avatar {
  position: relative;
  min-width: 5vw;
  min-height: 5vw;
  border-radius: 5%;
  margin-right: 2em;
  &--circle {
    border-radius: 50%;
  }
}
.tweet_content {
  position: relative;
}
.tweet_name {
  font-weight: 900;
  margin-bottom: 0.5em;
  font-size: 125%;
  display: block;
}
.tweet_text {
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.5;
}
</style>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 99;
  padding: 3vmax;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header_logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2em;
  img {
    position: relative;
    top: (3em * 0.05);
    width: 3em;
    height: 3em;
    transform: translateZ(0);
  }
  &:hover {
    opacity: 0.3;
    transition: opacity 200ms ease !important;
  }
}
.header_links,
.header_nav {
  a {
    margin-right: 0.7em;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:after {
      content: '|';
      padding-left: 0.7em;
      color: rgba(#2c3e50, 0.2) !important;
    }
    &:last-child:after {
      display: none;
    }
  }
}
.header_links {
  margin-left: auto;
}
.app_view_default {
  padding: 0 3vmax;
}
</style>
