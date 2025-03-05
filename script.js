
var main = document.querySelector("main")
var cursor = document.querySelector("#cursor")
var v1 = document.querySelector(".v1")
var h1 = document.querySelector(".heading")
var svg = document.querySelector("svg")
var tpLeft = document.querySelector("tp-left")
var path = "M 10 100 Q 500 100 990 100";
var finalpath = "M 10 100 Q 500 100 990 100"
var string = document.querySelector(".string")


main.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})

v1.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        scale:1.5,
    })
})

v1.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        scale:1,
    })
})

String.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to("svg path",{
        Attr:{d : path}
    })
})

 