<template>
  <div id="app">
    <router-link to="/Home">首页</router-link>
    <!--    <router-link to='/about'>详情页</router-link>-->
    <hr />
    <el-button>ElementPlus的按钮</el-button>
    <el-button type="primary">ElementPlus的按钮</el-button>
    <el-button type="info">ElementPlus的按钮</el-button>
    <br />
    <hr />
    <el-input placeholder="我是输入框" label="输入框"></el-input>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
// import 'element-plus/es/components/button/style/css'
// 让组件更好的支持ts
export default defineComponent({
  Components: {
    // ElButton
  },
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
