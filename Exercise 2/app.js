new Vue({
        el: '#exercise',
        data: {
            value: ''
        },

        methods: {
          alertme(){
            alert("aLert")
          },

          storeval(){
            this.value = event.target.value
          }
        }
    });
