import { lang } from '../../../i18n/lang/zh-cn';
<template>
  <div class="chart">
    <h2 class="chart-title">竞赛实践安排</h2>
    <div class="chart-content">
      <div class="main-line">
        <div class="main-line-item" v-for="(time, index) of props.data as ChartItem[]" :key="index">
          <div
            class="point"
            :style="{ backgroundColor: time.isOn ? '#FF7700' : '#276BEF', borderColor: time.isOn ? '#FDC976' : '#C2D7FF' }"
          >
            <div
              class="content"
              :style="{
                flexDirection: time.isOn ? 'column-reverse' : 'column',
                top: !time.isOn ? '8px' : '',
                height: time.height === 'long' ? '120px' : '70px',
              }"
            >
              <div
                class="line"
                :style="{
                  height: time.height === 'long' ? '120px' : '70px',
                  borderColor: time.isOn ? '#FF7700' : '',
                }"
              ></div>
              <div
                class="text"
                :style="{
                  color: time.isOn ? '#FF7700' : '#276BEF',
                }"
              >
                <div>{{ time.date }}</div>
                <div>{{ time.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface ChartItem {
    date: string;
    content: string;
    isOn: boolean;
    height?: string;
  }
  const props = defineProps({
    data: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style lang="scss" scoped>
  .chart {
    color: red;
    background-color: #fff;

    &-title {
      font-weight: bold;
      font-size: 24px;
      color: #333333;
      text-align: center;
    }

    &-content {
      padding: 30px 0;
      height: 40vh;
      overflow: hidden;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url('../../../assets/images/chart_bg.png');

      .main-line {
        width: 90%;
        height: 10px;
        background: #dee6f7;
        border-radius: 10px;
        position: relative;
        padding-top: -10px;
        position: relative;
        padding-right: 40px;

        display: flex;
        justify-content: space-around;

        .point {
          width: 10px;
          height: 10px;
          background: #276bef;
          border: 6px solid #c2d7ff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          .content {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 16px;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            flex: 1;

            .line {
              width: 0;
              height: 70px;
              border: 1px solid #c2d7ff;
            }
            .text {
              flex-shrink: 0;
              text-align: center;
              padding: 5px 0;
              width: 220px;
              font-size: 24px;
              color: #276bef;
              flex: 1;
            }
          }
        }
      }
    }
  }
</style>
