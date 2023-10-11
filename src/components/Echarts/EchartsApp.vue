<template>
  <div id="binChart" ref="canvas">
    <el-empty v-if="noData" description="数据为空~"></el-empty>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      noData: false,
    };
  },

  methods: {
    iChart() {
      let myChart = echarts.init(document.getElementById("binChart"));
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      const dataS = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        dataS.push(Math.round((Math.random() - 0.5) * 20 + dataS[i - 1]));
      }
      const dataX = [0, 1];
      for (let i = 2; i <= 1024; i += 2) {
        dataX.push(i);
      }
      let option;
      option = {
        tooltip: {
          trigger: "axis",
          position: function (pt) {
            return [pt[0], "10%"];
          },
          axisPointer: {
            type: "cross",
          },
          formatter: "道址: {b0}<br />辐射强度: {c0}" + " keV",
          borderColor: "rgba(0, 0, 0, 0.38)",
          backgroundColor: "#5f5f5fbb",
          textStyle: {
            color: "#fff",
          },
        },
        title: {
          left: "center",
          text: "SPT",
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
              iconStyle: {
                borderColor: "#bde6e8",
              },
            },
            dataView: {
              show: true,
              iconStyle: {
                borderColor: "#bde6e8",
              },
              title: "数据视图",
              optionToContent: function (opt) {
                let seriesData = opt.series[0].data;
                let axisData = opt.xAxis[0].data;
                let table =
                  '<table style="box-shadow:0px -15px 100px 5px #d7dafb inset;cursor: pointer;padding:10px;border-radius: 8px;' +
                  'margin: 0 auto;width:80%;text-align:center;border: 1px solid #409eff;">' +
                  "<tbody><tr>" +
                  "<td style='width:20%'>" +
                  "辐射强度" +
                  "</td>" +
                  "<td style='width:20%'>" +
                  "道址" +
                  "</td>" +
                  "</tr>";
                //  series[0].data
                for (let i = 0, l = axisData.length; i < l; i++) {
                  table +=
                    "<tr>" +
                    "<td>" +
                    seriesData[i] +
                    "</td>" +
                    "<td>" +
                    axisData[i] +
                    "</td>" +
                    "</tr>";
                }
                table += "</tbody></table>";
                return table;
              },
            },

            magicType: {
              type: ["line", "bar"],
              iconStyle: {
                borderColor: "#bde6e8",
              },
            },

            restore: {
              iconStyle: {
                borderColor: "#bde6e8",
              },
            },

            saveAsImage: {
              type: "png",
              title: "保存能谱为图片",
              iconStyle: {
                borderColor: "#bde6e8",
              },
            },
          },
          // itemSize: 10,
          itemGap: 26,
          emphasis: {
            iconStyle: {
              borderDashOffset: 5,
              borderColor: "#8ec6da",
              color: "#bde6e8",
            },
          },
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: dataX,
          axisLabel: {
            formatter: "{value}",
            align: "center",
            fontStyle: "oblique",
          },
          axisLine: {
            lineStyle: {
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          axisLabel: {
            align: "right",
            fontStyle: "oblique",
          },
          axisLine: {
            lineStyle: {
              type: "solid",
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            start: 0,
            end: 10,
          },
        ],
        series: [
          {
            name: "道址 辐射强度",
            type: "line",
            smooth: true,
            symbol: "none",
            /*  symbolSize: 20,
            symbol:
              "path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z",
            */
            sampling: "lttb",
            // sampling:折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点。
            // "lttb" 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值
            // 'average' 取过滤点的平均值
            // 'max' 取过滤点的最大值
            // 'min' 取过滤点的最小值
            // 'sum' 取过滤点的和
            itemStyle: {
              color: "rgb(245, 70, 70, 0.89)",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)",
                },
                {
                  offset: 1,
                  color: "rgb(214, 213, 183, 0.4)",
                },
              ]),
            },
            data: dataS,
          },
        ],
      };

      // option && myChart.setOption(option);
      myChart.setOption(option && option);
    },
  },
  mounted() {
    this.iChart();
  },
};
</script>
<style scoped lang="less">
#binChart {
  width: 96.6%;
  height: 96%;
}
</style>
