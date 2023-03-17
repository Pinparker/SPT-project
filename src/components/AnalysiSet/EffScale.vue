<template>
  <div id="home">
    <div class="body-left">
      <el-tabs tabPosition="top" style="height: 400px">
        <el-tab-pane label="拟合曲线"><div id="fitCurve"></div></el-tab-pane>
        <el-tab-pane label="拟合方程"
          ><div style="margin: 10px">
            <el-row class="section-box">
              <el-col :span="1"><span>e</span> </el-col>
              <el-col :span="3">
                <span class="symbol1"></span>
              </el-col>
              <el-col :span="5">
                <el-input size="small" v-model="eNum1"></el-input>
              </el-col>
            </el-row>
            <el-row class="section-box">
              <el-col>
                <input
                  disabled
                  type="text"
                  class="text1"
                  v-model="formLabelAlign.equation1"
                />
              </el-col>
            </el-row>
            <el-row class="section-box">
              <el-col :span="1"><span>e</span> </el-col>
              <el-col :span="3">
                <span class="symbol2"></span>
              </el-col>
              <el-col :span="5">
                <el-input size="small" v-model="eNum2"></el-input>
              </el-col>
              <el-col :span="3">
                <span class="symbol3"></span>
              </el-col>
              <el-col :span="1"><span>e</span> </el-col>
              <el-col :span="3">
                <span class="symbol4"></span>
              </el-col>
              <el-col :span="5">
                <el-input size="small" v-model="eNum3"></el-input>
              </el-col>
            </el-row>
            <el-row class="section-box">
              <el-col>
                <input
                  disabled
                  type="text"
                  class="text1"
                  v-model="formLabelAlign.equation2"
                />
              </el-col>
            </el-row>
            <el-row class="section-box">
              <el-col :span="1"><span>e</span> </el-col>
              <el-col :span="3">
                <span class="symbol5"></span>
              </el-col>
              <el-col :span="5">
                <el-input size="small" v-model="eNum4"></el-input>
              </el-col>
            </el-row>
            <el-row class="section-box">
              <el-col>
                <input
                  disabled
                  type="text"
                  class="text1"
                  v-model="formLabelAlign.equation3"
                />
              </el-col>
            </el-row>
            <el-row class="section-box">
              <el-divider content-position="left"
                ><el-button size="small" type="primary">应用</el-button>
                <!--  <p class="btn-tag-group">
                  <a href="/topic/land" class="btn hvr-rectangle-in">应用</a>
                </p> -->
              </el-divider>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="body-right">
      <el-table height="161" size="small" :data="tableData" style="width: 100%">
        <el-table-column
          align="center"
          show-overflow-tooltip
          label="道址(ch)"
          prop="address"
        >
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          label="能量(keV)"
          prop="power"
        >
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          label="效率"
          prop="fwhm"
        >
        </el-table-column>
      </el-table>
      <el-row style="margin-top: 12px">
        <el-button size="small" type="danger" plain>删除</el-button>
        <el-button size="small" type="warning" plain>拟合</el-button>
      </el-row>
      <el-divider content-position="left">刻度</el-divider>
      <el-row style="margin-top: 8px">
        <el-form size="small" ref="form" label-width="80px">
          <el-form-item label="道址(ch)">
            <el-input
              style="width: 130px; margin-left: -76px"
              placeholder="请输入道址"
              v-model="scaleNum1"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="能量(keV)">
            <el-input
              style="width: 130px"
              placeholder="请输入能量"
              v-model="scaleNum2"
              clearable
            ></el-input>
            <el-button style="margin-left: 20px" type="primary" plain
              >添加</el-button
            >
          </el-form-item>
          <el-form-item label="刻度效率">
            <el-input
              style="width: 130px; margin-left: -76px; margin-bottom: -76px"
              placeholder="请输入效率"
              v-model="scaleNum3"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  components: {},
  data: function () {
    return {
      eNum1: 100,
      eNum2: 100,
      eNum3: 7000,
      eNum4: 7000,
      scaleNum1: "",
      scaleNum2: "",
      scaleNum3: "",
      tableData: [
        {
          address: "0",
          power: "50",
          fwhm: "5.501130480123829",
        },
        {
          address: "1",
          power: "56",
          fwhm: "0.501130480123829",
        },
        {
          address: "0",
          power: "65",
          fwhm: "15.501130480123829",
        },
        {
          address: "0",
          power: "80",
          fwhm: "9.501130480123829",
        },
        {
          address: "0",
          power: "50",
          fwhm: "5.501130480123829",
        },
        {
          address: "0",
          power: "50",
          fwhm: "5.501130480123829",
        },
      ],
      formLabelAlign: {
        equation1: "f(x) = 0.0000xx + (0.0000)x + (0.0000)",
        equation2: "f(x) = -0.4621xx + (6.6034)x + (-32.2381)",
        equation3: "f(x) = 0.0000xx + (0.0000)x + (0.0000)",
      },
    };
  },
  methods: {
    enChat() {
      let chartDom = document.getElementById("fitCurve");
      let myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      let option;
      const data = [
        [0, 0.0],
        [805, 0.0005],
        [1611, 0.00035],
        [2416, 0.00025],
        [3421, 0.0002],
      ];
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          formatter: function (params) {
            return (
              "效率: " +
              params[0].data[1] +
              " " +
              "<br/>能量: " +
              params[0].data[0] +
              " keV"
            );
          },
        },
        grid: {
          top: "2%",
          left: "13%",
        },
        xAxis: {
          type: "value",
          axisLine: { onZero: false },
          axisTick: {
            alignWithLabel: true,
            length: 3,
            lineStyle: {
              type: "solid",
            },
          },
          axisLabel: {
            formatter: "{value}",
            align: "center",
            fontStyle: "oblique",
            color: "rgba(109, 57, 187, 1)",
          },
          axisLine: {
            lineStyle: {
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: { onZero: false },

          axisTick: {
            alignWithLabel: true,
            length: 3,
            lineStyle: {
              type: "solid",
            },
          },
          axisLabel: {
            align: "right",
            fontStyle: "oblique",
            color: "rgba(109, 57, 187, 1)",
          },
          axisLine: {
            lineStyle: {
              type: "solid",
            },
          },
        },
        series: [
          {
            data: data,
            type: "line",
            smooth: true,
            symbol: "circle",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.enChat();
  },
};
</script>

<style scoped lang="scss">
@mixin disJA {
  display: flex;
  justify-content: center;
  align-items: center;
}
@function px2rem($px) {
  @return $px / 20 * 1rem;
}
#home {
  @include disJA;
  justify-content: space-around;

  .body-left {
    width: 56%;
    padding: 0 10px;
    border: 1px solid #acafb4;
    height: px2rem(505);
    #fitCurve {
      width: px2rem(540);
      height: px2rem(490);
    }
    .text1 {
      text-align: center;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 96%;
    }
    .section-box {
      .btn {
        font-size: 12px;
        display: inline-block;
        padding: 5px 10px;
        text-decoration: none;
        color: #409eff;
        border-radius: 4px;
        border: 1px solid #40a9ff;
      }

      .hvr-rectangle-in:hover {
        transition-duration: 0.4s;
        background: #40a9ff;
        // transition: all .6s;
        color: #e3f5fd;
      }
      display: flex;
      align-items: center;
      margin: 8px 0;

      .symbol1:after {
        content: "<";
      }
      .symbol2:after {
        content: "≥";
      }
      .symbol3:after {
        content: "&";
      }
      .symbol4:after {
        content: "≤";
      }
      .symbol5:after {
        content: ">";
      }
    }
  }
  .body-right {
    border: 1px solid #acafb4;
    width: 40%;
    .el-form-item--mini.el-form-item,
    .el-form-item--small.el-form-item {
      margin-bottom: 1px;
    }
  }
}
</style>
