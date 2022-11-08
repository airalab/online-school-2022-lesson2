<template>
  <div>
    <h3>{{ $t("sender.title") }}</h3>
    <Quiz @submit="send" :loader="loader" />

    <div class="msg" v-if="result">
      <h4>{{ $t("sender.subtitle") }}</h4>
      <ol>
        <li>
          <a
            :href="`https://robonomics.subscan.io/extrinsic/${result}`"
            target="_blank"
          >
            {{ $t("sender.explorer") }}
          </a>
        </li>
      </ol>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import robonomics from "../robonomics";
import Quiz from "./Quiz";

export default {
  components: {
    Quiz
  },
  data() {
    return {
      result: null,
      error: null,
      unsubscribe: null,
      loader: false
    };
  },
  unmounted() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
    async send(form) {
      this.error = "";
      this.result = "";
      this.loader = true;
      try {
        const tx = robonomics.datalog.write(
          JSON.stringify({ lesson: 2, data: form })
        );
        const resultTx = await robonomics.accountManager.signAndSend(tx);
        this.result = `${resultTx.blockNumber}-${resultTx.txIndex}`;
      } catch (error) {
        this.error = error.message;
      }
      this.loader = false;
    }
  }
};
</script>

<style scoped>
.msg {
  background-color: var(--color-yellow);
  padding: var(--space);
}

.msg a {
  font-weight: bold;
  color: var(--color-blue);
}
</style>
