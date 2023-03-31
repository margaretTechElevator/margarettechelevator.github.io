<template>
  <div id="home">
    <top />
    <main-top />
    <main-bottom />
    <foot />
  </div>
</template>

<script>
import MainTop from "@/components/MainTop.vue";
import MainBottom from "@/components/MainBottom.vue";
import Top from "@/components/Top.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "Home",
  components: {
    MainTop,
    MainBottom,
    Top,
    Foot,
  },
};
</script>
