// 动态金额


var value = 80
option10 = {
  color: 'transparent',
  title: {
    text: '',
    textStyle: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'PingFangSC-Regular'
    },
    subtextStyle: {
      color: '#ff',
      fontSize: 14,
      fontFamily: 'PingFangSC-Regular',
      top: 'center'
    }
  },
  grid: {
    x: '0', //相当于距离左边效果:padding-left
    containLabel: true
  },
  legend: {
    // padding: 5,
    data: ['历史金额（万元）', '最新金额（万元）'],
    textStyle: {
      color: '#fff'
    }
  },
  toolbox: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // type: 'cross',
      crossStyle: {
        color: '#eee'
      }
    }
  },
  xAxis: {
    minInterval: 1,
    splitNumber: 3,
    axisTick: {
      show: true //---是否显示
    },
    axisLine: {
      show: true, //---是否显示
      lineStyle: {
        color: 'rgba(255,255,255,.1)',
        width: 1,
        type: 'dotted'
      }
    },
    splitLine: {
      //分割线
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,.1)',
        width: 1,
        type: 'dotted'
      }
    },
    axisLabel: {
      interval: 0, //坐标刻度之间的显示间隔，默认就可以了（默认是不重叠）
      rotate: 38, //调整数值改变倾斜的幅度（范围-90到90）
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    }
  },
  yAxis: {
    offset: '0',
    axisTick: {
      show: true //---是否显示
    },
    axisLine: {
      show: true, //---是否显示
      lineStyle: {
        color: 'rgba(255,255,255,.1)',
        width: 1,
        type: 'dotted'
      }
    },
    axisLabel: {
      //X轴文字
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    },
    data: [],
    splitLine: {
      show: false
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      name: '历史金额（万元）',
      type: 'bar',
      data: [],
      stack: 'one',
      color: {
        // 完成的圆环的颜色
        colorStops: [
          {
            offset: 0,
            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
          }
        ]
      }
      // animationDelay: function(idx) {
      //   return idx * 10 + 1000
      // }
    },
    {
      name: '最新金额（万元）',
      type: 'bar',
      stack: 'one',
      data: [],
      // animationDelay: function(idx) {
      //   return idx * 2000
      // },
      animationDuration: 2000,
      // animationDurationUpdate:20000,
      color: {
        colorStops: [
          {
            offset: 0,
            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#68eaf9' || '#367bec' // 100% 处的颜色
          }
        ]
      }
    },
    {
      name: '实时金额（万元）',
      type: 'line',
      // yAxisIndex: 1,
      label: {
        show: true,
        textStyle: {
          color: '#fff'
        },
        position: 'right'
      },
      data: []
    }
  ],
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
  animationDurationUpdate: 2000

  // animationThreshold:'200000'
  // animationDelayUpdate: function(idx) {
  //   return idx * 1000
  // }
}

function generateUUID() {
  var d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now() //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

// 把这个id存在cookie中
// setCookie("uuid", generateUUID());
document.cookie = 'uuid=' + generateUUID()
// console.log(generateUUID(),111);

