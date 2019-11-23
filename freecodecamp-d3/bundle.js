(function(d3){
  'use strict';

  const svg = d3.select('svg');
  
  const height = parseFloat(svg.attr('height'));
  const width = +(svg.attr('width'));
  console.log(typeof width)

  const g = svg.append('g')
    .attr('transform',`translate(${width/2},${height/1.83})`)

  const circle = g.append('circle')
    .attr('r',height/2.3)
    .attr('stroke','yellow')
    .attr('fill','purple');

  
  const eyeSpacing = 100;
  const eyeYoffset = -70;
  const eyeRadius = height/20

  const leftEye = g.append('circle')
    .attr('r',eyeRadius)
    .attr('cx',- eyeSpacing)
    .attr('cy',eyeYoffset)
    .attr('stroke','yellow')
    .attr('fill','gold');

  const rightEye = g.append('circle')
    .attr('r',eyeRadius)
    .attr('cx', eyeSpacing)
    .attr('cy', eyeYoffset)
    .attr('stroke','yellow')
    .attr('fill','gold');
  
  const mouth = g.append('path')
    .attr('d',d3.arc()({
      innerRadius:0,
      outerRadius:170,
      startAngle:Math.PI/2,
      endAngle:Math.PI*3/2
    }))
    .attr('fill','gold');
}(d3));