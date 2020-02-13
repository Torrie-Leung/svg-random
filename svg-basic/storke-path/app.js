window.onload = function(){
  function SVGRoad(ele){
    this.pathLength = ele.getTotalLength()
    this.setStrokeDasharrayInPercent = function(strokeDasharray){
      ele.style.strokeDasharray = (strokeDasharray/100) * this.pathLength
    }

  }
  const pathEle = document.getElementById('path');
  const SVGRoadInstance = new SVGRoad(pathEle);
  // console.log(SVGRoadInstance.pathLength)
  console.log(SVGRoadInstance.setStrokeDasharrayInPercent(5))
}