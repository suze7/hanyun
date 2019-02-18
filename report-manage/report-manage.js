var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    text1: '',
    value1: null,
    options: [
      {
        value: '选项1',
        label: '黄金糕'
      },
      {
        value: '选项2',
        label: '双皮奶'
      },
      {
        value: '选项3',
        label: '蚵仔煎'
      },
      {
        value: '选项4',
        label: '龙须面'
      },
      {
        value: '选项5',
        label: '北京烤鸭'
      }
    ],
    value: '',
    leftMenuList: null,
    dialogVisible: false,
    tableData: [{
      spec: true,
      name: '1监控系统数据库',
      IP: '172.16.154.122',
      type1: '2数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 0,
      manageStatus: 1,
      accessStatus: 2,
      time: '5分钟'
    },{
      spec: false,
      name: '2监控系统数据库',
      IP: '172.16.154.122',
      type1: '1数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 1,
      manageStatus: 2,
      accessStatus: 0,
      time: '5分钟'
    },{
      spec: false,
      name: '3监控系统数据库',
      IP: '172.16.154.122',
      type1: '3数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 2,
      manageStatus: 0,
      accessStatus: 1,
      time: '5分钟'
    },{
      spec: true,
      name: '1监控系统数据库',
      IP: '172.16.154.122',
      type1: '2数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 0,
      manageStatus: 1,
      accessStatus: 2,
      time: '5分钟'
    },{
      spec: false,
      name: '2监控系统数据库',
      IP: '172.16.154.122',
      type1: '1数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 1,
      manageStatus: 2,
      accessStatus: 0,
      time: '5分钟'
    },{
      spec: false,
      name: '3监控系统数据库',
      IP: '172.16.154.122',
      type1: '3数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 2,
      manageStatus: 0,
      accessStatus: 1,
      time: '5分钟'
    },{
      spec: true,
      name: '1监控系统数据库',
      IP: '172.16.154.122',
      type1: '2数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 0,
      manageStatus: 1,
      accessStatus: 2,
      time: '5分钟'
    },{
      spec: false,
      name: '2监控系统数据库',
      IP: '172.16.154.122',
      type1: '1数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 1,
      manageStatus: 2,
      accessStatus: 0,
      time: '5分钟'
    },{
      spec: false,
      name: '3监控系统数据库',
      IP: '172.16.154.122',
      type1: '3数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 2,
      manageStatus: 0,
      accessStatus: 1,
      time: '5分钟'
    },{
      spec: false,
      name: '3监控系统数据库',
      IP: '172.16.154.122',
      type1: '3数据库',
      type2: 'MySql',
      level: '三级保障',
      area: '默认管理域',
      healthStatus: 2,
      manageStatus: 0,
      accessStatus: 1,
      time: '5分钟'
    }],
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
  },
  mounted() {},
  methods: {
    toRoute(menu) {
      window.location.href = menu.url;
    },
    setMenuList: function() {
      this.menuList = [
        {
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
          active: false
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
          active: true
        },
        {
          name: '系统管理',
          img: '../assets/images/menu/menu-11',
          url: '../system-manage/system-manage.html',
          active: false
        }
      ];
    },
    setLeftMenuList: function() {
      this.leftMenuList = {
        openMenu: null,
        selectMenu: null,
        list: [
          {
            id: '1',
            name: '性能分析列表',
            iconClass: 'menu-icon4-l',
            canTouch: false, //点开却不会选中
          },
          {
            id: '2',
            name: '报告分类管理',
            iconClass: 'menu-icon4-2',
            canTouch: true
          },
          {
            id: '3',
            name: '可用性报告',
            iconClass: 'menu-icon4-m',
            canTouch: false,
            children: [
              {
                id: '3-1',
                name: '网络设备可用状态',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '告警统计报告',
            iconClass: 'menu-icon4-n',
            canTouch: false,
            children: [
              {
                id: '4-1',
                name: '资源告警统计',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '5',
            name: 'TOPN报告',
            iconClass: 'menu-icon4-o',
            canTouch: false,
            children: [
              {
                id: '5-1',
                name: '网络设备TOPN',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '6',
            name: '类别报告',
            iconClass: 'menu-icon4-g',
            canTouch: false,
            children: [
              {
                id: '6-1',
                name: '测试',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '7',
            name: '资源性能报告',
            iconClass: 'menu-icon4-p',
            canTouch: false,
            children: [
              {
                id: '7-1',
                name: '维也纳测试',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '8',
            name: '业务报告',
            iconClass: 'menu-icon4-q',
            canTouch: false,
            children: [
              {
                id: '8-1',
                name: '维也纳测试',
                iconClass: '',
                canTouch: true
              }
            ]
          }
        ]
      };
    },
    selectedLeftMenu(menu) {
      if (menu.canTouch) {
        this.leftMenuList.selectMenu = menu;
      }
      if (menu.children) {
        console.log(menu);
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
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
    showDialog() {
      this.dialogVisible = true;
      
    },
    handleClose() {
      
    },
    submitDialog() {
      
      this.dialogVisible = false;
    }
  }
});
