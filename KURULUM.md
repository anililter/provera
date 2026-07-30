# 🔗 Google Sheets Bağlantısı — 3 Adım

## Hedef Spreadsheet
https://docs.google.com/spreadsheets/d/1nFDLjHhe-qynE8T1qEtecu5UHzhrC8I_LEwwnxQY3tA

---

## Adım 1 — Apps Script'i Aç

👉 **[script.google.com](https://script.google.com)** adresine git  
→ **"Yeni proje"** tıkla  
→ Projeye isim ver: `Provera Roadshow`

---

## Adım 2 — Kodu Yapıştır

1. Editördeki `function myFunction() {}` kodunu **tamamen sil**
2. `appsscript.gs` dosyasının tüm içeriğini **kopyala → yapıştır**
3. **Kaydet** (Ctrl+S)

---

## Adım 3 — Deploy Et (Web App Yap)

1. Sağ üst → **Deploy → New deployment**
2. Tip seç: ⚙️ → **Web app**
3. Ayarlar:
   - **Execute as:** Me (ben)
   - **Who has access:** Anyone ← bu şart!
4. **Deploy** butonuna bas
5. İzin iste → **İzin ver**
6. Çıkan **URL'yi kopyala** (şuna benzer):
   ```
   https://script.google.com/macros/s/AKfyc.../exec
   ```

---

## Adım 4 — URL'i index.html'e Yapıştır

`index.html` dosyasında bu satırı bul (yaklaşık 1330. satır):

```javascript
const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
```

Kopyaladığın URL'i yapıştır:

```javascript
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
```

Kaydet → GitHub'a push et → **Bitti!** 🎉

---

## Kaydedilen Sütunlar

| Tarih | Ad | Soyad | E-posta | Telefon | Bütçe Aralığı |
|---|---|---|---|---|---|
| Otomatik | Zorunlu | Zorunlu | Zorunlu | Zorunlu | İsteğe bağlı |
