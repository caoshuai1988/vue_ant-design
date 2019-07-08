<template>
  <div class="main main-login2-single">
    <div class="login-box">
      <a-row>
        <a-col :span="20">
          <div>
            <a-form
              id="formLogin"
              class="user-layout-login"
              ref="formLogin"
              :form="form"
              @submit="handleSubmit"
            >
              <div>
                <div class="form-title">账号密码登录</div>
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
                <a-form-item class="login-operation">
                  <a-checkbox v-decorator="['rememberMe']">记住账号</a-checkbox>
                  <router-link
                    :to="{ name: 'recover'}"
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
                    :loading="state.loginBtn"
                    :disabled="state.loginBtn"
                  >登录</a-button>
                </a-form-item>
                <div class="login-tips" v-if="isError">
                  <span>用户名或密码错误！</span>
                </div>
              </div>
            </a-form>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import AFormItem from 'ant-design-vue/es/form/FormItem'
import $ from 'jquery'
import 'jquery-backstretch'
import imgSrc from '../../../assets/login_bg_mountain.jpg'

export default {
  components: {
    AFormItem
  },
  data () {
    return {
      customActiveKey: 'tab1',
      testBtn: false,
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        testBtn: false,
        caLoginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0
      },
      isError: false // 错误提示
    }
  },
  created () {
  },
  mounted () {
    $('.main-login2-single').backstretch(imgSrc)
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    handleTabClick (key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit (e) {
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
      const that = this
      that.isError = true
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    height: calc(100% - 216px);
    position: relative;
    .login-box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      #formLogin.user-layout-login {
        float: right;
        background: #ffffff;
        padding: 32px 32px 0;
        height: 428px;
        border-radius: 4px;
        .ant-form-item {
          margin-bottom: 24px;
        }
        >div {
          width: 335px;
          .form-title {
            font-size: 18px;
            color: rgba(0,0,0,0.85);
            margin-bottom: 24px;
            height: 46px;
            line-height: 46px;
          }
          label {
            font-size: 14px;
          }

          .forge-password {
            font-size: 14px;
          }
          button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
          }
        }
        .login-tips {
          color: #FF1A2E;
          font-size: 14px;
          height: 14px;
          line-height: 14px;
        }
      }
    }
  }
</style>
