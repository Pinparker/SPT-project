<template>
  <div id="home">
    <el-tabs type="border-card">
      <el-tab-pane label="基本设置"><BasicSetBox /></el-tab-pane>
      <el-tab-pane label="能量和FWHM刻度"><EnScaleBox /></el-tab-pane>
      <el-tab-pane label="效率刻度"><EffScaleBox /></el-tab-pane>
      <el-tab-pane label="核素库"><NuclideBankBox /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BasicSetBox from "./AnalysiSet/BasicSet.vue";
import EnScaleBox from "./AnalysiSet/EnScale.vue";
import EffScaleBox from "./AnalysiSet/EffScale.vue";
import NuclideBankBox from "./AnalysiSet/NuclideBank.vue";
export default {
  components: { BasicSetBox, EnScaleBox, EffScaleBox, NuclideBankBox },
  methods: {},
  data: function () {
    return {};
  },
};
</script>

<style scoped lang="less">
#home {

}
</style>
