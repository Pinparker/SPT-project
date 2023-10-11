<template>
  <div id="home">
    <div class="demo">
      <div id="container" ref="content"></div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "ThreeTest",
  data: function () {
    return {};
  },
  methods: {},
  mounted: function () {},
};
</script>

<style scoped lang="less">
#home {
  .demo {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #container {
    height: 100%;
    overflow: hidden;
  }
}
</style>
