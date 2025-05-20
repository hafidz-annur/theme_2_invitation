import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Countdown from "vue3-flip-countdown";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Vuetify imports
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default createVuetify({
  icons: {
    defaultSet: "mdi",
  },
});

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#2e7d32" /* Forest Green */,
    secondary: "#66bb6a" /* Light Green */,
    accent: "#a5d6a7" /* Mint Green */,
    background: "#e8f5e9" /* Light Mint */,
    text: "#1b5e20",
  },
};

// Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  components,
  directives,
});

// Styles
import "./assets/main.css";

AOS.init({
  duration: 1000,
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(Countdown);
app.mount("#app");
