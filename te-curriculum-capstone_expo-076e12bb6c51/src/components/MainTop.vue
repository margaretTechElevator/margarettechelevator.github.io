<template>
  <div>
    <div v-if="showVideo" class="topTwo">
      <div class="top-left">
        <div
          v-if="showVideo"
          class="iframe-container"
          style="overflow: hidden; padding-top: 56.25%; position: relative"
        >
          <iframe
            id="mainVideo"
            allow="microphone; camera"
            style="
              border: 0;
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
            "
            src="https://drive.google.com/file/d/1uI2wFTVNgdFQXprkXajSGf8nigptEonx/preview"
            frameborder="0"
          ></iframe>
        </div>
        <div id="nameSearch">
          <label id="searchLabel" for="search"
            >Search by team member name:
          </label>
          <input
            v-on:input="updateSearch"
            id="search"
            name="search"
            type="text"
          />
        </div>
      </div>
      <div class="top-right">
        <span id="title-text">
          <h1 id="topTitle">{{ topTitleLine }}</h1>
          <p id="secondTitle">{{ secondTitleLine }}</p>

          <hr />

          <ol>
            <li v-for="item in this.instructions" v-bind:key="item.line">
              {{ item.line }}
            </li>
          </ol>

          <hr />
          <p id="tipsHeading">{{ tipsHeading }}</p>
          <ul>
            <li v-for="item in this.tips" v-bind:key="item.line">
              {{ item.line }}
            </li>
          </ul>
        </span>
        <div v-if="!showVideo" id="nameSearch">
          <label id="searchLabel" for="search"
            >Search by team member name:
          </label>
          <input
            v-on:input="updateSearch"
            id="search"
            name="search"
            type="text"
          />
        </div>
      </div>
    </div>

    <div v-if="!showVideo" class="topOne">
      <div class="top-right">
        <span id="title-text">
          <h1 id="topTitle">{{ topTitleLine }}</h1>
          <p id="secondTitle">{{ secondTitleLine }}</p>

          <hr />

          <ol>
            <li v-for="item in this.instructions" v-bind:key="item.line">
              {{ item.line }}
            </li>
          </ol>

          <hr />
          <p id="tipsHeading">{{ tipsHeading }}</p>
          <ul>
            <li v-for="item in this.tips" v-bind:key="item.line">
              {{ item.line }}
            </li>
          </ul>
        </span>
        <div v-if="!showVideo" id="nameSearch">
          <label id="searchLabel" for="search"
            >Search by team member name:
          </label>
          <input
            v-on:input="updateSearch"
            id="search"
            name="search"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTop",
  data: function () {
    return {};
  },

  computed: {
    topTitleLine() {
      return this.$store.state.topTitleLine;
    },

    secondTitleLine() {
      return this.$store.state.secondTitleLine;
    },

    showVideo() {
      // return this.$store.state.showVideo;
      return true;
    },

    mainVideo() {
      return this.$store.state.mainVideo;
    },
    tipsHeading() {
      return this.$store.state.tipsHeading;
    },

    tips() {
      return this.$store.state.tips;
    },

    instructions() {
      return this.$store.state.instructions;
    },
  },

  methods: {
    updateSearch(event) {
      this.$store.commit("UPDATE_SEARCH_KEY", event.target.value);
    },
  },
};
</script>

<style scoped>
body {
  font-family: Tahoma, Calibri, "Sans Serif";
  background-color: #2196f3;
}

.topTwo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  grid-gap: 10px;
  padding: 10px;
}

.topOne {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "right";
  grid-gap: 10px;
  padding: 10px;
  width: 50%;
}

.top > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.top-left {
  grid-area: left;
}

.top-right {
  grid-area: right;
}

#topTitle,
#secondTitle,
#tipsHeading {
  text-align: center;
  font-weight: bold;
}

ol,
ul,
.schedule {
  text-align: left;
}

ol li {
  padding-top: 15px;
}

#nameSearch label,
#nameSearch input {
  margin: 10px;
}

label#searchLabel {
  font-size: 1.17rem;
  font-weight: bold;
}

@media only screen and (max-width: 1000px) {
  .topTwo {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }

  .topOne {
    width: 100%;
  }

  img {
    display: none;
  }
}
</style>