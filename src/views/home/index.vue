<!-- 首页 -->
<template>
  <div class="index-container">
    <div class="search">
    <div class="date1">
        <van-cell id="spccell" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
    <div class="search2">
          <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          background="#4fc08d"
          shape="round"
          @search="onSearch"
        >
          <template #action>
            <van-button round type="primary" size="small" @click="onSearch">搜索</van-button>
          </template>
        </van-search>
    </div>
    </div>
    <div class="swipe">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image class="swipeImg" fit="cover" lazy-load :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="fnModule">
      <van-grid direction="horizontal" :column-num="3" icon-size="22" clickable>
        <van-grid-item
          class="gridText"
          v-for="(fnModule, index) in fnModules"
          :icon="fnModule.icon"
          :text="fnModule.text"
          :key="index"
          :to="fnModule.to"
        />
      </van-grid>
    </div>
    <!-- 选择按钮 -->
    <div class="fun_choose">
      <van-button type="default" round size="small">表白</van-button>
      <van-button type="default" round size="small">吐槽</van-button>
      <van-button type="default" round size="small">闲置</van-button>
      <van-button type="default" round size="small">乐跑</van-button>
      <van-button type="default" round size="small">盲盒</van-button>
      <van-button type="default" round size="small">拼伞</van-button>
    </div>
    <!-- 信息展示 -->
    <div class="info_show" :data="info_show_all">
      <template>
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
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)
export default {
  data() {
    return {
      date: '选择日期',
      show: false,
      value: '',
      images: ['https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108091639.png'],
      fnModules: [// 中间功能
        {
          text: '吐槽',
          to: {
            name: 'Fire'
          },
          icon: 'https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108091933.png'
        },
        {
          text: '表白',
          to: {
            name: 'Like'
          },
          icon: 'https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108091908.png'
        },
        {
          text: '闲置',
          to: {
            name: 'Coin'
          },
          icon: 'https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108091951.png'
        },
        {
          text: '乐跑',
          to: {
            name: 'Run'
          },
          icon: 'https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108092043.png'
        },
        {
          text: '盲盒',
          to: {
            name: 'Gift'
          },
          icon: 'https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108092101.png'
        },
        {
          text: '拼伞',
          to: {
            name: 'Umbrella'
          },
          icon: 'https://gitee.com/cuckoo-of-life/imgs/raw/master/20211108092113.png'
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {
    onSearch() {
      console.log(this.value)
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      this.show = false
      this.date = this.formatDate(date)
    }
  }
}
</script>
<style scoped>
.swipeImg {
  width: 100%;
  height: 160px;
}
.fnModule {
  margin: 10px 15px;
}
.search {
  display: flex;
}
.date1 {
  width: 20%;
  height: 60px;
  padding: 0;
}
.search2 {
  height: 60px;
  width: 80%;
  padding: 0;
}
.van-search {
  height: 60px;
}
#spccell {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #4fc08d;
  color: white;
  padding: 0;
}
#spccell span {
  display: inline-block;
  width: 100%;
  color: white;
  text-align: center;
}
.fun_choose{
  display: flex;
  background-color: rgba(218, 218, 218, 0.247);
  padding: 10px;
  justify-content: space-around;
}
.info_show {
  width: 80%;
  margin: 0 auto;
}
.top {
  height: 100px;
  background-color: pink;
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
}
</style>
