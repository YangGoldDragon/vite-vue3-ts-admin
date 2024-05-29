<script setup lang="ts">
import variable from "@/styles/variable.module.scss";
import { useCounterStore } from "@/store/index"
import { loginAPI } from "@/api/common"

defineProps<{ msg: string }>();

const counterStore = useCounterStore();

function loginAPIFunc() {
  loginAPI({}).then(() => {
    console.log('loginAPI请求成功')
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>子元素：</p>
    <button type="button" @click="counterStore.increment">actions: increment</button>
    <p>state: {{ counterStore.count }}</p>
    <p>getters: {{ counterStore.double }}</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div>
    <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
    <el-button type="info"><i-ep-InfoFilled />Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
  </div>
  <div :style="{ 'margin-top': '20px', 'background-color': variable.$bgColor }">
    <svg-icon icon-class="doge" size="5em" />
    <div class="blue">SVG 本地图标</div>
    <div class="ft20-blue">SVG 本地图标2</div>
  </div>
  <div class="login" @click="loginAPIFunc">登 录</div>
</template>

<style lang="scss" scoped>
.red {
  color: $red;
}

.login {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(66, 106, 167);
  padding: 5px 0;
  cursor: pointer;
  border: 1px solid rgb(66, 106, 167);
}
</style>
