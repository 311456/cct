<!-- 盲盒 -->
<template>
  <div class="gift">
        <NavBar :fnTitle="title"></NavBar>
    <div class="content">盲盒</div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  data() {
    return {
      title: '盲盒'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped></style>
