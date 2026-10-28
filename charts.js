// Pie Chart

new Chart(document.getElementById("pieChart"), {

type: 'pie',

data: {

labels: ['Cement','Steel','Sand','Bricks'],

datasets: [{

data: [30,40,15,15]

}]

}

});



// Bar Chart

new Chart(document.getElementById("barChart"), {

type: 'bar',

data: {

labels: ['Jan','Feb','Mar','Apr','May'],

datasets: [{

label: 'Cost (Lakhs)',

data: [12,15,18,20,24]

}]

}

});



// Line Chart

new Chart(document.getElementById("lineChart"), {

type: 'line',

data: {

labels: ['Project 1','Project 2','Project 3','Project 4','Project 5'],

datasets: [{

label: 'Predicted Cost',

data: [18,22,28,30,35],

fill:false,

tension:0.4

}]

}

});