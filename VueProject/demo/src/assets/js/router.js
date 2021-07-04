import VueRouter from 'vue-router'
import home from '../../pages/home/Home.vue'
import city from '../../pages/city/City.vue'
import detail from '../../pages/detail/Detail.vue'
import order from '../../pages/order/Order.vue'
import mine from '../../pages/mine/Mine.vue'
import custom from '../../pages/custom/Custom.vue'
import login from '../../pages/login/Login.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:home,
            component:home
        },
        {
            path:'/city',
            name:city,
            component:city
        },
        {
            path:'/detail/:id',
            name:detail,
            component:detail
        },
        {
            path:'/order',
            name:order,
            component:order
        },
        {
            path:'/mine',
            name:mine,
            component:mine
        },
        {
            path:'/custom',
            name:custom,
            component:custom
        },
        {
            path:'/login',
            name:login,
            component:login
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})
//解决Avoided redundant navigation to current location: "/"报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}