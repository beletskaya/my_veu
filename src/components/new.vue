<template>
  <div id="new">
    <p>{{ title }}</p>
    <p v-if="text">First text</p>
    <p v-else>Second text</p>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <div v-for="detail in details" :key="detail.id">
      <p v-on:mouseover="changeColor" :style="{color: textColor}">{{ detail.color }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

new Vue({
  name: 'newComponent',
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
}
new Vue({
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
</script>
