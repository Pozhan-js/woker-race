<template>
  <div class="project">
    <div class="project-title">
      <img v-if="props.data.icon" :src="getAssetsFile('home-icon.png')" alt="" />
      <h3>{{ props.data.title }}</h3>
    </div>
    <div class="project-content">
      {{ props.data.content }}
    </div>
    <div class="img_list" v-if="!props.data.swiper">
      <img
        :src="getAssetsFile(imgUrl.split(',') ? imgUrl.split(',')[0] : imgUrl)"
        v-for="(imgUrl, _) of props.data.url"
        :key="_"
        alt=""
        @click="handleImageCLick(imgUrl.split(',')[1])"
      />
    </div>
    <div class="project-img" v-else>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="image in props.data.url" :key="image">
          <img :src="getAssetsFile(image)" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { getAssetsFile } from '/@/utils/pubUse';
  // import { ref } from 'vue';
  const props = defineProps({
    data: {
      type: Object,
      default() {
        return {
          icon: true,
          title: '',
          content: '',
          url: '',
          swiper: false,
        };
      },
    },
  });

  const router = useRouter();

  const handleImageCLick = (url: string) => {
    if (!url) return;
    router.push({
      path: url,
    });
  };
</script>

<style lang="scss" scoped>
  .project {
    color: red;
    padding-bottom: 40px;

    &-title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;

      img {
        width: 30px;
        height: 30px;
      }

      h3 {
        color: #333333;
        margin-left: 20px;
      }
    }

    &-content {
      font-size: 28px;
      color: #727785;
      line-height: 1.5;
      text-align: justify;
    }

    &-img {
      display: flex;
      flex: 1;
      width: 100%;
      margin-top: 20px;

      img {
        width: 100%;
      }
    }
  }

  .img_list {
    display: flex;
    margin-top: 20px;
    > img {
      display: block;
      flex: 1;
      width: 30%;
    }
  }
</style>
