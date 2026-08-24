// ============================================
// PASTE THIS INTO GOOGLE APPS SCRIPT — see the
// setup steps in README.md ("Connecting the
// Admission Form to Google Sheets").
//
// This script receives the form submission and
// adds it as a new row in your Google Sheet.
// ============================================

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // If the sheet is empty, add column headers first
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted At", "Name", "Phone", "Email", "Standard", "Branch", "Message"]);
  }

  var data = e.parameter;
  sheet.appendRow([
    new Date(),
    data.fname || "",
    data.phone || "",
    data.email || "",
    data.course || "",
    data.branch || "",
    data.message || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
