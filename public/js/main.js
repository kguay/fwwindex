$(document).ready(function () {
  
  $('table').show();
  
  $('#fww').DataTable( {
    "lengthMenu": [[10, 25, 50], [10, 25, 50]],
    "sDom": '<"top">rt<"bottom"lp><"clear">',
    "order": [[ 2, "desc" ]]
  } );
  
  oTable = $('#fww').DataTable();   //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said
  $('#filter').keyup(function(){
        oTable.search($(this).val()).draw() ;
  })
  
  
  // Load JSON file
   // $.getJSON("fww.json", function(json) {
   //
   //   // drawTable(json);
   //
   //   function drawTable(data) {
   //     for (var i = 0; i < data.length; i++) {
   //       drawRow(data[i]);
   //     }
   //   }
   //
   //   function drawRow(rowData) {
   //     var row = $("<tr />");
   //     $("#fww").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
   //     row.append($("<td>" + rowData.Headline + "</td>"));
   //     row.append($("<td>" + rowData.Author + "</td>"));
   //     row.append($("<td>" + rowData.Issue + "</td>"));
   //     row.append($("<td>" + rowData.Month + "</td>"));
   //     row.append($("<td>" + rowData.Year + "</td>"));
   //     row.append($("<td>" + rowData.Page + "</td>"));
   //   }
   //
   // });

  
    //
  // $('#filter').focus();
  //
  // if ($(window).width() < 767){
  //   $('td:nth-child(4),th:nth-child(4)').hide();
  //   $('td:nth-child(5),th:nth-child(5)').hide();
  // }
  // else {
  //   $('td:nth-child(4),th:nth-child(4)').show();
  //   $('td:nth-child(5),th:nth-child(5)').show();
  // }
  // $(window).resize(function () {
  //   if ($(window).width() < 767){
  //     $('td:nth-child(4),th:nth-child(4)').hide();
  //     $('td:nth-child(5),th:nth-child(5)').hide();
  //   }
  //   else {
  //     $('td:nth-child(4),th:nth-child(4)').show();
  //     $('td:nth-child(5),th:nth-child(5)').show();
  //   }
  // });
  //
  //
  // (function ($) {
  //
  //   $('#filter').keyup(function (event) {
  //
  //     if ($(this).val().length > 3 || event.which == 13){
  //       $('table').show();
  //       $('.spacer').hide();
  //       $('#home').hide();
  //       $('#donate').hide();
  //       $('#about').hide();
  //
  //       var rex = new RegExp($(this).val(), 'i');
  //       $('tbody tr').hide();
  //       $('tbody tr').filter(function () {
  //         return rex.test($(this).text());
  //       }).show();
  //     }
  //     else {
  //       $('table').hide();
  //       $('.spacer').show();
  //       $('#home').show();
  //     }
  //   })
  //
  // }(jQuery));
  //
  // $('tbody tr td').click(function() {
  //   $('#filter').val($(this).html());
  //   $('#filter').keyup();
  // });
  
  

  // $('#about').hide();
  // $('#donate').hide();
  // $('#print').hide();
  //
  // // About Page
  // $('#about_link').click(function() {
  //   $('.spacer').hide();
  //   $('table').hide();
  //   $('#home').show();
  //   $('#donate').hide();
  //   $('#about').show();
  //   $('#print').hide();
  // });
  // // Print Page
  // $('#print_link').click(function() {
  //   $('.spacer').hide();
  //   $('table').hide();
  //   $('#home').show();
  //   $('#donate').hide();
  //   $('#about').hide();
  //   $('#print').show();
  // });
  // // Donate Page
  // $('#donate_link').click(function() {
  //   $('.spacer').hide();
  //   $('table').hide();
  //   $('#home').show();
  //   $('#donate').show();
  //   $('#about').hide();
  //   $('#print').hide();
  // });
    
    
    
  // SORT from
  // https://code.tutsplus.com/tutorials/
  //  using-jquery-to-manipulate-and-filter-data--net-5351

  //grab all header rows
  // $('thead th').each(function(column) {
  //   $(this).addClass('sortable').click(function(){
  //     var findSortKey = function($cell) {
  //       return $cell.find('.sort-key').text().toUpperCase() + ' ' + $cell.text().toUpperCase();
  //     };
  //     var sortDirection = $(this).is('.sorted-asc') ? -1 : 1;
  //
  //     //step back up the tree and get the rows with data
  //     //for sorting
  //     var $rows = $(this).parent().parent().parent().find('tbody tr:visible').get();
  //
  //     //loop through all the rows and find
  //     $.each($rows, function(index, row) {
  //       row.sortKey = findSortKey($(row).children('td').eq(column));
  //     });
  //
  //     //compare and sort the rows alphabetically
  //     $rows.sort(function(a, b) {
  //       if (a.sortKey < b.sortKey) return -sortDirection;
  //       if (a.sortKey > b.sortKey) return sortDirection;
  //       return 0;
  //     });
  //
  //     //add the rows in the correct order to the bottom of the table
  //     $.each($rows, function(index, row) {
  //       $('tbody').append(row);
  //       row.sortKey = null;
  //     });
  //
  //     //identify the column sort order
  //     $('th').removeClass('sorted-asc sorted-desc');
  //     var $sortHead = $('th').filter(':nth-child(' + (column + 1) + ')');
  //     sortDirection == 1 ? $sortHead.addClass('sorted-asc') : $sortHead.addClass('sorted-desc');
  //
  //     //identify the column to be sorted by
  //     $('td').removeClass('sorted')
  //     .filter(':nth-child(' + (column + 1) + ')')
  //     .addClass('sorted');
  //
  //     $('.visible td').removeClass('odd');
  //     zebraRows('.visible:even td', 'odd');
  //   });
  // });
    
});
