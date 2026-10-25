// ============================================
// RENDER — this file reads the data/*.js files
// and builds the page content automatically.
// You normally don't need to edit this file —
// edit the files inside data/ instead.
// ============================================

// Icons — built directly in code as SVG (no image files to manage).
// They automatically match the site's colors. If you'd rather use
// your own icon image instead, replace any ICONS.xxx below with
// an <img src="assets/icons/yourfile.png"> tag.
const ICONS = {
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="vertical-align:-3px;"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 01-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 01-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 012.76 6.67c0 5.2-4.24 9.42-9.44 9.42zm8.02-17.45A11.27 11.27 0 0012.05.75C5.8.75.7 5.84.7 12.1c0 2 .52 3.95 1.52 5.67L.6 23.25l5.6-1.47a11.3 11.3 0 005.84 1.6h.01c6.25 0 11.34-5.1 11.35-11.35 0-3.03-1.18-5.88-3.33-8z"/></svg>`,
  phone: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  email: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  instagram: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.78.22 2.41.46.65.25 1.2.59 1.75 1.14.5.5.9 1.1 1.15 1.75.24.63.41 1.35.46 2.41.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.78-.46 2.41-.25.65-.59 1.2-1.14 1.75-.5.5-1.1.9-1.75 1.15-.63.24-1.35.41-2.41.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.78-.22-2.41-.46-.65-.25-1.2-.59-1.75-1.14-.5-.5-.9-1.1-1.15-1.75-.24-.63-.41-1.35-.46-2.41C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.78.46-2.41.25-.65.59-1.2 1.14-1.75.5-.5 1.1-.9 1.75-1.15.63-.24 1.35-.41 2.41-.46C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.4-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg>`,
  pin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;"><path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.63 6.5 11.66 6.78 11.92a1 1 0 001.44 0C13 21.16 19.5 15.13 19.5 9.5 19.5 5.36 16.14 2 12 2zm0 10.5A3 3 0 1112 6.5a3 3 0 010 6z"/></svg>`,
  mainBranch: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;"><path d="M12 2L2 8.5V21h6v-6h8v6h6V8.5L12 2z"/></svg>`
};

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

document.addEventListener("DOMContentLoaded", function () {

  // ---- Offerings + Why Us ----
  const offerGrid = document.getElementById("offer-grid");
  if (offerGrid && typeof COURSES_DATA !== "undefined") {
    offerGrid.innerHTML = COURSES_DATA.offerings.map(o => `
      <div class="glass offer-tile">${escapeHTML(o.title)}<br>
        <span style="font-family:'Inter',sans-serif;font-weight:500;font-size:0.78rem;color:#4a534f;">${escapeHTML(o.subtitle)}</span>
      </div>`).join("");
  }
  const whyGrid = document.getElementById("why-grid");
  if (whyGrid && typeof COURSES_DATA !== "undefined") {
    whyGrid.innerHTML = COURSES_DATA.whyUs.map(w => `<div class="glass why-item">${escapeHTML(w)}</div>`).join("");
  }
  const heroOffer = document.getElementById("hero-offer-rows");
if (heroOffer && typeof COURSES_DATA !== "undefined") {
  heroOffer.innerHTML = COURSES_DATA.heroCard.map(text => `<div class="offer-row">${escapeHTML(text)}</div>`).join("");
}

 // ---- Hero carousel (auto-rotating photos) ----
  const heroCarousel = document.getElementById("hero-carousel");
  if (heroCarousel && typeof CAROUSEL_DATA !== "undefined") {
    const imgs = CAROUSEL_DATA.images || [];
    if (imgs.length) {
      heroCarousel.innerHTML = imgs.map((item, i) => `
        <div class="carousel-slide${i === 0 ? " active" : ""}" onclick="openCarouselLightbox(${i})">
          ${item.type === "video"
            ? `<video src="${item.src}" autoplay muted playsinline></video>`
            : `<img src="${item.src}" alt="Academy photo ${i + 1}" loading="lazy" decoding="async">`}
          ${item.caption ? `<div class="carousel-caption">${escapeHTML(item.caption)}</div>` : ""}
        </div>`).join("");

      if (imgs.length > 1) {
        let slideIndex = 0;
        const slides = heroCarousel.querySelectorAll(".carousel-slide");
        let slideTimer = null;

        function goToNextSlide() {
          slides[slideIndex].classList.remove("active");
          const prevVideo = slides[slideIndex].querySelector("video");
          if (prevVideo) prevVideo.pause();

          slideIndex = (slideIndex + 1) % slides.length;
          slides[slideIndex].classList.add("active");
          scheduleNext();
        }

        function scheduleNext() {
          if (slideTimer) clearTimeout(slideTimer);
          const currentItem = imgs[slideIndex];
          const currentSlideEl = slides[slideIndex];

          if (currentItem.type === "video") {
            const videoEl = currentSlideEl.querySelector("video");
            videoEl.currentTime = 0;
            videoEl.play();
            videoEl.onended = goToNextSlide;
          } else {
            slideTimer = setTimeout(goToNextSlide, (CAROUSEL_DATA.intervalSeconds || 5) * 1000);
          }
        }

        scheduleNext();
      }
    } else {
      heroCarousel.innerHTML = `<div class="hero-logo-wrap"><img src="assets/logo/logo.png" alt="Rankers & Learners Academy" decoding="async"></div>`;
    }
  }

  // ---- Founders ----
  const foundersList = document.getElementById("founders-list");
  if (foundersList && typeof FOUNDERS_DATA !== "undefined") {
    foundersList.innerHTML = FOUNDERS_DATA.map(f => `
      <div class="glass founder-card">
        <img src="${f.photo}" alt="${escapeHTML(f.name)}" class="founder-photo" loading="lazy" decoding="async">
        <div>
          <h3>${escapeHTML(f.name)}</h3>
          <ul>${f.points.map(p => `<li>${escapeHTML(p)}</li>`).join("")}</ul>
          <p class="founder-quote">"${escapeHTML(f.quote)}"</p>
          <p class="bio">${escapeHTML(f.bio)}</p>
        </div>
      </div>`).join("");
  }

  // ---- Mentors ----
  const mentorsList = document.getElementById("mentors-list");
  if (mentorsList && typeof MENTORS_DATA !== "undefined") {
    mentorsList.innerHTML = MENTORS_DATA.map(m => `
      <div class="glass faculty-card mentor-card">
        ${m.photo ? `<img src="${m.photo}" alt="${escapeHTML(m.name)}" class="mentor-photo" loading="lazy" decoding="async">` : ""}
        <div class="fname">${escapeHTML(m.name)}</div>
        ${m.lines.map(l => `<p>${escapeHTML(l)}</p>`).join("")}
      </div>`).join("");
  }

  // ---- Faculty ----
  const facultyList = document.getElementById("faculty-list");
  if (facultyList && typeof FACULTY_DATA !== "undefined") {
    facultyList.innerHTML = FACULTY_DATA.map(f => `
      <div class="glass faculty-card">
        <div class="fname">${escapeHTML(f.name)}</div>
        ${f.lines.map(l => `<p>${escapeHTML(l)}</p>`).join("")}
      </div>`).join("");
  }

  // ---- Gallery ----
  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid && typeof GALLERY_DATA !== "undefined") {
    galleryGrid.innerHTML = GALLERY_DATA.map((g, idx) => {
      const imgs = g.images && g.images.length ? g.images : (g.image ? [g.image] : []);
      if (imgs.length) {
        return `<div class="glass gallery-item" style="cursor:pointer;position:relative;overflow:hidden;padding:0;" onclick="openLightbox(${idx})">
          ${imgs.map((src, i) => `<img src="${src}" alt="${escapeHTML(g.caption)}" class="gallery-slide${i === 0 ? " active" : ""}" loading="lazy" decoding="async">`).join("")}
          <div class="gallery-tag">${escapeHTML(g.caption)}${imgs.length > 1 ? ` (${imgs.length})` : ""}</div>
        </div>`;
      }
      return `<div class="glass gallery-item">${escapeHTML(g.caption)}</div>`;
    }).join("");

    // Auto-rotate each tile's own photos every 5 seconds
    galleryGrid.querySelectorAll(".gallery-item").forEach(tile => {
      const slides = tile.querySelectorAll(".gallery-slide");
      if (slides.length > 1) {
        let idx = 0;
        setInterval(() => {
          slides[idx].classList.remove("active");
          idx = (idx + 1) % slides.length;
          slides[idx].classList.add("active");
        }, 5000);
      }
    });
  }

  // ---- Blog (homepage shows featured posts, or latest 3 if none marked featured) ----
  const blogList = document.getElementById("blog-list");
  if (blogList && typeof BLOG_DATA !== "undefined") {
    const withIndex = BLOG_DATA.map((b, i) => ({ post: b, i }));
    const hasFeatured = withIndex.some(x => x.post.featured);
    const toShow = (hasFeatured ? withIndex.filter(x => x.post.featured) : withIndex).slice(0, 3);
    blogList.innerHTML = toShow.map(({ post: b, i }) => `
      <div class="glass blog-card">
        <div class="blog-date">${escapeHTML(b.tag)}</div>
        <h3>${escapeHTML(b.title)}</h3>
        <p>${escapeHTML(b.excerpt)}</p>
        <button type="button" class="read" onclick="openBlogModal(${i})">Read more →</button>
      </div>`).join("");
  }

  // ---- Branches ----
  const branchList = document.getElementById("branch-list");
  if (branchList && typeof BRANCHES_DATA !== "undefined") {
    branchList.innerHTML = BRANCHES_DATA.map(b => `
      <div class="glass branch-card">
        <h4>${(b.main || b.name === "Main Branch") ? ICONS.mainBranch : ICONS.pin} ${escapeHTML(b.name)}</h4>
        <p>${escapeHTML(b.address)}</p>
        ${b.mapLink ? `<a href="${b.mapLink}" target="_blank" rel="noopener" class="map-btn">${ICONS.pin} View on Map</a>` : ""}
      </div>`).join("");
  }

  // ---- Floating WhatsApp button ----
  // Number and the ready-typed message come from CONTACT_DATA in
  // data/branches.js — change them there, not here.
  if (typeof CONTACT_DATA !== "undefined" && CONTACT_DATA.whatsapp) {
    const waLink = "https://wa.me/" + String(CONTACT_DATA.whatsapp).replace(/\D/g, "") +
      (CONTACT_DATA.whatsappMessage ? "?text=" + encodeURIComponent(CONTACT_DATA.whatsappMessage) : "");

    // Floating button, bottom-right, on every page that loads this file
    if (!document.querySelector(".wa-float")) {
      const fab = document.createElement("a");
      fab.className = "wa-float";
      fab.href = waLink;
      fab.target = "_blank";
      fab.rel = "noopener";
      fab.setAttribute("aria-label", "Chat with us on WhatsApp");
      fab.innerHTML = '<span class="wa-float-icon">' + ICONS.whatsapp + '</span><span class="wa-float-text">Chat on WhatsApp</span>';
      document.body.appendChild(fab);
    }
  }

  // ---- "Call Now" button in the hero ----
  if (typeof CONTACT_DATA !== "undefined" && CONTACT_DATA.callNumber) {
    const telLink = "tel:+91" + String(CONTACT_DATA.callNumber).replace(/\D/g, "").slice(-10);
    document.querySelectorAll("[data-call-link]").forEach(a => { a.href = telLink; });
  }

  // ---- Contact / footer ----
  if (typeof CONTACT_DATA !== "undefined") {
    const phoneEl = document.getElementById("footer-phones");
    if (phoneEl) {
      phoneEl.innerHTML = `<span class="contact-line">${ICONS.phone} ${CONTACT_DATA.phones.map(p => `<a href="tel:${p.replace(/\s/g, "")}">${escapeHTML(p)}</a>`).join(" / ")}</span>`;
    }
    const emailEl = document.getElementById("footer-email");
    if (emailEl) {
      emailEl.innerHTML = `<span class="contact-line">${ICONS.email} <a href="mailto:${CONTACT_DATA.email}">${escapeHTML(CONTACT_DATA.email)}</a></span>`;
    }
    const igEl = document.getElementById("footer-instagram");
    if (igEl) {
      igEl.innerHTML = `<a href="https://instagram.com/${CONTACT_DATA.instagram}" target="_blank" rel="noopener" class="contact-line">
        ${ICONS.instagram} @${escapeHTML(CONTACT_DATA.instagram)}
      </a>`;
    }
  }

});

// ============================================
// LIGHTBOX — click a gallery tile to open its
// photos full-screen with next/prev navigation.
// You don't need to edit anything here.
// ============================================

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(itemIndex) {
  const item = GALLERY_DATA[itemIndex];
  const imgs = item.images && item.images.length ? item.images : (item.image ? [item.image] : []);
  if (!imgs.length) return;
  lightboxImages = imgs.map(src => ({ src: src, caption: "" }));
  lightboxIndex = 0;
  updateLightboxImage();
  document.getElementById("lightbox-overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function openCarouselLightbox(itemIndex) {
  const imgs = CAROUSEL_DATA.images || [];
  if (!imgs.length) return;
  lightboxImages = imgs;
  lightboxIndex = itemIndex;
  updateLightboxImage();
  document.getElementById("lightbox-overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox-overlay").style.display = "none";
  document.body.style.overflow = "";
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const current = lightboxImages[lightboxIndex];
  const imgEl = document.getElementById("lightbox-img");
  const videoEl = document.getElementById("lightbox-video");

  if (current.type === "video") {
    imgEl.style.display = "none";
    videoEl.style.display = "block";
    videoEl.src = current.src;
    videoEl.muted = true;
    videoEl.play();
  } else {
    videoEl.pause();
    videoEl.style.display = "none";
    imgEl.style.display = "block";
    imgEl.src = current.src;
  }

  document.getElementById("lightbox-caption").textContent = current.caption || "";
  document.getElementById("lightbox-counter").textContent =
    lightboxImages.length > 1 ? (lightboxIndex + 1) + " / " + lightboxImages.length : "";
}

document.addEventListener("keydown", function (e) {
  const overlay = document.getElementById("lightbox-overlay");
  if (!overlay || overlay.style.display !== "flex") return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") lightboxNext();
  if (e.key === "ArrowLeft") lightboxPrev();
});

function openBlogModal(index) {
  const post = BLOG_DATA[index];
  document.getElementById("blog-modal-tag").textContent = post.tag;
  document.getElementById("blog-modal-title").textContent = post.title;
  document.getElementById("blog-modal-content").textContent = post.content || post.excerpt;
  document.getElementById("blog-modal-overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  document.getElementById("blog-modal-overlay").style.display = "none";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
  const overlay = document.getElementById("blog-modal-overlay");
  if (overlay && overlay.style.display === "flex" && e.key === "Escape") closeBlogModal();
});

// ============================================
// SCROLL REVEAL — sections fade + slide in
// smoothly as you scroll to them. Purely visual,
// nothing to edit here.
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let lastY = window.scrollY;

  const observer = new IntersectionObserver((entries) => {
    const currentY = window.scrollY;
    const scrollingDown = currentY >= lastY;
    lastY = currentY;

    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("in-view")) {
        el.classList.remove("reveal-from-top", "reveal-from-bottom");
        el.classList.add(scrollingDown ? "reveal-from-bottom" : "reveal-from-top");
        void el.offsetWidth;
        requestAnimationFrame(() => el.classList.add("in-view"));
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  sections.forEach(sec => {
    sec.classList.add("reveal-from-bottom");
    observer.observe(sec);
  });
});

// ============================================
// MOBILE MENU — the hamburger (☰) button in the
// header. Only visible on small screens (see the
// mobile media query in css/style.css). Nothing
// to edit here.
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggleBtn || !nav) return;

  function closeMenu() {
    nav.classList.remove("nav-open");
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Open menu");
  }

  toggleBtn.setAttribute("aria-controls", "mainNav");
  toggleBtn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("nav-open");
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close the menu once a link is tapped
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});
