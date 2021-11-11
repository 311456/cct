<!-- 我的 -->
<template>
  <div class="userInfo">
    <van-nav-bar title="我的信息" />
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="email"
        name="pattern"
        label="邮箱"
        placeholder="请输入邮箱进行验证~"
        :rules="[{ pattern, message: '请输入正确邮箱' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写新密码' }]"
      />
    </van-form>
  </div>
</template>

<script>
// 请求接口
// import { getUserInfo } from '@/api/user.js'
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      pattern: /^([a-zA-Z0-9])+(([a-zA-Z0-9])|([._-][a-zA-Z0-9])*)+@([a-zA-Z0-9-])+((\.[a-zA-Z0-9-]{2,3}){1,2})$/
    }
  },
  computed: {
    // ...mapGetters(['userName'])
  },
  mounted() {
    // this.initData()
  },
  methods: {
    // 请求数据案例
    // initData() {
    // 请求接口数据，仅作为展示，需要配置src->config下环境文件
    //   const params = { user: 'sunnie' }
    //   getUserInfo(params)
    //     .then(() => { })
    //     .catch(() => { })
    // },
    // Action 通过 store.dispatch 方法触发
    // doDispatch() {
    //   this.$store.dispatch('setUserName', '真乖，赶紧关注公众号，组织都在等你~')
    // }
  }
}
</script>
<style></style>
