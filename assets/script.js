// function that generate random color in rgba for the every line in the chart
function getRandomRgb() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


addEventListener("load", addInlineDataGraph);

function addInlineDataGraph() {
  let table = document.getElementById('table1');
  let parentTab = table.parentNode;

  let divGraph = document.createElement('div');
  divGraph.id = "FirstChartDiv";
  parentTab.insertBefore(divGraph, table);

  let svg = dimple.newSvg("#"+divGraph.id, 590, 750);
  let data = getDataFromTable(table); // à crée ---> 
  let myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 705);
  let x = myChart.addCategoryAxis("x", "Year");
  let y = myChart.addMeasureAxis("y", "Numbers");
  // myChart.addLegend(60, 10, 500, 20, "right");
  myChart.addSeries("Country", dimple.plot.line, [x, y]);
  myChart.ease = "bounce";
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
  ]; 
  myChart.draw();
}

// function getDataFromTable(table) {
//     let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     let rowsNbre = rows.length;
//     let dataObj = [];
//     let years = [];

// }





// second chart 

  addEventListener("load", addSecondInlineDataGraph);

function addSecondInlineDataGraph() {
  let table = document.getElementById('table2');
  let parentTab = table.parentNode;

  let divGraph = document.createElement('div');
  divGraph.id = "SecondChartDiv";

  parentTab.insertBefore(divGraph, table);
  // // Get data from an external location and generate the chart when it returns
  // d3.json("MyAwesomeDataSource.json", function (data) {
  // 	// Add an svg object to the body element
  // 	var svg = dimple.newSvg("body", 1200, 800);
  // 	// Create a new chart object based on this data and svg
  // 	var myChart = new dimple.chart(svg, data);
  // 	...
  // });
  // // Check the number of axes added before and after adding
  // console.log(myChart.axes.length); // Logs 0
  // myChart.addMeasureAxis("x", "Sales Volume");
  // console.log(myChart.axes.length); // Logs 1
  let svg = dimple.newSvg("#"+divGraph.id, 590, 800);
  let data = getDataFromTable(table); 
  let myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 705);
  let x = myChart.addCategoryAxis("x", "Year");
  let y = myChart.addMeasureAxis("y", "Nombre");
  // myChart.addLegend(60, 10, 500, 20, "right");
  myChart.addSeries("Country", dimple.plot.line, [x, y]);
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
    new dimple.color(getRandomRgb())
  ]; 
  myChart.draw();
}


// Requires a DOM element
function getDataFromTable(table) {
    let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let rowsNbre = rows.length;
    let dataObj = [];
  
    // Stores years for Y data
    let years = [];
  
    for (let i = 0; i < rowsNbre; i++) {
  
      // Skip if it's the first row (titles)
      if(i === 0) {
        let cells = rows[0].getElementsByTagName('th');
        let celluleNbre = cells.length;
  
        for (let j = 0; j < celluleNbre; j++) {
          // Skip first two matches (they're empty)
          if (j < 1) continue;
          // Push the data for the rest
          years.push(cells[j].innerHTML);
        }
        continue;
      }
  
      // Otherwise loop through the data
      let cells = rows[i].getElementsByTagName('td');
      let cellsLength = cells.length;
  
      let rowCountry = cells[0].innerHTML;
  
      for (let j = 1; j < cellsLength; j++) {
          let dataPoint = {"Country":rowCountry};
          dataPoint["Year"] = years[j-1];
          let nb = parseFloat(cells[j].innerHTML.replace(",", "."))*1000;
          dataPoint["Nombre"] = Number.isNaN(nb) ? 0 : nb;
  
          dataObj.push(dataPoint);
      }
      // End cells loop
  
    }
    // End row loop
  
    return dataObj;
  
  }

  // remote data in real time via ajax:

  // let table = document.getElementById('firstHeading');
  // let parentTab = table.parentNode;

  // let divGraphInRealTime = document.createElement('div');
  // divGraph.id = "divGraphInRealTime";


let data = [];

let table = document.getElementById('table1');

let years = table.getElementsByTagName('tr')[1].getElementsByTagName('th');
let yearsArray = [];

for(let i = 2; i < years.length; i++) {
  let content = years[i].innerHTML;
  yearsArray.push(content);
}

let rows = table.getElementsByTagName('tr');

for(let i = 2; i < rows.length; i++) {
  let cells = rows[i].getElementsByTagName('td');

  for (let j = 0; j < cells.length; j++) {
    if(j === 0) {
      var pays = cells[j].innerHTML;
    }
    else {
      data.push({data:cells[j].innerHTML, pays:pays, year:yearsArray[j-1]});
    }
  }

}

console.log(data);