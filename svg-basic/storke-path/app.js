window.onload = function(){
  function SVGRoad(ele){
    this.pathLength = ele.getTotalLength()
    // single arg
    // this.setStrokeDasharrayInPercent = function(strokeDasharray){
    //   ele.style.strokeDasharray = (strokeDasharray/100) * this.pathLength
    // }

    //multipul args
    this.setStrokeDasharrayInPercent = function(){
      console.log(arguments)
      let mstrokeDasharray = ""
      for(i = 0; i< arguments.length; i++){
        mstrokeDasharray += (arguments[i]/100) * this.pathLength + ' '
      }
      ele.style.strokeDasharray = mstrokeDasharray
    }

    this.setStrokeDashoffsetInPercent = function(strokeDashoffset){
      ele.style.strokeDashoffset = (strokeDashoffset/100) * this.pathLength
    }

  }
  const pathEle = document.getElementById('path');
  const SVGRoadInstance = new SVGRoad(pathEle);
  console.log(SVGRoadInstance.pathLength)
  SVGRoadInstance.setStrokeDasharrayInPercent(30,15)
  SVGRoadInstance.setStrokeDashoffsetInPercent(3)
}