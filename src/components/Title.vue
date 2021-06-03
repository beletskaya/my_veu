<template>
  <div>
    <p @click="clickMethod" v-for="(text, index) in texts"
        :key="index">{{text}}</p>

  </div>
</template>

<script>
  export default {
    data() {
      return{
        texts: ['text1', 'text2', 'text3']
      }
    },
    methods: {
      clickMethod(){
        //debugger
        alert('This is text')
      }
    },
    props: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    },
  }
</script>

