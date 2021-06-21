<template>
  <div>
    <hr/>
    <div class="links">
      <router-link to="/">Home</router-link>
    </div>
    <AddToDo @add-to-do="addToDo"/>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="no-completed">No completed</option>
    </select>
    <Loader v-if="loading"/>
    <Title v-else-if="filterToDos.length" post-title="hello!" v-bind:toDoItem="filterToDos"
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
  data() {
    return {
      toDoItem: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    Title,
    AddToDo,
    Loader
  },
  /*watch:{
    filter(value){
      console.log(value)
    }
  },*/
  computed: {
    filterToDos(){
      if(this.filter === 'all'){
        return this.toDoItem
      }
      if(this.filter === 'completed'){
        return this.toDoItem.filter(t => t.completed)
      }
      if(this.filter === 'no-completed'){
        return this.toDoItem.filter(t => !t.completed)
      }
    }
  },

  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.toDoItem = json
      })
      this.loading = false
  },
  methods: {

    addToDo(newToDo) {
      this.toDoItem.push(newToDo)
    }
  }
}

</script>
<style scoped>
select{
  width: 100%;
  margin: 10px 0;
  padding: 6px 9px;
  max-width: 330px;
}
</style>
