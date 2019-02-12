var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    text1: '',
    radio: '1',
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
    checked: false,
    tableData: [{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    },{
      name: 'test',
      describe: '描述描述描述描述描述',
      status: 1,
      time: '2018-10-17 00:44',
      people: 'admin',
      num: 0
    }],
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
          active: false
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
          active: true
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
            name: 'IP地址管理',
            iconClass: 'menu-icon4-1',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '1-1',
                name: '部门管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-2',
                name: '未分配网段',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-3',
                name: '已分配网段',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-4',
                name: '已使用IP地址',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-5',
                name: '老化IP地址',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-6',
                name: '审核管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-7',
                name: '审计日志',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '配置组管理',
            iconClass: 'menu-icon4-2',
            canTouch: true
          },
          {
            id: '3',
            name: '设备管理',
            iconClass: 'menu-icon4-3',
            canTouch: true
          },
          {
            id: '4',
            name: '告警管理',
            iconClass: 'menu-icon4-4',
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
    handleClose() {
      
    },
    submitDialog() {
      
      this.dialogVisible = false;
    }
  }
});
