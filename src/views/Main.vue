<template>
  <div>
    <section>
      <div class="layout">
        <div>
          <h1>{{ $t("main.title") }}</h1>
          <p>{{ $t("main.text1") }}</p>
          <p>{{ $t("main.text2") }}</p>
        </div>
        <template v-if="isReady">
          <Account class="block" />
          <Sender />
        </template>
        <div v-else>{{ $t("main.wait") }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import robonomics from "../robonomics";
import Account from "../components/Account.vue";
import Sender from "../components/Sender.vue";

export default {
  components: {
    Account,
    Sender
  },
  data() {
    return {
      isReady: false
    };
  },
  created() {
    robonomics.onReady(() => {
      this.isReady = true;
    });
  }
};
</script>
