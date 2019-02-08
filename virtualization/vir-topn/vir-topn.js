Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    leftMenuList: null,
    chart1: {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
      },
      xAxis: {
        data: ['172.16.7.34', '172.16.7.35'],
        axisLine: {
          lineStyle: {
            color: '#8190b8'
          }
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 14
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        max: 100,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          formatter: data => {
            return data + '%';
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#8190b8',
            opacity: 0.3
          }
        }
      },
      grid: {
        top: 40,
        right: 24,
        bottom: 28,
        left: 60
      },
      series: [
        {
          name: '',
          type: 'bar',
          data: [{
            value: 40,
            itemStyle: {
              color: '#1cefef'
            }
          }, {
            value: 24,
            itemStyle: {
              color: '#69f0ae'
            }
          }],
          barWidth: 32,
          barCategoryGap: '75%'
        }
      ]
    },
    chart2: {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
      },
      xAxis: {
        data: ['172.16.7.34', '172.16.7.35'],
        axisLine: {
          lineStyle: {
            color: '#8190b8'
          }
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 14
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        max: 100,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          formatter: data => {
            return data + '%';
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#8190b8',
            opacity: 0.3
          }
        }
      },
      grid: {
        top: 40,
        right: 24,
        bottom: 28,
        left: 60
      },
      series: [
        {
          name: '',
          type: 'bar',
          data: [{
            value: 23.5,
            itemStyle: {
              color: '#1cefef'
            }
          }, {
            value: 39,
            itemStyle: {
              color: '#69f0ae'
            }
          }],
          barWidth: 32,
          barCategoryGap: '75%'
        }
      ]
    },
    chart3: {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
      },
      xAxis: {
        data: ['172.16.7.34', '172.16.7.35'],
        axisLine: {
          lineStyle: {
            color: '#8190b8'
          }
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 14
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        max: 100,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          formatter: data => {
            return data + '%';
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#8190b8',
            opacity: 0.3
          }
        }
      },
      grid: {
        top: 40,
        right: 24,
        bottom: 28,
        left: 60
      },
      series: [
        {
          name: '',
          type: 'bar',
          data: [{
            value: 77,
            itemStyle: {
              color: '#1cefef'
            }
          }, {
            value: 14.5,
            itemStyle: {
              color: '#69f0ae'
            }
          }],
          barWidth: 32,
          barCategoryGap: '75%'
        }
      ]
    },
    chart4: {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
      },
      xAxis: {
        data: ['172.16.7.34', '172.16.7.35'],
        axisLine: {
          lineStyle: {
            color: '#8190b8'
          }
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 14
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        max: 100,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          formatter: data => {
            return data + '%';
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#8190b8',
            opacity: 0.3
          }
        }
      },
      grid: {
        top: 40,
        right: 24,
        bottom: 28,
        left: 60
      },
      series: [
        {
          name: '',
          type: 'bar',
          data: [{
            value: 40,
            itemStyle: {
              color: '#1cefef'
            }
          }, {
            value: 24,
            itemStyle: {
              color: '#69f0ae'
            }
          }],
          barWidth: 32,
          barCategoryGap: '75%'
        }
      ]
    },
    chart5: {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
      },
      xAxis: {
        data: ['172.16.7.34', '172.16.7.35'],
        axisLine: {
          lineStyle: {
            color: '#8190b8'
          }
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 14
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        max: 100,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          formatter: data => {
            return data + '%';
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#8190b8',
            opacity: 0.3
          }
        }
      },
      grid: {
        top: 40,
        right: 24,
        bottom: 28,
        left: 60
      },
      series: [
        {
          name: '',
          type: 'bar',
          data: [{
            value: 23.5,
            itemStyle: {
              color: '#1cefef'
            }
          }, {
            value: 39,
            itemStyle: {
              color: '#69f0ae'
            }
          }],
          barWidth: 32,
          barCategoryGap: '75%'
        }
      ]
    },
    chart6: {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}%'
      },
      xAxis: {
        data: ['172.16.7.34', '172.16.7.35', 'datastore735'],
        axisLine: {
          lineStyle: {
            color: '#8190b8'
          }
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 14
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        max: 100,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          formatter: data => {
            return data + '%';
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#8190b8',
            opacity: 0.3
          }
        }
      },
      grid: {
        top: 40,
        right: 24,
        bottom: 28,
        left: 60
      },
      series: [
        {
          name: '',
          type: 'bar',
          data: [{
            value: 23.5,
            itemStyle: {
              color: '#1cefef'
            }
          }, {
            value: 39,
            itemStyle: {
              color: '#69f0ae'
            }
          }, {
            value: 14.5,
            itemStyle: {
              color: '#ddff8e'
            }
          }],
          barWidth: 32,
          barCategoryGap: '75%'
        }
      ]
    },
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
          active: true
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
            name: '虚拟化资源',
            iconClass: 'menu-icon4-2',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '1-1',
                name: 'VMware的',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '虚拟化拓扑',
            iconClass: 'menu-icon4-2',
            canTouch: true,
            children: [
              {
                id: '2-1',
                name: '全部资源',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '3',
            name: '虚拟化事件',
            iconClass: 'menu-icon4-4',
            canTouch: true
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
