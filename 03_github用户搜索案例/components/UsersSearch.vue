<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="q"/>
            &nbsp;
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
    import pubsub from 'pubsub-js';

    export default {
        name: 'UsersSearch',
        data(){
            return {
                q: ''
            }
        },
        methods: {
            search(){
                console.log('@',this.q);
                pubsub.publish('search', this.q);
            }
        }
    }
</script>

<style>

</style>