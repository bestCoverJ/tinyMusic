<template>
  <div id="app">
    <div class="top-nav-bar">
      <van-nav-bar
        title="我的云音乐"
        :right-text="user.nickname || rightText"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <van-icon v-if="$route.name !== 'Index'" name="arrow-left" />
          <van-icon v-else name="wap-nav" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <van-overlay :show="loading" class-name="loading-body">
      <van-loading color="#F56C6C" />
    </van-overlay>
    <div v-show="!loading" class="page-content">
      <router-view />
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="service-o">发现</van-tabbar-item>
      <van-tabbar-item icon="music-o">我的</van-tabbar-item>
      <van-tabbar-item icon="friends-o">关注</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from 'vant'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      active: 0,
      rightText: '未登录'
    }
  },
  computed: {
    ...mapState(['title', 'loading']),
    ...mapState('system', ['user'])
  },
  methods: {
    onClickLeft() {
      if (this.$route.name === 'Index') {
        Toast('返回')
      } else {
        this.$router.back()
      }
    },
    onClickRight() {
      Toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  color: #323233;
  background: #F2F3F5;
  height: 100vh;

  /deep/ .van-hairline--bottom::after{
    border: 0;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    width: 100%;
    overflow-y: auto;
  }

  .loading-body {
    height: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
  }

  .van-tabbar {
    position: static
  }

  .van-nav-bar__left {
    .van-icon {
      color: #323233;
    }
  }

  .van-tabbar-item--active {
    color: #F56C6C;
  }
}

#px {
  font-size: 32px;
}
</style>
