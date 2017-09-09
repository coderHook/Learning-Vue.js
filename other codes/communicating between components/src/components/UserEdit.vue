<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ age }}</p>
        <button @click="updatedAge"> Update my age </button>

    </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    props: {
      age: Number
    },
    methods: {
      updatedAge(){
        this.age = 30;
        //this.$emit('updatedAge', this.age);
        //eventBus.$emit("updatedAge", this.age)
        eventBus.changeAge(this.age);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
