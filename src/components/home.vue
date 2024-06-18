<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
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

    <div class="imgs">
    <el-carousel :interval="3000" type="card" height="150px">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" style="height: 150px;"/>
      </el-carousel-item>
    </el-carousel>
</div>
    <hr>

    <footer>
      <img src="../images/主页/u12.png" style="float: left;">
      <div style="position: absolute; left: 20px; top: 10px; color: whitesmoke;">招标预告</div>
      <div style="position: absolute; left: 500px; top: 10px; color: #999;">
        <router-link :to="navData[2].path">{{ navData[2].title }}</router-link><img src="../images/主页/u16.png"
          style="position: absolute; left: 40px; top: 6px; height: 10px;">
      </div>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">【麻城市中心】 麻城经济开发区谌家园小学...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">【麻城市中心】 麻城市农村公路管理局招标...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">【麻城市中心】 麻城经济开发区谌家园小学...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">【汉川市中心】 汉川电厂四期扩建工程电力...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">【红安县中心】 红安县2023年度小型水库安...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>

      <img src="../images/主页/u12.png" style="float: right; margin-top: -295px;">
      <div style="position: absolute; left: 51%;top: 10px; color: whitesmoke;">招标公告</div>
      <div style="position: absolute; right: 190px; top: 10px; color: #999;">更多<img src="../images/主页/u16.png"
          style="position: absolute; right: -20px; top: 6px; height: 10px;"></div>
      <p style="font-size: 14px; float: left; margin-left: 50%; margin-top: -240px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">平煤隆基新能源科技有限公司——二期电...</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -240px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -195px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">【2023年第4批杂项备件询比价采购...</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -195px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -150px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float:left;">平煤隆基新能源科技有限公司——二期硅烷...</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -150px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -110px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">云南省中医医院污水运维项目咨询邀请公告...</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -110px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -70px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">平煤隆基新能源科技有限公司——动力厂房</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -70px;">2023-04-13</p>

      <img src="../images/主页/u12.png" style="float: left;">
      <div style="position: absolute; left: 10px; top: 305px; color: whitesmoke;">中标公告</div>
      <div style="position: absolute; left: 500px; top: 305px; color: #999;">更多<img src="../images/主页/u16.png"
          style="position: absolute; left: 40px; top: 6px; height: 10px;"></div>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">山东省淄博市山东鑫泉医药有限公司线路迁...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">张家界旅游学校关于果盆／果盘／果篮的网上...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">长沙市芙区朝阳小学关于其他广告服务的...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">沙沟村特色农畜产品电商综合服务中心建设...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-right: 950px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 100px; width: 15px; height: 15px; float: left;">涟源市工贸中专关于 LED 头灯的网上超市采...</p>
      <p style="font-size: 14px; float: left; margin-left: 30%; margin-top: -30px;">2023-04-13</p>

      <img src="../images/主页/u12.png" style="float: right; margin-top: -295px;">
      <div style="position: absolute; left: 51%; top: 305px; color: whitesmoke;">企业采购</div>
      <div style="position: absolute; right: 190px; top: 305px; color: #999;">更多<img src="../images/主页/u16.png"
          style="position: absolute; right: -20px; top: 6px; height: 10px;"></div>
      <p style="font-size: 14px; float: left; margin-left: 50%; margin-top: -240px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">慈利县三合镇国太桥中学关于新鲜水果的...</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -240px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -195px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">兰陵县第七中学七中2023年保安经费成交公告</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -195px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -150px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float:left;">(XJ023041300027) CG ﹣连接器询价</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -150px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -110px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">岳阳县公安局关于机械硬盘的网上超市采购...</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -110px;">2023-04-13</p>
      <p style="font-size: 14px; float:left; margin-left: 50%;margin-top: -70px;"><img src="../images/主页/u19.png"
          style="left: 10px;top: 10px; width: 15px; height: 15px; float: left;">青州市机关事务服务中心车辆保险成交公告</p>
      <p style="font-size: 14px; float: left; margin-left: 80.5%; margin-top: -70px;">2023-04-13</p>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
import { navData } from '@/untils/nav';
export default {
  name: 'home',
  props: {
    msg: String
  },
  components: {},
  setup() {
    return {
      navData,
      images: [
        '/images/u9.png',
        '/images/u7.svg',
        '/images/u8.png',
      ],
    };
  },
  /**setup() {
  return {
    navData,
    images: [
      { src: '/images/u9.png', style: { width: '300px', height: '200px' } },
      { src: '/images/u7.svg', style: { width: '300px', height: '200px' } },
      { src: '/images/u8.png', style: { width: '300px', height: '200px' } },
    ],
  };
} */
}
</script>

<style scoped>

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

.el-carousel__item {
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item img {
  width: 100%;
  height: auto;
}

footer {
  margin: 0;
  padding: 0;
  left: 80px;
  position: relative;
}

footer img {
  width: 50%;
  height: 40px;
}
</style>
