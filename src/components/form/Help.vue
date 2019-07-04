<!--
 * @Author: 张志勇
 * @Date: 2019-07-04 15:16:39
 * @LastEditTime: 2019-07-04 17:01:49
 * @Description: 表单页及查看审批页中公共组件 帮助侧边栏
 -->
<template>
  <div class="page-direction">
    <div class="title">
      <div class="title-des">
        <span class="help">帮助</span>
        <span class="detail">详情</span>
        <a-icon type="close" class="close" @click="handleClose"/>
      </div>
    </div>
    <div class="help-line"></div>
    <div class="content-box" :style="boxHeight">
      <div class="content" style="margin:0">
        <div style="margin-bottom:20px">
          <p class="question">
            为什么选择云服务器ECS？
          </p>
          <p class="answer">
            选择云服务器ECS，您可以轻松构建具有以下优势的计算资源：无需自建机房，无需采购以及配置硬件设施。分钟级交付，快速部署，缩短应用上线周期。
          </p>
        </div>
        <div style="margin-bottom:20px">
          <p class="question">
            企业官网或轻量的Web应用
          </p>
          <p class="answer">
            网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
          </p>
        </div>
        <div style="margin-bottom:20px">
          <p class="question">
            多媒体以及高并发应用或网站
          </p>
          <p class="answer">
            云服务器ECS与对象存储OSS搭配，对象存储OSS承载静态图片、视频或者下载包，进而降低存储费用。同时配合内容分发网络CDN和负载均衡SLB，可大幅减少用户访问等待时间、降低网络带宽费用以及提高可用性
          </p>
        </div>
        <div style="margin-bottom:20px">
          <p class="question">
            高I/O要求数据库
          </p>
          <p class="answer">
            支持承载高I/O要求的数据库，如OLTP类型数据库以及NoSQL类型数据库。您可以使用较高配置的I/O优化型云服务器ECS，同时采用ESSD云盘，可实现高I/O并发响应和更高的数据可靠性。您也可以使用多台中等偏下配置的I/O优化型ECS实例，搭配负载均衡SLB，建设高可用底层架构
          </p>
        </div>
        <div style="margin-bottom:20px">
          <p class="question">
            访问量波动剧烈的应用或网站
          </p>
          <p class="answer">
            某些应用，如抢红包应用、优惠券发放应用、电商网站和票务网站，访问量可能会在短时间内产生巨大的波动。您可以配合使用弹性伸缩，自动化实现在请求高峰来临前增加ECS实例，并在进入请求低谷时减少ECS实例。满足访问量达到峰值时对资源的要求，同时降低了成本。如果搭配负载均衡SLB，您还可以实现高可用应用架构
          </p>
        </div>
        <div style="margin-bottom:20px">
          <p class="question">
            大数据及实时在线或离线分析
          </p>
          <p class="answer">
            云服务器ECS提供了大数据类型实例规格族，支持Hadoop分布式计算、日志处理和大型数据仓库等业务场景。由于大数据类型实例规格采用了本地存储的架构，云服务器ECS在保证海量存储空间、高存储性能的前提下，可以为云端的Hadoop集群、Spark集群提供更高的网络性能。
          </p>
        </div>
        <div style="margin-bottom:20px">
          <p class="question">
            机器学习和深度学习等AI应用
          </p>
          <p class="answer">
            通过采用GPU计算型实例，您可以搭建基于TensorFlow框架等的AI应用。此外，GPU计算型还可以降低客户端的计算能力要求，适用于图形处理、云游戏云端实时渲染、AR/VR的云端实时渲染等瘦终端场景。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxHeight: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.checkResize()
    const evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(evt, this.checkResize)
  },
  methods: {
    checkResize () {
      this.boxHeight.height = document.documentElement.clientHeight - 48 - 65 - 65 + 'px'
      // const top = this.$refs.pageDirection.getBoundingClientRect().top
      // if (top === 0) {
      //   this.boxHeight.height = document.documentElement.clientHeight + 'px'
      // }
    },
    handleClose () {
      this.$emit('handleClose')
    }
  },
  beforeDestroy () {
    const evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'
    window.removeEventListener(evt, this.checkResize)
  }

}
</script>
<style lang="less" scoped>
  // 帮助
  .page-direction{
    background: #fff;
    .title{
      position: relative;
      box-sizing: border-box;
      padding:0 24px;
      height: 56px;
      .title-des{
        box-sizing: border-box;
        height: 56px;
        padding: 16px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .help{
          font-size: 16px;
          color: #272727;
          margin-right: 8px;
        }
        .detail{
          font-size: 14px;
          color: #1890ff;
        }
        .close{
          float: right;
          margin-top: 4px;
          font-size :16px;
          color:#a3a3a3;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .help-line{
      width: 100%;
      height: 0.5px;
      background: #e9e9e9;
    }
    .content-box{
      padding: 0 24px 24px;
      padding-right: 2px;
    }
    .content{
      padding: 24px 24px 0 0;
      background: #fff;
      height:100%;
      overflow-y: auto;
      p{
        margin: 0;
        padding: 0;
      }
      &::-webkit-scrollbar{
        width: 6px;
        height: 8px;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #fff;
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb{
          border-radius: 5px;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
          background-color: #9B9B9B;
      }
    }
  }
</style>
