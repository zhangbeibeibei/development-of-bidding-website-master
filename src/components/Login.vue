<template>
        <el-form :model="form" label-width="auto" style="max-width: 800px;">
            <el-form-item label="用户名" style="margin-left: 300px">
                <el-input v-model="account" />
            </el-form-item>
            <el-form-item label="密码" style="margin-left: 300px">
                <el-input v-model="password" />
            </el-form-item>
            <el-form-item label="">
                <el-alert :title="tip" type="error" v-show="showTip" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="margin-left: 300px">登录</el-button>
                <el-button>重置</el-button>
            </el-form-item>
        </el-form>
</template>

<script>
import { ref,watch } from "vue"
    export default {
      name: 'Login',
      components: {
      },
      setup(){
        const account=ref("")
        const password=ref("")
        const tip=ref("")
        const showTip=ref(false)
        
        watch(password, (newValue, oldValue) => {
          console.log("新的密码：" + newValue + ",曾经的密码" + oldValue)
          if (newValue.length < 6) {
            tip.value = "密码长度不能小于6";
            showTip.value = true
          } else {
            tip.value = "";
            showTip.value = false
          }
        })
    
        return {
            account,
            password,
            tip,
            showTip
        }
      }
    }

</script>
<style>
</style>