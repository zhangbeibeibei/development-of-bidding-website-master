<template>
    <div class="qy">
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
          <span>个人中心/</span>
          <span><b>参与投标</b></span>
        </section>
    </main>
    <div class="boss">
      <nav class="navbar">
      <img src="../images/个人中心/u673.svg" style="margin-left: -120px; margin-top: 40px;">
    
      <div style="margin-top: -51px;font-size: 20px;"><router-link :to="navData[8].path">{{ navData[8].title }}</router-link></div>
      <img src="../images/个人中心/u674.svg" style="margin-left: -120px; margin-top: 30px;">
      <div style="text-align: center; line-height: 40px; margin-top: -59px; margin-left: 20px; font-size: 20px; background-color: #fff; color: rgb(18, 165, 126);width: 150px; height: 40px ; border-radius: 10px;">参与投标</div>
      <img src="../images/个人中心/u675.svg" style="margin-left: -120px; margin-top: 30px;">
      <div style="margin-top: -51px;font-size: 20px;"><router-link :to="navData[12].path">{{ navData[12].title }}</router-link></div>
    </nav>
    <div class="tblb">
    <section class="announcements">
        
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>标的发布名称</th>
              <th>投标结束时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>四川省交通建设集团有限责任公司智能化料场招标采购的公示</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>02</td>
              <td>校工会交互智能平板采购竞价成交公告</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>03</td>
              <td>平邑县图书馆馆藏图书及智能化设备采购项目中标结果公示</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>04</td>
              <td>三一智能电机-局部放电设备-招标招标公告-ZB202304130003\n\n项目标名</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>05</td>
              <td>中电鸿信信息科技有限公司2023年警务室智能化改造项目,单一来源采购方案公示</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>06</td>
              <td>海头镇宅基村土地发包项目</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>07</td>
              <td>先锋创业大楼(515-1室)60m²</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>08</td>
              <td>万达开绿色智能铸造产业园项目（二期）比选结果公告</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>09</td>
              <td>2023年度工伤基金结算支付智能审核监控项目竞争性硅商公告</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>10</td>
              <td>万达开绿色智能铸造产业园项目（三期）比选结果公告</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>11</td>
              <td>太原市迎泽区卫生局卫生监督所2023年4月至12月政府采购意向-公用经费项目</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>12</td>
              <td>侯马市第二中学2023年4月至11月政府采购意向--城乡义务教育补助中央资金</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr><tr>
              <td>13</td>
              <td>太原市迎泽区卫生监督所2023年4月至12月政府采购意向--公用经费项目</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>14</td>
              <td>侯马市第二中学2023年4月至8月政府采购意向--城乡义务教育补助中央资金</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            <tr>
              <td>15</td>
              <td>【次氯酸钾贮存罐维修】采购 公告 附件</td>
              <td>2022-04-13</td>
              <td>未报名</td>
              <td style="color: aqua;">报名</td>
            </tr>
            

          </tbody>
        
        </table>
      
      </section>
    </div>
    </div>
    </div>
</template>
<script>
import { navData } from '@/untils/nav';
export default {
  name: 'cytb',
  props: {

  },
  setup() {
    return {
      navData,
    };
  },
  
};  
</script>
<style>
.qy{
  background-color: #f8f9fa;
}
a{
  color: #000;
  text-decoration: none;
}
 .boss .tblb .announcements table {
  width: 920px;
    margin-top: -1060px;
  margin-left: 240px;
  border-collapse: collapse;
  background-color: white;
}

.announcements th,
.announcements td {
  border: 0px solid #ccc;
  padding: 9px;
  text-align: left;
}

.announcements th {
  background-color: #ffffff;
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
  .boss .navbar {
    margin-top: 30px;
  text-align: left;
  left: 15px;
  width: 200px;
  height: 1010px;
  background-color: rgb(18, 165, 126);
  border-radius: 10px;
  text-align: center;
  color: white;
}
 .boss .tblb{
    margin-left: 20px;
    margin-top: 30px;
    width: 50%;
    height: 970px;
    border-radius: 10px;
    padding: 20px; 
    color: black;
    }

</style>
