<template>
  <div class="logo-box">
    <svg data-v-45502113="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="500px" y="0px" viewBox="0 0 1024 1024" xml:space="preserve"><g data-v-45502113="" fill="currentColor"><polygon data-v-45502113="" id="Fill-1" points="0,265 285.3,992.6 316.9,193.8 	" class="st0"></polygon> <polygon data-v-45502113="" id="Fill-2" points="389.3,180.1 295.3,993.7 1024,30.3 	" class="st0"></polygon></g></svg>
  </div>
  <Helo :msg="`Electron ${ state.version }`" />
  <Helo msg="Vue 3.0 + Vite" />
  <div>
    <el-button style="width: 60%;" @click="increment">点我</el-button>
  </div>
  <p>count: {{state.count}}</p>
  <p>double: {{state.double}}</p>
  <router-link class="success" to="/create">跳转路由</router-link>
</template>

<script>
import Helo from '../components/HelloWorld.vue'
import { reactive, computed } from 'vue'
const version = require('process').versions.electron
export default {
  name: 'Index',
  components: {
    Helo
  },
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      version: version
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment,
    }
  },
}
</script>

<style lang="scss" scoped>
.logo-box {
  width: 20%;
  margin-left: 130px;
}
.success {
  background: #00c13c;
  border: none;
  border-radius: 10px;
  padding: 10px 80px;
  color: #fff;
  text-decoration: none;
}
</style>

