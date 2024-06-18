<template>
    <div class="container">
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
    <router-view></router-view>
    <hr>
      <main>
        <section class="announcements">
            <span><router-link :to="navData[6].path">{{ navData[6].title }}</router-link></span>
            <span >信息公告/</span>
            <span ><b>信息公告详情页</b></span>
          
          <h3 style="text-align: center;">太原市迎泽区卫生局卫生监督所2023年4月至12月政府采购意向-公用经费项目</h3>
          <p style="text-align: center;">发布企业：太原市迎泽区卫生局卫生监督所 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间：2023年04月13日</p>
          <p style="font-size: 14px;">为了便于供应商及时了解<span style="color: red;">政府采购</span>信息，根据《关于开展<span style="color: red;">政府采购意向</span>公开工作的通知》（财库【2020】129号）等有关规定，现将<span style="color: red;">太原</span>市（含县、区）<span style="color: red;">2023年4月至12月</span>采购<span style="color: red;">意向</span>公开如下：</p>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>采购<span style="color: red;">项目</span>名称</th>
                <th>采购需求概况</th>
                <th>预算金额（元）</th>
                <th>预计采购时间（填写到<span style="color: red;">月</span>）</th>
                <th>是否专门面向中小企业采购</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style="color: red;">公用经费项目</td>
                <td>公车维修</td>
                <td>* * *</td>
                <td style="color: red;">2023年12月</td>
                <td>是</td>
                <td>车辆运行维护费</td>
              </tr>
            </tbody>
          </table>
          <p>本次公开的采购<span style="color: red;">意向</span>是本单位<span style="color: red;">政府采购</span>工作的初步安排，具体采购<span style="color: red;">项目</span>情况以相关采购公告和采购文件为准。</p>
          <br>
          <br>
          <br>
          <br>
          <br>
          <p><span style="color: red;">太原</span>市（略）（略）</p>
          <br>
          <br>
          <br>
          <br>
          <br>
          <p>温馨提示：本招标<span style="color: red;">项目</span>仅供付费会员查阅，您的权限不能浏览详细信息，联系工作人员办理会员入网事宜，成为正式会员后方可获取详细的招标公告、报名表格、<span style="color: red;">项目</span>附件及部分<span style="color: red;">项目</span>招标文件等。</p>
          <p>联系人：郝工</p>
          <p>电话：010-68960698</p>
          <p>邮箱：10<span style="color: red;">4</span>9263697@qq.com</p>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import { navData } from '@/untils/nav';
  export default {
    name: 'ggxq',
    props: {
    
},
setup() {
  return {
    navData,
  };
},
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #333;
  }
  
  .announcements table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .announcements th,
  .announcements td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  .announcements th {
    background-color: #f4f4f4;
  }
  router-link {
  text-decoration: none;
}

  </style>
  