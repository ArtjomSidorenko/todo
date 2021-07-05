<template >
  <div id="app" class="container">
    <h1>Todo</h1>
    <div class="main">
      <div class="col-sm-6">
        <a href="https://dev.to/hugoliconv/lets-build-a-todo-app-using-vuejs-52in" style="padding: 10">What</a>
      </div>
      <div class="col-sm-6">
        <a href="https://dev.to/hugoliconv/lets-build-a-todo-app-using-vuejs-52in">About</a>
      </div>
    </div>
    <div class="text">

        

      <input type="text" class="todo" placeholder="add" v-model="newt" @keyup.enter="addTodo" />
      
      <button class="button" type="button" value="RELOAD" onclick="location.reload();"> Reload</button>
     
      <p>List:</p>
      
          <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">

        <div class="todo-item-left">
          <input v-model="todo.completed" type="checkbox"/>
          <div
            v-if="!todo.editing"
            @dblclick="editTodo(todo)"
            class="todo-item-label">
            <span :class="todo.completed ? 'green' : 'red'">{{ todo.title }}</span>
          </div>
          <input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="todo.title"
          />
        </div>

        <div class="remove-item" @click="removeTodo(index)">&times;</div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  
  data() {
    return {
      newt: "",
      idForTodo: 3,
      
      todos: [
        {
          id: 1,
          title: "fhfh",
          completed: false,
          editing: false,
        },

        {
          id: 2,
          title: "fhfhf",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newt.trim() == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newt,
        completed: false,
      });

      this.newt = "";
      this.idForTodo++;
    },
    editTodo(todo) {
      todo.editing = true;
      alert("double clicked");
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};

</script>


<style>
.list1
{
position: relative;
left: 100px;
}
table
{

}
.color1
{
color:blueviolet;

}
.green {
    color: green; 
}

.red {
    color: red; 
}
body 
{
background-color:#cc2b5e → #753a88;
}

#wrapper{
   
    width: 650px  ;
    height: auto;
    background-color: rgb(198, 241, 200);
    margin: 0 auto;
    margin-top: 200px;
    border-radius: 10px;
}
.todo{
    width: 100;
     padding: 10px 18px;
     font-size: 18px;
     margin-bottom: 16;
     border-width: 4px;
     border-color: #313131;
     background-color: #FFFFFF;
     color: #313131;
     border-style: solid;
     border-radius: 15px;
     box-shadow: 0px 0px 0px rgba(31, 31, 31, 0.75);
     text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.75);
  
}
 .todo:focus {
     outline:none;
}

col-sm-6
{
    color:black;
}

button {
    position: relative;
    width: 300px;
    height: 60px;
    margin: 20px auto;
    padding: 0;
    font-size: 22px;
    text-align: center;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    transition: transform 0.4s ease-in-out;
}

button:active {
  top: 1px;
  box-shadow: none;
}

.button {
    background: #313131;
    border-bottom: 8px solid #1abc9c;
    box-shadow: inset 0 0px #12ab8d;
}

.container
{
    max-width: 300px;
    margin: 0 auto;
}
.todo-input
{
width: 100;
padding: 10 18;
font-size: 18;
margin-bottom: 16;


}

.todo-item
{
margin-bottom: 12;
display: flex;
align-items: center;
justify-content: space-between;
}
.remove-item
{
  cursor: pointer;
  margin-left: 0;
 

}
 .remove-item:hover
  {
      color: black;
  }
  .todo-item-left
  {
      display: flex;
      align-items: center;
  }
  .todo-item-label
  {
      padding: 10;
      border: 1px solid white;
  }
  .todo-item-edit
  {
      align-items: center;
      font-size: 24;
      color: yellow;
      margin-left: 12;
      width: 100%;
      padding: 10;
      border: 1px solid #313131;
    font-family: "Avenir", Arial, Helvetica, sans-serif;
  }
.todo-item-edit:focus
{
outline: none;
}
.completed
{
    text-decoration: line-through;
    color: grey;
}
a
{
    color: #313131;
}

a:hover {
  color: hotpink;
}


a:active {
  color: blue;
}
</style>