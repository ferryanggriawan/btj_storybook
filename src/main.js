import Vue from "vue"
import App from "./App.vue"

import "../dist/style.css"

import BtjCompoenents from "../dist/btj_storybook.common"

Vue.config.productionTip = false

Vue.use(BtjCompoenents)

new Vue({
  render: (h) => h(App),
}).$mount("#app")
