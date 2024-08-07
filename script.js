function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy mthods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();



}
init()


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

 