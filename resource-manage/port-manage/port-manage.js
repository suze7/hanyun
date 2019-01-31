var app = new Vue({
  el: '#homeIndex',
  data: {
    checked: false,
    showMenu: true,
    menuList: [],
    text1: '',
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
    dialogVisible: true,
    tableData: [{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '00 : 16 : 3E : 0E : 91 : 3D',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },{
      name: '红帽VIRTI0以太网适配器#2',
      portName: '红帽VIRTI0以太网适配器#2',
      resName: '监控系统服务器',
      IP: '172.16.154.122',
      type1: 'CentOS的',
      type2: '以太网端口',
      type3: '10.0Gps',
      MAC: '172.16.154.122',
      manageStatus: 1,
      runStatus: 2
    },],
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
  },
  mounted() {},
  methods: {
    setMenuList: function() {
      this.menuList = [
        {
          name: '首页',
          img: '../assets/images/menu/menu-1',
          active: true
        },
        {
          name: '拓扑管理',
          img: '../assets/images/menu/menu-2',
          active: false
        },
        {
          name: '业务管理',
          img: '../assets/images/menu/menu-3',
          active: false
        },
        {
          name: '资源管理',
          img: '../assets/images/menu/menu-4',
          active: false
        },
        {
          name: '虚拟化',
          img: '../assets/images/menu/menu-5',
          active: false
        },
        {
          name: '存储管理',
          img: '../assets/images/menu/menu-6',
          active: false
        },
        {
          name: '告警管理',
          img: '../assets/images/menu/menu-7',
          active: false
        },
        {
          name: '智能工具',
          img: '../assets/images/menu/menu-8',
          active: false
        },
        {
          name: '巡检管理',
          img: '../assets/images/menu/menu-9',
          active: false
        },
        {
          name: '报表管理',
          img: '../assets/images/menu/menu-10',
          active: false
        },
        {
          name: '系统管理',
          img: '../assets/images/menu/menu-11',
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
            name: '自定义分组',
            iconClass: 'menu-icon4-1',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '1-1',
                name: '自定义',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-2',
                name: '自定义1',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '资源列表',
            iconClass: 'menu-icon4-2',
            canTouch: true,
            children: [
              {
                id: '2-1',
                name: '全部资源',
                iconClass: '',
                canTouch: true
              },
              {
                id: '2-2',
                name: '网络设备',
                iconClass: '',
                canTouch: true,
                children: [{
                  id: '2-2-1',
                  name: '网络设备1',
                  iconClass: '',
                  canTouch: true,
                  num: ''
                },{
                  id: '2-2-2',
                  name: '网络设备2',
                  iconClass: '',
                  canTouch: true,
                  num: '1'
                }]
              }
            ]
          },
          {
            id: '3',
            name: '端口管理',
            iconClass: 'menu-icon4-3',
            canTouch: true
          },
          {
            id: '4',
            name: 'VLAN管理',
            iconClass: 'menu-icon4-4',
            canTouch: true
          },
          {
            id: '5',
            name: '链路管理',
            iconClass: 'menu-icon4-5',
            canTouch: true
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
    submitDialog() {
      
      this.dialogVisible = false;
    }
  }
});
