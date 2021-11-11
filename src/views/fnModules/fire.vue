<!-- 吐槽 -->
<template>
  <div class="fire">
    <NavBar :fnTitle="title"></NavBar>
    <div class="content">
      <div class="info_show" :data="info_show_all">
        <template>
          <div class="top" style="margin-top: 15px">
            <img
              src="https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108091933.png"
              alt=""
              style="position: relative; left: 47.5%; top: -10%"
            />
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
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { getAlltucao } from 'api/user.js'
export default {
  data() {
    return {
      title: '吐槽'
    }
  },
  components: {
    NavBar
  },
  mounted() {
    getAlltucao()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {}
}
</script>

<style scoped>
.info_show {
  width: 80%;
  margin: 0 auto;
}
.top {
  height: 100px;
  background-color: rgb(255, 243, 73);
}
.bottom {
  display: flex;
  background-color: rgba(218, 218, 218, 0.247);
}
.bottom_left,
.bottom_right {
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
}
</style>
