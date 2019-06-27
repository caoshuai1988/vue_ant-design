<template>
  <div id="recoverLayout" :class="['recover-layout-wrapper', device]">
    <div class="container">
      <div class="top">
        <a-row>
          <a-col :span="23" :offset="1">
            <img src="~@/assets/fslogo.svg" alt="logo">
            <span class="title">富深新平台模板</span>
          </a-col>
        </a-row>
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
import ARow from 'ant-design-vue/es/grid/Row'

export default {
  name: 'RecoverLayout',
  components: { ARow, RouteView },
  mixins: [mixinDevice],
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('recoverLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('recoverLayout')
  }
}
</script>

<style lang="less" scoped>
  #recoverLayout.recover-layout-wrapper {
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
      background: #f0f2f5;
      min-width: 1200px;
      width: 100%;
      height: 100%;
      .top {
        height: 106px;
        line-height: 106px;
        width:100%;
        background: #fff;
        .ant-row{
          height: 100%;
          .ant-col-23 {
            height: 100%;
            position: relative;
            img {
              width: 32px;
              height: 32px;
              position: absolute;
              top: 37px;
            }
            .title {
              font-size: 28px;
              color: rgba(0,0,0,0.85);
              margin-left: 40px;
            }
          }
        }
      }
      .footer {
        width: 100%;
        text-align: center;
        background: rgba(240,242,245,1);
        color: rgba(0,0,0,0.45);
        span {
          display: inline-block;
          margin: 48px 0;
          height: 14px;
          line-height: 14px;
        }
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
