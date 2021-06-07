<template>
  <div>
    <div id="app">
      <img src="./assets/logo.png">
    </div>
    <Button >Click me</Button>
    <AddToDo @add-to-do="addToDo"/>
    <Title post-title="hello!" v-bind:toDoItem="toDoItem"
          @remove-to-do="removeToDo"/>
  </div>
</template>

<script>

import Button from "./components/Button";
import Title from "./components/Title"
import AddToDo from "./components/AddToDo";
export default {
  name: 'App',
  components: {
    Button,
    Title,
    AddToDo
  },
  data() {
    return {
      toDoItem: [
        { id: 1, title: "Buy a ice-cream", completed: false},
        { id: 2, title: "Buy a bread", completed: false},
        { id: 3, title: "Buy a tomato", completed: false}
      ]
    }
  },
  methods : {
    removeToDo(id){
      this.toDoItem = this.toDoItem.filter( item => item.id !== id)
    },
    addToDo(newToDo){
      this.toDoItem.push(newToDo)
    }
  }
}

</script>

<style>

</style>
