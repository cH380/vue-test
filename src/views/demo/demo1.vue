<template>
  <div>
      <h1>这里是demo1</h1>
      <router-link to="/demo2/1">点击我可以去demo2</router-link>
      <p>$route.fullPath==={{$route.fullPath}}</p>
      <p>$route.path==={{$route.path}}</p>
      <p>$route.hash===={{$route.hash}}</p>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route)//获取当前路由
        // console.log(this.$router)
    }
}
</script>

<style>

</style>