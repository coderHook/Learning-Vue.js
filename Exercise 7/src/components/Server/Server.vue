<template>
  <div class="row">
    <div class="col-xs-6">Server #{{ index }}</div>
    <div class="col-xs-6">Status: {{ status }}</div>
  </div>
</template>

<script>
  export default{
    props: ['index', 'status']
  }
</script>

<style>
</style>
