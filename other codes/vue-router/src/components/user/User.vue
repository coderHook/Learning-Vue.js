<template>
  <div>
    <h1>The User Page</h1>
    <button class="btn btn-primary" @click="goHome">Go Home</button>
    <hr>
    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>
    
  </div>
</template>

<script>

export default {
  methods: {
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>
