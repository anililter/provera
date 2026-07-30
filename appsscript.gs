// ═══════════════════════════════════════════════════════════
//  PROVERA ROADSHOW — Google Apps Script
//  Spreadsheet: https://docs.google.com/spreadsheets/d/1nFDLjHhe-qynE8T1qEtecu5UHzhrC8I_LEwwnxQY3tA
// ═══════════════════════════════════════════════════════════

const SPREADSHEET_ID = '1nFDLjHhe-qynE8T1qEtecu5UHzhrC8I_LEwwnxQY3tA';
const SHEET_NAME     = 'Başvurular';

const COLUMNS = ['Tarih', 'Ad', 'Soyad', 'E-posta', 'Telefon', 'Bütçe Aralığı'];

function doPost(e) {
  try {
    const data  = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    let   sheet = ss.getSheetByName(SHEET_NAME);

    // Sayfa yoksa oluştur + başlık ekle
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      const hdr = sheet.getRange(1, 1, 1, COLUMNS.length);
      hdr.setValues([COLUMNS]);
      hdr.setBackground('#0EA5E9');
      hdr.setFontColor('#FFFFFF');
      hdr.setFontWeight('bold');
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 160);
      sheet.setColumnWidth(2, 120);
      sheet.setColumnWidth(3, 120);
      sheet.setColumnWidth(4, 200);
      sheet.setColumnWidth(5, 150);
      sheet.setColumnWidth(6, 140);
    }

    // Satır yaz
    const row = COLUMNS.map(col => data[col] || '');
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Tarayıcıda URL açınca test için
function doGet() {
  return ContentService
    .createTextOutput('✅ Provera Roadshow Script aktif!')
    .setMimeType(ContentService.MimeType.TEXT);
}
