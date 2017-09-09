<template lang="html">
  <div>
    <h1>Your Quotes </h1>
  <div class="progress">
  <div class="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow="currentQ * 10" aria-valuemin="0" aria-valuemax="100" :style="{width: (currentQ/maxQuotes) * 100 + '%'}">
    {{ currentQ }} / {{ maxQuotes }}
  </div>
</div>
</div>
</template>

<script>
export default {
  props: ['maxQuotes', 'currentQ']
}
</script>

<style lang="css" scoped>
  h1 {
    font-family: 'Arizonia';
    text-align: center;
  }
</style>
