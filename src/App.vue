<template>
  <div class="page-wrapper">
    <div id="app">
      <img src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</template>

<script>

import Button from "./components/Button";
export default {
  name: 'App',
  components: {
  },
}

</script>

<style>
.links a {
  text-align: center;
  display: block;
  font-size: 25px;
  color: #207e71;
  padding: 20px 0;
  transition: color 0.3s;
}
.links a:hover{
  color: #075844;
}
img{
  width: 70px;
}
.page-wrapper{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
