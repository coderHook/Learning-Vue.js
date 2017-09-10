<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="!submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default text-center">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: </p>
                        <p><input type="text" v-model="name"></input></p>
                        <app-full-name v-model="fullName"></app-full-name>
                        <p>Mail: </p>
                        <p><input type="text" v-model="email"></input></p>
                        <p>Password: </p>
                        <p><input type="text" v-model="password"></input></p>
                        <p>Store in Database?: <input type="radio" v-model="dbStored" value="true">Yes</input> <input type="radio" v-model="dbStored" value="false">No</input></p>
                        <p>{{dbStored}}</p>
                    </div>
                    <button class="btn btn-info" @click="isSubmitted">Submit</button>
                </div>
            </div>
        </div>
      <div class="alert alert-success" v-else>
        <p>Submitted {{ fullName }}</p>
      </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
      data(){
        return {
          fullName: 'Pedro',
          name: '',
          email: '',
          password: '',
          dbStored: '',
          submitted: false
        }
      },
      methods: {
        isSubmitted(){
          this.submitted=true;

        }
      },
      components: {
        appFullName: FullName
      }
    }
</script>

<style>
</style>
