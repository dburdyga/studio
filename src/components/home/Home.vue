<template>
  <div class="home">
    <img alt="logo" src="../../assets/lightbulb.svg">
    <section>
      <h1>We are Vue.js & Node.js web development agency based in Wrocław</h1>
      <p>We excel at building modern web applications, providing full-stack
        JavaScript and UI/UX design services for enterprises, companies and startups.</p>
      <a>Estimate project</a>
      <button>or contact us!</button>
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
          <div class="card__content">
            <h3>Vue.js front‑end</h3>
            <p class="article_text">We are experts at creating beautiful and responsive front‑end
              applications using Vue.js.</p>
            <a class="btn--green">Read more</a>
            <button class="link--green">or contact us!</button>
          </div>
        </article>
      </div>
      <div class="card">
        <article>
          <div>
            <img src="">
          </div>
          <div class="card__content">
            <h3>Node.js back‑end</h3>
            <p class="article_text">Need a powerful API? We make blazing fast Koa.js
              applications backed by PostgreSQL databases.</p>
            <a class="btn--blue">Read more</a>
            <button class="link--blue">or contact us!</button>
          </div>
        </article>
      </div>
      <div class="card">
        <article>
          <div>
            <img src="">
          </div>
          <div class="card__content">
            <h3>UI & UX design</h3>
            <p class="article_text">We love to design responsive and pixel-perfect user interfaces
              with top-notch user experience.</p>
            <a class="btn--red">Read more</a>
            <button class="link--red">or contact us!</button>
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
      <a class="btn--color">Estimate project</a>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',

};
</script>

<style lang="scss">
  @import '../../styles/variables';
  @import '../../styles/mixins';
  
  h1 {
    font-size: 32px;
    line-height: 48px;
  }
  p {
    color: $grey;
  }
  .card {
    padding: 48px 16px;
    border-radius: 8px;
    background-color: $white;
    box-shadow: 0 12px 25px 0 rgba(54,53,55,.05);
    flex: 0 0 28%;
    max-width: 28%;
    color: $black;
    margin-left: 10px;
    margin-right: 10px;
  }
  .card__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  article {
    padding-right: 24px;
    padding-left: 24px;
  }
  .landing__services {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  a {
    margin: 4px;
    background-color: $pink;
    box-shadow: 0 2px 12px 0 rgba(248,24,142,.3);
    padding: 7px 24px;
    border-radius: 20px;
    border: 1px solid transparent;
    white-space: nowrap;
    color: $white;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  button {
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    color: $white;
    font-size: 16px;
  }
  .article_text {
    color: $grey;
  }
  .btn--color {
    box-shadow: 0 2px 12px 0 rgba(104,75,198,.3);
    border: 0;
    background-image: -webkit-linear-gradient(316deg,#b73dc7,#a740c4 8%,#714bbb 38%,
      #5358cf 66%,#3f64d4 84%,#2b69dd);
    background-image: linear-gradient(-226deg,#b73dc7,#a740c4 8%,#714bbb 38%,
      #5358cf 66%,#3f64d4 84%,#2b69dd);
    color: $white;
  }
  .link--green {
    color: $green;
  }
  .link--blue {
    color: $blue;
  }
  .link--red{
    color: $red;
  }
  .btn--green {
    background-color: $green;
    box-shadow: 0 2px 12px 0 rgba(46,196,182,.3);
    border-color: $green;
  }
  .btn--blue {
    background-color: $blue;
    box-shadow: 0 2px 12px 0 rgba(24,105,229,.3);
    border-color: $blue;
  }
  .btn--red {
    background-color: $red;
    box-shadow: 0 2px 12px 0 rgba(228,109,117,.3);
    border-color: $red;
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
    flex-flow: row wrap;
  }
</style>
