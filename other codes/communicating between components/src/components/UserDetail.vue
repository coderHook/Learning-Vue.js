<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }}</p>
        <p> Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    props: {
      name: {
        type: String
      },
      age: Number
    },
    methods: {
      resetName(){
        this.name = 'Abel';
        this.$emit('nameWasReset', this.name);
      }
    },
    created(){
      eventBus.$on('updatedAge', (data) => {
        this.age = data;
      })
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
