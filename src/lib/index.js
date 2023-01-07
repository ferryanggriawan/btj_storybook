import Button from "./button/button.vue"

const BtjCompoenents = {}

BtjCompoenents.install = function (Vue, _) {
  Vue.component("my-button", Button)
}

export default BtjCompoenents
