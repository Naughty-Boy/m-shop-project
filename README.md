# IGO爱购移动端

******************************
> 移动端电商项目

> 搭配移动端的mui框架进行开发

## 遇到的问题

- 在引入mui.js时出现引用类型错误，原因是在webpack打包时启动的是严格模式，导致无法引用'caller', 'callee', and 'arguments'。

>解决方案：webpack取消严格模式打包

-在进行组件的路由时，除了使用<router-link>标签外，还可以使用$router进行路由。$route是路由参数对象，$router是导航对象，这里可能会混淆

>在组件中使用 this.$router.push('路由地址');进行跳转

- 涉及到了组件的嵌套传值，当点击添加购物车时，数据传递就变得繁琐。

>使用vuex状态管理，来添加需要共享的数据

## 例图

-   ![图一](./screen_picture/igo1.png)

-   ![图二](./screen_picture/igo2.png)

-   ![图三](./screen_picture/igo3.png)

-   ![图四](./screen_picture/igo4.png)

-   ![图五](./screen_picture/igo5.png)

### [我的个人主页](http://www.lwysir.com./)