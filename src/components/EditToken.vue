<template>
  <section>
    <div class="buttons">
      <button class="button" @click="prompt">{{showAction()}}</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EditToken extends Vue {
  private showAction() {
    const personalToken = window.localStorage.getItem('PersonalGithubToken');
    if (personalToken !== null) {
      return personalToken.slice(0, 4) + '**';
    }
    return 'Edit access token';
  }

  private prompt() {
    const message = `
       <p>Star-history use GitHub API to retrieve repository metadata. You may see this page because you have hit the <a href="https://developer.github.com/v3/#rate-limiting">GitHub API rate limit</a>. </p>
       <br>
       <p>Star-history will need your <a href="https://github.com/settings/tokens">personal access token</a> to unlimit it. If you don't already have one, <a href="https://github.com/settings/tokens/new">create one</a>, and paste it into the textbox below (no scope to your personal data is needed)</p>
       <br>
       <label class="label">access token (will be stored in your local storage)</label>`;
    this.$buefy.dialog.prompt({
      title: 'Edit GitHub access token',
      confirmText: 'Save',
      message,
      inputAttrs: {
        value: window.localStorage.getItem('PersonalGithubToken'),
        maxlength: 50,
      },
      trapFocus: true,
      onConfirm: (value) => {
        this.$buefy.toast.open(`Your token is: ${value}`);
        window.localStorage.setItem('PersonalGithubToken', value.trim());
        this.$forceUpdate();
      },
    });
  }
}
</script>
