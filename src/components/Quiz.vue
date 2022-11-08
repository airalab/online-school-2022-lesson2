<template>
  <section>
    <div v-for="(item, k) in questions" :key="k" class="answer">
      <h2>{{ $t("quiz.question") }} {{ k + 1 }}: {{ item.question }}</h2>
      <ul>
        <li v-for="(answer, k2) in item.answers" :key="k2">
          <label>
            <b>{{ k2 }})</b>&nbsp;
            <input
              :type="item.multiple ? `checkbox` : `radio`"
              v-model="form[k]"
              :value="k2"
            />
            {{ answer }}
          </label>
        </li>
      </ul>
    </div>
    <button v-if="loader" disabled style="font-style: italic">
      {{ $t("quiz.wait") }}
    </button>
    <button v-else @click="submit" :disabled="!isSubscription || error">
      {{ $t("quiz.sign") }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="tip" v-if="!isSubscription">
      <i18n-t keypath="quiz.subscription.text">
        <template #link>
          <a :href="discord" target="_blank">
            {{ $t("quiz.subscription.link") }}
          </a>
        </template>
      </i18n-t>
    </div>
  </section>
</template>

<script>
import robonomics from "../robonomics";
import questionsEn from "../questions.en.json";
import questionsRu from "../questions.ru.json";
import config from "../config";

export default {
  props: ["loader"],
  data() {
    return {
      form: {},
      isSubscription: false,
      discord: config.discord,
      error: false
    };
  },
  created() {
    setInterval(() => {
      this.isSubscription = robonomics.accountManager.subscription;
    }, 1000);
  },
  computed: {
    questions() {
      let questions = questionsEn;
      if (this.$i18n.locale === "ru") {
        questions = questionsRu;
      }
      return questions;
    }
  },
  watch: {
    questions: {
      handler() {
        const form = {};
        for (const key in this.questions) {
          form[key] = this.questions[key].multiple ? [] : null;
        }
        this.form = form;
      },
      immediate: true
    },
    form: {
      handler() {
        let error = false;
        for (const key in this.form) {
          if (this.form[key] === null || this.form[key].length === 0) {
            error = this.$t("quiz.error");
            break;
          }
        }
        this.error = error;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    submit() {
      if (!this.error) {
        this.$emit("submit", this.form);
      }
    }
  }
};
</script>

<style scoped>
.answer {
  margin-bottom: 40px;
}
h2 {
  margin-bottom: 15px;
}
li {
  list-style-type: none;
}

textarea,
input[type="text"] {
  width: 100%;
  border: 1px solid var(--color-black);
  padding: calc(var(--space) * 0.5);
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

textarea,
button,
input[type="text"] {
  margin-bottom: var(--space);
}

button {
  background-color: var(--color-green);
  border: 0;
  color: #fff;
  font-weight: bold;
  font-family: "Yeseva One", cursive;
  cursor: pointer;
  width: 100%;
}

button[disabled] {
  pointer-events: none;
  filter: grayscale(1);
  opacity: 0.7;
}

.tip {
  background-color: var(--color-black);
  color: var(--color-green);
  padding: var(--space);
  position: relative;
}

.tip a {
  color: #fff;
}

.tip:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--color-black);
  position: absolute;
  top: -10px;
  left: calc(50% - 10px);
}

.error {
  text-align: center;
  margin-bottom: var(--space);
  color: var(--color-orange);
  font-weight: bold;
}
</style>
