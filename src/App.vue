<template>
  <div class="app">
    <div class="app-title">
      <div class="layout flex">
        <h1>
          {{ $t("header.title") }} &lt;
          <a href="https://robonomics.academy/" target="_blank">
            {{ $t("header.link") }}
          </a>
        </h1>

        <select v-model="locale">
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import AccountManager from "robonomics-interface/dist/accountManagerUi";
import robonomics from "./robonomics";
import config from "./config";

export default {
  name: "App",
  async created() {
    await robonomics.run();
    await AccountManager.initPlugin(robonomics.accountManager.keyring, {
      isDevelopment: config.isDevelopmentAccounts
    });
  },
  data() {
    return {
      locale: this.$i18n.locale
    };
  },
  watch: {
    locale(newValue) {
      this.$i18n.locale = newValue;
      localStorage.setItem("locale", newValue);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Yeseva+One&display=swap");

/* + RESET */
* {
  margin: 0;
  padding: 0;
  outline: 0;
  background: transparent;
  vertical-align: baseline;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  border: 0;
}
html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
main {
  display: block;
}
nav ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input,
select {
  vertical-align: middle;
}
sup {
  vertical-align: super;
}
sub {
  vertical-align: sub;
}
/* - RESET */

body {
  --color-yellow: #f4e282;
  --color-brown: #534e4b;
  --color-green: rgb(130, 201, 0);
  --color-blue: #2949d3;
  --color-black: #111;
  --color-orange: #f87306;
  --space: 20px;

  --duration: 0.2s;
  --delay: 2s;

  font-family: "Roboto Mono", monospace;
  color: var(--color-black);
  background-color: #fff;
  font-size: 18px;
  line-height: 1.5;
}

body *::selection {
  color: var(--color-black);
  background-color: var(--color-yellow);
}

.app-title {
  font-family: "Yeseva One", cursive;
  background: var(--color-yellow);
  padding-top: var(--space);
  padding-bottom: var(--space);
}

.app-title a {
  color: var(--color-black);
  background: #fce043;
  text-decoration: none;
}

.app-title,
.app-title h1 {
  font-size: 24px !important;
}

.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: var(--space);
  padding-right: var(--space);
}

.flex {
  display: flex;
  justify-content: space-between;
}
.flex h1 {
  flex: 0 1 auto;
}
.flex select {
  flex: 0 1 auto;
}

section {
  padding-top: calc(var(--space) * 2);
  padding-bottom: calc(var(--space) * 2);
}

section.dark {
  background-color: var(--color-black);
  color: var(--color-green);
}

section.dark a {
  color: #fff;
}

.text-typing {
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  width: 23ch;
  border-right: 3px solid var(--color-green);
  line-height: 1;
  animation: FadeIn 0.4s forwards, typing 2s steps(23),
    blinkLine 0.5s step-end infinite alternate;
  animation-delay: 0.5s;
}

@keyframes FadeIn {
  to {
    visibility: visible;
    opacity: 1;
  }
}
@keyframes blinkLine {
  50% {
    border-color: transparent;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}

h2 {
  margin-bottom: calc(var(--space) * 2);
}

h3 {
  background-color: var(--color-yellow);
}

p,
ol,
h4 {
  margin-bottom: var(--space);
}

li {
  margin-bottom: calc(var(--space) * 0.5);
}

ol {
  padding-left: 30px;
}

a {
  color: var(--color-blue);
}

.animate-show-up {
  visibility: hidden;
  opacity: 0;
  transform: translateY(5%);

  animation-name: FadeIn, FloatYUp;
  animation-timing-function: linear;
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  animation-duration: var(--duration);
}

@keyframes FloatYUp {
  to {
    transform: translateY(0);
  }
}

.animate-show-up.animate-show-up-1 {
  animation-delay: calc((var(--delay) + var(--duration)) * 1);
}
.animate-show-up-2 {
  animation-delay: calc((var(--delay) + var(--duration)) * 2);
}
.animate-show-up-3 {
  animation-delay: calc((var(--delay) + var(--duration)) * 3);
}
.animate-show-up-4 {
  animation-delay: calc((var(--delay) + var(--duration)) * 4);
}
.animate-show-up-5 {
  animation-delay: calc((var(--delay) + var(--duration)) * 5);
}
.animate-show-up-6 {
  animation-delay: calc((var(--delay) + var(--duration)) * 6);
}

@media screen and (max-width: 420px) {
  h2 {
    font-size: 90%;
  }
}

input,
button,
select {
  padding: 10px;
  font-size: 1.5rem;
}
select option {
  font-size: 1rem;
}
.block {
  margin-bottom: 40px;
}
</style>
