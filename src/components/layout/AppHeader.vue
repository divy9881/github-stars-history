<template>
  <nav class="navbar is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">

    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="../../assets/logo_transparent.png" alt="Github Stars History" class="logo"/>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <span class="navbar-item is-4 has-text-weight-bold">
            GitHub stars history and charts
          </span>
          <a class="navbar-item" href="https://github.com/casbin/github-stars-history" target="_blank">
            <span class="button">
              <b-icon icon="github" pack="fab"/>
            </span>
          </a>
          <div class="navbar-item">
            <div class="paragraph--padding-top">
              <a class="github-button"
                 href="https://github.com/casbin/github-stars-history"
                 data-size="large"
                 data-show-count="true"
                 aria-label="Star casbin/github-stars-history on GitHub">
                Star
              </a>
            </div>
          </div>
          <edit-token></edit-token>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import EditToken from '@/components/EditToken.vue';

  @Component({
    components: {
      EditToken,
    },
  })
  export default class AppHeader extends Vue {
  }
</script>

<style scoped>
  .paragraph--padding-top {
    padding-top: 6px;
  }

  .logo {
    max-height: 2.5rem;
  }
</style>
