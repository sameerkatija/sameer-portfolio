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
    scrub: 2,
    start: "top 0%",
    end: "top -150%",
    markers: true,
    pin: true,
  },
});
