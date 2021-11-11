<!-- 发布nav-->
<template>
  <div class="fire" slot-scope="">
    <!-- <van-nav-bar :title="fnTitle" left-text="返回" right-text="发送" left-arrow fixed placeholder @click-left="onClickLeft" @click-right="onClickRight(info)">
    </van-nav-bar> -->
<van-nav-bar :title="fnTitle" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
  <template #right>
    <button  id="send_btn">发送</button>
  </template>
</van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar2',
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
    }
  }
}
</script>

<style scoped>
#send_btn{
    background-color: red;
    color: white;
    border: none;
    outline: none;
    padding:3px 15px;
    border-radius: 30px;
}</style>
