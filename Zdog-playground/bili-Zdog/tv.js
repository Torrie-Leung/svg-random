const tv = new Zdog.Illustration({
  element:'.tv',
  zoom:3,
  dragRotate: true,
});

let ticker = 0;
let cycleCount = 250;
function animation(){
  let progress = ticker / cycleCount;
  // apply easing to rotation
  let tween = Zdog.easeInOut( progress % 1, 3 );
  tv.rotate.y = tween*Zdog.TAU;
  ticker++;
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

//eyes
let eye_1 = new Zdog.Shape({
  addTo:tv,
  path: [
    { x: -8 },//start at 1st point
    { x: 8 },//line to 2nd point
  ],
  translate:{
    z:28,
    x:-15,
    y:-10
  },
  rotate: { z:-(Zdog.TAU/12)},
  stroke:2,
  color:'#000'
});

let eye_2 = eye_1.copy({
  translate:{
    z:28,
    x:15,
    y:-10
  },
  rotate: { z:(Zdog.TAU/12)}
})

//mouth
let mouth = eye_1.copy({
  translate:{
    z:28,
    y:10
  },
  rotate: { z:0}
})

//athena
eye_1.copy({
  path:[
    { x :-10 },
    { x: 10}
  ],
  translate:{
    z:-5,
    x:-15,
    y:-40
  },
  stroke:10,
  rotate: { z:(Zdog.TAU/9)}
})

eye_1.copy({
  path:[
    { x :-10 },
    { x: 10}
  ],
  translate:{
    z:-5,
    x:15,
    y:-40
  },
  stroke:10,
  rotate: { z:-(Zdog.TAU/9)}
})