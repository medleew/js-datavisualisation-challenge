// random color generator
function getRandomRgb() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


// first chart
const table1 = document.getElementById("table1");
const parentTab1 = table1.parentNode;

let divGraph1 = document.createElement("div");
divGraph1.id = "firstChart";
parentTab1.insertBefore(divGraph1, table1);
var data = [];
var years = table1.getElementsByTagName("tr")[1].getElementsByTagName("th");
var yearsArray = [];

for(let i = 2; i < years.length; i++) {
        let content = years[i].innerHTML;
        yearsArray.push(content);
}

var rows = table1.getElementsByTagName("tr");

for(let i = 2; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");

        for(let j = 0; j < cells.length; j++) {
                if(j === 0) {
                        var pays = cells[j].innerHTML;
                } else if(!isNaN(parseInt(cells[j].innerHTML))) {
                        data.push({data:parseInt(cells[j].innerHTML), pays:pays, years:yearsArray[j-1]});
                  }

        }
}

var svg = dimple.newSvg("#" + divGraph1.id, "100%", 450);
var myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 110, "90%", 305);
var x = myChart.addCategoryAxis("x", ["years", "pays"]);
var y = myChart.addMeasureAxis("y", "data");
y.ticks = 15;
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(10, 10, "100%", 200);
myChart.defaultColors = [
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb())
]; 
myChart.draw();

// Second chart

const table2 = document.getElementById('table2');
const parentTab2 = table2.parentNode;

let divGraph2 = document.createElement("div");
divGraph2.id = "secondChart";
parentTab2.insertBefore(divGraph2, table2);

var data = [];
var years = table2.getElementsByTagName("tr")[0].getElementsByTagName("th");
var yearsArray = [];

for(let i = 2; i < years.length; i++) {
        let content = years[i].innerHTML;
        yearsArray.push(content);
}

var rows = table2.getElementsByTagName("tr");

for(let i = 2; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");

        for(let j = 0; j < cells.length; j++) {
                if(j === 0) {
                        var pays = cells[j].innerHTML;
                }
                        
                else if(!isNaN(parseInt(cells[j].innerHTML))) {
                        data.push({data:parseInt(cells[j].innerHTML), pays:pays, years:yearsArray[j-1]});
                }

        }
}

    
var myChart = new dimple.chart(dimple.newSvg("#" + divGraph2.id, "100%", 550), data);
myChart.setBounds(35, 180, "90%", 305);
var x = myChart.addCategoryAxis("x", ["years", "pays"]);
x.addOrderRule("years", false);
var y = myChart.addMeasureAxis("y", "data");
y.ticks = 15;
myChart.addSeries("pays", dimple.plot.bar);
myChart.addLegend(10, 10, "100%", 200);
myChart.defaultColors = [
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb()),
  new dimple.color(getRandomRgb())
]; 
myChart.draw();

// graph 3 + Ajax

const bodyContent = document.getElementById("bodyContent");
// const parentTab3 = divGraph3.parentNode; 

var divGraph3 = document.createElement("div");
divGraph3.id = "ThirdChart";
// parentTab3.insertBefore(divGraph3, bodyContent);

var container = document.getElementById("content");
container.insertBefore(divGraph3, bodyContent);
var myChart;
var tableAjax = [];
var request = new XMLHttpRequest();

request.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);

request.onload = function() {
        
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    
  for(i = 0; i < data.length; i ++){
    
    let object = { 
        "data1": parseInt(data[i][0]),
        "data2": parseInt(data[i][1])

    }

    tableAjax.push(object)
} 
     myChart = new dimple.chart(dimple.newSvg("#" + divGraph3.id, "100%", 550), tableAjax);
    myChart.setBounds(35, 60, "90%", 450);
    var x = myChart.addCategoryAxis("x", "data1");
    x.addOrderRule("data1", false);
    var y = myChart.addMeasureAxis("y", "data2");
    y.ticks = 5;
    myChart.addSeries(null, dimple.plot.line);
    myChart.defaultColors = [
        new dimple.color("red"),
    ]; 
    myChart.draw();
    updateChart()
  } 
};

request.send();


function updateChart(){
    request.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);
    
    request.onload = function() {
        
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          
        for(i = 0; i < data.length; i ++){
          
          let object = { 
              "data1": parseInt(data[i][0]),
              "data2": parseInt(data[i][1])
           }
      
           tableAjax.push(object)
        }
        console.log(tableAjax)  

        myChart.data = tableAjax;
        myChart.draw();
        // setTimeout(function(){updateChart()}, 1000);


        }     
        
    }
    setTimeout(function(){updateChart()}, 1000);

    request.send()
    
}
