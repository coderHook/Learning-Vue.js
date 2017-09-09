<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server#{{eventBus.current}} Details are currently <b>{{updated}}</b></p>
        <h2>Status: {{ eventBus.servers[eventBus.current - 1].status }}</h2>
        <button @click="updatedst">Back to Normal</button>
        
    </div>

</template>

<script>
import { eventBus } from '../../main';

export default {
  data: function(){
    return {
      eventBus: eventBus,
      updated: 'not updated'
    };
  },
  methods: {
    updatedst(){
      this.eventBus.servers[this.eventBus.current -1].status = 'Normal';
      this.updated = 'Updated'
    }
  }
}
</script>

<style>

</style>
