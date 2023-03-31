<template>
  <div>
    <div id="rlnav">
      <router-link to="/">Home</router-link>
      <router-link to="/list">List</router-link>
      <router-link to="/print">Print</router-link>
    </div>
<h2>Clicks from Home and List pages during the past 8 hours</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Location</th>
          <th>Team</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(summary, index) in summaries" v-bind:key="index">
          <td>{{ summary.location }}</td>
          <td>{{ summary.team }}</td>
          <td>{{ summary.count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import logService from "../services/LogService.js";

export default {
  name: "Count",

  data: function () {
    return {
     
    };
  },

  computed: {
    summaries(){
      return this.$store.state.logData;
    }
  },

  created() {
    let location = this.$store.state.location;
    if (location) {
      logService
        .getSummary(location)
        .then((response) => {
          this.$store.commit("SET_LOG_DATA", response.data);
          console.log(this.$store.state.logData);
        })
        .catch(() => {
          console.log("unable to access log.");
        });
    }
  },
};
</script>

<style scoped>
#rlnav a {
  padding: 0 50px 0 0;
}

th,
td {
  border: 1px solid lightslategray;
}
</style>
