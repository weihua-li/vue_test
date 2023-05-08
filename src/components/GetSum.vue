<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h1>当前求和放大十倍为{{bigSum}}</h1>
    <br>
    <select v-model.number="addend">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add(addend)">+</button>
    <button @click="reduce(addend)">-</button>
    <button @click="oddAdd(addend)">当前求和为奇数再加</button>
    <button @click="delayAdd(addend)">等一等再加</button>
  </div>
</template>

<script>
    import {mapState,
            mapGetters,
            mapActions,
            mapMutations}
    from 'vuex'

    export default {
        name: 'GetSum',
        data() {
            return {
                addend:1
            }
        },
        computed: {
            ...mapState(['sum']),
            ...mapGetters(['bigSum'])
        },
        methods:{
            ...mapMutations(['add', 'reduce']),
            ...mapActions(['oddAdd', 'delayAdd'])
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>