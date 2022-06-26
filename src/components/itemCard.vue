<template>
  <div class="item-card">
    <div
      v-if="imgUrl"
      class="item-body"
    >
      <van-image
        height="3rem"
        width="3rem"
        fit="cover"
        :src="imgUrl"
      />
      <p class="img-title">
        {{ title }}
      </p>
    </div>
    <van-empty v-else image="network" description="网络开小差了" />
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.item-card {
  display: flex;
  flex-direction: column;
  .item-body {
    .van-image {
      overflow: hidden;
      border-radius: 2px;
    }

    .img-title {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden; //溢出内容隐藏
      text-overflow: ellipsis; //文本溢出部分用省略号表示
      display: -webkit-box; //特别显示模式
      -webkit-line-clamp: 2; //行数
      line-clamp: 2;
      -webkit-box-orient: vertical; //盒子中内容竖直排列
      margin-top: 0;
    }
  }
}
</style>
