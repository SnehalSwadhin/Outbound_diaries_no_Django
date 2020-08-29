(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');
  var threshold = 200;
  var toggled;

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggled = toggleHeader(direction, curScroll);
    }
    if(toggled) {
      prevDirection = direction;
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    toggled = true;
    if (direction === 2 && curScroll > threshold) { 
      
      //replace 75 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
    else {
      toggled = false;
    }
    return toggled;
  };
  
  window.addEventListener('scroll', checkScroll);

})();