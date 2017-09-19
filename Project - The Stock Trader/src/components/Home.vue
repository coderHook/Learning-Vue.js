<template lang="html">
  <div class="">
    <h1>Trade or View your Portfolio</h1>
    <h6> You may Save & load your Data</h6>
    <h6> Click on 'End Day' to begin a New Day!</h6>
    <button class="btn btn-danger" @click="logout">SignOut</button>
    <hr>
    <p>Your funds: {{ funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    logout(){
      this.$store.commit('logout');
    }
  }
}
</script>

<style lang="css">
</style>
