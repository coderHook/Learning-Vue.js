<template>
  <div>
    <h3>Edit the User {{$route.params.id}}</h3>
    <hr>
    <p>Locale: {{ $route.query.locale}}</p>
    <p>q: {{ $route.query.q}}</p>
    <button class="btn btn-success" @click="confirm = true">Confirm</button>
    <div style="height: 500px"></div>
    <div id="data">
      Scrolling to the bottom
      <hr>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      confirm: false
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.confirm){
      next();
    } else {
      if(confirm('Are you sure you want to leave?')){
        next();
      }else{next(false);}
    }
  }
}
</script>
