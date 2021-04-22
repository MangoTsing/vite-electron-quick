<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
  setup() {
    const router = useRouter()
    router.push('/')
  },
})
</script>
