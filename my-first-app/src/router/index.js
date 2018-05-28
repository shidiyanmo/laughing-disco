import Vue from 'vue'
import Router from 'vue-router'
// import HelloCustomer from '@/components/HelloCustomer'
// import Search360 from '@/components/Search360'
// import BaiDu from '@/components/BaiDu'
// import SouGou from '@/components/SouGou'
import Hello from '@/components/hello'
import Foo from '@/components/foo'
import Child1 from '@/components/h-child1'
import Child2 from '@/components/h-child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello:hparam1',
      name: 'Hello',
      component: Hello,
      children: [
        { name: '/chlid1', path: '/child1', component: Child1 },
        { name: '/chlid2', path: '/child2', component: Child2 }
      ]
    },
    {
      path: '/foo/:fparam1/age:fparam2',
      name: 'Foo',
      component: Foo
    },
    {path: '*', redirect: '/hello:hparam1'}// 配置默认页面路径
    // {
    //   path: '/search360',
    //   name: 'Search360',
    //   component: Search360
    // },
    // {
    //   path: '/baidu',
    //   name: 'BaiDu',
    //   component: BaiDu
    // },
    // {
    //   path: '/sougou',
    //   name: 'SouGou',
    //   component: SouGou
    // }
  ]
})

// {name: 'Search360', path: 'search360', component: Search360},
//         {name: 'BaiDu', path: 'baidu', component: BaiDu},
//         {name: 'SouGou', path: 'sougou', component: SouGou}
