<template>
  <div id="app">
    <div class="header">
      <div class="h-left">
        <span class="l-box">
          <el-button class="btn-grad1" circle @click="collectionSetBox = true"
            ><svg
              t="1676970617169"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2784"
              width="32"
              height="32"
            >
              <path
                d="M898 64.22H130a30 30 0 0 0-30 30v804.07a30 30 0 0 0 30 30h768a30 30 0 0 0 30-30V94.22a30 30 0 0 0-30-30z m-0.87 801.61a30 30 0 0 1-30 30h-708.9a30 30 0 0 1-30-30V128.15a30 30 0 0 1 30-30h708.9a30 30 0 0 1 30 30z"
                fill="#2c2c2c"
                p-id="2785"
              ></path>
              <path
                d="M814.09 640H212a20 20 0 0 0-20 20v194.78a20 20 0 0 0 20 20h602.09a20 20 0 0 0 20-20V660a20 20 0 0 0-20-20z m-3.88 198.65a15 15 0 0 1-15 15H226a15 15 0 0 1-15-15V677.83a15 15 0 0 1 15-15h569.21a15 15 0 0 1 15 15zM546.11 136.21H221.75a30 30 0 0 0-30 30v379.84a30 30 0 0 0 30 30h324.36a30 30 0 0 0 30-30V166.21a30 30 0 0 0-30-30z m-6.31 376.41a20 20 0 0 1-20 20H250.18a20 20 0 0 1-20-20v-329.2a20 20 0 0 1 20-20H519.8a20 20 0 0 1 20 20z"
                fill="#2c2c2c"
                p-id="2786"
              ></path>
              <path
                d="M704.14 152.64a39.15 39.15 0 1 0 39.14 39.14 39.15 39.15 0 0 0-39.14-39.14z m0 57.39a18.25 18.25 0 1 1 18.24-18.25A18.25 18.25 0 0 1 704.14 210zM704.14 281.08a39.15 39.15 0 1 0 39.14 39.14 39.14 39.14 0 0 0-39.14-39.14z m0 57.39a18.25 18.25 0 1 1 18.24-18.25 18.25 18.25 0 0 1-18.24 18.25zM704.14 409.06a39.15 39.15 0 1 0 39.14 39.15 39.15 39.15 0 0 0-39.14-39.15z m0 57.39a18.25 18.25 0 1 1 18.24-18.24 18.25 18.25 0 0 1-18.24 18.24z"
                fill="#2c2c2c"
                p-id="2787"
              ></path>
              <path
                d="M253.38 735.84m20 0l478.59 0q20 0 20 20l0 23.92q0 20-20 20l-478.59 0q-20 0-20-20l0-23.92q0-20 20-20Z"
                fill="#2c2c2c"
                p-id="2788"
              ></path></svg
          ></el-button>
          <p>采集设置</p>
        </span>
        <span class="l-box">
          <el-button
            class="btn-grad2"
            type="primary"
            circle
            @click="analysisBox = true"
            ><svg
              t="1676970873917"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4235"
              width="32"
              height="32"
            >
              <path
                d="M921.998 142.375H102.652c-18.982 0-34.475 15.288-34.475 34.271v588.847c0 18.78 15.493 34.495 34.475 34.495H477.85v37.316l0.651 3.492H288.606c-11.349 0-20.507 8.729-20.507 20.303 0 11.35 9.158 20.526 20.507 20.526h446.991c11.349 0 20.077-9.177 20.077-20.526 0-11.573-8.729-20.303-20.077-20.303H545.722l0.429-3.492v-37.316h375.848c18.556 0 33.825-15.715 33.825-34.495V176.646c-0.001-18.983-15.27-34.271-33.826-34.271zM887.5 731.465H136.274V210.248H887.5v521.217z"
                fill="#ffffff"
                p-id="4236"
              ></path>
              <path
                d="M826.392 310.953c19.001 0 34.048-14.84 34.048-34.271 0-18.537-15.047-33.825-34.048-33.825-18.984 0-34.254 15.288-34.254 33.825 0 19.431 15.269 34.271 34.254 34.271zM311.258 619.704l0.535 0.271c11.637 6.686 24.408 8.29 35.916 5.215l0.6-0.135c11.772-3.076 22.475-10.702 29.096-22.204 6.557-11.772 7.897-24.75 4.751-36.522l-1.006-3.346 80.266-79.994c9.032 3.21 19 3.475 27.896 0.934l3.275-0.934 30.301 29.83c-3.275 9.367-3.547 19.398-1.206 28.225 3.282 11.908 10.974 22.609 22.274 28.767 11.572 6.686 24.35 8.291 35.922 5.351l0.6-0.271c11.709-3.075 22.41-10.702 28.762-22.203v-0.406c6.891-11.237 8.025-23.944 5.086-35.981l-1.07-3.48 71.098-71.169c9.232 3.346 19 3.481 28.025 1.206 11.908-3.076 22.41-10.703 28.967-22.34l0.135-0.271c6.551-11.102 7.893-24.344 4.945-36.116a49.26 49.26 0 0 0-22.404-29.031c-11.643-6.557-24.686-7.891-36.387-4.552-11.572 3.21-22.273 10.973-28.83 22.075v0.135c-6.82 11.373-7.963 24.479-5.016 36.387l1.205 3.21-71.24 70.898c-9.225-2.939-18.729-3.211-27.625-0.935l-0.465 0.271-3.41 0.664-29.965-29.83c3.275-9.232 3.545-19.129 0.87-28.09-3.081-11.908-10.638-22.61-22.275-29.167-11.237-6.557-24.614-8.026-36.187-4.545-11.908 2.939-22.545 10.702-29.231 22.339-6.356 11.373-7.891 24.08-4.616 36.251l0.935 3.211-80.194 80.13a46.27 46.27 0 0 0-27.561-1.07l-0.335 0.136c-11.901 3.075-22.539 10.701-29.096 22.21-6.821 11.366-8.026 24.479-5.016 36.251 3.275 11.773 10.502 21.805 21.675 28.625z m369.948-235.236l0.807-1.47c3.074-5.222 7.955-8.562 13.441-9.903 5.352-1.605 11.301-1.07 16.652 1.741l1.205 0.671c5.018 3.075 8.633 8.026 10.104 13.506 1.471 5.486 0.871 11.237-1.805 16.859l-0.871 0.935c-3.01 4.951-8.027 8.562-13.377 10.167-5.352 1.469-11.438 0.805-16.588-2.006l-1.342-0.535c-4.945-3.075-8.49-8.162-10.096-13.648-1.341-5.215-0.94-11.365 1.87-16.317zM548.505 520.503l0.734-1.47c3.076-5.216 7.963-8.562 13.514-10.031h0.264c5.623-1.342 11.709-0.941 16.924 2.141l0.605 0.398c5.018 3.076 8.627 8.162 10.098 13.643 1.605 5.757 0.869 11.644-2.205 17.123-3.146 5.223-8.162 9.367-13.85 10.702h-0.398c-5.217 1.341-11.174 0.941-16.254-1.869l-1.27-0.806c-4.887-3.076-8.498-8.027-9.967-13.507-1.471-5.351-1.006-11.108 1.805-16.324z m-89.901-92.569c3.146-5.486 8.297-9.231 13.777-10.566 5.822-1.341 12.043-0.806 17.258 2.54 5.487 2.939 9.368 7.756 10.638 13.513 1.67 5.751 0.935 12.036-2.211 17.253-2.94 5.486-8.156 9.096-13.642 10.701-5.751 1.477-12.172 0.941-17.523-2.141-5.287-3.21-9.032-8.561-10.638-14.041-1.54-5.621-0.934-11.773 2.341-17.259zM314.94 567.868c3.011-5.622 8.026-9.232 13.642-10.702h0.606c5.351-1.741 11.437-0.936 16.917 2.141 5.222 2.939 9.032 8.162 10.702 13.912 1.476 5.887 0.87 12.037-2.34 17.259-3.14 5.479-8.362 9.361-13.977 10.702h-0.335c-5.615 1.334-11.572 0.664-17.059-2.547l-0.264-0.129c-5.215-3.081-8.761-8.026-10.231-13.513-1.477-5.622-0.942-12.043 2.339-17.123z"
                fill="#ffffff"
                p-id="4237"
              ></path>
              <path
                d="M239.627 672.671h545.109c7.408 0 13.504-4.731 13.504-10.614 0-6.116-6.096-11.077-13.504-11.077H253.202V288.226c0-6-6.171-10.732-13.574-10.732-7.696 0-13.868 4.732-13.868 10.732v373.831c-0.001 5.882 6.171 10.614 13.867 10.614z"
                fill="#ffffff"
                p-id="4238"
              ></path></svg
          ></el-button>
          <p>分析设置</p>
        </span>
        <span class="l-box">
          <el-button
            class="btn-grad3"
            type="info"
            circle
            @click="fileOutputBox = true"
            ><svg
              t="1676970913524"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4555"
              width="32"
              height="32"
            >
              <path
                d="M586.64 926.76H205.36c-13.24 0-24-10.76-24-24V114c0-13.24 10.76-24 24-24h399.36c13.24 0 24 10.76 24 24s-10.76 24-24 24H229.36v740.8h357.28c13.24 0 24 10.76 24 24s-10.72 23.96-24 23.96zM804.68 582.64c-13.24 0-24-10.76-24-24V322.28c0-13.24 10.76-24 24-24s24 10.76 24 24v236.32a24 24 0 0 1-24 24.04z"
                fill="#ffffff"
                p-id="4556"
              ></path>
              <path
                d="M605.2 114.64v204.12h196.12z"
                fill="#ffffff"
                p-id="4557"
              ></path>
              <path
                d="M801.32 342.76H605.2c-13.24 0-24-10.76-24-24V114.64c0-9.8 5.96-18.6 15.04-22.28 9.08-3.64 19.48-1.44 26.28 5.64l196.12 204.12a23.92 23.92 0 0 1 4.76 26.04 23.988 23.988 0 0 1-22.08 14.6z m-172.12-48h115.76L629.2 174.24v120.52zM470.08 341.24H362.32c-13.24 0-24-10.76-24-24s10.76-24 24-24h107.76c13.24 0 24 10.76 24 24s-10.76 24-24 24zM647.72 637.84H362.32c-13.24 0-24-10.76-24-24s10.76-24 24-24h285.4c13.24 0 24 10.76 24 24s-10.72 24-24 24zM647.72 489.52H362.32c-13.24 0-24-10.76-24-24s10.76-24 24-24h285.4c13.24 0 24 10.76 24 24s-10.72 24-24 24z"
                fill="#ffffff"
                p-id="4558"
              ></path>
              <path
                d="M824.52 798.8h-296.84c-13.24 0-24-10.76-24-24s10.76-24 24-24h296.84c13.24 0 24 10.76 24 24s-10.72 24-24 24z"
                fill="#ffffff"
                p-id="4559"
              ></path>
              <path
                d="M732.32 921.16a24 24 0 0 1-16.96-40.96l106.16-106.16-101-101a24 24 0 0 1 0-33.92 24 24 0 0 1 33.92 0l117.96 117.96a24 24 0 0 1 0 33.92l-123.12 123.12a23.732 23.732 0 0 1-16.96 7.04z"
                fill="#ffffff"
                p-id="4560"
              ></path></svg
          ></el-button>
          <p>文件输出</p>
        </span>
        <span class="l-box status">
          <p>运行状态</p>
          <el-button
            class="btn-grad4"
            type="warning"
            circle
            @click="changeStatus"
            ><svg
              v-show="stopImg1"
              t="1676970953929"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5648"
              width="32"
              height="32"
            >
              <path
                d="M673.5 63.6H349.2C191 63.6 62.3 192.2 62.3 350.4v324.3c0 158.2 128.7 286.8 286.8 286.8h324.3c158.2 0 286.8-128.6 286.8-286.8V350.4c0.1-158.2-128.5-286.8-286.7-286.8z m230.4 611.1c0 127.3-103.2 230.4-230.4 230.4H349.2c-127.2 0-230.4-103.2-230.4-230.4V350.4C118.8 223.1 222 120 349.2 120h324.3c127.3 0 230.4 103.1 230.4 230.4v324.3z"
                fill="#ffffff"
                p-id="5649"
              ></path>
              <path
                d="M177.6 584.4c10.4 0 18.8-8.4 18.8-18.8V343.2c0-80.3 65.3-145.7 145.6-145.7h338.6c34.2 0 67.5 12.2 93.7 34.2 7.9 6.7 19.8 5.7 26.5-2.3 6.7-8 5.7-19.8-2.3-26.5-33-27.7-74.8-43-117.9-43H342c-101 0-183.3 82.2-183.3 183.3v222.3c0.1 10.4 8.5 18.9 18.9 18.9zM826.3 328.2v353.7c0 80.3-65.3 145.7-145.7 145.7H342c-80.3 0-145.6-65.3-145.6-145.7 0-10.4-8.4-18.8-18.8-18.8s-18.8 8.4-18.8 18.8c0 101.1 82.2 183.3 183.3 183.3h338.6C781.8 865.2 864 783 864 681.9V328.2c0-10.4-8.4-18.8-18.8-18.8-10.5 0-18.9 8.4-18.9 18.8z"
                fill="#ffffff"
                p-id="5650"
              ></path>
              <path
                d="M400.1 353.8c-5.8-2.9-12.8-2.6-18.3 0.8-5.5 3.4-8.9 9.5-8.9 16v283.8c0 6.5 3.4 12.6 8.9 16 3 1.9 6.5 2.8 9.9 2.8 2.9 0 5.7-0.7 8.4-2L684 529.4a18.769 18.769 0 0 0 0-33.6l-283.9-142z m10.4 270.3v-223l223 111.5-223 111.5z"
                fill="#ffffff"
                p-id="5651"
              ></path>
            </svg>
            <svg
              v-show="stopImg2"
              t="1676971423473"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6816"
              width="32"
              height="32"
            >
              <path
                d="M512 960C264.96 960 64 758.997333 64 512 64 264.96 264.96 64 512 64c246.997333 0 448 200.96 448 448 0 11.818667-9.557333 21.333333-21.333333 21.333333s-21.333333-9.514667-21.333333-21.333333c0-223.488-181.845333-405.333333-405.333333-405.333333S106.666667 288.512 106.666667 512c0 223.530667 181.845333 405.333333 405.333333 405.333333 166.485333 0 318.592-104.32 378.368-259.669333 4.266667-11.008 16.64-16.426667 27.562667-12.245333 11.008 4.181333 16.469333 16.597333 12.245333 27.562667C864.128 844.672 696.064 960 512 960zM640 384 384 384l0 256 256 0L640 384z"
                fill="#ffffff"
                p-id="6817"
              ></path>
            </svg>
          </el-button>
          <p class="stop" ref="stopMsg">停止</p>
        </span>
      </div>
      <div class="h-center">
        <h1 class="gradient-text">SPTSystem</h1>
      </div>
      <div class="h-right">
        <p class="gradient-text">Status</p>
        <div class="s-inp">
          <el-input placeholder="状态1" v-model="input1" clearable></el-input>
          <el-input placeholder="状态2" v-model="input2" clearable></el-input>
          <el-input placeholder="状态3" v-model="input3" clearable></el-input>
          <el-input placeholder="状态4" v-model="input4" clearable></el-input>
          <el-input placeholder="状态5" v-model="input5" clearable></el-input>
          <el-input placeholder="状态6" v-model="input6" clearable></el-input>
        </div>
        <div class="s-btn">
          <el-button type="primary" plain @click="downloadFile"
            >保存能谱</el-button
          >

          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :limit="10"
            :show-file-list="false"
            :on-change="openFile"
            :disabled="openIt"
          >
            <el-button type="success" plain :disabled="openIt"
              >打开文件</el-button
            >
          </el-upload>

          <el-button type="info" plain>燃料破损</el-button>
          <el-button type="warning" plain style="margin-left: 0"
            >燃料正常</el-button
          >
        </div>
      </div>
    </div>
    <div class="info">
      <span class="info-box"
        ><span> 实时间 </span
        ><el-input placeholder="时间1" v-model="input7" clearable></el-input
      ></span>
      <span class="info-box"
        ><span>活时间</span>
        <el-input placeholder="时间2" v-model="input8" clearable></el-input
      ></span>
      <span class="info-box">
        <span>死时间</span
        ><el-input placeholder="时间3" v-model="input9" clearable></el-input
      ></span>
      <span class="info-box">
        <span>全谱计数</span
        ><el-input placeholder="计数" v-model="input10" clearable></el-input
      ></span>
      <span class="info-box"
        ><span>全谱计数率</span
        ><el-input placeholder="计数率" v-model="input11" clearable></el-input
      ></span>
    </div>
    <div class="body">
      <div id="binChart" ref="canvas"></div>
    </div>
    <el-dialog width="38rem" title="采集设置" :visible.sync="collectionSetBox">
      <CollectionSetBox> </CollectionSetBox>
    </el-dialog>

    <el-dialog
      id="file-box"
      top="0.2vh"
      width="54rem"
      title="分析设置"
      :visible.sync="analysisBox"
    >
      <AnalysiSet> </AnalysiSet>
    </el-dialog>

    <el-dialog
      id="file-box"
      width="60rem"
      top="1vh"
      title="文件输出设置"
      :visible.sync="fileOutputBox"
    >
      <FileOutput> </FileOutput>
    </el-dialog>
  </div>
</template>
<script>
import * as echarts from "echarts";
import CollectionSetBox from "./components/CollectionSet.vue";
import FileOutput from "./components/FileOutput.vue";
import AnalysiSet from "./components/AnalysiSet.vue";
export default {
  components: { CollectionSetBox, FileOutput, AnalysiSet },
  data: function () {
    return {
      fileList: [],
      stopImg1: true,
      stopImg2: false,
      stopMsg: "停止",
      openIt: false,
      collectionSetBox: false,
      analysisBox: false,
      fileOutputBox: false,
      globalBox: false,
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
    };
  },
  methods: {
    changeStatus() {
      if (this.stopImg1 == true) {
        this.stopImg1 = false;
        this.stopImg2 = true;
        this.$refs.stopMsg.innerText = "采集中";
        this.openIt = true;
      } else {
        this.stopImg2 = false;
        this.stopImg1 = true;
        this.$refs.stopMsg.innerText = "停止";
        this.openIt = false;
      }
    },

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

      option && myChart.setOption(option);
    },

    downloadFile() {
      let aLink = document.createElement("a");
      let blob = this.base64ToBlob();
      let evt = document.createEvent("HTMLEvents");
      evt.initEvent("click", true, true);
      aLink.download = "SPTSystem";
      aLink.href = URL.createObjectURL(blob);
      aLink.click();
    },
    exportImg() {
      let myChart = echarts.init(document.getElementById("binChart"));
      return myChart.getDataURL({
        type: "png",
        pixelRatio: 1,
        backgroundColor: "#fff",
      });
    },
    base64ToBlob() {
      let img = this.exportImg();
      let parts = img.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      // console.log(uInt8Array);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    },

    openFile(file) {
      console.log("打开文件内容：", file.name);
    },
  },
  mounted: function () {
    this.iChart();
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body,
html {
  height: 100%;
  min-width: 1100px;
  min-height: 40rem;
}
</style>
<style lang="scss" scoped>
@mixin disJA {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin animationBtn {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
@mixin btnBack {
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
}
@mixin textCol {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@function px2rem($px) {
  @return $px / 20 * 1rem;
}
#app {
  background: linear-gradient(45deg, #bee7e9 27%, #2980b9 85%);
  // background: #9ce5e7e0;
  // background: linear-gradient(45deg, #9be9d3 27%, #dba8e7 85%);
  // background: linear-gradient(121deg, #8770eb 0%,#88a8ec 100%);
  // background: linear-gradient(154deg, #44A08D 23%,#12F384 46%,#093637 88%);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  #file-box {
    margin-bottom: -3rem;
  }
  .header {
    height: 28%;
    display: flex;
    align-items: center;
    justify-content: center;
    .h-left {
      height: 100%;
      width: 45%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .l-box {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .el-button {
          width: 4rem;
          height: 4rem;
        }

        .btn-grad1 {
          background-image: linear-gradient(
            to right,
            #ece9e6 0%,
            #ffffff 51%,
            #ece9e6 100%
          );
          @include btnBack;
        }

        .btn-grad1:hover {
          @include animationBtn;
        }

        .btn-grad2 {
          background: linear-gradient(
            to left,
            #88b6e0 26%,
            #936dc4e1 50%,
            #4e92db 87%
          );
          @include btnBack;
        }

        .btn-grad2:hover {
          @include animationBtn;
        }

        .btn-grad3 {
          background-image: linear-gradient(
            to right,
            #4ca1af 0%,
            #c4e0e5 51%,
            #4ca1af 100%
          );
          @include btnBack;
        }

        .btn-grad3:hover {
          @include animationBtn;
        }

        .btn-grad4 {
          background-image: linear-gradient(
            to right,
            #ee0979 0%,
            #ff6a00 51%,
            #ee0979 100%
          );
          @include btnBack;
        }

        .btn-grad4:hover {
          @include animationBtn;
        }
      }
      .status {
        height: 68%;
        margin-top: -14px;
        .stop {
          margin-top: 8px;
        }
      }
    }
    .h-center {
      .gradient-text {
        font-size: px2rem(56);
        font-weight: 550;
        /* background: linear-gradient(
          137deg,
          #1f1c2c 33%,
          rgba(149, 210, 237, 0.91) 51%,
          #928dab 72%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        color: #1f1c2c;
      }
    }
    .h-right {
      height: 100%;
      width: 46%;
      display: flex;
      justify-content: space-around;
      flex-direction: row-reverse;
      padding: 1rem;
      flex-wrap: wrap;
      align-items: center;
      .el-divider {
        background-color: #000;
      }
      p {
        height: 16%;
        @include disJA;
      }
      .gradient-text {
        font-size: px2rem(26);
        font-weight: 440;
        background: linear-gradient(54deg, #12f384 22%, #093637 78%);
        @include textCol;
      }
      .s-inp {
        width: 100%;
        height: 42%;
        .el-input {
          width: 26%;
          margin-left: 4px;
          margin-bottom: 4px;
        }
      }
      .s-btn {
        margin-top: 8px;
        width: 84%;
        height: 30%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }

  .info {
    height: 8%;
    width: 100%;
    @include disJA;
    justify-content: space-evenly;
    .info-box {
      display: flex;
      flex-direction: row;
      width: 19%;
      align-items: center;
      span {
        width: px2rem(180);
      }
    }
  }

  .body {
    flex: 1;
    display: flex;
    border: 1px solid #000;
    #binChart {
      width: 96.6%;
      height: 96%;
    }
  }
  /* .footer {
    flex: 1;
    p {
      color: rgb(255, 0, 98);
    }
  } */
}
</style>
