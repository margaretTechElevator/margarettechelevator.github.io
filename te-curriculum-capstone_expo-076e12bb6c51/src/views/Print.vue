<template>
  <div>
    <div id="rlnav">
      <router-link to="/">Home</router-link>
      <router-link to="/list">List</router-link>
      <router-link to="/count">Count</router-link>
    </div>
    <div>
      <div v-for="team in teams" v-bind:key="team.id">
        <p class="team-name">{{ team.name }}</p>
        <p class="project-name">{{ team.project }}</p>
        <p class="technologies">{{ team.technologies }}</p>
        <ul class="members">
          <li v-for="member in team.members" v-bind:key="member.member">
            {{ member.member }}
          </li>
        </ul>

        <p
          class="quick-link"
          v-if="team.quickLink"
          v-on:click="redirect(team.quickLink, location, team.name)"
        >
          Visit <span class="quicklink">{{ team.quickLink }} </span>
        </p>

        <hr />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import logService from "../services/LogService.js";
export default {
  name: "List",

  data: function () {
    return {};
  },

  computed: {
    location() {
      return this.$store.state.location;
    },

    teams() {
      return this.$store.state.teams;
    },
  },

  methods: {
    redirect(path, location, team) {
      console.log("********redirect to : ", path);
      console.log("********location, team: ", location, team);

      let message = {
        location: location,
        team: team,
      };

      //fire and forget
      logService
        .log(message)
        .then(() => {
          console.log("log sucessful");
        })
        .catch(() => {
          console.log("log not sucessful.");
        });

      //pause long enought to see the message
      setTimeout(() => {
        window.location.replace(path);
      }, 1000);
      // --or--
      // window.location.replace(path);
    },
  },
};
</script>

<style scoped>
#rlnav a {
  padding: 0 50px 0 0;
}

p.quick-link:hover {
  cursor: pointer;
}

span.quicklink {
  text-decoration: underline;
}
</style>

