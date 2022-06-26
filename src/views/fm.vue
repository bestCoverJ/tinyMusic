<template>
  <div class="fm-page">
    <Player
      :tracks="fmList[0]"
    />
  </div>
</template>

<script>
import Player from '@/components/player'
import { mapActions } from 'vuex'
export default {
  name: 'Fm',
  components: {
    Player
  },
  data() {
    return {
      fmList: []
    }
  },
  created() {
    this.getPersonalFm()
  },
  methods: {
    ...mapActions('system', ['querypersonalFm']),
    async getPersonalFm() {
      const res = await this.querypersonalFm()
      if (res?.data?.code === 200) {
        this.fmList = res.data.data
      }
    }
  }
}
</script>

<style lang="less" scoped>
.fm-page {
  display: flex;
  flex: 1;
}
</style>
