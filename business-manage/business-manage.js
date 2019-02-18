Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      page_init: true,
      menuList: [],
      resource_list: [
        { label1: '系统-监控点的数据库', value1: '', label2: '服务核心', value2: '' },
        { label1: '服务采集', value1: '', label2: 'web服务器', value2: '' },
        { label1: 'web服务器', value1: '', label2: '系统-监控点的服务库', value2: '' },
        { label1: 'FTP', value1: '', label2: '服务器测试', value2: '' },
        { label1: 'Apache的服务', value1: '', label2: '维也纳-测试1', value2: '' },
        { label1: '维也纳-测试2', value1: '', label2: '维也纳-测试3', value2: '' },
        { label1: '维也纳-测试4', value1: '', label2: '47.98.213.184', value2: '' },
      ],
      health_levels: [
        { label1: '严重', value1: '', label2: '重要', value2: '' },
        { label1: '次要', value1: '', label2: '重要', value2: '' }
      ],
      business_tableData: [
        { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '22', label: 'vCenter5.5', healthy: '98%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '33', label: 'vCenter6.0', healthy: '98%', status: '0', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '44', label: 'SDN', healthy: '98%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '55', label: '阿里云', healthy: '98%', status: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '66', label: '京东云', healthy: '98%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '77', label: '华三云', healthy: '98%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
      ],
      radio1: '储存容量',
      bus_responseSpeed: null,
      bus_alarmTime: null,
      multiple_pie: null,
      addBusiDialog: false,
      business_form: {
        name: '',
      },
      business_rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.setMenuList();
    this.getResponse();
    this.getAlarmTimes();
    this.toggleBtn();
  },
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
          active: true
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
    changeHomeMenu(cmd, data) {
      if (cmd === '移除') {
        data.show = false;
        return;
      }
      data.menuType = cmd;
    },
    showDialog(str) {
      /* 新建业务 */
      console.log(str);
      switch (str) {
        case 'dialog':
          this.addBusiDialog = true;
          break;
        case 'list':
          this.page_init = false;
          break;
        case 'charts':
          this.page_init = true;
          break;
      }
    },
    /* 确认新建业务 */
    confirmAddBus() {
      console.log('确认新增');
    },
    openNewWindow(obj) {
      // console.log(obj);
      // sessionStorage.setItem('businessData', JSON.stringify(obj));
      // console.log(sessionStorage.getItem('businessData'));
      let title = '业务资源详情';
      let screenWidth = window.screen.width;
      let screenHeight = window.screen.height;
      let url = `./business-overview.html?id=${obj.business_id}`;
      if (screenHeight <= 768) {
        // if (url) {
        window.open(url, title, `width=${screenWidth}, height=${screenHeight} - 50,top=20,left=30,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);
        // }
      } else {
        let height = 790;
        let width = 1300;
        let top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        let left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        // if (url) {
        window.open(url, title, `height=${height},width=${width},top=20,left=30,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);
        // window.open(url, title, `height=${height},width=${width},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);
        // }
      }
    },
    /* 业务响应速度 */
    getResponse() {
      this.bus_responseSpeed = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '0',
          right: '0',
          top: '10',
          bottom: '40',
          containLabel: true,
          borderColor: '#eee'
        },
        xAxis: {
          data: ['Openstack V3', 'vCenter5.5', 'vCenter6.0', 'SDN', '阿里云'],
          axisLabel: {
            // interval: 0,
            rotate: 40,
            textStyle: {
              color: '#eee'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#eee',
            }
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#eee'
            }
          }
        },
        series: [{
          barWidth: '30%',
          data: [120, 200, 150, 80, 70],
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: [15],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#1BECEC' },
                { offset: 1, color: '#14B1B1' }
              ])
            }
          }
        }]
      };
    },
    /* 业务告警次数 */
    getAlarmTimes() {
      this.bus_alarmTime = {
        color: ['#69F0AE', '#FF5252', '#FFAB40', '#E4E429', '#1CEFEF'],
        tooltip: {
          trigger: 'item',
          formatter: "{b} <br /> {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: 'center',
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6,
          padding: [0, 10],
          textStyle: {
            color: '#fff',
            padding: [2, 14, 2, 4]
          },
          data: ['正常', '严重', '重要', '次要', '提示']
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              color: '#fff',
            },
            labelLine: {
              lineStyle: {
                color: '#fff',
              }
            },
            data: [
              { value: 335, name: '正常' },
              { value: 310, name: '严重' },
              { value: 234, name: '重要' },
              { value: 135, name: '次要' },
              { value: 1548, name: '提示' }
            ]
          }
        ]
      }
    },
    createCanvas(data) {
      /* 方案1 */
      let result = [];
      for (var i = 0; i < data.length; i++) {
        result.push({
          name: '',
          center: i % 2 === 0 ? [80, (i * 50 + 80)] : [280, ((i - 1) * 50 + 80)],
          radius: [26, 35],
          type: 'pie',
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: data[i].value,
            name: data[i].name,
            label: {
              normal: {
                formatter: '{d} %',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold',
                }
              }
            }
          }, {
            value: (100 - data[i].value),
            name: '',
            tooltip: { show: false },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        });
      }
      return result;
    },
    /* 告警统计 */
    toggleBtn() {
      let data = [];
      this.business_tableData.forEach((v, i) => {
        data.push({
          name: v.label,
          value: i * 10 + 5
        });
      });
      this.multiple_pie = {
        color: ['#FFE259'],
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var res = params.name + ' : ' + params.percent + '%';
            return res;
          }
        },
        xAxis: [{
          show: false
        }],
        yAxis: [{
          show: false
        }],
        series: this.createCanvas(data)
      }
      /* 注释方案2 */
      {
        // let labelTop = {
        //   show: true,
        //   color: '#fff',
        //   position: 'center',
        //   formatter: '{b}',
        //   textStyle: {
        //     baseline: 'bottom'
        //   }
        // };
        // let labelFromatter = {
        //   formatter: function (params) {
        //     return 100 - params.value + '%'
        //   },
        //   textStyle: {
        //     baseline: 'top'
        //   }
        // };
        // let labelBottom = {
        //   normal: {
        //     color: '#101E43',
        //   },
        //   emphasis: {
        //     color: 'rgba(0,0,0,0)'
        //   }
        // };
        // let labelPos = {
        //   show: true,
        //   color: '#fff',
        //   position: 'center'
        // }

        // this.multiple_pie = {
        //   color: ['#FFE259'],
        //   series: [{
        //     type: 'pie',
        //     center: ['50', '80'],
        //     radius: [26, 35],
        //     x: '0%',
        //     label: labelFromatter,
        //     data: [{
        //       name: 'other',
        //       value: 75,
        //       itemStyle: labelBottom,
        //       label: labelPos,
        //       labelLine: {
        //         show: false
        //       }
        //     },
        //     {
        //       name: '剧情',
        //       value: 25,
        //       label: labelTop,
        //       labelLine: {
        //         show: false
        //       }
        //     }]
        //   },
        //   {
        //     type: 'pie',
        //     center: ['200', '80'],
        //     radius: [26, 35],
        //     x: '20%', // for funnel
        //     label: labelFromatter,
        //     data: [{
        //       name: 'other',
        //       value: 76,
        //       itemStyle: labelBottom,
        //       label: labelPos,
        //       labelLine: {
        //         show: false
        //       }
        //     },
        //     {
        //       name: '奇幻',
        //       value: 24,
        //       label: labelTop,
        //       labelLine: {
        //         show: false
        //       }
        //     }]
        //   },
        //   {
        //     type: 'pie',
        //     center: ['10%', '55%'],
        //     radius: [26, 35],
        //     x: '40%', // for funnel
        //     label: labelFromatter,
        //     data: [{
        //       name: 'other',
        //       value: 86,
        //       itemStyle: labelBottom,
        //       label: labelPos,
        //       labelLine: {
        //         show: false
        //       }
        //     },
        //     {
        //       name: '爱情',
        //       value: 14,
        //       label: labelTop,
        //       labelLine: {
        //         show: false
        //       }
        //     }]
        //   },
        //   {
        //     type: 'pie',
        //     center: ['30%', '55%'],
        //     radius: [26, 35],
        //     x: '60%',
        //     label: labelFromatter,
        //     data: [{
        //       name: 'other',
        //       value: 89,
        //       itemStyle: labelBottom,
        //       label: labelPos,
        //       labelLine: {
        //         show: false
        //       }
        //     },
        //     {
        //       name: '惊悚',
        //       value: 11,
        //       label: labelTop,
        //       labelLine: {
        //         show: false
        //       }
        //     }]
        //   }
        //   ]
        // }
      }
    },
  }
})