<template>
  <div id="app">
    <!-- <h1>父组件app</h1>
    <Test color="red" tit="aaa"></Test>
    <Test color="pink" tit="bbb" />
    <Test color="blue" tit="ccc" /> -->
    <h1>{{ childMsg }}</h1>
    <Header @aaa="fn" :msg="a"></Header>
    <div class="con">
      <Nav />
      <Content />
    </div>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    Test,
    Header,
    Nav,
    Content,
  },
  methods: {
    fn: function (v) {
      this.childMsg = v;
    },
  },
  data: function () {
    return {
      a: "我是父组件的数据",
      childMsg: "",
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  height: 100%;
}
#app {
  height: 100%;
  background: #ccc;
  text-align: center;
}
.con {
  height: calc(100% - 50px);
  display: flex;
}
</style>
