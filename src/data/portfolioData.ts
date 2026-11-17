export interface StudentIdentity {
  fullName: string;
  shortName: string;
  classGrade: string;
  department: string;
  departmentShort: string;
  school: string;
  schoolAddress: string;
  academicYear: string;
  nis: string;
  email: string;
  portraitPath: string;
  summary: string;
  academicObjective: string;
}

export interface CompetencyItem {
  code: string;
  title: string;
  category: string;
  level: 'Mahir' | 'Kompeten' | 'Dasar Kuat';
  description: string;
  tools: string;
}

export type ProjectCategory =
  | 'Semua'
  | 'Instalasi Penerangan'
  | 'Panel & Kontrol'
  | 'Pengukuran & Gambar';

export interface PracticalProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Semua'>;
  semester: string;
  date: string;
  featured?: boolean;
  imagePath: string;
  imageAlt: string;
  summary: string;
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  methodology: string[];
  safetyNotes: string;
  supervisor: string;
}

export interface AcademicRecordItem {
  period: string;
  title: string;
  institution: string;
  category: string;
  result: string;
  notes: string;
}

export const studentIdentity: StudentIdentity = {
  fullName: 'M. Adib Firnanda',
  shortName: 'M. Adib Firnanda',
  classGrade: 'X TITL 2',
  department: 'Teknik Instalasi Tenaga Listrik',
  departmentShort: 'TITL',
  school: 'SMKN 1 Sidayu',
  schoolAddress: 'Jl. Raya Wadeng, Kec. Sidayu, Kab. Gresik, Jawa Timur',
  academicYear: '2026 / 2027',
  nis: '2026.10.042',
  email: 'adib.firnanda.titl2@smkn1sidayu.sch.id',
  portraitPath: '/src/assets/images/jefri_nichol_portrait_1794893743500.jpg',
  summary:
    'Siswa aktif kelas X TITL 2 di SMKN 1 Sidayu yang berfokus pada penguasaan teknik instalasi penerangan, perancangan gambar diagram garis tunggal, perakitan panel kontrol dasar, serta penerapan prosedur Keselamatan dan Kesehatan Kerja (K3LH) sesuai standar PUIL 2011 dan SNI.',
  academicObjective:
    'Membangun fondasi teknis yang disiplin, teliti, dan berstandar industri dalam bidang ketenagalistrikan guna mempersiapkan kompetensi uji sertifikasi keahlian dan Praktik Kerja Lapangan (PKL) di sektor kelistrikan dan otomasi industri.',
};

export const heroHighlights = [
  {
    label: 'Program Keahlian',
    value: 'Teknik Instalasi Tenaga Listrik',
  },
  {
    label: 'Kelas & Satuan Pendidikan',
    value: 'X TITL 2 · SMKN 1 Sidayu',
  },
  {
    label: 'Fokus Praktikum Utama',
    value: 'Instalasi Penerangan & Panel Kontrol',
  },
  {
    label: 'Acuan Standar Teknis',
    value: 'PUIL 2011 · SNI · K3LH',
  },
];

export const competencies: CompetencyItem[] = [
  {
    code: 'TITL-01',
    title: 'Keselamatan & Kesehatan Kerja (K3LH) Ketenagalistrikan',
    category: 'Dasar Bengkel',
    level: 'Mahir',
    description:
      'Penerapan prosedur Lockout/Tagout (LOTO), penggunaan Alat Pelindung Diri (APD) berisolasi, identifikasi bahaya sengatan listrik, serta pertolongan pertama kecelakaan kerja bengkel.',
    tools: 'Helm Safety, Sarung Tangan Isolasi 1000V, Sepatu Safety, Test Pen',
  },
  {
    code: 'TITL-02',
    title: 'Instalasi Penerangan Bangunan Sederhana 1 Fasa',
    category: 'Instalasi Tenaga',
    level: 'Kompeten',
    description:
      'Perakitan rangkaian saklar tunggal, saklar seri, saklar tukar (hotel), stop kontak berarde, dan pembagian grup beban pada PHB (Perlengkapan Hubung Bagi) menggunakan pipa PVC.',
    tools: 'Kabel NYA 1.5 mm² & 2.5 mm², MCB 6A–10A, Pipa PVC 20mm, T-Dos',
  },
  {
    code: 'TITL-03',
    title: 'Pengukuran Besaran Listrik & Pengujian Tahanan Isolasi',
    category: 'Instrumentasi',
    level: 'Kompeten',
    description:
      'Pengukuran tegangan AC/DC, arus beban tanpa memutus rangkaian, kontinuitas penghantar, serta pengujian tahanan isolasi kabel sesuai batas minimal PUIL.',
    tools: 'Multimeter Digital, Tang Ampere (Clamp Meter), Insulation Tester',
  },
  {
    code: 'TITL-04',
    title: 'Gambar Teknik & Diagram Pengawatan Listrik',
    category: 'Perencanaan',
    level: 'Kompeten',
    description:
      'Pembacaan dan penggambaran diagram satu garis (Single Line Diagram), diagram pengawatan (Wiring Diagram), serta simbol komponen kontrol elektromagnetik berstandar IEC.',
    tools: 'Kertas Gambar A3, Penggaris Skala, Rapido/Drawing Pen, Simbol IEC',
  },
  {
    code: 'TITL-05',
    title: 'Pekerjaan Dasar Elektromekanik & Terminasi Panel',
    category: 'Elektromekanik',
    level: 'Dasar Kuat',
    description:
      'Pengupasan dan penyambungan kabel ekor babi (pigtail) dan puntir, pemasangan sepatu kabel (cable lug), pelabelan ferule, serta penataan jalur kabel pada cable duct panel.',
    tools: 'Tang Kombinasi, Tang Potong, Tang Crimping, Wire Stripper, Obeng Isolasi',
  },
];

export const practicalProjects: PracticalProject[] = [
  {
    id: 'prak-01',
    title: 'Instalasi Penerangan 1 Fasa & Panel Distribusi PHB',
    category: 'Instalasi Penerangan',
    semester: 'Semester Genap',
    date: 'Oktober 2026',
    featured: true,
    imagePath: '/src/assets/images/project_lighting_panel_1794893412695.jpg',
    imageAlt:
      'Papan praktikum instalasi penerangan 1 fasa dengan box MCB dan jalur kabel teratur',
    summary:
      'Perakitan sistem distribusi listrik rumah tinggal 1 fasa meliputi pembagian grup MCB penerangan dan kotak kontak, penataan jalur pipa conduit PVC, serta penyambungan terminal netral dan pembumian (PE) sesuai kode warna PUIL 2011.',
    technicalSpecs: [
      { label: 'Tegangan Kerja', value: '220 V AC / 50 Hz' },
      { label: 'Proteksi Utama', value: 'MCB 1P 16A + RCCB 30mA' },
      { label: 'Grup Beban', value: '2 Grup Lampu (6A) · 1 Grup Kontak (10A)' },
      { label: 'Penghantar', value: 'NYA 1.5 mm² & 2.5 mm² (Cokelat/Biru/Kuning-Hijau)' },
    ],
    methodology: [
      'Membaca gambar diagram garis tunggal dan menentukan titik penempatan T-Dos, saklar, serta box PHB pada papan kerja.',
      'Memotong dan membengkokkan pipa PVC 20mm secara presisi menggunakan pegas bending, lalu mengikat dengan klem sadel.',
      'Menarik kabel fasa (cokelat/merah), netral (biru), dan pembumian (kuning-hijau) tanpa cacat isolasi.',
      'Melakukan uji kontinuitas dan tahanan isolasi menggunakan multimeter sebelum penyambungan sumber tegangan.',
    ],
    safetyNotes:
      'Seluruh sambungan di dalam T-Dos diisolasi menggunakan lasdop dan diuji bebas hubung singkat (short-circuit check) di bawah pengawasan instruktur bengkel.',
    supervisor: 'Bengkel Instalasi Penerangan · SMKN 1 Sidayu',
  },
  {
    id: 'prak-02',
    title: 'Perakitan Panel Kontrol Motor DOL (Direct On Line)',
    category: 'Panel & Kontrol',
    semester: 'Semester Genap',
    date: 'November 2026',
    featured: false,
    imagePath: '/src/assets/images/project_motor_control_1794893413261.jpg',
    imageAlt:
      'Panel kontrol motor listrik dengan kontaktor magnet, thermal overload relay, dan MCB',
    summary:
      'Pengenalan dan perakitan rangkaian kontrol pengunci (self-holding) menggunakan kontaktor magnetik, tombol tekan Start/Stop, lampu indikator status operasi, dan proteksi beban lebih Thermal Overload Relay (TOR) pada box panel berjalur duct.',
    technicalSpecs: [
      { label: 'Rangkaian Kontrol', value: '220 V AC (NO/NC Interlock)' },
      { label: 'Komponen Utama', value: 'Kontaktor LC1D · TOR · MCB 3P & 1P' },
      { label: 'Tata Letak Kabel', value: 'Cable Duct Berlubang & Terminal Blok' },
      { label: 'Indikator Panel', value: 'Pilot Lamp Hijau (Run) · Merah (Stop)' },
    ],
    methodology: [
      'Memasang rel DIN simetris dan cable duct secara rapi di atas pelat dasar panel.',
      'Merakit jalur pengawatan rangkaian kontrol terlebih dahulu dari MCB 1 fasa menuju kontak NC TOR, tombol Stop, dan tombol Start dengan pengunci kontaktor.',
      'Memasang label penomoran kabel pada setiap terminal koil A1/A2 dan kontak bantu 13/14.',
      'Menguji fungsi penguncian serta simulasi trip pada tombol test TOR tanpa beban daya utama.',
    ],
    safetyNotes:
      'Pengujian rangkaian dilakukan pada tegangan kontrol terpisah dan diverifikasi oleh guru pembimbing sebelum simulasi penyalaan.',
    supervisor: 'Laboratorium Kontrol Dasar · SMKN 1 Sidayu',
  },
  {
    id: 'prak-03',
    title: 'Kalibrasi & Pengukuran Rangkaian Menggunakan Alat Ukur Listrik',
    category: 'Pengukuran & Gambar',
    semester: 'Semester Ganjil',
    date: 'September 2026',
    featured: false,
    imagePath: '/src/assets/images/project_multimeter_measurement_1794893413215.jpg',
    imageAlt:
      'Multimeter digital, tang ampere, obeng isolasi, dan papan uji rangkaian di meja praktikum',
    summary:
      'Praktikum pengukuran tegangan jala-jala, arus beban resistor dan lampu pijar, pembacaan nilai resistansi, serta pemeriksaan polaritas dan kontinuitas penghantar menggunakan multimeter digital dan clamp meter.',
    technicalSpecs: [
      { label: 'Instrumen Ukur', value: 'Digital Multimeter & Clamp Meter' },
      { label: 'Rentang Uji Tegangan', value: '0 – 400 V AC / 0 – 24 V DC' },
      { label: 'Batas Toleransi Baca', value: '± 1.5% Nilai Nominal' },
      { label: 'Peralatan Pendukung', value: 'Obeng Berisolasi VDE 1000V' },
    ],
    methodology: [
      'Memeriksa kondisi probe uji dan posisi selektor multimeter sebelum menyentuh titik ukur.',
      'Mengukur tegangan keluaran catu daya AC dan DC dengan teknik pengukuran paralel.',
      'Mengukur arus beban AC menggunakan rahang clamp meter pada satu penghantar fasa.',
      'Mencatat seluruh hasil pembacaan ke dalam tabel laporan praktikum untuk dibandingkan dengan perhitungan hukum Ohm.',
    ],
    safetyNotes:
      'Wajib memastikan selektor tidak berada pada posisi Ohm atau Ampere saat mengukur tegangan sumber jala-jala.',
    supervisor: 'Lab Dasar Pengukuran Listrik · SMKN 1 Sidayu',
  },
  {
    id: 'prak-04',
    title: 'Perancangan Single Line Diagram & Tata Letak Instalasi Rumah',
    category: 'Pengukuran & Gambar',
    semester: 'Semester Ganjil',
    date: 'Agustus 2026',
    featured: false,
    imagePath: '/src/assets/images/project_technical_drawing_1794893414646.jpg',
    imageAlt:
      'Gambar teknik instalasi listrik diagram satu garis di atas kertas gambar dengan penggaris skala',
    summary:
      'Penyusunan gambar teknik rencana instalasi penerangan dan daya rumah tinggal tipe 45 menggunakan skala 1:50 lengkap dengan etiket gambar, simbol standar IEC/PUIL, serta rekapitulasi kebutuhan daya dan pengaman.',
    technicalSpecs: [
      { label: 'Format Media', value: 'Kertas Gambar A3 (Skala 1:50)' },
      { label: 'Standar Simbol', value: 'IEC 60617 & PUIL 2011' },
      { label: 'Daya Rencana', value: '1300 VA (MCB Utama 6A)' },
      { label: 'Kelengkapan', value: 'Denah Titik Lampu, SLD & Rekap Daya' },
    ],
    methodology: [
      'Membuat garis tepi dan kepala gambar (etiket) sesuai standar gambar teknik ISO.',
      'Menggambar denah ruangan dan menentukan posisi optimal saklar dekat pintu masuk.',
      'Memetakan jalur penghantar antar titik beban disertai keterangan jumlah inti kabel (tanda garis miring).',
      'Menyusun diagram satu garis dari kWh meter menuju MCB pembagi grup.',
    ],
    safetyNotes:
      'Perencanaan jarak aman kotak kontak minimal 150 cm dari area basah kamar mandi telah diterapkan pada gambar denah.',
    supervisor: 'Studio Gambar Teknik · SMKN 1 Sidayu',
  },
];

export const academicRecords: AcademicRecordItem[] = [
  {
    period: '2026 — Sekarang',
    title: 'Siswa Aktif Kelas X TITL 2 — Teknik Instalasi Tenaga Listrik',
    institution: 'SMKN 1 Sidayu, Kab. Gresik',
    category: 'Pendidikan Formal',
    result: 'Aktif · Semester 1–2',
    notes:
      'Menempuh mata pelajaran Dasar-Dasar Teknik Ketenagalistrikan, Gambar Teknik Listrik, dan Praktikum Bengkel Instalasi Dasar.',
  },
  {
    period: 'Oktober 2026',
    title: 'Evaluasi Praktik Instalasi Penerangan 1 Fasa & PHB',
    institution: 'Bengkel TITL SMKN 1 Sidayu',
    category: 'Penilaian Praktikum',
    result: 'Tuntas Memuaskan',
    notes:
      'Penilaian meliputi kerapian pengawatan, ketepatan fungsi saklar seri dan tukar, serta kepatuhan penuh terhadap prosedur K3LH.',
  },
  {
    period: 'Agustus 2026',
    title: 'Orientasi & Uji Kesiapan Keselamatan Kerja Bengkel (K3LH)',
    institution: 'Unit Produksi & Bengkel Listrik SMKN 1 Sidayu',
    category: 'Kompetensi Dasar',
    result: 'Lulus Kualifikasi Bengkel',
    notes:
      'Dinyatakan siap bekerja di bengkel listrik setelah memahami penggunaan APD, penanganan bahaya listrik, dan tata tertib peralatan.',
  },
  {
    period: '2026 — Sekarang',
    title: 'Anggota Kelompok Studi Teknik Elektro & Otomasi Siswa',
    institution: 'Ekstrakurikuler Kejuruan SMKN 1 Sidayu',
    category: 'Kegiatan Sekolah',
    result: 'Anggota Aktif',
    notes:
      'Berpartisipasi dalam pemeliharaan ringan instalasi penerangan kelas serta pelatihan dasar pembacaan diagram rangkaian kontrol.',
  },
];
