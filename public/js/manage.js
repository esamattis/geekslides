
var NAV_EVENT;

if ('ontouchstart' in document.documentElement) {
  NAV_EVENT = 'touchstart';
}
else {
  NAV_EVENT = 'click';
}

var ManageApp = Spine.Controller.create({

  elements: {
    "#current": "title",
    "#slide-title": "slideTitle",
    "#max": "max",
    "#speaker-note": "speakerNote"
  },

  init: function() {
    this.current = parseInt(localStorage.currentSlideId, 10) || 1;
    this.max.text(this.slides.size());
    this.$("#next").bind(NAV_EVENT, this.proxy(this.next));
    this.$("#previous").bind(NAV_EVENT, this.proxy(this.previous));
    this.update();
  },

  next: function() {
      if (this.current < this.slides.size()){
        this.current++;
        this.update();
      }
      return false;
  },

  previous: function() {
      if (this.current > 1) {
        this.current--;
        this.update();
      }
      return false;
  },

  update: function() {
      this.title.text(this.current);
      localStorage.currentSlideId = this.current;

      var current = $(this.slides.get(this.current-1));
      this.slideTitle.text(current.find("h1").text());
      this.speakerNote.html(current.find(".speaker").html());

      this.socket.emit("changeto", this.current);

  }


});




$(document).ready(function(){

  var connection = io.connect();

  $.get("/", function(data) {
    var slides = $(".slide", data);
    window.manageapp = ManageApp.init({
      el: $("#manage"),
      socket: connection.socket.of("/manage"),
      slides: slides
    });
  });


});
