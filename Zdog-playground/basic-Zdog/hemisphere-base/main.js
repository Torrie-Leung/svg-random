// Made with Zdog

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-svg',
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
  onDragEnd: function() {
  isSpinning = true;
}
});

new Zdog.Hemisphere({
  addTo: illo,
  diameter: 120,
  // fill enabled by default
  // disable stroke for crisp edge
  stroke: false,
  color: '#8bc34a',
  backface: '#EA0',
});

function animate() {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
