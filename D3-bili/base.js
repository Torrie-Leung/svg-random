//create a dataset
const dataset = [30,70,33,44,55,11,100,89,99];
//create svg
const width = 300;
const height = 300;
const padding = {top:20,right:20,left:20,bottom:20};
const rectStep = 35;
const rectWidth = 30;
const svg = d3.select("#svg")
              .append("svg")
              .attr("width",width)
              .attr("height",height);

svg.selectAll("rect").data(dataset).enter()
    .append("rect")
    .attr("fill","#daa520")
    .attr("x",(data,index) => padding.left+index*rectStep)
    .attr("y",(data,index) => height-padding.bottom-data)
    .attr("width",rectWidth)
    .attr("height",data=>data);

const text = svg.selectAll("text").data(dataset).enter().append("text")
                .attr("fill","#fff")
                .attr("font-size","14px")
                .attr("text-anchor","middle")
                .attr("x",(data,index)=>padding.left+index*rectStep)
                .attr("y",(data,index) => height-padding.bottom-data)
                .text(data=>data)
                .attr("dx",rectWidth/2)
                .attr("dy","1em");