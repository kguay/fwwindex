$(document).ready(function () {
  // $('table').show();
  
  // $('table th:nth-child(4), table td:nth-child(4)').addClass('hidden-xs');
  // $('table th:nth-child(5), table td:nth-child(5)').addClass('hidden-xs');
  // $('table th:nth-child(6), table td:nth-child(6)').addClass('hidden');
  
  $('#fww').DataTable( {
    "lengthMenu": [[10, 25, 50], [10, 25, 50]],
    "sDom": '<"top">rt<"bottom"lp><"clear">',
    "order": [[ 2, "desc" ]],
    "search": {
        "regex": true
      }
  } );
  
  oTable = $('#fww').DataTable();   //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said
  
  $('#fww_wrapper').hide();
  
  
  $('#filter').keyup(function(){
    $('.big-spacer').css('display','none');
    $('#top-img').css('display','none');
    
    $('#fww').show();
    $('#fww_wrapper').show();
    oTable.search($(this).val()).draw() ;
  });
  
  $('#current-issue').click(function(){
    $('.big-spacer').css('display','none');
    $('#top-img').css('display','none');

    $('#fww').show();
    $('#fww_wrapper').show();
    $(window).on('hashchange', function() {
      var hash = window.location.hash.substr(1);
      oTable.search(hash).draw();
      $('#filter').val(hash);
    });
  });
  
  var hash = window.location.hash.substr(1);
  if(hash != ""){
    $('.big-spacer').css('display','none');
    $('#top-img').css('display','none');
    $("#filter").val(hash);
    $('#fww').show();
    $('#fww_wrapper').show();
    oTable.search(hash).draw();
    $('#filter').val(hash);
  }
  // else if(hash == "current-issue"){
  //   $('.big-spacer').css('display','none');
  //   $('#top-img').css('display','none');
  //   $("#filter").val(hash);
  //   $('#fww').show();
  //   $('#fww_wrapper').show();
  //   oTable.search('259').draw();
  //   $('#filter').val('259');
  // }

  // $('table th:nth-child(4), table td:nth-child(4)').addClass('hidden-xs');
  // $('table th:nth-child(5), table td:nth-child(5)').addClass('hidden-xs');

  
  
});