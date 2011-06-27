
if (!window.console || !window.console.log) {
    window.console = {
      log:  function() {}
    };
}

$(function(){
  var url = window.location.href.replace(/#.*$/, "");
  $(".here").text(url).attr("href",url);
});
