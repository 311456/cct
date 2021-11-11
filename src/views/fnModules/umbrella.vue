<!-- 拼伞 -->
<template>
  <div class="umbrella">
    <NavBar :fnTitle="title"></NavBar>
    <div class="content">拼伞</div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  data() {
    return {
      title: '拼伞'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped></style>
