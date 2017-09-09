<template>
  <div class="row">
    <app-quotes v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"> {{quote}} </app-quotes>
  </div>
</template>

<script>
import Quotes from './Quotes.vue';

export default {
  props: ['quotes'],
  components: {
    appQuotes: Quotes
  },
  methods: {
    deleteQuote(index){
      this.$emit('quoteDeleted', index);
    }
  }
}
</script>

<style lang="css">
</style>
