<template>
  <div>
    <h2>Home page</h2>
    <p>В этом видео мы с вами разберем компоненты в Vue. Итак, что такое компонент в Vue? Это кусок javascript и html, с какой-то логикой, которые можно переиспользовать. Компонент может принимать какие-то параметры на вход, чтобы потом отображать разную информацию.</p>
   <div class="links">
     <router-link to="/todos">Todos list</router-link>
   </div>

  </div>
</template>

<style scoped>
  .links a{
    text-align: center;
  }

</style>
