<!-- 吐槽 -->
<template>
  <div class="fire">
    <van-nav-bar :title="fnTitle" left-text="返回" right-text="发布" left-arrow fixed placeholder @click-left="onClickLeft" @click-right="onClickRight">
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    fnTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log(this.fnTitle)
      // eslint-disable-next-line eqeqeq
      if (this.fnTitle == '表白') {
        this.$router.push('/send_like')
      // eslint-disable-next-line eqeqeq
      } else if (this.fnTitle == '吐槽') {
        this.$router.push('/send_fire')
      // eslint-disable-next-line eqeqeq
      } else if (this.fnTitle == '闲置') {
        this.$router.push('/send_coin')
      }
    }
  }
}
</script>

<style scoped></style>
