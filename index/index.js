var app = new Vue({
  el: '#homeIndex',
  data: {
    message: 'Hello Vue!',
    menuList: [],
    homeDataList: []
  },
  mounted() {
    this.setMenuList();
    this.setHomeDataList();
  },
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
    setHomeDataList() {
      this.homeDataList = [
        {
          id: 1,
          name: '告警统计',
          style: {
            width: '422px'
          },
          show: true,
          menuList: ['图表', '列表', '移除'],
          menuType: '图表',
          noData: false,
          chart: {
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
              bottom: 10,
              left: 'center',
              itemWidth: 6,
              itemHeight: 6,
              icon: 'circle',
              textStyle: {
                color: '#fff',
                padding: [2, 14, 2, 4]
              },
              formatter: name => {
                const dataList = this.homeDataList[0].tableData;
                const data = dataList.find(v => v.name === name);
                return data.name + ' ' + data.value + '次';
              },
              data: ['严重告警', '重要告警', '次要告警', '提示告警']
            },
            series: [
              {
                color: ['#ff5c54', '#ff9e54', '#fff954', '#1cefef'],
                name: '告警统计',
                type: 'pie',
                radius: '50%',
                center: ['50%', '40%'],
                clockwise: false,
                startAngle: 0,
                data: [
                  {
                    value: 18,
                    name: '严重告警',
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                          {
                            offset: 0,
                            color: '#ff5c54'
                          },
                          {
                            offset: 1,
                            color: '#ff352b'
                          }
                        ],
                        globalCoord: false
                      }
                    }
                  },
                  {
                    value: 6,
                    name: '重要告警',
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                          {
                            offset: 0,
                            color: '#ff9e54'
                          },
                          {
                            offset: 1,
                            color: '#ff8529'
                          }
                        ],
                        globalCoord: false
                      }
                    }
                  },
                  {
                    value: 0,
                    name: '次要告警',
                    itemStyle: { color: '#fff954' }
                  },
                  {
                    value: 0,
                    name: '提示告警',
                    itemStyle: { color: '#1cefef' }
                  }
                ],
                label: {
                  show: false
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 15,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(14, 21, 42, 0.25)'
                  }
                }
              }
            ]
          },
          tableCols: [
            { field: 'name', header: '告警级别', width: 150 },
            { field: 'value', header: '告警数量', width: 150 }
          ],
          tableData: [
            { value: 18, name: '严重告警' },
            { value: 6, name: '重要告警' },
            { value: 0, name: '次要告警' },
            { value: 0, name: '提示告警' }
          ]
        },
        {
          id: 2,
          name: '资源类别告警分析',
          style: {
            width: '864px'
          },
          show: true,
          menuList: ['图表', '列表', '移除'],
          menuType: '图表',
          noData: false,
          chart: {
            color: ['#ff5252', '#ff9e54', '#fff954', '#1cefef'],
            tooltip: {
              trigger: 'axis',
            },
            legend: {
              data: ['严重告警', '重要告警', '次要告警', '提示告警'],
              align: 'left',
              top: 16,
              right: 17,
              itemWidth: 6,
              itemHeight: 6,
              itemGap: 32,
              textStyle: {
                color: '#fff',
                padding: [0, 0, 0, 2]
              }
            },
            xAxis: {
              data: [
                '网络设备',
                '服务器',
                '数据库',
                '应用服务器',
                'web服务器',
                '邮件服务器',
                '中间件',
                '存储设备',
                '光纤交换机',
                '虚拟化',
                '通用监控',
                '业务资源'
              ],
              axisLine: {
                lineStyle: {
                  color: '#8190b8'
                }
              },
              axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255,0.6)',
                formatter: data => {
                  const array = data.split('');
                  let index = Math.floor(array.length / 2);
                  if (index < 2) {
                    index = 2;
                  }
                  array.splice(index, 0, '\n');
                  return array.join('');
                },
                lineHeight: 14,
                rich: {}
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              minInterval: 5,
              axisLabel: {
                formatter: '{value}次',
                color: 'rgba(255,255,255,0.6)'
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
              top: 68,
              right: 25,
              bottom: 51,
              left: 60
            },
            series: [
              {
                name: '严重告警',
                type: 'bar',
                stack: 'one',
                data: [15, 7, 8, 2, 3, 6, 13, 8, 3, 17, 9, 14],
                barCategoryGap: '75%'
              },
              {
                name: '重要告警',
                type: 'bar',
                stack: 'one',
                data: [3]
              },
              {
                name: '次要告警',
                type: 'bar',
                stack: 'one',
                data: []
              },
              {
                name: '提示告警',
                type: 'bar',
                stack: 'one',
                data: []
              }
            ]
          },
          tableCols: [
            { field: 'name', header: '资源类别', width: 150},
            { field: 'alarm1', header: '严重告警', width: 150},
            { field: 'alarm2', header: '重要告警', width: 150},
            { field: 'alarm3', header: '次要告警', width: 150},
            { field: 'alarm4', header: '提示告警', width: 150}
          ],
          tableData: [
            {
              name: '网络设备',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '数据库',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '应用服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: 'web服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '邮件服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '中间件',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '存储设备',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '光纤交换机',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '虚拟化',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '通用监控',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '业务资源',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            }
          ]
        }
      ];
    },
    changeHomeMenu(cmd, data) {
      if (cmd === '移除') {
        data.show = false;
        return;
      }
      data.menuType = cmd;
    }
  }
});

Vue.component('v-chart', VueECharts);
