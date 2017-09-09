<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5"
                    id=index
                    @click="eventBus.current = index"
                    >
                    <app-server

                      :index="index"
                      :status="eventBus.servers[index -1 ].status"></app-server>

            </li>
        </ul>
    </div>
</template>

<script>
  import Server from './Server.vue';
  import { eventBus } from '../../main';

  export default {
    data: function(){
      return {
        eventBus: eventBus
      }
    },
    components: {
      'app-server': Server,
    }
  }
</script>

<style scoped>
  li:hover {
    background-color: lightgrey;
  };
  li:active {
    background-color: grey;
  };
</style>
