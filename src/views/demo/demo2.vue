<template>
  <div>
      <h1>这里是demo2--动态路由匹配</h1>
      <router-link to="/demo1/1">点击我可以去demo1</router-link>
  <hr>
      <div>
        <button @click="btn({path:'/demo2/1'})">1</button>
        <button @click="btn({path:'/demo2/2'})">2</button>
        <button @click="btn({path:'/demo2/3'})">3</button>
      </div>
      <div>
        <div>用户id为 {{$route.params.test}}</div>
<br>
        <div class="d1"  v-if="a ==='1'">
          1 
        </div>
        <div class="d2"  v-if="a ==='2'">
          2
        </div>
        <div class="d3"   v-if="a ==='3'">
          3
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      a:'1'
    }
  },
  mounted () {
    console.log(this.$route.params.test)
    this.init()
  },
  methods:{
    btn(id) {
      this.$router.push(id)
     this.a = this.$route.params.test.toString()
     
    },
    init() {
       if(this.$route.params.test){
      this.a = this.$route.params.test
    }
    }
  }
}
</script>
