<template>
  <div id="page-footer">
    <p id="cr">Copyright © 2020 - {{year}} Tech Elevator Inc.</p>
    <p id="ver">{{ version }}</p>
  </div>
</template>

<script>
export default {
  name: "Foot",
  computed: {
    version() {
      return this.$store.state.location + " " + this.$store.state.version;
    },

    year() {
      let date = new Date();
      let fourDigitYear = date.getFullYear();
      return fourDigitYear;
    },
  },
};
</script>

<style>
#cr {
  text-align: center;
}

#page-footer {
  background-color: #3e4246;
  color: rgba(230, 237, 245, 0.4);
  padding: 10px 10px 0px 5px;
}

#ver {
  text-align: right;
}
</style>