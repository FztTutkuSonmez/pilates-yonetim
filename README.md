# Reformer Pilates Stüdyo Yönetimi — Canlıya Alma Rehberi

Bu klasör, uygulamanın gerçek bir web sitesi olarak yayınlanmaya hazır hâlidir.
Supabase bağlantı bilgileri `src/supabaseClient.js` içine zaten işlendi.

## 1) Vercel'de yayınlama (önerilen, ücretsiz, ~5 dakika)

**A. GitHub'a yükle**
1. github.com'da ücretsiz hesap aç (yoksa)
2. "New repository" ile boş bir repo oluştur (örn. `pilates-yonetim`)
3. Bu klasördeki TÜM dosya ve klasörleri (package.json, index.html, src/ klasörü, vs.)
   repo sayfasındaki "Add file → Upload files" ile sürükle-bırak yükle, "Commit changes" de

**B. Vercel'e bağla**
1. vercel.com'da ücretsiz hesap aç, GitHub hesabınla giriş yap
2. "Add New... → Project" de, az önce oluşturduğun repoyu seç
3. Vercel ayarları otomatik algılar (Framework: Vite) — hiçbir şeye dokunmadan "Deploy" de
4. 1-2 dakika içinde `https://pilates-yonetim-xxxx.vercel.app` gibi bir adres verecek

Bu adres artık senin uygulamanın gerçek, canlı, herkese açık linki.
Bunu kendine ve tüm hocalara gönder — herkes kendi telefonundan/bilgisayarından
bu linke girip PIN'iyle giriş yapacak.

## 2) Telefonlarda "uygulama gibi" kullanmak

- **iPhone (Safari):** linki aç → paylaş ikonu → "Ana Ekrana Ekle"
- **Android (Chrome):** linki aç → sağ üst ⋮ menü → "Ana ekrana ekle"

Bu şekilde telefonun ana ekranında normal bir uygulama ikonu gibi durur,
tarayıcı çubuğu görünmez.

## 3) Değişiklik yapmak istersen

Kod değişikliği gerektiğinde (yeni özellik, düzeltme vb.) bana tekrar yaz,
güncellenmiş `src/App.jsx` dosyasını sana veririm. Sen de GitHub repo'daki
o dosyayı yenisiyle değiştirip "Commit" dersin — Vercel birkaç saniyede
otomatik olarak yeni sürümü yayınlar, hiçbir ekstra işlem gerekmez.

## 4) Notlar

- Giriş PIN'leri ve tüm veriler artık Supabase'deki gerçek veritabanında
  tutuluyor — tarayıcı/telefon değiştirsen bile veriler kaybolmaz.
- Birden fazla kişi aynı anda kullanabilir, değişiklikler anlık olarak
  herkese yansır (Supabase realtime).
- Supabase ücretsiz planı küçük-orta ölçekli bir stüdyo için fazlasıyla
  yeterlidir; veri hacmi çok büyürse (binlerce kayıt/ay) ücretli plana
  geçmen gerekebilir — o noktaya gelirsen haber ver, birlikte değerlendiririz.
