import { PortfolioData } from '../types';
import { portfolioData } from './portfolio';

export const portfolioDataId: PortfolioData = {
    ...portfolioData,
    personal: {
        ...portfolioData.personal,
        subtitle: 'AI Engineer & Full Stack Developer | Membangun Sistem Cerdas dari Edge ke Cloud',
        bio: 'Mahasiswa B.Tech CSE (AIML) di IEM Saltlake, Kolkata, yang membangun lintas disiplin — sistem AI/ML, aplikasi web full-stack, IoT & perangkat keras tertanam, dan aplikasi mobile lintas platform. Proyek-proyekku menggabungkan berbagai domain: ThermalSense AI memadukan sensor ESP32 dengan inferensi TFLite; ESG Auditor 2.0 menjalankan LLM lokal via Ollama; Attendinn mencakup Flutter, ESP32 RFID, dan Firebase. Pendiri ENGImitra, bersertifikat Neo4j, dan lulusan Google Cloud GenAI Academy. Didorong untuk menghasilkan karya nyata yang bekerja di dunia nyata.',
        languages: [
            { name: 'Bengali', level: 'Bahasa Ibu' },
            { name: 'Hindi', level: 'Profesional' },
            { name: 'Inggris', level: 'Profesional' },
        ],
    },
    projects: portfolioData.projects.map(p => {
        if (p.slug === 'thermalsense-ai') {
            return {
                ...p,
                title: 'ThermalSense AI',
                description: 'Sistem deteksi anomali termal berbasis AI menggunakan sensor IoT dan computer vision untuk mengidentifikasi jejak panas secara real-time.',
                role: 'Developer Mandiri',
                highlights: ['Deteksi anomali termal real-time', 'Inferensi TFLite on-device', 'Dashboard MQTT langsung'],
            };
        }
        if (p.slug === 'esg-auditor-2') {
            return {
                ...p,
                title: 'ESG Auditor 2.0',
                description: 'Platform AI perusahaan yang aman untuk intelijen ESG dan analisis risiko rantai pasok menggunakan LLM lokal.',
                role: 'Developer AI Full Stack',
                highlights: ['LLM Lokal (Phi3 via Ollama)', 'Pemetaan Risiko Rantai Pasok', 'Kontrol Akses Berbasis Peran'],
            };
        }
        if (p.slug === 'attendinn-system') {
            return {
                ...p,
                title: 'Attendinn — Sistem Absensi Cerdas',
                description: 'Sistem absensi cerdas end-to-end dengan aplikasi Flutter, gerbang RFID, dan sinkronisasi real-time Firebase.',
                role: 'Developer Full Stack & Hardware',
                highlights: ['Gerbang RFID Hardware', 'Sinkronisasi Firebase Real-Time', 'Aplikasi Flutter Lintas Platform'],
            };
        }
        if (p.slug === 'fpv-drone-platform') {
            return {
                ...p,
                title: 'Platform Drone FPV Jarak Jauh',
                description: 'Drone FPV kustom yang dirancang untuk melampaui batas frekuensi radio menggunakan komunikasi seluler 4G/5G dan satelit.',
                role: 'Developer Hardware & Tertanam',
                highlights: ['Kendali Seluler 4G/5G', 'Telemetri Satelit', 'Arsitektur PDB/ESC Kustom'],
            };
        }
        if (p.slug === 'jkfitness-app') {
            return {
                ...p,
                title: 'StudyX AI',
                description: 'Aplikasi pendamping belajar bertenaga AI dengan penjadwalan cerdas, pelacakan fokus, dan rekomendasi pembelajaran personal.',
                role: 'Developer Full Stack',
                highlights: ['Penjadwalan Belajar Bertenaga AI', 'Pelacakan Fokus & Produktivitas', 'Rekomendasi Pembelajaran Personal'],
            };
        }
        return p;
    }),
    experiences: portfolioData.experiences.map(e => {
        if (e.id === 'prof-1') {
            return {
                ...e,
                position: 'Web Developer',
                description: 'Membangun dan memelihara kehadiran web untuk IEEE SIGHT IEM Student Chapter di Salt Lake City.',
                responsibilities: [
                    'Mengembangkan dan memelihara website dan platform digital chapter',
                    'Berkolaborasi dengan tim chapter dalam acara dan workshop teknis',
                    'Mendukung inisiatif IEEE SIGHT yang berfokus pada teknologi kemanusiaan',
                    'Memastikan desain responsif dan aksesibel di semua properti web',
                ],
            };
        }
        if (e.id === 'prof-founder') {
            return {
                ...e,
                position: 'Pendiri',
                description: 'Mendirikan ENGImitra — platform EdTech India untuk mahasiswa teknik.',
                responsibilities: [
                    'Membangun dan meluncurkan platform ENGImitra lengkap — kursus, catatan, MPQ, dan sistem sertifikasi',
                    'Merancang pengalaman belajar untuk mahasiswa teknik tahun pertama',
                    'Membangun infrastruktur full-stack yang skalabel',
                    'Mendorong pertumbuhan komunitas, strategi konten, dan eksekusi go-to-market',
                ],
            };
        }
        if (e.id === 'prof-lions') {
            return {
                ...e,
                position: 'Anggota Lions Club',
                description: 'Anggota aktif Lions Clubs International, berkontribusi pada pengembangan komunitas di Kolkata.',
                responsibilities: [
                    'Berpartisipasi dalam proyek layanan masyarakat',
                    'Mengembangkan keterampilan komunikasi dan penjangkauan komunitas',
                    'Berkolaborasi dalam tujuan kemanusiaan lokal dan internasional',
                    'Berkontribusi pada program pengembangan kepemimpinan',
                ],
            };
        }
        if (e.id === 'prof-prodigy') {
            return {
                ...e,
                position: 'Magang Web Developer',
                description: 'Menyelesaikan magang pengembangan web berbasis tugas di Prodigy InfoTech.',
                responsibilities: [
                    'Merancang dan mengembangkan aplikasi web menggunakan HTML, CSS, dan JavaScript',
                    'Menyelesaikan beberapa tugas proyek full-stack dalam pencapaian magang',
                    'Berkolaborasi dalam peningkatan UI/UX dan implementasi desain responsif',
                    'Menerapkan praktik terbaik pengembangan web modern',
                ],
            };
        }
        if (e.id === 'prof-scaler') {
            return {
                ...e,
                position: 'Magang — Young Innovators Internship Challenge (YIIC)',
                description: 'Terpilih untuk Young Innovators Internship Challenge (YIIC) oleh Scaler School of Technology.',
                responsibilities: [
                    'Membangun proyek menggunakan alat pengembangan web no-code dan integrasi AI',
                    'Menyelesaikan modul tentang personal branding, pemasaran, dan pembangunan produk',
                    'Berpartisipasi dalam sesi dengan mentor industri tentang teknologi dan kewirausahaan',
                    'Menyampaikan tantangan inovasi dan demonstrasi prototipe',
                ],
            };
        }
        if (e.id === 'prog-google') {
            return {
                ...e,
                position: 'Lulusan Program GenAI Academy',
                description: 'Menyelesaikan Google Cloud GenAI Academy — program cloud dan AI multi-track yang komprehensif.',
                responsibilities: [
                    'Track AI/ML: Dataprep, Dataflow, Apache Spark, ML API (NLP, Speech-to-Text, Document AI)',
                    'Track Keamanan: Sensitive Data Protection, Cloud DLP, IAM, Dataplex',
                    'Track Data: BigQuery, Pub/Sub, Dataflow, pipeline data terintegrasi',
                    'Track DevOps: CI/CD dengan Cloud Build, Cloud Deploy, GKE, kubectl',
                    'Track Jaringan: Desain VPC, Compute Engine, deployment aplikasi Kubernetes',
                ],
            };
        }
        if (e.id === 'hack-phycathon') {
            return {
                ...e,
                position: 'Peserta Hackathon — Proyek Smart Shoe',
                description: 'Berkompetisi dalam PHYCATHON, hackathon co-design hardware-software.',
                responsibilities: [
                    'Merancang dan membangun sistem fusi sensor tertanam dalam sasis alas kaki',
                    'Mengimplementasikan logika deteksi jatuh dan pemicu sinyal darurat',
                    'Mengintegrasikan modul komunikasi GPS dan seluler untuk sinyal lokasi',
                    'Men-debug data sensor yang tidak stabil selama pengujian gerakan kaki nyata',
                ],
            };
        }
        return e;
    }),
    education: portfolioData.education.map(e => {
        if (e.id === 'edu-1') {
            return {
                ...e,
                degree: 'Sarjana Teknologi (B.Tech)',
                major: 'Teknik Komputer — Spesialisasi AI & ML',
                achievements: [
                    'Membangun proyek produksi di bidang AI, full-stack, IoT, dan mobile',
                    'Peserta Hackathon PHYCATHON — Smart Shoe dengan deteksi jatuh dan sinyal darurat',
                    'Lulusan Google Cloud GenAI Academy',
                    'Profesional Bersertifikat Neo4j',
                ],
            };
        }
        if (e.id === 'edu-2') {
            return {
                ...e,
                degree: 'Pendidikan Dasar & Menengah',
                major: 'Kelas 1 – 12 (Jurusan Sains)',
                achievements: [
                    'Menyelesaikan seluruh pendidikan dari Kelas 1 hingga 12 di Howrah Zilla School',
                    'Mengambil jurusan Sains dengan fokus pada Fisika, Kimia, Matematika & Ilmu Komputer',
                ],
            };
        }
        return e;
    }),
    achievements: portfolioData.achievements.map(ach => ach),
    faqs: [
        {
            question: 'Teknologi apa yang Anda kuasai?',
            answer: 'Saya mengkhususkan diri dalam AI/ML (Python, TensorFlow, LangChain, Ollama), Full Stack Web (Next.js, React, FastAPI), Sistem Tertanam (ESP32, MQTT, TFLite), dan Pengembangan Mobile (Flutter). Saya senang bekerja di seluruh stack dari perangkat keras edge hingga cloud.',
        },
        {
            question: 'Apakah Anda tersedia untuk magang atau kolaborasi?',
            answer: 'Ya! Saya aktif terbuka untuk magang, kolaborasi riset, dan kemitraan proyek di bidang AI, Full Stack Development, dan IoT. Jangan ragu menghubungi di arnabchatterjee281205@gmail.com.',
        },
        {
            question: 'Apa yang sedang Anda kerjakan sekarang?',
            answer: 'Saat ini membangun Attendinn — sistem absensi cerdas dengan Flutter, ESP32 RFID, dan Firebase — dan ENGImitra, platform EdTech untuk mahasiswa teknik. Juga mendalami AI Agents dan orkestrasi multi-agen.',
        },
        {
            question: 'Apa itu ThermalSense AI?',
            answer: 'ThermalSense AI adalah proyek AI tertanam yang menggabungkan sensor termal ESP32 dengan model TFLite CNN untuk deteksi anomali real-time. Sistem ini mengalirkan data melalui MQTT ke backend Python dan menampilkan peta panas langsung di dashboard Next.js.',
        },
        {
            question: 'Bagaimana cara menghubungi Anda?',
            answer: 'Cara terbaik adalah melalui email di arnabchatterjee281205@gmail.com atau via LinkedIn di linkedin.com/in/arnab-chatterjee-prsnl/. Saya biasanya merespons dalam 24 jam.',
        },
    ],
    blogs: portfolioData.blogs.map(b => {
        const translations: Record<string, { title: string, excerpt: string }> = {
            'future-of-ai-agents': { title: 'Masa Depan AI Agents dalam Rekayasa Perangkat Lunak', excerpt: 'Bagaimana agen otonom mendefinisikan ulang arsitektur perangkat lunak dan pipeline pengambilan keputusan.' },
            'iot-edge-computing': { title: 'Edge Computing dengan ESP32 untuk IoT Industri', excerpt: 'Mengimplementasikan pemrosesan data real-time di edge untuk aplikasi IoT industri.' },
            'llm-fine-tuning': { title: 'Fine-Tuning LLM Secara Lokal dengan Ollama dan LoRA', excerpt: 'Panduan praktis untuk mengoptimalkan model open-source menggunakan Ollama dan teknik LoRA.' },
            'mastering-nextjs-performance': { title: 'Menguasai Performa Next.js untuk Produksi', excerpt: 'Teknik tingkat lanjut untuk mengoptimalkan Core Web Vitals pada aplikasi React modern.' },
            'ai-in-healthcare': { title: 'AI Mentransformasi Diagnostik Layanan Kesehatan', excerpt: 'Bagaimana computer vision membantu diagnosis medis dan analisis data pasien.' },
        };
        return translations[b.slug] ? { ...b, ...translations[b.slug] } : b;
    }),
    gallery: portfolioData.gallery.map(g => g),
};
