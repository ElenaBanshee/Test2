/*$(document).ready(function() {
  $('#initializeButton').click(function() {
    // Disable the button after it's been clicked
    $('#initializeButton').prop('disabled', true);
    tableau.extensions.initializeAsync().then(
      function() {        
        try {
          tableau.extensions.dashboardContent.dashboard.worksheets
            .find(w => w.name === 'IBCSW')
            .getUnderlyingDataAsync()
            .then(dataTable => {
              let cols = dataTable.columns.length;
              var total = dataTable.totalRowCount;
              $('#totalRow').html('<div>' + 'Rows: ' + total + '</div>');
              $('#totalCol').html('<div>' + 'Cols: ' + cols + '</div>');
            });
        } catch (err) {
          $('#totalRow').html('Error: ' + err.toString());
        }
        ///////////////////////
        var dashboard = tableau.extensions.dashboardContent.dashboard;
        // Display the name of dashboard in the UI
        $('#resultBox').html(
          "I'm running in a dashboard named <strong>" +
            dashboard.name +
            '</strong>'
        );
        try {          
          const worksheets =
            tableau.extensions.dashboardContent.dashboard.worksheets;
          $('#testwl').html(worksheets.length);
          // Find a specific worksheet
          var worksheet = worksheets.find(function(sheet) {
            return sheet.name === 'IBCSW';
          });

          $('#worksheetName').html(worksheet.name);
          console.log(worksheet.name);          
          tableau.extensions.dashboardContent.dashboard.worksheets
            .find(w => w.name === 'IBCSW')
            .getUnderlyingDataAsync()
            .then(dataTable => {
              let field = dataTable.columns.find(              
                column => column.fieldName === 'F1'
              );
              let list = [];
              for (let row of dataTable.data) {
                list.push(row[field.index].value);
              }
              let values = list.filter((el, i, arr) => arr.indexOf(el) === i);              
              try {                
                var numCols = 1;
                $.each(values, function(i) {
                  if (!(i % numCols)) tRow = $('<tr>');
                  var tCell = $('<td>').html(values[i]);
                  $('#tableDiv').append(tRow.append(tCell));
                });
              } catch (err) {
                $('#tableDiv').html(
                  'Error while Initializing: ' + err.toString()
                );
              }              
            });
        } catch (err) {
          $('#resultBox').html('Error while Initializing: ' + err.toString());
        }        
      },
      function(err) {
        // something went wrong in initialization
        $('#resultBox').html('Error while Initializing: ' + err.toString());
      }
    );
  });
});
*/

/*(function() {});
  $(document).ready(function() {
    tableau.extensions.initializeAsync().then(
      function() {*/
/* body of function  */
/* controls what the extension does */
/* extension calls other functions here */

/*tableau.extensions.dashboardContent.dashboard.worksheets
          .find(w => w.name === 'IBCSW')
          .getUnderlyingDataAsync()
          .then(dataTable => {
            let arrVal = [
              'F1',
              'FxLY Sales',
              'FxB Sales',
              'FY19 Sales',
              '% vs FxLY',
              'vs FxB',
              'FxLY Margin %',
              'FxB Margin %',
              'FY19 Margin %',
              'YTG Fc',
              'Act + Fc',
              '% Act + Fc  vs FxLY',
              '% Act + Fc  vs FxB'
            ];

            //////////////////////////
            let field = dataTable.columns.find(              
              column => column.fieldName === 'F1'
            );
            let list = [];
            for (let row of dataTable.data) {
              list.push(row[field.index].value);
            }
            let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
            //////////////////////////
            try {                
              var numCols = 1;
              $.each(values, function(i) {
                if (!(i % numCols)) tRow = $('<tr>');
                var tCell = $('<td>').html(values[i]);
                $('#tableDiv').append(tRow.append(tCell));
              });
            } catch (err) {
              $('#tableDiv').html(
                'Error while Initializing: ' + err.toString()
              );
            }              
          });
        })      
    },
      function(err) {
        // Something went wrong in initialization.
        $('#tableDiv').html('Error while Initializing: ' + err.toString());
      }    */

/*  extension can define other functions here as needed */
/* function createVal(arrValue) {
    let field = dataTable.columns.find(column => {
      column.fieldName === arrValue;
    });
    let list = [];
    for (let row of dataTable.data) {
      list.push(row[field.index].value);
    }
    let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
    return values;
  } */

(function() {
  $(document).ready(function() {
    tableau.extensions.initializeAsync().then(function() {
      const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
      $('#test1').text(dashboardName);
    });
  });
})();
