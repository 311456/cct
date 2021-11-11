<template>
  <div class="app-container">
    <div class="layout-content">
      <!-- <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive> -->
      <router-view></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import { Dialog } from 'vant'
export default {
  name: 'AppLayout',
  data() {
    return {
      show: false,
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'wap-home-o'
        },
        {
          title: '大学',
          to: {
            name: 'Campus'
          },
          icon: 'like-o'
        },
        {
          title: '发布',
          to: {
            name: 'Publish'
          },
          icon: 'add-o'
        },
        {
          title: '消息',
          to: {
            name: 'Message'
          },
          icon: 'chat-o'
        },
        {
          title: '我的',
          to: {
            name: 'UserInfo'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      if (v === 2 || v === 3 || v === 4) {
        if (!sessionStorage.getItem('token')) {
          Dialog.confirm({
            message: '您未登录，请点击以下按钮进行登录',
            theme: 'round-button'
          })
            .then(() => {
              this.$router.push('/login')
            })
            .catch(() => {
              this.$router.push('/home')
            })
        }
      }
    }
  }
}
</script>
<style>
.van-icon-add-o {
  color: rgb(233, 40, 210);
}
.loginBtn {
  margin: 1px 60px;
}
</style>
