<template>
  <div class="item-list">
    <div class="item-body">
      <div class="info-body">
        <van-image
          width="1.2rem"
          height="1.2rem"
          fit="cover"
          :src="tracks.al.picUrl"
        />
        <div class="song-info van-ellipsis">
          <div class="title-info">
            <p class="song-title">
              {{ tracks.name }}
            </p>
            <p v-for="(singer, singerIndex) in tracks.ar" :key="singerIndex" class="song-singer">
              {{ singer.name }}
            </p>
          </div>
          <div v-for="(hotComment, hotCommentsIndex) in hotComments" :key="hotCommentsIndex" class="song-describe van-ellipsis">
            <p class="van-ellipsis">{{ hotComment.content }}</p>
          </div>
        </div>
      </div>
      <div class="play-block">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M12.766 9.278a1.5 1.5 0 0 0-2.266 1.29v6.864a1.5 1.5 0 0 0 2.266 1.29l6.505-3.862a1 1 0 0 0 0-1.72l-6.505-3.862zM2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14zM14 3.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5z" fill="currentColor" /></g></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ItemList',
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
      hotComments: []
    }
  },
  created() {
    // this.getSongDetail(),
    this.getHotComment()
  },
  methods: {
    ...mapActions('system', ['querySongDetail', 'queryhotcomment']),
    async getSongDetail() {
      const params = {
        ids: this.tracks.id
      }
      const res = await this.querySongDetail(params)
      if (res?.data?.code === 200) {
        console.log(res.data)
      }
    },
    async getHotComment() {
      const params = {
        id: this.tracks.id,
        type: 0,
        limit: 1
      }
      const res = await this.queryhotcomment(params)
      if (res?.data?.code === 200) {
        this.hotComments = res.data.hotComments
      }
    }
  }
}
</script>

<style lang="less" scoped>
.item-list {
  .item-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &+ {
      margin-top: 4px;
    }

    .info-body {
      display: flex;
      align-items: center;
      max-width: calc(100% - 1.2rem);
    }

    .van-image {
      border-radius: 2px;
      overflow: hidden;
      min-width: 1.2rem;
      margin-right: 4px;
    }

    .song-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        margin: 0;
      }

      .title-info {
        display: flex;
        margin-bottom: 4px;

        .song-title {
          font-weight: 550;
          margin-right: 8px;
        }

        .song-singer {
          color: #969799;
        }
      }

      .song-describe {
        color: #969799;
        width: 100%;
      }
    }

    .play-block {
      // color: #969799;
      color: #C8C9CC;
      width: .6rem;
      padding: 4px;
      // border-left: 1px solid #EBEDF0;

      &:hover, &:active {
        color:  #f78989;
      }
    }
  }
}
</style>
