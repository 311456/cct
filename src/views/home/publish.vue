<!-- 发布 -->
<template>
  <div class="publish">
    <van-nav-bar title="发布" />
    <van-cell is-link title="选择要发布的消息" @click="show = true" />
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: '发布吐槽' },
        { name: '发布表白' },
        { name: '发布闲置' },
        { name: '发布乐跑' },
        { name: '发布盲盒' },
        { name: '发布拼伞' }
      ]
    }
  },
  mounted() {
    if (sessionStorage.getItem('token')) this.show = true
  },
  methods: {
    onCancel() {
      this.$toast('取消')
    },
    onSelect(action, index) {
      // console.log(action, index)
      switch (index) {
        case 0: {
          this.$router.push('/send_fire')
          break
        }
        case 1: {
          this.$router.push('/send_like')
          break
        }
        case 2: {
          this.$router.push('/send_coin')
          break
        }
        case 3: {
          this.$router.push('/send_fire')
          break
        }
        case 4: {
          this.$router.push('/send_fire')
          break
        }
        case 5: {
          this.$router.push('/send_fire')
          break
        }
      }
    }
  }
}
</script>

<style scoped></style>
