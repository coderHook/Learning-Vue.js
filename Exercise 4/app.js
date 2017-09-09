new Vue({
  el: '#exercise',
  data: {
    effect: false,
    width: 100,
    userClass: '',
    user2Class: '',
    user3Style: ''
  },
  methods: {
    startEffect: function(){
      this.effect = !this.effect;
    },
    startProgress: function(){
      vm = this;
      setInterval(function(){ vm.width += 20}, 1000);
      //this.width += 100;
    }
    },
  computed: {
    divClasses: function(){
      return {
        highlight: this.effect,
        shrink: !this.effect
      };
    }
  }
});
