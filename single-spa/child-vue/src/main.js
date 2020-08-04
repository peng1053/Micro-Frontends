import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

/* 
· 我们需要父应用加载子应用，将子应用打包成一个个的lib去给父应用使用

· < main.js >
· 子插件通过插件的方式加载到父应用上
· 要独立运行可以通过 window.singleSpaNavigate 判断
· 子应用必须导出 以下生命周期 bootstrap、mount、unmount

· < router/index.js >
· 修改 base 路径。base路径根据父应用来修改。比如父加载子的路径是'/vue'，那么子的base需改成'/vue'

· < vue.config.js >
· 修改打包方式为 umd 模式
· umd类型会把我们导出的bootstrap、mount、unmount 挂载到 window 上 ( window.singleVue.bootstrap / window.singleVue.mount / window.singleVue.unmount )
· 如果端口号变更需要修改端口号

· < 解决 '__webpack_public_path__' is not defined >
  在.eslintrc.js 加入
  "globals": {
      "__webpack_public_path__": "writable"
  }
*/

const appOptions = {
  el: '#vue', // 挂载到父应用中的id为vue的标签中
  router,
  render: h => h(App)
}

// 在非子应用中正常挂载应用
if(!window.singleSpaNavigate){
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

// 如果是父应用引用我
if(window.singleSpaNavigate){
  //webpack提供一个全局变量__webpack_public_path__ ，可即时设置公共路径
  //动态配置子应用
  __webpack_public_path__ = 'http://localhost:10000/'
  //当端口号变了后需要修改 vue.config.js 里 devServer 的端口号
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})

// 协议接入 我定好了协议 父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
export default vueLifeCycle;