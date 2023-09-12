function run(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

run()

var cursor=document.querySelector(".cursor");
var main=document.querySelector(".main");
main.addEventListener("mousemove",function(xx){
    cursor.style.left=xx.x+"px"
    cursor.style.top=xx.y+"px"
})

var v=document.querySelector("video");

v.addEventListener("mouseenter",function(){
    cursor.innerHTML="code_on";
    
})

v.addEventListener("mouseleave",function(){
    cursor.innerHTML=" ";
})

// gsap code
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".Page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top 1%",
        scrub:3
    }
})
tl.to(".Page1 h1",{
    x:"-5vw",
    duration:5,
    
},"anim")

tl.to(".Page1 h2",{
    x:"5vw",
    duration:5,
},"anim")

tl.to(".Page1 video",{
    width:"90%",
    duration:5,
},"anim")
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".Page2 h1",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 40%",
        scrub:3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff",
    color:"black",

})
tl2.from(".Page2  .page2-left ",{
    width:"70%",
    duration:5,
    scrub:3,
    
},"page2x")

tl2.from(".Page2 .page2-right",{
    width:"70%",
    duration:5,
},"page2x")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".Page3 h1",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 90%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"black",
    
})