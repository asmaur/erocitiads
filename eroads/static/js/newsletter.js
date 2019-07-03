$(document).ready(function(){

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

  if($('#newsForm').length){
    $('#newsForm').on('submit', function (e) {
         
         var $this = $(this);
         
       if (e.isDefaultPrevented()) {
          $.notify("Enter a valide email", "warn");
       } else {
        
        var email = $("#email").val();
       
        e.preventDefault();
        values = {"email":email}
        console.log(values);



        $.ajax({
              url: "newsletter/",
              type: "POST",
              contentType: "application/json;charset=utf-8",             
              contentType: 'application/json',
              data: JSON.stringify({ "email":email }),

              cache: false,

              beforeSend: function(xhr){

                $.notify("Processando ....", "info");

                xhr.setRequestHeader("X-CSRFToken", csrftoken);           
              },              
           
              success: function(data){
                console.log(data);
                $.notify(data.message, "success");
                
              },

              error: function(error){
              //console.log(error);
                  $.notify(error.responseJSON.message, "error");
              },

        });
        
       }
    });
  }
  
});