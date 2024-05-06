<template>
  <div class="text">
    <h2>{{ props.title }}</h2>
    <div class="text-list">
      <p v-for="(item, index) of props.data" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: [],
    },
  });
</script>

<style lang="scss" scoped>
  .text {
    margin-top: 30px;
    color: red;

    h2 {
      font-size: 28px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 20px;
    }

    &-list {
      p {
        line-height: 1.5;
        font-size: 28px;
        color: #666;
        text-align: justify;
        margin-bottom: 30px;
      }
    }
  }
</style>
