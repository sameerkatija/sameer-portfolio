const tl = gsap.timeline();
tl.from("#brand-title", {
  y: -30,
  opacity: 0,
  duration: 0.67,
});

tl.from("#brand-nav a", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.1,
});

gsap.from("#hero-heading", {
  x: -100,
  opacity: 0,
  duration: 0.44,
  stagger: 0.2,
});

gsap.from("#hero-img", {
  x: -100,
  y: 200,
  duration: 0.4,
  opacity: 0,
  rotate: 180,
  scrollTrigger: "#hero-imgs",
});

gsap.from("#form", {
  x: 100,
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#form",
    scroller: "body",
    // scrub: true,
    start: "top 50%",
    // markers: true,
  },
});

gsap.to("#about-id", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    scrub: 4,
    start: "top 0%",
    end: "top -150%",
    // markers: true,
    pin: true,
  },
});

const str = document.getElementById("string");
let changeablePath = `M 10 70 Q 100 70 890 70`;
const finalPath = `M 10 70 Q 100 70 890 70`;
str.addEventListener("mousemove", (e) => {
  changeablePath = `M 10 70 Q ${e.x} ${e.y} 800 70`;
  gsap.to("svg path", {
    duration: 0.3,
    attr: {
      d: changeablePath,
    },
    ease: "power3.out",
    // `M 10 70 Q 100 70 800 70`
  });
});

str.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    duration: 1,
    attr: {
      d: finalPath,
    },
    ease: "elastic.out(1.2,0.2)",
    // `M 10 70 Q 100 70 800 70`
  });
});
