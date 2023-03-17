<template>
  <div id="home">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-zoom-in"></i>放大器设置</span>
        <AmplifierSet> </AmplifierSet>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-s-flag"></i>高压设置</span>
        <el-form
          size="small"
          label-position="top"
          ref="form"
          :model="form"
          label-width="80px"
        >
          <el-form-item>
            <el-divider content-position="left">当前状态</el-divider>
            <el-row :gutter="20">
              <el-col :span="4">开关状态</el-col>
              <el-col :span="6"
                ><el-input v-model="form.status"></el-input
              ></el-col>
              <el-col :span="4">实际电压</el-col>
              <el-col :span="6"
                ><el-input v-model="form.actualVoltage"></el-input
              ></el-col>
              <el-col :span="1">伏</el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-divider content-position="left">设 置</el-divider>
            <el-row :gutter="20">
              <el-col :span="4">设定高压</el-col>
              <el-col :span="6"
                ><el-input v-model="form.highPressure"></el-input
              ></el-col>
              <el-col :span="1">伏</el-col>
              <el-col :span="12">
                <el-switch
                  v-model="form.onOffState"
                  active-text="开"
                  inactive-text="关"
                >
                </el-switch>
                <!--  <el-button type="success" plain round @click="openSet"
                  >开</el-button
                >
                <el-button type="danger" plain round @click="closeSet"
                  >关</el-button
                > -->
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"
          ><i class="el-icon-data-analysis"></i>数据转换控制器</span
        >
        <el-form
          size="small"
          label-position="left"
          ref="form"
          :model="form"
          label-width="80px"
        >
          <el-form-item label="最大道址">
            <el-input v-model="form.maxTrackAddress"></el-input>
          </el-form-item>
          <el-form-item label="计数率">
            <el-input v-model="form.countRate"></el-input>
          </el-form-item>

          <el-form-item label="下阈设置">
            <el-col :span="6">
              <el-input-number
                v-model="form.lowerThresholdSet"
                controls-position="right"
                :precision="0"
                :step="1"
                :min="0"
                :max="16383"
              ></el-input-number
            ></el-col>
            <el-col :span="8"> <span>上阈设置</span></el-col>
            <el-col :span="6">
              <el-input-number
                v-model="form.highThresholdSet"
                controls-position="right"
                :precision="0"
                :step="1"
                :min="0"
                :max="16383"
              ></el-input-number
            ></el-col>
          </el-form-item>
          <el-divider content-position="center"
            ><el-button size="small" type="primary" @click="dataSet"
              >设置</el-button
            ></el-divider
          >
        </el-form>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-receiving"></i>缓存</span>
        <el-form
          size="small"
          label-position="left"
          ref="form"
          :model="form"
          label-width="80px"
        >
          <el-form-item label="最大容量">
            <el-input disabled v-model="form.maxCapacity"></el-input>
          </el-form-item>
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <el-form-item label="当前长度">
            <el-input disabled v-model="form.currentLength"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-notebook-1"></i>通讯</span>
        <el-form
          size="small"
          label-position="left"
          ref="form"
          :model="form"
          label-width="100px"
        >
          <el-form-item label="远程采集IP">
            <el-row :gutter="10">
              <el-col :span="5">
                <el-input-number
                  style="width: 90px"
                  v-model="form.ip1"
                  controls-position="right"
                  :precision="0"
                  :step="1"
                  :min="0"
                  :max="16383"
                ></el-input-number
              ></el-col>
              <el-col :span="1"><span>.</span></el-col>
              <el-col :span="5">
                <el-input-number
                  style="width: 90px"
                  v-model="form.ip2"
                  controls-position="right"
                  :precision="0"
                  :step="1"
                  :min="0"
                  :max="16383"
                ></el-input-number
              ></el-col>
              <el-col :span="1"><span>.</span></el-col>
              <el-col :span="5">
                <el-input-number
                  style="width: 90px"
                  v-model="form.ip3"
                  controls-position="right"
                  :precision="0"
                  :step="1"
                  :min="0"
                  :max="16383"
                ></el-input-number
              ></el-col>
              <el-col :span="1"><span>.</span></el-col>
              <el-col :span="5">
                <el-input-number
                  style="width: 90px"
                  v-model="form.ip4"
                  controls-position="right"
                  :precision="0"
                  :step="1"
                  :min="0"
                  :max="16383"
                ></el-input-number
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="远程采集端口">
            <el-input v-model="form.remoteAcquisitionPort"></el-input>
          </el-form-item>
          <el-divider content-position="center"
            ><el-button size="small" type="primary" @click="communicationSubmit"
              >应用</el-button
            ></el-divider
          >
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AmplifierSet from "./CollectionSetCom/AmplifierSet.vue";

export default {
  // name: 'HelloWorld',
  /* props: {
    msg: String
  } */
  components: { AmplifierSet },
  data() {
    return {
      form: {
        status: "",
        actualVoltage: "",
        highPressure: 3800,
        onOffState: false,
        maxTrackAddress: "",
        countRate: "",
        lowerThresholdSet: 20,
        highThresholdSet: 4000,
        maxCapacity: 180,
        currentLength: 0,
        ip1: 192,
        ip2: 168,
        ip3: 1,
        ip4: 100,
        remoteAcquisitionPort: 8000,
      },
    };
  },
  methods: {
    dataSet() {
      console.log(this.form);
    },
    communicationSubmit() {
      console.log(this.form);
    },
   /*  openSet() {
      this.$message.success({
        message: "打开设定高压: " + this.form.highPressure,
        duration: 2000,
      });
    },
    closeSet() {
      this.$message.error({
        message: "关闭设定高压: " + this.form.highPressure,
        duration: 2000,
      });
    }, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
