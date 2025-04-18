<script setup lang="ts">
const route = useRoute();
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const formatRoute = ref(Object.keys(route).map(key => {
  return {
    key,
    value: route[key as keyof RouteLocationNormalizedLoaded] ?? ""
  }
}))
</script>

<template>
  <div class="home">列表页</div>
  <div class="routeTitle">路由API:</div>
  <div v-for="(item, index) of formatRoute" :key="index" class="routeList">
    <div>key: {{item.key}}</div>
    <div>value: {{item.value}}</div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  font-size: 32px;
  font-weight: bold;
  color: red;
}

.routeTitle{
  display: flex;
  justify-content: flex-start;
  width: 500px;
}

.routeList{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 500px;
  margin-top: 5px;
}
</style>
