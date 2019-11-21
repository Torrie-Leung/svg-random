const cubes = new Zdog.Illustration({
  element: '.cubes',
  resize: 'fullscreen',
  dragRotate: true,
})

const cubeOne = new Zdog.Box({
  addTo: cubes,
  width:200,
  height:200,
  depth:200,
  stroke:false,
  leftFace: '#da0',
  rightFace: '#de5',
  topFace:'#ad3',
  bottomFace:'#76d'
})
function animateCubes(){
  cubes.rotate.y += 0.001;
  cubes.rotate.x += 0.002;
  cubes.updateRenderGraph()
  requestAnimationFrame(animateCubes)
}

animateCubes()
