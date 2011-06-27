
if (!window.console || !window.console.log) {
    window.console = {
      log:  function() {}
    };
}

$(function(){

  $(".here").text(window.location.href).attr("href",window.location.href);

});
