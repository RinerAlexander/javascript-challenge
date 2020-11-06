// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

button.on("click", function() {

    var input = d3.select("#datetime").property("value");


    var results = timeFilter(input);

    tbody.text("");
    
    results.forEach(entry => {
      
        var row = tbody.append("tr");
      
        Object.entries(entry).forEach(([key, value]) => {

          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);

        });
      });
  });

function timeFilter(date){
    return tableData.filter(entry => entry.datetime==date);
};