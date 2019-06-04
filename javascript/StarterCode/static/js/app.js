// from data.js
//var tableData = data;

var tbody = d3.select("tbody");


// YOUR CODE HERE!
function createTable(searchData){
    
    var Parent = document.getElementById("tbodyold");
   while(Parent.hasChildNodes())
   {
      Parent.removeChild(Parent.firstChild);
   }
searchData.forEach((table) => {
  var row = tbody.append("tr");
  Object.entries(table).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
}
createTable(data);

//var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

//var inputField = d3.select("#form-control");

//var tableData = data;

// Select the submit button
//var submit = d3.select("#filter-btn");

button.on("click", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
    
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

 
  var filteredData = data.filter(info => info.datetime === inputValue);

  
    createTable(filteredData);
});


