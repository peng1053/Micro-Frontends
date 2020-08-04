<template>
  <!-- 
    初始项目为 id = "app" ，在这种情况下加载vue的子应用会出现router 错误。
    错误：Uncaught Error: application 'vueApp' died in status NOT_MOUNTED: [qiankun] Target container with #vue not existed after vueApp mounted!
    因为子项目也包含 id = "app" 的 div
  -->
  <div id="main">
    <div id="nav">
      <!--基座中可以放自己的路由-->
      <router-link to="/">vue基座应用</router-link> |
      <!--引用其他子应用-->
      <router-link to="/vue">vue子应用</router-link> |
      <router-link to="/react">react子应用</router-link>
    </div>
    <!--基座显示的地方-->
    <router-view ></router-view>
    <!--子应用vue显示的地方-->
    <div id="vue"></div>
    <!--子应用react显示的地方-->
    <div id="react"></div>
  </div>
</template>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
