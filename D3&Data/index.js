const data = [
  {width:200, height: 100, fill: 'purple'}
];

const svg = d3.select('svg');

const rect = svg.select('rect')
  .data(data)
  .attr('width',(d,i,n)=>{
    console.log('arrow function this: ',this)
    console.log(i);
    console.log(n);
    return d.width
  })
  .attr('height',function(d){
    console.log('traditional function this: ', this)
    return d.height
  })
  .attr('fill',function(d){
    return d.fill
  })

  console.log(rect)