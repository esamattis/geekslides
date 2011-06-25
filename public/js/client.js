
var App = Spine.Controller.create({


  init: function(){
    this.routes({
      "/slide/:id": function(id){
        this._activateSlide(parseInt(id, 10));
      }
    });


    this.keys = {
      // Back arrow
      "37": function() {
        this.navigateToSlide(this.slideId - 1);
      },
      // Forward arrow
      "39": function() {
        this.navigateToSlide(this.slideId + 1);
      }
    };

    $(window).keydown(this.proxy(function(e) {
      var action = this.keys[e.which];
      if (action) {
        action.call(this);
      }
    }));


  },



  _activateSlide: function(id) {
    this.slideId = id;

    if (id <= 0 || id > this.el.size()) {
      console.log("Slides of boundries");
      return;
    }

    this.el.removeClass("active");
    var slide = this.el.get(id - 1);
    $(slide).addClass("active");
  },



  navigateToSlide: function(id) {
    this.navigate("/slide", id, true);
  }


});



$(document).ready(function(){


  window.app = App.init({
    el: $(".slide")
  });

  Spine.Route.setup();

  var socket = io.connect();
  var slides = socket.socket.of("/slides");

  slides.on('changeto', function (slideId) {
    console.log("socket asks to change to", slideId);
    app.navigateToSlide(slideId);
  });


});




