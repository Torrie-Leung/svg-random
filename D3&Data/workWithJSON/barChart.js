//select the contianer fisrt
const svg = d3.select('.canvas')
  .append('svg')
    .attr('width',600)
    .attr('height',600);

//create margins and dimensions
const margin = {top:2,right:2,bottom:10,left:10};
const grpahWidth = 600 - margin.left -margin.right;
const grpahHeight = 600 - margin.top -margin.bottom;

const graph =svg.append('g')
  .attr('width',grpahWidth)
  .attr('height',grpahHeight)
  .attr('transform',`translate(${margin.left},${margin.top})`)

d3.json('menu.json').then(data => {
  const min = d3.min(data, d => d.orders);
  const max = d3.max(data, d => d.orders);

  const y = d3.scaleLinear()
    .domain([0,max])
    .range([0,600]);

  const x = d3.scaleBand()
    .domain(data.map(item => item.name))
    .range([0,600])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const rects = graph.selectAll('rect')
    .data(data)
  //console.log(rects)
  rects.attr('width',x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x',(d,i) => x(d.name))

  rects.enter()
    .append('rect')
      .attr('width',x.bandwidth)
      .attr('height', d => y(d.orders))
      .attr('fill', 'orange')
      .attr('x',(d,i) => x(d.name))
})