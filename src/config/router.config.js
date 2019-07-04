// eslint-disable-next-line
import {
  UserLayout,
  UserLayout1,
  UserLayout2,
  UserLayout3,
  RecoverLayout,
  BasicLayout,
  RouteView,
  BlankLayout,
  PageView,
  PageViewFsxt
  // HomeView
} from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/homepage/home',
    children: [
      // 登录页
      {
        path: '/homepage/home',
        name: 'Home',
        component: () => import('@/views/homepage/Home'),
        meta: { title: '首页', keepAlive: true, icon: 'home' }
      },
      // 登陆页
      {
        path: 'user/login',
        name: 'login',
        meta: { title: '登录页', keepAlive: true, icon: 'user' },
        children: [
          // 登录模板2
          {
            path: '/user/login2',
            name: 'login2',
            meta: { title: '三栏版', target: '_blank' },
            children: [
              // 登录模板2-1
              {
                path: '/user/login2/base',
                name: 'login2Base',
                meta: { title: '默认页', target: '_blank' }
              },
              // 动态页
              {
                path: '/user/login2/dynamic',
                name: 'login2Dynamic',
                meta: { title: '动态页', target: '_blank' }
              },
              {
                path: '/user/login2/mountain',
                name: 'login2Mountain',
                meta: { title: '多图版', target: '_blank' }
              },
              // 单登录模式
              {
                path: '/user/login2/single',
                name: 'login2Single',
                meta: { title: '单登录模式', target: '_blank' }
              },
              // 登陆模板2-2
              {
                path: '/user/login2/error',
                name: 'login2Error',
                meta: { title: '错误提示页', target: '_blank' }
              },
              // 登陆模板2-3
              {
                path: '/user/login2/drag',
                name: 'login2Drag',
                meta: { title: '出现验证页', target: '_blank' }
              },
              // 登录模板2-4
              {
                path: '/user/login2/unlocking',
                name: 'login2Unlocking',
                meta: { title: '账号锁定页', target: '_blank' }
              }
            ]
          },
          // 登录模板1
          {
            path: '/user/login1',
            name: 'login1',
            meta: { title: '全屏版', target: '_blank' },
            children: [
              {
                path: '/user/login1/normal',
                name: 'login1Normal',
                meta: { title: '常规版', target: '_blank' }
              },
              {
                path: '/user/login1/dynamic',
                name: 'login1Dynamic',
                meta: { title: '动态版', target: '_blank' }
              },
              {
                path: '/user/login1/mountain',
                name: 'login1Mountain',
                meta: { title: '多图版', target: '_blank' }
              }
            ]
          },

          // 登陆模板3
          {
            path: '/user/login3',
            name: 'login3',
            meta: { title: 'Ant原版', target: '_blank' }
          },
          // 找回密码
          {
            path: '/user/recover',
            name: 'recover',
            meta: { title: '找回密码', target: '_blank' }
          },
          // 自助解锁
          {
            path: '/user/selfUnlocking',
            name: 'selfUnlocking',
            meta: { title: '自助解锁', target: '_blank' }
          }
        ]
      },
      // list
      {
        path: '/list2',
        name: 'list2',
        component: PageView,
        redirect: '/list/table-list',
        meta: { title: '列表页', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/list/table-list-mode/:pageNo([1-9]\\d*)?',
            name: 'TableListMode',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListMode'),
            meta: { title: '常规列表-无分页', keepAlive: true, permission: ['table'], isList: true }
          },
          {
            path: '/list/table-list-modePage/:pageNo([1-9]\\d*)?',
            name: 'TableListModePage',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListModePage'),
            meta: { title: '常规列表-有分页', keepAlive: true, permission: ['table'], isList: true }
          },
          {
            path: '/list/table-list-rollUnder/:pageNo([1-9]\\d*)?',
            name: 'TableListRollUnder',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListRollUnder'),
            meta: { title: '固定列', keepAlive: true, permission: [ 'table' ], isList: true }
          },

          {
            path: '/list/table-list-roll/:pageNo([1-9]\\d*)?',
            name: 'TableListRoll',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListRoll'),
            meta: { title: '固定头和列', keepAlive: true, permission: [ 'table' ], isList: true }
          },
          {
            path: '/list/table-list-tabs/:pageNo([1-9]\\d*)?',
            name: 'TableListTabs',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListTabs'),
            meta: { title: '分页签', keepAlive: true, permission: [ 'table' ] }
          }
        ]
      },
      // new FORM

      // 表单页
      {
        path: '/fsxt',
        redirect: '/fsxt/fsxt-base-form',
        component: PageViewFsxt,
        meta: { title: '表单页', icon: 'form', permission: ['form'] },
        children: [
          {
            path: 'formpages/Popup',
            name: 'Popup',
            component: () => import('@/views/formpages/Popup'),
            meta: { title: '弹窗抽屉', keepAlive: true, permission: ['form'], isForm: true }
          },
          {
            path: '/form/newbaseform',
            name: 'NewBaseForm',
            component: () => import('@/views/formpages/NewBaseForm'),
            meta: { title: '基础表单', keepAlive: true, permission: ['form'], showbtn: true, isForm: true }
          },
          {
            path: '/fsxt/fsxt-base-form',
            name: 'BaseFormPage',
            component: () => import('@/views/form/BasicFormPage'),
            meta: { title: '基础表单2', keepAlive: true, permission: ['form'], showbtn: true, isForm: true }
          },
          {
            path: 'formpages/ThrowRowForm',
            name: 'ThrowRowForm',
            component: () => import('@/views/formpages/ThrowRowForm'),
            meta: { title: '三列表单', keepAlive: true, permission: ['form'], isForm: true }
          },
          {
            path: 'formpages/AdvancedForms',
            name: 'AdvancedForms',
            component: () => import('@/views/formpages/AdvancedForms'),
            meta: { title: '高级表单', keepAlive: true, permission: ['form'], isForm: true }
          },
          {
            path: 'newform/mapForm',
            name: 'mapForm',
            component: () => import('@/views/newform/mapForm'),
            meta: { title: '分页签-地图报表附件', keepAlive: true, permission: ['form'], showbtn: true, isForm: true }
          },
          {
            path: '/fsxt/fsxt-advanced-form',
            name: 'StepFormPage',
            component: () => import('@/views/form/advancedStepForm/index'),
            meta: { title: '高级带分步表单', keepAlive: false, permission: ['form'], showStep: true, isForm: true }
          },
          // 相关联规划
          {
            path: '/fsxt/relevance-form',
            name: 'StepFormPageCopy',
            component: () => import('@/views/form/advancedStepFormCopy/index'),
            meta: { title: '高级带分步表单2', keepAlive: false, permission: ['form'], showRelevance: true }
          }
        ]
      },
      // 查看审批页
      {
        path: '/check',
        redirect: '/check/three-row',
        component: PageViewFsxt,
        meta: { title: '查看审批页', icon: 'file', permission: ['form'] },
        children: [
          {
            path: 'check/alert',
            name: 'alert',
            component: () => import('@/views/check/alert'),
            meta: { title: '弹窗', showbtn: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/single-row',
            name: 'singleRow',
            component: () => import('@/views/check/singleRow'),
            meta: { title: '单列详情页', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          // 附件
          {
            path: '/check/accessory',
            name: 'accessory',
            component: () => import('@/views/check/accessory'),
            meta: { title: '附件详情页', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/three-row',
            name: 'threeRow',
            component: () => import('@/views/check/threeRow'),
            meta: { title: '三列详情页', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/page-sign',
            name: 'pageSign',
            component: () => import('@/views/check/pageSign'),
            meta: { title: '分页签详情页', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/flow-head',
            name: 'flowHead',
            component: () => import('@/views/formpages/Flowchart'),
            meta: { title: '全业务流程图', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          }

        ]
      },
      // Modal
      {
        path: '/modal',
        name: 'modal',
        redirect: '/modal/inputModal',
        component: RouteView,
        meta: { title: '公用模块', keepAlive: true, icon: 'fund' },
        children: [
          {
            path: '/modal/inputModal',
            name: 'inputModal',
            component: () => import('@/views/modal/InputModal'),
            meta: { title: '输入弹窗', keepAlive: false }
          },
          {
            path: '/modal/confirmModal',
            name: 'confirmModal',
            component: () => import('@/views/modal/ConfirmModal'),
            meta: { title: '提示弹窗', keepAlive: false }
          },
          {
            path: '/modal/promptModal',
            name: 'promptModal',
            component: () => import('@/views/modal/PromptModal'),
            meta: { title: '提示信息', keepAlive: false }
          },
          {
            path: '/modal/notiification',
            name: 'notiification',
            component: () => import('@/views/modal/Notiification'),
            meta: { title: '通知信息', keepAlive: false }
          },
          {
            path: '/modal/spin',
            name: 'spin',
            component: () => import('@/views/modal/Spin'),
            meta: { title: '加载组件', keepAlive: false }
          },
          {
            path: 'https://viserjs.github.io/demoHome.html',
            name: 'viser',
            meta: { title: '图表库-Viser', target: '_blank' }
          },
          {
            path: 'https://vue.ant.design/components/icon-cn/',
            name: 'IconDesign',
            meta: { title: '图标库-内置', target: '_blank' }
          },
          {
            path: 'https://www.iconfont.cn/',
            name: 'IconFont',
            meta: { title: '图标库-阿里巴巴', target: '_blank' }
          }
        ]
      },
      // HelpDocument
      {
        path: '/help',
        name: 'help',
        meta: { title: '帮助', icon: 'user' },
        children: [{
          path: '/help/helpdoc',
          redirect: '/help/helpdoc',
          meta: { title: '首页', keepAlive: false, target: '_blank' }
        }, {
          path: '/help/helpsearch',
          redirect: 'help/helpsearch',
          meta: { title: '搜索页', keepAlive: false, target: '_blank' }
        }, {
          path: '/help/helpinfo',
          redirect: 'help/helpinfo',
          meta: { title: '最终页', keepAlive: false, target: '_blank' }
        }]
      },
      {
        path: '/gap',
        name: 'gap',
        redirect: '/',
        meta: { title: '---分割线---', icon: 'bulb' }
      },

      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: '分析页', keepAlive: false, permission: ['dashboard'] }
          },
          // 外部链接
          {
            path: 'https://www.baidu.com/',
            name: 'Monitor',
            meta: { title: '监控页（外部）', target: '_blank' }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: '工作台', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },

      // forms
      {
        path: '/form',
        redirect: '/form/base-form',
        component: PageView,
        meta: { title: '表单页', icon: 'form', permission: ['form'] },
        children: [
          {
            path: '/form/base-form',
            name: 'BaseForm',
            component: () => import('@/views/form/BasicForm'),
            meta: { title: '基础表单', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/form/step-form',
            name: 'StepForm',
            component: () => import('@/views/form/stepForm/StepForm'),
            meta: { title: '分步表单', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/form/advanced-form',
            name: 'AdvanceForm',
            component: () => import('@/views/form/advancedForm/AdvancedForm'),
            meta: { title: '高级表单', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // list
      {
        path: '/list',
        name: 'list2',
        component: PageView,
        redirect: '/list/table-list',
        meta: { title: '列表页', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/list/table-list/:pageNo([1-9]\\d*)?',
            name: 'TableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '查询表格', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/list/basic-list',
            name: 'BasicList',
            component: () => import('@/views/list/StandardList'),
            meta: { title: '标准列表', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/list/card',
            name: 'CardList',
            component: () => import('@/views/list/CardList'),
            meta: { title: '卡片列表', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/list/search',
            name: 'SearchList',
            component: () => import('@/views/list/search/SearchLayout'),
            redirect: '/list/search/article',
            meta: { title: '搜索列表', keepAlive: true, permission: ['table'] },
            children: [
              {
                path: '/list/search/article',
                name: 'SearchArticles',
                component: () => import('../views/list/search/Article'),
                meta: { title: '搜索列表（文章）', permission: ['table'] }
              },
              {
                path: '/list/search/project',
                name: 'SearchProjects',
                component: () => import('../views/list/search/Projects'),
                meta: { title: '搜索列表（项目）', permission: ['table'] }
              },
              {
                path: '/list/search/application',
                name: 'SearchApplications',
                component: () => import('../views/list/search/Applications'),
                meta: { title: '搜索列表（应用）', permission: ['table'] }
              }
            ]
          }
        ]
      },

      // profile
      {
        path: '/profile',
        name: 'profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: { title: '详情页', icon: 'profile', permission: ['profile'] },
        children: [
          {
            path: '/profile/basic',
            name: 'ProfileBasic',
            component: () => import('@/views/profile/basic/Index'),
            meta: { title: '基础详情页', permission: ['profile'] }
          },
          {
            path: '/profile/advanced',
            name: 'ProfileAdvanced',
            component: () => import('@/views/profile/advanced/Advanced'),
            meta: { title: '高级详情页', permission: ['profile'] }
          }
        ]
      },

      // result
      {
        path: '/result',
        name: 'result',
        component: PageView,
        redirect: '/result/success',
        meta: { title: '结果页', icon: 'check-circle-o', permission: ['result'] },
        children: [
          {
            path: '/result/success',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
            meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/result/fail',
            name: 'ResultFail',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
            meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: ['exception'] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: ['exception'] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: ['exception'] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: ['exception'] }
          }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center/Index'),
            meta: { title: '个人中心', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: ['user'] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: ['user'] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: ['user'] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: ['user'] }
              }
            ]
          }
        ]
      },
      // other
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: ['dashboard'] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: ['support'] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },
  {
    path: '/user',
    component: UserLayout1,
    redirect: '/user/login1',
    hidden: true,
    children: [
      {
        path: 'login1/normal',
        name: 'login1Normal',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1')
      },
      {
        path: 'login1/dynamic',
        name: 'login1Dynamic',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-dynamic')
      },
      {
        path: 'login1/mountain',
        name: 'login1Mountain',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-mountain')
      },
      {
        path: 'login1/city',
        name: 'login1City',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-city')
      },
      {
        path: 'login1/sea',
        name: 'login1Sea',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-sea')
      },
      {
        path: 'login1/buildings',
        name: 'login1Buildings',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-buildings')
      },
      {
        path: 'login1/field',
        name: 'login1Field',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-field')
      },
      {
        path: 'login1/sky',
        name: 'login1Sky',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-sky')
      },
      {
        path: 'login1/forest',
        name: 'login1Forest',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login1/Login1-forest')
      }
    ]
  },
  {
    path: '/user',
    component: UserLayout2,
    redirect: '/user/login2',
    hidden: true,
    children: [
      {
        path: 'login2/base',
        name: 'login2Base',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-base')
      },
      {
        path: 'login2/dynamic',
        name: 'login2Dynamic',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-dynamic')
      },
      {
        path: 'login2/mountain',
        name: 'login2Mountain',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-mountain')
      },
      {
        path: 'login2/buildings',
        name: 'login2Buildings',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-buildings')
      },
      {
        path: 'login2/city',
        name: 'login2City',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-city')
      },
      {
        path: 'login2/field',
        name: 'login2Field',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-field')
      },
      {
        path: 'login2/forest',
        name: 'login2Forest',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-forest')
      },
      {
        path: 'login2/sea',
        name: 'login2Sea',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-sea')
      },
      {
        path: 'login2/sky',
        name: 'login2Sky',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-sky')
      },
      {
        path: 'login2/single',
        name: 'login2Single',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-single')
      },
      {
        path: 'login2/error',
        name: 'login2Error',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-error')
      },
      {
        path: 'login2/drag',
        name: 'login2Drag',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-drag')
      },
      {
        path: 'login2/unlocking',
        name: 'login2Unlocking',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2/Login2-unlocking')
      }
    ]
  },
  {
    path: '/user',
    component: UserLayout3,
    redirect: '/user/login3',
    hidden: true,
    children: [
      {
        path: 'login3',
        name: 'login3',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login3')
      }
    ]
  },
  {
    path: '/user',
    component: RecoverLayout,
    redirect: '/user/recover',
    hidden: true,
    children: [
      {
        path: 'recover',
        name: 'recover',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Recover')
      }
    ]
  },
  {
    path: '/user',
    component: RecoverLayout,
    redirect: '/user/selfUnlocking',
    hidden: true,
    children: [
      {
        path: 'selfUnlocking',
        name: 'selfUnlocking',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/SelfUnlocking')
      }
    ]
  },
  {
    path: '/Preview',
    name: 'Preview',
    component: () => import('@/views/formpages/Preview')
  },
  { // 地图
    path: '/maplook',
    name: 'maplook',
    component: () => import('@/views/check/mapLook')
  },
  { // 报表
    path: '/tablelook',
    name: 'tablelook',
    component: () => import('@/views/check/tableLook')
  },
  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },
  {
    path: '/help/helpdoc',
    name: 'helpDoc',
    component: () => import('@/views/help/HelpDocument'),
    meta: { title: '帮助文档', keepAlive: false, target: '_blank' },
    redirect: '/help/children/first',
    hideChildrenInMenu: true,
    children: [
      {
        path: '/help/children/first',
        name: 'FirstChildren',
        component: () => import('@/views/help/children/FirstChildren'),
        meta: { title: '帮助文档-A级节点', hidden: true }
      },
      {
        path: '/help/children/last',
        name: 'LastChildren',
        component: () => import('@/views/help/children/LastChildren'),
        meta: { title: '帮助文档-B级节点', hidden: true }
      }
    ]
  },
  {
    path: '/help/helpsearch',
    name: 'helpSearch',
    component: () => import('@/views/help/HelpDocSearch'),
    meta: { title: '帮助搜索', keepAlive: false, target: '_blank' }
    // redirect: '/help/helpsearch'
  },
  {
    path: '/help/helpinfo',
    name: 'heleInfo',
    component: () => import('@/views/help/HelpDocInfo'),
    meta: { title: '帮助详情', keepAlive: false, target: '_blank' }
    // redirect: '/help/helpsearch'
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
