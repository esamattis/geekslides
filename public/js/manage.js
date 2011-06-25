

$(document).ready(function(){

  var current = 1;
  var event;
  var title = $("#current");

  if ('ontouchstart' in document.documentElement) {
    event = 'touchstart';
  }
  else {
    event = 'click';
  }

  var socket = io.connect();
  var manage = socket.socket.of("/manage");

  $("#next").bind(event, function () {
    current++;
    title.text(current);
    manage.emit("changeto", current);
    return false;
  });

  $("#previous").bind(event, function () {
    current--;
    title.text(current);
    manage.emit("changeto", current);
    return false;
  });


});
