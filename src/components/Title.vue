<template>
  <div>
    <ul>
      <Item v-for="(item, index) in toDoItem"
            v-bind:item="item"
            v-bind:index="index"
            v-on:remove-to-do="removeToDo"
           />

    </ul>

  </div>
</template>

<script>
import Item from './Item'
  export default {
  props: ['toDoItem'],
    components : {
      Item
    },
    data() {
      return{

      }
    },
    methods: {
      clickMethod(){
        //debugger
        alert('This is text')
      },
      removeToDo(id){
        this.toDoItem = this.toDoItem.filter( item => item.id !== id)
      }
    }
  }
</script>

