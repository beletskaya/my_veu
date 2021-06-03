import Vue from 'vue'

const Button = Vue.component('Button', {
  render(creatElement) {
    return creatElement('button', this.$slots.default)
  }
})

export default Button
