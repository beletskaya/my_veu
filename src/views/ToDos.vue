<template>
  <div>
    <AddToDo @add-to-do="addToDo"/>
    <Title post-title="hello!" v-bind:toDoItem="toDoItem"
           @remove-to-do="removeToDo"/>
  </div>
</template>

<script>

import Title from "../components/Title"
import AddToDo from "../components/AddToDo";
export default {
  name: 'App',
  components: {
    Title,
    AddToDo
  },
  data() {
    return {
      toDoItem: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then( json => {
        console.log(json)
        this.toDoItem = json
      })

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
