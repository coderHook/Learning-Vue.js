<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="isSelected = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="isSelected = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="isSelected = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <p>{{ isSelected }}</p>
                <hr>
                <component :is="isSelected">{{ title }}</component>

            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
          return {
            title: 'This is the template',
            isSelected: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
