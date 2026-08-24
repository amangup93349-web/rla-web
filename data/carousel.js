// ============================================
// HERO CAROUSEL — the auto-changing photo strip
// inside the "What We Offer" card on the home page.
// Changes photo automatically every 5 seconds.
//
// How to add your photos:
// 1. Drop 8-10 image files into assets/hero-carousel/
// 2. List their filenames below, in the order you
//    want them to appear.
// ============================================

const CAROUSEL_DATA = {
  intervalSeconds: 5,
  images: [
    { src: "assets/hero-carousel/intro.mp4", caption: "Academy Intro", type: "video" },
   // { src: "assets/hero-carousel/bab.jpeg", caption: "Hii, My Name is Luffy" },
    { src: "assets/hero-carousel/end.png", caption: "Hii, My Name is Asta" },
    ]
};