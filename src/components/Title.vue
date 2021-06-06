<template>
  <div>
    <p @click="clickMethod" v-for="(text, index) in texts"
        :key="index">{{text}}</p>
    <ul>
      <Item  v-for="item in toDoItem"
            v-bind:item="item" />
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
        texts: ['text1', 'text2', 'text3'],

      }
    },
    methods: {
      clickMethod(){
        //debugger
        alert('This is text')
      }
    }
  }
</script>

