Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      multiple_pie: {
        gauge: null,
        line: null
      },
      tab_array: [
        { label: '业务总览', url: './resource-overview.html', active: true },
        { label: '中央处理器', url: './cpu.html', active: false },
        { label: '网卡', url: './network.html', active: false },
        { label: '进程', url: './process.html', active: false },
        { label: '服务', url: './service.html', active: false },
        { label: '磁盘', url: './disk.html', active: false },
        { label: '硬盘IO', url: './storage.html', active: false }
      ],
      options: [
        { value: 'CPU使用率', label: 'CPU使用率' },
        { value: '系统平均负载', label: '系统平均负载' },
        { value: '物理内存使用率', label: '物理内存使用率' },
        { value: '交换内存使用率', label: '交换内存使用率' },
        { value: 'Swap交换情况', label: 'Swap交换情况' },
        { value: '响应时长', label: '响应时长' }
      ],
      value: '',
      database_array: [
        { id: '1', label: 'INFORMATION_SCHEMA', imgUrl: '../../../assets/images/icon/storage.png', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/cpu.png', count: 62, size: '163.23KB' },
        { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/cpu.png', count: 62, size: '163.23KB' },
      ],
      storage_array: [
        { id: '1', label: 'INFORMATION_SCHEMA', imgUrl: '../../../assets/images/icon/local.png', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/local.png', count: 62, size: '163.23KB' },
        { id: '2', label: 'MySQL', imgUrl: '../../../assets/images/icon/local.png', count: 62, size: '163.23KB' }
      ],
      editTimeDialog: false,
      time: {
        value1: '',
        value2: ''
      },
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      isActice: '1H',
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
        { label: '关注定位', url: '../focus-position/focus-position.html', active: false },
      ],
      signal_info: {
        baseInfo: { status: '0', version: '2021-03-20', start_time: '23天', main_name: 'qingta', setup_folder: 'd:/kugou', system: 'windows' },
        linePool: {},
      },
      cpuData: {
        echart_title: 'WEB应用',
        isActice: '1H',
      },
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
  },
  mounted() {
    this.getBusinessUsingRight();
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    deleteProcess(obj) {
      console.log(obj);
      this.deleteDialog = true;
    },
    toggleTime(evt) {
      console.log(evt);
      this.isActice = evt;
      this.cpuData.isActice = evt;
      switch (evt) {
        case '自定义':
          this.editTimeDialog = true;
          break;
        default:
          break;
      }
    },
    showAddFocusDialog() {
      this.addFocusDialog = true;
    },
    getBusinessUsingRight() {
      // 内存使用率
      this.multiple_pie.gauge = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      };
      this.multiple_pie.line = {
        color: ['#54E8FF'],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '50',
          right: '20',
          top: '20',
          bottom: '20'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '02:33', '03:33', '04:33', '05:33', '06:33', '08:33'],
          axisLabel: {
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 12,
            formatter: '{value}'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#eee']
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            areaStyle: {
              color: '#304C8E'
            },
            data: [11, 31, 15, 23, 52, 16, 20]
          }
        ]
      };
    },
  }
});