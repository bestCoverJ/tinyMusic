<template>
  <div class="index-page">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 首页轮播 -->
    <div v-if="!images.length" class="banner-loading">
      <van-loading color="#F56C6C" />
    </div>
    <div v-if="images.length" class="swipe-body">
      <van-swipe class="index-swipe" :autoplay="3000" indicator-color="#F56C6C">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image
            lazy-load
            fit="contain"
            :src="image.pic"
          />
        </van-swipe-item>
      </van-swipe>
      <div class="index-button-group">
        <!-- 每日推荐 -->
        <div class="index-button-item">
          <div class="index-button">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M14.5 3A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9zM3 7h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V7zm9 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0zm1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0zm1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0z" fill="currentColor" /></g></svg>
          </div>
          <span>每日推荐</span>
        </div>
        <!-- 私人FM -->
        <div class="index-button-item" @click="$router.push('/fm')">
          <div class="index-button">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8c0-1.1-.9-2-2-2H8.3l7.43-3c.46-.19.68-.71.49-1.17a.894.894 0 0 0-1.17-.49L3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3zm13-8h-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H4V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z" fill="currentColor" /></svg>
          </div>
          <span>私人FM</span>
        </div>
        <!-- 歌单 -->
        <div class="index-button-item">
          <div class="index-button">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="17" r="3" /><path d="M17 17V4h4" /><path d="M13 5H3" /><path d="M3 9h10" /><path d="M9 13H3" /></g></svg>
          </div>
          <span>歌单</span>
        </div>
        <!-- 排名 -->
        <div class="index-button-item">
          <div class="index-button">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M2.75 3a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5H2.75zM5 8.75A2.75 2.75 0 0 1 7.75 6h2.5A2.75 2.75 0 0 1 13 8.75v13.5A2.75 2.75 0 0 1 10.25 25h-2.5A2.75 2.75 0 0 1 5 22.25V8.75zm10 0A2.75 2.75 0 0 1 17.75 6h2.5A2.75 2.75 0 0 1 23 8.75v8a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 15 16.75v-8z" fill="currentColor" /></g></svg>
          </div>
          <span>排名</span>
        </div>
        <!-- 专辑 -->
        <div class="index-button-item">
          <div class="index-button">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z" fill="currentColor" /></svg>
          </div>
          <span>专辑</span>
        </div>
        <!-- 有声书 -->
        <div class="index-button-item">
          <div class="index-button">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5zM8 5h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="currentColor" /></g></svg>
          </div>
          <span>有声书</span>
        </div>
      </div>
    </div>
    <!-- 歌单推荐 -->
    <div v-if="hotSongs.length === 0" class="playlist-loading">
      <van-loading color="#F56C6C" />
    </div>
    <div v-if="hotSongs.length" class="playlist-recommend">
      <div class="index-recommend-title"><span>热门歌单</span></div>
      <recommend :list="hotSongs" />
    </div>
    <!-- 歌曲推荐 -->
    <div v-for="(ws, webIndex) in webSongs" :key="webIndex" class="song-recommend">
      <div class="index-recommend-title"><span>{{ ws.name }}</span></div>
      <List :playlist-info="ws" />
    </div>
  </div>
</template>

<script>
import recommend from '@/components/recommend'
import List from '@/components/List'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'Index',
  components: {
    recommend,
    List
  },
  data() {
    return {
      // 搜索内容
      value: '',
      // 热门歌单
      hotSongs: [],
      // 网友歌单
      webSongs: [],
      images: []
    }
  },
  computed: {
    ...mapState(['loading']),
    ...mapState('system', ['id', 'likelist', 'status'])
  },
  created() {
    this.userLogin()
    // this.getHomepage()
    // this.getLikelist()
    // this.getSongDetail()
    this.getBanner()
    this.getHighquality()
    this.getPlaylist()
  },
  methods: {
    ...mapMutations(['SET_LOADING']),
    ...mapMutations('system', ['SET_USER_ID', 'SET_USER', 'SET_LIKE_LIST']),
    ...mapActions('system',
      ['login',
        'queryHomepage',
        'queryLikelist',
        'querySongDetail',
        'queryBanner',
        'queryhighquality',
        'queryplaylist',
        'queryStatus'
      ]
    ),
    async userLogin() {
      const params = {
        phone: '15671939968',
        password: '7206o9900',
        timestamp: Date.now()
      }
      // if (!(this.$cookies.get('token') && this.status)) {
      if (!this.$cookies.get('token')) {
        const res1 = await this.login(params)
        const res2 = await this.queryStatus()
        if (res1?.data?.code === 200) {
          this.$cookies.set('token', res1.data.token, {
            expires: 7
          })
          this.$cookies.set('user', JSON.stringify(res1.data.profile))
        }
        if (res2?.data?.code === 200) {
          this.$cookies.set('status', res2.data.account.status)
        }
      }
      const user = JSON.parse(this.$cookies.get('user'))
      this.SET_USER_ID(user.userId)
      this.SET_USER(user)
      this.SET_STATUS(this.$cookies.get('status'))
    },
    async getHomepage() {
      const res = await this.queryHomepage({})
      console.log(res)
    },
    async getLikelist() {
      const params = {
        uid: this.id
      }
      const res = await this.queryLikelist(params)
      if (res?.data?.code === 200) {
        this.SET_LIKE_LIST(res.data.ids)
      }
    },
    async getSongDetail() {
      const params = {
        ids: this.likelist[493]
      }
      const res = await this.querySongDetail(params)
      if (res?.data?.code === 200) {
        console.log(res.data)
      }
    },
    async getBanner() {
      const params = {
        type: 2
      }
      const res = await this.queryBanner(params)
      if (res?.data?.code === 200) {
        this.images = res.data.banners
      }
    },
    async getHighquality() {
      const params = {
        type: 2
      }
      const res = await this.queryhighquality(params)
      if (res?.data?.code === 200) {
        this.hotSongs = res.data.playlists
      }
    },
    async getPlaylist() {
      const params = {
        limit: 5
      }
      const res = await this.queryplaylist(params)
      if (res?.data?.code === 200) {
        this.webSongs = res.data.playlists
      }
    }
  }
}
</script>

<style lang="less" scoped>
.index-page {
  .banner-loading, .playlist-loading {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .van-search {
    padding: 2px 8px;
    border-radius: 8px;
    overflow: hidden;
  }
  .swipe-body {
    padding: 4px 8px;
    background: #FFF;
    .van-swipe {
      border-radius: 8px;
    }

    .index-button-group {
      display: flex;
      margin-top: 12px;
      margin-bottom: 4px;
      .index-button-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1.8rem;
        span {
          margin-top: 4px;
        }
        .index-button {
          border-radius: 50%;
          background-color: rgb(254,240,240);
          height: 1rem;
          width: 1rem;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            color: #F56C6C;
            height: .7rem;
          }
        }
      }
    }
  }
  .index-recommend-title {
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: stretch;
    line-height: 18px;
    &::before {
      content: '';
      height: 18px;
      width: 2px;
      border-radius: 2px;
      background-color: #F56C6C;
      margin-right: 6px;
    }
  }
  .playlist-recommend, .song-recommend{
    padding: 4px;
    margin: 0;
    margin-top: 8px;
    background: #F7F8FA;
    border: 1px solid #EBEDF0;
    border-radius: 4px;
  }
}
</style>
