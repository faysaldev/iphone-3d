import gsap from "gsap";
const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();
  tl.to(position, {
    x: -1.0592824333,
    y: -16.3169000151,
    z: 2.7768999967,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: -2.0964571745,
      y: 3.7028401144,
      z: 2.0675039713,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".hero-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    // todo scroll the phone front section
    .to(position, {
      x: 11.4179448112,
      y: 0.7250805642,
      z: 1.110070971,
      scrollTrigger: {
        trigger: ".front-site-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: 0.8524544999,
      y: -0.0148637432,
      z: 1.9104911025,
      scrollTrigger: {
        trigger: ".front-site-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    // todo phone sidebar section
    .to(position, {
      x: 4.5957589824,
      y: 0.2538071681,
      z: 13.2824945045,
      scrollTrigger: {
        trigger: ".sidebarsite-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -3.2440075388,
      y: -0.17058081,
      z: 0.2609834452,
      scrollTrigger: {
        trigger: ".sidebarsite-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    // todo this is for the side bar section
    .to(position, {
      x: -14.2619118461,
      y: -0.6921750655,
      z: -1.4765714775,
      scrollTrigger: {
        trigger: ".backsite-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -1.5128979174,
      y: -0.1203311122,
      z: -2.2950059016,
      scrollTrigger: {
        trigger: ".backsite-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    //TODO: middle preview
    .to(position, {
      x: 12.85,
      y: 1.24,
      z: 0.83,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -3.26,
      y: 0.56,
      z: -0.28,
      scrollTrigger: {
        trigger: ".display-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    });
};
export default scrollAnimation;
