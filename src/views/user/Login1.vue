<template>
  <div class="main main-login1">
    <div class="login-box">
      <div class="login-box-left">
        <p>
          欢迎来到<img src="@/assets/icon_right.png">
        </p>
        <p class="line"></p>
        <p>富深新平台模板</p>
      </div>
      <a-form
        id="formLogin"
        class="user-layout-login"
        ref="formLogin"
        :form="form"
        @submit="handleSubmit"
      >
        <a-tabs
          :animated="false"
          :activeKey="customActiveKey"
          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
          @change="handleTabClick"
          class="login-tabs"
        >
          <a-tab-pane key="tab1" tab="账号密码登录">
            <a-form-item>
              <a-input
                size="large"
                type="text"
                placeholder="账号"
                v-decorator="[
                  'username',
                  {rules: [{ required: true, message: ' ' }], validateTrigger: 'change'}
                ]"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                size="large"
                type="password"
                autocomplete="false"
                placeholder="密码"
                v-decorator="[
                  'password',
                  {rules: [{ required: true, message: ' ' }], validateTrigger: 'blur'}
                ]"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>
            <a-form-item class="login-drag" v-if="isCheck">
              <drag-verify
                @passcallback="passcallback"
                :width="drag.width"
                :height="drag.height"
                :text="drag.text"
                :success-text="drag.successText"
                success-icon="fa fa-check-circle"
                :background="drag.background"
                :progress-bar-bg="drag.progressBarBg"
                :completed-bg="drag.completedBg"
                :handler-bg="drag.handlerBg"
                handler-icon="fa fa-angle-double-right"
                :text-size="drag.textSize"
                ref="Verify"
              >
              </drag-verify>
            </a-form-item>
            <a-form-item class="login-operation">
              <a-checkbox v-decorator="['rememberMe']">记住账号</a-checkbox>
              <router-link
                :to="{ name: 'recover'}"
                class="forge-password"
                style="float: right;"
              >忘记密码
              </router-link>
            </a-form-item>
            <a-form-item style="margin-bottom: 12px;">
              <a-button
                size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                :loading="state.loginBtn"
                :disabled="state.loginBtn"
              >登录
              </a-button>
            </a-form-item>
            <div class="login-tips" v-if="isError">
              <span>用户名或密码错误！</span>
            </div>
          </a-tab-pane>
          <a-tab-pane key="tab2" tab="CA密钥登录">
            <div class="ca-uninstall" v-if="!isPassCA">
              <div><img src="~@/assets/CA.png"></div>
              <div>
                <p>请插入您的CA密钥后</p>
                <p>点击下方检测</p>
              </div>
              <a-form-item>
                <a-button
                  size="large"
                  type="primary"
                  class="test-button"
                  @click="testCA"
                  :loading="state.testBtn"
                  :disabled="state.testBtn"
                >检测
                </a-button>
              </a-form-item>
            </div>
            <div class="ca-install" v-else>
              <a-form-item>检测通过，请输入登录密码</a-form-item>
              <a-form-item>
                <a-input
                  size="large"
                  type="password"
                  autocomplete="false"
                  placeholder="密码"
                  v-decorator="[
                    'caPassword',
                    {rules: [{ required: true, message: '请输入登录密码' }], validateTrigger: 'blur'}
                  ]">
                  <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-form-item>
              <a-form-item class="login-operation">
                <router-link
                  :to="{ name: 'recover', params: { user: 'aaa'} }"
                  class="forge-password"
                  style="float: right;"
                >忘记密码
                </router-link>
              </a-form-item>
              <a-form-item>
                <a-button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  class="login-button"
                  :loading="state.caLoginBtn"
                  :disabled="state.caLoginBtn"
                >登录
                </a-button>
              </a-form-item>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-form>
    </div>
  </div>
</template>

<script>
  import md5 from 'md5'
  import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
  import { mapActions } from 'vuex'
  import { timeFix } from '@/utils/util'
  import { getSmsCaptcha, get2step } from '@/api/login'
  import AFormItem from 'ant-design-vue/es/form/FormItem'
  import 'font-awesome/css/font-awesome.min.css'
  import dragVerify from 'vue-drag-verify'
  import ARow from 'ant-design-vue/es/grid/Row'
  import $ from 'jquery'
  import 'jquery-backstretch'
  import imgSrc from '../../assets/login1_bg1.png'

  export default {
    components: {
      ARow,
      AFormItem,
      TwoStepCaptcha,
      dragVerify
    },
    data() {
      return {
        customActiveKey: 'tab1',
        testBtn: false,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        requiredTwoStepCaptcha: false,
        stepCaptchaVisible: false,
        form: this.$form.createForm(this),
        state: {
          time: 60,
          loginBtn: false,
          testBtn: false,
          caLoginBtn: false,
          // login type: 0 email, 1 username, 2 telephone
          loginType: 0,
          smsSendBtn: false
        },
        isCheck: false, // 验证框是否展示
        // 滑块
        drag: {
          // show: true,
          background: 'rgba(0,0,0,0.15)',
          progressBarBg: '#52c41a',
          completedBg: '#52c41a',
          handlerBg: '#fff',
          text: '请按住滑块，拖动到最右边',
          successText: '验证成功',
          width: 335,
          height: 40,
          textSize: '14px',
          circle: false,
          color: 'rgba(0,0,0,0.25)'
        },
        isPassCA: false,
        clickCount: 0,
        isError: false // 错误提示
      }
    },
    created() {
      // debugger
      // eslint-disable-next-line no-unused-expressions
      // this.setBgWidthHeight
      get2step({})
        .then(res => {
          this.requiredTwoStepCaptcha = res.result.stepCode
        })
        .catch(() => {
          this.requiredTwoStepCaptcha = false
        })
      // this.requiredTwoStepCaptcha = true
    },
    mounted() {
      $('.main-login1').backstretch(imgSrc);
    },
    methods: {
      setBgWidthHeight() {
        // debugger
        const obj = document.getElementsByClassName('slick-slide')
        const bgObj = obj.getElementsByTagName('img')
        console.log('bgObj' + bgObj)
      },
      // 滑动完成消失
      passcallback() {
        if (this.$refs.Verify.isPassing) {
          // this.show = false
          this.isError = false
        }
      },
      // 检测CA密钥
      testCA() {
        this.state.testBtn = true
        this.isPassCA = true
      },
      ...mapActions(['Login', 'Logout']),
      // handler
      // handleUsernameOrEmail (rule, value, callback) {
      //   const { state } = this
      //   const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      //   if (regex.test(value)) {
      //     state.loginType = 0
      //   } else {
      //     state.loginType = 1
      //   }
      //   callback()
      // },
      handleTabClick(key) {
        this.customActiveKey = key
        // this.form.resetFields()
      },
      handleSubmit(e) {
        // debugger
        const that = this
        that.isError = false
        e.preventDefault()
        const {
          form: { validateFields },
          state,
          customActiveKey,
          Login
        } = this

        state.loginBtn = true

        const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password'] : ['mobile', 'captcha']

        validateFields(validateFieldsKey, { force: true }, (err, values) => {
          if (!err) {
            console.log('login form', values)
            const loginParams = { ...values }
            delete loginParams.username
            // debugger
            // loginParams[!state.loginType ? 'email' : 'username'] = values.username
            loginParams['username'] = values.username
            loginParams.password = md5(values.password)
            Login(loginParams)
              .then((res) => this.loginSuccess(res))
              .catch(err => this.requestFailed(err))
              .finally(() => {
                state.loginBtn = false
              })
          } else {
            setTimeout(() => {
              state.loginBtn = false
            }, 600)
          }
        })
      },
      getCaptcha(e) {
        e.preventDefault()
        const { form: { validateFields }, state } = this

        validateFields(['mobile'], { force: true }, (err, values) => {
          if (!err) {
            state.smsSendBtn = true

            const interval = window.setInterval(() => {
              if (state.time-- <= 0) {
                state.time = 60
                state.smsSendBtn = false
                window.clearInterval(interval)
              }
            }, 1000)

            const hide = this.$message.loading('验证码发送中..', 0)
            getSmsCaptcha({ mobile: values.mobile }).then(res => {
              setTimeout(hide, 2500)
              this.$notification['success']({
                message: '提示',
                description: '验证码获取成功，您的验证码为：' + res.result.captcha,
                duration: 8
              })
            }).catch(err => {
              setTimeout(hide, 1)
              clearInterval(interval)
              state.time = 60
              state.smsSendBtn = false
              this.requestFailed(err)
            })
          }
        })
      },
      stepCaptchaSuccess() {
        this.loginSuccess()
      },
      stepCaptchaCancel() {
        this.Logout().then(() => {
          this.loginBtn = false
          this.stepCaptchaVisible = false
        })
      },
      loginSuccess(res) {
        console.log(res)
        this.$router.push({ name: 'dashboard' })
        // 延迟 1 秒显示欢迎信息
        setTimeout(() => {
          this.$notification.success({
            message: '欢迎',
            description: `${timeFix()}，欢迎回来`
          })
        }, 1000)
      },
      // eslint-disable-next-line handle-callback-err
      requestFailed(err) {
        const that = this
        that.clickCount++
        if (that.clickCount >= 2) {
          that.isCheck = true
        }
        that.isError = true
        // this.$notification['error']({
        //   message: '错误',
        //   description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        //   duration: 4
        // })
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    height: 100%;
    /*min-height: 450px;*/
    position: relative;
    /*img {*/
    /*  width: 100%;*/
    /*  height: 100%;*/
    /*!*}*!*/
    /*.ant-carousel {*/
    /*  height: 100%;*/
    /*  .slick-slider {*/
    /*    height: 100%;*/
    /*    .slick-list {*/
    /*      height: 100% !important;*/
    /*    }*/
    /*  }*/
    /*}*/
    /*.ant-carousel .slick-dots {*/
    /*  bottom: 24px;*/
    /*}*/
    .login-box {
      width: 840px;
      height: 428px;
      /*border: 1px solid #f00;*/
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &-left {
        float: left;
        width: 440px;
        height: 100%;
        background: url(~@/assets/login1_left_bg1.png) center;
        padding: 170px 0 0 40px;
        font-size: 28px;
        color: #fff;
        p {
          height: 28px;
          line-height: 28px;
          &:first-child {
            margin-bottom: 12px;
          }
          &.line {
            height: 1px;
            line-height: 1px;
            width: 304px;
            background: rgba(255, 255, 255, 0.6);
            margin-bottom: 22px;
          }
          img {
            margin-left: 15px;
            margin-top: -4px;
          }
        }
      }
      #formLogin.user-layout-login {
        float: right;
        width: 400px;
        height: 428px;
        border-radius: 0;
        padding: 32px 32px 0;
        /*float: right;*/
        background: #ffffff;
        .ant-form-item {
          margin-bottom: 24px;
        }
        .login-tabs {
          width: 335px;
          input {
            font-size: 16px;
          }
        }
        .drag_verify .dv_handler i.fa-check-circle {
          color: #52c41a;
          font-size: 1.2em;
        }
        .login-tips {
          color: #FF1A2E;
          font-size: 14px;
          height: 14px;
          line-height: 14px;
        }
        label {
          font-size: 14px;
        }
        .forge-password {
          font-size: 14px;
        }
        button.login-button, button.test-button {
          padding: 0 15px;
          font-size: 16px;
          height: 40px;
          width: 100%;
        }
        .ca-uninstall {
          margin-top: 32px;
          text-align: center;
          div:first-child {
            margin-bottom: 24px;
            img {
              width: 64px;
              height: 64px;
            }
          }
          div:nth-of-type(2) {
            height: 38px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.65);
            margin-bottom: 32px;
            p {
              height: 19px;
              margin-bottom: 0;
            }
          }
          div:last-child {
            margin-bottom: 40px;
          }
        }
        .ca-install {
          margin-top: 24px;
          div:first-child {
            font-size: 16px;
            color: rgba(0, 0, 0, 0.65);
          }
        }
      }
      /*}*/
    }
  }
</style>
