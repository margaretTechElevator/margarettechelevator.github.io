import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //filename for you location here
    fileName: "NLRdata11.json",

    //campusid if using api for data, else 0
    // 1 Pittsburgh
    // 2 Cleveland
    // 3 Columbus
    // 4 Detroit
    // 5 Cincinnati
    // 6 National Live Remote
    campusid: 0,

    //data from the json file
    version: "",
    topTitleLine: "",
    secondTitleLine: "",
    showVideo: true,
    mainVideo: "",
    randomMessage: "",
    schedule: [],
    instructions: [],
    tipsHeading: "",
    tips: [],
    teams: [],


    randomTeams: [],
    searchKey: "",

    logData: [],

  },

  mutations: {
    SET_JSON_DATA(state, payload) {
      console.log(payload)
      state.location = payload.location;
      console.log(payload.location)
      state.version = payload.version;
      state.topTitleLine = payload.topTitleLine;
      state.secondTitleLine = payload.secondTitleLine;
      state.showVideo = payload.showVideo;
      state.mainVideo = payload.mainVideo;
      state.randomMessage = payload.randomMessage;

      state.instructions = payload.instructions;
      state.tipsHeading = payload.tipsHeading;
      state.tips = payload.tips;
      state.teams = payload.teams;
    },

    RANDOMIZE_TEAMS(state) {

      if (state.teams) {
        state.randomTeams = [...state.teams]; //clone
        for (let x = 0; x < state.randomTeams.length; x++) {
          let random = Math.floor(Math.random() * Math.floor(state.randomTeams.length));
          // ES6 allows us to assign two variables at once
          [state.randomTeams[x], state.randomTeams[random]] = [
            state.randomTeams[random],
            state.randomTeams[x],
          ];
        }
      }
    },

    SET_LOG_DATA(state, payload) {
      state.logData = payload;
    },

    UPDATE_SEARCH_KEY(state, searchKey) {
      state.searchKey = searchKey;
    },

  },
  actions: {},
  getters: {},
});
