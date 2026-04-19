export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateISO: string;
  author: string;
  role: string;
  category: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "tools-terbaik-buat-cv-2026",
    title: "7 Tools Terbaik untuk Membuat CV di 2026 (Gratis & ATS-Friendly)",
    description: "Bingung pilih tools buat CV yang benar-benar ampuh lolos ATS? Kami bandingkan 7 aplikasi terbaik di 2026 — dari Canva sampai CleverCV — secara jujur.",
    date: "19 April 2026",
    dateISO: "2026-04-19",
    author: "Amirul",
    role: "Creator, CleverCV",
    category: "Tools & Review",
    readTime: "8 menit baca",
    tags: ["cv builder", "ats", "tools karir", "resume"],
    content: `
<p>Kamu sudah apply ke belasan perusahaan tapi belum ada yang reply? Salah satu masalah paling umum adalah CV yang tidak dioptimasi dengan benar — baik dari sisi format ATS, keyword, maupun relevansi konten dengan posisi yang dilamar.</p>

<p>Di artikel ini, kami merangkum <strong>7 tools terbaik untuk membuat CV di 2026</strong> — mulai dari yang paling simpel sampai yang paling canggih dengan fitur AI. Semua diulas secara jujur berdasarkan kebutuhan nyata job seeker Indonesia.</p>

<h2>Apa itu ATS dan Kenapa Penting?</h2>
<p>ATS (<em>Applicant Tracking System</em>) adalah perangkat lunak yang digunakan perusahaan untuk menyaring ribuan lamaran masuk secara otomatis sebelum sampai ke tangan HRD manusia. Sistem ini membaca teks dari CV kamu, mencari keyword yang relevan, dan memberikan skor. CV dengan skor rendah? Langsung tersingkir — bahkan tanpa pernah dibaca manusia.</p>
<p>Ini artinya: <strong>desain CV yang cantik tapi tidak ATS-friendly sama saja buang waktu</strong>. Yang paling penting adalah format yang bisa dibaca mesin + keyword yang tepat.</p>

<h2>Perbandingan 7 Tools CV Terbaik 2026</h2>

<table>
<thead><tr><th>Tools</th><th>Platform</th><th>Harga</th><th>ATS-Friendly</th><th>AI Tailoring</th><th>Rating</th></tr></thead>
<tbody>
<tr><td><strong>CleverCV</strong> ⭐</td><td>Android</td><td>Gratis</td><td>✅ Sangat baik</td><td>✅ Context-aware</td><td>9.4/10</td></tr>
<tr><td>Resume.io</td><td>Web</td><td>$2.95/bln</td><td>✅ Baik</td><td>❌ Tidak ada</td><td>7.8/10</td></tr>
<tr><td>Novoresume</td><td>Web</td><td>€9.99/bln</td><td>✅ Baik</td><td>❌ Terbatas</td><td>7.5/10</td></tr>
<tr><td>Zety</td><td>Web</td><td>$2.70/minggu</td><td>✅ Cukup baik</td><td>⚠️ Parafrase saja</td><td>7.0/10</td></tr>
<tr><td>Kickresume</td><td>Web</td><td>$10/bln</td><td>✅ Baik</td><td>⚠️ Parafrase saja</td><td>7.2/10</td></tr>
<tr><td>Canva</td><td>Web/Mobile</td><td>Gratis</td><td>❌ Buruk</td><td>❌ Tidak ada</td><td>4.5/10</td></tr>
<tr><td>LinkedIn Builder</td><td>Web</td><td>Gratis</td><td>⚠️ Cukup</td><td>❌ Tidak ada</td><td>6.0/10</td></tr>
</tbody>
</table>

<h2>1. CleverCV — Best Overall untuk Job Seeker Indonesia</h2>
<p>CleverCV adalah satu-satunya CV builder yang dirancang khusus untuk mengatasi masalah nyata job seeker: harus apply ke banyak lowongan sekaligus dengan CV yang berbeda-beda.</p>
<p>Konsepnya unik: kamu cukup buat satu <strong>Master Profile</strong> — isi semua riwayat pendidikan, pengalaman, dan skill sekali saja. Setelah itu, untuk setiap lamaran, tinggal tempel deskripsi pekerjaan dan AI CleverCV secara otomatis memilih pengalaman yang paling relevan, menyusun CV baru yang optimal untuk loker tersebut.</p>
<p><strong>Fitur unggulan:</strong></p>
<ul>
<li><strong>AI Tailoring 1-Klik</strong> — bukan sekadar parafrase, tapi context-aware: AI memilih pengalaman mana dari Master Profile yang paling relevan untuk posisi spesifik yang dilamar</li>
<li><strong>Screenshot Parsing</strong> — upload tangkapan layar loker dari Instagram atau LinkedIn, AI baca dan ekstrak otomatis tanpa ketik ulang</li>
<li><strong>Draft Checkpoints</strong> — simpan versi CV untuk role berbeda (contoh: Draft UI/UX, Draft Frontend) dan edit kapan saja</li>
<li><strong>10+ Template ATS-Ready</strong> — ganti desain dengan satu klik tanpa layout hancur</li>
<li><strong>Gratis</strong> — tidak perlu bayar langganan untuk fitur dasar</li>
</ul>
<p><strong>Kekurangan:</strong> Saat ini hanya tersedia di Android. iOS dalam pengembangan.</p>

<h2>2. Resume.io — Pilihan Bagus untuk Template Premium</h2>
<p>Resume.io menawarkan template yang bersih dan profesional dengan panduan konten di setiap bagian. ATS-friendly dan mudah digunakan. Namun, kamu perlu bayar untuk download PDF — dan tidak ada fitur AI tailoring yang benar-benar pintar.</p>

<h2>3. Novoresume — Desain Premium, Harga Premium</h2>
<p>Novoresume dikenal dengan template-template premium yang terlihat sangat profesional. ATS-optimized dan punya content analyzer. Sayangnya, harga berlangganannya cukup mahal untuk standar Indonesia (€9.99/bulan ≈ Rp 170.000).</p>

<h2>4. Zety — Panduan Konten Terlengkap</h2>
<p>Zety bagus untuk kamu yang masih bingung apa yang harus ditulis di CV. Mereka punya panduan konten dan suggestions untuk setiap bagian. Tapi AI-nya hanya sebatas parafrase teks — tidak ada context-awareness seperti CleverCV.</p>

<h2>5. Kickresume — AI Writing, Tapi Terbatas</h2>
<p>Kickresume punya fitur AI writing assistant yang bisa membantu menulis poin-poin pengalaman kerja. Template-nya juga bagus. Namun sama seperti Zety, AI-nya tidak memahami konteks loker spesifik yang kamu lamar.</p>

<h2>6. Canva — Bagus untuk Desain, Buruk untuk ATS</h2>
<p>Canva adalah king of design — tapi bukan untuk CV yang harus lolos ATS. Masalah utamanya: CV Canva menggunakan elemen grafis, text box, dan kolom yang tidak bisa dibaca oleh sistem ATS. Selain itu, data dan desain menyatu — kalau kamu ganti template atau edit konten, layout bisa hancur berantakan.</p>
<p><strong>Kesimpulan:</strong> Gunakan Canva hanya jika kamu melamar ke industri kreatif yang benar-benar menilai desain visual (bukan sistem ATS).</p>

<h2>7. LinkedIn Resume Builder — Gratis tapi Sangat Terbatas</h2>
<p>LinkedIn punya fitur export profil ke CV PDF, tapi hasilnya sangat generik dan tidak bisa dikustomisasi. Bagus sebagai backup, tapi bukan pilihan utama.</p>

<h2>Kesimpulan: Tools Mana yang Harus Kamu Pilih?</h2>
<p>Kalau kamu jobseeker Indonesia yang aktif apply ke banyak lowongan sekaligus, <strong>CleverCV adalah pilihan terbaik</strong>. Gratis, ATS-friendly, dan satu-satunya yang punya AI tailoring yang benar-benar memahami konteks loker — bukan sekadar menulis ulang teks.</p>
<p>Kalau kamu butuh template premium berbayar untuk pasar internasional, Resume.io atau Novoresume adalah pilihan solid.</p>
<p>Dan kalau kamu masih tergoda Canva — pertimbangkan ulang. CV yang cantik tapi tidak lolos ATS tidak akan pernah dibaca HRD.</p>
    `,
  },
  {
    slug: "kenapa-cv-sering-ditolak-ats",
    title: "Kenapa CV Kamu Sering Ditolak Sebelum Dibaca HRD? 5 Penyebab & Solusinya",
    description: "CV kamu tidak pernah dapat reply? Kemungkinan besar gagal di ATS sebelum dibaca HRD. Ini 5 alasan paling umum dan cara fixnya.",
    date: "17 April 2026",
    dateISO: "2026-04-17",
    author: "Amirul",
    role: "Creator, CleverCV",
    category: "Tips Karir",
    readTime: "7 menit baca",
    tags: ["ats", "cv ditolak", "tips cv", "job seeker"],
    content: `
<p>Kamu sudah apply ke puluhan lowongan tapi tidak ada satu pun yang balas. Bukan berarti kamu tidak qualified — kemungkinan besar, CV kamu <strong>gagal melewati ATS (Applicant Tracking System)</strong> bahkan sebelum sempat dibaca satu manusia pun.</p>

<h2>Apa itu ATS dan Bagaimana Cara Kerjanya?</h2>
<p>ATS adalah software yang digunakan hampir semua perusahaan menengah-besar untuk menyaring lamaran masuk secara otomatis. Ketika kamu submit CV, sistem ini akan:</p>
<ol>
<li>Mengekstrak teks dari file CV kamu</li>
<li>Mencari keyword yang relevan dengan deskripsi pekerjaan</li>
<li>Memberikan skor kesesuaian (match score)</li>
<li>Hanya meneruskan CV dengan skor di atas threshold ke HRD</li>
</ol>
<p>Artinya: CV dengan skor ATS rendah langsung tersingkir — tanpa pernah dilihat manusia.</p>
<p>Riset menunjukkan bahwa <strong>lebih dari 75% CV gagal di tahap ATS</strong> sebelum sampai ke tangan rekruter. Ini adalah masalah nyata yang dialami jutaan jobseeker setiap hari.</p>

<h2>5 Alasan Paling Umum CV Gagal Lolos ATS</h2>

<h3>1. Format File yang Salah</h3>
<p>ATS paling baik membaca file <strong>.PDF</strong> dengan teks yang bisa di-select, atau <strong>.DOCX</strong>. Yang menjadi masalah adalah:</p>
<ul>
<li>CV dari Canva atau Figma yang diexport sebagai gambar — ATS melihatnya sebagai gambar kosong, tidak ada teks yang terbaca</li>
<li>PDF yang di-scan (hasil foto dokumen fisik) — hasilnya sama: gambar, bukan teks</li>
<li>Format .pages (Apple Pages) yang tidak universal</li>
</ul>
<p><strong>Fix:</strong> Gunakan PDF dengan teks yang bisa di-copy, atau DOCX standar.</p>

<h3>2. Keyword yang Tidak Match dengan Deskripsi Lowongan</h3>
<p>ATS bekerja dengan mencocokkan keyword di CV kamu dengan keyword di job description. Kalau perusahaan mencari "React.js developer" tapi di CV kamu ditulis "ReactJS" atau "React" — sistem mungkin tidak mengenalinya sebagai match.</p>
<p>Yang lebih umum: kamu menulis pengalaman kerja dengan bahasa umum ("mengerjakan proyek web") padahal HRD mencari kandidat dengan skill spesifik ("mengembangkan aplikasi menggunakan React.js dan Node.js").</p>
<p><strong>Fix:</strong> Baca deskripsi lowongan dengan seksama dan pastikan keyword spesifik yang disebutkan ada di CV kamu — dengan kata-kata yang sama persis.</p>

<h3>3. Menggunakan Tabel, Kolom, atau Elemen Grafis</h3>
<p>CV dua kolom memang terlihat rapi secara visual, tapi mayoritas ATS membacanya secara linear dari kiri ke kanan, atas ke bawah. Akibatnya, teks dari dua kolom bisa tercampur dan tidak terbaca dengan benar.</p>
<p>Elemen grafis seperti ikon skill, progress bar kemampuan bahasa, atau infografis tidak bisa dibaca ATS sama sekali.</p>
<p><strong>Fix:</strong> Gunakan layout satu kolom yang bersih. Ganti progress bar dengan teks eksplisit ("Bahasa Inggris: Profesional — IELTS 7.0").</p>

<h3>4. Tidak Ada Bagian "Summary" atau "Objective" yang Relevan</h3>
<p>Bagian summary di awal CV adalah kesempatan emas untuk menempatkan keyword paling penting. Banyak jobseeker yang melewatkan bagian ini atau mengisinya dengan kalimat generik seperti "Saya adalah orang yang pekerja keras dan berdedikasi."</p>
<p><strong>Fix:</strong> Tulis summary yang spesifik dan mengandung keyword relevan: "Software engineer dengan 3 tahun pengalaman di pengembangan aplikasi mobile menggunakan Flutter dan Dart, berfokus pada performa dan UX."</p>

<h3>5. CV yang Sama Dikirim ke Semua Lowongan</h3>
<p>Ini adalah kesalahan paling umum sekaligus yang paling merugikan. Setiap lowongan memiliki keyword dan prioritas yang berbeda. CV untuk posisi UI/UX Designer dan CV untuk posisi Product Manager seharusnya berbeda secara signifikan — meski pengalaman dasarnya sama.</p>
<p>Masalahnya: membuat CV baru untuk setiap lamaran sangat memakan waktu. Satu lowongan bisa butuh 30-60 menit hanya untuk menyesuaikan CV.</p>
<p><strong>Fix:</strong> Gunakan tools yang bisa otomatisasi proses ini. CleverCV, misalnya, memungkinkan kamu membuat satu Master Profile dan AI akan otomatis menyesuaikan CV untuk setiap lowongan berbeda — cukup paste deskripsi pekerjaan, AI yang urus sisanya.</p>

<h2>Checklist Quick ATS-Friendly CV</h2>
<ul>
<li>✅ Format PDF dengan teks yang bisa di-select (bukan gambar)</li>
<li>✅ Layout satu kolom, tanpa tabel atau elemen grafis</li>
<li>✅ Menggunakan font standar (Arial, Calibri, Times New Roman)</li>
<li>✅ Ada bagian Summary/Objective yang mengandung keyword relevan</li>
<li>✅ Keyword dari job description ada di CV dengan kata yang sama persis</li>
<li>✅ Pengalaman kerja dituliskan dengan bullet points berisi achievement spesifik</li>
<li>✅ CV disesuaikan untuk setiap posisi yang dilamar</li>
</ul>

<h2>Solusi Lengkap: Biarkan AI yang Urus</h2>
<p>Melakukan semua hal di atas secara manual sangat melelahkan, terutama kalau kamu sedang apply ke puluhan lowongan sekaligus. Inilah mengapa CleverCV dibuat.</p>
<p>Dengan CleverCV, kamu cukup:</p>
<ol>
<li>Buat satu <strong>Master Profile</strong> berisi semua riwayat karir</li>
<li>Paste deskripsi pekerjaan yang ingin dilamar</li>
<li>AI otomatis menyusun CV yang dioptimasi untuk loker tersebut — keyword tepat, format ATS-friendly, konten relevan</li>
</ol>
<p>Tidak perlu edit manual. Tidak perlu mulai dari awal untuk setiap lamaran. Cukup <strong>download dan kirim</strong>.</p>
    `,
  },
  {
    slug: "cara-buat-cv-fresh-graduate-lolos-ats",
    title: "Cara Membuat CV Fresh Graduate yang Lolos ATS dan Menarik HRD (2026)",
    description: "Tidak punya pengalaman kerja? Bukan berarti CV kamu harus kosong. Panduan lengkap membuat CV fresh graduate yang profesional dan lolos ATS di 2026.",
    date: "15 April 2026",
    dateISO: "2026-04-15",
    author: "Amirul",
    role: "Creator, CleverCV",
    category: "Fresh Graduate",
    readTime: "9 menit baca",
    tags: ["fresh graduate", "cv pertama", "ats", "magang", "tips cv"],
    content: `
<p>Sebagai fresh graduate, kamu menghadapi tantangan klasik: susah dapat kerja tanpa pengalaman, susah dapat pengalaman tanpa kerja. Tapi ini bukan berarti kamu tidak bisa membuat CV yang kompetitif.</p>
<p>Artikel ini akan memandu kamu langkah demi langkah membuat CV fresh graduate yang <strong>lolos ATS dan menarik perhatian HRD</strong> — meski pengalaman kerja masih minim.</p>

<h2>Mindset Pertama: HRD Tahu Kamu Fresh Graduate</h2>
<p>Rekruter yang membuka lowongan untuk fresh graduate <em>tidak mengharapkan kamu punya 5 tahun pengalaman</em>. Yang mereka cari adalah:</p>
<ul>
<li>Kemampuan belajar dan adaptasi</li>
<li>Relevansi skill dengan posisi yang dilamar</li>
<li>Pengalaman yang relevan (meski bukan pengalaman kerja penuh)</li>
<li>Prestasi konkret yang mewakili potensimu</li>
</ul>
<p>Kuncinya bukan "memiliki banyak pengalaman" — tapi <strong>mempresentasikan apa yang kamu punya dengan cara yang tepat</strong>.</p>

<h2>Struktur CV Fresh Graduate yang Optimal</h2>

<h3>1. Header — Informasi Kontak</h3>
<p>Wajib ada: nama lengkap, nomor HP aktif, email profesional, kota domisili, dan link LinkedIn (opsional tapi direkomendasikan). Hindari email tidak profesional seperti "sexy_budi2001@gmail.com".</p>

<h3>2. Summary (Sangat Penting!)</h3>
<p>Bagian ini sering dilewatkan fresh graduate padahal sangat krusial untuk ATS. Tulis 2-3 kalimat yang menggambarkan siapa kamu, skill utama, dan apa yang ingin kamu capai.</p>
<p><strong>Contoh buruk:</strong> "Saya adalah fresh graduate yang rajin dan bersemangat mencari pengalaman."</p>
<p><strong>Contoh baik:</strong> "Fresh graduate Teknik Informatika dengan keahlian di pengembangan web (React.js, Node.js) dan pengalaman magang 6 bulan di startup fintech. Mampu bekerja dalam tim lintas-fungsi dan berfokus pada deliverable berkualitas tinggi."</p>

<h3>3. Pendidikan</h3>
<p>Untuk fresh graduate, bagian pendidikan bisa lebih detail dari biasanya:</p>
<ul>
<li>Nama universitas dan jurusan</li>
<li>IPK (jika di atas 3.2, cantumkan — jika tidak, skip)</li>
<li>Mata kuliah relevan dengan posisi yang dilamar</li>
<li>Judul tugas akhir/skripsi jika relevan</li>
<li>Prestasi akademik</li>
</ul>

<h3>4. Pengalaman — Ini Lebih Luas dari yang Kamu Kira</h3>
<p>Pengalaman bukan hanya pekerjaan penuh waktu. Semua ini bisa dimasukkan:</p>
<ul>
<li><strong>Magang/Internship</strong> — bahkan yang durasinya hanya 1-2 bulan</li>
<li><strong>Proyek kuliah</strong> — terutama yang punya output nyata (website, aplikasi, laporan penelitian)</li>
<li><strong>Proyek freelance</strong> — meski kecil, ini menunjukkan inisiatif</li>
<li><strong>Organisasi kampus</strong> — jabatan di BEM, himpunan, UKM menunjukkan leadership dan teamwork</li>
<li><strong>Volunteer</strong> — menunjukkan karakter dan kepeduli</li>
</ul>
<p>Untuk setiap pengalaman, tulis dalam format achievement: <strong>"Melakukan X menggunakan Y, menghasilkan Z."</strong></p>
<p>Contoh: "Mengembangkan fitur payment gateway menggunakan Midtrans API untuk proyek e-commerce kampus, berhasil memproses 500+ transaksi selama periode penjualan."</p>

<h3>5. Skills</h3>
<p>Bagi skill menjadi kategori yang jelas: Technical Skills, Tools, dan Bahasa. Pastikan skill yang kamu tulis benar-benar kamu kuasai — HRD experienced akan test ini saat interview.</p>

<h3>6. Sertifikasi dan Kursus</h3>
<p>Sertifikat dari Google, Coursera, Dicoding, MySkill, atau platform online lainnya menunjukkan inisiatif belajar mandiri. Sangat valuable untuk HRD.</p>

<h2>Tips Khusus untuk Loker yang Spesifik</h2>
<p>Ini adalah bagian yang sering diabaikan fresh graduate: <strong>CV yang sama dikirim ke semua lowongan</strong>. Ini adalah strategi yang salah.</p>
<p>Posisi UI/UX Designer dan Software Engineer mungkin dilamar oleh orang yang sama, tapi CV yang efektif untuk keduanya berbeda. Untuk UI/UX, kamu perempuan menonjolkan design thinking, Figma, dan user research. Untuk Software Engineer, kamu menonjolkan kemampuan coding dan proyek teknis.</p>

<h2>Automate dengan AI — Biar Tidak Kelelahan</h2>
<p>Menyesuaikan CV untuk setiap lamaran secara manual bisa sangat melelahkan, terutama kalau kamu apply ke banyak perusahaan sekaligus (yang memang seharusnya kamu lakukan — job hunting is a numbers game).</p>
<p>CleverCV memiliki fitur <strong>Draft Checkpoints</strong> yang memungkinkan kamu menyimpan versi CV terpisah untuk setiap kategori role: Draft UI/UX, Draft Frontend, Draft Product Manager. Combine dengan <strong>AI Tailoring</strong> yang otomatis menyesuaikan konten berdasarkan deskripsi lowongan spesifik.</p>
<p>Hasilnya: kamu bisa apply ke 10 lowongan berbeda dalam waktu yang sama yang biasanya kamu butuhkan untuk edit satu CV.</p>

<h2>Template CV Fresh Graduate</h2>
<p>Untuk fresh graduate, gunakan template yang clean dan ATS-friendly. Hindari template dua kolom atau yang penuh elemen grafis. Yang terpenting adalah keterbacaan mesin ATS, bukan tampilan visual yang mewah.</p>
<p>CleverCV menyediakan 10+ template gratis yang semuanya sudah diuji kompatibilitasnya dengan sistem ATS mayor.</p>
    `,
  },
  {
    slug: "ai-cv-builder-terbaik-indonesia",
    title: "AI CV Builder Terbaik untuk Job Seeker Indonesia di 2026: Panduan Lengkap",
    description: "AI CV builder mana yang benar-benar pintar — bukan sekadar gimmick? Panduan lengkap memilih dan menggunakan AI untuk membuat CV yang lolos ATS di Indonesia.",
    date: "12 April 2026",
    dateISO: "2026-04-12",
    author: "Amirul",
    role: "Creator, CleverCV",
    category: "AI & Teknologi",
    readTime: "8 menit baca",
    tags: ["ai cv builder", "artificial intelligence", "resume ai", "teknologi karir"],
    content: `
<p>Tren AI di dunia job seeking berkembang pesat. Sekarang hampir semua CV builder mengklaim punya fitur AI. Tapi apa artinya "AI" di konteks ini? Dan mana yang benar-benar membantu vs yang sekadar gimmick marketing?</p>

<h2>AI untuk CV: Gimmick vs Solusi Nyata</h2>
<p>Ada dua jenis AI di CV builder yang beredar saat ini:</p>

<h3>AI Gimmick (Parafrase-Only)</h3>
<p>Mayoritas "AI" di CV builder saat ini hanya melakukan satu hal: <strong>menulis ulang (parafrase) teks yang kamu berikan</strong>. Kamu tulis "Mengerjakan proyek web", AI ubah menjadi "Berhasil menyelesaikan pengembangan platform web dengan hasil memuaskan."</p>
<p>Ini mungkin membantu formatting kalimat, tapi tidak menyelesaikan masalah mendasar: AI tidak tahu konteks loker yang kamu lamar, tidak tahu mana pengalaman yang paling relevan, dan tidak bisa memilih konten secara cerdas.</p>

<h3>AI Nyata (Context-Aware)</h3>
<p>AI yang benar-benar berguna adalah yang memahami <strong>konteks dua arah</strong>: siapa kamu (riwayat karir lengkap) dan apa yang dicari perusahaan (deskripsi lowongan). Dengan pemahaman kedua sisi ini, AI bisa:</p>
<ul>
<li>Memilih pengalaman mana dari riwayat kamu yang paling relevan untuk posisi tersebut</li>
<li>Menyusun urutan konten yang optimal berdasarkan prioritas rekruter</li>
<li>Mengintegrasikan keyword dari job description secara natural</li>
<li>Menyesuaikan tone dan level detail sesuai seniority yang dibutuhkan</li>
</ul>

<h2>Bagaimana CleverCV Menggunakan AI</h2>
<p>CleverCV dibangun dengan arsitektur yang disebut <strong>"Master Profile + AI Tailoring"</strong>. Ini bukan sekadar AI writing assistant biasa.</p>

<h3>Master Profile: Database Karir Kamu</h3>
<p>Pertama, kamu membangun satu Master Profile yang berisi <em>seluruh</em> riwayat karirmu: semua pengalaman kerja (termasuk yang mungkin tidak relevan untuk semua posisi), semua skill, semua pendidikan, semua proyek. Ini adalah "sumber kebenaran" yang komprehensif.</p>

<h3>AI Tailoring: Seleksi Cerdas</h3>
<p>Ketika kamu melamar suatu posisi, kamu paste deskripsi pekerjaan ke CleverCV. AI engine (yang ditenagai Groq LLM untuk kecepatan pemrosesan tinggi) kemudian:</p>
<ol>
<li>Menganalisis deskripsi pekerjaan untuk memahami apa yang dicari</li>
<li>Membandingkan dengan seluruh konten di Master Profile kamu</li>
<li>Memilih dan menyusun pengalaman yang paling relevan</li>
<li>Mengoptimasi keyword dan framing untuk ATS</li>
<li>Menghasilkan CV yang sudah ready-to-submit</li>
</ol>
<p>Prosesnya membutuhkan waktu <strong>kurang dari 30 detik</strong>.</p>

<h2>Perbandingan: CleverCV vs ChatGPT untuk CV</h2>
<p>Banyak jobseeker yang mencoba menggunakan ChatGPT atau Claude untuk membuat CV. Ini memang bisa bekerja, tapi ada keterbatasan signifikan dibanding tools yang dedicated untuk CV:</p>

<table>
<thead><tr><th>Aspek</th><th>ChatGPT/Claude</th><th>CleverCV</th></tr></thead>
<tbody>
<tr><td>Setup waktu</td><td>Perlu tulis prompt panjang setiap sesi</td><td>Sekali setup Master Profile</td></tr>
<tr><td>Konsistensi data</td><td>Harus input ulang di setiap sesi baru</td><td>Data tersimpan permanen</td></tr>
<tr><td>Template ATS</td><td>Output teks saja, kamu format sendiri</td><td>Langsung dengan template ATS-ready</td></tr>
<tr><td>Export PDF</td><td>Tidak bisa langsung</td><td>1-klik export PDF</td></tr>
<tr><td>Harga</td><td>Gratis (basic) / $20/bln (Plus)</td><td>Gratis</td></tr>
<tr><td>Untuk mobile</td><td>Tidak optimal</td><td>Native Android app</td></tr>
</tbody>
</table>

<h2>Screenshot Parsing: Fitur AI yang Game-Changer</h2>
<p>Satu fitur CleverCV yang benar-benar unik adalah <strong>Screenshot Parsing</strong>. Indonesia adalah pasar di mana banyak lowongan kerja diposting di Instagram Stories dan feed — bukan hanya di platform job seeker formal.</p>
<p>Dengan Screenshot Parsing, kamu tinggal screenshot postingan loker dari Instagram, upload ke CleverCV, dan AI akan membaca gambar tersebut untuk mengekstrak informasi: nama posisi, nama perusahaan, dan deskripsi pekerjaan. Setelah itu, AI Tailoring berjalan seperti biasa.</p>
<p>Tidak perlu ketik ulang. Tidak perlu copy-paste. Langsung dari gambar ke CV yang sudah disesuaikan.</p>

<h2>Apakah AI CV Builder Aman Digunakan?</h2>
<p>Pertanyaan yang wajar. CleverCV menggunakan arsitektur "Dumb Client" di mana semua pemrosesan sensitif dilakukan di backend yang aman, bukan di device kamu. Data profil kamu tidak pernah digunakan untuk training model AI eksternal.</p>
<p>CleverCV juga merupakan proyek open source — repositori GitHub-nya dapat diakses publik untuk transparansi penuh.</p>

<h2>Rekomendasi Final</h2>
<p>Jika kamu jobseeker Indonesia yang:</p>
<ul>
<li>Apply ke banyak lowongan sekaligus</li>
<li>Ingin CV yang otomatis disesuaikan tanpa effort manual</li>
<li>Sering menemukan loker dari Instagram atau platform non-formal</li>
<li>Butuh tools gratis yang benar-benar pintar</li>
</ul>
<p>Maka <strong>CleverCV adalah pilihan yang tepat</strong>. Download gratis di Google Play Store.</p>
    `,
  },
  {
    slug: "tips-apply-banyak-loker-tanpa-burnout",
    title: "Cara Apply 50 Loker Sebulan Tanpa Burnout: Strategi Job Seeker Cerdas 2026",
    description: "Job hunting bukan soal kerja keras — tapi soal sistem yang cerdas. Strategi lengkap apply banyak lowongan sekaligus tanpa kelelahan dan tanpa mengorbankan kualitas CV.",
    date: "10 April 2026",
    dateISO: "2026-04-10",
    author: "Amirul",
    role: "Creator, CleverCV",
    category: "Tips Karir",
    readTime: "7 menit baca",
    tags: ["job hunting", "tips karir", "produktivitas", "lamar kerja", "burnout"],
    content: `
<p>Job hunting adalah <em>numbers game</em>. Data menunjukkan bahwa rata-rata jobseeker perlu mengirim <strong>100-200 lamaran</strong> untuk mendapatkan 1 job offer di pasar kerja yang kompetitif. Tapi mengirim 100 lamaran dengan CV berkualitas tinggi yang disesuaikan untuk setiap posisi — secara manual — adalah pekerjaan full-time tersendiri.</p>
<p>Ini yang menyebabkan burnout. Dan ini yang ingin kami bantu kamu hindari.</p>

<h2>Mengapa Banyak Job Seeker Burnout Saat Hunting?</h2>
<p>Ada tiga pola yang selalu berulang:</p>
<ol>
<li><strong>Copy-paste CV yang sama ke semua lowongan</strong> — menghemat waktu tapi tingkat sukses rendah karena tidak relevan</li>
<li><strong>Edit CV manual untuk setiap lamaran</strong> — kualitas lebih baik tapi sangat menguras waktu dan energi</li>
<li><strong>Menyerah setelah 10-20 lamaran</strong> — karena salah satu dari dua masalah di atas</li>
</ol>
<p>Yang dibutuhkan adalah opsi keempat: <strong>sistem yang menghasilkan CV berkualitas tinggi yang disesuaikan, secara otomatis, untuk setiap lamaran</strong>.</p>

<h2>Framework Aplikasi Massal yang Efektif</h2>

<h3>Step 1: Bangun "Inventory" Karir (Sekali Seumur Hidup)</h3>
<p>Sebelum mulai apply satu pun, luangkan 2-3 jam untuk mendokumentasikan <em>seluruh</em> riwayat karirmu secara komprehensif — lebih detail dari CV biasa. Ini adalah Master Profile kamu.</p>
<p>Masukkan semuanya: pengalaman kerja (termasuk yang singkat), magang, proyek kampus, proyek freelance, organisasi, kursus, sertifikasi, skill teknis dan soft skill. Tulis setiap pengalaman dengan achievement konkret: angka, persentase, dampak nyata.</p>
<p>Ini adalah investasi waktu satu kali yang akan menghemat ratusan jam ke depannya.</p>

<h3>Step 2: Kategorisasi Target Role</h3>
<p>Sebelum apply, tentukan 2-3 kategori role yang kamu targetkan. Misalnya: UI/UX Designer, Product Designer, dan Creative Technologist. Setiap kategori ini membutuhkan emphasis berbeda di CV.</p>
<p>Dengan kategorisasi ini, kamu tidak perlu membuat CV baru dari nol untuk setiap lamaran — cukup membuat satu "base CV" per kategori, lalu fine-tune berdasarkan spesifikasi masing-masing perusahaan.</p>

<h3>Step 3: Siapkan Template CV per Kategori</h3>
<p>Buat 2-3 versi CV dasar yang masing-masing dioptimasi untuk kategori role yang berbeda:</p>
<ul>
<li><strong>CV-UX.pdf</strong> — menonjolkan design thinking, user research, Figma</li>
<li><strong>CV-Product.pdf</strong> — menonjolkan analytical thinking, product sense, data</li>
<li><strong>CV-Tech.pdf</strong> — menonjolkan technical skills, proyek coding, architecture</li>
</ul>
<p>CleverCV menyebut ini sebagai <strong>Draft Checkpoints</strong> — kamu bisa simpan draft terpisah untuk setiap kategori dan edit kapan saja.</p>

<h3>Step 4: Batch Processing Applications</h3>
<p>Jangan apply satu per satu secara random. Lakukan dalam batch:</p>
<ul>
<li>Senin pagi: riset dan listing 15-20 lowongan yang relevan</li>
<li>Selasa-Rabu: generate dan customize CV untuk masing-masing (dengan AI)</li>
<li>Kamis: submit semua lamaran</li>
<li>Jumat: networking follow-up dan evaluasi hasil minggu lalu</li>
</ul>
<p>Dengan batch processing, kamu masuk ke "mode lamar" yang lebih fokus dan efisien.</p>

<h3>Step 5: Gunakan AI untuk Customization</h3>
<p>Ini adalah game changer terbesar. Proses customization CV yang biasanya memakan 30-60 menit per lamaran bisa dipangkas menjadi <strong>kurang dari 2 menit</strong> dengan AI tailoring.</p>
<p>Workflow dengan CleverCV:</p>
<ol>
<li>Temukan loker (dari Glints, LinkedIn, Instagram, JobStreet, dll.)</li>
<li>Copy deskripsi lowongan, atau screenshot postingan Instagram langsung</li>
<li>Paste ke CleverCV — AI otomatis menyesuaikan CV dari Master Profile</li>
<li>Review singkat (30 detik) — pastikan hasilnya sesuai</li>
<li>Export PDF dan submit</li>
</ol>
<p>Total waktu per lamaran: <strong>3-5 menit</strong> vs 30-60 menit secara manual.</p>

<h2>Target Realistis: Berapa Lamaran per Minggu?</h2>
<p>Dengan sistem di atas, target yang realistis:</p>
<ul>
<li><strong>Aktif job hunting full-time:</strong> 15-20 lamaran per hari</li>
<li><strong>Sambil bekerja (side job hunt):</strong> 5-8 lamaran per hari</li>
<li><strong>Bulanan:</strong> 50-100 lamaran yang semuanya berkualitas dan disesuaikan</li>
</ul>

<h2>Mencegah Burnout: Penting!</h2>
<p>Bahkan dengan sistem yang efisien, job hunting tetap bisa menguras mental. Beberapa tips:</p>
<ul>
<li><strong>Set target harian, bukan bulanan</strong> — "apply 10 lamaran hari ini" lebih manageable dari "apply 200 lamaran bulan ini"</li>
<li><strong>Track progress di spreadsheet</strong> — visibility atas kemajuan membantu motivasi</li>
<li><strong>Pisahkan waktu hunting dari waktu "off"</strong> — jangan biarkan job anxiety merasuki semua waktu luangmu</li>
<li><strong>Rayakan milestone kecil</strong> — dapat interview? Itu pencapaian, terlepas dari hasilnya</li>
</ul>

<h2>Kesimpulan</h2>
<p>Job hunting yang efektif bukan soal bekerja lebih keras — tapi bekerja dengan sistem yang lebih cerdas. Dengan Master Profile yang komprehensif, Draft Checkpoints per kategori role, dan AI Tailoring untuk customization instan, kamu bisa apply ke 50+ lowongan per bulan tanpa menghabiskan semua waktu dan energimu hanya untuk edit CV.</p>
    `,
  },
  {
    slug: "clevercv-vs-canva-cv",
    title: "CleverCV vs Canva untuk Buat CV: Perbandingan Jujur 2026",
    description: "CV Canva sering ditolak ATS? Ini perbandingan jujur antara Canva dan CleverCV — dan kenapa design-first bukan selalu yang terbaik saat melamar kerja.",
    date: "8 April 2026",
    dateISO: "2026-04-08",
    author: "Amirul",
    role: "Creator, CleverCV",
    category: "Tools & Review",
    readTime: "6 menit baca",
    tags: ["canva cv", "ats friendly", "cv builder", "perbandingan tools"],
    content: `
<p>Canva adalah salah satu tools desain paling populer di Indonesia. Dan wajar kalau banyak jobseeker yang juga menggunakannya untuk membuat CV — templatenya bagus, mudah digunakan, dan gratis.</p>
<p>Tapi ada satu masalah besar: <strong>CV dari Canva sering gagal lolos ATS</strong>. Dan ini bukan hanya karena format visual — ada alasan teknis mendasar yang perlu kamu pahami sebelum submit CV Canva ke perusahaan mana pun.</p>

<h2>Kenapa Canva Populer untuk CV?</h2>
<p>Canva punya beberapa keunggulan yang tidak bisa dipungkiri:</p>
<ul>
<li>Template yang estetis dan beragam</li>
<li>Drag-and-drop yang mudah dipahami siapa pun</li>
<li>Gratis untuk fitur dasar</li>
<li>Bisa kolaborasi dan share</li>
<li>Cocok untuk CV visual (portofolio designer, fotografer)</li>
</ul>
<p>Untuk kebutuhan personal branding dan portofolio, Canva memang luar biasa. Tapi untuk melamar via sistem online yang menggunakan ATS — ini cerita yang berbeda.</p>

<h2>Masalah Fundamental CV Canva untuk ATS</h2>

<h3>Masalah 1: File Output yang Tidak Bisa Dibaca ATS</h3>
<p>Canva mengexport CV sebagai PDF yang berisi elemen grafis, bukan teks yang bisa di-parse. Artinya ketika ATS mencoba membaca file PDF dari Canva, yang terbaca adalah sekumpulan gambar dan path — <strong>bukan teks yang bermakna</strong>.</p>
<p>Beberapa ATS modern bisa membaca PDF Canva, tapi banyak yang tidak — dan kamu tidak akan pernah tahu sistem mana yang digunakan perusahaan yang kamu lamar.</p>

<h3>Masalah 2: Layout Dua Kolom Membingungkan ATS</h3>
<p>Template CV Canva yang populer sebagian besar menggunakan layout dua kolom. Masalahnya: ATS membaca dokumen secara linear (atas ke bawah, kiri ke kanan). Pada layout dua kolom, konten dari kolom kiri dan kanan akan tercampur, menghasilkan teks yang tidak koheren saat dibaca oleh mesin.</p>

<h3>Masalah 3: Data dan Desain Terikat</h3>
<p>Ini adalah masalah yang sering dikeluhkan pengguna Canva lama: ketika kamu ingin mengganti template atau menambah konten yang lebih panjang, <strong>layout bisa hancur</strong>. Text box yang overflow, elemen yang bergeser, margin yang berantakan.</p>
<p>Setiap kali kamu ingin menyesuaikan CV untuk lowongan berbeda, kamu harus bergelut kembali dengan masalah formatting ini.</p>

<h2>Perbandingan Langsung: Canva vs CleverCV</h2>

<table>
<thead><tr><th>Aspek</th><th>Canva</th><th>CleverCV</th></tr></thead>
<tbody>
<tr><td>Keterbacaan ATS</td><td>❌ Berisiko tinggi</td><td>✅ Dioptimasi untuk ATS</td></tr>
<tr><td>Layout dua kolom</td><td>⚠️ Membingungkan ATS</td><td>✅ Template single-column ATS-safe</td></tr>
<tr><td>Ganti template</td><td>⚠️ Bisa hancurkan layout</td><td>✅ Ganti seketika tanpa layout rusak</td></tr>
<tr><td>Customization per lamaran</td><td>❌ Manual, memakan waktu</td><td>✅ AI tailoring otomatis</td></tr>
<tr><td>Manajemen banyak versi CV</td><td>❌ File terpisah, sulit manage</td><td>✅ Draft Checkpoints terintegrasi</td></tr>
<tr><td>Kecepatan membuat CV</td><td>30-60 menit per CV</td><td>3-5 menit per CV</td></tr>
<tr><td>Harga</td><td>Gratis (dasar)</td><td>Gratis</td></tr>
<tr><td>Platform</td><td>Web, mobile</td><td>Android</td></tr>
</tbody>
</table>

<h2>Kapan Canva Masih Layak Digunakan?</h2>
<p>Canva tetap relevan untuk beberapa kasus spesifik:</p>
<ul>
<li><strong>Posisi kreatif</strong> di agensi atau studio yang menilai desain visual (dan tidak menggunakan ATS)</li>
<li><strong>Portfolio document</strong> yang bukan untuk submission via sistem ATS</li>
<li><strong>Personal website</strong> atau PDF yang dibagikan langsung ke kontak personal</li>
</ul>
<p>Kalau kamu melamar ke perusahaan tech, startup, korporat, atau BUMN yang menggunakan portal lamaran online — <strong>jangan gunakan Canva untuk CV utama kamu</strong>.</p>

<h2>Filosofi yang Berbeda</h2>
<p>Canva adalah tools desain yang kebetulan bisa dibuat CV. CleverCV adalah tools yang <em>dirancang khusus</em> untuk problem job seeker: bagaimana membuat CV yang benar-benar berhasil di sistem yang ada sekarang.</p>
<p>CleverCV memisahkan "data" (Master Profile kamu) dari "desain" (template). Ini berarti kamu bisa ganti template kapan saja tanpa khawatir data rusak, dan AI bisa bekerja dengan data bersih untuk menghasilkan tailoring yang akurat.</p>

<h2>Kesimpulan</h2>
<p>Jika tujuan kamu adalah melamar kerja via sistem online dan lolos ATS, <strong>CleverCV jauh lebih efektif dari Canva</strong>. Gratis, mobile-friendly, dan dengan AI tailoring yang menghemat berjam-jam kerja manual per minggu.</p>
<p>Gunakan Canva untuk hal-hal yang memang Canva bagusnya — desain visual, bukan ATS-critical job applications.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | null {
  return articles.find((a) => a.slug === slug) ?? null;
}

export function getAllArticles(): Article[] {
  return articles;
}
