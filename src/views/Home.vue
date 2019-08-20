<template>
  <div class="home">
    <img alt="logo" src="../assets/lightbulb.svg">
    <HelloWorld msg="We are Vue.js & Node.js web development agency based in Wrocław"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
