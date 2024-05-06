<template>
  <!-- <van-nav-bar :title="$t($route.meta.title as string)" :left-arrow="!tabbarVisible" @click-left="goBack" /> -->
  <div ref="mainPage" class="main-page" :class="{ tabbar: tabbarVisible, border: showBorder }">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
    <div class="tabbar">
      <van-tabbar v-model="activeTab" @change="onChangeTabs" :safe-area-inset-bottom="true" active-color="#276bef" inactive-color="#999">
        <van-tabbar-item :icon="tab.icon" v-for="(tab, _) of tabItem" :key="_">{{ tab.value }}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';

  const tabItem = [
    { key: 'layout/race', value: '竞赛介绍', icon: 'home-o' },
    { key: 'layout/home', value: '竞赛内容', icon: 'todo-list-o' },
    { key: 'layout/content', value: '竞赛实施', icon: 'label-o' },
    { key: 'layout/info', value: '竞赛报名', icon: 'friends-o' },
    { key: 'layout/approval', value: '常见问题', icon: 'setting-o' },
  ];
  const mainPage = ref<HTMLElement | null>(null);
  const router = useRouter();

  const activeTab = ref(0);

  const tabbarVisible = ref(true);

  const showBorder = ref(true);

  router.beforeEach(() => {
    mainPage.value?.scroll(0, 0);
  });
  // const lastScroll = {
  //   path: '',
  //   top: 0,
  // };
  // router.beforeEach((to, from, next) => {
  //   if (to.path !== lastScroll.path) {
  //     Reflect.set(lastScroll, 'path', from.path);
  //     Reflect.set(lastScroll, 'top', mainPage.value?.scrollTop || 0);
  //   }
  //   next();
  // });
  // router.afterEach((to, from) => {
  //   requestAnimationFrame(() => {
  //     mainPage.value?.scrollTo(0, to.path === lastScroll.path ? lastScroll.top : 0);
  //   });
  // });

  watch(
    () => router,
    () => {
      const judgeRoute = tabItem.some((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      activeTab.value = tabItem.findIndex((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      tabbarVisible.value = judgeRoute;
      showBorder.value = judgeRoute;
    },
    { deep: true, immediate: true },
  );

  const onChangeTabs = (index: number) => {
    activeTab.value = index;
    router.push(`/${tabItem[index].key}`);
  };
</script>

<style scoped lang="scss">
  .nut-navbar {
    margin-bottom: 0;
  }

  .main-page {
    box-sizing: border-box;
    height: calc(100vh - 92px);
    overflow-y: scroll;
    overflow-x: hidden;
    background: #f0f3f7;
  }

  .tabbar {
    // height: calc(100vh - 92px);
    // padding-bottom: 100px;
  }
</style>
