import { createRouter,createWebHashHistory } from "vue-router";
import Home from '../components/home.vue';
import About from "../components/Platform.vue";
import Policy from "../components/policy.vue";
import Admin from "../components/admin.vue";
import Enterprise from "../components/enterprise.vue";
import Complaint from "../components/complaint.vue";
import {navData} from '@/untils/nav'



const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/policy',
        name:'Policy',
        component:Policy
    },
    {
        path:'/admin',
        name:'Admin',
        component:Admin
    },
    {
        path:'/enterprise',
        name:'Enterprise',
        component:Enterprise,
    },
    {
        path:'/complaint',
        name:'Complaint',
        component:()=>import('../components/complaint.vue')
    }


]
navData.forEach(element =>{
    routes.push({
        path: element.path,
        name: element.name,
        component: ()=>import('../' + element.component)
    })
});
const router=createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)

export default router