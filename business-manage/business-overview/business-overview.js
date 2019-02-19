Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      radio1: '业务总览',
      business_data: null,
      alarm_statics: null,
      business_using: null,
      alarm_object: [
        { name: '监控系统数据库', status: '0' },
        { name: '核心服务', status: '1' },
        { name: '采集服务', status: '2' },
        { name: 'WEB数据库', status: '1' },
        { name: '监控数据服务器', status: '1' },
        { name: '测试服务器', status: '0' }
      ],
      multiple_pie: {
        pie1: null,
        pie2: null
      },
      isActice: '0',
      pie3: {
        now: +new Date(2018, 5, 3),
        oneDay: 12 * 3600 * 1000,
        value: Math.random() * 1000
      },
      alarm_tableData: [
        { alarm_id: '11', alarm_name: '2物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '1物理内存使用率异常', levle: '0', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '3物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '2', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
      ],
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
    // this.business_data = JSON.parse(sessionStorage.getItem('businessData'));
    console.log(this.business_data);
    this.getAlarmStatics();
    this.getBusinessUsing();
    this.getBusinessUsingRight();
  },
  methods: {
    getAlarmStatics() {
      this.alarm_statics = {
        color: ['#FFE259'],
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
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
        series: {
          name: '',
          center: 80,
          radius: [48, 60],
          type: 'pie',
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 35,
            name: '告警',
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
            value: 65,
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
        }
      }
    },
    /* 业务可用率 - 中 */
    getBusinessUsing() {
      this.business_using = {
        tooltip: {
          trigger: 'item',
          formatter: "{b}%"
        },
        hoverAnimation: {
          show: false
        },
        series: [{
          name: '',
          type: 'pie',
          radius: '65%',
          center: ['50%', '35%'],
          calculable: true,
          silent: true,
          clockwise: true,
          data: [
            {
              value: 35,
              name: '业务可用率',
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#54E8FF' },
                    { offset: 1, color: '#2A7D80' }
                  ],
                }
              },
            },
            {
              value: 65,
              label: {
                show: false,
              },
              name: '',
              itemStyle: {
                color: '#101E43'
              }
            },
          ],
          label: {
            normal: {
              formatter: '{c}%',
              position: 'inner',
              textStyle: {
                color: '#fff',
                fontSize: 12,
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }],
        color: ['#0aa', '#101E43'],
      }
    },
    /* 业务可用率 - 右 */
    getBusinessUsingRight() {
      let labelFromatter = {
        label: {
          formatter: function (params) {
            return 100 - params.value + '%'
          },
          textStyle: {
            baseline: 'top'
          }
        }
      }
      this.multiple_pie.pie1 = {
        color: ['#1CEFEF'],
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: [25, 35],
          clockwise: false,
          hoverAnimation: false,
          x: '0%',
          itemStyle: labelFromatter,
          data: [{
            name: '',
            value: 75,
            label: {
              show: true,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#ccc',
            }
          },
          {
            name: '',
            value: 25,
            label: {
              show: false,
              position: 'center',
              formatter: '{b}',
              textStyle: {
                baseline: 'bottom'
              }
            },
            labelLine: {
              show: false
            }
          }]
        }]
      };
      this.multiple_pie.pie2 = {
        color: ['#1CEFEF'],
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: [25, 35],
          clockwise: false,
          hoverAnimation: false,
          x: '0%',
          itemStyle: labelFromatter,
          data: [{
            name: '',
            value: 75,
            label: {
              show: true,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#ccc',
            }
          },
          {
            name: '',
            value: 25,
            label: {
              show: false,
              position: 'center',
              formatter: '{b}',
              textStyle: {
                baseline: 'bottom'
              }
            },
            labelLine: {
              show: false
            }
          }]
        }]
      };
      let data = [];
      for (let i = 0; i < 1000; i++) {
        data.push(this.randomData());
      }
      this.multiple_pie.pie3 = {
        color: ['#54E8FF'],
        grid: {
          left: '150',
          right: '50',
          top: '50',
          bottom: '50'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }]
      };
    },
    randomData() {
      this.pie3.now = new Date(+this.pie3.now + this.pie3.oneDay);
      this.pie3.value = this.pie3.value + Math.random() * 21 - 10;
      return {
        name: this.pie3.now.toString(),
        value: [
          [this.pie3.now.getFullYear(), this.pie3.now.getMonth() + 1, this.pie3.now.getDate()].join('/'),
          Math.round(this.pie3.value)
        ]
      }
    },
    openNewPage(obj) {
      console.log(obj);
      switch (obj) {
        case '监控系统数据库':
          
          break;
        case '核心服务':

          break;
        case '采集服务':

          break;
        case 'WEB数据库':

          break;
        case '监控数据服务器':

          break;
        case '测试服务器':

          break;
        default:
          break;
      }
    },
    /* tab切换 */
    toggleBtn(evt) {
      console.log(evt);
    },
    /* 告警统计切换 */
    alarmToggle(type) {
      switch (type) {
        case 'healthy':
          this.isActice = '0';
          break;
        case 'storage':
          this.isActice = '1';
          break;
      }
    }
  }
})