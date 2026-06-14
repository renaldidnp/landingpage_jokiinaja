export interface Project {
  slug: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  result: string;
  year: string;
  color: string;
  image: string;
  images?: string[];
  client: string;
  duration: string;
  team: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  outcomes: string[];
}

export const projects: Project[] = [
  {
    slug: "dashboard-monitoring-bansos",
    category: "Web Application",
    title: "Dashboard Monitoring Penyaluran Bansos",
    desc: "Aplikasi monitoring bantuan sosial dengan fitur scan barcode, validasi penerima, dan laporan real-time.",
    tags: ["Laravel", "MySQL", "QR Code"],
    result: "Validasi 5x Lebih Cepat",
    year: "2025",
    color: "#E8F5E9",
    image: "/portofolio/bansos.png",
    images: ["/portofolio/bansos.png", "/portofolio/bansos1.png", "/portofolio/bansos2.png"],

    client: "Program Monitoring Sosial",
    duration: "4 Bulan",
    team: "4 Orang",
    fullDesc: "Platform monitoring distribusi bantuan dengan dashboard terpusat dan pelacakan penerima secara real-time.",
    challenge: "Validasi penerima dilakukan manual dan sering terjadi data ganda.",
    solution: "Membangun sistem barcode dan dashboard monitoring yang terintegrasi.",
    outcomes: ["Validasi 5x lebih cepat", "Data ganda turun 95%", "Monitoring real-time", "Laporan otomatis"],
  },

  {
    slug: "sistem-absensi-qr-sekolah",
    category: "Mobile Development",
    title: "Aplikasi Absensi QR Code",
    desc: "Aplikasi absensi siswa dan karyawan berbasis QR Code dengan dashboard monitoring.",
    tags: ["Flutter", "Laravel", "Firebase"],
    result: "Absensi 80% Lebih Cepat",
    year: "2025",
    color: "#E8F4E8",
    image: "/images/projects/absensi.jpg",

    client: "Lembaga Pendidikan",
    duration: "3 Bulan",
    team: "3 Orang",
    fullDesc: "Aplikasi mobile untuk digitalisasi proses absensi menggunakan QR Code.",
    challenge: "Rekap absensi masih manual dan memakan waktu.",
    solution: "Mengembangkan aplikasi scan QR dengan dashboard laporan otomatis.",
    outcomes: ["Absensi lebih cepat", "Rekap otomatis", "Data tersimpan real-time", "Human error berkurang"],
  },

  {
    slug: "platform-scraping-media-sosial",
    category: "Web Scraping",
    title: "Platform Analitik Media Sosial",
    desc: "Sistem scraping komentar, engagement, dan tren media sosial secara otomatis.",
    tags: ["Python", "Selenium", "Scraping"],
    result: "50.000 Data/Hari",
    year: "2025",
    color: "#E8EEF4",
    image: "/images/projects/scraping.jpg",

    client: "Riset Digital",
    duration: "2 Bulan",
    team: "2 Orang",
    fullDesc: "Platform scraping untuk pengumpulan data media sosial secara otomatis.",
    challenge: "Pengumpulan data dilakukan secara manual.",
    solution: "Membangun crawler dan dashboard analitik otomatis.",
    outcomes: ["50.000 data diproses per hari", "Monitoring otomatis", "Visualisasi dashboard", "Hemat 120 jam kerja per bulan"],
  },

  {
    slug: "deteksi-penyakit-daun",
    category: "Machine Learning",
    title: "Deteksi Penyakit Daun Tanaman",
    desc: "Model AI berbasis CNN untuk klasifikasi penyakit tanaman dari gambar daun.",
    tags: ["TensorFlow", "CNN", "Computer Vision"],
    result: "Akurasi 95%",
    year: "2025",
    color: "#F4EBE8",
    image: "/images/projects/ml-daun.jpg",

    client: "Riset Pertanian",
    duration: "4 Bulan",
    team: "3 Orang",
    fullDesc: "Sistem klasifikasi penyakit tanaman menggunakan deep learning.",
    challenge: "Identifikasi penyakit secara manual membutuhkan tenaga ahli.",
    solution: "Melatih model CNN menggunakan ribuan dataset gambar tanaman.",
    outcomes: ["Akurasi 95%", "Deteksi dalam hitungan detik", "Membantu proses diagnosis", "Siap diintegrasikan ke aplikasi mobile"],
  },

  {
    slug: "ocr-ekstraksi-dokumen",
    category: "Artificial Intelligence",
    title: "OCR & Ekstraksi Data Dokumen",
    desc: "Sistem AI untuk membaca KTP, invoice, dan dokumen PDF secara otomatis.",
    tags: ["OCR", "Python", "OpenCV"],
    result: "Input Data 15x Lebih Cepat",
    year: "2025",
    color: "#F0EBF4",
    image: "/images/projects/ocr.jpg",

    client: "Digitalisasi Arsip",
    duration: "3 Bulan",
    team: "3 Orang",
    fullDesc: "Platform OCR untuk mengubah dokumen menjadi data terstruktur.",
    challenge: "Ribuan dokumen harus diinput secara manual.",
    solution: "Menggunakan OCR dan validasi data berbasis AI.",
    outcomes: ["Input data 15x lebih cepat", "Akurasi 96%", "Mengurangi pekerjaan manual", "Mampu memproses ribuan dokumen"],
  },

  {
    slug: "iot-monitoring-kualitas-air",
    category: "Internet of Things",
    title: "Monitoring Kualitas Air Berbasis IoT",
    desc: "Sistem sensor IoT untuk memantau pH, suhu, dan kualitas air secara real-time.",
    tags: ["ESP32", "MQTT", "IoT"],
    result: "Monitoring 24/7",
    year: "2025",
    color: "#EBF4F0",
    image: "/images/projects/iot-air.jpg",

    client: "Budidaya Perikanan",
    duration: "2 Bulan",
    team: "2 Orang",
    fullDesc: "Sistem monitoring berbasis sensor yang mengirim data ke dashboard cloud.",
    challenge: "Pengukuran kualitas air dilakukan secara manual.",
    solution: "Membangun perangkat IoT dengan dashboard monitoring online.",
    outcomes: ["Monitoring real-time", "Notifikasi otomatis", "Pengurangan risiko kematian ikan", "Data historis tersimpan"],
  },
];
