<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/project">Projects</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/estimate">Estimate project</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: url('../src/assets/layer1.svg') center 100% no-repeat;
  background-size: cover;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    color: #ffffff;
    text-decoration: none;
    &.router-link-exact-active {
      color: hsla(0,0%,100%,.4);
    }
  }
}
</style>
