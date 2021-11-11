<template>
  <div>
    <van-tabbar fixed route v-model="active" @change="handleChange" placeholder>
      <van-tabbar-item v-for="(item, index) in data" :to="item.to" :icon="item.icon" :key="index">
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 3.333333rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 .833333rem;
}
a {
  color: #42b983;
}
</style>
