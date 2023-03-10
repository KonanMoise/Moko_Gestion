
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('.header');

const countEmployee = document.querySelector('.box .count_user')
const nomDuConect = document.querySelector('.nom_du_conect')

function getEmployee() {
  return JSON.parse(localStorage.getItem('employee'))
}

function getAdmin() {
  return JSON.parse(localStorage.getItem('admin'))
}

function setCount(count) {
  countEmployee.innerHTML = count
}

function setNomAdminConect(nom) {
  nom.forEach(element => {
    if (element["super"] === true){
      nomDuConect.innerHTML = element["username"]
    }
  });
  
}

let nomAdmin = getAdmin()
let employee = getEmployee()
setCount(employee.length)
setNomAdminConect(nomAdmin)



// ************responsive-sidebar
menuIcon.addEventListener('click', toggleSidebar)

function toggleSidebar(){
  if (sidebar.classList.contains('sidebar-responsive')) {
    sidebar.classList.remove('sidebar-responsive')
    menuIcon.querySelector('span').innerText = 'keyboard_double_arrow_right';
    header.classList.remove('header -responsive')
  } else{ 
    sidebar.classList.add('sidebar-responsive')
    menuIcon.querySelector('span').innerText = 'menu';
    header.classList.add('header -responsive')
  }
}




// Tab des statistiques
let options = {
    series: [{
    data: [1100, 530, 648, 870, 1380]
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
      text: 'Quantité',
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