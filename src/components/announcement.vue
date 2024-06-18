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
        <span ><b>信息公告</b></span>
        <h2 ></h2>
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>公告名称</th>
              <th>发布时间<img src="../images/公告列表/u202.png" alt="" style="width: 20px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>【麻城市中心】麻城经济开发区谌家园小学建设项目招标预公告</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>【麻城市中心】 麻城市农村公路管理局招标计划</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>【麻城市中心】麻城经济开发区瑶家园小学及附属幼儿园建设项目招标预公告</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>[汉川市中心]汉川电厂四期扩建工程电力和水管网线路迁改建设工程</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>【红安县中心]红安县2023年度小型水库安全监测项目设计采购施工总承包(EPC)</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>海头镇宅基地土地发包项目</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>先锋创业大楼(515-1室)60m²</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>烟台市福山区人民政府清洋街道办事处2023年04(至)05月政府采购意向</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>同江市实验幼儿园2023年05月政府采购意向</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>侯马市第二中学2023年4月至12月政府采购意向采购--城乡义务教育补助省级配套经费</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td><router-link :to="navData[4].path">{{ navData[4].title }}</router-link></td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>侯马市第二中学2023年4月至11月政府采购意向--城乡义务教育补助中央资金</td>
              <td>2022-04-13</td>
            </tr><tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>太原市迎泽区卫生监督所2023年4月至12月政府采购意向--公用经费项目</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>侯马市第二中学2023年4月至8月政府采购意向--城乡义务教育补助中央资金</td>
              <td>2022-04-13</td>
            </tr>
            <tr>
              <td><img src="../images/主页/u19.png" alt=""></td>
              <td>【次氯酸钾贮存罐维修】采购 公告 附件</td>
              <td>2022-04-13</td>
            </tr>

          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import { navData } from '@/untils/nav';
export default {
  name: 'announcement',
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