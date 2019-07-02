<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
    >
      <a-tabs
        :animated="false"
        :activeKey="customActiveKey"
        :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
        @change="handleTabClick"
      >
        <a-tab-pane key="tab1" tab="账号密码登录">
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="账户"
              v-decorator="[
                'username',
                {rules: [{ required: true, message: ' ' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
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
          <a-form-item class="login-operation">
            <a-checkbox v-decorator="['rememberMe']">自动登录</a-checkbox>
            <router-link
              :to="{ name: 'recover' }"
              class="forge-password"
              style="float: right;"
            >忘记密码</router-link>
          </a-form-item>

          <a-form-item style="margin-top:24px">
            <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="login-button"
              :loading="state.loginBtn"
              :disabled="state.loginBtn"
              @click="handleSubmit"
            >确定</a-button>
          </a-form-item>
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
              >检测</a-button>
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
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'

export default {
  components: {},
  data () {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        testBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0
      },
      isPassCA: false
    }
  },
  created () {
  },
  methods: {
    // 检测CA密钥
    testCA () {
      this.state.testBtn = true
      this.isPassCA = true
    },
    ...mapActions(['Login', 'Logout']),
    // handler
    handleUsernameOrEmail (rule, value, callback) {
      const { state } = this
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (regex.test(value)) {
        state.loginType = 0
      } else {
        state.loginType = 1
      }
      callback()
    },
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
          loginParams[!state.loginType ? 'email' : 'username'] = values.username
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
    #formLogin {
      .ant-form-item {
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

      .user-login-other {
        text-align: left;
        margin-top: 24px;
        line-height: 22px;

        .item-icon {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 16px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: #1890ff;
          }
        }
      }
      .ca-uninstall {
        padding-top: 8px;
        text-align: center;
        div:first-child {
          margin-bottom: 24px;
          img {
            width: 64px;
            height: 64px;
          }
        }
        div:nth-of-type(2){
          height: 38px;
          font-size: 16px;
          color: rgba(0,0,0,0.65);
          margin-bottom: 32px;
          p {
            height: 19px;
            margin-bottom: 0;
          }
        }
        div:last-child   {
          margin-bottom: 40px;
        }
      }
      .ca-install {
        div:first-child {
          font-size: 16px;
          color: rgba(0,0,0,0.65);
        }
      }
    }
  }
</style>
