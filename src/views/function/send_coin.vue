<!-- 发布闲置 -->
<template>
  <div class="coin">
        <NavBar2 :fnTitle="title"></NavBar2>
    <div class="content">
      <div class="send_info">
        <textarea id="send_info_text" placeholder="大家都想知道你闲置物品的信息"></textarea>
      </div>
      <div class="send_function">
        <div class="fun">
          <van-icon name="orders-o" size="25" />
          <span>分类/品牌/容量等</span>
        </div>
        <div class="fun">
          <van-icon name="balance-o" size="25" />
          <span>价格</span>
          <van-field v-model="value"  placeholder="请输入用户名" style="display:inline-block;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar2 from '@/components/NavBar2'

export default {
  data() {
    return {
      title: '发布闲置',
      checked: true
    }
  },
  components: {
    NavBar2
  }
}
</script>

<style scoped>
#send_info_text {
  margin-top: 5px;
  display: block;
  width: calc(90vw);
  padding: 10px;
  height: calc(40vh);
  margin: 0 auto;
  background-color: rgba(228, 228, 228, 0.644);
  border: none;
  outline: none;
  resize:none;
}
.send_function {
  margin-top: 5px;
  width: calc(90vw);
  padding: 10px;
  margin: 0 auto;
  /* vertical-align: middle; */
}
.send_function span {
  /* display: inline-block; */
  /* height: 25px; */
  vertical-align: middle;
  margin-left: 15px;
  font-size: 15px;
}
.fun {
  height: 50px;
  padding: 0 15px;
  margin: 10px 0;
  /* vertical-align: middle!important; */
}
.van-icon {
  vertical-align: middle!important;
}
.van-switch {
  float: right;
}
</style>
