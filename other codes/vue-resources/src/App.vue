<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-goup">
                  <label>Username</label>
                  <input class="form-control" type="text" v-model="user.name">
                </div>
                <div class="form-goup">
                  <label>Mail</label>
                  <input class="form-control" type="text" v-model="user.email"></input>
                </div>
                <button class="btn btn-primary" @click="submitData">Submit</button>
                <hr>
                <button class="btn btn-success" @click="fetchData">Get data</button>
                <br></br>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{u.name}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          user: {
            name: '',
            email: ''
          },
          users: [],
          resource: {}
        };
      },
      methods: {
        submitData(){
      /*    this.$http.post('', this.user)
                    .then(response =>{
                      console.log(response);
                    }, error => {
                      console.log(error);
                    })
                    */
            this.resource.save({}, this.user)
        },
        fetchData(){
          /*this.$http.get('')
                    .then(response => {
                      return response.json()
                    })
                    .then(data => {
                      const resultArray = [];
                      for (let key in data){
                        resultArray.push(data[key]);
                      }
                      this.users = resultArray;
                    }) */

                    this.resource.get({}).then(response => {
                      this.users = response.body;
                    })
        }
      },
      created(){
        this.resource = this.$resource('data.json');
      }
    }
</script>

<style>
</style>
