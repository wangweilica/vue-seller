import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Goods from '@/components/goods/Goods';
import Seller from '@/components/seller/Seller';

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'seller'
      },
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
});
