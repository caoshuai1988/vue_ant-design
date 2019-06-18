<style lang="less" scoped>
@import '../global.less';
.page-header {
  position: relative;
  background: #fff;
  padding: 16px 24px;
  border-bottom: 1px solid #e8e8e8;

  .breadcrumb {
    margin-bottom: 16px;
  }

  .detail {
    display: flex;
    /*margin-bottom: 16px;*/

    .avatar {
      flex: 0 1 72px;
      margin: 0 24px 8px 0;

      & > span {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
      }
    }

    .main {
      width: 100%;
      flex: 0 1 auto;

      .row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .avatar {
          margin-bottom: 16px;
        }
      }

      .title {
        font-size: 16px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        // margin-bottom: 16px;
        // flex: auto;
      }
      .btn-wrap{
        .sign{
          color: #d9d9d9;
          padding: 0 8px;
          font-size: 18px;
        }
        .checking{
          color:#F5222D;
        }
      }
      .logo {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        margin-right: 16px;
      }
      .content,
      .headerContent {
        flex: auto;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 32px;
          }
        }
      }
      .extra {
        flex: 0 1 auto;
        margin-left: 88px;
        min-width: 242px;
        text-align: right;
      }
      .action {
        margin-left: 56px;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: right;
        &:empty {
          display: none;
        }
      }
    }
  }
}

.mobile .page-header {
  .main {
    .row {
      flex-wrap: wrap;

      .avatar {
        flex: 0 1 25%;
        margin: 0 2% 8px 0;
      }

      .content,
      .headerContent {
        flex: 0 1 70%;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 10px;
          }
        }
      }

      .extra {
        flex: 1 1 auto;
        margin-left: 0;
        min-width: 0;
        text-align: right;
      }

      .action {
        margin-left: unset;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: left;
        margin-bottom: 12px;

        &:empty {
          display: none;
        }
      }
    }
  }
}

.detail .main .title{
  margin:0;
}

</style>
<template>
  <div class="page-header">
    <div class="page-header-index-wide">
      <!-- <s-breadcrumb /> -->
      <div class="detail">
        <div class="main" v-if="!$route.meta.hiddenHeaderContent">
          <div class="row">
            <!-- <img v-if="logo" :src="logo" class="logo"/> -->
            <h1 v-if="title" class="title">{{ title }}</h1>
            <div class="btn-wrap" v-if="$route.meta.showbtn">
              <a-button type="primary" style="margin-right: 8px; color:#fff;">保存</a-button>
              <a-button-group style="margin-left: 8px;margin-right: 16px">
                <a-button>提交审批</a-button>
                <a-button>演示提醒</a-button>
                <a-button>删除</a-button>
                <a-button><a-icon type="ellipsis"/></a-button>
              </a-button-group>
              <span class="sign">|</span>
              <a-button style="width: 130px;margin-left:16px;">审批：<span class="checking">待审批</span> <a-icon type="caret-down" /></a-button>
            </div>

            <div class="action">
              <slot name="action"></slot>
            </div>
          </div>
          <div class="row">
            <div v-if="avatar" class="avatar">
              <a-avatar :src="avatar" />
            </div>
            <div v-if="this.$slots.content" class="headerContent">
              <slot name="content"></slot>
            </div>
            <div v-if="this.$slots.extra" class="extra">
              <slot name="extra"></slot>
            </div>
          </div>
          <div>
            <slot name="pageMenu"></slot>
          </div>
          <div>
            <slot name="step"></slot>
          </div>
        </div>
      </div>
      <!-- <div class="page-direction"></div> -->
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'

export default {
  name: 'PageHeader',
  components: {
    's-breadcrumb': Breadcrumb
  },
  props: {
    title: {
      type: [String, Boolean],
      default: true,
      required: false
    },
    logo: {
      type: String,
      default: '',
      required: false
    },
    avatar: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {}
  }
}
</script>
