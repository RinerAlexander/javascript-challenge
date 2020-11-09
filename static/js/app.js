// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");
// on the click of the only button, grab the value of the text field and 
//use that to filter data.
button.on("click", function() {

    var input = d3.select("#datetime").property("value");


    var results = timeFilter(input);

    tbody.text("");
    //take the filter and populate the html table with the results. 
    results.forEach(entry => {
      
        var row = tbody.append("tr");
      
        Object.entries(entry).forEach(([key, value]) => {

          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);

        });
      });
  });
//takes a date and returns the data logs that occured on that date.
function timeFilter(date){
    return tableData.filter(entry => entry.datetime==date);
};