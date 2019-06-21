// eslint-disable-next-line
import { UserLayout, UserLayout2, UserLayout3, BasicLayout, RouteView, BlankLayout, PageView, PageViewFsxt } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: [
      //工作台
      {
        path: '/dashboard/workplace',
        name: 'Workplace',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: '工作台', icon: 'home', keepAlive: true, permission: [ 'dashboard' ] }
      },
      // 登陆页
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '登陆页', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
        children: [
          // 登陆模板2
          {
            path: '/user/login2',
            name: 'login2',
            meta: { title: '登陆模板2', target: '_blank' }
          },
          // 登陆模板3
          {
            path: '/user/login3',
            name: 'login3',
            meta: { title: '登陆模板3', target: '_blank' }
          },
          // 登陆模板4
          {
            path: '/user/login4',
            name: 'login4',
            meta: { title: '登陆模板4', target: '_blank' }
          }

        ]
      },
      // list
      {
        path: '/list',
        name: 'list',
        component: PageView,
        redirect: '/list/table-list',
        meta: { title: '列表页', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/list/table-list-mode/:pageNo([1-9]\\d*)?',
            name: 'TableListMode',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListMode'),
            meta: { title: '列表模型', keepAlive: true, permission: [ 'table' ], isList: true }
          },
          {
            path: '/list/table-list-roll/:pageNo([1-9]\\d*)?',
            name: 'TableListRoll',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListRoll'),
            meta: { title: '上下左右', keepAlive: true, permission: [ 'table' ], isList: true }
          },
          {
            path: '/list/table-list-tabs/:pageNo([1-9]\\d*)?',
            name: 'TableListTabs',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableListTabs'),
            meta: { title: '标签列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/table-list/:pageNo([1-9]\\d*)?',
            name: 'TableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '查询表格', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/basic-list',
            name: 'BasicList',
            component: () => import('@/views/list/StandardList'),
            meta: { title: '标准列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/card',
            name: 'CardList',
            component: () => import('@/views/list/CardList'),
            meta: { title: '卡片列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/search',
            name: 'SearchList',
            component: () => import('@/views/list/search/SearchLayout'),
            redirect: '/list/search/article',
            meta: { title: '搜索列表', keepAlive: true, permission: [ 'table' ] },
            children: [
              {
                path: '/list/search/article',
                name: 'SearchArticles',
                component: () => import('../views/list/search/Article'),
                meta: { title: '搜索列表（文章）', permission: [ 'table' ] }
              },
              {
                path: '/list/search/project',
                name: 'SearchProjects',
                component: () => import('../views/list/search/Projects'),
                meta: { title: '搜索列表（项目）', permission: [ 'table' ] }
              },
              {
                path: '/list/search/application',
                name: 'SearchApplications',
                component: () => import('../views/list/search/Applications'),
                meta: { title: '搜索列表（应用）', permission: [ 'table' ] }
              }
            ]
          }
        ]
      },
      // new FORM
      {
        path: '/newform',
        redirect: '/newform/newbaseform',
        component: PageView,
        meta: { title: '表单页', icon: 'form', permission: [ 'form' ] },
        children: [
          {
            path: '/form/newbaseform',
            name: 'NewBaseForm',
            component: () => import('@/views/newform/newBaseForm'),
            meta: { title: '基础表单', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: 'newform/indexa',
            name: 'indexa',
            component: () => import('@/views/newform/indexa'),
            meta: { title: '弹出抽屉', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: 'newform/AdvancedForms',
            name: 'AdvancedForms',
            component: () => import('@/views/newform/AdvancedForms'),
            meta: { title: '高级表单', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: 'newform/mapForm',
            name: 'mapForm',
            component: () => import('@/views/newform/mapForm'),
            meta: { title: '地图表单', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: 'newform/ThrowRowForm',
            name: 'ThrowRowForm',
            component: () => import('@/views/newform/ThrowRowForm'),
            meta: { title: '三列表单', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: 'newform/PreviewWord',
            name: 'PreviewWord',
            component: () => import('@/views/newform/PreviewWord'),
            meta: { title: '预览附件', keepAlive: true, permission: [ 'form' ] }
          }
        ]
      },
      // 新建表单
      {
        path: '/fsxt',
        redirect: '/fsxt/fsxt-base-form',
        component: PageViewFsxt,
        meta: { title: '富深协通表单', icon: 'form', permission: [ 'form' ] },
        children: [
          {
            path: '/fsxt/fsxt-base-form',
            name: 'BaseFormPage',
            component: () => import('@/views/form/BasicFormPage'),
            meta: { title: '基础表单', showbtn: true, keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: '/fsxt/fsxt-advanced-form',
            name: 'StepFormPage',
            // component: () => import('@/views/form/StepFormPage'),
            // meta: { title: '高级带分步表单', showbtn: false, keepAlive: true, permission: ['form'] }
            component: () => import('@/views/form/advancedStepForm/index'),
            meta: { title: '高级带分步表单', showbtn: false, showStep: true, keepAlive: false, permission: ['form'] }
          }
        ]
      },
      // 查看审批页
      {
        path: '/check',
        redirect: '/check/three-row',
        component: PageViewFsxt,
        meta: { title: '查看审批页', icon: 'form', permission: [ 'form' ] },
        children: [
          {
            path: 'check/alert',
            name: 'alert',
            component: () => import('@/views/check/alert'),
            meta: { title: '弹出', showbtn: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/single-row',
            name: 'singleRow',
            component: () => import('@/views/check/singleRow'),
            meta: { title: '查看审批页-单列', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          // 附件
          {
            path: '/check/accessory',
            name: 'accessory',
            component: () => import('@/views/check/accessory'),
            meta: { title: '查看审批页-附件', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/three-row',
            name: 'threeRow',
            component: () => import('@/views/check/threeRow'),
            meta: { title: '查看审批页-三列', showbtn: true, showStep: false, keepAlive: true, permission: ['form'] }
          },
          {
            path: '/check/page-sign',
            name: 'pageSign',
            component: () => import('@/views/check/pageSign'),
            meta: { title: '查看审批页-分页签', showbtn: true, showStep: false, keepAlive: false, permission: ['form'] }
          }
        ]
      },

      // result
      {
        path: '/result',
        name: 'result',
        component: PageView,
        redirect: '/result/success',
        meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
        children: [
          {
            path: '/result/success',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
            meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
          },
          {
            path: '/result/fail',
            name: 'ResultFail',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
            meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 'exception' ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center/Index'),
            meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ] }
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
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
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
    component: UserLayout2,
    redirect: '/user/login2',
    hidden: true,
    children: [
      {
        path: 'login2',
        name: 'login2',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login2')
      },
      {
        path: 'recover',
        name: 'recover',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Recover')
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
    component: UserLayout2,
    redirect: '/user/login4',
    hidden: true,
    children: [
      {
        path: 'login4',
        name: 'login4',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login4')
      }
    ]
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
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
