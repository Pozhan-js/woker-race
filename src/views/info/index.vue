<template>
  <div class="info">
    <van-nav-bar :border="false" />
    <div class="info-header">
      <img :src="getAssetsFile('home-head.png')" alt="" />
    </div>

    <div class="info-body">
      <div class="info-body-title">
        <img :src="getAssetsFile('home-icon.png')" alt="" />
        <h3>报名参赛</h3>
      </div>

      <div class="info-body-form">
        <div class="form-title">芙蓉区新质生产力大数据应用职工大赛 2024年度大数据应用技能比赛报名表</div>
        <div class="form-content">
          <van-form @submit="onSubmit">
            <van-cell-group>
              <van-field
                v-model="result"
                required
                is-link
                readonly
                name="picker"
                label="报名赛道"
                placeholder="点击选择赛道"
                :rules="[{ required: true, message: '请选择赛道' }]"
                @click="showPicker = true"
              />
              <van-field
                v-model="score"
                required
                type="text"
                name="赛题名称"
                label="赛题名称"
                placeholder="赛题名称"
                :rules="[{ required: true, message: '请填写赛题名称' }]"
              />
              <van-field
                v-model="unit"
                required
                name="申报单位"
                label="申报单位"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写申报单位' }]"
              />
              <van-field
                v-model="member"
                required
                name="主要成员"
                label="主要成员"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写主要成员' }]"
              />
              <van-field
                v-model="team"
                required
                name="团队人数"
                label="团队人数"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写团队人数' }]"
              />
              <van-field
                v-model="sex"
                required
                name="性别"
                label="性别"
                placeholder="性别"
                :rules="[{ required: true, message: '请填写性别' }]"
              />
              <van-field
                v-model="position"
                required
                name="职务"
                label="职务"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写职务' }]"
              />
              <van-field
                required
                v-model="password"
                name="密码"
                label="联系方式"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写联系方式' }]"
              />
              <van-field
                label-align="top"
                v-model="message"
                type="textarea"
                label="赛题简介"
                autosize
                maxlength="100"
                placeholder="请输入留言"
                show-word-limit
              />
              <van-field
                label-align="top"
                v-model="text"
                type="textarea"
                label="备注"
                autosize
                maxlength="100"
                placeholder="请输入留言"
                show-word-limit
              />
            </van-cell-group>
            <div style="margin: 16px">
              <van-button round block type="primary" color="#276BEF" native-type="submit"> 提交 </van-button>
            </div>
          </van-form>
        </div>
      </div>

      <van-divider dashed :style="{ margin: '30px 0px' }"></van-divider>
      <div class="info-body-title">
        <img :src="getAssetsFile('home-icon.png')" alt="" />
        <h3>联系方式</h3>
      </div>
      <div class="info-body-message">
        <p>组委会办公室联系人：<span>张三</span></p>
        <p>电话：<span>12345678901</span></p>
        <p>
          比赛官网：
          <a href="https://kindoucloud.com/frq/aicompetition">https://kindoucloud.com/frq/aicompetition</a>
        </p>
        <p>通讯地址：<span>湖南省长沙市芙蓉区火炬路169号三湘 南湖大厦10</span></p>
      </div>
    </div>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { getAssetsFile } from '/@/utils/pubUse';
  // const username = ref('');
  const password = ref('');
  const unit = ref('');
  const score = ref('');
  const team = ref('');
  const member = ref('');
  const message = ref('');
  const sex = ref('');
  const position = ref('');
  const text = ref('');
  const onSubmit = (values) => {
    console.log('submit', values);
  };

  const result = ref('');
  const showPicker = ref(false);
  const columns = [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
  ];

  const onConfirm = ({ selectedOptions }) => {
    result.value = selectedOptions[0]?.text;
    showPicker.value = false;
  };
</script>

<style lang="scss" scoped>
  .info {
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

      &-message {
        p {
          //
          line-height: 2;
          font-size: 28px;
          color: #333333;
          span {
            font-weight: bold;
          }

          a {
            color: #276bef;
            text-decoration: underline;
          }
        }
      }

      &-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-items: center;

        .form-title {
          width: 544px;
          font-size: 32px;
          color: #333333;
          text-align: center;
          font-weight: bold;
        }

        .form-content {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }

  .van-nav-bar {
    position: fixed;
    top: 0;
  }
</style>
