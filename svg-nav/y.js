window.onload = function(){
  const icon = document.querySelector('.icon')
  const lineOne = icon.querySelector('.line-one')
  const lineTwo = icon.querySelector('.line-two')
  const lineThree = icon.querySelector('.line-three')
  const lines = [lineOne,lineTwo,lineThree]
  const tlm = new TimelineMax({});
  const toggleMenu = new TimelineMax({paused:true,reversed:true})
  // TweenMax.to(icon,2,{x:100});
  icon.addEventListener('mouseenter', () => {
    // tlm
    //   .to(lineOne,0.5,{scaleX: 1.5})
    //   .to(lineOne,0.5,{scaleX: 1})
    tlm.staggerTo(lines,0.25,{scaleX:1.5,repeat:5,yoyo:true},0.175)
  })
};