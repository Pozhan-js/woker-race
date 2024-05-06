<template>
  <div class="race">
    <van-nav-bar :border="false" />
    <div class="race-header">
      <img :src="getAssetsFile('home-head.png')" alt="" />
    </div>

    <div class="race-body">
      <RaceProject :data="projectList[0]" />
      <div class="home">
        <div class="home-content">
          <div class="home-content-title">
            <img :src="getAssetsFile('home-icon.png')" alt="" />
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

          <!-- <span class="home-tips-title">为确保本次比赛顺利进行，特成立比赛组织委员会， 全面负责本次比赛活动。具体如下：</span> -->

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
        </div>
      </div>
      <RaceProject :data="projectList[1]" />
      <div class="race-body-make">
        <div class="make-title">奖项设置</div>
        <div class="make-list">
          <div class="make-race-item">
            <div class="make-race-item-left">
              <h3>一等奖1名</h3>
              <div class="left-message">
                <p>¥ <span>10000</span></p>
                <p>颁发获奖证书</p>
              </div>
            </div>
            <div class="make-race-item-right">
              <img src="../../assets/images/race66.png" alt="" />
            </div>
          </div>
          <div class="make-race-item">
            <div class="make-race-item-left">
              <h3>二等奖2名</h3>
              <div class="left-message">
                <p>¥ <span>8000</span></p>
                <p>颁发获奖证书</p>
              </div>
            </div>
            <div class="make-race-item-right">
              <img src="../../assets/images/race77.png" alt="" />
            </div>
          </div>
          <div class="make-race-item">
            <div class="make-race-item-left">
              <h3>三等奖3名</h3>
              <div class="left-message">
                <p>¥ <span>5000</span></p>
                <p>颁发获奖证书</p>
              </div>
            </div>
            <div class="make-race-item-right">
              <img src="../../assets/images/race88.png" alt="" />
            </div>
          </div>
        </div>
        <div class="make-type">
          <div>
            <p class="type-name">优胜奖2名</p>
            <div class="type-text">
              <span>¥ <span class="price">3000</span></span>
              <span>颁发获奖证书</span>
            </div>
          </div>
          <div>
            <p class="type-name">优秀组织奖2名</p>
            <div class="type-text">
              <span>¥ <span class="price">5000</span></span>
              <span>颁发获奖证书</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <RaceProject :data="data" v-for="(data, _) of projectList.slice(2)" :key="_" /> -->

      <!-- <div class="race-body-chart">
        <RaceChart :data="chartList" />
        <van-divider dashed :style="{ fontWeight: 'bold', color: '#333333' }">竞赛地点</van-divider>
        <p style="text-align: center">湖南省5G应用生态产业园（三湘南湖大厦）</p>
      </div> -->

      <div class="race-body-club">
        <div class="club-title">赛事专家委员会</div>
        <div class="club-list">
          <div v-for="item of 4" :key="item">
            <p class="doctor-name">某某</p>
            <p class="name">某某专家</p>
          </div>
        </div>
      </div>
    </div>

    <div class="race-footer">
      <div class="race-footer-content">
        <div class="content-title">
          <img :src="getAssetsFile('home-icon.png')" alt="" />
          <h3>报名条件及方式</h3>
        </div>
        <div class="content-container">
          <p>>> <span>报名与咨询</span></p>
        </div>

        <div class="content-inter">
          <p>报名方式：网上报名，登录大赛官网</p>
          <a href="https://kindoucloud.com/frq/aicompetitio"> https://kindoucloud.com/frq/aicompetitio</a>
        </div>

        <div class="content-know">
          <p>>> <span>参赛须知</span></p>
          <div class="content-know-text">
            本次大赛面向芙蓉区各单位及企业，以个人和团队为单位参赛，指导老师1名，性别、年龄不限。本大赛为公益性赛事，不收取报名费。本届赛事采取线上发布赛题、评审，线下路演形式。
          </div>
          <div class="content-know-text">
            参赛单位在规定期限通过指定方式提交赛题作品（作品形式详见赛题要求），由评委组经初赛、决赛两轮评审，评选出各类奖项。入围决赛的团队，可完善修订作品再次提交（不可更换赛题）。</div
          >
        </div>
      </div>

      <div class="race-footer-message">
        <div class="footer-message-title">其他事项</div>
        <div class="footer-message-text"> （一）请各单位及企业加大宣传力度，广泛动员区内企业职工参与。 </div>
        <div class="footer-message-text"> （二）大赛为公益性赛事，全程不收取参赛费用，各参赛队交通和食宿费用自理。 </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { getAssetsFile } from '/@/utils/pubUse';
  import RaceProject from './components/RaceProject.vue';

  const projectList = [
    {
      icon: true,
      title: '赛事简介',
      content:
        '为深入贯彻习近平总书记关于把“大力推进现代化产业体系建设，加快发展新质生产力”，抢抓数字化发展机遇，深入推进数字产业化、产业数字化、数据价值化、治理服务数字化的建设，经研究决定，举办湖南长沙市芙蓉区大数据应用职工大赛',
      url: [],
      swiper: false,
    },
    {
      icon: true,
      title: '目标意义',
      content:
        '以“科技练兵、数创芙蓉”为主题，数据融合应用创新为核心，以赛促用，挖掘芙蓉区公共数据融合创新应用场景，解决数据应用技术难题，吸引更多的数字技术人才和企业参与其中，共同推进数字湖南的建设和发展。',
      url: ['race21.png,/layout/race', 'race22.png,/layout/home', 'race23.png,/layout/info'],
      swiper: false,
    },
    {
      icon: true,
      title: '比赛内容',
      content: '结合数据应用领域中高价值的重点应用场景，鼓励参赛队伍结合赛道场景自带数据参与比赛，请参赛团队根据以下方向自选题目参与：',
      url: ['race_1.png', 'race_1.png'],
      swiper: true,
    },
    {
      icon: false,
      title: '智慧教育',
      content:
        '结合AI、大数据、云计算等高科技技术，创造赛题，鼓励参赛者开发出创新的智慧教育解决方案，推动教育领域创新，开发新型教育技术和教学方法。具体的内容包括但不限于以下几个方面：AI教辅工具、虚拟仿真教学、智慧课堂方案、教育数据分析等教育领域的创新实践。比赛以提出设计方案、架构设计、软件开发或是实际系统建设的形式进行',
      url: [],
      swiper: false,
    },
  ];

  // const chartList = ref<Array<ChartItem>>([
  //   {
  //     date: '5月8号',
  //     content: '赛题发布',
  //     isOn: true,
  //     height: 'sort',
  //   },
  //   {
  //     date: '5月13号',
  //     content: '大数据职工大赛线上说明会',
  //     isOn: false,
  //     height: 'sort',
  //   },
  //   {
  //     date: '5月20号',
  //     content: '大赛开幕',
  //     isOn: true,
  //     height: 'long',
  //   },
  //   {
  //     date: '5月20号',
  //     content: '报名截止',
  //     isOn: false,
  //     height: 'long',
  //   },
  //   {
  //     date: '5月25号',
  //     content: '作品预提交',
  //     isOn: true,
  //     height: 'sort',
  //   },
  //   {
  //     date: '5月31号',
  //     content: '初赛作品提交截至',
  //     isOn: false,
  //     height: 'sort',
  //   },
  //   {
  //     date: '6月5号',
  //     content: '公布入围决赛名单',
  //     isOn: true,
  //     height: 'long',
  //   },
  //   {
  //     date: '6月20号',
  //     content: '决赛评审',
  //     isOn: false,
  //     height: 'long',
  //   },
  //   {
  //     date: '6月25号',
  //     content: '大赛闭幕',
  //     isOn: true,
  //     height: 'sort',
  //   },
  // ]);

  onMounted(() => {});
</script>

<style lang="scss" scoped>
  .race {
    color: red;
    min-height: 100vh;
    background: #f0f3f7;
    flex-direction: column;

    &-header {
      img {
        width: 100%;
        height: 375px;
      }
    }

    &-body {
      padding: 40px;
      box-sizing: border-box;
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
          // padding: 30px;
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

      &-club {
        .club-title {
          font-weight: bold;
          font-size: 36px;
          color: #333333;
          margin: 60px 0;
          margin-bottom: 20px;
          text-align: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url('../../assets/images/title_bg.png');
        }

        .club-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          div {
            background-color: #fff;
            border-radius: 10px;
            height: 140px;
            padding: 20px 50px;
            box-sizing: border-box;
            .doctor-name {
              font-weight: bold;
              font-size: 32px;
              color: #333333;
            }

            .name {
              font-size: 28px;
              color: #333333;
            }
          }
        }
      }

      &-make {
        // margin-bottom: 60px;

        .make-title {
          font-weight: bold;
          font-size: 36px;
          color: #333333;
          margin: 60px 0;
          margin-bottom: 30px;
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
            opacity: 0.5;
          }
        }

        .make-list {
          display: flex;
          flex-direction: column;
          gap: 20px;

          .make-race-item {
            width: 100%;
            height: 180px;
            border-radius: 20px;
            background-color: #fff;
            border: 10px solid rgba(39, 107, 239, 0.4);
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;

            &-left {
              width: 100%;
              padding: 18px 50px;
              padding-right: 0;
              box-sizing: border-box;
              h3 {
                font-size: 36px;
                color: #011336;
                font-weight: bold;
              }
              .left-message {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p {
                  font-size: 24px;
                  color: #011336;

                  &:last-child {
                    margin-right: 0;
                  }
                  span {
                    font-weight: 800;
                    font-size: 60px;
                    color: #011336;
                  }
                }
              }
            }

            &-right {
              flex-shrink: 0;
              > img {
                width: 85px;
                height: 114px;
                margin-left: 30px;
                margin-right: 50px;
              }
            }
          }
        }

        .make-type {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          > div {
            height: 180px;
            background: rgba(39, 107, 239, 0.2);
            box-shadow: 0px 8px 16px 1px rgba(203, 203, 203, 0.2);
            border-radius: 20px;
            padding: 20px;
            // padding-right: 0;
            box-sizing: border-box;
            .type-name {
              font-weight: bold;
              font-size: 32px;
              color: #011336;
              margin-bottom: 30px;
            }

            .type-text {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 24px;
              color: #333333;

              span {
                font-size: 22px;
                color: #011336;
                line-height: 1;
              }

              .price {
                font-size: 50px;
                font-weight: 800;
                color: #011336;
              }
            }
          }
        }
      }
    }

    &-footer {
      &-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        padding: 50px 30px;
        box-sizing: border-box;
        box-shadow: 0px 8px 20px 1px rgba(153, 169, 188, 0.2);

        .content-title {
          display: flex;
          align-items: center;
          margin-bottom: 30px;

          > img {
            width: 30px;
            height: 30px;
          }
          h3 {
            color: #333333;
            margin-left: 20px;
          }
        }
        .content-container {
          width: 100%;

          p {
            font-size: 32px;
            color: #276bef;
            margin-bottom: 20px;

            span {
              font-weight: bold;
              font-size: 32px;
              color: #333333;
            }
          }
        }
        .content-inter {
          width: 100%;
          margin-bottom: 52px;

          p {
            font-size: 28px;
            color: #333333;
          }
          a {
            font-size: 28px;
            color: #276bef;
            text-decoration: underline;
          }
        }

        .content-know {
          width: 100%;
          p {
            font-size: 32px;
            color: #276bef;
            margin-bottom: 20px;

            span {
              font-weight: bold;
              font-size: 32px;
              color: #333333;
            }
          }

          &-text {
            font-size: 28px;
            color: #333333;
            text-align: justify;
          }
        }
      }

      &-message {
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
  }

  .van-nav-bar {
    position: fixed;
    top: 0;
  }
</style>
