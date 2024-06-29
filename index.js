gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#box"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#box", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#box").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
// =
var loader = document.getElementById('loader');
var loaderText = document.querySelector('#loader h3');

setTimeout(function() {
    loaderText.style.opacity = 0;
    loaderText.style.transform = 'translateX(-50px)';
}, 2000); 

setTimeout(function() {
    loader.classList.add('hide');
}, 2500);
// =
function cursoreffect() {
    var page1 = document.querySelector("#page1")
    var mouse = document.querySelector("#cursor")
    page1.addEventListener("mousemove", function (detail) {
        gsap.to(mouse, {
            x: detail.x,
            y: detail.y
        })
    })
    page1.addEventListener("mouseenter", function () {
        gsap.to(mouse, {
            scale: 1
        })
    })
    page1.addEventListener("mouseleave", function () {
        gsap.to(mouse, {
            scale: 0,
        })
    })
}
cursoreffect()

function pagetwo() {
    gsap.from(".heading2 h1", {
        y: 120,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: ".para1",
            scroller: "#box",
            // markers:true,
            start: "top 47%",
            end: "top 46%",
            scrub: 2,
            opacity: 0
        }
    })
}
pagetwo()

gsap.from(".para1 h1", {
    y: 120,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".para1",
        scroller: "#box",
        // markers: true,
        start: "top 47%",
        end: "top 46%",
        scrub: 2,
    }
})


gsap.from(".heading3 h3", {
    y: 120,
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page4",
        // markers:true,
        scroller: "#box",
        start: "top 47%",
        end: "top 46%",
        scrub: 2,
        opacity: 0
    }
})

function pagefour() {
    gsap.from(".para2 h1", {
        y: 120,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#box",
            // markers: true,
            start: "top 47%",
            end: "top 46%",
            scrub: 2,
            opacity: 0
        }
    })
}
pagefour()

function circle1() {
    var page2 = document.querySelector("#circle")
    var mouse2 = document.querySelector("#cursor2")
    page2.addEventListener("mousemove", function (detail) {
        gsap.to(mouse2, {
            x: detail.x,
            y: detail.y
        })
    })
    page2.addEventListener("mouseenter", function () {
        gsap.to(mouse2, {
            scale: 1
        })
    })
    page2.addEventListener("mouseleave", function () {
        gsap.to(mouse2, {
            scale: 0,
        })
    })
}
circle1()

function pagefive(){
    gsap.from("#page5 p",{
        y: 120,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#box",
            // markers: true,
            start: "top 47%",
            end: "top 46%",
            scrub: 2,
            opacity: 0
        }
    })
    gsap.from(".heading5",{
        y: 120,
        duration: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#box",
            // markers: true,
            start: "top 47%",
            end: "top 46%",
            scrub: 2,
            opacity: 0
        }
    })
}
pagefive()

let currentIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}
function updateSlider() {
    const newTransformValue = -currentIndex * (30 + 10) + 'vh'; 
    slider.style.transform = 'translateX(' + newTransformValue + ')';
}
setInterval(nextSlide, 3000);

function last(){
var pre= gsap.timeline()
pre.from("#loader h3",{
   x:100,
   opacity:0, 
   duration:2,
   stagger:0.2, 
})
pre.to("#loader h3",{
    opacity:0,
    x:-50,
    stagger:0.2
})

pre.to("#loader",{
    opacity:0,
    display:"none"
})
pre.from(".heading h1 span",{
   y:100,
   opacity:0,
   stagger:0.1,
   duration:0.5
})
}
last()

function footer(){
gsap.from(".footer",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#heading8 h3",
        scroller:"#box",
        // markers:true,
        start:"top 45%",
        end:"top 35%",
        scrub:2,
    }
})
gsap.from(".rejouice h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".contact p1",
        scroller:"#box",
        // markers:true,
        start:"top 46%",
        end:"top 44%",
        scrub:2
    }
})
}
footer()