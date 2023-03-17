<template>
  <div id="home">
    <el-form
      size="small"
      label-position="right"
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="输入极端">
        <el-row :gutter="20">
          <el-col :span="10"
            ><el-radio-group v-model="form.polarity">
              <el-radio label="+">（ + ）</el-radio>
              <el-radio label="-">（ - ）</el-radio>
            </el-radio-group></el-col
          >
          <el-col :span="6"
            ><el-select v-model="form.polarityBig" placeholder="粗调">
              <el-option
                v-for="item in form.rudeAdjust"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option> </el-select
          ></el-col>
          <el-col :span="6">
            <el-input-number
              placeholder="微调"
              v-model="form.polaritySml"
              controls-position="right"
              :precision="2"
              :step="0.01"
              :min="0.5"
              :max="1.1"
            ></el-input-number
          ></el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="基线恢复">
        <el-row :gutter="70">
          <el-col :span="100"
            ><el-radio-group v-model="form.baselineRecovery">
              <el-col :span="100"><el-radio label="自 动"></el-radio></el-col>
              <el-col :span="100"><el-radio label="快"></el-radio></el-col>
              <el-col :span="100"
                ><el-radio label="慢"></el-radio
              ></el-col> </el-radio-group
          ></el-col>
        </el-row>
      </el-form-item>

      <el-form-item size="mini" label-width="114px" label="上升时间（us）">
        <el-col :span="8">
          <el-input-number
            v-model="form.upTime"
            controls-position="right"
            :precision="1"
            :step="0.2"
            :min="0.8"
            :max="23.0"
          ></el-input-number
        ></el-col>
        <el-col :span="8"> <span>坪顶宽度（us）</span></el-col>
        <el-col :span="8">
          <el-input-number
            v-model="form.roofWidth"
            controls-position="right"
            :precision="1"
            :step="0.1"
            :min="0.3"
            :max="2.4"
          ></el-input-number
        ></el-col>
      </el-form-item>

      <el-form-item label="极零设置">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-input style="margin-left: 18px" v-model="form.zero"></el-input
          ></el-col>
          <el-col :span="6"
            ><span style="margin-left: 18px">优 化</span></el-col
          >
          <el-col :span="9">
            <el-button type="success" plain round @click="onStart"
              >开始</el-button
            >
            <el-button type="danger" plain round @click="onStop"
              >停止</el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label-width="32%">
        <el-col :span="60">
          <el-button type="primary" @click="onSubmit"
            >获取放大器状态</el-button
          ></el-col
        >
        <el-col :span="6"> <el-button @click="onSet">设置</el-button></el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  /* props: {
    msg: String
  } */

  data() {
    return {
      form: {
        polarity: "",
        polarityBig: "",
        polaritySml: 0,
        baselineRecovery: "",
        upTime: "",
        roofWidth: "",
        zero: "",
        rudeAdjust: [
          {
            value: 1,
            label: 1,
          },
          {
            value: 2,
            label: 2,
          },
          {
            value: 4,
            label: 4,
          },
          {
            value: 8,
            label: 8,
          },
          {
            value: 16,
            label: 16,
          },
          {
            value: 32,
            label: 32,
          },
          {
            value: 64,
            label: 64,
          },
          {
            value: 128,
            label: 128,
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("获取放大器状态!", this.form);
    },
    onSet() {
      console.log("设置!");
    },
    onStart() {
      console.log("开始优化！");
      this.$message.success({
        message: "开始优化！",
        // center: true,
        customClass: "showMessage",
        duration: 2000,
      });
    },
    onStop() {
      console.log("停止优化！");
      this.$message.error({
        message: "停止优化！",
        // center: true,
        duration: 2000,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#home {
  .showMessage {
    text-align: center;
    color: red;
  }
}
</style>
