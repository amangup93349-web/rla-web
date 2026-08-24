// ============================================
// ADMISSION FORM — sends submissions to Google
// Sheets. See README.md ("Connecting the
// Admission Form to Google Sheets") for the
// one-time setup.
//
// After you deploy the Google Apps Script, paste
// the Web App URL it gives you below:
// ============================================

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKYIrD-Q8D3vJcXaHme78ilVPvk596Sjwda9SXsgzTThIihzI81JiGGi54PCfjdzJg5g/exec";

document.getElementById('admissionForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const noteEl = document.getElementById('formNote');

  if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
    noteEl.textContent = "Form isn't connected to Google Sheets yet — see README.md for setup steps.";
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  noteEl.textContent = "Submitting...";

  const formData = new FormData(form);

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
    .then(() => {
      noteEl.textContent = "Thanks! Your Enquiry has been submitted — we'll get in touch soon.";
      form.reset();
    })
    .catch(() => {
      noteEl.textContent = "Something went wrong — please try again or contact us directly.";
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
});
