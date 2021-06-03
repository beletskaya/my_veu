// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*new Vue({
  el: '#new',
  data: {
    title: 'My test project',
    text: true,
    numbers: ['1', 22, 54, 87, 12],
    textColor: '#000000',
    details: [
      {
        id: 1,
        color: 'red'
      },
      {
        id: 2,
        color: 'blue'
      }
    ],
    methods: {
      changeColor: function (color) {
        alert('rwerwr')
        this.textColor = color
      }
    }
  }
})


new Vue({
  el: '#counter',
  data: {
    count: 0
  },
  methods: {
    addValue: function () {
      this.count += 1
    }
  }
})*/
