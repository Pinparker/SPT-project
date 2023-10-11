<template>
  <div id="home">
    <div class="body-left">
      <el-tabs tabPosition="top" style="height: 400px">
        <el-tab-pane label="能量拟合曲线"><div id="main"></div></el-tab-pane>
        <el-tab-pane label="FWHM拟合曲线"><div id="main1"></div></el-tab-pane>
        <el-tab-pane label="拟合方程"
          ><div style="margin: 20px"></div>
          <el-form
            label-position="top"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="能量拟合方程">
              <input
                disabled
                type="text"
                class="text1"
                v-model="formLabelAlign.enEquation"
              />
            </el-form-item>
            <el-form-item label="FWHM拟合方程">
              <input
                disabled
                type="text"
                class="text1"
                v-model="formLabelAlign.fwhmEquation"
              />
            </el-form-item>
            <el-form-item>
              <el-divider content-position="left"
                ><el-button size="small" type="primary"
                  >应用</el-button
                ></el-divider
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="body-right">
      <el-table size="small" height="160" :data="tableData" style="width: 100%">
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
          label="FWHM"
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
              placeholder="道址xxx"
              v-model="channel"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="能量(keV)">
            <el-input
              style="width: 130px"
              placeholder="能量xxx"
              v-model="energy"
              clearable
            ></el-input>
            <el-button style="margin-left: 20px" type="primary" plain
              >添加</el-button
            >
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
      channel: "",
      energy: "",
      tableData: [
        {
          address: "5967.723000981923",
          power: "1173.23232324050",
          fwhm: "15.501130480123829",
        },
        {
          address: "6667.723000981923",
          power: "173.23232324050",
          fwhm: "33.501130480123829",
        },
      ],
      formLabelAlign: {
        enEquation: "f(x) = 0.0000xx + (0.1966)x + (-0.0178)",
        fwhmEquation: "f(x) = 0.0000xx + (0.0004)x + (15.0380)",
      },
    };
  },
  methods: {
    enChat() {
      let chartDom = document.getElementById("main");
      let myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      let option;
      const data = [
        [0, 0],
        [4096, 332],
        [8192, 644],
        [9192, 724],
        [12288, 950],
        [16384, 1288],
        [17384, 1500],
      ];
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          formatter: function (params) {
            return (
              "能量: " +
              params[0].data[1] +
              " keV" +
              "<br/>道址: " +
              params[0].data[0] +
              "  ch"
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
          // data: [0, 4096, 8192, 12288, 16384],
          // data: [0, 332, 644, 966, 1288, 1611, 1933, 2255, 2577, 2899, 3221],
          axisTick: {
            alignWithLabel: true,
            length: 3,
            lineStyle: {
              type: "solid",
            },
          },
          axisLabel: {
            formatter: "{value}ch",
            align: "center",
            fontStyle: "oblique",
            color: "rgba(109, 57, 187, 1)",
          },
          axisLine: {
            lineStyle: {
              type: "solid",
            },
          },
          /*axisPointer: {
            show: true,
            type: "line",
          }, */
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

    enChat1() {
      let chartDom = document.getElementById("main1");
      let myChart = echarts.init(chartDom);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      let option;
      const data = [
        [0, 15.2],
        [805, 15.4],
        [1611, 15.9],
        [2416, 16.5],
        [3221, 17.5],
        [3490, 18],
      ];
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          formatter: function (params) {
            return (
              "FWHM: " +
              params[0].data[1] +
              " keV" +
              "<br/>道址: " +
              params[0].data[0] +
              "  ch"
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
            formatter: "{value}ch",
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
    this.enChat1();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/EnScale.scss";
</style>
