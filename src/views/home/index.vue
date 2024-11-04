<script setup lang="ts">
import { useCounterStore } from '@/store/index'

const counterStore = useCounterStore()
const router = useRouter()

function toLogin() {
  router.push(`/login`)
}
function toList() {
  router.push(`/list`)
}
function toListChildren() {
  router.push(`/list/children`)
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div class="card">
    <p>父元素元素：</p>
    <button type="button" @click="counterStore.increment">
      actions: increment
    </button>
    <p>state: {{ counterStore.count }}</p>
    <p>getters: {{ counterStore.double }}</p>
  </div>

  <!-- <HelloWorld msg="vite-vue3-ts-admin" /> -->

  <ul>
    <li @click="toLogin">登录页</li>
    <li @click="toList">列表页</li>
    <li @click="toListChildren">列表页二級</li>
  </ul>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

ul {
  display: inline-block;
  width: 100%;
}
li {
  padding: 5px 10px;
  background-color: rgb(177, 177, 209);
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    background-color: rgb(26, 26, 87);
    color: white;
  }
}
</style>
