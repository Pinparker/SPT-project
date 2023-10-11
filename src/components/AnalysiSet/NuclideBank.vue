<template>
  <div id="home">
    <div class="atom">
      <!-- <canvas ref="canvas"></canvas> -->
      <el-image
        style="width: 56%; height: 100%"
        :src="atomicUrl"
        fit="contain"
      ></el-image>
      <!-- <img :src="atomicUrl" /> -->
    </div>

    <el-row style="margin-bottom: 8px">
      <el-col :span="28"><span>创建时间</span></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"
        ><el-table
          height="280"
          size="small"
          :data="tableData"
          style="width: 100%; border: 1px solid #dcdfe6; border-bottom: 0px"
        >
          <el-table-column
            align="center"
            show-overflow-tooltip
            label="核素"
            prop="nuclide"
          >
          </el-table-column>
          <el-table-column align="center" width="82">
            <template slot-scope="scope">
              <el-button @click="setClick(scope.row)" type="text" size="small"
                >设置</el-button
              >
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-divider content-position="center"
          ><i class="el-icon-sugar"></i
        ></el-divider>
        <div class="nuclide-bottomBox">
          <el-input
            placeholder="请输入核素"
            size="mini"
            style="width: 130px"
            v-model="addData"
            clearable
          ></el-input>
          <el-button
            size="mini"
            style="margin-left: 20px"
            type="primary"
            plain
            @click="addNuclide"
            >添加</el-button
          >
        </div>
      </el-col>
      <el-col style="margin-left: 10px" :span="17"
        ><el-form
          style="width: 300px"
          label-position="left"
          size="small"
          ref="form"
          label-width="100px"
        >
          <el-form-item label="半衰期(m)">
            <el-input
              placeholder="请输入内容"
              v-model="halfLife"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="不确定度(%)">
            <el-input
              placeholder="请输入内容"
              v-model="uncertainty"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
        <el-divider content-position="center"
          ><el-button size="mini" type="warning" plain
            >修改</el-button
          ></el-divider
        >
        <el-row>
          <el-col :span="3"><span>峰信息：</span></el-col>
        </el-row>
        <el-row>
          <el-col
            style="border: 1px solid #dcdfe6; border-bottom: 0px"
            :span="16"
            ><el-table
              height="153"
              size="small"
              :data="peakInformation"
              style="width: 100%"
            >
              <el-table-column
                width="66"
                align="center"
                label="序号"
                type="index"
              >
              </el-table-column>
              <el-table-column
                align="center"
                show-overflow-tooltip
                label="能量(keV)"
                prop="energy"
              >
              </el-table-column>
              <el-table-column
                align="center"
                show-overflow-tooltip
                label="分支比"
                prop="branchRatio"
              >
              </el-table-column>
              <el-table-column width="120px" align="center" label="操作">
                <template slot-scope="scope">
                  <!-- `checked` 为 true 或 false -->
                  <el-checkbox
                    v-model="scope.row.checked"
                    @change="useCheck(scope.row)"
                    ><span style="font-size: 8px">使用</span></el-checkbox
                  >
                  <el-button
                    @click.native.prevent="
                      deleteRow(scope.$index, peakInformation)
                    "
                    type="text"
                    size="small"
                    style="margin-left: 10px"
                    >移除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="8">
            <el-form
              style="width: 200px; margin-left: 10px"
              label-position="left"
              size="small"
              ref="form"
              label-width="80px"
            >
              <el-form-item label="能量(keV)">
                <el-input
                  placeholder="能量"
                  v-model="energy"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="分支比">
                <el-input
                  placeholder="分支比"
                  v-model="branch"
                  clearable
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button
              size="mini"
              style="margin-left: 154px"
              type="primary"
              plain
              @click="addEnergy"
              >添加</el-button
            >
          </el-col>
        </el-row>
        <el-row style="margin-top: 24px; border-left: 1px solid #dcdfe6">
          <el-col :span="16"
            ><el-button size="mini" type="success" plain
              >确认使用</el-button
            ></el-col
          >
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as THREE from "three";
// import Stats from "three/addons/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "ThreeTest",
  data: function () {
    return {
      atomicUrl: require("@/assets/images/92U.webp"),
      tableData: [
        {
          atomicUrl: require("@/assets/images/92U.webp"),
          nuclide: "92U",
          halfLife: 238.029,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 233.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 29.129,
              branchRatio: 0.28,
              checked: false,
            },
            {
              energy: 929.79,
              branchRatio: 0.298,
              checked: false,
            },
            {
              energy: 79.277,
              branchRatio: 0.198,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/54Xe.webp"),
          nuclide: "54Xe",
          halfLife: 123.12,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 113.22,
              branchRatio: 0.6,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/96Cm.webp"),
          nuclide: "96Cm",
          halfLife: 3153.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 2133.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 2932.129,
              branchRatio: 0.28,
              checked: false,
            },
            {
              energy: 29.79,
              branchRatio: 0.298,
              checked: false,
            },
            {
              energy: 9.27,
              branchRatio: 0.198,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/50Sn.webp"),
          nuclide: "50Sn",
          halfLife: 7549.92,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 80.997,
              branchRatio: 0.55,
              checked: true,
            },
            {
              energy: 11.342,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 611.342,
              branchRatio: 0.18,
              checked: true,
            },
            {
              energy: 141.342,
              branchRatio: 0.21,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/94Pu.webp"),
          nuclide: "94Pu",
          halfLife: 153.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 233.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 29.779,
              branchRatio: 0.298,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/87Fr.webp"),
          nuclide: "87Fr",
          halfLife: 313.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 33.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 2229.779,
              branchRatio: 0.28,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/91Pa.webp"),
          nuclide: "91Pa",
          halfLife: 3111.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 233.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 29.779,
              branchRatio: 0.298,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/95Am.webp"),
          nuclide: "95Am",
          halfLife: 53.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 233.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 29.779,
              branchRatio: 0.298,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/85At.webp"),
          nuclide: "85At",
          halfLife: 333.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 233.22,
              branchRatio: 0.1,
              checked: true,
            },
            {
              energy: 29.779,
              branchRatio: 0.298,
              checked: false,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/23V.webp"),
          nuclide: "23V",
          halfLife: 109.8,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 1293.64,
              branchRatio: 0.9916,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/64Gd.webp"),
          nuclide: "64Gd",
          halfLife: 2769912,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 1173.24,
              branchRatio: 0.999,
              checked: true,
            },
            {
              energy: 1332.5,
              branchRatio: 0.9998,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/82Pb.webp"),
          nuclide: "82Pb",
          halfLife: 289.12,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 73.24,
              branchRatio: 0.332,
              checked: true,
            },
            {
              energy: 1332.5,
              branchRatio: 0.118,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/60Nd.webp"),
          nuclide: "60Nd",
          halfLife: 1111.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 1453.22,
              branchRatio: 0.6,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/62Sm.webp"),
          nuclide: "62Sm",
          halfLife: 221.6,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 13.22,
              branchRatio: 0.6,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/77Lr.webp"),
          nuclide: "77Lr",
          halfLife: 192.22,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 192.22,
              branchRatio: 0.6,
              checked: true,
            },
          ],
        },
        {
          atomicUrl: require("@/assets/images/93Np.webp"),
          nuclide: "93Np",
          halfLife: 237,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 237,
              branchRatio: 0.6,
              checked: false,
            },
          ],
        },
      ],
      addData: "",
      halfLife: 238.029,
      uncertainty: 0,
      energy: "",
      branch: "",
      peakInformation: [
        {
          energy: 233.22,
          branchRatio: 0.1,
          checked: true,
        },
        {
          energy: 29.129,
          branchRatio: 0.28,
          checked: false,
        },
        {
          energy: 929.79,
          branchRatio: 0.298,
          checked: false,
        },
        {
          energy: 79.277,
          branchRatio: 0.198,
          checked: false,
        },
      ],
    };
  },
  methods: {
    getData() {
      for (let i = 0; i < 1; i++) {
        this.tableData.push({
          nuclide: "47Ag",
          atomicUrl: require("@/assets/images/47Ag.webp"),
        });
      }
      for (let i = 0; i < 1; i++) {
        this.tableData.push({
          nuclide: "63Eu",
          atomicUrl: require("@/assets/images/63Eu.webp"),
        });
        // console.log("table", this.tableData.length);
      }
    },
    addNuclide() {
      if (this.addData) {
        this.tableData.unshift({
          nuclide: this.addData,
          atomicUrl: require("@/assets/images/原子.gif"),
          halfLife: 0,
          uncertainty: 0,
          energy: "",
          branch: "",
          peakInformation: [
            {
              energy: 0,
              branchRatio: 0,
              checked: false,
            },
          ],
        });
        this.addData = "";
      }
    },
    addEnergy() {
      console.log("energy", this.energy);
      this.peakInformation.unshift({
        energy: this.energy,
        branchRatio: this.branch,
        checked: false,
      });
    },
    /* handleClick(row) {
      alert("这是分支比" + row.branchRatio);
    }, */
    useCheck(row) {
      this.tableData.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].peakInformation !== row) {
            item[i].peakInformation.checked = false;
          }
        }
      });
    },
    setClick(row) {
      if (row) {
        this.atomicUrl = row.atomicUrl;
        this.halfLife = row.halfLife;
        this.uncertainty = row.uncertainty;
        this.peakInformation = row.peakInformation;
        this.energy = row.energy;
        this.branch = row.branch;
      } else {
        console.log(row);
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    webGLinit() {
      const canvas = this.$refs.canvas;
      const renderer = new THREE.WebGLRenderer({ canvas });

      const scene = new THREE.Scene();
      /*     PerspectiveCamera( fov, aspect, near, far ) 参数解析
              fov(Number): 仰角的角度
              aspect(Number): 截平面长宽比，多为画布的长宽比。
              near(Number): 近面的距离
              far(Number): 远面的距离
       */
      const camera = new THREE.PerspectiveCamera(
        95,
        canvas.width / canvas.height,
        0.01,
        10000
      );
      camera.position.z = 6;
      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(1, 0, 10);
      scene.add(light);
      camera.lookAt(110, 10, 20);

      /* // 坐标轴辅助器，X(红),Y（绿）,Z（蓝）长度30
      var axes = new THREE.AxesHelper(300);
      scene.add(axes);
      // 辅助网格
      let gridHelper = new THREE.GridHelper(100, 100);
      scene.add(gridHelper); */

      const geometry1 = new THREE.BoxGeometry(2, 0.01, 5, 5, 5, 5);
      const material1 = new THREE.MeshBasicMaterial({ color: "#fdcbf1" });
      const cube = new THREE.Mesh(geometry1, material1);
      // scene.add(cube);

      const geometry2 = new THREE.CircleGeometry(6, 128, 0);
      const material2 = new THREE.MeshBasicMaterial({ color: "#fff" });
      const circle = new THREE.Mesh(geometry2, material2);
      // scene.add(circle);

      const geometry = new THREE.SphereGeometry(2, 32, 32);
      // 轨道线
      let r = 4;
      for (let x = 0; x <= 180; x += 120) {
        const points = [];

        for (let y = 0; y < 360; y += 0.5) {
          let yy = r * Math.sin((Math.PI / 180) * y);

          let yr = r * Math.cos((Math.PI / 180) * y);

          let xx = yr * Math.sin((Math.PI / 180) * x);
          let zz = yr * Math.cos((Math.PI / 180) * x);
          points.push(new THREE.Vector3(xx, yy, zz));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        scene.add(line);
      }
      const line = new THREE.Line(geometry, material);
      scene.add(line);

      const textureLoader = new THREE.TextureLoader().load(
        require("../../assets/images/原子3.jpg")
      );
      // 几何体材质对象
      var material = new THREE.MeshLambertMaterial({
        map: textureLoader,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 3;
      controls.maxDistance = 20;
      controls.addEventListener("resize", animate(), false);

      function animate() {
        // mesh.rotation.y += 0.005;
        // circle.rotation.y += 0.009;
        // cube.rotation.z += 0.005;

        let count = 0;
        const time = performance.now() / 1000;

        scene.traverse(function (child) {
          child.rotation.x = count + time / 2;
          // child.rotation.z = count + time / 4;
          child.rotation.y = count + time / 4;

          count += 100;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    },
  },
  mounted() {
    this.getData();
    // this.webGLinit();
  },
};
</script>

<style scoped lang="less">
#home {
  .atom {
    position: absolute;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 280px;
    right: 8px;
    top: 12px;
    overflow: hidden;
    /* canvas {
      width: 252px;
      height: 120px;
    } */
    /* img {
      width: 56%;
      height: 100%;
    } */
  }
  // del_table-scrollable
  /*   .el-table--scrollable-y ::-webkit-scrollbar {
    display: none;
  }
  .el-table__body{
    width: 100% !important;
  } */
  .nuclide-bottomBox {
    display: flex;
  }
}
</style>
