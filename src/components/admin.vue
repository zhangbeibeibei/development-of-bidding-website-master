<template>
    <div class="a">
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
          <span>admin</span>
        </div>
      </header>
      <hr>
      <main>
        <section class="admin">
          <span><router-link :to="navData[6].path">{{ navData[6].title }}</router-link></span>
          <span><b>个人中心</b></span>
        </section>
    </main>
    <div class="big">
      <nav class="navbar">
      <img src="../images/个人中心/u673.svg" style="margin-left: -120px; margin-top: 40px;">
    
      <div style="margin-top: -51px;font-size: 20px;"><router-link :to="navData[8].path">{{ navData[8].title }}</router-link></div>
      <img src="../images/个人中心/u674.svg" style="margin-left: -120px; margin-top: 30px;">
      <div style="margin-top: -51px;font-size: 20px; "><router-link :to="navData[11].path">{{ navData[11].title }}</router-link></div>
      <img src="../images/个人中心/u675.svg" style="margin-left: -120px; margin-top: 30px;">
      <div style="margin-top: -51px;font-size: 20px;"><router-link :to="navData[12].path">{{ navData[12].title }}</router-link></div>
    </nav>
    <div class="wz">
      <p><b>用户名称：</b> admin</p>
    <p><b>ip地址：</b> 辽宁省大连市</p>
    <p><b>所属机构：</b>企业机构</p>
    <p><b>手机号码：</b> 15610565780</p>
    <p><b>当前密码：</b>●●●●●</p>
    </div>
    </div>
    </div>
</template>
<script>
import { navData } from '@/untils/nav';
export default {
  name: 'admin',
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
.a{
    background-color: #f8f9fa;
}
.admin a{
  text-decoration: none;
}
.admin header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    background-color: #f8f9fa;
  
  }
  
  .admin .left img {
    width: 50px;
    height: 50px;
  }
  
  .admin .left span {
    font-size: 25px;
    float: right;
    margin-top: 10px;
    margin-left: 15px;
  }
  
  .admin .center ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0px;
  }
  
  .admin .center li {
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
  .big{
    display: flex;
  }
 .big .navbar {
    margin-top: 30px;
  text-align: left;
  left: 15px;
  width: 200px;
  height: 800px;
  background-color: rgb(18, 165, 126);
  border-radius: 10px;
  text-align: center;
  color: white;
}
.big .wz{
  text-align: right;
    margin-left: 20px;
    margin-top: 30px;
    background-color: white;
    line-height: 30px;
    width: 50%;
    height: 760px;
    border-radius: 10px;
    padding: 20px; 
    padding-left: 50px;
    text-align: left;
    }
    router-link {
  text-decoration: none;
}

</style>