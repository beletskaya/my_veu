<template>
  <div>
    <div id="app">
      <img src="./assets/logo.png">
    </div>
    <Button >Click me</Button>
    <Title post-title="hello!" v-bind:toDoItem="toDoItem"/>
  </div>
</template>

<script>

import Button from "./components/Button";
import Title from "./components/Title"
export default {
  name: 'App',
  components: {
    Button,
    Title
  },
  data() {
    return {
      toDoItem: [
        { id: 1, title: "Buy a ice-cream", completed: false},
        { id: 2, title: "Buy a bread", completed: false},
        { id: 3, title: "Buy a tomato", completed: false}
      ]
    }
  }
}

</script>

<style>

</style>
