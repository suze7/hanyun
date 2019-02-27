Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      // business_data: null,
      // multiple_pie: {
      //   tooltip: {},
      //   gauge: {
      //     tooltip: {
      //       formatter: "{c}%"
      //     },
      //     series: [
      //       {
      //         name: '业务指标',
      //         type: 'gauge',
      //         startAngle: 180,
      //         radius: "50%",
      //         center: ['50%', '80%'],
      //         endAngle: 0,
      //         axisLine: {
      //           lineStyle: {
      //             width: 3,
      //             color: [[1, '#000']],
      //           }
      //         },
      //         pointer: {
      //           show: false
      //         },
      //         axisTick: {
      //           show: false
      //         },
      //         splitLine: {
      //           show: false
      //         },
      //         axisLabel: {
      //           show: false
      //         },
      //         detail: { show: false, formatter: '{value}%' },
      //         data: [{ value: 48, name: '' }]
      //       }, {
      //         name: '业务指标',
      //         type: 'gauge',
      //         startAngle: 180,
      //         endAngle: 0,
      //         center: ['50%', '80%'],
      //         radius: "100%",
      //         axisLine: {
      //           lineStyle: {
      //             width: 3,
      //             color: [[0.48, '#0aa'], [1, '#000']],
      //           }
      //         },
      //         pointer: {
      //           width: 5
      //         },
      //         axisTick: {
      //           show: false
      //         },
      //         splitLine: {
      //           show: false
      //         },
      //         axisLabel: {
      //           show: false
      //         },
      //         itemStyle: {
      //           color: "yellow",
      //           shadowBlur: 10,
      //           shadowColor: "#0aa",
      //         },
      //         markPoint: {
      //           symbol: 'circle',
      //           symbolSize: 10,
      //         },
      //         detail: { show: false },
      //         data: [{ value: 48, name: '' }]
      //       }
      //     ]
      //   },
      //   line: {
      //     color: ['#54E8FF'],
      //     tooltip: {
      //       trigger: 'axis'
      //     },
      //     grid: {
      //       left: '50',
      //       right: '20',
      //       top: '20',
      //       bottom: '20'
      //     },
      //     xAxis: {
      //       type: 'category',
      //       boundaryGap: false,
      //       data: ['00:00', '02:33', '03:33', '04:33', '05:33', '06:33', '08:33'],
      //       axisLabel: {
      //         fontSize: 12
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: '#fff'
      //         }
      //       },
      //       axisTick: {
      //         show: false
      //       }
      //     },
      //     yAxis: {
      //       type: 'value',
      //       axisLabel: {
      //         fontSize: 12,
      //         formatter: '{value}'
      //       },
      //       axisLine: {
      //         show: false,
      //         lineStyle: {
      //           color: '#fff'
      //         }
      //       },
      //       splitLine: {
      //         lineStyle: {
      //           color: ['#eee']
      //         }
      //       },
      //       axisTick: {
      //         show: false
      //       }
      //     },
      //     series: [
      //       {
      //         name: '模拟数据',
      //         type: 'line',
      //         areaStyle: {
      //           color: '#304C8E'
      //         },
      //         data: [11, 31, 15, 23, 52, 16, 20]
      //       }
      //     ]
      //   }
      // },
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: true },
        { label: '内存分析', url: '', active: false },
        { label: '表空间', url: './table-space.html', active: false },
        { label: '数据文件', url: './data-file.html', active: false },
        { label: '会话', url: './conversation.html', active: false },
        { label: 'JOB', url: './job.html', active: false },
        { label: '重做日志', url: '', active: false },
        { label: '死锁检测', url: '', active: false },
        { label: '库缓存', url: './library-cache.html', active: false }
      ],
      // options: [
      //   { value: 'CPU使用率', label: 'CPU使用率' },
      //   { value: '系统平均负载', label: '系统平均负载' },
      //   { value: '物理内存使用率', label: '物理内存使用率' },
      //   { value: '交换内存使用率', label: '交换内存使用率' },
      //   { value: 'Swap交换情况', label: 'Swap交换情况' },
      //   { value: '响应时长', label: '响应时长' }
      // ],
      // value: '',
      // database_array: [
      //   { id: '1', label: 'INFORMATION_SCHEMA', imgUrl: '../../../assets/images/icon/storage.png', count: 62, size: '163.23MB' },
      //   { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/cpu.png', count: 62, size: '163.23KB' },
      //   { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/cpu.png', count: 62, size: '163.23KB' },
      // ],
      // storage_array: [
      //   { id: '1', label: 'INFORMATION_SCHEMA', imgUrl: '../../../assets/images/icon/local.png', count: 62, size: '163.23MB' },
      //   { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/local.png', count: 62, size: '163.23KB' },
      //   { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/local.png', count: 62, size: '163.23KB' }
      // ],
      // editTimeDialog: false,
      // time: {
      //   value1: '',
      //   value2: ''
      // },
      // time_array: [
      //   { name: '1H', value: '1H' },
      //   { name: '6H', value: '6H' },
      //   { name: '1D', value: '1D' },
      //   { name: '7D', value: '7D' },
      //   { name: '30D', value: '30D' },
      //   { name: '自定义', value: '自定义' },
      // ],
      // isActice: '1H',
      // page_array: [
      //   { label: '总览', url: './resource-overview.html', active: true }
      // ],
      // signal_info: {
      //   baseInfo: { status: '0', version: '2021-03-20', start_time: '23天', main_name: 'qingta', setup_folder: 'd:/kugou', system: 'windows' },
      //   linePool: {},
      // },
      // cpuData: {
      //   echart_title: 'WEB应用',
      //   isActice: '1H',
      // },
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
    // console.log(this.multiple_pie.gauge.series[0].axisLine.lineStyle.color);
    // console.log(this.multiple_pie.gauge.series[0].data);
    // this.multiple_pie.gauge.series[1].axisLine.lineStyle.color[0][0] = 68 / 100;
    // this.multiple_pie.gauge.series[1].data[0].value = (68 / 100) * 100;
  },
  methods: {
    // togglePage(evt) {
    //   window.location.href = evt.url;
    // },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    // toggleTime(evt) {
    //   this.isActice = evt;
    //   this.cpuData.isActice = evt;
    //   switch (evt) {
    //     case '1H':
    //       // this.multiple_pie.line.xAxis.data = [];
    //       break;
    //     case '自定义':
    //       this.editTimeDialog = true;
    //       break;
    //     default:
    //       break;
    //   }
    // },
    // goToDisk(obj) {
    //   console.log(obj);
    //   window.location.href = './disk.html?param=true';
    // }
  }
});