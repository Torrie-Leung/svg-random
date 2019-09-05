const data = [
  {width:200, height: 100, fill: 'purple'}
];

const svg = d3.select('svg');

const rect = svg.select('rect')
  .data(data)
  .attr('width',(d,i,n)=>{
    console.log('arrow function this: ',this)
    console.log(n[i]);
    return d.width
  })
  .attr('height',(d,i,n)=>{
    return d.height
  })
  .attr('fill',(d,i,n)=>{
    return d.fill
  })

  console.log(rect)