
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('#sidebar')

menuIcon.addEventListener('click', toggleSidebar)

function toggleSidebar(){
  if (sidebar.classList.contains(''))
}

let options = {
    series: [{
    data: [400, 430, 448, 470, 1380]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false,
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      distributed: true,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show: false
  },
  xaxis: {
    categories: ['Banane', 'Tomate', 'Gombo', 'Aubergine', 'Cacao']
  },
    yaxix: {
        title: {
            text: 'Recette',
        },
    },
};

let chart = new ApexCharts(document.querySelector("#stat-bar"), options);
chart.render();



// ***********************************

let options2 = {
    series: [{
    name: 'Ventes',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'Prévisions',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'Rejets',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 3],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      distributed: false,
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['Jan', 'Fev', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil',
    'Aout', 'Sept', 'Oct', 'Nov'
  ],
  markers: {
    size: 0
  },
  yaxis: {
    title: {
      text: 'Quatité',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    // y: {
    //   formatter: function (y) {
    //     if (typeof y !== "undefined") {
    //       return y.toFixed(0) + " points";
    //     }
    //     return y;
  
    //   }
    // }
  }
};

  let chart2 = new ApexCharts(document.querySelector("#stat-area"), options2);
  chart2.render();