<template lang="html">
  <div>
    <p> Full name (from component) </p>
    <input type="text" :value="fullName" @input="adddedFullName"></input>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    adddedFullName(){
      this.$emit('input', event.target.value);
      this.value = event.target.value;
    }
  }
}
</script>

<style lang="css">
</style>
