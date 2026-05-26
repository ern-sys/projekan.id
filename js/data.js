/**
 * data.js — SINGLE SOURCE OF TRUTH
 * Edit semua konten website di sini: tim, project, layanan, kontak.
 * File lain hanya membaca dari sini, TIDAK perlu diedit untuk update konten.
 */

const SITE_DATA = {

  /* ── INFO UMUM ─────────────────────────────────────────── */
  site: {
    name:      "Projekan.ID",
    tagline:   "Software & Tech Team",
    email:     "project.semua001@gmail.com",
    whatsapp:  "wa.me/62087880842171",   // format: 628xxx (tanpa +)
    github:    "https://github.com/ern-sys",
    linkedin:  "",
    instagram: "",
    year:      new Date().getFullYear(),
  },

  /* ── HERO STATS ─────────────────────────────────────────── */
  stats: [
    { num: "20+", label: "Project Selesai" },
    { num: "100%", label: "Client Puas"    },
    { num: "5+",  label: "Tech Expert"     },
    { num: "3th", label: "Pengalaman"      },
  ],

  /* ── SERVICES ───────────────────────────────────────────── */
  services: [
    {
      icon:  "🌐",
      title: "Web Development",
      desc:  "Membangun aplikasi web modern yang performant, responsive, dan scalable menggunakan tech stack terkini.",
      tags:  ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      icon:  "⚙️",
      title: "Backend & API",
      desc:  "Arsitektur backend yang solid, RESTful API, microservices, dan integrasi sistem yang aman dan cepat.",
      tags:  ["Node.js", "Go", "PostgreSQL", "Redis"],
    },
    {
      icon:  "📱",
      title: "Mobile App",
      desc:  "Aplikasi mobile cross-platform dengan UI yang smooth dan performa native untuk iOS & Android.",
      tags:  ["Flutter", "React Native", "Firebase"],
    },
    {
      icon:  "☁️",
      title: "DevOps & Cloud",
      desc:  "Setup infrastruktur, CI/CD pipeline, containerisasi, dan monitoring untuk production environment.",
      tags:  ["Docker", "Nginx", "Linux", "Proxmox"],
    },
    {
      icon:  "🛒",
      title: "E-Commerce",
      desc:  "Platform toko online custom atau berbasis CMS yang siap berjualan dengan payment gateway lokal.",
      tags:  ["Laravel", "Midtrans", "Xendit"],
    },
    {
      icon:  "🔍",
      title: "Konsultasi Teknis",
      desc:  "Review arsitektur, code audit, pemilihan tech stack, dan roadmap teknis untuk produk digital Anda.",
      tags:  ["Architecture", "Code Review", "Tech Audit"],
    },
  ],

  /* ── PORTFOLIO ──────────────────────────────────────────── */
  // filter: harus match dengan tab di portfolio header
  portfolioFilters: ["Semua", "Web App", "Mobile", "Backend"],

  projects: [
    {
      emoji:    "📦",
      bg:       "linear-gradient(135deg,#EBF0FF,#DBEAFE)",
      category: "Web App",
      year:     "2024",
      title:    "LogiTrack — Sistem Logistik",
      desc:     "Platform manajemen pengiriman real-time untuk perusahaan distribusi dengan 500+ mitra kurir.",
      stack:    ["React", "Node.js", "PostgreSQL", "Socket.io"],
    },
    {
      emoji:    "💳",
      bg:       "linear-gradient(135deg,#DCFCE7,#D1FAE5)",
      category: "Web App",
      year:     "2024",
      title:    "KasirKu — POS Modern",
      desc:     "Aplikasi kasir cloud untuk UMKM dengan laporan keuangan otomatis dan multi-cabang.",
      stack:    ["Next.js", "Go", "MySQL", "Midtrans"],
    },
    {
      emoji:    "🎓",
      bg:       "linear-gradient(135deg,#FEF3C7,#FDE68A)",
      category: "Web App",
      year:     "2023",
      title:    "Kelasmu — LMS Platform",
      desc:     "Learning Management System untuk lembaga pendidikan dengan fitur live class & sertifikasi.",
      stack:    ["Laravel", "Vue.js", "Redis", "AWS S3"],
    },
    {
      emoji:    "🏥",
      bg:       "linear-gradient(135deg,#FCE7F3,#FBCFE8)",
      category: "Mobile",
      year:     "2023",
      title:    "SehatApp — Antrian Klinik",
      desc:     "Sistem manajemen antrian klinik digital dengan notifikasi WhatsApp otomatis ke pasien.",
      stack:    ["Flutter", "Firebase", "WhatsApp API"],
    },
    {
      emoji:    "🏘️",
      bg:       "linear-gradient(135deg,#F3E8FF,#E9D5FF)",
      category: "Backend",
      year:     "2023",
      title:    "PropertyHub — Listing Portal",
      desc:     "Portal properti dengan pencarian berbasis peta, virtual tour 360°, dan sistem KPR simulator.",
      stack:    ["React", "Node.js", "Google Maps", "MongoDB"],
    },
    {
      emoji:    "🍔",
      bg:       "linear-gradient(135deg,#FFEDD5,#FED7AA)",
      category: "Mobile",
      year:     "2022",
      title:    "Makan.in — Food Delivery",
      desc:     "Platform pesan antar makanan lokal dengan driver tracking real-time dan reward loyalty program.",
      stack:    ["React Native", "Go", "Kafka", "Xendit"],
    },
  ],

  /* ── TEAM ───────────────────────────────────────────────── */
  team: [
    {
      initials: "SR",
      name:     "Saepul Rahman",
      role:     "Fullstack Developer",
      color:    "linear-gradient(135deg,#1A56FF,#0A36CC)",
      skills:   ["React", "Node.js", "Go"],
    },
    {
      initials: "EI",
      name:     "Enggar Irawan",
      role:     "SysAdmin",
      color:    "linear-gradient(135deg,#16A34A,#15803D)",
      skills:   ["Linux", "Networking", "Python"],
    },
    {
      initials: "Hasanudin",
      name:     "Hasanudin",
      role:     "IT Engineer",
      color:    "linear-gradient(135deg,#D97706,#B45309)",
      skills:   ["MikroTik", "Cisco", "Infrastructure"],
    },
    {
      initials: "WH",
      name:     "Wira Harsa",
      role:     "Digital Marketer",
      color:    "linear-gradient(135deg,#7C3AED,#6D28D9)",
      skills:   ["Figma", "JS", "Tailwind"],
    },
  ],

};
