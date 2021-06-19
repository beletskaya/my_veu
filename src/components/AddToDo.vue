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

<style scoped>
  form{
    margin-top: 20px;
  }
  input{
    width: 320px;
    padding: 5px;
    border: 1px solid #bdbcbc;
    border-radius: 2px;
  }
  button {
    border: 0;
    padding: 6px 29px;
    border-radius: 4px;
    font-weight: bold;
    color: #35495e;
    background-color: #41b883;
  }
</style>
