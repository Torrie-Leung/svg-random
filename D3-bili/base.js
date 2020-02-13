//create a dataset
const dataset = [30,70,33,44,55,11,100,89,99];
const dataset1 = [60,170,233,44,55,111,100,19,99];
//create svg
const width = 300;
const height = 300;
const padding = {top:20,right:20,left:20,bottom:20};
const rectStep = 35;
const rectWidth = 30;
const xAxisWidth = width - padding.left -padding.right
const yAxisHeight = width - padding.top -padding.bottom
const svg = d3.select("#svg")
              .append("svg")
              .attr("width",width)
              .attr("height",height);
const xScale = d3.scaleBand().domain(dataset.map((o,i) => i)).range([0,xAxisWidth]).padding(0,1);
const yScale = d3.scaleLinear().domain([0,d3.max(dataset)]).rangeRound([yAxisHeight,0]);
const xAxis = d3.axisBottom(xScale);
const gX = svg.append("g").attr("transform",`translate(${padding.left},${height - padding.bottom})`)
gX.call(xAxis)
const yAxis = d3.axisLeft(yScale);
const gY = svg.append("g").attr("transform",`translate(${padding.left},${height - padding.bottom-yAxisHeight})`)
gY.call(yAxis)


const genRect = obj => {
  obj.attr("fill","#daa520")
    .attr("x",(data,index) => padding.left+xScale(index))
    .attr("y",(data,index) => height-padding.bottom-data)
    .attr("width",xScale.bandwidth())
    .attr("height",data=>data);
}
// genRect(svg.selectAll("rect").data(dataset).enter().append("rect"))

//create rects
// svg.selectAll("rect").data(dataset).enter()
//     .append("rect")
//     .attr("fill","#daa520")
//     .attr("x",(data,index) => padding.left+index*rectStep)
//     .attr("y",(data,index) => height-padding.bottom-data)
//     .attr("width",rectWidth)
//     .attr("height",data=>data);

const genText = obj => {
  obj.attr("fill","#fff")
      .attr("class","number")
      .attr("font-size","12px")
      .attr("text-anchor","middle")
      .attr("x",(data,index)=>padding.left+xScale(index))
      .attr("y",(data,index) => height-padding.bottom-(yScale(0)-yScale(data)))
      .text(data=>data)
      .attr("dx",xScale.bandwidth()/2)
      .attr("dy","1em");
}
// genText(svg.selectAll("text").data(dataset).enter().append("text"))
//create texts
// const text = svg.selectAll("text").data(dataset).enter().append("text")
//                 .attr("fill","#fff")
//                 .attr("font-size","12px")
//                 .attr("text-anchor","middle")
//                 .attr("x",(data,index)=>padding.left+index*rectStep)
//                 .attr("y",(data,index) => height-padding.bottom-data)
//                 .text(data=>data)
//                 .attr("dx",rectWidth/2)
//                 .attr("dy","1em");

const init = (dataset,callback) =>{
  genRect(svg.selectAll("rect").data(dataset).enter().append("rect"));
  genText(svg.selectAll(".number").data(dataset).enter().append("text"));
  setTimeout(()=>{
    update(dataset1)
  },3000)
};

const update = dataset =>{
  genRect(svg.selectAll("rect").data(dataset));
  genText(svg.selectAll(".number").data(dataset));
};

init(dataset);

