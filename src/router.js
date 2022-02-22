import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./views/Main";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    }
  ]
});

export default router;
