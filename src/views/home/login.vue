<!-- 登录 -->
<template>
  <div class="login">
    <div class="login_head">CCT-你的校园好帮手</div>
    <div class="login_banner">
      <van-cell-group>
        <van-field v-model="account" clearable label="用户名" icon="question-o" placeholder="请输入用户名" />
        <van-field
          v-model="password"
          clearable
          label="密码"
          icon="question-o"
          type="password"
          placeholder="请输入密码"
        />
        <div class="login_div_button">
          <van-button class="login_button" type="info" size="small" @click="judge()">登 录</van-button>
          <van-button class="login_button" type="default" size="small" to="./register">注 册</van-button>
        </div>
      </van-cell-group>
    </div>
    <div class="login_footer">Copyright · ©成都东软学院</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
import { login } from 'api/user.js'

Vue.use(Lazyload)
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  components: {},
  methods: {
    Change(v) {
      console.log('tab value:', v)
    },
    judge() {
      if (this.username !== '' && this.password !== '') {
        // this.$router.replace('/home')
        const data = {
          account: '',
          password: ''
        }
        Object.keys(data).forEach(key => {
          data[key] = this[key]
        })
        login(data)
          .then(result => {
            if (result.msg === 100) {
              this.$toast(result.data)
            } else if (result.code === 200) {
              sessionStorage.setItem('token', result.data.token)
              sessionStorage.setItem('account', this.account)
              this.$router.replace('/home')
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: calc(100vw);
  height: calc(100vh);
  background: linear-gradient(#ed8989, #5b62b5);
}
.login_head {
  /* background-color: rgba(85, 161, 233, 0.671); */
  box-sizing: border-box;
  padding-left: 20.000004px;
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 24px;
  color: white;
  background: rgba(255, 255, 255, 0.281);
}
.login_footer {
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: black;
  height: 60px;
  line-height: 60px;
  font-size: 12px;
  width: 100%;
  text-align: center;
}
.login_banner {
  background: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 300px;
}
.login_div_button {
  padding: 21px;
  display: flex;
  justify-content: space-around;
}
.login_button {
  padding: 0 21px;
}
</style>
