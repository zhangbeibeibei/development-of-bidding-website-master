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
        <section class="enterprise">
          <span><router-link :to="navData[6].path">{{ navData[6].title }}</router-link></span>
          <span>个人中心/</span>
          <span><b>企业信息</b></span>
        </section>
    </main>
    <div class="big">
    <nav class="navbar">
        
      <img src="../images/个人中心/u673.svg" style="margin-left: -120px; margin-top: 40px;">
    
      <div  style="text-align: center; line-height: 40px; margin-top: -59px; margin-left: 20px; font-size: 20px; background-color: #fff; color: rgb(18, 165, 126);width: 150px; height: 40px ; border-radius: 10px;">企业信息</div>
      <img src="../images/个人中心/u674.svg" style="margin-left: -120px; margin-top: 30px;">
      <div style="margin-top: -51px;font-size: 20px;"><router-link :to="navData[11].path" style=" color: #fff;">{{ navData[11].title }}</router-link></div>
      <img src="../images/个人中心/u675.svg" style="margin-left: -120px; margin-top: 30px;">
      <div style="margin-top: -51px;font-size: 20px;"><router-link :to="navData[12].path">{{ navData[12].title }}</router-link></div>
    </nav>
    <div class="company-info" style="font-size: 15px;">  
    <p >企业名称：大连素食有限公司 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;统一社会信用代码：2012000043245689567</p>  
    <p>公司注册地址：辽宁省大连市金普新区和平路56号</p>  
    <p>参与投标,机构类型：企业机构&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;企业性质：私营企业</p>  
    <p>成立日期：2021年-05月13日</p>  
    <p>法人/负责人：李华 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 法人/负责人身份证：210282198706235543</p>  
    <p style="color: aqua;">法人/负责人身份证扫描件：查看图片</p>  
    <p>单位联系地址：辽宁省大连市金普新区和平路56号</p>  
    <p>经营范围：饮食&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;公司简介：大连素食有限公司是一家致力于研,究素食美味的公司</p>  
    <p>营业执照有效期：,2021/5/13-2028/5/13</p>  
    <p style="color: aqua;">营业执照扫描件：查看图片</p>  
    <p>开户行：大连银行 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 银行账号：63299427971907320931709</p>  
    <p>开户行地址：辽宁省大连市金普新区农贸街65号</p>  
    <p>单位注册电话：8657-4321</p>  
    <p>单位注册电话：8657-4321 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;单位注册地址：辽宁省大连市金普新区和平路56号</p>  
    <p>注册资本（万元）：200.00 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;实缴资本：100.00万元</p>  
    <p style="color: aqua;">开户许可证/基本户存款信息证：查看图片</p>  
    <p><div class="addBtn">
      <el-button style="background-color: rgb(18, 165, 126);color: white;"plain @click="open">修改</el-button>

        </div></p>
        <div class="button" id="xg">
      <div v-show="isEditing"><el-input v-model="address" placeholder="请输入"></el-input>公司</div>
      <div v-show="isEditing"><el-input v-model="nature" placeholder="请输入"></el-input>企业性质</div>
      <div v-show="isEditing"><el-input v-model="person" placeholder="请输入"></el-input>法人/负责人</div>
      <div v-show="isEditing">
  <el-input v-model="contactAddress" placeholder="请输入"></el-input>
  联系单位地址
</div>
<div v-show="isEditing">
  营业执照扫描件
  <input type="file" @change="handleBusinessLicenseScan">
 
</div>
<div v-show="isEditing">
  <el-date-picker v-model="businessLicenseValidity" type="daterange" placeholder="选择日期范围"></el-date-picker>
  营业执照有效期
</div>
<div v-show="isEditing">
  法人/身份证扫描件
  <input type="file" @change="handleIdCardScan">
  
</div>
<div v-show="isEditing">
  <el-input v-model="openingBank" placeholder="请输入"></el-input>
  开户行
</div>
<div v-show="isEditing">
  <el-input v-model="openingBankAddress" placeholder="请输入"></el-input>
  开户行地址
</div>
<div v-show="isEditing">
  <el-input v-model="registrationAddress" placeholder="请输入"></el-input>
  单位注册地址
</div>
<div v-show="isEditing">
  <el-input v-model="paidInCapital" placeholder="请输入"></el-input>
  实缴资本(万元)
</div>
<div v-show="isEditing">
  <input type="file" @change="handleAccountPermitScan">
  开户许可证
</div>
<div v-show="isEditing">
  <el-input v-model="institutionType" placeholder="请输入"></el-input>
  机构类型
</div>
<div v-show="isEditing">
  <el-date-picker v-model="establishmentDate" type="date" placeholder="选择日期"></el-date-picker>
  成立日期
</div>

      <div v-show="isEditing">
        <el-button @click="open">确定</el-button>
        <el-button @click="open">取消</el-button>
      </div>

    </div>
     
  </div>  
</div>
    </div>
</template>
<script>
import { navData } from '@/untils/nav';
import { ref } from 'vue';
export default {
  name: 'enterprise',
  props: {

  },
  setup() {
    const isEditing = ref(false);
    const address = ref('');
    const nature = ref('');
    const person = ref('');

    function open() {
      isEditing.value = !isEditing.value;
    }

function open() {
  if (isEditing.value) {
        document.querySelector('.company-info').innerHTML = '企业名称：' + address.value + ' &emsp;统一社会信用代码：2012000043245689567';
      } else {
        isEditing.value = !isEditing.value;
      }
}
    return {  
      navData,
      open,
      isEditing,
      address,
      nature,
      person
    };
  },
  
};  
</script>
<style>
.qy{
    background-color: #f8f9fa;
}
 .qy a{
  color: white;
  text-decoration: none;
}
.qy .addBtn {
    float: right;
  bottom: 40px;
  right: 40px;
  width: 80px;
  
}
.qy header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    background-color: #f8f9fa;
  
  }
  
  .qy .left img {
    width: 50px;
    height: 50px;
  }
  
  .qy .left span {
    font-size: 25px;
    float: right;
    margin-top: 10px;
    margin-left: 15px;
  }
  
  .qy .center ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding: 0px;
  }
  
  .qy .center li {
    margin: 0px 60px;
  }
  
  .qy .right img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  .qy .right span {
    float: right;
    margin-top: 5px;
  }
  
  .qy .notice-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .qy .fixed-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .qy .notice-info {
    flex: 1;
  }
  
  .qy .notice-title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .qy .notice-date {
    font-size: 14px;
    color: #999;
  }
  .big .navbar {
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
.big .company-info{
  text-align: right;
    margin-left: 20px;
    margin-top: 30px;
    background-color: white;
    line-height: 30px;
    width: 50%;
    height: 970px;
    border-radius: 10px;
    padding: 20px; 
    padding-left: 50px;
    text-align: left;
    }
</style>