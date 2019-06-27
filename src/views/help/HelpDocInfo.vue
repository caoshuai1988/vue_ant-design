<template>
  <div class="help-container" :style="{zoom:curZoom}">
    <div class="help-con-head">
      <div class="help-head-content">
        <div class="head-caption">
          <span>富深新平台模板</span>
          <span>帮助</span>
        </div>
        <div class="head-search">
          <a-input-search
            placeholder="请输入"
            style="width: 272px"
          />
        </div>
        <div class="head-contact">
          <div>
            <img src="~@/assets/telephone.svg" class="logo" alt="联系电话">
          </div>
          <div class="contact-info">
            <div class="contact-info-phone">400-800-1234</div>
            <div class="contact-info-date">周一至周五8:00至18:00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header-index-wide">
      <a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">
        <div class="account-settings-info-main" :class="device">
          <div class="account-help-right">
            <div class="account-help-breadcrumb">
              <a-breadcrumb>
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">帮助</a></a-breadcrumb-item>
                <a-breadcrumb-item><a href="">帮助文档</a></a-breadcrumb-item>
                <a-breadcrumb-item>帮助信息</a-breadcrumb-item>
              </a-breadcrumb>
            </div>
            <div class="account-help-content">
              <p class="account-title">帮用名称帮助名称</p>
              <p class="account-time"><img style="width:14px;height:14px;display: inline-block;margin-top:-3px;margin-right:8px;" :src="time" />创建时间：2019-9-9 09:00</p>
              <p class="account-hr"></p>
              <div class="account-body">
                <div class="account-publictitle">
                  <p class="account-publicone">1. 段落和列表</p>
                  <p class="account-p">这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明，这里是文字说明 这里是文字说明。这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明， 这里是文字说明这里是文字说明。</p>
                </div>
                <div class="account-list">
                  <p class="account-publicthree">1.1 有序列表</p>
                  <div class="account-li">
                    <ol>
                      <li>段落和列表示列</li>
                      <li>图片示例</li>
                      <li>表格示例</li>
                      <li>代码块示例</li>
                    </ol>
                  </div>
                  <p class="account-publicthree">1.2 无序列表</p>
                  <div class="account-li">
                    <ul>
                      <li>段落和列表示列</li>
                      <li>图片示例</li>
                      <li>表格示例</li>
                      <li>代码块示例</li>
                    </ul>
                  </div>
                </div>
                <div class="account-publictitle">
                  <p class="account-publicone">2. 图片示例</p>
                  <p class="account-p">这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明，这里是文字说明 这里是文字说明。这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明， 这里是文字说明这里是文字说明。</p>
                </div>
                <div>
                  <img style="width:700px;margin-bottom: 24px;" :src="banner" />
                </div>
                <div class="account-publictitle">
                  <p class="account-publicone">3. 表格示例</p>
                  <p class="account-p">这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明，这里是文字说明 这里是文字说明。这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明这里是文字说明， 这里是文字说明这里是文字说明。</p>
                </div>
                <div style="width:700px;margin-bottom: 1em;">
                  <template>
                    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 300 }">
                      <a slot="action" href="javascript:;">action</a>
                    </a-table>
                  </template>
                </div>
              </div>
              <p class="account-hr" style="margin:64px auto 24px "></p>

              <div class="account-footer">
                <p class="account-key">
                  <span class="span_t">关键字：数据，系统，后台管理，自定义，大全景</span>
                  <span class="span_b">关联模块：模块1-模块名称-列表,表单,关联模块：模块1-模块名称-列</span>
                </P>
                <div class="account-foot">
                  <p class="foot-title">你认为本篇文章有用吗</p>
                  <div>
                    <ul style="overflow:hidden;padding-left:0px">
                      <li style="float: left;">
                        <span id="span-left" :class="{toActive : 1 == this.up}" @click="toUp(1)" ref="content" @mouseover="selectStyle () "  @mouseout="outStyle()">
                        <a-icon type="like" />
                        </span>
                        <p>88个赞</p>
                      </li>
                      <li style="float:right">
                        <span id="span-right" :class="{toActive : 2 == this.under}" @click="toUnder(2)" ref="contentUn" @mouseover="selectStyleUn () "  @mouseout="outStyleUn()">
                        <a-icon type="dislike" />
                        </span>
                        <p>25个踩</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-card>
      <!-- layout footer -->
      <a-layout-footer>
        <global-footer />
      </a-layout-footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { PageView, RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
import GlobalFooter from '@/components/GlobalFooter'

import banner from '@/assets/login_bg1.png'
import time from '@/assets/time.png'
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}
export default {
  components: {
    RouteView,
    PageView,
    GlobalFooter
  },
  mixins: [mixinDevice],
  data () {
    return {
      // horizontal  inline
      mode: 'inline',
      openKeys: [],
      selectedKeys: [],
      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },
      up: '',
      under: '',
      data,
      columns,
      pageTitle: '',
      defaultChecked: 'true',
      contentText: '<div id="u6" class="ax_default heading_1">' +
        '<div id="u6_div" class=""></div>' +
        '<div id="u6_text" class="text ">' +
          '<p><span>帮用名称帮助名称帮助名称</span></p>' +
        '</div>' +
      '</div>',
      conText: '<div id="u6" class="ax_default heading_1" style="font-family: MicrosoftYaHei, &quot;Microsoft YaHei&quot;; font-size: 40px; color: rgba(0, 0, 0, 0.847); line-height: 48px; border-width: 0px; position: absolute; left: 164px; top: 167px; width: 481px; height: 48px; background-color: rgb(240, 242, 245);"><div id="u6_text" class="text " style="border-width: 0px; position: absolute; left: 0px; top: 0px; width: 481px; white-space: nowrap;"><p style="margin-top: 0px; margin-bottom: 0px; text-rendering: optimizelegibility; font-feature-settings: &quot;kern&quot;; font-kerning: normal;">帮用名称帮助名称帮助名称</p></div></div><div id="u7" class="ax_default line" style="font-family: MicrosoftTaiLe, &quot;Microsoft Tai Le&quot;; font-size: 13px; text-align: center; line-height: normal; border-width: 0px; position: absolute; left: 131px; top: 272px; width: 941px; height: 1px; background-color: rgb(240, 242, 245);"><img id="u7_img" class="img " src="http://127.0.0.1:32767/08.57.31/images/%E5%B8%AE%E5%8A%A9%E6%9C%80%E7%BB%88%E9%A1%B5/u7.png" style="position: absolute; left: 0px; top: 0px; width: 942px; height: 2px;"></div><div id="u8" class="ax_default heading_1" style="font-family: MicrosoftYaHei, &quot;Microsoft YaHei&quot;; color: rgba(0, 0, 0, 0.447); line-height: 24px; border-width: 0px; position: absolute; left: 166px; top: 296px; width: 640px; height: 24px; background-color: rgb(240, 242, 245);"><div id="u8_div" class="" style="position: absolute; left: 0px; top: 0px; width: 640px; height: 24px; background-image: inherit; background-position: inherit; background-size: inherit; background-repeat: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: rgba(255, 255, 255, 0); border-width: 0px 0px 0px 3px; border-left-style: ...'
    }
  },
  computed: {
    banner () { // 引入流程图片
      return banner
    },
    curZoom () {
      return Vue.ls.get('DEFAULT_CONTAINER_ZOOM') ? Vue.ls.get('DEFAULT_CONTAINER_ZOOM') : 1
    },
    time () {
      return time
    }
  },
  created () {
    this.updateMenu()
  },
  methods: {
    onOpenChange (openKeys) {
      this.openKeys = openKeys
    },
    updateMenu () {
      const routes = this.$route.matched.concat()
      this.selectedKeys = [ routes.pop().path ]
    },
    toUp (num) {
      if (this.under === 2) {
   		    return
      }
      this.up = 1;
      this.$refs.content.style.color = 'white';
    }, 
    toUnder (num){
      if (this.up === 1) {
          return 
      }
      this.under = 2;
      this.$refs.contentUn.style.color = 'white';
    },
    //设置颜色
    selectStyle(){
    	if(this.up ===1){
    		this.$refs.content.style.color = 'write';
    	}else{
    		this.$refs.content.style.color = '#0081EE';
    	}
    },
    outStyle(){
    	if(this.up ===1){
    		this.$refs.content.style.color = 'write';
    		
    	}else{
    		this.$refs.content.style.color = 'rgba(0, 0, 0, 0.45)';
    	}	
    },
    selectStyleUn(){
    	if(this.under ===2){
    		this.$refs.contentUn.style.color = 'write';
    	}else{
    		this.$refs.contentUn.style.color = '#0081EE';
    	}
    },
    outStyleUn(){
    	if(this.under ===2){
    		this.$refs.contentUn.style.color = 'write';
    		
    	}else{
    		this.$refs.contentUn.style.color = 'rgba(0, 0, 0, 0.45)';
    	}	
    }
  },
  watch: {
    '$route' (val) {
      this.updateMenu()
    }
  }
}
</script>

<style lang="less" scoped>
 p {
margin-bottom: 0;
 }
.help-container {
  background-color: #EFF3F5;
  .help-con-head{
    height:64px;
    background-color: #004081;
    .help-head-content {
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      .head-caption {
        color: #FFFFFF;
        & span:first-child {
          font-size: 20px;
          padding-right: 8px;
        }
        & span:last-child {
          font-size: 16px;
        }
      }
      .head-contact {
        display: flex;
        align-items: center;
        .contact-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          padding-left: 6px;
          .contact-info-phone{
            font-size: 14px;
            line-height: 20px;
          }
          .contact-info-date{
            font-size: 10px;
            line-height: 14px;
						-webkit-transform: scale(0.9);   //缩放比例
						transform: scale(0.9);
						transform: translate(0px,0px);
          }
        }
      }
    }
  }
  .page-header-index-wide {
    max-width: 1000px;
    margin: 24px auto 0;
     background-color: #fff
  }
}
  .account-settings-info-main {
    width: 100%;
    display: flex;
    height: 100%;
    overflow: auto;
    /deep/ .ant-menu-inline {
     border: 0;
    }
    &.mobile {
      display: block;
      .account-settings-info-left {
        border-right: unset;
        border-bottom: 1px solid #e8e8e8;

        width: 100%;
        height: 50px;
        overflow-x: auto;
        overflow-y: scroll;
      }
      .account-settings-info-right {
        padding: 20px 40px;
      }
    }

    .account-settings-info-left {
      border-right: 1px solid #e8e8e8;
    }

    .account-help-right {
      flex: 1 1;
      padding: 8px 40px 48px;
      .account-help-breadcrumb {
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        padding-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
      }
    .account-help-content {
      .account-title {
        font-size:32px;
        text-align: center;
        line-height:100%;
        margin:32px auto 24px;
        color:rgba(0,0,0,.85);
        font-weight: bold;
      }
      .account-time{
        text-align: center;
        font-size:14px;
        color:rgba(0,0,0,.45);
      }
      .account-hr{
        width:840px;
        height:1px;
        border-bottom: 1px dashed #e8e8e8;
        margin:12px auto 32px;
      }
      .account-body{
        width:714px;
        margin:0 auto;
        .account-publictitle{
          .account-publicone{
            font-size:24px;
            color:rgba(0,0,0,.85);
            line-height: 100%;
            font-weight: bold;
          }
          .account-p{
            font-size:14px;
            color:rgba(0,0,0,.85);
            line-height:20px;
            margin:16px auto 16px;
          }
        }
        .account-list{
          .account-publicthree{
            font-size:16px;
            font-weight: bold;
            color:rgba(0,0,0,.85);
            margin-bottom:16px;
            line-height: 100%;
          }
          .account-li{
            ol{
              padding-left:15px;
              margin-bottom:24px;
              li{
                font-size:14px;
                color:rgba(0,0,0,.85);
              }
            }
            ul{
              padding-left:19px;
              margin-bottom:24px;
              li{
                font-size:14px;
                color:rgba(0,0,0,.85);
              }
            }
          }
        }
      }
      .account-footer{
        width:840px;
        margin:0 auto;
        .account-key{
          font-size:14px;
          color:rgba(0,0,0,.85);
          .span_b{
            margin-top:12px;
            display: block;
          }
        }
        .account-foot{
          width:175px;
          margin-left:265px;
          text-align: center;
          margin:0 auto;
          .foot-title{
            font-size:14px;
            color:rgba(0,0,0,.85);
            margin:64px 0 24px 0;
          }
          ul li{
            list-style: none;
            #span-left{
              width:64px;
              height:64px;
              border-radius: 50%;
              background:white;
              display: block;
              line-height:57px;
              color:rgba(0,0,0,.45);
              font-size:40px;
              margin-bottom:11px;
              cursor: pointer;
              border-color:red;
              border:1px solid rgba(0,0,0,.25);
              &.toActive{
              background:#0081EE;
              color:white;
              border:1px solid #0081EE;
              }
              &:hover {
                border:1px solid #0081EE;
              }  
            }
            #span-right{
              width:64px;
              height:64px;
              border-radius: 50%;
              background:white;
              display: block;
              line-height:64px;
              border:1px solid rgba(0,0,0,.25);
              color:rgba(0,0,0,.45);
              font-size:40px;
              margin-bottom:11px;
              cursor: pointer;
              &.toActive{
              background:#0081EE;
              color:white;
              border:1px solid #0081EE;
            }
            &:hover {
					border:1px solid #0081EE;
				}
          }
            p{
              color:rgba(0,0,0,.65);
            }
          }
        }
      }
    }
    .account-settings-info-view {
      padding-top: 12px;
    }
    /deep/ .ant-pagination ,.ant-table-pagination{
      display: none;
    }
  }
}

</style>
