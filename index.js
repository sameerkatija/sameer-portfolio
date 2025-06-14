const tl = gsap.timeline();
tl.from("#brand-title", {
  y: -30,
  opacity: 0,
  duration: 0.67,
  delay: 0.2,
});

tl.from("#brand-nav a", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.1,
});

const t2 = gsap.timeline();

t2.from("#hero-heading", {
  x: -100,
  opacity: 0,
  delay: 0.2,
  duration: 0.44,
  stagger: 0.5,
});

t2.from("#hero-img", {
  x: -100,
  y: 200,
  duration: 0.4,
  delay: 0.5,
  opacity: 0,
  rotate: 180,
});

t2.from("#form", {
  x: 100,
  duration: 0.2,
  delay: 2,
  opacity: 0,
});
