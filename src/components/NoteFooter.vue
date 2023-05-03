<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{doneNum}}</span> / 全部{{totalNum}}
        </span>
        <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
    </div>
</template>

<script scope>
    export default {
        name:"NoteFooter",
        props:['taskList', 'allDone', 'deleteAllDone'],
        data() {
            return {
                checked:false
            }
        },
        methods: {
            deleteDone(){
                this.deleteAllDone()
            }
        },
        computed:{
            totalNum(){
                return this.taskList.length
            },
            doneNum(){
                //这是我写的low方法
                /* let num = 0
                this.taskList.forEach((task) => {
                    if(task.done) num++  
                });
                return num */
                //这是老师写的高级方法
                return this.taskList.reduce((pre, task) => pre + (task.done ? 1 : 0), 0)
            },
            isAll:{
                get(){
                    return this.doneNum === this.totalNum  && this.totalNum > 0
                },
                set(value){
                    this.allDone(value)
                }
            }
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>