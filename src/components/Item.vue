<template>
  <li>
    <span v-bind:class="{completed : item.completed}">
      <input type="checkbox" v-on:change="item.completed = !item.completed">
      <strong>{{item.id}}</strong>
      {{item.title}}
    </span>
    <button v-on:click="$emit('remove-to-do', item.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: ['item'],

  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>
<style scoped>
  .completed{
    text-decoration: line-through;
  }
</style>
