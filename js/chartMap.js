jsonSelect = [
  { place: '天津', placeCode: '120000', placeCoordinateX: '117.04', placeCoordinateY: '39.52' },
  { place: '北京', placeCode: '110000', placeCoordinateX: '116.40', placeCoordinateY: '40.40' },
  { place: '河北', placeCode: '130000', placeCoordinateX: '115.21', placeCoordinateY: '38.44' },
  { place: '山西', placeCode: '140000', placeCoordinateX: '111.95', placeCoordinateY: '37.65' },
  { place: '内蒙古', placeCode: '150000', placeCoordinateX: '112.17', placeCoordinateY: '42.81' },
  { place: '辽宁', placeCode: '210000', placeCoordinateX: '123.42', placeCoordinateY: '41.29' },
  { place: '吉林', placeCode: '220000', placeCoordinateX: '126.32', placeCoordinateY: '43.38' },
  { place: '黑龙江', placeCode: '230000', placeCoordinateX: '128.34', placeCoordinateY: '47.05' },
  { place: '上海', placeCode: '310000', placeCoordinateX: '121.46', placeCoordinateY: '31.28' },
  { place: '江苏', placeCode: '320000', placeCoordinateX: '120.26', placeCoordinateY: '32.54' },
  { place: '浙江', placeCode: '330000', placeCoordinateX: '120.15', placeCoordinateY: '29.28' },
  { place: '安徽', placeCode: '340000', placeCoordinateX: '117.28', placeCoordinateY: '31.86' },
  { place: '福建', placeCode: '350000', placeCoordinateX: '118.31', placeCoordinateY: '26.07' },
  { place: '江西', placeCode: '360000', placeCoordinateX: '115.89', placeCoordinateY: '27.97' },
  { place: '山东', placeCode: '370000', placeCoordinateX: '118.01', placeCoordinateY: '36.37' },
  { place: '河南', placeCode: '410000', placeCoordinateX: '113.46', placeCoordinateY: '34.25' },
  { place: '湖北', placeCode: '420000', placeCoordinateX: '112.29', placeCoordinateY: '30.98' },
  { place: '湖南', placeCode: '430000', placeCoordinateX: '112.08', placeCoordinateY: '27.79' },
  { place: '广东', placeCode: '440000', placeCoordinateX: '113.98', placeCoordinateY: '22.82' },
  { place: '广西', placeCode: '450000', placeCoordinateX: '108.67', placeCoordinateY: '23.68' },
  { place: '海南', placeCode: '460000', placeCoordinateX: '110.03', placeCoordinateY: '19.33' },
  { place: '四川', placeCode: '510000', placeCoordinateX: '103.36', placeCoordinateY: '30.65' },
  { place: '贵州', placeCode: '520000', placeCoordinateX: '106.91', placeCoordinateY: '26.67' },
  { place: '云南', placeCode: '530000', placeCoordinateX: '101.71', placeCoordinateY: '24.84' },
  { place: '新疆', placeCode: '650000', placeCoordinateX: '86.61', placeCoordinateY: '40.79' },
  { place: '西藏', placeCode: '540000', placeCoordinateX: '89.13', placeCoordinateY: '30.66' },
  { place: '宁夏', placeCode: '640000', placeCoordinateX: '106.27', placeCoordinateY: '36.76' },
  { place: '青海', placeCode: '630000', placeCoordinateX: '97.07', placeCoordinateY: '35.62' },
  { place: '甘肃', placeCode: '620000', placeCoordinateX: '103.82', placeCoordinateY: '36.05' },
  { place: '陕西', placeCode: '610000', placeCoordinateX: '108.94', placeCoordinateY: '34.46' },
  { place: '重庆', placeCode: '500000', placeCoordinateX: '107.51', placeCoordinateY: '29.63' },
  { place: '台湾', placeCode: '830000', placeCoordinateX: '121.01', placeCoordinateY: '23.54' },
  { place: '澳门', placeCode: '820000', placeCoordinateX: '113.54', placeCoordinateY: '22.19' },
  { place: '香港', placeCode: '810000', placeCoordinateX: '114.17', placeCoordinateY: '22.32' }
]

let citys = []
for (let index = 0; index < jsonSelect.length; index++) {
  const element = jsonSelect[index]
  let data = {
    name: element.place,
    value: [element.placeCoordinateX, element.placeCoordinateY],
    symbolSize: 3,
    itemStyle: { normal: { color: '#58B3CC' } }
  }
  citys.push(data)
}
citys.push({ name: '天津', value: [117.04, 39.52], symbolSize: 14, itemStyle: { normal: { color: '#F58158' } } })

option8 = {
  title: {
    text: '',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    show: false,
    orient: 'vertical',
    top: 'bottom',
    left: 'right',
    data: ['地点', '线路'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: 'rgba(7,21,57,0.5)',
        borderColor: '#0177ff'
      },
      emphasis: {
        areaColor: '#071537' //鼠标指上市时的颜色
      }
    }
  },
  series: [
    {
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 9999,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: 4,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          color: '#1380bd'
        }
      },
      data: citys
    },
    {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      large: true,
      effect: {
        show: true,
        constantSpeed: 30,
        symbol: 'pin',
        symbolSize: 10,
        trailLength: 0
      },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#58B3CC'
              },
              {
                offset: 1,
                color: '#F58158'
              }
            ],
            false
          ),
          width: 6,
          opacity: 0.2,
          curveness: 0.2
        }
      },
      data: []
    },
    {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 3,
      large: true,
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#58B3CC'
              },
              {
                offset: 1,
                color: '#F58158'
              }
            ],
            false
          ),
          width: 5,
          opacity: 0.6,
          curveness: 0.2
        }
      },
      data: []
    }
  ]
}
// var change = true
// setInterval(function() {
//   if (change) {
//     option8.series[1].data = allData.moveLines2
//   } else {
//     option8.series[1].data = allData.moveLines
//   }
//   myChart8.setOption(option8)
//   change = !change
// }, 8000)
