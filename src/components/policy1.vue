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
          <span><b>政策法规/</b></span>
          <span><b>政策法规详情页</b></span>
          <h2 style="text-align: center;">关于严格执行招标投标法规制度进一步规范招标投标主体行为的若干意见</h2>
          <p style="text-align: center;">发布时间： 2023年04月13日</p>
          <h3 style="text-align: center;">第一章总则</h3>
          <p><b>第一条</b>  第一条为了规范招标投标活动，根据《中华人民共和国招标投标法》(以下简称招标投标法)，制定本条例。</p>
          <p><b>第二条</b>  招标投标法第三条所称工程建设项目，是指工程以及与工程建设有关的货物、服务。</p> 
          <p>&nbsp;&nbsp;前款所称工程，是指建设工程，包括建筑物和构筑物的新建、改建、扩建及其相关的装修、拆除、修缮等;所称与工程建设有关的货物，是指构成工程不可分割的组成部分，且为实现工程基本功能所必需的设备、材料等;所称与工程建设有关的服务，是指为完成工程所需的勘察、设计、监理等服务。</p>
          <p><b>第三条</b>  依法必须进行招标的工程建设项目的具体范围和规模标准，由国务院发展改革部门会同国务院有关部门制订，报国务院批准后公布施行。</p> 
          <p><b>第四条</b>  国务院发展改革部门指导和协调全国招标投标工作，对国家重大建设项目的工程招标投标活动实施监督检查。国务院工业和信息化、住房城乡建设、交通运输、铁道、水利、商务等部门，按照规定的职责分工对有关招标投标活动实施监督，</p> 
          <p>&nbsp;&nbsp;县级以上地方人民政府发展改革部门指导和协调本行政区域的招标投标工作。县级以上地方人民政府有关部门按照规定的职责分工，对招标投标活动实施监督，依法查处招标投标活动中的违法行为。县级以上地方人民政府对其所属部门有关招标投标活动的监督职责分工另有规定的，从其规定。</p>
          <p>&nbsp;&nbsp;财政部门依法对实行招标投标的政府采购工程建设项目的政府采购政策执行情况实施监督。</p>
          <p>&nbsp;&nbsp;监察机关依法对与招标投标活动有关的监察对象实施监察。</p>
          <p><b>第五条</b>  设区的市级以上地方人民政府可以根据实际需要，建立统一规范的招标投标交易场所，为招标投标活动提供服务。招标投标交易场所不得与行政监督部门存在隶属关系，不得以营利为目的。</p> 
          
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
