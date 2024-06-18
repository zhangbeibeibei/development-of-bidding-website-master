<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="complaint-form">
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
      <div class="xia">
        <div class="header-container">
          <span><router-link :to="navData[6].path">{{ navData[6].title }}</router-link>/</span>
          <div ><b>违规投诉</b></div>
          <div class="admin-panel">
            <button @click="goToComplaint">去投诉</button>
          </div>
        </div>
      </div>
      <div class="table-container">
        <table class="table">
           <tr>
                <th class="a">序号</th>
                <th class="b">动态标题</th>
                <th class="c">发布时间</th>
                <th class="d">处理状态</th>
                <th class="e">操作</th>
            </tr>
            <!-- 在这里添加违规投诉的数据 -->
           <tr>
                <td>01</td>
                <td>【麻城市中心】麻城经济开发区谌家园小学建设项目招标预公告</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>02</td>
                <td>【麻城市中心】麻城市农村公路管理局招标计划</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>03</td>
                <td>【麻城市中心】麻城经济开发区谌家园小学及附属幼儿园建设项目招标预公告</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>04</td>
                <td>【汉川市中心】汉川电厂四期扩建工程电力和水管网线路迁改建设工程</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>05</td>
                <td>【红安县中心】红安县2023年度小型水库安全监测项目设计采购施工总承包(EPC)</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>06</td>
                <td>海头镇宅基村土地发包项目</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>07</td>
                <td>先锋创业大楼(515-1室)60m</td>
                <td>2022-04-13</td>
                <td style="color: #ccad14;">正在处理中</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>08</td>
                <td>万达开绿色智能铸造产业园项目(二期)比选结果公告</td>
                <td>2022-04-13</td>
                <td>处理完成</td>
                <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr> 
                <td>09</td>
                <td>2023年度工伤基金结算支付智能审核监控项目竞争性磋商公告</td>
                <td>2022-04-13</td>
               <td>处理完成</td>
               <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>11</td>
                <td>太原市迎泽区卫生局卫生监督所2023年4月至12月政府采购意向-公用经费项目</td>
                <td>2022-04-13</td>
               <td>处理完成</td>
               <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>12</td>
                <td>侯马市第二中学校2023年4月至11月政府采购意向-城乡义务教育补助经费中央资金</td>
                <td>2022-04-13</td>
               <td>处理完成</td>
               <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>13</td>
                <td>太原市迎泽区卫生局卫生监督所2023年4月至12月政府采购意向-公用经费项目</td>
                <td>2022-04-13</td>
               <td>处理完成</td>
               <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>14</td>
                <td>侯马市第二中学校2023年4月至8月政府采购意向-城乡义务教育补助经费中央资金</td>
                <td>2022-04-13</td>
               <td>处理完成</td>
               <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
           <tr>
                <td>15</td>
                <td>【次氯酸钠贮存罐修理】采购公告 附件</td>
                <td>2022-04-13</td>
               <td>处理完成</td>
               <router-link :to="navData[10].path">{{ navData[10].title }}
  
</router-link>


            </tr>
            <!-- 更多数据... -->
        </table>
    </div>
    <div class="ComplaintForm">
    <!-- 其他内容... -->
    <transition name="fade">
      <div class="overlay" v-if="showForm" @click.self="showForm = false">
        <div class="form-container" @click.stop>
          <div class="form-header">
            <h2>创建投诉</h2>
            <button class="close-button" @click="showForm = false">X</button>
          </div>
          <div class="form-body">
            <div class="form-group">
              <label for="complaintTitle"><span class="t">*</span>投诉标题</label>
              <input style="width: 350px;"id="complaiwntTitle" type="text" v-model="complaintTitle" placeholder="请输入投诉标题">
            </div>
            <div class="form-group">
              <label for="complaintContent"><span class="t">*</span>投诉内容</label>
              <textarea style="width: 350px;" id="complaintContent" v-model="complaintContent" placeholder="请输入投诉内容"></textarea>
            </div>
            <div class="form-group">
              <label for="contactPerson"><span class="t">*</span>联系人</label>
              <input style="width: 350px;" id="contactPerson" type="text" v-model="contactPerson" placeholder="请输入联系人">
            </div>
            <div class="form-group">
              <label for="contactPhone">联系电话</label>
              <input style="width: 350px;" id="contactPhone" type="tel" v-model="contactPhone" placeholder="请输入联系电话">
            </div>
            <div class="form-actions">
              <button @click="submitComplaint">保存</button>
              <button @click="showForm = false">取消</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
    </div>
  </template>
  
  <script>
  import { navData } from '@/untils/nav';
  export default {
    name: 'ComplaintForm',
    
    data() {
      return {
        showForm: false,
      };
    },setup() {
    return {
      navData,
    };
  },
    methods: {
      goToComplaint() {
        this.showForm = true;
      },
      submitComplaint() {
        // 这里可以添加提交表单的逻辑
        console.log('提交投诉信息：', {
          title: this.complaintTitle,
          content: this.complaintContent,
          contactPerson: this.contactPerson,
          contactPhone: this.contactPhone
        });
        this.showForm = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .complaint-form {
    header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  background-color: #f8f9fa;

}
.t{
  color: red;
}
.left img {
  width: 50px;
  height: 50px;
}

.left span {
  font-size: 14px;
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

    background-color: rgb(233, 232, 232);
    /* 在这里添加CSS样式 */
  }
  /* 在这里添加CSS样式 */
  table tr {
  border-bottom: 1px solid #191818;
  margin-bottom: 20px;
  margin-top: 20px;
}
button {
    border: none;
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
.left img {
  width: 50px;
  height: 50px;
}

.left span {
  font-size: 14px;
  float: right;
  margin-top: 10px;
  margin-left: 15px;
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
.admin-panel button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  top: 10px;
  border-radius: 10px;
}
.complaint-list {
  padding: 20px;
}
table,td {
  padding: 8px;
}
.table-container {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

.table {
   margin: 0 auto;
  border-collapse: collapse;
  width: 90%;
  margin: 20px auto;
  font-size: 14px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

nav ul {
  list-style-type: none; /* 去除小圆点 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
nav li {
  margin: 0 50px; /* 设置间距 */
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-header h2 {
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.form-actions button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

.form-actions button:hover {
  background: #0056b3;
}

/* 淡入淡出动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.xia {
  /* 根据需要添加样式，例如背景色、边距等 */
  padding: 10px 0; /* 举例：添加上下内边距 */
  background-color: #f5f5f5; /* 举例：添加背景色 */
}.xia {
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 两端对齐，内容在中间 */
  align-items: center; /* 垂直居中对齐 */
  padding: 10px; /* 举例：添加内边距 */
}

.header-container {
  flex-grow: 1; /* 让标题容器占据剩余空间 */
  display: flex; /* 使用Flexbox布局 */
  align-items: center; /* 垂直居中对齐 */
}

.title1,
.title2 {
  margin: 0; /* 移除默认的外边距 */
  padding: 0 10px; /* 添加内边距 */
}

.admin-panel {
  margin-left: auto; /* 将按钮容器推到最右边 */
}
router-link {
  text-decoration: none;
}

</style>