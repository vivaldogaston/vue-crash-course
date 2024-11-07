import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "primeicons/primeicons.css";

const app = createApp(App).use(router).mount("#app");
//app.
