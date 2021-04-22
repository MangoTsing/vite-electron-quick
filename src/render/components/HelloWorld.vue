<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: String
	},
	data() {
		return {
			count: 0
		}
	},
})
</script>

<style lang="sass" scoped>
h1
  color: #00c13c

</style>
