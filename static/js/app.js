// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");
// code: declared variable; d3.select is telling JavaScript to look for the <tbody> tags i

function buildTable(data){
    // clearing data: tells J.S. to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data.
    tbody.html("");
    // loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // tell J.S. to find the <tbody> tag within the HTML and add the "tr" -> tablerow; 
        let row = tbody.append("tr");
        // Reference one object from the UFO sighting array. Adding dataRow as the arguement: want the values to go into the dataRow. for Each((val)): want one object per row
        Object.values(dataRow).forEach((val) => {
            // create a variable to append data to table
            let cell = row.append("td");
            // add the values. chain .text(val): extracting only the text of the value
            cell.text(val);
            }
        );
    });
}