<template>
  <div id="userLayout1" :class="['user-layout-wrapper', device]">
    <div class="container">
      <div class="top">
<!--        <a-carousel :afterChange="onChange">-->
<!--          <div><img src="@/assets/login_bg1.png"/></div>-->
<!--          <div><img src="@/assets/login_bg2.png"/></div>-->
<!--          <div><img src="@/assets/login_bg1.png"/></div>-->
<!--          <div><img src="@/assets/login_bg2.png"/></div>-->
<!--        </a-carousel>-->
<!--        <a-row>-->
<!--          <a-col :span="23" :offset="1">-->
<!--            <img src="~@/assets/fslogo.png" alt="logo">-->
<!--            <span class="title">富深新平台模板</span>-->
<!--          </a-col>-->
<!--        </a-row>-->
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
  name: 'UserLayout1',
  components: { ARow, RouteView },
  mixins: [mixinDevice],
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  methods: {
    onChange (a, b, c) {
      console.log(a, b, c)
    }
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  #userLayout1.user-layout-wrapper {
    height: 100%;

    /*&.mobile {*/
    /*  .container {*/
    /*    .main {*/
    /*      max-width: 368px;*/
    /*      width: 98%;*/
    /*    }*/
    /*  }*/
    /*}*/

    .container {
      min-width: 1200px;
      width: 100%;
      height: 100%;
      /*.top {*/
      /*  height: 106px;*/
      /*  line-height: 106px;*/
      /*  width:100%;*/
      /*  background: #fff;*/
      /*  .ant-row{*/
      /*    height: 100%;*/
      /*    .ant-col-23 {*/
      /*      height: 100%;*/
      /*      position: relative;*/
      /*      img {*/
      /*        width: 163px;*/
      /*        height: 36px;*/
      /*        position: absolute;*/
      /*        top: 36px;*/
      /*      }*/
      /*      .title {*/
      /*        font-size: 28px;*/
      /*        color: rgba(0,0,0,0.85);*/
      /*        margin-left: 179px;*/
      /*      }*/
      /*    }*/
      /*  }*/
      /*}*/
      .footer {
        width: 100%;
        height: 40px;
        line-height: 40px;
        position: absolute;
        bottom: 24px;
        text-align: center;
        background: rgba(0,0,0,0.12);
        color: rgba(255, 255, 255, 0.7);
        a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }
</style>
