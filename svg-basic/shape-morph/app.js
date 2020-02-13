var select = function(s) {
    return document.querySelector(s);
  },
    icons = select('#icons'),
    button = select('.button'),
    buttonText = document.getElementById("button-text")

var buttonTl = new TimelineMax({paused:true});
buttonTl.to('#download', 1, {
  morphSVG:{shape:'#checkmark'},
  ease:Elastic.easeInOut
})

button.addEventListener('click', function() {
  if (buttonTl.time() > 0) {
    buttonTl.reverse();
    
  } else {
    buttonTl.play(0);
  }
})

button.addEventListener('click', function() {
  
  if (button.classList.contains("saved")) {
    button.classList.remove("saved");
    buttonText.innerHTML = "Download";
  } else {
    button.classList.add("saved");
    buttonText.innerHTML = "Saved!";
  }
  
}, false);

