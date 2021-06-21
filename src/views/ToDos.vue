<template>
  <div>
    <hr/>
    <div class="links">
      <router-link to="/">Home</router-link>
    </div>
    <AddToDo @add-to-do="addToDo"/>
    <Loader v-if="loading"/>
    <Title v-else-if="toDoItem.length" post-title="hello!" v-bind:toDoItem="toDoItem"
           @remove-to-do="removeToDo"  />
    <p v-else>No items</p>
  </div>
</template>

<script>

import Title from "../components/Title"
import AddToDo from "../components/AddToDo";
import Loader from "../components/Loder";

export default {
  name: 'App',
  components: {
    Title,
    AddToDo,
    Loader
  },
  data() {
    return {
      toDoItem: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.toDoItem = json
      })
    setTimeout(()=> {
      this.loading = false

    },1000)
  },
  methods: {

    addToDo(newToDo) {
      this.toDoItem.push(newToDo)
    }
  }
}

</script>
