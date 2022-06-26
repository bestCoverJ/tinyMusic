<template>
  <div class="recommend-page">
    <div v-for="(card, index) in list" :key="index" class="recommend-box">
      <itemCard
        :img-url="card.coverImgUrl"
        :title="card.name"
      />
    </div>
  </div>
</template>

<script>
import itemCard from './itemCard'
export default {
  name: 'Recommend',
  components: {
    itemCard
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.recommend-page {
  display: flex;
  flex-direction: row;
  overflow: auto;
  .recommend-box {
    &+.recommend-box {
      margin-left: 8px
    }
  }
}
</style>
