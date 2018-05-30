import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Foo from '@/components/foo'
import Child1 from '@/components/h-child1'
import Child2 from '@/components/h-child2'

Vue.use(Router)

const vueRouter = new Router({
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
  ]
})

export default vueRouter

vueRouter.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// {name: 'Search360', path: 'search360', component: Search360},
//         {name: 'BaiDu', path: 'baidu', component: BaiDu},
//         {name: 'SouGou', path: 'sougou', component: SouGou}
