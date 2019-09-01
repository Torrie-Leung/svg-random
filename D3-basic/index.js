// const a = document.querySelectorAll('div');
// const b = d3.selectAll('div');
// console.log(a,b)
const canvas = d3.select('.canvas');

const svg = canvas.append('svg')
    .attr('height',600)
    .attr('width',600);

const group = svg.append('g')
  .attr('transform','translate(0,100)');

//append shapes to svg container
group.append('rect')
  .attr('width',200)
  .attr('height',100)
  .attr('fill','blue')
  .attr('x',20)
  .attr('y',20);

group.append('circle')
  .attr('r',45)
  .attr('cx',300)
  .attr('cy',70)
  .attr('fill','pink');


group.append('line')
  .attr('x1',370)
  .attr('y1',20)
  .attr('x2',400)
  .attr('y2',120)
  .attr('stroke','rgba(255,30,80)');

svg.append('text')
  .attr('x',20)
  .attr('y',200)
  .attr('fill','grey')
  .text('Hey,dummies ：)')
  .style('font-family','arial');