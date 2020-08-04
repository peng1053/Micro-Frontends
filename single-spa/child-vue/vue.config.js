module.exports = {
    configureWebpack:{
        output:{
            library: "singleVue", //打包类库的名字
            libraryTarget: 'umd' //打包后的模块类型
            //umd类型会把我们导出的bootstrap、mount、unmount 挂载到 window 上
            //window.singleVue.bootstrap / window.singleVue.mount / window.singleVue.unmount
        },
        devServer:{ //为了区分应用修改端口号
            port: 10000
        }
    }
}