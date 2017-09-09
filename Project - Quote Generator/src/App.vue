<template>
    <div class="container">
      <app-header :maxQuotes="maxQuotes" :currentQ="quotes.length"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <appGridQuotes :quotes="quotes" @quoteDeleted="deleteQuote"></appGridQuotes>
      <div  class="row">
        <div class="col-sm-12 alert alert-info text-center">
          <p><b>Info:</b> To delete a Quote just click on it. </p>
        </div>
      </div>
    </div>
</template>

<script>
  import GridQuotes from './components/GridQuotes.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';

  export default {
    data: function() {
      return {
        quotes: [
          'To see things as they are, not as I would like them to be.'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote){
        if (this.quotes.length >= this.maxQuotes){
          return alert('Please, delete some quotes before adding a new one.');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index){
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appGridQuotes: GridQuotes,
      appNewQuote: NewQuote,
      appHeader: Header
    }
  }
</script>

<style>

</style>
