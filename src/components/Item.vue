<template>
  <li>
    <span v-bind:class="{completed : item.completed}">
      <input type="checkbox" v-on:change="item.completed = !item.completed">
      <strong>{{index + 1}}</strong>
      {{item.title}}
    </span>
    <button v-on:click="$emit('remove-to-do', item.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    index: Number,
    item:{
      type: Object
    }
  },

  data: function () {
    return {
      greeting: 'Hello'
    }
  },
  methods: {

  }
}
</script>
<style scoped>
  .completed{
    text-decoration: line-through;
  }
  li{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 280px;
    width: 100%;
    margin-bottom: 12px;
  }
  input{
    margin-right: 15px;
  }
  strong{
    margin-right: 5px;
  }
  button{
    background-color: #ff5a5a;
    border: 0;
    border-radius: 5px;
    margin-left: 8px;
    padding: 2px 6px;
    cursor: pointer;
  }
</style>
