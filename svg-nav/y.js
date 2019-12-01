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
    if(icon.classList.contains('js-x')){
      return;
    }
    tlm.staggerTo(lines,0.15,{scaleX:1.5,repeat:1,yoyo:true,ease:Power2.easeInOut},0.175)
  })

  toggleMenu
    .to(lineTwo,.25,{scaleX:0},0)
    .to(lineOne,.25,{transformOrigin:"50% 50%",y:8,ease:Power2.easeInOut},'slide')
    .to(lineThree,.25,{transformOrigin:"50% 50%",y:-8,ease:Power2.easeInOut},'slide')
    .to(icon,.5,{rotation:360,ease:Power4.easeInOut})
    .to(lineOne,.25,{rotation:45,ease:Power2.easeInOut},'cross')
    .to(lineThree,.25,{rotation:-45,ease:Power2.easeInOut},'cross')

  icon.addEventListener('click', _ =>{
    icon.classList.toggle('js-x')
    toggleMenu.reversed() ? toggleMenu.play() :toggleMenu.reverse()
  })
};