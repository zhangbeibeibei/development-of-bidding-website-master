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
          <span><b>平台动态/</b></span>
          <span><b>平台动态详情页</b></span>
          <h2 style="text-align: center;">$PLH-23-4-13三一石油智能装备询比价公告-XJ202304130222项目标名</h2>
          <p style="text-align: center;">发布时间： 2023年04月13日</p>
          <p>一、项目内容</p>
          <p>（略）：XJ***</p>
          <p>项目标名：PLJH-23-4-13三一石油智能装备</p>
          <p>二、投标人资格要求：</p>
          <p>1、投标单位必须对投标的物料（略）进行确认后才能参加。</p>
          <p>2、投标单位不得给他人借、卖或挂靠资质，如有此种情况，经查证核实后，立即取消其投标资格，并纳入黑名单。</p>
          <p>3、投标人资格在接受资质审查时需提供采购（略）要求的相关资质文件。</p>
          <p>4、严格禁止串标和围标情况发生，如有发现，将取消招标资质，并纳入我司黑名单。</p>
          <p>5、投标方不得以任何理由、任何方式对采购业务人员赠送财物，不得向采购方供应核准经营范围外的产品，给采购方造成严重后果的，采购方将追究其法律责任。</p>
          <p>三、投标人务必在开（路）（路）完成供应商注册并获得投标资格，中标情况将在本网公示。</p>
          <p>四、网上投标方法：具体步骤（略）首页“寻源竞价拍卖操作手册”</p>
          <p>五、报名截止时间：2023-04-14 10:30:41，投标截止及开标时间：2023-04-14 10:30:41，投标人应于投标截止时间前在【(略)GSP平台·投标管理·已参与项目】（略）有电子投标文件。</p>
          <p>六、联系人：段志雄，联系方式：***</p>
          <p>部门经理：贾桂忱 联系方式：***</p>
          <p>投诉电话：0731-***/***。邮箱：jiancha@***；huanggif@***</p>
          <p>温馨提示：本招标项目仅供付费会员查阅，您的权限不能浏览详细信息，联系工作人员办理会员入网事宜，成为正式会员后方可获取详细的招标公告、报名表格、项目附件及部分项目招标文件等。</p>
          <p>联系人：郝工</p>
          <p>电话：010-68960698</p>
          <p>邮箱：1049263697@qq.com</p>
        </section>
    </main>
  </div>
</template>
<script>
import { navData } from '@/untils/nav';
export default {
  name: 'platform1',
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
  </style>