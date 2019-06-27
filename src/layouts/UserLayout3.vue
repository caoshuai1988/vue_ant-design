<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div class="container">
      <div class="top">
        <div class="header">
<!--          <a href="/">-->
            <img src="~@/assets/fslogo.png" class="logo" alt="logo">
<!--          </a>-->
        </div>
        <div class="desc">
          富深协通新平台模板
        </div>
      </div>

      <route-view></route-view>

      <div class="footer">
        <span><a href="" target="_blank">关于我们</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;版权所有：江苏富深协通科技股份有限公司&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;技术支持：0519-86612998</span>
      </div>
    </div>
  </div>
</template>

<script>
import RouteView from './RouteView'
import { mixinDevice } from '@/utils/mixin'

export default {
  name: 'UserLayout3',
  components: { RouteView },
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
      min-height: 100%;
      background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
      background-size: 100%;
      padding: 110px 0 144px;
      position: relative;
      /*overflow-y: hidden;*/
      /*a {*/
      /*  text-decoration: none;*/
      /*}*/

      .top {
        text-align: center;

        .header {
          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            width: 178px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }
        }
        .desc {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }

      .footer {

        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;
        color: rgba(0,0,0,0.45);
        a {
          text-decoration: none;
          color: rgba(0,0,0,0.45);
          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }
</style>
