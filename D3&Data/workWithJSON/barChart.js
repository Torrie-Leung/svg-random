//select the contianer fisrt
const svg = d3.select('.canvas')
  .append('svg')
    .attr('width',1200)
    .attr('height',705);

//create margins and dimensions
const margin = {top:10,right:10,bottom:15,left:130};
const graphWidth = 600 - margin.left -margin.right;
const graphHeight = 600 - margin.top -margin.bottom;

const graph =svg.append('g')
  .attr('width',graphWidth)
  .attr('height',graphHeight)
  .attr('transform',`translate(${margin.left},${margin.top})`)

const xAxisGroup = graph.append('g')
  .attr('transform',`translate(0,${graphHeight})`);
const yAxisGroup = graph.append('g');

d3.json('menu.json').then(data => {
  const min = d3.min(data, d => d.orders);
  const max = d3.max(data, d => d.orders);

  const y = d3.scaleLinear()
    .domain([0,max])
    .range([graphHeight,0]);

  const x = d3.scaleBand()
    .domain(data.map(item => item.name))
    .range([0,500])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const rects = graph.selectAll('rect')
    .data(data)
  //console.log(rects)
  rects.attr('width',x.bandwidth)
    .attr('height', d => graphHeight - y(d.orders))
    .attr('fill', 'orange')
    .attr('x',(d,i) => x(d.name))
    .attr('y',(d,i) => y(d.orders))
  //console.log(graphHeight-y(200))

//append the enter selection to the DOM
  rects.enter()
    .append('rect')
      .attr('width',x.bandwidth)
      .attr('height', d =>graphHeight - y(d.orders))
      .attr('fill', 'orange')
      .attr('x',(d,i) => x(d.name))
      .attr('y',(d,i) => y(d.orders))

//create and call the axes
  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y)
    .ticks(7)
    .tickFormat(tickNum => tickNum + ' orders');

  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);

  xAxisGroup.selectAll('text')
    .attr('transform','rotate(-45)')
    .attr('text-anchor','end')
    .attr('fill','orange')
})