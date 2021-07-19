<template>
  <div id="app2" class="container">
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
      <br>


      <input type="email" class="mail" placeholder="email" v-model="newt" @keyup.enter="addTodo"/>

<br>
      <br>

     <input type="text" class="name" placeholder="name" v-model="newt2" @keyup.enter="addTodo2"/>

<br>
      <br>
      <input type="text" class="surname" placeholder="surname" v-model="newt3" @keyup.enter="addTodo3"/>

      <button class="button" type="button" value="RELOAD" onclick="location.reload();"> Reload</button>

      <p>List:</p>
      <table border="1">

        <tr>
          <td>email</td>

          <td>name</td>

          <td>surname</td>

          <td>erase</td>
        </tr>

        <tr v-for="(clientList) in clientLists" :key="clientList.id" class="todo-item">
          <td><span>{{ clientList.mail }}</span></td>

          <td><span >{{ clientList.name1 }}</span></td>

          <td><span >{{ clientList.surname }}</span></td>

          <td>
            <div class="remove-item" @click="removeList(clientList)">&times;</div>
          </td>
        </tr>
      </table>



    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "todo-list",

  data() {
    return {
      newt: "",
      idForList: 3,
      newt2: "",
      newt3: "",
      clientLists: [
        // {
        //   id: 1,
        //   title: "fhfh",
        //   completed: false,
        //   editing: false,
        // },
        //
        // {
        //   id: 2,
        //   title: "fhfhf",
        //   completed: false,
        //   editing: false,
        // },

      ],
    };
  },
  mounted() {
    this.getClientList();
  },
  methods: {
    addTodo() {
      if (this.newt.trim() == 0) {
        return;
      }

      axios.post("http://localhost:3333/api/clientList/saving", {
        description: this.newt
      })
          .then(() => {
            this.getClientList()
          });

      this.newt = "";

    },
    addTodo2() {
      if (this.newt2.trim() == 0) {
        return;
      }

      axios.post("http://localhost:3333/api/clientList/saving", {
        description: this.newt2
      })
          .then(() => {
            this.getClientList()
          });

      this.newt2 = "";

    },
    addTodo3() {
      if (this.newt3.trim() == 0) {
        return;
      }

      axios.post("http://localhost:3333/api/clientList/saving", {
        description: this.newt3
      })
          .then(() => {
            this.getClientList()
          });

      this.newt3 = "";

    },
    editTodo(clientList) {
      clientList.editing = true;
      alert("double clicked");
    },
    removeList(clientList) {
      // this.todos.splice(index, 1);

      console.log(clientList);


      axios.post("http://localhost:3333/api/clientList/deleting", {
        removing : clientList.id
      })
          .then(() => {
            this.getClientList()
          });

    },
    getClientList() {
      axios.get("http://localhost:3333/api/clientList").then((response) => {
        this.clientLists = response.data;

        this.hasLoaded = true;
      });
    }
  }
};


</script>


<style>
.list1 {
  position: relative;
  left: 100px;
}

table
{
  width: 100%;
  background-color: #FFFFFF;
  border-collapse: collapse;
  border-width: 3px;
  border-color: #0E131C;
  border-style: solid;
  color: #000000;
  border-radius: 10px;
}


.color1 {
  color: blueviolet;

}

.green {
  color: green;
}

.red {
  color: red;
}

body {
  background-color: #cc2b5e → #753a88;
}

#wrapper {

  width: 650px;
  height: auto;
  background-color: rgb(198, 241, 200);
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 10px;
}

.mail {
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

.mail:focus {
  outline: none;
}

.name {
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

.name:focus {
  outline: none;
}


.surname {
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

.surname:focus {
  outline: none;
}

col-sm-6 {
  color: black;
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

.container {
  max-width: 300px;
  margin: 0 auto;
}

.todo-input {
  width: 100;
  padding: 10 18;
  font-size: 18;
  margin-bottom: 16;


}

.todo-item {
  margin-bottom: 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-item {
  cursor: pointer;
  margin-left: 0;


}

.remove-item:hover {
  color: black;
}

.todo-item-left {
  display: flex;
  align-items: center;
}

.todo-item-label {
  padding: 10;
  border: 1px solid white;
}

.todo-item-edit {
  align-items: center;
  font-size: 24;
  color: yellow;
  margin-left: 12;
  width: 100%;
  padding: 10;
  border: 1px solid #313131;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}

.todo-item-edit:focus {
  outline: none;
}

.completed {
  text-decoration: line-through;
  color: grey;
}

a {
  color: #313131;
}

a:hover {
  color: hotpink;
}


a:active {
  color: blue;
}
</style>