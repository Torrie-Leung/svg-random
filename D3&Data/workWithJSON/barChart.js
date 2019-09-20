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

//scales(which not depend on the data)
const y = d3.scaleLinear()
  .range([graphHeight,0]);

const x = d3.scaleBand()
  .range([0,500])
  .paddingInner(0.2)
  .paddingOuter(0.2);

//create the axes
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y)
  .ticks(7)
  .tickFormat(tickNum => tickNum + ' orders');

//update x axis text
xAxisGroup.selectAll('text')
  .attr('transform','rotate(-45)')
  .attr('text-anchor','end')
  .attr('fill','orange')

//update function
const update = (data) => {

  //updating scale domain
  y.domain([0,d3.max(data, d => d.orders)])

  x.domain(data.map(item => item.name))

  //join the data to rects
  const rects = graph.selectAll('rect')
    .data(data)

  //remove exit selection
  rects.exit().remove()

  //update current shapes in dom
  rects.attr('width',x.bandwidth)
    .attr('height', d => graphHeight - y(d.orders))
    .attr('fill', 'orange')
    .attr('x',(d,i) => x(d.name))
    .attr('y',(d,i) => y(d.orders))

  //append the enter selection to the DOM
  rects.enter()
    .append('rect')
      .attr('width',x.bandwidth)
      .attr('height', d =>graphHeight - y(d.orders))
      .attr('fill', 'orange')
      .attr('x',(d,i) => x(d.name))
      .attr('y',(d,i) => y(d.orders))
  //call the axes
  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);
}

//get data from firestore
db.collection('dishes').get().then(res => {
  const data = [];
  res.docs.forEach(doc => {
    data.push(doc.data());
  })

  update(data)

  d3.interval(() =>{
    data[0].orders += 50;
    update(data)
  },1000)

  

  
})