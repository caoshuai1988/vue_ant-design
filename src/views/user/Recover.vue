<template>
  <div class="main">
    <div class="recover-layout">
      <div class="container">
        <h3><span>找回密码</span></h3>
        <a-steps :current="current">
          <a-step title="填写用户名" description="" />
          <a-step title="验证身份" description="" />
          <a-step title="设置新密码" description="" />
          <a-step title="完成" description="" />
        </a-steps>
        <div class="content">
          <a-form ref="formRecover" :form="form" id="formRecover" v-if="current==0">
            <a-form-item
              label="用户名："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 12 }">
              <a-input
                size="large"
                type="text"
                placeholder="用户名/手机号码"
                v-decorator="[
                  'username',
                  {rules: [{ message: '请输入用户名/手机号码' }], validateTrigger: 'change'}
                ]"
              >
              </a-input>
            </a-form-item>
            <a-form-item
              class="imgCaptchaItem"
              label="验证码："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 12 }">
              <a-row :gutter="8">
                <a-col class="gutter-row" :span="16">
                  <a-form-item>
                    <a-input size="large" type="text" placeholder="验证码" v-decorator="['captcha', {rules: [{ message: '请输入验证码' }], validateTrigger: 'blur'}]">
                    </a-input>
                  </a-form-item>
                </a-col>
                <a-col class="gutter-row" :span="8">
                  <div class="code" @click="refreshCode">
                    <s-identify :identifyCode="identifyCode"></s-identify>
                  </div>
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item>
              <a-row>
                <a-col :span="12" :offset="4">
                  <a-button
                    style="width: 100%"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    class="recover-button"
                    :loading="recoverBtn"
                    @click.stop.prevent="nextStep"
                    :disabled="recoverBtn">下一步
                  </a-button>
                </a-col>
              </a-row>
              <!--        <router-link class="login" :to="{ name: 'login' }">使用已有账户登录</router-link>-->
            </a-form-item>

          </a-form>
          <a-form v-if="current==1">
            <a-form-item class="phoneItem">本账号绑定的手机号码是：<span>*******7888</span></a-form-item>
            <a-form-item
              class="captchaItem"
              label="短信验证码："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 12 }">
              <a-row :gutter="8">
                <a-col class="gutter-row" :span="16">
                  <a-form-item>
                    <a-input size="large" type="text" placeholder="短信验证码" v-decorator="['captcha', {rules: [{ message: '请输入验证码' }], validateTrigger: 'blur'}]">
                    </a-input>
                  </a-form-item>
                </a-col>
                <a-col class="gutter-row" :span="8">
                  <a-button
                    class="getCaptcha"
                    size="large"
                    :disabled="state.smsSendBtn"
                    @click.stop.prevent="getCaptcha"
                    v-text="!state.smsSendBtn && '发送验证码'||(state.time+'s后重新获取')"></a-button>
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item>
              <a-row>
                <a-col :span="12" :offset="4">
                  <a-button
                    style="width: 100%"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    class="recover-button"
                    :loading="recoverBtn"
                    @click.stop.prevent="nextStep"
                    :disabled="recoverBtn">下一步
                  </a-button>
                  <div class="input-tips">
                    <span>验证码错误，请重试！</span>
                  </div>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
          <a-form v-if="current==2">
            <a-form-item
              label="设置密码："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 12 }">
              <a-input
                size="large"
                type="password"
                @click="handlePasswordInputClick"
                autocomplete="false"
                placeholder="请设置新的密码"
                v-decorator="['password', {rules: [{ required: true, message: '至少4位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"
              ></a-input>
            </a-form-item>
            <a-form-item
              label="确认密码："
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 12 }">
              <a-input
                size="large"
                type="password"
                autocomplete="false"
                placeholder="再次确认密码"
                v-decorator="['password2', {rules: [{ required: true, message: '至少4位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"
              ></a-input>
            </a-form-item>
            <a-form-item>
              <a-row>
                <a-col :span="12" :offset="4">
                  <a-button
                    style="width: 100%"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    class="recover-button"
                    :loading="recoverBtn"
                    @click.stop.prevent="nextStep"
                    :disabled="recoverBtn">提交
                  </a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
          <a-form v-if="current==3">
            <a-form-item class="resetSuccess">
              <a-row>
                <a-col :span="4"></a-col>
                <a-col :span="12">
                  <p><img src="~@/assets/ok.png"></p>
                  <p><span>密码重置成功</span></p>
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item>
              <a-row>
                <a-col :span="12" :offset="4">
                  <a-button
                    style="width: 100%"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    class="recover-button"
                    :loading="recoverBtn"
                    :disabled="recoverBtn">
                    <router-link :to="{ name: 'login' }">立即登录</router-link>
                  </a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinDevice } from '@/utils/mixin.js'
import { getSmsCaptcha } from '@/api/login'
import ARow from 'ant-design-vue/es/grid/Row'
import ACol from 'ant-design-vue/es/grid/Col'
import SIdentify from '../../components/Identify/Identify'

const levelNames = {
  0: '低',
  1: '低',
  2: '中',
  3: '强'
}
const levelClass = {
  0: 'error',
  1: 'error',
  2: 'warning',
  3: 'success'
}
const levelColor = {
  0: '#ff0000',
  1: '#ff0000',
  2: '#ff7e05',
  3: '#52c41a'
}
export default {
  name: 'Recover',
  components: {
    ACol,
    ARow,
    SIdentify
  },
  mixins: [mixinDevice],
  data () {
    return {
      form: this.$form.createForm(this),
      current: 0,
      state: {
        time: 60,
        smsSendBtn: false,
        passwordLevel: 0,
        passwordLevelChecked: false,
        percent: 10,
        progressColor: '#FF0000'
      },
      recoverBtn: false,
      identifyCodes: '1234567890',
      identifyCode: ''
    }
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  activated () {
    this.current = 0
  },
  computed: {
    passwordLevelClass () {
      return levelClass[this.state.passwordLevel]
    },
    passwordLevelName () {
      return levelNames[this.state.passwordLevel]
    },
    passwordLevelColor () {
      return levelColor[this.state.passwordLevel]
    }
  },
  methods: {
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        // eslint-disable-next-line standard/computed-property-even-spacing
        this.identifyCode += this.identifyCodes [
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
    handlePasswordLevel (rule, value, callback) {
      let level = 0

      // 判断这个字符串中有没有数字
      if (/[0-9]/.test(value)) {
        level++
      }
      // 判断字符串中有没有字母
      if (/[a-zA-Z]/.test(value)) {
        level++
      }
      // 判断字符串中有没有特殊符号
      if (/[^0-9a-zA-Z_]/.test(value)) {
        level++
      }
      this.state.passwordLevel = level
      this.state.percent = level * 30
      if (level >= 2) {
        if (level >= 3) {
          this.state.percent = 100
        }
        callback()
      } else {
        if (level === 0) {
          this.state.percent = 10
        }
        callback(new Error('密码强度不够'))
      }
    },

    handlePasswordCheck (rule, value, callback) {
      const password = this.form.getFieldValue('password')
      console.log('value', value)
      if (value === undefined) {
        callback(new Error('请输入密码'))
      }
      if (value && password && value.trim() !== password.trim()) {
        callback(new Error('两次密码不一致'))
      }
      callback()
    },

    handlePhoneCheck (rule, value, callback) {
      console.log('handlePhoneCheck, rule:', rule)
      console.log('handlePhoneCheck, value', value)
      console.log('handlePhoneCheck, callback', callback)

      callback()
    },

    handlePasswordInputClick () {
      if (!this.isMobile()) {
        this.state.passwordLevelChecked = true
        return
      }
      this.state.passwordLevelChecked = false
    },

    handleSubmit () {
      const { form: { validateFields }, $router } = this
      validateFields({ force: true }, (err, values) => {
        if (!err) {
          $router.push({ name: 'recoverResult', params: { ...values } })
        }
      })
    },
    // 下一步
    nextStep () {
      if (this.current < 3) {
        this.current += 1
      }
    },
    getCaptcha (e) {
      e.preventDefault()
      // const { form: { validateFields }, state, $message, $notification } = this
      const { form: { validateFields }, state, $message } = this
      validateFields(['mobile'], { force: true },
        (err, values) => {
          if (!err) {
            state.smsSendBtn = true

            const interval = window.setInterval(() => {
              if (state.time-- <= 0) {
                state.time = 60
                state.smsSendBtn = false
                window.clearInterval(interval)
              }
            }, 1000)

            const hide = $message.loading('验证码发送中..', 0)

            getSmsCaptcha({ mobile: values.mobile }).then(res => {
              setTimeout(hide, 2500)
              // $notification['success']({
              //   message: '提示',
              //   description: '验证码获取成功，您的验证码为：' + res.result.captcha,
              //   duration: 8
              // })
            }).catch(err => {
              setTimeout(hide, 1)
              clearInterval(interval)
              state.time = 60
              state.smsSendBtn = false
              this.requestFailed(err)
            })
          }
        }
      )
    },
    requestFailed (err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
      this.recoverBtn = false
    }
  },
  watch: {
    'state.passwordLevel' (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less">
  .user-register {

    &.error {
      color: #ff0000;
    }

    &.warning {
      color: #ff7e05;
    }

    &.success {
      color: #52c41a;
    }

  }

  .recover-layout {
    .ant-input-group-addon:first-child {
      background-color: #fff;
    }
  }
</style>
<style lang="less" scoped>
  .main{
    .recover-layout {
      background: rgba(240, 242, 245, 1) !important;
      height: 489px;
      padding-top: 24px;
      /*.ant-row {*/
        .container {
          margin: 0 20%;
          width: 60%;
          height: 100%;
          padding-top: 48px;
          background: #fff;
          >h3 {
            text-align: center;
            margin-bottom: 48px;
            font-size: 32px;
            height: 32px;
            line-height: 32px;
          }
          .ant-steps {
            max-width: 600px;
            margin: 0 auto;
          }
          .content {
            max-width: 500px;
            margin: 0 auto;
            .ant-form {
              margin: 64px auto;
              .ant-form-item {
                margin-bottom: 24px;
              }
              .phoneItem {
                height: 40px;
                text-align: center;
                color: rgba(0, 0, 0, 0.85);
                .ant-form-item-control {
                  line-height: 40px;
                }
              }
              .imgCaptchaItem {
                .ant-col-16 {
                  width: 225px;
                  margin-right: 8px;
                  height: 40px;
                }
                .ant-col-8 {
                  width: 102px;
                  height: 40px;
                  .code {
                    height: 100%;
                    .s-canvas {
                      height: 100%;
                    }
                  }
                }
              }
              .captchaItem {
                .ant-row.ant-form-item {
                  margin-bottom: 0;
                }
                .ant-col-16 {
                  width: 225px;
                  margin-right: 8px;
                  height: 40px;
                }
                .ant-col-8 {
                  width: 102px;
                  height: 40px;
                }
              }
              .resetSuccess {
                text-align: center;
                margin-bottom: 32px;
                p:first-child {
                  margin-bottom: 24px;
                  img {
                    width: 56px;
                    height: 56px;
                  }
                }
                p:nth-of-type(2) {
                  margin-bottom: 0;
                  line-height: 16px;
                  height: 16px;
                }
              }
            }
            a {
              text-decoration: none;
            }
            .input-tips {
              margin-top: 12px;
              color: #FF1A2E;
              font-size: 14px;
              height: 14px;
              line-height: 14px;
            }
          }
        }
      /*}*/
      .getCaptcha {
        padding: 0;
        font-size: 14px;
        display: block;
        width: 100%;
        height: 40px;
      }

      .recover-button {
        width: 50%;
      }

      .login {
        float: right;
        line-height: 40px;
      }
    }
  }
</style>
