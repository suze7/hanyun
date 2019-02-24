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
      init_page: {
        show_newwork: true
      },
      tab_array: [
        { label: '业务总览', url: './resource-overview.html', active: false },
        { label: '中央处理器', url: './cpu.html', active: false },
        { label: '网卡', url: './network.html', active: true },
        { label: '进程', url: './process.html', active: false },
        { label: '服务', url: './service.html', active: false },
        { label: '磁盘', url: './disk.html', active: false },
        { label: '硬盘IO', url: './storage.html', active: false }
      ],
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      network_tableData: [
        { name: '/', host_name: '本地主机', route: '网络服务器', servlet: '0', },
        { name: '网络服务器', host_name: '本地主机', route: '网络服务器', servlet: '0', },
        { name: 'Intel(R) Xeon(R) CPU E5-2682 v4 @ 2.50GHz', host_name: 'localhost', route: '/net-server', servlet: '0', },
      ],
      isActice: '1H',
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
        { label: '关注定位', url: '../focus-position/focus-position.html', active: false },
      ],
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
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    showPage_cpu(evt) {
      console.log(evt);
      this.init_page.show_cpu = false;
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
  }
});