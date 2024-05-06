<template>
  <div class="home">
    <van-nav-bar :border="false" />
    <div class="home-header">
      <img :src="getAssetsFile('home-head.png')" alt="" />
    </div>
    <div class="home-content">
      <div class="home-content-title">
        <img :src="getAssetsFile('home-icon.png')" alt="" />
        <h3>评审内容</h3>
      </div>
      <p style="color: #666; text-align: justify">
        结合数据应用领域中高价值的重点应用场景，鼓励参赛队伍结合赛道场景自带数据参与比赛，请参赛团队根据以下方向自选题目参与：</p
      >
      <TextContent v-for="(item, _) of list" :key="_" :data="item.data" :title="item.title" />

      <div class="home-content-title">
        <img :src="getAssetsFile('home-icon.png')" alt="" />
        <h3>评审标准</h3>
      </div>
      <p style="color: #333333; text-align: justify">
        根据赛题涉及方向，邀请各领域专家组成专家评审小组，使用专家评审系统线上查阅作品并评分。评分维度拟设置如下：</p
      >
      <TextContent v-for="(item, _) of list2" :key="_" :data="item.data" :title="item.title" />
    </div>
    <!-- <div class="home-content">
      <div class="home-content-title">
        <img src="../../assets/images/home-icon.png" alt="" />
        <h3>{{ $t($route.meta.title as string) }}</h3>
      </div>

      <div class="home-content-card">
        <div class="card-item">
          <van-divider dashed content-position="left" :style="{ color: '#333', fontWeight: 'bold', borderColor: '#1989fa' }"
            >主办单位</van-divider
          >
          <div class="card-item-list">
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
          </div>
        </div>
        <div class="card-item">
          <van-divider dashed content-position="left" :style="{ color: '#333', fontWeight: 'bold', borderColor: '#1989fa' }"
            >承办单位</van-divider
          >
          <div class="card-item-list">
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
          </div>
        </div>
        <div class="card-item">
          <van-divider dashed content-position="left" :style="{ color: '#333', fontWeight: 'bold', borderColor: '#1989fa' }"
            >执行单位</van-divider
          >
          <div class="card-item-list">
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
            <span>芙蓉区总工会</span>
          </div>
        </div>
      </div>

      <span class="home-tips-title">为确保本次比赛顺利进行，特成立比赛组织委员会， 全面负责本次比赛活动。具体如下：</span>

      <div class="home-tips">
        <div class="home-tips-item">
          <div class="item-header">
            <div class="dot" style="display: inline-block"></div>
            <span>比赛组织委员会</span>
          </div>
          <div class="item-body">
            <div class="item-body-cell">
              <span>组 长:</span>
              <span>胡锋</span>
            </div>
            <div class="item-body-cell">
              <span>副组长:</span>
              <span>陈宏伟、熊卫俊、黄燕妮</span>
            </div>
            <div class="item-body-cell">
              <span>成员:</span>
              <span>范文静、邓亮、谭钦之、曾港 </span>
            </div>
          </div>
        </div>
        <div class="home-tips-item">
          <div class="item-header">
            <div class="dot" style="display: inline-block"></div>
            <span>组委会办公室</span>
          </div>
          <div class="item-body">
            <div class="item-body-cell">
              <span>主 任:</span>
              <span>范文静</span>
            </div>
            <div class="item-body-cell">
              <span>成 员:</span>
              <span>胡思乐、张可鑫 、陈文谦</span>
            </div>
          </div>
        </div>
        <div class="home-tips-item">
          <div class="item-header">
            <div class="dot" style="display: inline-block"></div>
            <span>比赛组织委员会</span>
          </div>
          <div class="item-body">
            <div class="item-body-cell">
              <span>评判人员由本项目比赛组委会选聘，主要由行业领域 专家组成。</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
  import { getAssetsFile } from '/@/utils/pubUse';
  import TextContent from './components/TextContent.vue';
  const list = [
    {
      title: '（一）智慧交通',
      data: [
        '智慧交通比赛围绕着利用先进的信息技术来改善交通管理、提升交通效率、增强出行安全和便利性。具体的内容可能包括但不限于以下几个方面：利用物联网、大数据分析等新质生产力，设计出能够实现实时监控与智能调度的路网系统、预测交通流量、优化信号灯控制策略、车牌识别、车辆类型分类等，比赛以设计方案的提出、软件开发、算法设计、或是实际系统建设的形式进行。',
      ],
    },
    {
      title: '（二）智慧教育',
      data: [
        '结合AI、大数据、云计算等高科技技术，创造赛题，鼓励参赛者开发出创新的智慧教育解决方案，推动教育领域创新，开发新型教育技术和教学方法。具体的内容包括但不限于以下几个方面：AI教辅工具、虚拟仿真教学、智慧课堂方案、教育数据分析等教育领域的创新实践。比赛以提出设计方案、架构设计、软件开发或是实际系统建设的形式进行。',
      ],
    },
    {
      title: '（三）智慧社区',
      data: [
        '结合AI、大数据、云计算等高科技技术，创造赛题，鼓励参赛者开发出创新的智慧教育解决方案，推动教育领域创新，开发新型教育技术和教学方法。具体的内容包括但不限于以下几个方面：AI教辅工具、虚拟仿真教学、智慧课堂方案、教育数据分析等教育领域的创新实践。比赛以提出设计方案、架构设计、软件开发或是实际系统建设的形式进行。',
      ],
    },
    {
      title: '（四）智慧农业',
      data: [
        '运用信息技术，包括物联网、人工智能、大数据等，来实现资源优化配置、服务效率提升和居住环境改善的社区模式，推动智慧社区在新质生产力的赋能下，实现高质量和可持续的社区发展。具体的内容包括但不限于以下几个方面：智能垃圾分类、能源效率提升方案、环境监测和管理系统、数字化社区平台、远程健康监测、智能诊断辅助、健康数据分析。比赛以设计方案提出、架构设计、软件开发或是实际系统建设的形式进行。',
      ],
    },
    {
      title: '（五）智慧城市',
      data: [
        '比赛旨在探索如何通过大数据分析、模式识别和机器学习等技术，帮助农业企业在品种改良、病虫害防控、智能农业等领域提升新的生产力，实现精准农业和智慧种业的转型。具体的内容包括但不限于以下几个方面：品种优化、智能病虫害检测与防控、农业生产力优化等。比赛以设计方案提出、架构设计、软件开发或是实际系统建设的形式进行。',
      ],
    },
    {
      title: '（六）AI文化产品创新',
      data: [
        '比赛旨在挖掘AI技术在文化与旅游领域应用的潜力，鼓励参赛者利用AI技术创新文化产品和服务，探索文化与旅游产业的新模式、新业态、促进文化产品的个性化开发，提高文化内容的创作效率。具体的内容包括但不限于以下几个方面： AI绘画创造、文学作品创造、音乐作品创造，或利用AI技术为传统文化内容（如民间故事、历史事件）提供新的表现形式、或通过数据分析优化旅游服务和营销策略，增强游客的体验、AI技术的文化产品等。比赛以设计方案和作品提出、软件开发或是实际应用的形式进行。',
      ],
    },
    {
      title: '（七）零代码赋能数字化',
      data: [
        '通过运用零代码开发平台，快速构建应用程序，以应对实际业务挑战，推进数字化转型。参赛者不用掌握复杂的编程知识，直接通过可视化操作界面搭建应用。激励创新和促进技术普及，同时也帮助企业解决实际问题，并大大降低企业数字化人力成本和时间成本。具体的内容包含企业和政府的各种信息管理、数据采集和流程管理等功能。比赛以方案设计、作品开发和应用的形式进行。',
      ],
    },
    {
      title: '（八）产品及数字化营销方向',
      data: [
        '结合企业自身情况或基于兴趣爱好，基于互联网公开数据及组织内部数据进行分析，用于数字化营销、产品管理、品牌管理等大数据应用的选题均可参赛。',
      ],
    },
  ];

  const list2 = [
    {
      title: '一、方案完整性（10分）',
      data: ['1、方案完全符合模板要求，完整、逻辑紧密，分值10；'],
    },
    {
      title: '二、创新创意（30分）',
      data: [
        '1、方案创新性：是面向数据应用场景中的某一具体问题或环节提出的解决方案，且所提出的解决方案具有的创新性和有效性，分值10；',
        '2、技术创新性：应用场景业务特点突出情况，在全省乃至全国范围内、业务领域内具有的创新性、引领性、首创性情况，分值10；',
        '3、完整明确：拟解决问题情况明确、应用场景方向明确，分值10；',
      ],
    },
    {
      title: '三、技术能力（40分）',
      data: [
        '1、技术多样性：综合运用5G、人工智能、区块链、物联网、隐私计算等先进技术，分值10；',
        '2、应用安全性：具备应用安全和数据安全保障机制并良好运行，分值10；',
        '3、技术优势：结合应用场景，详细说明作品涉及的算法和技术实现方案，采用算法、开发技术的先进性与创新性，分值10；',
        '4、运维能力：数据应用的运维运营、升级迭代、推广运行方面实施情况，分值10；',
      ],
    },
    {
      title: '四、应用价值（20分）',
      data: [
        '1、项目落地：项目应具备落地实施场景及完整落地应用实施计划，分值10；',
        '2、示范带动效应：作品的预期应用成果以及示范带动作用，分值10；',
      ],
    },
  ];
</script>

<style lang="scss" scoped>
  .home {
    color: red;
    flex-direction: column;

    &-header {
      img {
        width: 100%;
        height: 375px;
      }
    }

    &-content {
      padding: 30px;
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

      &-card {
        width: 100%;
        padding: 20px;
        margin-bottom: 30px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        .card-item {
          font-size: 28px;
          color: #333333;
          margin-bottom: 50px;

          // &:last-of-type {
          //   margin-bottom: 0;
          // }

          &-list {
            display: flex;
            flex-wrap: wrap;
            span {
              margin-right: 1rem;
            }
          }
        }
      }
    }

    &-tips-title {
      font-size: 28px;
      font-weight: bold;
      color: #333333;
      // margin-bottom: 30px;
    }

    &-tips {
      // padding: 20px 0;

      &-item {
        padding: 30px 0;
        border-bottom: 1px solid #ebedf0;

        .item-header {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-weight: bold;
          font-size: 32px;
          color: #333333;

          .dot {
            width: 14px;
            height: 14px;
            background-color: #1989fa;
            margin-right: 20px;
          }
        }

        .item-body {
          font-size: 28px;
          color: #333333;

          &-cell {
            span {
              margin-right: 20px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }

  .van-nav-bar {
    position: fixed;
    top: 0;
  }
</style>
