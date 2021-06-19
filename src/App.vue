<template>
  <div>
    <div id="app">
      <h1>To do application</h1>
    </div>
    <Button >Click me</Button>
    <hr/>
    <router-view/>
  </div>
</template>

<script>

import Button from "./components/Button";
export default {
  name: 'App',
  components: {
    Button
  }
}

</script>

<style>

</style>
