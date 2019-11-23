//create a dataset
const dataset = [30,70,33,44,55,11,100,89,99];
const dataset1 = [60,170,233,44,55,111,100,19,99];
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

const genRect = obj => {
  obj.attr("fill","#daa520")
    .attr("x",(data,index) => padding.left+index*rectStep)
    .attr("y",(data,index) => height-padding.bottom-data)
    .attr("width",rectWidth)
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
      .attr("font-size","12px")
      .attr("text-anchor","middle")
      .attr("x",(data,index)=>padding.left+index*rectStep)
      .attr("y",(data,index) => height-padding.bottom-data)
      .text(data=>data)
      .attr("dx",rectWidth/2)
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
  genText(svg.selectAll("text").data(dataset).enter().append("text"));
  setTimeout(()=>{
    update(dataset1)
  },3000)
};

const update = dataset =>{
  genRect(svg.selectAll("rect").data(dataset));
  genText(svg.selectAll("text").data(dataset));
};

init(dataset);