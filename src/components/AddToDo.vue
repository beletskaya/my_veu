<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
  export default {
    data(){
      return{
        title : ' '
      }
    },
    methods : {
      submitForm(){
        if(this.title.trim()){
          const newToDo = {
            id: Date.now(),
            title: this.title,
            completed: false
          }
          this.$emit('add-to-do', newToDo)
          console.log(this.title)
          this.title = ''
        }
      }
    }
  }
</script>
