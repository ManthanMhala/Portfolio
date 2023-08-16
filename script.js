const typed = new Typed('.multiple-text', {
    strings: ['Frontend Development|', 'Backend Development|', 'Web Designing|'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 600,
    loop: true
});

// scroll Trigger
var tl = gsap.timeline()

tl.to("#home-left button", {
    y: -70,
    opacity: 0,
    duration: 0.80,
    scrollTrigger: {
        trigger: "#home button",
        scroll: "body",
        start: "top -26",
        end: "top 30%",
        scrub: 1,
        // markers:true
    }
});

tl.to("#home img", {
    y: -100,
    opacity: 0,
    duration: 0.80,
    scrollTrigger: {
        trigger: "#homeimg",
        scroll: "body",
        start: "top -330",
        end: "top -30%",
        scrub: 1,
        // markers:true
    }
});

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


    }
});

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

    }
});

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
    }
});

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
    }
});

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
    }
});

tl.to("#skill-bottom", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skill-bottom",
        scroll: "body",
        start: "top -360",
        end: "top 700",
        scrub: 1,
        // markers:true
    }
});

tl.to("#project-bottom", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#project-bottom",
        scroll: "body",
        start: "top -150",
        end: "top 700",
        scrub: 1,
        // markers:true
    }
});

tl.from("#contact-bottom", {
    y: -30,
    opacity: 0,
    scrollTrigger: {
        trigger: "#contact-bottom",
        scroll: "body",
        start: "top 600",
        end: "top 700",
        scrub: 1,
        // markers:true
    }
});


tl.to("#about i", {
    opacity: 1,
    y: -100,
    duration: 2
})

// Dropdown Menu
const toggleBtn = document.querySelector("#toggle-btn")
const toggleBtnIcon = document.querySelector("#toggle-btn i")
const dropDownMenu = document.querySelector("#dropdown-menu")

toggleBtnIcon.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

}

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});
