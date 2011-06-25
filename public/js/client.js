
var App = Spine.Controller.create({

  keys: {
    // Back arrow
    "37": function() {
      this.navigateToSlide(this.slideId - 1);
    },
    // Forward arrow
    "39": function() {
      this.navigateToSlide(this.slideId + 1);
    }
  },

  init: function(){
    this.routes({
      "/slide/:id": function(id){
        this._activateSlide(parseInt(id, 10));
      }
    });

    $(window).keydown(this.proxy(function(e) {
      var action = this.keys[e.which];
      if (action) {
        action.call(this);
      }
    }));

    this._bindSocket();

  },

  _bindSocket: function() {
    this.socket.on('changeto', this.proxy(function(slideId) {
      this.navigateToSlide(slideId);
    }));

    // Handle initial slide separately. Jump to current slide only if 
    // user did not request slide by url.
    this.socket.on('startfrom', this.proxy(function(slideId) {
      if (!window.location.hash) {
        this.navigateToSlide(slideId);
      }
    }));

    this.socket.on("disconnect", function() {
       $("body").text("Disconnected!");
       $("body").css("color", "red").css("font-size", "4em");
       setTimeout(function() {
        window.location.reload();
       }, 2000);

     });

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

  var connection = io.connect();

  window.app = App.init({
    el: $(".slide"),
    socket: connection.socket.of("/slides")
  });

  Spine.Route.setup();


});




