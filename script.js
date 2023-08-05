const typed = new Typed('.multiple-text', {
    strings: ['Frontend Development|', 'Backend Development|', 'Web Designing|'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 600,
    loop: true
});

var tl = gsap.timeline()

tl.to("#page1-left button", {
    y: -70,
    opacity: 0,
    duration: 0.80,
    scrollTrigger: {
        trigger: "#page1 button",
        scroll: "body",
        start: "top -26",
        end: "top 30%",
        scrub: 1,
        // markers:true
}});

tl.to("#page1 img", {
    y: -100,
    opacity: 0,
    duration: 0.80,
    scrollTrigger: {
        trigger: "#page1 img",
        scroll: "body",
        start: "top -330",
        end: "top -30%",
        scrub: 1,
        // markers:true
}});

tl.to("#page2-bottom-right button", {
    y: -30,
    opacity: 0,

    scrollTrigger: {
        trigger: "#page2-bottom-right button",
        scroll: "body",
        start: "top 10",
        end: "top 700",
        scrub: 1,
        // markers:true,


    }});

    tl.to("#page2-bottom-right span ", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2-bottom-right span",
        scroll: "body",
        start: "top 10",
        end: "top 700",
        scrub: 1,
        // markers:true

    }});

    tl.to("#page2-bottom-right h4", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2-bottom-right h4",
        scroll: "body",
        start: "top 10",
        end: "top 700",
        scrub: 1,
        // markers:true
    }});

    tl.to("#page2-bottom-right p", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2-bottom-right p",
        scroll: "body",
        start: "top 10",
        end: "top 700",
        scrub: 1,
        // markers:true
}});

tl.to("#page2-bottom-right h1", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2-bottom-right h1",
        scroll: "body",
        start: "top 10",
        end: "top 700",
        scrub: 1,
        // markers:true
}});

tl.to("#page3-bottom", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3-bottom",
        scroll: "body",
        start: "top -360",
        end: "top 700",
        scrub: 1,
        // markers:true
    }});

tl.to("#page4-bottom", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page4-bottom",
        scroll: "body",
        start: "top -150",
        end: "top 700",
        scrub: 1,
        // markers:true
    }});

tl.from("#page5-bottom", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page5-bottom",
        scroll: "body",
        start: "top 600",
        end: "top 700",
        scrub: 1,
        // markers:true
    }});


    
    const toggleBtn = document.querySelector("#toggle-btn")
    const toggleBtnIcon = document.querySelector("#toggle-btn i")
    const dropDownMenu = document.querySelector("#dropdown-menu")

    toggleBtnIcon.onclick = function (){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

    }