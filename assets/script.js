// document.body.onload = addElement;

// function addElement () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 
//   // and give it some content 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("table1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }
// addElement();

// let svg = dimple.newSvg("#Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police", 600, 400);
// d3.tsv("/data/example_data.tsv", function (data) {
//   data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"]);
//   let myChart = new dimple.chart(svg, data);
//   myChart.setBounds(60, 30, 505, 305);
//   let x = myChart.addCategoryAxis("x", "Month");
//   x.addOrderRule("Date");
//   myChart.addMeasureAxis("y", "Unit Sales");
// //   let s = myChart.addSeries(null, dimple.plot.line);
//   myChart.draw();

// });

// let graph;

// graph = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');

// graph.addEventListener('mouseover',() => {
//     myChart.draw();
// })
// let table = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');
addEventListener("load", addInlineDataGraph);

function addInlineDataGraph() {
  const table = document.getElementById('table1');
  const parentTab = table.parentNode;

  let divGraph = document.createElement('div');
  divGraph.id = "datavis-div1";

  parentTab.insertBefore(divGraph, table);
  let svg = dimple.newSvg("#"+divGraph.id, 590, 750);
  let data = getDataFromTable(table); 
  let myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 705);
  let x = myChart.addCategoryAxis("x", "Year");
  let y = myChart.addMeasureAxis("y", "Nombre");
  myChart.addLegend(60, 10, 500, 20, "right");
  myChart.addSeries("Country", dimple.plot.line, [x, y]);
  myChart.draw();
}


// // Requires a DOM element
// function getDataFromTable(table) {
//     let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     const rowsNbre = rows.length;
//     let dataObj = [];
  
//     // Stores years for Y data
//     let years = [];
  
//     for (let i = 0; i < rowsNbre; i++) {
  
//       // Skip if it's the first row (titles)
//       if(i === 0) {
//         let cells = rows[0].getElementsByTagName('th');
//         let celluleNbre = cells.length;
  
//         for (let j = 0; j < celluleNbre; j++) {
//           // Skip first two matches (they're empty)
//           if (j < 2) continue;
//           // Push the data for the rest
//           years.push(cells[j].innerHTML);
//         }
//         continue;
//       }
  
//       // Otherwise loop through the data
//       let cells = rows[i].getElementsByTagName('td');
//       let cellsLength = cells.length;
  
//       let rowCountry = cells[0].innerHTML;
  
//       for (let j = 1; j < cellsLength; j++) {
//           let dataPoint = {"Country":rowCountry};
//           dataPoint["Year"] = years[j-1];
//           let nb = parseFloat(cells[j].innerHTML.replace(",", "."))*1000;
//           dataPoint["Nombre"] = Number.isNaN(nb) ? 0 : nb;
//           dataObj.push(dataPoint);
//       }
//       // End cells loop
  
//     }
//     // End row loop
  
//     return dataObj;
  
//   }

//   addEventListener("load", addInlineDataGraph);

// function addInlineDataGraph() {
//   const table = document.getElementById('table2');
//   const parentTab = table.parentNode;

//   let divGraph = document.createElement('div');
//   divGraph.id = "datavis-div2";

//   parentTab.insertBefore(divGraph, table);

//   let svg = dimple.newSvg("#"+divGraph.id, 590, 800);
//   let data = getDataFromTable(table); 
//   console.log(data);
//   let myChart = new dimple.chart(svg, data);
//   myChart.setBounds(60, 30, 505, 705);
//   let x = myChart.addCategoryAxis("x", "Year");
//   let y = myChart.addMeasureAxis("y", "Nombre");
//   myChart.addLegend(60, 10, 500, 20, "right");
//   myChart.addSeries("Country", dimple.plot.line, [x, y]);
//   myChart.draw();
// }


// // Requires a DOM element
// function getDataFromTable(table) {
//     let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//     const rowsNbre = rows.length;
//     let dataObj = [];
  
//     // Stores years for Y data
//     let years = [];
  
//     for (let i = 0; i < rowsNbre; i++) {
  
//       // Skip if it's the first row (titles)
//       if(i === 0) {
//         let cells = rows[0].getElementsByTagName('th');
//         let celluleNbre = cells.length;
  
//         for (let j = 0; j < celluleNbre; j++) {
//           // Skip first two matches (they're empty)
//           if (j < 2) continue;
//           // Push the data for the rest
//           years.push(cells[j].innerHTML);
//         }
//         continue;
//       }
  
//       // Otherwise loop through the data
//       let cells = rows[i].getElementsByTagName('td');
//       let cellsLength = cells.length;
  
//       let rowCountry = cells[0].innerHTML;
  
//       for (let j = 1; j < cellsLength; j++) {
//           let dataPoint = {"Country":rowCountry};
//           dataPoint["Year"] = years[j-1];
//           let nb = parseFloat(cells[j].innerHTML.replace(",", "."))*1000;
//           dataPoint["Nombre"] = Number.isNaN(nb) ? 0 : nb;
  
//           dataObj.push(dataPoint);
//       }
//       // End cells loop
  
//     }
//     // End row loop
  
//     console.log(dataObj);
//     return dataObj;
  
//   }