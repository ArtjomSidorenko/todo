<template style="background-color: #cc2b5e ">
  <div class="body">
    <h1 align="center">Todo</h1>
    <div class="main">
      <div class="col-sm-6">
        <a
          href="https://dev.to/hugoliconv/lets-build-a-todo-app-using-vuejs-52in"
          >What</a
        >
      </div>
      <div class="col-sm-6">
        <a
          href="https://dev.to/hugoliconv/lets-build-a-todo-app-using-vuejs-52in"
          >About</a>
      </div>
    </div>
    <div class="text">
      <input
        type="text"
        class="todo"
        placeholder="add"
        v-model="newt"
        @keyup.enter="addTodo"
      />
      <div class="button">
      <button class="button" type="button" value="RELOAD" onclick="location.reload();" />
      </div>
      <p>List:</p>
      <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <input v-model="todo.completed" type="checkbox"/>
          <div
            v-if="!todo.editing"
            @dblclick="editTodo(todo)"
            class="todo-item-label"
          >
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

.green {
    color: green; 
}

.red {
    color: red; 
}
body 
{
bgcolor:#cc2b5e → #753a88;
}
.todo{
     padding: 4px;
     font-size: 23px;
     border-width: 4px;
     border-color: black;
     background-color: #FFFFFF;
     color: black;
     border-style: solid;
     border-radius: 22px;
     box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.75);
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
    background: #1abc9c;
    border-bottom: 2px solid #12ab8d;
    box-shadow: inset 0 -2px #12ab8d;
}
</style>