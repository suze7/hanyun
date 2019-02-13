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
    }
  },
  created() {
    this.business_data = JSON.parse(sessionStorage.getItem('businessData'));
    console.log(this.business_data);
    this.getAlarmStatics();
    this.getBusinessUsing();
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
    getBusinessUsing() {
      this.business_using = {
        tooltip: {
          trigger: 'item',
          formatter: "{b}%"
        },
        series: [{
          name: '',
          type: 'pie',
          radius: '65%',
          center: ['50%', '35%'],
          calculable: true,
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
    /* tab切换 */
    toggleBtn(evt) {
      console.log(evt);
    }
  }
})