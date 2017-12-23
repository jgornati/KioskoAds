$(document).ready(function() {


// script para scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function(){

 var time = 5; // time in seconds
 
 var $progressBar,
 $bar, 
 $elem, 
 isPause, 
 tick,
 percentTime;
 
    //Init the carousel
    $("#owl-demo").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      navigation : false,
      navigationText: [""],
      singleItem : true,
      pagination: false,
      transitionStyle : "backSlide",
      afterInit : progressBar,
      afterMove : moved,
      loop: true
      //startDragging : pauseOnDragging
    });

    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }

    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
      //$progressBar.append($bar).insertAfter($elem);

    }

    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };

    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
         width: percentTime+"%"
       });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }

    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

    $('#icon-left').on('click', function(){
      $elem.trigger('owl.next');
    });

    $('#icon-right').on('click', function(){
      $elem.trigger('owl.prev');
    })

  });



});






