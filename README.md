# zephyr-eleme

## 使用json文件mock后端接口
1. 项目目录下定义一个json文件（假定文件名为data.json）
1. 再对vue.config.js文件做如下改动：
    1. 添加常量（读取json文件的指定内容）
        ```js
        const appData = require('./data.json')
        const seller = appData.seller;
        ```
1. 在vue.config.js的```module.exports```中添加如下代码：
    ``` js
    devServer: {
        before(app) {
            app.get('/api/seller', function (req, res) {
                res.json({
                    code: 0,
                    data: seller
                })
            });
        }
    },
    ```
1. 这样就能通过结构的方式访问到mock数据了

## 使用axios请求接口
1. 安装：
    npm i axios --save
1. 

## 引入页面的头部组件

## 引入页面头部详情页组件
1. cube-ui的createAPI模块  
    1. 概述：
        该模块默认暴露出一个 createAPI 函数，可以实现以 API 的形式调用自定义组件.  
        ```createAPI(Vue, Component, [events, single])```  
    1. 参数：
        * {Function} Vue Vue 函数（**必传**）
        * {Function | Object} Component Vue 组件，组件必须有 name（**必传**）
        * {Array} [events] 组件实例 emit 的事件名集合(**非必传**)
        * {Boolean} [single] 是否为单例(**非必传**)
    1. 用法： 该方法在 Vue 的 prototype 上增加一个名为 ```$create{camelize(Component.name)}``` 的方法，这样就可以在其他组件中直接通过 ```const instance = this.$createAaBb(config, [renderFn, single]) ```这样来实例化组件了，而且这个实例化组件的元素是被附加到 body 元素下的。

## 补充
1. [函数柯里化](https://zhuanlan.zhihu.com/p/50247174)