<template>
  <section style="margin-bottom: 0">
    <h3>{{ $t("account.title") }}</h3>
    <p>
      <i>{{ $t("account.notice") }}</i>
    </p>
    <section>
      <select v-if="accounts.length > 1" v-model="account">
        <option
          v-for="(account, key) in accounts"
          :key="key"
          :value="account.address"
        >
          {{ account.meta.isTesting ? "dev" : "" }} {{ account.meta.name }}
        </option>
      </select>
      <p v-if="accounts.length > 0">
        <b class="account">{{ account }}</b>
        <br />
        <a
          class="copyLink"
          href="javascript:;"
          @click.prevent="clipboard(account, $event)"
        >
          <span class="copy">{{ $t("account.copy") }}</span>
          <span class="copied">{{ $t("account.copied") }}</span>
        </a>
      </p>
      <p v-if="accounts.length === 0">
        <i18n-t keypath="account.create.text">
          <template #link>
            <a href="https://polkadot.js.org/extension/" target="_blank">
              {{ $t("account.create.link") }}
            </a>
          </template>
        </i18n-t>
      </p>
    </section>
  </section>
</template>

<script>
import robonomics from "../robonomics";
import config from "../config";

export default {
  data() {
    return {
      account: null,
      accounts: [],
      devices: []
    };
  },
  async created() {
    const devices = await robonomics.rws.getDevices(config.subscription);
    if (!devices.isEmpty) {
      this.devices = devices.toArray().map((item) => item.toString());
    }
    robonomics.accountManager.onReady(() => {
      this.accounts = robonomics.accountManager.getAccounts();
      if (this.accounts.length) {
        this.account = this.accounts[0].address;
      }
    });
  },
  computed: {
    isRws() {
      if (this.devices.includes(this.account)) {
        return true;
      }
      return false;
    }
  },
  watch: {
    async account(address) {
      await robonomics.accountManager.selectAccountByAddress(address);
    },
    isRws() {
      if (this.isRws) {
        robonomics.accountManager.useSubscription(config.subscription);
      } else {
        robonomics.accountManager.useSubscription(false);
      }
    }
  },

  methods: {
    clipboard(text, event) {
      navigator.clipboard.writeText(text).then(function () {
        event.target.closest("a").classList.add("on");

        setTimeout(function () {
          event.target.closest("a").classList.remove("on");
        }, 5000);
      });
    }
  }
};
</script>

<style scoped>
.account {
  display: inline-block;
  max-width: 100%;
  overflow: auto;
}

.copyLink .copied {
  display: none;
}

.copyLink.on {
  color: var(--color-green);
  text-decoration: none;
  cursor: default;
}

.copyLink.on .copied {
  display: block;
}

.copyLink.on .copy {
  display: none;
}
</style>
