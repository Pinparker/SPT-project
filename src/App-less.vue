<template>
  <div id="app">
    <div class="div1"></div>
    <div class="div2">
      <p></p>
      <div></div>
    </div>
    <div id="div3">
      <ul>
        <li>
          <a>111</a>
        </li>
        <li>
          <a>222</a>
        </li>
        <li>
          <a>333</a>
        </li>
      </ul>
    </div>
    <div class="div4">qqqq <span>bbbb</span></div>
  </div>
</template>
<style lang="less" scoped>
// 变量
// @变量名：变量值；
@w: 100px;
@h:10px *5;
@url: "./assets/images/";
@r: red;
@y: yellow;
@c: rgb(0, 255, 106);
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
  // display: flex;
}
.div1 {
  width: @w;
  height: @h + 100px;
  background: url("@{url}logo.png");
  background-size: 100% 100%;
  border: 1px solid @c+ @r+ @y;
}
.div2 {
  width: auto;
  height: auto;
}
// 混合(视情况使用)
.border(@wid,@borderType,@color,@bc) {
  border: @wid @borderType @color;
  background: @bc;
  width: 100px;
}
.div2 p {
  height: 200px;
  .border(10px,dashed,rgba(7, 7, 7, 0.888),rgba(255, 166, 0, 0.747));
}
.div2 div {
  .border(10px,solid,rgb(56, 211, 180),rgb(50, 169, 243));
  height: 100px;
}

// 嵌套
#div3 {
  width: 500px;
  height: 500px;
  border: 1px solid rgb(0, 38, 255);

  ul {
    .border(10px,dashed,rgba(7, 7, 7, 0.888),rgba(255, 166, 0, 0.747));
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    transition: 2s linear;
    transform: rotate(90deg);
    li {
      flex: 1;
      list-style: none;

      a {
        color: red;
        &:hover {
          cursor: pointer;
          color: rgb(0, 255, 81);
        }
      }
    }
  }
}
</style>
