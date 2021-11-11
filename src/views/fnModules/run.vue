<!-- 乐跑 -->
<template>
  <div class="run">
    <NavBar :fnTitle="title"></NavBar>
    <div class="content">乐跑</div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  data() {
    return {
      title: '乐跑'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped></style>
