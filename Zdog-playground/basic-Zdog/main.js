const cubes = new Zdog.Illustration({
  element: '.cubes',
  resize: 'fullscreen',
  dragRotate: true,
  zoom:2
})

const cubeOne = new Zdog.Box({
  addTo: cubes,
  width:60,
  height:60,
  depth:60,
  stroke:false,
  leftFace: '#da0',
  rightFace: '#de5',
  topFace:'#ed0',
  bottomFace:'#76d'
})

const cubeTwo = new Zdog.Box({
  addTo: cubes,
  width:30,
  height:30,
  depth:30,
  stroke:false,
  leftFace: '#da0',
  rightFace: '#de5',
  topFace:'#ed0',
  bottomFace:'#76d',
  translate: {
    z:100
  }
})
const cubeThree = cubeTwo.copy({
  translate: {
    z:-100
  }
})

function animateCubes(){
  cubes.rotate.y += 0.011;
  cubes.rotate.x += 0.012;
  cubeTwo.rotate.z += 0.01
  cubeThree.rotate.z += 0.11
  cubes.updateRenderGraph()
  requestAnimationFrame(animateCubes)
}

animateCubes()
