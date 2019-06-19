<!--<template>-->
<!--  <div id="userLayout" :class="['user-layout-wrapper', device]">-->
<!--    <div class="container">-->
<!--      <div class="top">-->
<!--        <div class="header">-->
<!--          <a href="/">-->
<!--            <img src="~@/assets/logo.svg" class="logo" alt="logo">-->
<!--            <span class="title">Ant Design</span>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div class="desc">-->
<!--          Ant Design 是西湖区最具影响力的 Web 设计规范-->
<!--        </div>-->
<!--      </div>-->

<!--      <route-view></route-view>-->

<!--      <div class="footer">-->
<!--        <div class="links">-->
<!--          <a href="_self">帮助</a>-->
<!--          <a href="_self">隐私</a>-->
<!--          <a href="_self">条款</a>-->
<!--        </div>-->
<!--        <div class="copyright">-->
<!--          Copyright &copy; 2018 白鹭学园技术组出品-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import RouteView from './RouteView'-->
<!--import { mixinDevice } from '@/utils/mixin'-->

<!--export default {-->
<!--  name: 'UserLayout',-->
<!--  components: { RouteView },-->
<!--  mixins: [mixinDevice],-->
<!--  data () {-->
<!--    return {}-->
<!--  },-->
<!--  mounted () {-->
<!--    document.body.classList.add('userLayout')-->
<!--  },-->
<!--  beforeDestroy () {-->
<!--    document.body.classList.remove('userLayout')-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--  #userLayout.user-layout-wrapper {-->
<!--    height: 100%;-->

<!--    &.mobile {-->
<!--      .container {-->
<!--        .main {-->
<!--          max-width: 368px;-->
<!--          width: 98%;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .container {-->
<!--      width: 100%;-->
<!--      min-height: 100%;-->
<!--      background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;-->
<!--      background-size: 100%;-->
<!--      padding: 110px 0 144px;-->
<!--      position: relative;-->

<!--      a {-->
<!--        text-decoration: none;-->
<!--      }-->

<!--      .top {-->
<!--        text-align: center;-->

<!--        .header {-->
<!--          height: 44px;-->
<!--          line-height: 44px;-->

<!--          .badge {-->
<!--            position: absolute;-->
<!--            display: inline-block;-->
<!--            line-height: 1;-->
<!--            vertical-align: middle;-->
<!--            margin-left: -12px;-->
<!--            margin-top: -10px;-->
<!--            opacity: 0.8;-->
<!--          }-->

<!--          .logo {-->
<!--            height: 44px;-->
<!--            vertical-align: top;-->
<!--            margin-right: 16px;-->
<!--            border-style: none;-->
<!--          }-->

<!--          .title {-->
<!--            font-size: 33px;-->
<!--            color: rgba(0, 0, 0, .85);-->
<!--            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;-->
<!--            font-weight: 600;-->
<!--            position: relative;-->
<!--            top: 2px;-->
<!--          }-->
<!--        }-->
<!--        .desc {-->
<!--          font-size: 14px;-->
<!--          color: rgba(0, 0, 0, 0.45);-->
<!--          margin-top: 12px;-->
<!--          margin-bottom: 40px;-->
<!--        }-->
<!--      }-->

<!--      .main {-->
<!--        min-width: 260px;-->
<!--        width: 368px;-->
<!--        margin: 0 auto;-->
<!--      }-->

<!--      .footer {-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        bottom: 0;-->
<!--        padding: 0 16px;-->
<!--        margin: 48px 0 24px;-->
<!--        text-align: center;-->

<!--        .links {-->
<!--          margin-bottom: 8px;-->
<!--          font-size: 14px;-->
<!--          a {-->
<!--            color: rgba(0, 0, 0, 0.45);-->
<!--            transition: all 0.3s;-->
<!--            &:not(:last-child) {-->
<!--              margin-right: 40px;-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--        .copyright {-->
<!--          color: rgba(0, 0, 0, 0.45);-->
<!--          font-size: 14px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->

<!--login2-->
<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div class="container">
      <div class="top">
        <a-row>
          <a-col :span="23" :offset="1">
            <img src="~@/assets/fslogo.png" alt="logo">
            <span class="title">富深新平台规范模板</span>
          </a-col>
        </a-row>
      </div>

      <route-view></route-view>

      <div class="footer">
        <a href="javascript:;">关于我们</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>版权所有：江苏富深协通科技股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术支持：0519-86612998</span>
      </div>
    </div>
  </div>
</template>

<script>
import RouteView from './RouteView'
import { mixinDevice } from '@/utils/mixin'
import ARow from 'ant-design-vue/es/grid/Row'

export default {
  name: 'UserLayout',
  components: { ARow, RouteView },
  mixins: [mixinDevice],
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  #userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      min-width: 1200px;
      width: 100%;
      height: 100%;
      .top {
        height: 128px;
        line-height: 128px;
        width:100%;
        .title {
          font-size: 28px;
          color: rgba(0,0,0,0.85);
          margin-left: 16px;
        }
      }
      a {
        text-decoration: none;
      }

      .main {
        position: relative;
        width: 100%;
        /*height: calc(100% - 128px);*/
        /*background: #ffffff url(~@/assets/login_bg1.png) no-repeat;*/
      }

      .footer {
        /*position: absolute;*/
        width: 100%;
        /*bottom: 0;*/
        /*padding: 0 16px;*/
        margin: 56px 0 128px 0;
        text-align: center;
        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }
  }
</style>

<!--login3-->
<!--<template>-->
<!--  <div id="userLayout" :class="['user-layout-wrapper', device]">-->
<!--    <div class="container">-->
<!--      <div class="top">-->
<!--        <div class="header">-->
<!--          <a href="/">-->
<!--            <img src="~@/assets/fslogo.png" class="logo" alt="logo">-->
<!--          </a>-->
<!--        </div>-->
<!--        <div class="desc">-->
<!--          富深协通新平台规范模板-->
<!--        </div>-->
<!--      </div>-->

<!--      <route-view></route-view>-->

<!--      <div class="footer">-->
<!--        <a href="javascript:;">关于我们</a>&nbsp;&nbsp;&nbsp;&nbsp;-->
<!--        <span>版权所有：江苏富深协通科技股份有限公司&nbsp;&nbsp;&nbsp;&nbsp;技术支持：0519-86612998</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import RouteView from './RouteView'-->
<!--import { mixinDevice } from '@/utils/mixin'-->

<!--export default {-->
<!--  name: 'UserLayout',-->
<!--  components: { RouteView },-->
<!--  mixins: [mixinDevice],-->
<!--  data () {-->
<!--    return {}-->
<!--  },-->
<!--  mounted () {-->
<!--    document.body.classList.add('userLayout')-->
<!--  },-->
<!--  beforeDestroy () {-->
<!--    document.body.classList.remove('userLayout')-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--  #userLayout.user-layout-wrapper {-->
<!--    height: 100%;-->

<!--    &.mobile {-->
<!--      .container {-->
<!--        .main {-->
<!--          max-width: 368px;-->
<!--          width: 98%;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .container {-->
<!--      min-width: 1200px;-->
<!--      width: 100%;-->
<!--      min-height: 100%;-->
<!--      /*background: #f0f2f5 url(~@/assets/login_bg2.png) no-repeat center;*/-->
<!--      background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;-->
<!--      background-size: 100%;-->
<!--      padding: 110px 0 144px;-->
<!--      position: relative;-->

<!--      a {-->
<!--        text-decoration: none;-->
<!--      }-->

<!--      .top {-->
<!--        text-align: center;-->

<!--        .header {-->
<!--          /*height: 44px;*/-->
<!--          /*line-height: 44px;*/-->

<!--          .badge {-->
<!--            position: absolute;-->
<!--            display: inline-block;-->
<!--            line-height: 1;-->
<!--            vertical-align: middle;-->
<!--            margin-left: -12px;-->
<!--            margin-top: -10px;-->
<!--            opacity: 0.8;-->
<!--          }-->

<!--          .logo {-->
<!--            /*height: 44px;*/-->
<!--            vertical-align: top;-->
<!--            margin-right: 16px;-->
<!--            border-style: none;-->
<!--          }-->
<!--        }-->
<!--        .desc {-->
<!--          font-size: 33px;-->
<!--          color: rgba(0, 0, 0, 0.85);-->
<!--          /*font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;*/-->
<!--          /*font-weight: 600;*/-->
<!--          margin-top: 12px;-->
<!--          margin-bottom: 40px;-->
<!--        }-->
<!--      }-->

<!--      .main {-->
<!--        min-width: 260px;-->
<!--        width: 368px;-->
<!--        margin: 0 auto;-->
<!--      }-->

<!--      .footer {-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        bottom: 0;-->
<!--        padding: 0 16px;-->
<!--        margin: 48px 0 24px;-->
<!--        text-align: center;-->

<!--        .links {-->
<!--          margin-bottom: 8px;-->
<!--          font-size: 14px;-->
<!--          a {-->
<!--            color: rgba(0, 0, 0, 0.45);-->
<!--            transition: all 0.3s;-->
<!--            &:not(:last-child) {-->
<!--              margin-right: 40px;-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--        .copyright {-->
<!--          color: rgba(0, 0, 0, 0.45);-->
<!--          font-size: 14px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->
