<template>
  <div class="list-page">
    <div v-if="loading" class="list-loading">
      <van-loading color="#F56C6C" />
    </div>
    <div v-else>
      <div v-for="(tracks, index) in playlist.tracks.slice(0, 3)" :key="index" class="list-body">
        <itemList
          :tracks="tracks"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import itemList from './itemList.vue'
export default {
  name: 'List',
  components: {
    itemList
  },
  props: {
    playlistInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      loading: false,
      playlist: {}
    }
  },
  created() {
    this.getPlaylistDetail()
    // this.getPlaylistDetailAll()
  },
  methods: {
    ...mapActions('system',
      [
        'queryplaylistDetail',
        'queryplaylistDetailAll'
      ]
    ),
    async getPlaylistDetail() {
      this.loading = true
      const params = {
        id: this.playlistInfo.id
      }
      const res = await this.queryplaylistDetail(params)
      if (res?.data?.code === 200) {
        this.playlist = res.data.playlist
      }
      this.loading = false
    },
    async getPlaylistDetailAll() {
      const params = {
        id: this.playlistInfo.id,
        limit: 10
      }
      const res = await this.queryplaylistDetailAll(params)
      if (res?.data?.code === 200) {
        this.playlist = res.data.playlist
      }
    }
  }
}
</script>

<style lang="less" scoped>
.list-page {
  .list-loading {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
