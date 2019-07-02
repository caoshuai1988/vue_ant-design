<!--弹窗消失隐藏-->
<template>
  <div class="alert">
    <a-drawer
      title="设置"
      :width="640"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
      <template>
        <div style="padding-bottom:80px;">
          <a-card class="card list-set-drawer" style="font-size: 26px" :bordered="false" >

            <layoutForm title="模板" >
              <span class="foldStyle" @click="fold(1)">
                <a-icon type="up" v-if="iconToggle" />
                <a-icon type="down" v-else />
              </span>
              <verticaltoggle>
                <TagModule v-if="foldOne"></TagModule>
              </verticaltoggle>
            </layoutForm>
            <a-divider style="margin-bottom: 32px"/>
            <layoutForm title="列表基础">
              <span class="foldStyle" @click="fold(2)">
                <a-icon type="up" v-if="iconToggleOne" />
                <a-icon type="down" v-else />
              </span>
              <verticaltoggle>
                <SelectList v-if="foldTwo"></SelectList>
              </verticaltoggle>
            </layoutForm>
            <a-divider style="margin-bottom: 32px"/>
            <layoutForm title="列表列">
              <span class="foldStyle" @click="fold(3)">
                <a-icon type="up" v-if="iconTable" />
                <a-icon type="down" v-else />
              </span>
              <verticaltoggle>
                <TableList v-if="foldTable"></TableList>
              </verticaltoggle>
            </layoutForm>
            <a-divider v-show="!foldTable" style="margin-bottom: 32px"/>
            <a-divider v-show="foldTable" style="margin-bottom: 0px;opacity: 0;"/>
            <layoutForm title="默认筛选">
              <span class="foldStyle" @click="fold(4)">
                <a-icon type="up" v-if="iconFour" />
                <a-icon type="down" v-else />
              </span>
              <verticaltoggle>
                <ScreeningTable v-if="dataFour"></ScreeningTable>
              </verticaltoggle>
            </layoutForm>
          </a-card>
        </div>
      </template>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <a-popconfirm placement="topRight" @confirm="confirm" @cancel="cancel" okText="确定" cancelText="取消">
          <template slot="title">
            <p style="margin-top:20px;">
              <span>名称：</span>
              <span style="display:inline-block; margin-left:6px;"><a-input style="width:182px" placeholder=""/></span>
            </p>
          </template>
          <a-button :style="{marginRight: '12px'}">
            保存为模板
          </a-button>
        </a-popconfirm>
        <a-button
          type="primary"
          @click="onClose"
        >
          确定
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import TagModule from './TagModule'
import TableList from './TableList'
import ScreeningTable from './ScreeningTable'
import verticaltoggle from '@/views/newform/verticaltoggle.js'
import layoutForm from '@/views/newform/LayoutForm'
import SelectList from './SelectList'

export default {
  name: 'SetAlert',
  components: {
    TagModule,
    TableList,
    SelectList,
    ScreeningTable,
    verticaltoggle,
    layoutForm
  },
  props: {

  },
  data () {
    return {
      tags: ['默认模板', '自定义模板', '自定义模板2'],
      pageTitle: null,
      description: null,
      linkList: [],
      extraImage: '',
      search: true,
      tabs: {},
      isPageList: false,
      visible: false,
      foldOne: true, // 折叠组件1
      foldTwo: true, // 折叠组件2
      foldTable: false, // 折叠表格
      iconTable: false, // 图标表格
      iconToggle: true, // 图标1
      iconToggleOne: true, // 图标2
      memberLoading: false,
      iconFour: false, // 筛选icon
      dataFour: false // 筛选组件
    }
  },
  computed: {

  },
  mounted () {
    this.tabs = this.directTabs
  },
  updated () {

  },
  methods: {
    // 列表消失隐藏
    fold (flag) {
      if (flag === 1) {
        this.foldOne = !this.foldOne
        this.iconToggle = !this.iconToggle
      } else if (flag === 2) {
        this.foldTwo = !this.foldTwo
        this.iconToggleOne = !this.iconToggleOne
      } else if (flag === 3) {
        this.foldTable = !this.foldTable
        this.iconTable = !this.iconTable
      } else if (flag === 4) {
        this.iconFour = !this.iconFour
        this.dataFour = !this.dataFour
      }
    },
    // 子组件展示弹窗
    toAlert () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    confirm (e) {
      console.log(e)
      this.$message.success('Click on Yes')
      this.visible = false
    },
    cancel (e) {
      console.log(e)
      this.$message.error('Click on No')
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
.ant-drawer-close{
	right:3px !important;
}
.ant-drawer-title{
  font-size:18px !important;
}
.anticon-exclamation-circle{
  display: none !important;
}
.ant-popover-inner-content{
	width:264px !important;
}
.ant-popover-message-title{
	padding-left:0px !important;
}
	// 底部
.footerBox{
  background-color: #fff;
}
// icon
.foldStyle{
    position: absolute;
    top: -34px;
    right: 0;
    font-size: 16px;
    color: #a3a3a3;
    cursor: pointer;
    color:rgba(0, 0, 0, 0.45)
}
</style>
