//select svg container
const svg = d3.select('svg');

d3.json('planets.json').then(data => {
  //console.log(data)
  const circs = svg.selectAll('circle')
    .data(data);

    //add attrs to circs already in DOM
    circs.attr('cy',200)
      .attr('cx',d => d.distance)
      .attr('r',d => d.radius)
      .attr('fill',d => d.fill);

     //console.log(circs) 
    //append the enter selection to the DOM
    circs.enter()
      .append('circle')
      .attr('cy',200)
      .attr('cx',d => d.distance)
      .attr('r',d => d.radius)
      .attr('fill',d => d.fill);
})

const line = d3.select('#line');
//console.log(line)
d3.json('menu.json').then(data => {

  const y = d3.scaleLinear()
    .domain([0,1000])
    .range([0,500]);
  // console.log(y(0))
  // console.log(y(999))
  // console.log(y(1004))

  // create a band scale
  const x = d3.scaleBand()
    .domain(data.map(item => item.name))
    .range([0,600])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  console.log(x("veg pasta"))
  console.log(x.bandwidth())

  const charts = line.selectAll('rect')
    .data(data)
  //console.log(charts)
  charts.attr('width',x.bandwidth)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x',(d,i) => x(d.name))

  charts.enter()
    .append('rect')
      .attr('width',x.bandwidth)
      .attr('height', d => y(d.orders))
      .attr('fill', 'orange')
      .attr('x',(d,i) => x(d.name))
})