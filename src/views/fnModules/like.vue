<!-- 表白 -->
<template>
  <div class="like">
    <NavBar :fnTitle="title"></NavBar>
    <div class="content">
      <div class="theme_squ">
        <div class="theme_squ_top" style="font-size:15px;margin-top:10px;">话题广场</div>
        <div class="theme_squ_bottom">
          <div class="theme1">
            <div class="main_info">海底捞</div>
            <div class="detail"></div>
          </div>
          <div class="theme2">
            <div class="main_info">卖舍友</div>
            <div class="detail"></div>
          </div>
          <div class="theme3">
            <div class="main_info">找对象</div>
            <div class="detail"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 信息展示 -->
      <div class="info_show" :data="info_show_all">
      <template>
        <div style="font-size:15px;margin-top:10px;">动 态</div>
        <div class="top" style="margin-top:15px;" >
          <img src="https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108091908.png" alt="" style="position:relative;left:47.5%;top:-10%;">
        </div>
        <div class="bottom">
        <div class="bottom_left">
          <van-icon size="25" name="like-o" />
          <span>1231</span>
        </div>
        <div class="bottom_right">
          <van-icon size="25" name="star-o" />
          <span>123</span>
          <van-icon size="25" name="upgrade" />
          <span>222</span>
          <van-icon size="25" name="good-job-o" />
          <span>33</span>
        </div>
      </div>
      </template>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  data() {
    return {
      title: '表白'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.theme_squ {
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
}
.theme_squ_bottom {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid pink;
}
.theme1,.theme2,.theme3 {
  width: 2rem;
  background-color: rgb(252, 129, 150);
  height: 2rem;
}
.main_info {
  color: white;
  padding-left: 5px;
}
.detail {
  padding: 5px;
}
.info_show {
  width: 80%;
  margin: 0 auto;
}
.top {
  height: 100px;
  background-color: rgb(252, 129, 150);
}
.bottom {
  display: flex;
  background-color: rgba(218, 218, 218, 0.247);
}
.bottom_left,.bottom_right {
  width: 50%;
}
.bottom_left .van-icon,
.bottom_right .van-icon {
  vertical-align: middle;
}
.bottom_left span,
.bottom_right span {
  vertical-align: middle;
  margin-right: 5px;
}
.show {
  margin-top: 15px;
}</style>
