<template>
  <div>
    home
    <div class="aa" v-if="aa"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const aa = '88'
    console.log(aa)
  },
  data() {
    return {}
  },
  name: 'Home',
})
</script>
