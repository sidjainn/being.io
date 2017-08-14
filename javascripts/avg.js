document.addEventListener("DOMContentLoaded", function(event) {

  // addEventListener("click", function() {
  //     var
  //           el = document.documentElement
  //         , rfs =
  //                el.requestFullScreen
  //             || el.webkitRequestFullScreen
  //             || el.mozRequestFullScreen
  //     ;
  //     rfs.call(el);
  // });

var width = window.innerWidth;
var height = window.innerHeight;

var distance = Math.round(Math.min(60, width/10));
var n=Math.floor((width/2)/distance)+2;
var data=new Array(n);
for(var i=0;i<n;i++){
  data[i]=(i*distance);
}

var delayCounter=0;
var max=data[n-1];

var scale = d3.scaleLinear()
.range(["#F48FB1","rgb(30,33,39)"])
.domain([0,max]);

var svg = d3.select("body")
  .select(".temp")
  .append("svg")
  .attr("width",width)
  .attr("height",height);



//Container for the gradient
// var defs = svg.append("defs");

// var filter = defs.append("filter")
// 		.attr("id","glow");
//
// 	filter.append("feGaussianBlur")
// 		.attr("class", "blur")
// 		.attr("stdDeviation","4.5")
// 		.attr("result","coloredBlur");
//
// 	var feMerge = filter.append("feMerge");
// 	feMerge.append("feMergeNode")
// 		.attr("in","coloredBlur");
// 	feMerge.append("feMergeNode")
// 		.attr("in","SourceGraphic");

//Append a linear horizontal gradient
// var linearGradient = defs.append("linearGradient")
// 	.attr("id","animate-gradient") //unique id to reference the gradient by
// 	.attr("x1","0%")
// 	.attr("y1","0%")
// 	.attr("x2","0%")
// 	.attr("y2","100%")
// 	//Make sure the areas before 0% and after 100% (along the x)
// 	//are a mirror image of the gradient and not filled with the
// 	//color at 0% and 100%
// 	.attr("spreadMethod", "reflect");
//
// //A color palette that is 4 colors (the last 3 colors are the reverse of the start)
// var colours = ["#FFC400", "#FFD740", "#fff", "#FFD740","#FFC400"];
//
// //Append the colors evenly along the gradient
// linearGradient.selectAll(".stop")
// 	.data(colours)
// 	.enter().append("stop")
// 	.attr("offset", function(d,i) { return i/(colours.length-1); })
// 	.attr("stop-color", function(d) { return d; });
//
//
// linearGradient.append("animate")
// 	.attr("attributeName","y1")
// 	.attr("values","0%;100%")
// 	.attr("dur","4s")
// 	.attr("repeatCount","indefinite");
//
//
// linearGradient.append("animate")
// .attr("attributeName","y2")
// .attr("values","100%;200%")
// .attr("dur","4s")
// .attr("repeatCount","indefinite");

var height_man=height/3;

svg.append("svg:image")
       .attr("class", "manimage")
      //  .attr('x',width/2)
      //  .attr('y',height/2-height/75)
      //  .attr('width', 0)
      //  .attr('height', 0)
       .attr("xlink:href","images/man.svg")
      //  .transition()
      //  .duration(4000)
       .attr('x',width/2-0.97*height_man/2)
       .attr('y',height/2-height_man/2)
       .attr('width', 0.97*height_man)
       .attr('height', height_man)
       .attr("fill", "none")
       .attr("opacity", 1);
      //  .style("filter","url(#glow)");

  var ellipses = svg.selectAll("ellipse")
  .data(data)
  .enter()
  .append("ellipse")
  .attr("rx", function(d) { return d-distance; })
  .attr("ry", function(d) { return (d-distance)/4.5; })
  .attr("cx", width/2)
  .attr("cy", height/2-height/75)
  .attr("fill","none")
  .style("stroke",function(d) { return scale(d) })
  .attr("stroke-width", 1.5);

  var height_halfman=height_man*0.475;

  // svg.append("svg:image")
  //     .attr("xlink:href","images/light.gif")
  // 		.attr("x", width/2-18)
  // 		.attr("y", 0)
  // 		// .attr("width", Math.min(26, width/100))
  // 		.attr("height", height/2-0.97*height_halfman)
  //     // .attr("fill", "#FFC400");
  // 		// .style("fill", "url(#animate-gradient)");
  //     // .style("filter","url(#glow)");

  // svg.append("rect")
  // 		.attr("x", width/2-Math.min(4, width/200))
  // 		.attr("y", 0)
  // 		.attr("width", Math.min(8, width/100))
  // 		.attr("height", height/2-height/75)
  // 		.style("fill", "url(#animate-gradient)");

  svg.append("svg:image")
         .attr("class", "manimage")
        //  .attr('x',width/2)
        //  .attr('y',height/2-height/75)
        //  .attr('width', 0)
        //  .attr('height', 0)
         .attr("xlink:href","images/halfman.svg")
        //  .transition()
        //  .duration(4000)
         .attr('x',width/2-0.93*height_halfman/2)
         .attr('y',height/2-1.03*height_halfman)
         .attr('width', 0.93*height_halfman)
         .attr('height', height_halfman)
         .attr("fill", "none")
         .attr("opacity", 0.8);

  // svg.append("rect")
  //   .attr("x", width/2-Math.min(4, width/200))
  //   .attr("y", 0)
  //   .attr("width", Math.min(8, width/100))
  //   .attr("height", height/2-height/75)
  //   .style("fill", "url(#animate-gradient)")
  //   .attr("opacity", 0.4);

  svg.append("svg:image")
         .attr("class", "lotusimage")
        //  .attr('x',width/2)
        //  .attr('y',height/2-height/75)
        //  .attr('width', 0)
        //  .attr('height', 0)
         .attr("xlink:href","images/lotus.svg")
        //  .transition()
        //  .duration(4000)
         .attr('x',width/2-30)
         .attr('y',height/2-height/22)
         .attr('width', 60)
         .attr('height', 40);
        //  .style("filter","url(#glow)");

function transition() {

  // Reset circles where r == 0
  ellipses
  .data(data)
    .filter(function(d) { return d == 0 })
    .attr("rx",0)
    .attr("ry",0)
    .style("opacity",1)
    .style("stroke",function(d) { return scale(d); });

  var counter = 0;
  // Grow circles
  ellipses
     .data(data)
     .filter(function(d) { return d > 0 })
     .transition()
     .ease(d3.easeLinear)
     .duration(4000)
     .attr("rx", function(d) { return d; })
     .attr("ry", function(d) { return d/4.5; })
     .style("stroke", function(d) { return scale(d) })
     .style("opacity",function(d) {
       return d == max ? 0 : 1
      })
     .on("end",function(){
       //console.log(i)
       if(++counter==ellipses.size()-1) {

         // Update data, maximum value of d is max:
         data = data.map(function(d) {
           return d == max ? 0 : d + distance
         });
         transition();
       }
     });

}
transition();

;})
