<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
import axios from "axios";
import logService from "./services/LogService.js";

export default {
  name: "Home",
  components: {},

  methods: {
    getLogInfo() {
      let location = this.$store.state.location;
      if (location) {
        logService
          .getSummary(location)
          .then((response) => {
            this.$store.commit("SET_LOG_DATA", response.data);
          })
          .catch(() => {
            console.log("unable to access log.");
          });
      }
    },
  },

  created() {
    let fileName = "data/" + this.$store.state.fileName;
    if (this.$store.state.campusid) {
      fileName =
        "https://techelevator-pgh-teams.azurewebsites.net/api/expo/" +
        this.$store.state.campusid;
    }
    axios
      .get(fileName, {
        headers: { API_KEY: "3D00C095-65CF-44FB-988C-64EF5E8A8D69" },
      })
      .then((response) => {
        this.$store.commit("SET_JSON_DATA", response.data);
        this.$store.commit("RANDOMIZE_TEAMS");
        this.getLogInfo();
      });
  },
};
</script>


<style>
body {
  font-family: "Montserrat", sans-serif;
  background-color: whitesmoke;
}
</style>
