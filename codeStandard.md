# 富深新平台前端代码规范

**团队贡献人员:** 乔洁、

[^代码规范]: 希望大家可以一起贡献一起完善，修改添加的自己在上面加上名字





[TOC]





## 通用规范

1. 文件内容编码均统一采用UTF-8; 

2. 变量命名：

   [^小驼峰式]: 第一个单词以小写字母开始，第二个单词的首字母大写

   ```javascript
   defaultConfig
   ```

   [^大驼峰式]: 每一个单词的首字母都采用大写字母

   ```javascript
   DefaultConfig
   ```

   

3. class命名：小写字母+连字符或全局使用且具有唯一性额外增加的可用小驼峰(特殊情况)；

   ```css
   //常规
   .ant-layout{
       
   }
   //特殊
   .expendGlobalVariable{
       
   }
   ```

   

4. 注释尽量多写并详细，例：方法的作用、发送请求时需要传递的参数等，不要写你的代码都干了什么，而是写你为什么要这么写；

5. 提交前格式化代码。

## HTML或VUE书写规范

1. vue文件中，以css+html+js顺序编写代码；

2. 多使用语义化元素，便于理解，例：header、nav、h1……等；

3. 要确保代码的简洁程度；

4. 重要图片添加alt属性；

   eg:

   ```html
   <img  src="/avatar.png" alt="zhangsan">
   ```

   

5. 表格内重要信息添加title属性

   eg

   ```html
   <td title="案件办理ID"></td>
   ```

   

6. html正确的注释方式

   eg

   ```html
   <!--<div></div>-->
   ```

   

7. 为了方便测试执行自动化脚本进行测试，需在input、button上添加id，格式：例如用户名输入框：login-username,消息推送消息列表模块的搜索按钮：xxts-xxlb-search,这样可以避免编写重复的id.



## CSS、SCSS或LESS书写规范

1. 不要让代码难于重写，让选择器更精确，减少ID、避免使用!important（公共样式除外）；

2. 覆盖样式会使维护和调试更困难，所以要尽量避免，尽量不使用行内样式；

3. 当兼容多个浏览器时，将标准属性写在底部；

4. 使用z-index的值尽量不要超过150（公共样式和提示框模块除外），不允许直接使用（999~9999）之间的大值；

5. “0”值后面不要写单位

   eg

   ```css
   padding:0 20px;
   ```

6. 每个声明应该用分号结束，不要漏写分号；

7. 盒模型应该要相同，不要随意的去修改盒模型；

8. 尽量不要改变元素默认行为，当去处某一块的时候不会影响原本的显示；

9. 不要把可继承的样式重复声明，尽量使用属性缩写，保持代码的简洁性；

10. 能用英文的时候不用数字

    eg

    ```css
    nth-child(odd)；
    ```

    

11. 颜色要用16进制来写，除做透明效果用

    eg

    ```css
    //特殊
    rgba(0,0,0,0.7)；
    //16进制
    color:#ff0000;
    ```

    



## VUE 、模板系统规范

### service 规范

1. 后台接口都在定义在api文件中，变量定义统一用小驼峰(每一个单词的首字母都小写)

eg

```javascript
const api = {
  userInfo: '/user/info' //用户资料
}
```

2. 后台接口按照模块来划分即：一个模块一个js文件 ，每个模块文件要写清楚该模块的需求

eg

```javascript
/**
 * @Title: 列表模块 
 * @Description:在描述里面写清楚有哪些子模块、模块需求、难点、遇到的坑等
 */
```
3. 后台接口定义请求方法 需要写明方法、参数等的作用

eg

```javascript
  /**
     * @Title: 获取消息中心未读消息数量、默认类别为：全部的消息列表数据
     * @Description: 适用于页面顶部显示未读消息数量
     * @Request Method: Get
     * @Request DataType: X-WWW-FORM-URLENCODED
     * @Response Type : JSON
     * @param params Demo: { currentPage: 当前页, 默认值=1, pageSize: 页面显示数量, 默认=10}
     * @param success
     * @param error
     */
 getMessageCenter : (params, success, error) => {
        httpProcess.get(urls.getMessageCenter, params, success, error);
    }
```

### 工具规范

1. filter可以将公共的小部件像一些业务的状态处理、时间、金钱格式化问题等 写成过滤器 在utils/filter.js同样要写清楚需求在哪里使用

eg

```javascript
/**
 * @Title: 转换合同状态
 * @Description:
 *      1、适用于xxx、xxx管理合同界面顶部状态显示.
 * @params value 合同状态值
 * @params userIdentity 用户身份
 */
Vue.filter("convertContractStatusText", function (value, userIdentity) {
    if (value) {
        let result = null;
        if (userIdentity === IDENTITY_TYPE.EMPLOYER) {
            result = CONTRACT_PAGE_STATUS.EMPLOYER.find((item) => item.key === value);
        } else if (userIdentity === IDENTITY_TYPE.CONTRACTOR) {
            result = CONTRACT_PAGE_STATUS.CONTRACTOR.find((item) => item.key === value);
        }
        return result ? result.value : "";
    }
});
```



2. directives  按照项目满足需求程度来定 目前项目里面有一个action,用作权限处理的一个指令，具体写法描述等参考项目 core/directives 如果需要新增特殊指令 一个指令一个js文件
3. utils/util.js 该文件可以写一些处理dom操作的公共方法 具体参考项目 特殊情况免不了操作dom
4. vue插件
5. **utils/globalError.js 具体看该文件描述**
6. 待增加



### 新平台常量数据配置

1. **新增data文件夹 api/data 配置一些新平台的常量数据**
2. 按照项目模块来增加常量配置文件一个模块一个js文件
3. 变量必须全部大写 单词之间下划线分开
4. 需求作用在哪里使用都要写清楚

eg

```javascript
/**
 * @Title:  富深新平台常量数据配置中心.
 * @Description:
 *
 * @Author:     mkk
 * @Version:    v1.0.0
 * @Date:       2019-06-12 15:38
 */

const COOKIE_CONFIG = {
    OSC_ID : "oscid"
};


/**
 * 浏览项目-查询条件-金额范围
 * @type {[null,null,null,null,null,null,null]}
 */
const FIND_WORK_BUDGET = [{label: "不限", max: null, min: null, index: -1}, {label: "1000以下", max: 1000, min: 0, index: 1},
    {label: "1000-3000", max: 3000, min: 1000, index : 2}, {label: "3000-5000", max: 5000, min: 3000, index : 3},
    {label: "5000-10000", max: 10000, min: 5000, index : 4}, {label: "10000-50000", max: 50000, min: 10000, index : 5},
    {label: "50000及以上", max: null, min: 50000, index : 6}];
/**
 * 项目金额范围查询条件
 * @type {number[]}
 */
const FIND_WORK_BUDGET_ARRAY = [0, 1000, 3000, 5000, 10000, 50000, 50001];

/**
 * @Title: 项目案例编辑时的项目周期
 * @Description: 适用于项目案例信息新增、编辑时使用.
 * @type {[null,null,null,null,null,null,null,null]}
 */
const PROJECT_CYCLES = [
    {value: "3-7 天"}, {value: "5-10 天"}, {value: "10-15 天"}, {value: "15-30 天"},
    {value: "1-2 个月"}, {value: "3-6 个月"}, {value: "6-10 个月"}, {value: "1 年及以上"}];


```

### 常用注意事项

1. 所有的Vue单文件名都要首字母大写和现在一致
2. views 下面新建的文件夹使用小驼峰式命名 和现在一致
3. components 下面新建的文件夹都是用大驼峰式命名和现在一致
4. js文件均采用小驼峰式命名
5. 慎用箭头函数（箭头函数绑定了父级作用域的上下文有时和你期待的并不相同）
6. 因业务需要修改模板中样式的，请在global.less中覆盖 不要在Vue单文件中写，需要加上注释
7. 当ant design 满足不了需求且必须实现时，请不要修改该ui库，可以在外部引用拓展在components中
8. 待增加