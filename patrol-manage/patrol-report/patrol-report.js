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
    dialogFlag: 1,
    tableData: [{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '待提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    },{
      name: '巡检报告',
      people: '演示用户',
      reportTime: '2018-10-17 00:44:20',
      creater: '系统管理员',
      planName: '每月巡检',
      time: '2018-10-17 00:44:20',
      status: '已提交'
    }],
    activeNames: ['1']
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
          active: false
        },
        {
          name: '巡检管理',
          img: '../assets/images/menu/menu-9',
          active: true
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
            name: '巡检报告',
            iconClass: 'menu-icon4-2',
            canTouch: true
          },
          {
            id: '2',
            name: '巡检计划',
            iconClass: 'menu-icon4-3',
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
    showDialog(num) {
      this.dialogVisible = true;
      this.dialogFlag = num;
    },
    handleClose() {

    },
    submitDialog() {
      this.dialogVisible = false;
    },
    handleChange(val) {
      console.log(val);
    }
  }
});
