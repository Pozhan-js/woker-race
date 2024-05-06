<template>
  <div class="content">
    <van-nav-bar :border="false" />
    <div class="content-header">
      <img :src="getAssetsFile('home-head.png')" alt="" />
    </div>

    <div class="content-chart">
      <RaceChart :data="chartList" />
      <van-divider dashed :style="{ fontWeight: 'bold', color: '#333333' }">竞赛地点</van-divider>
      <p style="text-align: center">湖南省5G应用生态产业园（三湘南湖大厦）</p>
    </div>

    <div class="content-footer-message">
      <div class="footer-message-title">竞赛内容事项</div>
      <p style="font-weight: bold; color: #333333">
        大赛采用线上线下结合方式，分为预赛（初审、复审）、决赛。预赛（初审、复审）采用线上线下结合方式评审，决赛采用现场评选。</p
      >
      <TextContent v-for="(item, _) of list" :key="_" :data="item.data" :title="item.title" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { getAssetsFile } from '/@/utils/pubUse';
  import RaceChart from './components/RaceChart.vue';
  import TextContent from './components/TextContent.vue';

  interface ChartItem {
    date: string;
    content: string;
    isOn: boolean;
    height?: string;
  }

  const chartList = ref<Array<ChartItem>>([
    {
      date: '5月8号',
      content: '赛题发布',
      isOn: true,
      height: 'sort',
    },
    {
      date: '5月13号',
      content: '大数据职工大赛线上说明会',
      isOn: false,
      height: 'sort',
    },
    {
      date: '5月20号',
      content: '大赛开幕',
      isOn: true,
      height: 'long',
    },
    {
      date: '5月20号',
      content: '报名截止',
      isOn: false,
      height: 'long',
    },
    {
      date: '5月25号',
      content: '作品预提交',
      isOn: true,
      height: 'sort',
    },
    {
      date: '5月31号',
      content: '初赛作品提交截至',
      isOn: false,
      height: 'sort',
    },
    {
      date: '6月5号',
      content: '公布入围决赛名单',
      isOn: true,
      height: 'long',
    },
    {
      date: '6月20号',
      content: '决赛评审',
      isOn: false,
      height: 'long',
    },
    {
      date: '6月25号',
      content: '大赛闭幕',
      isOn: true,
      height: 'sort',
    },
  ]);

  const list = [
    {
      title: '（一）组织报名（5月初）',
      data: ['基层工会积极动员单位及企业参赛，采取线上报名，每家单位及企业指派1—5人进行参赛，各基层工会限推荐2家单位及企业参与初赛；'],
    },
    {
      title: '（二）赛前培训（5月中旬）',
      data: ['邀请相关专家授课，进行线上相关基础理论知识学习、培训，对参赛人员开展大数据应用能力提升培训。'],
    },
    {
      title: '（三）初审阶段（5月底）',
      data: ['采用提交方案，评审专家参照实施方案中的评分标准对单位及企业综合表现进行评选，择优选出14家单位及企业进入决赛。'],
    },
    {
      title: '（四）决赛评选及闭幕（6月底）',
      data: [
        '进入决赛的所有选手经过抽签的方式确定答辩顺序。决赛以现场答辩的方式开展，答辩过程中参赛选手或团队将参赛作品以PPT或PPT与视频相结合的方式展示讲解出来，并回答专家的相关提问。',
      ],
    },
    {
      title: '（五）竞赛地点',
      data: ['湖南省5G应用生态产业园（三湘南湖大厦）'],
    },
  ];
</script>

<style lang="scss" scoped>
  .content {
    min-height: 100vh;
    background: #f0f3f7;
    flex-direction: column;

    &-header {
      img {
        width: 100%;
        height: 375px;
      }
    }

    &-chart {
      padding: 30px 0;
      background-color: #fff;
      overflow: hidden;
      border-radius: 10px;
      p {
        font-size: 26px;
        color: #666666;
      }
    }

    &-footer-message {
      padding: 0 30px;
      box-sizing: border-box;

      .footer-message-title {
        font-weight: bold;
        font-size: 36px;
        color: #333333;
        margin: 60px 0;
        margin-bottom: 40px;
        text-align: center;
        position: relative;

        &::after {
          content: '';
          display: block;
          width: 104px;
          height: 30px;
          background: #276bef;
          position: absolute;
          left: 50%;
          bottom: 0px;
          transform: translateX(-50%);
          opacity: 0.2;
        }
      }

      .footer-message-text {
        margin-bottom: 30px;
        font-size: 28px;
        color: #333333;
        text-align: justify;
        font-family: 800;
      }
    }
  }

  .van-nav-bar {
    position: fixed;
    top: 0;
  }
</style>
