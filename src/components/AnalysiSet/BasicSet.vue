<template>
  <div id="home">
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="clearfix">
          <span>分析区间</span>
        </div>
        <el-form size="small" ref="form" :model="form" label-width="140px">
          <el-row class="section-box">
            <el-col :span="5"><span>起始道址</span></el-col>
            <el-col :span="8">
              <el-input-number
                size="mini"
                style="width: 100px"
                v-model="form.startCh"
                controls-position="right"
                :precision="0"
                :step="1"
                :min="1"
                :max="16384"
              ></el-input-number
            ></el-col>
            <el-col :span="5"><span>终止道址</span></el-col>
            <el-col :span="8">
              <el-input-number
                size="mini"
                style="width: 100px"
                v-model="form.endCh"
                controls-position="right"
                :precision="0"
                :step="1"
                :min="1"
                :max="16384"
              ></el-input-number
            ></el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="clearfix">
          <span>管相关参数</span>
        </div>
        <el-row class="section-box">
          <el-col :span="3"><span>流速</span></el-col>

          <el-col :span="5">
            <el-input size="small" v-model="form.flowSpeed"></el-input>
          </el-col>
          <el-col :span="2"><span>ml/s</span></el-col>
          <el-col :span="6"><span>管内横截面积</span></el-col>
          <el-col :span="5">
            <el-input size="small" v-model="form.area"></el-input
          ></el-col>
          <el-col :span="2"><span>dm²</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 0rem;" :gutter="10">
      <el-col :span="8">
        <div class="clearfix">
          <span>寻峰灵敏因子</span>
        </div>
        <el-progress
          type="dashboard"
          :percentage="percentage"
          :color="colors"
        ></el-progress>
        <div>
          <el-tag type="info" size="medium">不灵敏</el-tag>
          <el-button-group>
            <el-button
              size="small"
              icon="el-icon-minus"
              @click="decrease"
            ></el-button>
            <el-button
              size="small"
              icon="el-icon-plus"
              @click="increase"
            ></el-button>
          </el-button-group>
          <el-tag type="success" size="medium">灵敏</el-tag>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="clearfix">
          <span>能量和FWHM刻度</span>
        </div>
        <el-row class="section-box">
          <el-col :span="3"><span>能量</span></el-col>
          <el-col :span="3"><span>f（ch）</span></el-col>
          <el-col :span="1"><span>=</span></el-col>

          <el-col :span="5">
            <el-input size="small" v-model="form.chNum1"></el-input>
          </el-col>
          <el-col :span="2"><span>ch²</span></el-col>
          <el-col :span="1"><span>+</span></el-col>
          <el-col :span="5">
            <el-input size="small" v-model="form.chNum2"></el-input>
          </el-col>
          <el-col :span="2"><span>ch</span></el-col>
          <el-col :span="1"><span>+</span></el-col>
          <el-col :span="5">
            <el-input size="small" v-model="form.chNum3"></el-input>
          </el-col>
        </el-row>
        <el-row class="section-box">
          <el-col :span="3"><span>FWHM</span></el-col>
          <el-col :span="3"><span>f（e）</span></el-col>
          <el-col :span="1"><span>=</span></el-col>

          <el-col :span="5">
            <el-input size="small" v-model="form.fwhmNum1"></el-input>
          </el-col>
          <el-col :span="2"><span>e²</span></el-col>
          <el-col :span="1"><span>+</span></el-col>
          <el-col :span="5">
            <el-input size="small" v-model="form.fwhmNum2"></el-input>
          </el-col>
          <el-col :span="2"><span>e</span></el-col>
          <el-col :span="1"><span>+</span></el-col>
          <el-col :span="5">
            <el-input size="small" v-model="form.fwhmNum3"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <div class="clearfix">
        <span>效率刻度方程</span>
      </div>
      <el-row :gutter="6" class="section-box">
        <el-col :span="6"><span>能量范围（keV）</span></el-col>
        <el-col :span="6"><span>效率方程</span></el-col>
      </el-row>

      <el-row class="section-box">
        <el-col :span="4"> </el-col>
        <el-col :span="1">
          <span class="symbol1"></span>
        </el-col>
        <el-col :span="5">
          <el-input size="small" v-model="form.enRangeNum1"></el-input>
        </el-col>

        <el-col :span="3"><span>ln(ε)</span></el-col>
        <el-col :span="1"><span>=</span></el-col>

        <el-col :span="4">
          <el-input size="small" v-model="form.effNum1"></el-input>
        </el-col>
        <el-col :span="3"><span>ln(e)²</span></el-col>
        <el-col :span="1"><span>+</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum2"></el-input>
        </el-col>
        <el-col :span="2"><span>ln(e)</span></el-col>
        <el-col :span="1"><span>+</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum3"></el-input>
        </el-col>
      </el-row>
      <el-row class="section-box">
        <el-col :span="4">
          <el-input size="small" v-model="form.enRangeNum"></el-input>
        </el-col>
        <el-col :span="1">
          <span class="symbol2"></span>
        </el-col>
        <el-col :span="5">
          <el-input size="small" v-model="form.enRangeNum2"></el-input>
        </el-col>
        <el-col :span="3"><span>ln(ε)</span></el-col>
        <el-col :span="1"><span>=</span></el-col>

        <el-col :span="4">
          <el-input size="small" v-model="form.effNum4"></el-input>
        </el-col>
        <el-col :span="3"><span>ln(e)²</span></el-col>
        <el-col :span="1"><span>+</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum5"></el-input>
        </el-col>
        <el-col :span="2"><span>ln(e)</span></el-col>
        <el-col :span="1"><span>+</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum6"></el-input>
        </el-col>
      </el-row>
      <el-row class="section-box">
        <el-col :span="4"> </el-col>
        <el-col :span="1">
          <span class="symbol3"></span>
        </el-col>
        <el-col :span="5">
          <el-input size="small" v-model="form.enRangeNum3"></el-input>
        </el-col>
        <el-col :span="3"><span>ln(ε)</span></el-col>
        <el-col :span="1"><span>=</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum7"></el-input>
        </el-col>
        <el-col :span="3"><span>ln(e)²</span></el-col>
        <el-col :span="1"><span>+</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum8"></el-input>
        </el-col>
        <el-col :span="2"><span>ln(e)</span></el-col>
        <el-col :span="1"><span>+</span></el-col>
        <el-col :span="4">
          <el-input size="small" v-model="form.effNum9"></el-input>
        </el-col>
      </el-row>
    </el-row>
    <el-divider content-position="right"
      ><el-button size="small" type="primary">应用</el-button></el-divider
    >
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        startCh: 1,
        endCh: 16384,
        flowSpeed: 10,
        area: 5,
        chNum1: 0.0001,
        chNum2: 0.1966,
        chNum3: -0.0178,
        fwhmNum1: 0.0002,
        fwhmNum2: 0.0004,
        fwhmNum3: 15.0382,
        enRangeNum: 100.0001,
        enRangeNum1: 100.0001,
        enRangeNum2: 7000.0001,
        enRangeNum3: 7000.0002,
        effNum1: -7.9122,
        effNum2: 72.4246,
        effNum3: -173.7976,
        effNum4: -0.1522,
        effNum5: 1.4801,
        effNum6: -11.1546,
        effNum7: 0,
        effNum8: 0,
        effNum9: 0,
      },

      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },

  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped lang="less">
#home {
  .el-row {
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
    .clearfix {
      border-bottom: 1px solid #0000003a;
      margin-bottom: 1rem;
    }
  }
  .section-box {
    display: flex;
    align-items: center;
    .symbol1:after {
      content: "<";
    }
    .symbol2:after {
      content: "~";
    }
    .symbol3:after {
      content: ">";
    }
  }
}
</style>
