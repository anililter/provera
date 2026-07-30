# Google Sheets Entegrasyonu – Kurulum Talimatı

## Adım 1 – Apps Script'i Aç
1. [script.google.com](https://script.google.com) adresine git
2. **Yeni Proje** oluştur → adını "Provera Roadshow" koy

## Adım 2 – Kodu Yapıştır
1. Editördeki varsayılan kodu **sil**
2. `appsscript.gs` dosyasının içeriğini yapıştır
3. **Kaydet** (Ctrl+S)

## Adım 3 – Deploy (Yayınla)
1. Sağ üstten **Deploy → New deployment** tıkla
2. Tip: **Web app**
3. Ayarlar:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. **Deploy** butonuna bas
5. **Web app URL**'ini kopyala (örn: `https://script.google.com/macros/s/ABC123.../exec`)

## Adım 4 – index.html'e URL'i Ekle
`index.html` dosyasında şu satırı bul:
```
const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
```
Kopyaladığın URL'i buraya yapıştır:
```
const SCRIPT_URL = 'https://script.google.com/macros/s/SENKEND_URL/exec';
```

## Hazır! 🎉
Artık form gönderildiğinde veriler otomatik olarak Google Sheets'teki **"Başvurular"** sayfasına işlenir.

### Kaydedilen Sütunlar
| Tarih | Ad | Soyad | Telefon | E-posta | Şehir | Bütçe Aralığı | Mülk Tipi | Satın Alma Amacı | Not |
|---|---|---|---|---|---|---|---|---|---|
