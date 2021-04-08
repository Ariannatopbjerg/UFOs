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

function handleClick(){
    // create function for D3 to lookf for the #datetime id in the HTML tags
    // .property("value"): grab date values and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");
    // set default filter and add to new variable
    let filterData = tableData;
    // Chect to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply 'filter' to the table data to only keep the rows
        // where the 'datetime' value matches the filter value
        filterData = filterData.filter(row => datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

//Have D3.js to listen for the button click on webpage
// code will be tied to the filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);