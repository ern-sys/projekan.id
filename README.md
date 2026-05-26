# Projekan.ID — Website

Portfolio website tim Projekan.ID. Static site (HTML + CSS + JS), zero dependencies, zero build step.

---

## 📁 Struktur Folder

```
projekan-id/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Auto-deploy GitHub Actions
├── css/
│   ├── base.css          # Variables, reset, shared utilities
│   ├── nav.css
│   ├── hero.css
│   ├── services.css
│   ├── portfolio.css
│   ├── team.css
│   ├── cta.css
│   └── footer.css
├── js/
│   ├── data.js           # ⭐ EDIT DI SINI — semua konten website
│   ├── hero.js
│   ├── services.js
│   ├── portfolio.js
│   ├── team.js
│   ├── cta.js
│   ├── footer.js
│   └── main.js
├── assets/img/           # Taruh gambar/logo di sini
├── index.html
├── CNAME                 # Custom domain GitHub Pages
├── .gitignore
└── README.md
```

---

## ✏️ Cara Edit Konten

**Cukup edit satu file: `js/data.js`**

Semua konten (info tim, project, layanan, kontak) ada di sana.
File renderer lain tidak perlu disentuh.

---

## 🚀 TUTORIAL DEPLOY: GitHub Pages + Auto-Deploy

### Langkah 1 — Buat Repository di GitHub

1. Buka [github.com](https://github.com) → login
2. Klik tombol **"New"** (pojok kiri atas)
3. Isi:
   - **Repository name**: `projekan-id` (atau nama lain)
   - **Visibility**: Public ← *wajib Public untuk GitHub Pages gratis*
   - Jangan centang "Add README" (kita sudah punya)
4. Klik **"Create repository"**

---

### Langkah 2 — Push Kode ke GitHub

Buka terminal di folder project, jalankan:

```bash
# Inisialisasi git (kalau belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "feat: initial projekan.id website"

# Hubungkan ke repo GitHub (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push ke branch main
git branch -M main
git push -u origin main
```

---

### Langkah 3 — Aktifkan GitHub Pages

1. Di halaman repo GitHub, klik tab **Settings**
2. Di sidebar kiri, klik **Pages**
3. Di bagian **"Source"**, pilih:
   - **"GitHub Actions"** ← pilih ini (bukan "Deploy from a branch")
4. Klik **Save**

GitHub akan otomatis detect file `.github/workflows/deploy.yml` kita.

---

### Langkah 4 — Cek Proses Deploy

1. Klik tab **Actions** di repo
2. Lu akan lihat workflow **"Deploy to GitHub Pages"** sedang jalan
3. Tunggu ~1-2 menit sampai ada centang hijau ✅
4. Website lu live di:
   ```
   https://USERNAME.github.io/REPO_NAME
   ```

---

### Langkah 5 (Opsional) — Custom Domain

Kalau lu punya domain (misal `projekan.id`):

**Di GitHub:**
1. Settings → Pages → bagian "Custom domain"
2. Isi domain lu: `projekan.id`
3. Klik Save
4. File `CNAME` otomatis terupdate (atau edit manual isinya jadi `projekan.id`)

**Di DNS provider lu (Niagahoster/Cloudflare/dll):**

Untuk **apex domain** (`projekan.id`), tambahkan A records:
```
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

Untuk **subdomain** (`www.projekan.id`), tambahkan CNAME:
```
Type   Name  Value
CNAME  www   USERNAME.github.io
```

Propagasi DNS bisa makan waktu 5 menit - 24 jam.
Setelah itu, aktifkan **"Enforce HTTPS"** di Settings → Pages.

---

### Workflow Setelah Setup (Sehari-hari)

Setelah semua terset up, cara update website cukup:

```bash
# Edit js/data.js atau file CSS/JS lain
# Lalu:

git add .
git commit -m "update: tambah project baru XYZ"
git push
```

**Auto-deploy akan jalan sendiri dalam ~1-2 menit.** Tidak perlu action manual apapun.

---

## 🖥️ TUTORIAL DEPLOY: Self-Host (Proxmox + Nginx)

### Arsitektur

```
Internet → IP Public → Nginx Proxy Manager (NPM) → VM/LXC Nginx → File Website
```

### Di Server (VM/LXC)

```bash
# 1. Install nginx
apt update && apt install nginx -y

# 2. Buat folder website
mkdir -p /var/www/projekan-id

# 3. Copy file dari lokal ke server
# (jalankan dari komputer lokal, bukan server)
scp -r ./* user@IP_SERVER:/var/www/projekan-id/

# 4. Buat konfigurasi nginx
nano /etc/nginx/sites-available/projekan-id
```

Isi config nginx:
```nginx
server {
    listen 80;
    server_name _;   # ganti dengan domain kalau sudah punya

    root /var/www/projekan-id;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

```bash
# 5. Aktifkan site
ln -s /etc/nginx/sites-available/projekan-id /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### Di Nginx Proxy Manager

1. Login ke NPM (biasanya `http://IP_NPM:81`)
2. **Proxy Hosts → Add Proxy Host**
3. Isi:
   - **Domain Names**: domain lu atau IP public
   - **Scheme**: `http`
   - **Forward Hostname/IP**: IP VM nginx tadi
   - **Forward Port**: `80`
4. Tab **SSL** → Request Let's Encrypt Certificate (kalau sudah punya domain)
5. Save

---

## 🤔 GitHub Pages vs Self-Host — Pilih Mana?

| | GitHub Pages | Self-Host (Proxmox) |
|---|---|---|
| **Biaya** | Gratis | Listrik + hardware |
| **Setup** | ~10 menit | ~1-2 jam |
| **SSL** | Otomatis | Butuh domain untuk Let's Encrypt |
| **Custom Domain** | ✅ Bisa | ✅ Bisa |
| **Uptime** | 99.9% (GitHub infra) | Tergantung koneksi rumah/kantor |
| **Auto-deploy** | ✅ via GitHub Actions | Manual atau setup CI sendiri |
| **Rekomendasi** | Untuk portfolio publik | Kalau mau full kontrol & privasi |

**Saran gue**: pakai GitHub Pages dulu. Gratis, mudah, uptime bagus.
Self-host cocok kalau nanti butuh backend/database atau mau eksperimen infrastruktur.
