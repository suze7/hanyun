var app = new Vue({
  el: '#homeIndex',
  data: {
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
    dialogVisible: false,
    tableData: [{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
    },{
      name: 'xxxxxxxxxxxxxxx',
      rename: 'xxxxxxxxxxxxxxx',
      resName: 'xxxxxxxxxxxxxxx',
      resIP: 'xxxxxxxxxxxxxxx',
      OriWWN: 'xxxxxxxxxx',
      nodeWWN: 'xxxxxxxxxxxxxxx',
      airmPort: 'xxxxxxxxx',
      airmNode: 'xxxxxxxxxxxxxxx'
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
            name: '存储总览',
            iconClass: 'menu-icon4-2',
            canTouch: true, //点开却不会选中
          },
          {
            id: '2',
            name: '存储拓扑',
            iconClass: 'menu-icon4-4',
            canTouch: true
          },
          {
            id: '3',
            name: '存储列表',
            iconClass: 'menu-icon4-2',
            canTouch: true,
            children: [
              {
                id: '3-1',
                name: '光纤交换机',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-2',
                name: '存储设备',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-3',
                name: '光纤链路',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '虚拟化TOPN',
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
    }
  }
});
