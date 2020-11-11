// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");
// on the click of the only button, grab the value of the text field and 
//use that to filter data.
button.on("click", function() {

    var time = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    var results = ufoFilter(time,city,state,country,shape);

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
//checks if each entry matches filter peramiters, if provided
function ufoFilter(date,city,state,country,shape){
    return tableData.filter(function(entry){
      if (date){
        if(entry.datetime!=date){
          return false;
        };
      };
      if (city){
        if(entry.city!=city){
          return false;
        };
      };
      if (state){
        if(entry.state!=state){
          return false;
        };
      };
      if (country){
        if(entry.country!=country){
          return false;
        };
      };
      if (shape){
        if(entry.shape!=shape){
          return false;
        };
      };
      return true;
    });
};