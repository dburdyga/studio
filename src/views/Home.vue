<template>
  <div class="home">
    <img alt="logo" src="../assets/lightbulb.svg">
    <section>
      <h1>We are Vue.js & Node.js web development agency based in Wrocław</h1>
      <p>We excel at building modern web applications, providing full-stack JavaScript and UI/UX design services for enterprises, companies and startups.</p>
      <button>Estimate project</button>
      <p>or contact us!</p>
    </section>
    <section class="services">
      <div class="landing__services">
        <h1>Services</h1>
        <p>What can we do for you?</p>
      </div>
      <div class="card">
        <article>
          <div>
            <img src="">
          </div>
          <div>
            <h3>Vue.js front‑end</h3>
            <p>We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
            <button>Read more</button>
            <p>or contact us!</p>
          </div>
        </article>
      </div>
      <div class="card">
        <article>
          <div>
            <img src="">
          </div>
          <div>
            <h3>Node.js back‑end</h3>
            <p>Need a powerful API? We make blazing fast Koa.js applications backed by PostgreSQL databases.</p>
            <button>Read more</button>
            <p>or contact us!</p>
          </div>
        </article>
      </div>
      <div class="card">
        <article>
          <div>
            <img src="">
          </div>
          <div>
            <h3>UI & UX design</h3>
            <p>We love to design responsive and pixel-perfect user interfaces with top-notch user experience.</p>
            <button>Read more</button>
            <p>or contact us!</p>
          </div>
        </article>
      </div>
    </section>
    <section class="testimonials">
      <h1>Testimonials</h1>
      <p>Meet the people who trusted us</p>
    </section>
    <section class="posts">
      <h1>Recent blog posts</h1>
      <p>We share our knowledge</p>
    </section>
    <section class="hiring">
      <h1>Want to work with us?</h1>
    </section>
  </div>
</template>

<style lang="scss">
  .card {
    padding: 48px 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 12px 25px 0 rgba(54,53,55,.05);
    -webkit-box-flex: 0;
    -ms-flex: 0 0 28%;
    flex: 0 0 28%;
    max-width: 28%;
    color: #000;
    padding-left: .9375rem;
    padding-right: .9375rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .landing__services {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  button {
    background-color: #f8188e;
    box-shadow: 0 2px 12px 0 rgba(248,24,142,.3);
    padding: 7px 24px;
    border-radius: 20px;
    border: 1px solid transparent;
    white-space: nowrap;
    color: white;
  }
  .services {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
</style>


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

