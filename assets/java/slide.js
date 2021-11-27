$(document).ready(function(){
    $('.slide-24h').slick({
    slidesToShow: 6,
    slidesToScroll:6,
    infinite: true,
    dots:false,
    arrows : false,
    centerMode: false,
    responsive: [
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        
       
      ]
    });
  });

  $(document).ready(function(){
    $('.next-7-day').slick({
    slidesToShow: 6,
    slidesToScroll:6,
    infinite: true,
    arrows : false,
    dots:false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
    });
  });
 
  $(document).ready(function(){
    $('.chart-slide').slick({
    slidesToShow: 2,
    slidesToScroll:2,
    infinite: true,
    dots:false,
    arrows : false,
    centerMode: false,
    responsive: [
      
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]
    });
  });


// chart  

Highcharts.chart('container-chart1', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Nhiệt độ'
  },
  
  xAxis: {
    categories: [
      'T2',
      'T3',
      'T4',
      'T5',
      'T6',
      'T7',
      'CN' 
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Nhiệt độ (*C)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} ,<sup>o</sup>C</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    data: [22,26,18,15,19,18,26]
  }]
});

Highcharts.chart('container-chart2', {

  title: {
    text: 'Lượng mưa'
  },

  

  yAxis: {
    title: {
      text: 'mm'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 1 to 7'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    
    data: [0.5, 0.9, 5, 2.2,1.5,6,0.7]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

Highcharts.chart('container-chart3', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Độ ẩm'
  },
  
  xAxis: {
    categories: [
      'T2',
      'T3',
      'T4',
      'T5',
      'T6',
      'T7',
      'CN' 
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Độ ẩm (%)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} ,%</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    data: [60,50,70,80,90,55,75,85]
  }]
});

Highcharts.chart('container-chart4', {

  title: {
    text: 'Ấp suất'
  },

  

  yAxis: {
    title: {
      text: 'mbar'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 1 to 7'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    
    data: [1000,1002,1100,1005,1103,955,1050]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
  