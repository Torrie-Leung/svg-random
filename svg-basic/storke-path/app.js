window.onload = function(){
  function SVGRoad(ele){
    this.pathLength = ele.getTotalLength()
    this.setStrokeDasharrayInPercent = function(strokeDasharray){
      ele.style.strokeDasharray = (strokeDasharray/100) * this.pathLength
    }

    this.setStrokeDashoffsetInPercent = function(strokeDashoffset){
      ele.style.strokeDashoffset = (strokeDashoffset/100) * this.pathLength
    }

  }
  const pathEle = document.getElementById('path');
  const SVGRoadInstance = new SVGRoad(pathEle);
  console.log(SVGRoadInstance.pathLength)
  SVGRoadInstance.setStrokeDasharrayInPercent(30)
  SVGRoadInstance.setStrokeDashoffsetInPercent(10)
}