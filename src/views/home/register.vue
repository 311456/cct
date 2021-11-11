<!-- 登录 -->
<template>
  <div class="register">
    <div class="register_head">CCT-你的校园好帮手</div>
    <div class="register_banner">
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" icon="question-o" placeholder="请输入用户名" />
        <van-field v-model="phone" clearable label="电 话" icon="question-o" placeholder="请输入电话" />
        <van-field v-model="email" clearable label="邮 箱" icon="question-o" placeholder="请输入邮箱" />
        <!-- <van-field v-model="school" clearable label="学 校" icon="question-o" placeholder="请输入学校" /> -->
        <van-field
          v-model="password"
          clearable
          label="密 码"
          icon="question-o"
          type="password"
          placeholder="请输入密码"
        />
        <van-field
          v-model="password2"
          clearable
          label="密码确认"
          icon="question-o"
          type="password"
          placeholder="请再次输入密码"
        />
        <div class="register_div_button">
          <!-- <van-button class="login_button" type="info" size="small" to="./home">登 录</van-button> -->
          <van-button class="register_button" type="info" size="small" @click="registerBtn">注 册</van-button>
        </div>
      </van-cell-group>
    </div>
    <div class="register_footer">Copyright · ©成都东软学院</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

import { register } from 'api/user.js'

Vue.use(Lazyload)
export default {
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      email: '',
      // school: '',
      password2: '',
      value1: 0,
      option1: [
        { text: '国防科技大学', value: 0 },
        { text: '电子科技大学', value: 1 },
        { text: '西北工业大学', value: 2 },
        { text: '西安电子科技大学', value: 3 },
        { text: '杭州电子科技大学', value: 4 }
      ]
    }
  },
  components: {},
  methods: {
    registerBtn() {
      const form = {
        account: this.username,
        password: this.password,
        name: this.username,
        phone: this.phone,
        email: this.email
      }
      const data = []
      Object.keys(form).forEach(key => {
        if (form[key] === '') {
          this.$toast('您还有数据未填写')
        } else if (form.password !== this.password2) {
          this.$toast('密码不一致')
        } else if (form[key] !== '') {
          data.push(form[key])
        }
        if (data.length === 5) {
          console.log(data)
          register(form)
            .then(result => {
              if (result.code === 200) {
                this.$toast(result.msg)
                this.$router.push('/login')
              } else if (result === 100) {
                this.$toast(result.msg)
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.register {
  width: calc(100vw);
  height: calc(100vh);
  background: linear-gradient(#ed8989, #5b62b5);
}
.register_head {
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
.register_footer {
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
.register_banner {
  background: transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 300px;
}
.register_div_button {
  padding: 21px;
  display: flex;
  justify-content: space-around;
}
.register_button {
  padding: 0 21px;
}
</style>
