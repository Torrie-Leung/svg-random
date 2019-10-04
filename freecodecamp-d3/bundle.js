(function(d3){
  'use strict';

  const svg = d3.select('svg');
  
  const height = parseFloat(svg.attr('height'));
  const width = +(svg.attr('width'));
  console.log(typeof width)

  const circle = svg.append('circle')
    .attr('r',height/2)
    .attr('cx',width/2)
    .attr('cy',height/2)
    .attr('stroke','yellow')
    .attr('fill','purple');

  const eyeSpacing = 100;
  const eyeYoffset = -70;

  const leftEye = svg.append('circle')
    .attr('r',height/20)
    .attr('cx',width/2 - eyeSpacing)
    .attr('cy',height/2 + eyeYoffset)
    .attr('stroke','yellow')
    .attr('fill','purple');

  const rightEye = svg.append('circle')
    .attr('r',height/20)
    .attr('cx',width/2 + eyeSpacing)
    .attr('cy',height/2 + eyeYoffset)
    .attr('stroke','yellow')
    .attr('fill','purple');
  const g = svg.append('g')
    .attr('transform',`translate(${width/2},${height/2})`)
  const mouth = g.append('path')
    .attr('d',d3.arc()({
      innerRadius:80,
      outerRadius:100,
      startAngle:Math.PI/2,
      endAngle:Math.PI*3/2
    }))
    .attr('fill','gold');
}(d3));