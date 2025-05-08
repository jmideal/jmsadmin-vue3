<p align="center">
	<img alt="logo" src="http://image.jmsite.cn/logo-jm.png">
</p>
<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">JmsAdmin v1.0.1</h1>
<h4 align="center">基于Webman+Vue3前后端分离的PHP快速开发框架</h4>
<p align="center">
	<img src="https://img.shields.io/badge/JmsAdmin-v1.0.1-brightgreen.svg">
	<img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

## 平台简介
* 本后台基于优秀的若依后台管理框架，前端完全使用若依代码，只做了适当的修改和优化，后端代码使用php的webman框架开发。
* 本仓库为前端仓库，技术栈为 [Vue3](https://v3.cn.vuejs.org) + [Element Plus](https://element-plus.org/zh-CN) + [Vite](https://cn.vitejs.dev) 。
* 配套后端代码仓库地址:

  github:https://github.com/jmideal/jmsadmin-webman

  gitee:https://gitee.com/jmideal/jmsadmin-webman

## 前端运行

```bash
# 克隆项目
git https://github.com/jmideal/jmsadmin-vue3
或
git https://gitee.com/jmideal/jmsadmin-vue3

# 进入项目目录
cd jmsadmin-vue3

# 安装依赖
yarn --registry=https://registry.npmmirror.com

# 启动服务
yarn dev

# 构建测试环境 yarn build:stage
# 构建生产环境 yarn build:prod
# 前端访问地址 http://localhost:80
```

## 内置功能

1.  用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2.  部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
3.  岗位管理：配置系统用户所属担任职务。
4.  菜单管理：配置系统菜单，操作权限，按钮权限标识等。
5.  角色管理：角色菜单权限分配、角色数据权限分配。
6.  字典管理：对系统中经常使用的一些较为固定的数据进行维护。
7.  参数管理：对系统动态配置常用参数。
8.  通知公告：系统通知公告信息发布维护。
9.  操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
10. 登录日志：系统登录日志记录查询包含登录异常。
11. 在线用户：当前系统中活跃用户状态监控。
12. 缓存列表：对系统运行中的缓存进行查看和管理。
13. 代码生成：前后端代码的生成（vue，js，validate，controller，service，model），开发中。

## 在线体验

- 用户名/密码：admin/admin123
- 演示地址：http://jmsadmin.jmsite.cn
- 文档地址：http://doc.jmsadmin.jmsite.cn

## 演示图

<table>
    <tr>
        <td><img src="http://image.jmsite.cn/demo/1.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/2.png"/></td>
    </tr>
    <tr>
        <td><img src="http://image.jmsite.cn/demo/3.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/4.png"/></td>
    </tr>
    <tr>
        <td><img src="http://image.jmsite.cn/demo/5.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/6.png"/></td>
    </tr>
	<tr>
        <td><img src="http://image.jmsite.cn/demo/7.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/8.png"/></td>
    </tr>	 
    <tr>
        <td><img src="http://image.jmsite.cn/demo/9.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/10.png"/></td>
    </tr>
	<tr>
        <td><img src="http://image.jmsite.cn/demo/11.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/12.png"/></td>
    </tr>
	<tr>
        <td><img src="http://image.jmsite.cn/demo/13.png"/></td>
        <td><img src="http://image.jmsite.cn/demo/14.png"/></td>
    </tr>
</table>