<template>
  <div class="player-page">
    <div class="img">
      <van-image
        height="7rem"
        width="7rem"
        fit="cover"
        :src="tracks.album.picUrl"
      />
    </div>
    <div class="control-bar">
      <p class="tracks-name">
        {{ tracks.name }}
        <van-tag
          :type="tagColor"
        >
          {{ `${songUrl.br / 1000}K` }}
        </van-tag>
      </p>
      <div class="singer-box">
        <p v-for="(singer, singerIndex) in tracks.artists" :key="singerIndex" class="tracks-art">
          {{ singer.name }}
        </p>
      </div>
      <audio ref="audio" controls>
        <source :src="url" type="audio/mpeg">
        Your browser does not support this audio format.
      </audio>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Player',
  props: {
    tracks: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      url: '',
      songUrl: {}
    }
  },
  computed: {
    tagColor() {
      let type = ''
      const { br = 0 } = this.songUrl
      if (br < 128000) {
        type = 'primary'
      } else if (br >= 192000 <= 128000) {
        type = 'success'
      } else if (br > 129000) {
        type = 'danger'
      }
      return type
    }
  },
  watch: {
    tracks: {
      handler(newVal, oldVal) {
        if (newVal.id) {
          this.getSongUrl()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions('system', ['querySongUrl']),
    async getSongUrl() {
      const params = {
        id: this.tracks.id,
        br: 128000
      }
      const res = await this.querySongUrl(params)
      if (res?.data?.code === 200) {
        this.songUrl = res.data.data[0]
        this.$refs.audio.load()
        this.$refs.audio.src = this.songUrl.url
        this.$refs.audio.play()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.player-page {
  margin: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .img {
    .van-image {
      border-radius: 4px;
      overflow: hidden;
    }
  }

  p {
      margin-bottom: 0;
      text-align: center;
    }

    .tracks-name {
      font-size: 24px;
      font-weight: 550;
    }

    .singer-box {
      display: flex;
      justify-content: center;

      p+p {
        margin-left: 4px;
      }
    }
}
</style>
