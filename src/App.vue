<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <NoteHeader :addTask="addTask"/>
          <NoteList 
            :taskList="taskList" 
            :changeDone="changeDone" 
            :deleteTask="deleteTask"
          />
          <NoteFooter 
            :taskList="taskList" 
            :allDone="allDone" 
            :deleteAllDone="deleteAllDone"
            v-show="this.taskList.length > 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import NoteHeader from './components/NoteHeader'
  import NoteList from './components/NoteList'
  import NoteFooter from './components/NoteFooter'

  export default({
    name:'App',
    template:`
      <App></App>
    `,
    components:{NoteHeader,NoteList,NoteFooter},
    data() {
      return {
        taskList:JSON.parse(localStorage.getItem('taskList')) || []
      }
    },
    methods: {
      addTask(taskObj){
        this.taskList.unshift(taskObj)
      },
      changeDone(id){
        this.taskList.forEach((task) => {
          if(task.id === id) task.done = !task.done
        });
      },
      allDone(done){
        this.taskList.forEach((task) => {
          task.done = done
        });
      },
      deleteTask(id){
        this.taskList = this.taskList.filter((task) => {
          return task.id !== id
        })
      },
      deleteAllDone(){
        this.taskList = this.taskList.filter((task) => {
          return !task.done
        })
      }
    },
    watch:{
      taskList:{
        deep:true,
        handler(value){
          localStorage.setItem('taskList', JSON.stringify(value))
        }
      }
    } 
  })
</script>

<style>
    /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>