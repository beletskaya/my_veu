<template>
  <div>
    <div id="app">
      <img src="./assets/logo.png">
    </div>
    <Button >Click me</Button>
    <Title post-title="hello!"/>
  </div>
</template>

<script>

import Button from "./components/Button";
import Title from "./components/Title"
export default {
  name: 'App',
  components: {
    Button,
    Title
  },
}

</script>

<style>

</style>
