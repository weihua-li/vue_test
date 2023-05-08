<template>
    <div class="row">
        <div class="card" v-for="user in users" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    import axios from 'axios'
    
    export default {
        name: 'UsersList',
        data() {
            return {
                users:[]
            }
        },
        methods: {
            search(masg, q) {
                const url = 'https://api.github.com/search/users?q=' + q;
                console.log('masg:',masg);
                console.log('q',q);
                console.log(url);
                axios.get(url).then(promise => {
                    this.users = promise.data.items;
                })
            }
        },
        mounted() {
            this.pid = pubsub.subscribe('search', this.search)
        }
    }   
</script>

<style scoped>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>