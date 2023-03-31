<template>
  <div>
    <div>
      <h3>{{ randomMessage }}</h3>
    </div>
    <div class="bottom grid-container">
      <div
        v-for="team in filteredTeams"
        v-bind:key="team.id"
        class="team grid-item"
      >
        <p class="team-name" :style="{ 'background-color': team.bgcolor }">
          {{ team.name }}
        </p>
        <p class="project-name">{{ team.project }}</p>
        <span v-if="team.thumbnail">
          <img
            v-on:click="redirect(team.quickLink, location, team.name)"
            v-bind:src="'images/' + team.thumbnail"
            height="120px"
            width="auto"
            v-if="!team.thumbnail.includes('https')"
          />
          <img
            v-on:click="redirect(team.quickLink, location, team.name)"
            v-bind:src="team.thumbnail"
            height="120px"
            width="auto"
            v-else
          />
        </span>
        <p class="technologies">{{ team.technologies }}</p>
        <ul class="members">
          <li v-for="member in team.members" v-bind:key="member.member">
            <span v-if="member.linkedIn">
              <a
                class="fa fa-linkedin-square fa_custom fa-2x"
                v-bind:href="member.linkedIn"
                target="_blank"
              >
                <span class="team-member-name">{{ member.member }} </span></a
              >
            </span>
            <span v-else>
              <a target="_blank">
                <span class="team-member-name">{{ member.member }} </span></a
              >
            </span>
          </li>
        </ul>

        <p
          class="quick-link"
          v-if="team.quickLink"
          v-on:click="redirect(team.quickLink, location, team.name)"
        >
          Visit <span class="quicklink">{{ team.quickLink }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logService from "../services/LogService.js";

export default {
  name: "MainBottom",

  data: function () {
    return {
      teams: [],
    };
  },

  computed: {
    location() {
      return this.$store.state.location;
    },

    randomMessage() {
      return this.$store.state.randomMessage;
    },

    searchKey() {
      return this.$store.state.searchKey;
    },

    filteredTeams() {
      let teams = this.$store.state.randomTeams;

      if (this.searchKey) {
        return teams.filter((team) => {
          for (let i = 0; i < team.members.length; i++) {
            if (
              team.members[i].member
                .toLowerCase()
                .includes(this.searchKey.toLowerCase())
            ) {
              return true;
            }
          }
          return false;
        });
      } else {
        return teams;
      }
    },

    version() {
      return this.$store.state.location + " " + this.$store.state.version;
    },
  },

  methods: {
    redirect(path, location, team) {
      console.log("******** json data", this.$store.state.randomTeams);
      console.log("******** redirect to : ", path);
      console.log("******** location, team: ", location, team);

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
      // setTimeout(() => {
      //   window.location.replace(path);
      // }, 1000);
      // --or--
      // window.location.replace(path);
      window.open(path, "_blank") || window.location.replace(path);
    },
  },
};
</script>

<style scoped>
.bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background-color: #2CB2EA; */
  padding: 5px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  text-align: center;
}

.team-name {
  color: #151516;
  font-weight: bolder;
}

ol,
ul,
.schedule {
  text-align: left;
}

.project-name {
  font-weight: bold;
}

.fa_custom {
  color: #0099cc;
  text-decoration: none;
}

li {
  list-style: none;
}

img:hover,
p.quick-link:hover {
  cursor: pointer;
}

span.quicklink {
  text-decoration: underline;
}

.team-member-name {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: black;
  margin-left: 15px;
}

@media only screen and (max-width: 1000px) {
  .bottom {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
