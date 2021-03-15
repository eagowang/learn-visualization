<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :default-active="$route.path" :router="true">
        <el-menu-item index="/">
          Home
        </el-menu-item>
        <el-menu-item index="/tween">Tween Demo</el-menu-item>
        <el-menu-item index="/css"> CSS Demo</el-menu-item>
        <el-menu-item index="/d3"> D3 Demo</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    return {};
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
.el-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  padding: 0;
}

.el-main {
  background-color: #b3c0d1;
  color: #333;
  flex: 1;
}
</style>
