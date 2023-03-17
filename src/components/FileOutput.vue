<template>
  <div id="home">
    <el-row :gutter="10">
      <el-col :span="10">
        <div class="clearfix">
          <span>信息发送与接收</span>
        </div>
        <div class="file-text" style="padding: 3px 0; width: 100%">
          <div>
            <span>约定：甲方为包壳破损分析软件</span>
          </div>
          <div><span class="nbsp">乙方为核素分析软件</span></div>
        </div>
        <el-form size="small" ref="form" :model="form" label-width="140px">
          <el-form-item label="甲方软件名称">
            <el-input v-model="form.nameA"></el-input>
          </el-form-item>
          <el-form-item label="乙方软件名称">
            <el-input v-model="form.nameB"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="14">
        <div class="clearfix">
          <span>核素分析时间参数</span>
        </div>
        <el-form
          label-position="left"
          size="small"
          ref="form"
          :model="form"
          label-width="276px"
        >
          <el-form-item label="特征核素文件输出时间间隔（min）">
            <el-input class="time-scope" v-model="form.charNuclideT"></el-input>
            <span class="col">（1-180）</span>
          </el-form-item>
          <el-form-item label="能谱及主要核素文件输出时间间隔（min）">
            <el-input
              class="time-scope"
              v-model="form.enAndMajorNuclideT"
            ></el-input>
            <span class="col">（1-180）</span>
          </el-form-item>
          <el-form-item label="特征核素分析时间间隔（min）">
            <el-input
              class="time-scope"
              v-model="form.charNuclideAnalysisT"
            ></el-input>
            <span class="col">（1-180）</span>
          </el-form-item>
          <el-form-item label="实时能谱输出时间间隔（min）">
            <el-input class="time-scope" v-model="form.realTimeEnT"></el-input>
            <span class="col">（1-180）</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="6">
      <el-col :span="10">
        <el-card shadow="hover">
          <div slot="header">
            <span>输出文件名称及状态</span>
          </div>
          <el-form
            label-position="left"
            size="small"
            ref="form"
            :model="form"
            label-width="126px"
          >
            <el-form-item label="特征核素输出文件">
              <el-input v-model="form.charNuclideF"></el-input>
            </el-form-item>
            <el-form-item label="能谱输出文件">
              <el-input v-model="form.enNuclideF"></el-input>
            </el-form-item>
            <el-form-item label="主要核素输出文件">
              <el-input v-model="form.MajorNuclideF"></el-input>
            </el-form-item>
            <el-form-item label="实时能谱输出文件">
              <el-input v-model="form.realTimeEnF"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card shadow="hover">
          <div slot="header">
            <span>核素分析时间参数</span>
          </div>
          <el-form
            label-position="left"
            size="small"
            ref="form"
            :model="form"
            label-width="276px"
          >
            <el-form-item label="特征核素文件输出时间间隔（min）">
              <el-input
                class="time-scope"
                v-model="form.charNuclideT"
              ></el-input>
              <span class="col">（1-180）</span>
            </el-form-item>
            <el-form-item label="能谱及主要核素文件输出时间间隔（min）">
              <el-input
                class="time-scope"
                v-model="form.enAndMajorNuclideT"
              ></el-input>
              <span class="col">（1-180）</span>
            </el-form-item>
            <el-form-item label="特征核素分析时间间隔（min）">
              <el-input
                class="time-scope"
                v-model="form.charNuclideAnalysisT"
              ></el-input>
              <span class="col">（1-180）</span>
            </el-form-item>
            <el-form-item label="自动输出CHN文件">
              <el-switch
                v-model="form.autoCHN"
                active-text="开"
                inactive-text="关"
              >
              </el-switch>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-divider content-position="right"
      ><el-button size="small" type="primary" @click="onSubmit"
        >应用</el-button
      ></el-divider
    >
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        nameA: "",
        nameB: "SPTSystem",
        charNuclideT: 5,
        enAndMajorNuclideT: 5,
        charNuclideAnalysisT: 5,
        realTimeEnT: 1,
        charNuclideF: "xxx1.dat",
        enNuclideF: "xxx2.dat",
        MajorNuclideF: "xxx3.dat",
        realTimeEnF: "xxx4.dat",
        autoCHN: true,
      },
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!",this.form);
    },
  },
};
</script>
<style scoped lang="less">
#home {
  .el-row {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
    .clearfix {
      border-bottom: 1px solid #0000003a;
      margin-bottom: 1rem;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    .file-text {
      color: red;
      height: 6rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .nbsp {
        margin-left: 43px;
      }
    }
    .time-scope {
      width: 130px;
    }
    .col {
      color: red;
      font-size: 10px;
    }
  }
}
</style>
