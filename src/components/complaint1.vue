<template>
    <div>
      <header style="box-shadow: -5px -1px 4px 1px #999">
      <div class="left">
        <img src="../images/主页/u128.png" alt="网站 Logo" />
        <span>双碳招投标网</span>
      </div>
      <div class="center">
        <ul>
          <li>
            <router-link :to="navData[0].path">{{ navData[0].title }}</router-link>
          </li>

          <li><router-link :to="navData[1].path">{{ navData[1].title }}</router-link></li>
          <li><router-link :to="navData[9].path">{{ navData[9].title }}</router-link></li>
        </ul>
      </div>
      <div class="right">
        <img src="../images/主页/u122.png" alt="个人头像" />
        <span><router-link :to="navData[7].path">{{ navData[7].title }}</router-link></span>
      </div>
    </header>
      <hr>
      <main>
        <section class="announcements">
          <span><router-link :to="navData[6].path">{{ navData[6].title }}</router-link></span>
          <span><b>违规投诉/</b></span>
          <span><b>违规投诉详情页</b></span>
          <h2 style="text-align: center;">古浪-河口天然气联络管道工程施工第二标段位于甘肃省兰州市永登县，西固区内</h2>
          <p style="text-align: center;">发布时间： 2023年04月13日</p>
          <div class="yellow"><p>当前状态：审核通过，等待评比</p></div>
          <div class="hb"><p style="font-weight: bold;">发生地:</p><p>甘肃省-兰州市-永登县</p></div>
          
          <div class="hb"><p style="font-weight: bold;">污染企业名称:</p> <p>中油(新疆)石油工程有限公司;国家管网集团联合管道西部分公司</p></div>
          <div class="hb"><p style="font-weight: bold;">详细位置:</p><p>兰州市永登县终点为西固区</p></div>
          <div class="hb"><p style="font-weight: bold;">污染类型:</p> <p>生态破坏</p></div>
          <div class="hb"><p style="font-weight: bold;">投诉时间:</p> <p>2023-04-06</p></div>
          <div class="hb"><p style="font-weight: bold;">是否对政府公开联系方式:</p><p>否</p></div>
          <h3 style="color: aquamarine;">详情描述</h3>
          <p>违法行为：</p>
          <p>(1)项目在未履行国土、环保审批手续的情况下未批先建。破坏农田、林地、草原，严重损害当地生态环境,</p>
          <p>(2)现场执行环保标准不到位。管沟和顶管基坑不执行分层开控制度。表层士和底层土无序堆放，使回填后无法保持植物生长原有的生活环境，水土流失严重，无防扬尘措施，较去年同期环境空气有明显变化。</p>
          <p>期盼解决:</p>
          <p>(1)相关部门根据相关法律法规停止该项目违法行为，坚决整改，符合国家环保和土地法规后再进行施工，</p>
          <p>(2)当地政府及司法部门履职到位，对之前违法事件进行处罚及诉讼，避免此类事件发生，使环保监管不留于表面，坚持“零容忍”的态度依法查处违法行为，拒绝盲目发展。</p>
        </section>
    </main>
  </div>
</template>
<script>
import { navData } from '@/untils/nav';
export default {
  name: 'policy1',
  props: {
  },
  setup() {
    return {
      navData,
    };
  },
  data() {
    return {
      noticeList: [
        { title: '麻城市中心麻城经济开发区谌家园小学建设项目招标预公告', date: '2022-04-13' },
        { title: '麻城市中心 麻城市农村公路管理局招标计划', date: '2022-04-13' },
        // ... 更多数据项
      ]
    }
  }
}

</script>
<style>
.cxhx{
  border-bottom: 5px solid #2aa089 ;padding-bottom: 5px;
  
}
.yellow{
  float: right;
  color: rgb(246, 180, 80);
}
.hb{
  display: flex;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    background-color: #f8f9fa;
  
  }
  
  .left img {
    width: 50px;
    height: 50px;
  }
  
  .left span {
    font-size: 25px;
    float: right;
    margin-top: 10px;
    margin-left: 15px;
  }
  
  .center ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0px;
  }
  
  .center li {
    margin: 0px 60px;
  }
  
  .right img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  .right span {
    float: right;
    margin-top: 5px;
  }
  
  .notice-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .fixed-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .notice-info {
    flex: 1;
  }
  
  .notice-title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .notice-date {
    font-size: 14px;
    color: #999;
  }
  router-link {
  text-decoration: none;
}

  </style>
