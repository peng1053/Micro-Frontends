import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//安装 react-app-rewired 来修改配置文件
//创建 config-overrides.js 设置配置
//修改 package.json 启动方式
// .env 修改端口号
//导出3个协议 

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if(!window.__POWERED_BY_QIANKUN__){
  render();
}
export async function bootstrap(){

}
export async function mount() {
  render()
}
export async function unmount(){
  ReactDOM.unmountComponentAtNode( document.getElementById('root'));
}