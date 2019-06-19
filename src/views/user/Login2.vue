<template>
  <div class="main">
    <img src="@/assets/login_bg1.png"/>
    <div class="login-box">
      <a-form
        id="formLogin2"
        class="user-layout-login2"
        ref="formLogin"
        :form="form"
        @submit="handleSubmit"
      >
        <a-tabs
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
                  {rules: [{ required: true, message: '请输入账号' }], validateTrigger: 'change'}
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
                  {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
                ]"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>
            <a-form-item class="login-drag">
              <drag-verify
                @passcallback= "passcallback"
                :width="drag.width"
                :height="drag.height"
                :text="drag.text"
                :success-text="drag.successText"
                :background="drag.background"
                :progress-bar-bg="drag.progressBarBg"
                :completed-bg="drag.completedBg"
                :handler-bg="drag.handlerBg"
                :text-size="drag.textSize"
                ref="Verify"
              >
              </drag-verify>
            </a-form-item>
            <a-form-item>
              <a-checkbox v-decorator="['rememberMe']">记住账号</a-checkbox>
              <router-link
                :to="{ name: 'recover'}"
                class="forge-password"
                style="float: right;"
              >忘记密码</router-link>
<!--              <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>-->
            </a-form-item>
            <a-form-item>
              <a-button
                size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                :loading="state.loginBtn"
                :disabled="state.loginBtn"
              >登录</a-button>
            </a-form-item>
            <div class="login-tips">
              <span>用户名或密码错误！</span>
            </div>
          </a-tab-pane>
          <a-tab-pane key="tab2" tab="CA密钥登录">
            <div class="ca-uninstall" v-if="!isPassCA">
              <a-form-item><img src="~@/assets/CA.png"></a-form-item>
              <a-form-item>
                <p><span>请插入您的CA密钥后</span></p>
                <p><span>点击下方检测</span></p>
              </a-form-item>
              <a-form-item>
                <a-button
                size="large"
                type="primary"
                class="test-button"
                @click="testCA"
                :loading="state.testBtn"
                :disabled="state.testBtn"
              >检测</a-button></a-form-item>
            </div>
            <div class="ca-install" v-else>
              <a-form-item>
                <p><span>检测通过，请输入登录密码</span></p>
              </a-form-item>
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
              <a-form-item>
                <router-link
                  :to="{ name: 'recover', params: { user: 'aaa'} }"
                  class="forge-password"
                  style="float: right;"
                >忘记密码</router-link>
              </a-form-item>
              <a-form-item>
                <a-button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  class="login-button"
                  :loading="state.caLoginBtn"
                  :disabled="state.caLoginBtn"
                >登录</a-button>
              </a-form-item>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-form>
    </div>
    <two-step-captcha
      v-if="requiredTwoStepCaptcha"
      :visible="stepCaptchaVisible"
      @success="stepCaptchaSuccess"
      @cancel="stepCaptchaCancel"
    ></two-step-captcha>
  </div>
</template>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'
import AFormItem from 'ant-design-vue/es/form/FormItem'
import dragVerify from 'vue-drag-verify'

export default {
  components: {
    AFormItem,
    TwoStepCaptcha,
    dragVerify
  },
  data () {
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
      // 滑块
      drag: {
        // show: true,
        // handlerIcon: 'fa fa-angle-double-right',
        // successIcon: 'fa fa-check',
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
      isPassCA: false
    }
  },
  created () {
    get2step({ })
      .then(res => {
        this.requiredTwoStepCaptcha = res.result.stepCode
      })
      .catch(() => {
        this.requiredTwoStepCaptcha = false
      })
    // this.requiredTwoStepCaptcha = true
  },
  methods: {
  // 滑动完成消失
    passcallback () {
      if (this.$refs.Verify.isPassing) {
        // this.show = false
      }
    },
    // 检测CA密钥
    testCA () {
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
    handleTabClick (key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit (e) {
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
    getCaptcha (e) {
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
    stepCaptchaSuccess () {
      this.loginSuccess()
    },
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false
        this.stepCaptchaVisible = false
      })
    },
    loginSuccess (res) {
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
    requestFailed (err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    img {
      width: 100%;
    }
    .login-box {
      margin: 0 auto;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      #formLogin2.user-layout-login2 {
        background: #ffffff;
        padding: 32px;
        min-height: 481px;
        .login-tabs {
          width: 335px;
          input {
            font-size: 16px;
          }
        }
        .login-tips {
          color: #FF1A2E;
          font-size: 14px;
          height: 14px;
          line-height: 14px;
          margin-bottom: 24px;
        }
        label {
          font-size: 14px;
        }

        .getCaptcha {
          display: block;
          width: 100%;
          height: 40px;
        }

        .forge-password {
          font-size: 14px;
        }
        button.login-button,button.test-button {
          padding: 0 15px;
          font-size: 16px;
          height: 40px;
          width: 100%;
        }
        .ca-uninstall {
          margin-top: 32px;
          text-align: center;
          img {
            width: 80px;
            height: 80px;
          }
          div:nth-of-type(2){
            font-size: 16px;
            color: rgba(0,0,0,0.85);
            margin-bottom: 32px;
            p {
              text-align: center;
              margin-bottom: 0;
              &:last-child {
                margin-top: -10px;
              }
            }
          }
          div:last-child   {
            margin-bottom: 40px;
          }
        }
        .ca-install {
          margin-top: 24px;
          div:first-child {
            font-size: 16px;
            color: rgba(0,0,0,0.85);
            p {
              margin-bottom: 0;
            }
          }
        }
        /*.user-login-other {*/
        /*  text-align: left;*/
        /*  margin-top: 24px;*/
        /*  line-height: 22px;*/
        /*  .item-icon {*/
        /*    font-size: 24px;*/
        /*    color: rgba(0, 0, 0, 0.2);*/
        /*    margin-left: 16px;*/
        /*    vertical-align: middle;*/
        /*    cursor: pointer;*/
        /*    transition: color 0.3s;*/
        /*    &:hover {*/
        /*      color: #1890ff;*/
        /*    }*/
        /*  }*/
        /*  .register {*/
        /*    float: right;*/
        /*  }*/
        /*}*/
      }
    }
  }
</style>
