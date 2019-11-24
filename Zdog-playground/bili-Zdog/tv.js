const tv = new Zdog.Illustration({
  element:'.tv',
  zoom:3,
  dragRotate: true,
});

function animation(){
  tv.updateRenderGraph();
  requestAnimationFrame(animation);
}
animation();

let box = new Zdog.Box({
  addTo: tv,
  width:80,
  height:60,
  depth:40,
  stroke:15,
  cornerRadius:15,
  color:'#fff'
})

const roundRectF = new Zdog.RoundedRect({
  addTo: tv,
  width:80,
  height:60,
  stroke:3,
  color:'#000',
  cornerRadius:12,
  translate:{z:28}
})

const roundRectB = roundRectF.copy({
  translate:{z:-28}
})