<template>
  <div class="approval">
    <van-nav-bar :border="false" />
    <div class="approval-header">
      <img :src="getAssetsFile('home-head.png')" alt="" />
    </div>

    <div class="approval-body">
      <div class="approval-body-title">
        <img :src="getAssetsFile('home-icon.png')" alt="" />
        <h3>常见问题</h3>
        <!-- <h3>评审标准</h3> -->
      </div>

      <div class="approval-body-list">
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item :name="index" v-for="(item, index) of list" :key="item">
            <template #title>
              <div class="collapse-title" style="font-weight: bold; font-size: 14px; color: #333333"> <div class="point" />{{ item }} </div>
            </template>
            报奖三步走:1、使用简道云这一款帆软产品，进行开发使用，或是想着重描述零代码运用管理则报名零代码赛道，其余则选择商业智能赛道。2、年销售额大于10亿，请报名大型企业赛道。3、高校等非盈利性的事业单位或政府机
            构，如果仅使用简道云一款帆软产品，请报名零代码-社会公共单位竞赛单元，其他请选择商业智能-中小企业赛道。可以点击报名系统，系统会自动推荐赛道:立即报名
          </van-collapse-item>
        </van-collapse>
      </div>

      <!-- <p class="approval-body-duration"
        >根据赛题涉及方向，邀请各领域专家组成专家评审小组，使用专家评审系统线上查阅作品并评分。评分维度拟设置如下：</p
      > -->

      <!-- <div class="approval-body-content">
        <TextContent v-for="(item, _) of list" :key="_" :data="item.data" :title="item.title" />
      </div> -->

      <!-- <div class="approval-body-footer">
        注：评分采用百分制。由各个评委进行评分，取平均分为参赛团队最终得分 (保留到小数点后两位，分数相同者，取小数点后三位 )
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import { ref } from 'vue';
  import { getAssetsFile } from '/@/utils/pubUse';
  // import TextContent from './components/TextContent.vue';
  const activeNames = ref(['1']);

  const list = [
    '什么时候截止报名?',
    '我应该报哪个赛道?',
    '大小企业赛道设置会有区分么?',
    '我想报名多个赛道。',
    '报名后我需要做什么?',
    '案例提交截止时间是什么时候?',
    '初审标准是什么?',
    '未通过初审还可以继续参与评比吗?',
    '参加过往届赛事，今年能否报名参与?',
    '我们能否替客户企业报名?',
    '评审标准是什么?',
    '如何提高获奖几率?',
  ];

  // const list = [
  //   {
  //     title: '一、方案完整性（10分）',
  //     data: ['1、方案完全符合模板要求，完整、逻辑紧密，分值10；'],
  //   },
  //   {
  //     title: '二、创新创意（30分）',
  //     data: [
  //       '1、方案创新性：是面向数据应用场景中的某一具体问题或环节提出的解决方案，且所提出的解决方案具有的创新性和有效性，分值10；',
  //       '2、技术创新性：应用场景业务特点突出情况，在全省乃至全国范围内、业务领域内具有的创新性、引领性、首创性情况，分值10；',
  //       '3、完整明确：拟解决问题情况明确、应用场景方向明确，分值10；',
  //     ],
  //   },
  //   {
  //     title: '三、技术能力（40分）',
  //     data: [
  //       '1、技术多样性：综合运用5G、人工智能、区块链、物联网、隐私计算等先进技术，分值10；',
  //       '2、应用安全性：具备应用安全和数据安全保障机制并良好运行，分值10；',
  //       '3、技术优势：结合应用场景，详细说明作品涉及的算法和技术实现方案，采用算法、开发技术的先进性与创新性，分值10；',
  //       '4、运维能力：数据应用的运维运营、升级迭代、推广运行方面实施情况，分值10；',
  //     ],
  //   },
  //   {
  //     title: '四、应用价值（20分）',
  //     data: [
  //       '1、项目落地：项目应具备落地实施场景及完整落地应用实施计划，分值10；',
  //       '2、示范带动效应：作品的预期应用成果以及示范带动作用，分值10；',
  //     ],
  //   },
  // ];
</script>

<style lang="scss" scoped>
  .approval {
    color: red;

    &-header {
      img {
        width: 100%;
        height: 375px;
      }
    }

    &-body {
      padding: 30px;
      padding-bottom: 0;
      box-sizing: border-box;

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

      &-list {
        display: flex;
        flex-direction: column;

        &-item {
        }
      }

      &-duration {
        font-size: 28px;
        color: #333333;
      }

      &-footer {
        font-size: 28px;
        color: #999999;
      }
    }
  }

  .van-nav-bar {
    position: fixed;
    top: 0;
  }
  .collapse-title {
    display: flex;
    align-items: center;
    .point {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: #276bef;
      margin-right: 20px;
    }
  }
</style>
