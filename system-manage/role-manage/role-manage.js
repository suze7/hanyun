var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    leftMenuList: null,
    dialogVisible: false,
    value: '',
    options: [],
    tableData: [{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    },{
      name: '名称名称名称',
      status: 1,
      system: '内置用户',
      describe: '系统管理员'
    }],
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[0];
  },
  mounted() {},
  methods: {
    toRoute(menu) {
      window.location.href = menu.url;
    },
    setMenuList: function () {
      this.menuList = [{
          name: '首页',
          img: '../assets/images/menu/menu-1',
          url: '../index/index.html',
          active: false
        },
        {
          name: '拓扑管理',
          img: '../assets/images/menu/menu-2',
          url: '../topology-manage/topology-manage.html',
          active: false
        },
        {
          name: '业务管理',
          img: '../assets/images/menu/menu-3',
          url: '../business-manage/business-manage.html',
          active: false
        },
        {
          name: '资源管理',
          img: '../assets/images/menu/menu-4',
          url: '../resource-manage/resource-manage.html',
          active: true
        },
        {
          name: '虚拟化',
          img: '../assets/images/menu/menu-5',
          url: '../virtualization/virtualization.html',
          active: false
        },
        {
          name: '存储管理',
          img: '../assets/images/menu/menu-6',
          url: '../storage-manage/storage-manage.html',
          active: false
        },
        {
          name: '告警管理',
          img: '../assets/images/menu/menu-7',
          url: '../alarm-manage/alarm-manage.html',
          active: false
        },
        {
          name: '智能工具',
          img: '../assets/images/menu/menu-8',
          url: '../intelligent-tools/intelligent-tools.html',
          active: false
        },
        {
          name: '巡检管理',
          img: '../assets/images/menu/menu-9',
          url: '../patrol-manage/patrol-report.html',
          active: false
        },
        {
          name: '报表管理',
          img: '../assets/images/menu/menu-10',
          url: '../report-manage/report-manage.html',
          active: false
        },
        {
          name: '系统管理',
          img: '../assets/images/menu/menu-11',
          url: '../system-manage/system-manage.html',
          active: false
        }
      ];
    },
    setLeftMenuList: function () {
      this.leftMenuList = {
        openMenu: null,
        selectMenu: null,
        list: [{
            id: '1',
            name: '用户管理',
            iconClass: 'menu-icon4-r',
            canTouch: false, //点开却不会选中
            children: [{
                id: '1-1',
                name: '系统用户',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-2',
                name: '角色管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-3',
                name: 'AD配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '图库管理',
            iconClass: 'menu-icon4-s',
            canTouch: true,
            children: [{
                id: '2-1',
                name: '分类管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '2-2',
                name: '图库分类',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '3',
            name: '系统监听器',
            iconClass: 'menu-icon4-t',
            canTouch: true,
            children: [{
                id: '3-1',
                name: '陷阱解析配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-2',
                name: '系统日志解析配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-3',
                name: '的Windows事件配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-4',
                name: 'AIX错误日志配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '推送配置',
            iconClass: 'menu-icon4-u',
            canTouch: true,
            children: [{
                id: '4-1',
                name: '邮件配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '4-2',
                name: '短信配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '5',
            name: '系统配置',
            iconClass: 'menu-icon4-v',
            canTouch: true,
            children: [{
                id: '5-1',
                name: '资源类型管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '5-2',
                name: '分布式管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '5-3',
                name: '系统参数配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '5-4',
                name: '接口管理',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '6',
            name: '系统审计',
            iconClass: 'menu-icon4-w',
            canTouch: true,
            children: [{
                id: '6-1',
                name: '操作日志',
                iconClass: '',
                canTouch: true
              },
              {
                id: '6-2',
                name: '日志管理',
                iconClass: '',
                canTouch: true
              }
            ]
          },
        ]
      };
    },
    selectedLeftMenu(menu) {
      if (menu.canTouch) {
        this.leftMenuList.selectMenu = menu;
        this.afterSelect(menu);
      }
      if (menu.children) {
        if (this.leftMenuList.openMenu === menu.id) {
          let mList = this.leftMenuList.openMenu.split('-');
          if (mList.length > 1) {
            mList.pop();
            this.leftMenuList.openMenu = mList.join('-');
          } else {
            this.leftMenuList.openMenu = null;
          }
        } else {
          this.leftMenuList.openMenu = menu.id;
        }
      }
    },
    afterSelect(menu) {
      // if (this.leftMenuList.selectMenu.id.indexOf(menu.id) === 0) {
      //   return;
      // }
      // if (menu.id === '1' || menu.id.indexOf('1-') === 0) {
      //   window.location.href = './resource-manage.html';
      // } else if (menu.id === '2' || menu.id.indexOf('2-') === 0) {
      //   window.location.href = './resource-list.html';
      // } else if (menu.id === '3') {
      //   window.location.href = './port-manage.html';
      // } else if (menu.id === '4') {
      //   window.location.href = './VLAN-manage.html';
      // } else if (menu.id === '5') {
      //   window.location.href = './link-manage.html';
      // }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    handleClose() {},
    submitDialog() {
      this.dialogVisible = false;
    }
  }
});