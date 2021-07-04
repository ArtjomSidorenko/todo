<template>
  <div class="home">
   <img alt="Vue logo" src="../assets/logo.png" />

    <div v-if="hasLoaded">
      <span>{{ infos[0].results[0].name.first }}</span>
      <table border="1">
        <tr>
          <h1 align="center">Name</h1>
        </tr>
        <tr>
          <td>title</td>

          <td>first</td>

          <td>last</td>

          <td>picture</td>
        </tr>

        <tr v-for="info in infos" :key="info.results[0].name.first">
          <td>{{ info.results[0].name.title }}</td>

          <td>{{ info.results[0].name.first }}</td>

          <td>{{ info.results[0].name.last }}</td>

          <td>
            <img :src="info.results[0].picture.medium" />
          </td>
        </tr>
      </table>
      <button v-on:click="moreNames">add more</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

const api = axios.create();

export default {
  data() {
    return {
      infos: [],
      persons: [],

      hasLoaded: false,
    };
  },
  mounted() {
    console.log(1);
    console.log("Has loaded: " + this.hasLoaded);

    this.moreNames();
  },

  methods: {
    moreNames: function () {
      api.get("https://randomuser.me/api/").then((response) => {
        this.infos.push(response.data);
        this.persons.push(response.data.results[0].name);

        this.hasLoaded = true;
      });
    },
  },

  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
