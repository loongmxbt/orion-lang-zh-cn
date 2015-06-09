i18n.map('zh-cn', {
  global: {
    save: '保存',
    create: '创建',
    logout: '登出',
    back: '后退',
    cancel: '取消',
    delete: '删除',
    confirm: '确认',
    choose: '选择',
    noPermission: '您没有相应权限',
    passwordNotMatch: '密码错误',
    optional: '可选'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Emails',
        address: '地址',
        verified: '已认证'
      },
      password: {
        title: '密码',
        new: '输入密码',
        confirm: '确认密码'
      },
      profile: {
        name: '用户名'
      }
    },
    index: {
      title: '账户',
      actions: {
        edit: '编辑',
      },
      tableTitles: {
        name: '用户名',
        email: 'Email',
        roles: '角色',
        actions: 'Actions'
      }
    },
    update: {
      title: '更新账户',
      messages: {
        noPermissions: '您没有编辑用户的权限'
      },
      sections: {
        profile: {
          title: '资料'
        },
        roles: {
          title: '角色',
          selectRoles: '选择用户角色'
        },
        changePassword: {
          title: '更改密码'
        },
        deleteUser: {
          title: '危险',
          advice: '删除用户会引发问题。',
          button: '删除用户'
        }
      }
    },
    myAccount: {
      title: '我的账户',
    },
    create: {
      title: '创建用户',
      createInvitation: '创建邀请',
      createUserNow: '立即创建用户',
      inviteOther: '邀请他人',
      selectRoles: '选择新用户角色',
      email: 'Email',
      messages: {
        successfullyCreated: '成功创建邀请'
      }
    },
    changePassword: {
      title: '更改密码',
    },
    updateProfile: {
      title: '更新资料',
    },
    register: {
      title: '注册',
      registerButton: '注册',
      fields: {
        email: 'Email',
        name: '用户名',
        password: '密码',
        confirmPassword: '确认密码'
      },
      messages: {
        invalidEmail: '无效的Email',
        invalidInvitationCode: '无效的邀请码',
      }
    }
  },
  collections: {
    create: {
      title: '创建{$1}'
    },
    update: {
      title: '更新{$1}'
    },
    delete: {
      title: '删除{$1}',
      confirmQuestion: '确定要删除{$1}吗?'
    },
    common: {
      defaultPluralName: '项目',
      defaultSingularName: '项目',
    }
  },
  config: {
    update: {
      title: '配置',
    }
  },
  dictionary: {
    update: {
      title: '字典'
    }
  },
  filesystem: {
    messages: {
      notFound_id: '文件未找到 [{$i}]',
      errorUploading: '上传文件出错',
      errorRemoving: '删除文件出错',
    }
  },
  pages: {
    schema: {
      title: '标题',
      url: 'Url',
    },
    index: {
      title: '页面',
    },
    create: {
      title: '创建页面',
      chooseTemplate: '选择模板'
    },
    update: {
      title: '更新页面',
    },
    delete: {
      title: '删除页面',
      confirmQuestion: '确定要删除页面吗?'
    }
  },
  attributes: {
    users: {
      pluralName: '用户',
      singularName: '用户',
    },
    file: {
      choose: '选择文件',
      noFile: '没有文件',
    },
    image: {
      choose: '选择图片'
    }
  },
  tabular: {
    search: '搜索:',
    info: '列出 _START_ 到 _END_ 总共 _TOTAL_ 个条目',
    infoEmpty: '列出 0 到 0 总共 0 个条目',
    lengthMenu: '列出 _MENU_ 条目',
    emptyTable: '表格中无可用数据',
    paginate: {
      first: '第一页',
      previous: '上一页', 
      next: '下一页',
      last: '最后页',
    }
  }
})
