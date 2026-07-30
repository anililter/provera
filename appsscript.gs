// ═══════════════════════════════════════════════════════════════════
//  PROVERA ROADSHOW – Google Apps Script
//  Bu script, landing page formundan gelen verileri Google Sheets'e kaydeder.
// ═══════════════════════════════════════════════════════════════════

const SPREADSHEET_ID = '1nFDLjHhe-qynE8T1qEtecu5UHzhrC8I_LEwwnxQY3tA';
const SHEET_NAME = 'Başvurular'; // Sayfanın adı (yoksa otomatik oluşturulur)

// Sütun sırası – ilk satır başlık
const COLUMNS = [
  'Tarih',
  'Ad',
  'Soyad',
  'Telefon',
  'E-posta',
  'Şehir',
  'Bütçe Aralığı',
  'Mülk Tipi',
  'Satın Alma Amacı',
  'Not'
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Sayfa yoksa oluştur ve başlık ekle
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(COLUMNS);
      // Başlık satırını biçimlendir
      const headerRange = sheet.getRange(1, 1, 1, COLUMNS.length);
      headerRange.setBackground('#0EA5E9');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Yeni satır oluştur
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

// GET isteği testi için (tarayıcıda URL açınca)
function doGet(e) {
  return ContentService
    .createTextOutput('Provera Roadshow – Script aktif ✅')
    .setMimeType(ContentService.MimeType.TEXT);
}
