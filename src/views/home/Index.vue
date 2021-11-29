<template>
  <div>
    <el-button v-throttling="fun" type="primary">按钮</el-button>
    <div>
      <svg-icon icon-class="menu-icon" class="menu-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'HomePage',
  setup() {
    function fun() {
      ElMessage.success('消息')
    }

    return {
      fun,
    }
  },
})
</script>
