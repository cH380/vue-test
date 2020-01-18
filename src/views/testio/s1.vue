<template>
  <div>
      s1页面
      <div>
          <button>
              <router-link to="/ghome/home">
                clik me to ghome
          </router-link>
          </button>
          
          <br>
          <button style="margin: 10px 0 0 0 ">
               <router-link to="/ahome/home">
                clik me to ahome
          </router-link>
          </button>
         

      </div>

      <div style="margin: 10px 0 0 0 ">
          <input type="text" v-model='inp'>
          <button @click="btn">登录</button>
         
              <button @click="clear()">
                  clear 数据
                  </button> 
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inp: ''
        }
    },
    methods:{
        btn() {
            localStorage.setItem('a',this.inp)
        },
        clear() {
            localStorage.clear()
        }
    }
}
</script>

<style>

</style>