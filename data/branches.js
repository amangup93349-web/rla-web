// ============================================
// BRANCHES & CONTACT — addresses, phone, email,
// social handle. Used in the "Where To Find Us"
// section and the footer.
//
// mapLink: the "View on Map" button uses this URL.
// To get the exact pin (not just a text search):
//   1. Open Google Maps, find the exact branch
//   2. Click "Share" → "Copy link"
//   3. Paste that link here instead
// ============================================

const BRANCHES_DATA = [
  {
    name: "Salasar Woods Branch",
    main: true,          // shows the house icon; set on ONE branch only
    address: "Shop No. 6, Salasar Woods,\nNear Ronak Fine Dine Restaurant,\nBehind Divine Mercy Church, Kanakia Road,\nMira Road (E), Mumbai - 401107",
    mapLink: "https://maps.app.goo.gl/uopbNKvThsMx3PP69"
  },
  {
    name: "Miragaon Branch",
    address: "Flat No. 102 & 103, Yashwant Vihar Building,\nNear Hanuman Mandir, Miragaon,\nMira Road (E), Mumbai - 401107",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Yashwant+Vihar+Building+Miragaon+Mira+Road+East+Mumbai+401107"
  }
];

const CONTACT_DATA = {
  phones: ["93263 51978", "90043 10398"],

  // ---- Floating WhatsApp button + "Call Now" button ----
  // To change the numbers, edit ONLY these two lines.
  // whatsapp: country code 91 + 10-digit number, no spaces or +
  // callNumber: the number the "Call Now" button in the top hero dials
  whatsapp: "919004310398",
  callNumber: "90043 10398",
  // The message that is already typed when a parent opens WhatsApp
  whatsappMessage: "Hi, I want to know about admissions at Rankers & Learners Academy",

  email: "rankers.learners@gmail.com",
  instagram: "rankers.learners"
};
