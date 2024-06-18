<template>
  <div id="app">
    
    
    
      <router-view></router-view>
  </div>
</template>

<script>
import { navData } from '@/untils/nav';

export default {
  name: 'App',
  

  
  
};
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

.carousel {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  height: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel img.active {
  opacity: 1;
}


footer {
  margin: 0;
  padding: 0;
  position: relative;
}
footer img {
  width: 50%;
  height:40px;
}
</style>