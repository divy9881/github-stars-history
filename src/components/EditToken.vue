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
    return 'Edit Github Token';
  }

  private prompt() {
    this.$buefy.dialog.prompt({
      message: 'Please input your github access token',
      inputAttrs: {
        placeholder: 'e.g. c50a5c173668a61a7dfe6cca80eb95754be7a079',
        maxlength: 40,
      },
      trapFocus: true,
      onConfirm: (value) => {
        this.$buefy.toast.open(`Your token is: ${value}`);
        window.localStorage.setItem('PersonalGithubToken', value.trim());
      },
    });
  }
}
</script>
