<template>
  <div id="app">
    <div id="nav">
      <div>
        <img class="main__logo" src="../src/assets/main_logo.svg">
      </div>
      <div>
        <router-link class="navbar__link" to="/">Home</router-link>
        <router-link class="navbar__link" to="/services">Services</router-link>
        <router-link class="navbar__link" to="/project">Projects</router-link>
        <router-link class="navbar__link" to="/blog">Blog</router-link>
        <router-link class="navbar__link_button" to="/estimate">Estimate project</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './styles/variables';
  @import './styles/mixins';

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  background: url('../src/assets/layer1.svg') center 100% no-repeat;
  background-size: cover;
  height: 100%;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  }
  .navbar__link {
    background: none;
    border: none;
    box-shadow: none;
    &:hover {
      color: $grey;
      text-decoration: underline;
    }
  }
  .navbar__link_button {
    border: 1px solid;
    background: none;
    box-shadow: none;
  }
  /*.navbar__link--active {*/
  /*  color: hsla(0,0%,100%,.4);*/
  /*  cursor: default;*/
  /*}*/
</style>
