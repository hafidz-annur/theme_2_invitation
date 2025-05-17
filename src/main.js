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
    primary: "#D79F6B", // Gold sebagai warna utama
    secondary: "#B8860B", // Gold tua untuk aksen
    background: "#FFFFFF", // Latar putih default
    surface: "#F8F8F8", // Permukaan abu terang
    text: "#000000", // Teks utama hitam
    success: "#28a745", // Hijau (bisa diganti dengan gold-hijau jika diinginkan)
    warning: "#ffc107", // Kuning terang
    error: "#dc3545", // Merah terang
    info: "#17a2b8", // Biru terang
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
