<template>
  <router-view></router-view>
</template>
<script lang='ts'>
import { useRouter } from 'vue-router'
export default {
  name: 'app',
  setup() {
    const router = useRouter()
    router.push('/')
  }
}
</script>