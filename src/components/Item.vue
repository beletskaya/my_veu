<template>
  <li>
    <span>
      <input type="checkbox">
      <strong>{{item.id}}</strong>
      {{item.title}}
    </span>
    <button>&times;</button>
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
