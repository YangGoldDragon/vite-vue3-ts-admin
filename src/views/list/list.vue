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
  width: 500px;
  justify-content: flex-start;
}

.routeList{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 500px;
  margin-top: 5px;
}
</style>
