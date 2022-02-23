<template>
  <div>
    <section>
      <div class="layout">
        <div>
          <h1>Dear participant!</h1>
          <p>
            You are invited to take this test for lesson 2, which is dedicated
            to the first chapter of the Robonomics Whitepaper 2022 “At the
            Intersection of Cybernetics and Economics”. The test is designed to
            encourage you to reflect on the ideas covered in the lesson, and you
            will not find answers to some questions directly in the whitepaper.
            You will need to think about them by yourself , so be careful.
          </p>
          <p>
            To pass the test, you need to score 10 correct answers out of 17 
            (60%, the standard value in academic practice). Correct answers and 
            a list of those who successfully completed the lesson will be published 
            on the final day of the school.
          </p>
        </div>
        <template v-if="isReady">
          <Account class="block" />
          <Sender />
        </template>
        <div v-else>Please wait</div>
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
