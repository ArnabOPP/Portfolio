import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Arnab Chatterjee',
        title: 'Full Stack Developer & AI Engineer',
        subtitle: 'Full Stack Developer • AI/ML Engineer • IoT Builder | Engineering Intelligent Systems Across Software, Hardware & Cloud',
        bio: 'A B.Tech CSE (AIML) student at Institute of Engineering & Management, Saltlake, with a passion for building across the full spectrum — from AI/ML models and full-stack web apps to embedded IoT systems and UI component libraries. I build things that span disciplines: agentic AI pipelines, cellular-connected drones, smart attendance hardware, and open-source React libraries. Currently building ENGImitra and exploring Agentic AI, cloud-native architecture, and cross-platform mobile development.',
        avatar: '/about/ArnabCh.jpeg',
        location: 'Howrah, West Bengal, India',
        email: 'arnabchatterjee281205@gmail.com',
        phone: '',
        resumeUrl: '/resume',
        website: 'https://github.com/ArnabOPP',
        languages: [
            { name: 'Bengali', level: 'Native' },
            { name: 'Hindi', level: 'Professional' },
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/ArnabOPP',
                icon: 'github',
                username: 'ArnabOPP',
            },
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/',
                icon: 'linkedin',
                username: 'arnab-chatterjee-prsnl',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/mainly_arnab__/',
                icon: 'instagram',
                username: 'mainly_arnab__',
            },
            {
                platform: 'Twitter',
                url: 'https://x.com/ARNABintheCHAT',
                icon: 'twitter',
                username: 'ARNABintheCHAT',
            },
        ],
    },
    projects: [
        {
            id: 'project-thermalsense',
            slug: 'thermalsense-ai',
            title: 'ThermalSense AI',
            description: 'An AI-powered thermal anomaly detection system using IoT sensors and computer vision to identify heat signatures in real time.',
            longDescription: 'ThermalSense AI is an embedded AI project that combines thermal imaging sensors with a lightweight machine learning inference engine to detect and classify thermal anomalies in real time. The system runs on ESP32-based hardware, streams temperature matrix data over MQTT, and feeds it into a Python backend where a trained CNN model identifies hotspots, equipment overheating, and environmental hazards. A live web dashboard visualises the thermal heatmap, alerts, and historical logs.',

            techStack: ['Python', 'TensorFlow Lite', 'ESP32', 'MQTT', 'OpenCV', 'Next.js', 'Tailwind CSS'],
            tools: ['VS Code', 'GitHub', 'Arduino IDE', 'Mosquitto MQTT'],
            status: 'completed',
            repoUrl: 'https://github.com/ArnabOPP/thermalsense-ai',
            demoUrl: '#',
            startDate: '2025-03-01',
            role: 'Solo Developer',
            customTimeline: '2025',
            team: 'Solo',

            highlights: ['Real-time thermal anomaly detection', 'TFLite on-device inference', 'Live MQTT dashboard'],
            category: 'AI & IoT',
            features: [
                {
                    title: 'Embedded Sensing',
                    items: [
                        '**Thermal Matrix Capture**: Reads 8×8 or 32×24 thermal grids from AMG8833 / MLX90640 sensors via I2C.',
                        '**ESP32 Firmware**: Custom firmware streams JSON temperature arrays over MQTT at 5 fps.',
                        '**Low Power Mode**: Deep-sleep between readings when no anomaly threshold is crossed.'
                    ]
                },
                {
                    title: 'AI Inference',
                    items: [
                        '**CNN Anomaly Model**: Lightweight convolutional model trained on synthetic + real thermal datasets.',
                        '**TFLite Deployment**: Model quantised and deployed via TensorFlow Lite for edge inference.',
                        '**Multi-class Detection**: Classifies overheating equipment, fire risk zones, and body heat intrusion.'
                    ]
                },
                {
                    title: 'Dashboard',
                    items: [
                        '**Live Heatmap**: Colour-interpolated thermal grid rendered in the browser using Canvas API.',
                        '**Alert System**: Push notifications when anomaly confidence exceeds configurable threshold.',
                        '**Historical Logs**: Time-series chart of peak temperatures and anomaly events.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone & Install',
                    code: 'git clone https://github.com/ArnabOPP/thermalsense-ai\ncd thermalsense-ai\npip install -r requirements.txt',
                    type: 'code'
                },
                {
                    title: 'Flash ESP32 Firmware',
                    code: 'cd firmware\n# Open in Arduino IDE and upload to ESP32',
                    type: 'code'
                },
                {
                    title: 'Start Backend & Dashboard',
                    code: 'python mqtt_bridge.py\ncd dashboard && npm install && npm run dev',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Low-resolution thermal data accuracy',
                    solution: 'Applied bicubic interpolation to upscale 8×8 sensor grids to 64×64 before feeding into the CNN, significantly improving classification accuracy without requiring expensive high-res sensors.'
                },
                {
                    problem: 'Latency over MQTT on congested networks',
                    solution: 'Implemented delta encoding — only pixels that changed by more than 0.5°C are transmitted, reducing payload size by ~70% and keeping end-to-end latency under 200 ms.'
                },
                {
                    problem: 'Model size constraints on edge device',
                    solution: 'Post-training quantisation reduced the TFLite model from 2.1 MB to 380 KB while maintaining 94% accuracy, fitting comfortably in ESP32 flash.'
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'esg-auditor-2',
            title: 'ESG Auditor 2.0',
            description: 'Secure enterprise AI platform for ESG intelligence and supply chain risk analysis using local LLMs.',
            longDescription: 'ESG Auditor 2.0 is an enterprise-grade AI-powered ESG intelligence and secure document analysis platform designed to help companies, analysts, investors, and compliance teams evaluate sustainability, legal, operational, and supply-chain risks. Traditional ESG tools only analyze public disclosures — ESG Auditor 2.0 goes deeper by combining AI document analysis, supply chain risk mapping, and local LLM inference (via Ollama + Phi3) into a single secure platform where sensitive data never leaves your infrastructure.',

            techStack: ['Python', 'FastAPI', 'React', 'Ollama', 'Phi3', 'LangChain', 'PostgreSQL'],
            tools: ['VS Code', 'Postman', 'GitHub', 'Ollama'],
            status: 'completed',
            repoUrl: 'https://github.com/ArnabOPP/ESG-AUDITOR-2.0',
            demoUrl: '#',
            startDate: '2025-06-01',
            role: 'Full Stack AI Developer',
            customTimeline: '2025',
            team: 'Personal Project',

            highlights: ['Local LLM (Phi3 via Ollama)', 'Supply Chain Risk Mapping', 'Role-Based Access Control'],
            category: 'AI & Machine Learning',
            features: [
                {
                    title: 'AI Intelligence',
                    items: [
                        '**Local LLM via Ollama**: Runs Phi3 entirely on-premise — sensitive ESG documents never leave your infrastructure.',
                        '**Document Analysis**: Extracts ESG risk factors from PDF reports, contracts, and disclosures using LangChain pipelines.',
                        '**Supply Chain Intelligence**: Maps hidden risks inside supplier ecosystems beyond public sustainability disclosures.'
                    ]
                },
                {
                    title: 'User Roles',
                    items: [
                        '**Company Role**: Upload ESG documents, run risk assessments, view compliance status.',
                        '**Analyst Role**: Deep-dive analysis, supplier audits, risk scoring dashboards.',
                        '**RBAC Security**: Role-based access ensures each user sees only their authorized scope.'
                    ]
                },
                {
                    title: 'Tech Architecture',
                    items: [
                        '**FastAPI Backend**: High-performance async API with structured AI inference endpoints.',
                        '**React Frontend**: Clean dashboard UI with ESG scoring visualizations.',
                        '**Secure by Design**: OWASP-aligned backend; no cloud AI calls for sensitive documents.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone and Setup',
                    code: 'git clone https://github.com/ArnabOPP/ESG-AUDITOR-2.0\ncd ESG-AUDITOR-2.0\npython -m venv venv && venv\\Scripts\\activate\npip install -r requirements.txt',
                    type: 'code'
                },
                {
                    title: 'Run Local AI',
                    code: 'ollama pull phi3\nollama serve',
                    type: 'code'
                },
                {
                    title: 'Start Backend & Frontend',
                    code: 'python main.py\ncd frontend && npm install && npm run dev',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Hidden Supply Chain Risks Not in Public Disclosures',
                    solution: 'Built a document ingestion pipeline that processes uploaded PDFs and internal supplier reports, using LangChain to extract risk factors beyond what public ESG ratings capture.'
                },
                {
                    problem: 'Data Privacy for Enterprise Documents',
                    solution: 'All LLM inference runs locally via Ollama (Phi3), ensuring sensitive corporate and supplier data never reaches external cloud AI APIs.'
                },
                {
                    problem: 'Multi-Role Access Complexity',
                    solution: 'Designed a RBAC middleware layer in FastAPI that controls document visibility, analysis scope, and dashboard features per role at the API level.'
                }
            ]
        },
        {
            id: 'project-3',
            slug: 'attendinn-system',
            title: 'Attendinn — Smart Attendance System',
            description: 'End-to-end smart attendance system with Flutter mobile app, RFID gate entry, and Firebase real-time sync.',
            longDescription: 'Attendinn is a full-stack smart attendance solution combining a Flutter cross-platform mobile app, an ESP32-based RFID gate entry dock, and Firebase real-time database for instant synchronization. Students/employees tap their RFID cards at the physical dock; the ESP32 validates identity and pushes attendance data to Firebase instantly, while the Flutter app provides a live dashboard for admins and individuals. The system also includes a card management backend and an admin panel for full institutional control.',

            techStack: ['Flutter', 'Dart', 'Firebase', 'ESP32', 'C++', 'RFID', 'React'],
            tools: ['VS Code', 'PlatformIO', 'Firebase Console', 'Android Studio'],
            status: 'completed',
            repoUrl: 'https://github.com/ArnabOPP/attendinn-app',
            demoUrl: '#',
            startDate: '2025-03-01',
            role: 'Full Stack & Hardware Developer',
            customTimeline: '2025',
            team: 'Personal Project',

            highlights: ['RFID Hardware Gate Entry', 'Real-Time Firebase Sync', 'Cross-Platform Flutter App'],
            category: 'Full Stack & EdTech',
            features: [
                {
                    title: 'Hardware (ESP32 + RFID)',
                    items: [
                        '**RFID Gate Entry**: ESP32 reads MFRC522 RFID cards, validates against Firebase, and logs attendance in real time.',
                        '**Auto-Reconnect**: Built-in WiFi reconnection logic ensures continuous operation in unstable networks.',
                        '**LED/Buzzer Feedback**: Instant visual and audio response on card scan for user confirmation.'
                    ]
                },
                {
                    title: 'Flutter Mobile App',
                    items: [
                        '**Cross-Platform**: Single codebase runs on Android, iOS, Web, Windows, macOS, and Linux.',
                        '**Live Attendance Dashboard**: Real-time updates from Firebase showing present/absent status.',
                        '**Student & Admin Views**: Role-based UI — students see their own record; admins manage all.'
                    ]
                },
                {
                    title: 'Backend & Admin',
                    items: [
                        '**Firebase Realtime DB**: Sub-second sync between hardware and app.',
                        '**Card Management System**: Register, update, and deactivate RFID cards from the admin panel.',
                        '**Admin Panel**: Web-based management UI for institutional administrators.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Flutter App',
                    code: 'git clone https://github.com/ArnabOPP/attendinn-app\ncd attendinn-app\nflutter pub get\nflutter run',
                    type: 'code'
                },
                {
                    title: 'Hardware Setup',
                    code: 'git clone https://github.com/ArnabOPP/attendinn-gate-entry-dock\n# Flash ESP32 via PlatformIO\n# Configure WiFi credentials and Firebase URL in config.h',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Unreliable WiFi in Institutional Environments',
                    solution: 'Implemented exponential backoff reconnection logic in the ESP32 firmware and local card caching so attendance is not lost during brief disconnections.'
                },
                {
                    problem: 'Cross-Platform Flutter Consistency',
                    solution: 'Used Firebase\'s Flutter SDK which provides a unified API across all targets, and tested UI layouts on both mobile and web breakpoints during development.'
                },
                {
                    problem: 'RFID Duplicate Scan Prevention',
                    solution: 'Added a debounce timer in firmware that ignores subsequent scans of the same card within a configurable cooldown window, preventing accidental double-logging.'
                }
            ]
        },
        {
            id: 'project-4',
            slug: 'fpv-drone-platform',
            title: 'Long-Range FPV Drone Platform',
            description: 'Custom FPV drone engineered to bypass radio frequency limits using 4G/5G cellular and satellite communication.',
            longDescription: 'An advanced long-range custom FPV drone platform engineered to overcome traditional radio frequency distance limitations. Designed with hybrid control over high-speed 4G/5G cellular networks and integrated satellite communication modules, this drone maintains reliable real-time telemetry over extreme distances far beyond standard RC range. The platform combines custom flight controller integration, PDB/ESC architecture design, and embedded C++ control loops with cellular modem interfacing for a truly range-unlimited FPV experience.',

            techStack: ['C++', 'Embedded Systems', 'Cellular Modems (4G/5G)', 'Satellite Comms', 'Telemetry Protocols', 'PDB/ESC Architecture'],
            tools: ['VS Code', 'PlatformIO', 'BetaFlight', 'Mission Planner'],
            status: 'completed',
            repoUrl: 'https://github.com/ArnabOPP',
            demoUrl: '#',
            startDate: '2024-11-01',
            role: 'Hardware & Embedded Developer',
            customTimeline: '2024 – 2025',
            team: 'Personal Project',

            highlights: ['4G/5G Cellular Control', 'Satellite Telemetry', 'Custom PDB/ESC Architecture'],
            category: 'IoT & Embedded',
            features: [
                {
                    title: 'Hybrid Communication',
                    items: [
                        '**4G/5G Cellular Control**: Primary flight control transmitted over cellular network — no RF range limitation.',
                        '**Satellite Backup**: Integrated satellite module provides telemetry fallback when cellular coverage drops.',
                        '**Real-Time Telemetry**: Continuous position, speed, altitude, and battery data streamed to ground station over cellular.'
                    ]
                },
                {
                    title: 'Hardware Architecture',
                    items: [
                        '**Custom PDB Design**: Power distribution board optimized for weight and current capacity across multiple ESCs.',
                        '**ESC Integration**: Tuned ESC parameters for responsive throttle response and stable hover at altitude.',
                        '**Embedded C++ Control Loops**: Custom firmware control loops for attitude stabilization and cellular handoff.'
                    ]
                },
                {
                    title: 'Safety & Reliability',
                    items: [
                        '**Failsafe Logic**: Automatic return-to-home triggered on cellular signal loss or low battery threshold.',
                        '**Dual Communication Redundancy**: Cellular primary + satellite secondary ensures near-zero blackout zones.',
                        '**Geofencing**: Configurable no-fly zones enforced at firmware level.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Hardware Requirements',
                    code: 'ESP32 / STM32 Flight Controller\n4G/5G LTE Modem Module\nSatellite Communication Module\nCustom PDB + 4x ESC + 4x Motors',
                    type: 'text'
                },
                {
                    title: 'Firmware Flash',
                    code: '# Flash custom firmware via PlatformIO\npio run --target upload\n# Configure cellular APN and satellite module in config.h',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Latency in Cellular Control Loop',
                    solution: 'Optimized the control packet size and used UDP over TCP for flight commands to minimize round-trip latency to sub-80ms, sufficient for stable FPV flight.'
                },
                {
                    problem: 'Power Budget with Modem + Satellite Modules',
                    solution: 'Custom PDB design with dedicated power rails for communication modules, and sleep modes activated when satellite backup is not needed to conserve battery.'
                },
                {
                    problem: 'Cellular Handoff During Flight',
                    solution: 'Implemented tower-switch logic that pre-connects to the next tower before dropping the current one, preventing control gaps during cell transitions.'
                }
            ]
        },
        {
            id: 'project-5',
            slug: 'jkfitness-app',
            title: 'StudyX AI',
            description: 'An AI-powered study companion app with smart scheduling, focus tracking, and personalized learning recommendations.',
            longDescription: 'StudyX AI is a full-featured AI-powered study companion web application that helps students log study sessions, track focus time, and receive personalized learning recommendations. Built as a full-stack app, it features a clean dashboard showing study history, productivity trends, and goal tracking. The app combines AI scheduling with gamified progress to make consistent studying a habit.',

            techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'React', 'TypeScript', 'Tailwind CSS'],
            tools: ['VS Code', 'Supabase Dashboard', 'Postman', 'GitHub'],
            status: 'completed',
            repoUrl: 'https://github.com/ArnabOPP/JKFITNESS',
            demoUrl: '#',
            startDate: '2025-02-01',
            role: 'Full Stack Developer',
            customTimeline: '2025',
            team: 'Personal Project',

            highlights: ['AI-Powered Study Scheduling', 'Focus & Productivity Tracking', 'Personalized Learning Recommendations'],
            category: 'Mobile & Health',
            features: [
                {
                    title: 'Core Tracking',
                    items: [
                        '**Workout Logger**: Log exercises with sets, reps, weight, and duration — organized by muscle group.',
                        '**Progress Charts**: Visual trend lines for body weight, strength metrics, and volume over time.',
                        '**Personal Records**: Auto-detected PRs highlighted per exercise with date tracking.'
                    ]
                },
                {
                    title: 'Routine Management',
                    items: [
                        '**Custom Routines**: Build and save named workout programs with drag-and-drop exercise ordering.',
                        '**Quick Start**: Launch a saved routine to pre-fill the workout logger for fast session starts.',
                        '**Rest Timer**: Built-in configurable rest timer between sets.'
                    ]
                },
                {
                    title: 'Tech & Infrastructure',
                    items: [
                        '**Next.js + FastAPI**: React frontend with a high-performance Python API backend.',
                        '**Supabase**: Managed PostgreSQL with auth and real-time subscriptions.',
                        '**Responsive Design**: Mobile-first UI optimized for gym use on a phone.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Frontend Setup',
                    code: 'git clone https://github.com/ArnabOPP/JKFITNESS\ncd JKFITNESS\nnpm install\nnpm run dev',
                    type: 'code'
                },
                {
                    title: 'Backend Setup',
                    code: 'cd backend\npip install -r requirements.txt\n# Set SUPABASE_URL and SUPABASE_KEY in .env\nuvicorn main:app --reload',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Complex Nested Workout Data Structure',
                    solution: 'Designed a normalized PostgreSQL schema (routines → sessions → exercises → sets) with Supabase JOINs that keep query complexity low while supporting flexible routine structures.'
                },
                {
                    problem: 'Real-Time UI Updates During Active Workouts',
                    solution: 'Leveraged Supabase real-time subscriptions to push set completions to the UI without polling, keeping the active workout view always in sync.'
                },
                {
                    problem: 'Mobile Usability in Gym Environment',
                    solution: 'Prioritized large tap targets, minimal text input, and one-thumb reachability in the mobile layout so the app can be used with sweaty hands in a gym setting.'
                }
            ]
        },
    ],

    experiences: [
        // 1. PROFESSIONAL EXPERIENCE
        {
            id: 'prof-1',
            company: 'IEEE SIGHT IEM Student Chapter',
            position: 'Web Developer',
            description: 'Building and maintaining the web presence for the IEEE SIGHT IEM Student Chapter at Salt Lake City. Contributing to the chapter\'s digital initiatives and technical outreach programs as a full-time student member.',
            responsibilities: [
                'Developing and maintaining the chapter\'s website and digital platforms',
                'Collaborating with the chapter team on technical events and workshops',
                'Supporting IEEE SIGHT initiatives focused on humanitarian technology',
                'Ensuring responsive, accessible design across all web properties',
            ],
            skills: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'React', 'IEEE Standards'],
            startDate: '2026-06-01',
            isOngoing: true,
            location: 'Salt Lake City, Kolkata',
            type: 'full-time',
            logo: 'https://cdn.simpleicons.org/ieee/00629B',
            externalLink: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/',
        },
        {
            id: 'prof-founder',
            company: 'ENGImitra',
            position: 'Founder',
            description: 'Founded ENGImitra — India\'s EdTech platform built for engineering students. ENGImitra helps students go from confusion to confidence through structured courses, expert-made notes, MPQs, and mentorship, designed specifically for 1st year engineering students to clear concepts, eliminate exam fear, and score higher.',
            responsibilities: [
                'Built and launched the full ENGImitra platform — courses, notes, MPQs, and certification system',
                'Designed the learning experience for 1st year engineering students across core subjects',
                'Architecting scalable full-stack infrastructure to support growing student base',
                'Driving community growth, content strategy, and go-to-market execution',
            ],
            skills: ['EdTech', 'Full Stack Development', 'Product Management', 'Entrepreneurship', 'Leadership', 'Community Building'],
            startDate: '2026-04-01',
            isOngoing: true,
            location: 'Kolkata, India (Remote)',
            type: 'full-time',
            logo: '/achievements/engimitra-logo-512.png',
            externalLink: 'https://engimitra.in',
        },
        {
            id: 'prof-lions',
            company: 'Lions Clubs International',
            position: 'Lions Club Member',
            description: 'Active member of Lions Clubs International, contributing to community development and humanitarian initiatives in Kolkata, West Bengal. Engaged in communication, leadership, and social impact programs.',
            responsibilities: [
                'Participating in community service projects and social impact drives',
                'Developing communication and community outreach skills',
                'Collaborating with members on local and international humanitarian goals',
                'Contributing to leadership development programs within the club',
            ],
            skills: ['Communication', 'Community Development', 'Leadership', 'Social Impact'],
            startDate: '2025-12-01',
            isOngoing: true,
            location: 'Kolkata, India (Hybrid)',
            type: 'volunteer',
            logo: '/achievements/Lions_Clubs_International_logo.png',
            externalLink: 'https://www.lionsclubs.org/',
        },
        {
            id: 'prof-prodigy',
            company: 'Prodigy InfoTech',
            position: 'Web Developer Intern',
            description: 'Completed a task-based web development internship at Prodigy InfoTech, building real-world projects across the full stack and earning a verified certificate and Letter of Recommendation.',
            responsibilities: [
                'Designed and developed web applications using HTML, CSS, and JavaScript',
                'Completed multiple full-stack project tasks within internship milestones',
                'Collaborated on UI/UX improvements and responsive design implementation',
                'Applied modern web development best practices throughout the program',
            ],
            skills: ['HTML', 'CSS', 'JavaScript', 'Full Stack Web Development', 'Responsive Design'],
            startDate: '2025-06-01',
            isOngoing: true,
            location: 'India (Remote)',
            type: 'internship',
            logo: '/achievements/prodigy_infotech_logo.jpeg',
            externalLink: 'https://prodigyinfotech.dev/',
        },
        {
            id: 'prof-scaler',
            company: 'Scaler School of Technology',
            position: 'Intern — Young Innovators Internship Challenge (YIIC)',
            description: 'Selected for the Young Innovators Internship Challenge (YIIC) by Scaler School of Technology — a competitive program that equips young students with hands-on experience in technology, no-code tools, AI, and innovation.',
            responsibilities: [
                'Built projects using no-code web development tools and AI integrations',
                'Completed modules on personal branding, marketing, and product building',
                'Participated in sessions by industry mentors on emerging tech and entrepreneurship',
                'Delivered innovation challenges and prototype demonstrations',
            ],
            skills: ['No-Code Development', 'AI Tools', 'Product Thinking', 'Personal Branding', 'Innovation'],
            startDate: '2024-06-01',
            endDate: '2024-09-01',
            isOngoing: false,
            location: 'India (Remote)',
            type: 'internship',
            logo: '/achievements/download.png',
            externalLink: 'https://www.scaler.com/',
        },
        {
            id: 'prog-1',
            company: 'Google Cloud',
            position: 'GenAI Academy Program Graduate',
            description: 'Completed the Google Cloud GenAI Academy — a comprehensive multi-track cloud and AI program covering ML APIs, security, data engineering, DevOps, and networking on GCP.',
            responsibilities: [
                'AI/ML Track: Dataprep, Dataflow, Apache Spark, ML APIs (NLP, Speech-to-Text, Document AI)',
                'Security Track: Sensitive Data Protection, Cloud DLP, IAM, Dataplex governance',
                'Data Track: BigQuery, Pub/Sub, Dataflow, integrated data pipelines',
                'DevOps Track: CI/CD with Cloud Build, Cloud Deploy, GKE, kubectl',
                'Networking Track: VPC design, Compute Engine, Kubernetes app deployment',
            ],
            skills: ['Google Cloud Platform', 'Vertex AI', 'Gemini API', 'BigQuery ML', 'Kubernetes', 'CI/CD'],
            startDate: '2025-01-01',
            endDate: '2025-06-01',
            isOngoing: false,
            location: 'Remote',
            type: 'apprenticeship',
            logo: 'https://cdn.simpleicons.org/googlecloud/4285F4',
            externalLink: 'https://cloud.google.com/',
        },
        {
            id: 'hack-1',
            company: 'PHYCATHON',
            position: 'Hackathon Participant — Smart Shoe Project',
            description: 'Competed in PHYCATHON, a hardware-software co-design hackathon. Built a smart shoe prototype with foot tracking, fall detection, and emergency signaling within a competitive high-pressure environment.',
            responsibilities: [
                'Designed and built embedded sensor fusion system within footwear chassis',
                'Implemented fall detection and emergency signal triggering logic',
                'Integrated GPS and cellular communication modules for location signaling',
                'Debugged erratic sensor data during real-world foot movement testing',
                'Optimized power management within tight footwear form factor constraints',
            ],
            skills: ['Embedded Systems', 'Sensor Fusion', 'IoT', 'C++', 'Hardware Prototyping', 'Power Optimization'],
            startDate: '2025-01-01',
            endDate: '2025-01-03',
            isOngoing: false,
            location: 'On-site',
            type: 'volunteer',
            logo: '/achievements/61.jpg',
            externalLink: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/',
        },

        // 2. EDUCATION & DEVELOPMENT
        {
            id: 'edu-exp-1',
            company: 'Institute of Engineering & Management',
            position: 'B.Tech Student — CSE (AI & ML)',
            description: 'Pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning at IEM Saltlake, Kolkata.',
            responsibilities: [
                'Core CS curriculum: Data Structures, Algorithms, OS, DBMS, Computer Networks',
                'AI/ML specialization: Machine Learning, Deep Learning, Computer Vision, NLP',
                'Building projects spanning full-stack web, IoT, mobile, and AI domains',
                'Active in hackathons, open-source development, and technical communities',
            ],
            skills: ['Python', 'Machine Learning', 'Data Structures', 'Algorithms', 'Software Engineering'],
            startDate: '2025-08-01',
            isOngoing: true,
            location: 'Saltlake, Kolkata',
            type: 'full-time',
            logo: '/achievements/logo-2.png',
            externalLink: 'https://www.iemcal.com/',
        },

        // GOOGLE CLOUD
        {
            id: 'cert-google',
            company: 'Google Cloud',
            position: 'GenAI Academy Program Graduate',
            description: 'Completed the Google Cloud GenAI Academy — a comprehensive multi-track cloud and AI program covering ML APIs, security, data engineering, DevOps, and networking on GCP.',
            responsibilities: [
                'AI/ML Track: Dataprep, Dataflow, Apache Spark, ML APIs (NLP, Speech-to-Text, Document AI)',
                'Security Track: Sensitive Data Protection, Cloud DLP, IAM, Dataplex governance',
                'Data Track: BigQuery, Pub/Sub, Dataflow, integrated data pipelines',
                'DevOps Track: CI/CD with Cloud Build, Cloud Deploy, GKE, kubectl',
                'Networking Track: VPC design, Compute Engine, Kubernetes app deployment',
            ],
            skills: ['Google Cloud Platform', 'Vertex AI', 'Gemini API', 'BigQuery ML', 'Kubernetes', 'CI/CD'],
            startDate: '2025-01-01',
            endDate: '2025-06-01',
            isOngoing: false,
            location: 'Remote',
            type: 'apprenticeship',
            logo: 'https://cdn.simpleicons.org/googlecloud/4285F4',
            externalLink: 'https://cloud.google.com/',
        },
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Institute of Engineering & Management (IEM), Saltlake',
            degree: 'Bachelor of Technology (B.Tech)',
            major: 'Computer Science Engineering — AI & ML Specialization',
            startDate: '2025-08-01',
            isOngoing: true,
            activities: ['Hackathons', 'Open Source Development', 'AI/ML Projects', 'IoT & Hardware Building'],
            achievements: [
                'Building production projects across AI, full-stack, IoT, and mobile domains',
                'PHYCATHON Hackathon Participant — Smart Shoe with fall detection and emergency signaling',
                'Google Cloud GenAI Academy Graduate',
                'Neo4j Certified Professional',
            ],
        },
        {
            id: 'edu-2',
            institution: 'Howrah Zilla School',
            degree: 'Primary & Secondary Education',
            major: 'Class 1 – 12 (Science Stream)',
            startDate: '2011-04-01',
            endDate: '2025-03-01',
            isOngoing: false,
            activities: ['Science Olympiads', 'Mathematics Competitions', 'School Events'],
            achievements: [
                'Completed full schooling from Class 1 to Class 12 at Howrah Zilla School',
                'Pursued Science stream in higher secondary with focus on Physics, Chemistry, Mathematics & Computer Science',
            ],
        },
    ],
    achievements: [
        {
            id: 'ach-1',
            title: 'PHYCATHON Hackathon — Smart Shoe Build',
            issuer: 'PHYCATHON',
            date: '2025-01-01',
            description: 'Competed in PHYCATHON, a hardware-software co-design hackathon. Built a smart shoe with embedded sensors for foot tracking, fall detection, and emergency signaling — executing full-loop hardware under tight evaluation conditions.',
            image: '/achievements/61.jpg',
            category: 'award',
        },
        {
            id: 'cert-neo4j',
            title: 'Neo4j Certified Professional',
            issuer: 'Neo4j',
            date: '2025-06-01',
            description: 'Earned the Neo4j Certified Professional credential, demonstrating proficiency in graph database concepts, Cypher query language, data modeling, and building applications with Neo4j. Covers graph algorithms, performance tuning, and real-world use cases such as knowledge graphs and recommendation engines.',
            credentialUrl: 'https://graphacademy.neo4j.com/certifications/',
            image: '/achievements/1750931680516.jpeg',
            images: [
                '/achievements/1750931680516.jpeg',
                '/achievements/1750931911914.jpeg',
                '/achievements/1750932016528.jpeg',
                '/achievements/1750932092117.jpeg',
            ],
            category: 'certification',
            tags: ['Neo4j', 'Graph Database', 'Cypher', 'Knowledge Graphs', 'Database'],
        },
        {
            id: 'cert-scaler-innovator',
            title: 'Young Innovator Internship Challenge \'24',
            issuer: 'Scaler School of Technology',
            date: '2024-12-01',
            description: 'Selected and recognised in the Young Innovator Internship Challenge 2024 by Scaler School of Technology, a competitive program identifying top student innovators and problem-solvers across India.',
            credentialUrl: 'https://moonshot.scaler.com/s/sl/Zmtrw5WjNj',
            image: '/achievements/1735301791752.jpeg',
            category: 'certification',
            tags: ['Innovation', 'Internship', 'Scaler', 'Challenge'],
        },
        {
            id: 'cert-postman',
            title: 'Postman API Fundamentals Student Expert',
            issuer: 'Postman',
            date: '2025-04-01',
            description: 'Earned the Postman API Fundamentals Student Expert badge by demonstrating proficiency in core API concepts and hands-on use of Postman. Covers API requests, authentication, collections, environments, testing, and automation workflows.',
            credentialUrl: 'https://badges.parchment.com/public/assertions/c7x4T0h6S5u6YL5nvejoUg',
            image: '/achievements/1745308950779.jpeg',
            images: [
                '/achievements/1745308950779.jpeg',
                '/achievements/1745311227799.jpeg',
            ],
            category: 'certification',
            tags: ['API', 'Postman', 'REST', 'Testing', 'Automation'],
        },
        {
            id: 'cert-linkedin-genai',
            title: 'Career Essentials in Generative AI',
            issuer: 'Microsoft & LinkedIn',
            date: '2024-06-17',
            description: 'Completed Microsoft and LinkedIn\'s professional learning path on Generative AI (~4h 53m, 6 courses). Covered core AI and generative AI concepts, LLMs, Microsoft Copilot, AI-powered search, ethical considerations in AI, and practical applications of AI in the workplace. Courses included: What Is Generative AI?, Generative AI: The Evolution of Thoughtful Online Search, Streamlining Your Work with Microsoft Copilot, Learning Microsoft 365 Copilot for Work, Ethics in the Age of Generative AI, and Introduction to Artificial Intelligence.',
            credentialUrl: 'https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin',
            image: '/achievements/linkedin1/1718627942024.jpeg',
            images: [
                '/achievements/linkedin1/1718627942024.jpeg',
                '/achievements/linkedin1/1718627781429.jpeg',
                '/achievements/linkedin1/1718627781429-1.jpeg',
                '/achievements/linkedin1/1718613517486.jpeg',
                '/achievements/linkedin1/1718609992518.jpeg',
                '/achievements/linkedin1/1718563084103.jpeg',
                '/achievements/linkedin1/1718559275434.jpeg',
                '/achievements/linkedin1/1718548378006.jpeg',
            ],
            category: 'certification',
            tags: ['Generative AI', 'Microsoft Copilot', 'LLMs', 'AI Ethics', 'LinkedIn Learning'],
        },
        {
            id: 'cert-2',
            title: 'Google Cloud Arcade Facilitator Program 2025 — Cohort 1',
            issuer: 'Google Cloud Skills Boost & TechXNinjas',
            date: '2025-05-01',
            description: 'Recognised as a Facilitator for the Google Cloud Arcade Program 2025, Cohort 1, organized by Google Cloud Skills Boost in collaboration with TechXNinjas. Facilitated hands-on cloud learning for participants.',
            credentialUrl: 'https://cloudskillsboost.google/public_profiles/8b5e1e6e-2d0f-4e3a-b8c9-1f2a3b4c5d6e',
            image: '/achievements/1749415838286.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-3',
            title: 'Deloitte Australia — Cyber Job Simulation',
            issuer: 'Deloitte via Forage',
            date: '2025-04-01',
            description: 'Completed Deloitte Australia\'s Cyber Job Simulation on Forage, gaining hands-on exposure to real-world cybersecurity tasks including threat analysis, incident response, and security consulting workflows.',
            credentialUrl: 'https://www.theforage.com/simulations/deloitte/cyber-security-p43d',
            image: '/achievements/1750862251922.jpeg',
            images: [
                '/achievements/1750862251922.jpeg',
                '/achievements/1750862442047.jpeg',
                '/achievements/1750862584613.png',
            ],
            category: 'certification',
        },
        {
            id: 'cert-4',
            title: 'Google Workspace — Bring AI To Work Workshop',
            issuer: 'Google Workspace Admins',
            date: '2025-03-01',
            description: 'Completed the Google Workspace "Bring AI To Work" workshop, covering practical AI integrations across Gmail, Docs, Sheets, and Meet using Gemini-powered features to enhance workplace productivity.',
            credentialUrl: 'https://workspace.google.com/learning-center/',
            image: '/achievements/1749569962349.jpeg',
            images: [
                '/achievements/1749569962349.jpeg',
                '/achievements/1749570086074.jpeg',
            ],
            category: 'certification',
        },
        {
            id: 'cert-5',
            title: 'Build with AI: Gemini Powered YouTube Summarizer',
            issuer: 'GDG MAD, Mumbai & NSDC',
            date: '2025-02-01',
            description: 'Completed a hands-on AI course from Letsupgrade.in in collaboration with GDG MAD Mumbai, ML Mumbai, and NSDC. Built a Gemini-powered YouTube video summarizer using Google\'s generative AI APIs.',
            credentialUrl: 'https://letsupgrade.in',
            image: '/achievements/1743598872968.png',
            images: [
                '/achievements/1743598872968.png',
                '/achievements/1745307283011.jpeg',
            ],
            category: 'certification',
        },
        {
            id: 'cert-6',
            title: 'Industrial Workshop — Quadrupedal Locomotion over Challenging Terrains',
            issuer: 'Computer Society of India, Kolkata Chapter',
            date: '2024-11-01',
            description: 'Attended an industrial workshop on enhancing efficiency of quadrupedal locomotion over challenging terrains with extensible feet, organised by the Computer Society of India, Kolkata Chapter.',
            credentialUrl: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/details/certifications/',
            image: '/achievements/1750861793753.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-7',
            title: 'STEM Workshop for High School Students',
            issuer: 'Jadavpur University — Dept. of Instrumentation & Electronics Engineering',
            date: '2024-09-01',
            description: 'Participated in a STEM workshop for high school students organised by the Department of Instrumentation and Electronics Engineering, Jadavpur University, covering applied electronics and instrumentation concepts.',
            credentialUrl: 'https://jadavpuruniversity.in/',
            image: '/achievements/1745312743610.jpeg',
            images: [
                '/achievements/1745312743610.jpeg',
                '/achievements/1745315155290.jpeg',
            ],
            category: 'certification',
        },
        {
            id: 'cert-8',
            title: 'Instagram Creator Course',
            issuer: 'Instagram',
            date: '2024-08-01',
            description: 'Completed Instagram\'s official Creator Course covering content strategy, audience growth, monetisation tools, and analytics for building a professional creator presence on the platform.',
            credentialUrl: 'https://creators.instagram.com',
            image: '/achievements/1736268765600.jpeg',
            category: 'certification',
        },
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'Solidity', icon: 'https://cdn.simpleicons.org/solidity', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow', category: 'library' },
        { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn', category: 'library' },
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas', category: 'library' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy', category: 'library' },
        { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', category: 'library' }, // Matplotlib not on simpleicons sometimes or generic
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis', category: 'database' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes', category: 'tool' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'tool' },
        { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform', category: 'tool' },
        { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain', category: 'library' },
        { name: 'Mistral AI', icon: 'https://cdn.simpleicons.org/mistralai', category: 'library' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch', category: 'library' },
        { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv', category: 'library' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'framework' },
        { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask', category: 'framework' },
    ],
    hardSkills: [
        { name: 'System Architecture', level: 'intermediate', category: 'software', description: 'Designing robust, scalable, and high-performance system architectures for complex applications.' },

        { name: 'AI Agents & Autonomy', level: 'beginner', category: 'ai', description: 'Designing autonomous systems with recursive reasoning and decision-making capabilities.' },
        { name: 'Large Language Models (LLM)', level: 'intermediate', category: 'ai', description: 'Expertise in fine-tuning open-source models, RAG architectures, and complex prompt engineering.' },
        { name: 'Data Science', level: 'expert', category: 'ai', description: 'Advanced statistical analysis and predictive modeling to extract actionable insights from big data.' },
        { name: 'Deep Learning (CV/NLP)', level: 'advanced', category: 'ai', description: 'Architecting deep neural networks for complex computer vision and natural language tasks.' },
        { name: 'Computer Vision', level: 'intermediate', category: 'ai', description: 'Developing real-time object detection, pattern recognition, and spatial analysis systems.' },
        { name: 'Machine Learning Ops', level: 'advanced', category: 'ai', description: 'Implementing robust pipelines for model training, deployment, and performance monitoring.' },
        { name: 'DevOps', level: 'advanced', category: 'devops', description: 'Streamlining development workflows and infrastructure management through automation.' },
        { name: 'Full Stack Development', level: 'expert', category: 'software', description: 'Engineering scalable web architectures from pixel-perfect frontends to robust databases.' },
        { name: 'System Analysis', level: 'advanced', category: 'software', description: 'Translating complex stakeholder requirements into efficient and scalable technical blueprints.' },
        { name: 'SDLC', level: 'intermediate', category: 'software', description: 'Governing the entire life cycle of software development with a focus on quality and agility.' },
        { name: 'Software Design', level: 'advanced', category: 'software', description: 'Applying architectural patterns and principles to build maintainable and modular systems.' },
        { name: 'Requirement Specifications', level: 'advanced', category: 'software', description: 'Defining clear, precise, and actionable technical documentation for engineering teams.' },
        { name: 'Data Analytics', level: 'advanced', category: 'data', description: 'Transforming raw data into meaningful visualizations and strategic intelligence.' },
        { name: 'Data Visualization', level: 'expert', category: 'data', description: 'Crafting intuitive and interactive dashboards to communicate complex data findings.' },
        { name: 'SQL & DBMS', level: 'expert', category: 'data', description: 'Architecting and optimizing relational database schemas for high-performance applications.' },
        { name: 'Docker & Kubernetes', level: 'intermediate', category: 'devops', description: 'Containerizing applications for consistent deployment and orchestrating cloud resources.' },

        // Other Technical Skills
        { name: 'Wazuh', level: 'beginner', category: 'other', description: 'Exploring open-source security monitoring for threat detection and compliance.' },
        { name: 'Network Traffic Analysis', level: 'beginner', category: 'other', description: 'Analyzing packet captures to identify anomalies and optimize network performance.' },
        { name: 'Socket Programming', level: 'expert', category: 'other', description: 'Implementing low-level network communication protocols for real-time data transfer.' },
        { name: 'Google Cloud Platform', level: 'beginner', category: 'other', description: 'Utilizing cloud infrastructure and services for scalable application hosting.' },
        { name: 'Solidity', level: 'beginner', category: 'other', description: 'Writing secure smart contracts for decentralized applications on Ethereum.' },
        { name: 'Decentralized Applications (DApps)', level: 'beginner', category: 'other', description: 'Developing web applications that interact with blockchain smart contracts.' },
        { name: 'Blockchain Architecture', level: 'beginner', category: 'other', description: 'Understanding the fundamental principles of distributed ledger technologies.' },
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Innovative debugging and algorithmic optimization' },
        { name: 'Systemic Thinking', description: 'Designing robust, scalable end-to-end architectures' },
        { name: 'Critical Thinking', description: 'Analytical approach to solving complex engineering challenges' },
        { name: 'Continuous Learning', description: 'Staying updated with state-of-the-art AI research' },
        { name: 'Analytical Thinking', description: 'Breaking down complex data into actionable insights' },
        { name: 'Adaptability', description: 'Quickly mastering new frameworks and AI models' },
        { name: 'Leadership', description: 'Leading engineering teams and managing complex projects' },
        { name: 'Communication', description: 'Translating complex AI concepts for stakeholders' },
        { name: 'Teamwork', description: 'Collaborative development in cross-functional agile teams' },
        { name: 'Research Skills', description: 'In-depth literature review and academic contribution' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter', category: 'ide' },
        { name: 'Google Colab', icon: 'https://cdn.simpleicons.org/googlecolab', category: 'ide' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' }, // Default black, handled by dark:invert in component
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'devops' },
        { name: 'Conda', icon: 'https://cdn.simpleicons.org/anaconda', category: 'devops' },
        { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux', category: 'devops' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' },
    ],
    faqs: [
        {
            question: 'What services do you offer?',
            answer: 'I build across the full spectrum — Full Stack web apps (React, Next.js, FastAPI), AI/ML systems (Python, LLMs, Agentic AI), IoT & embedded hardware (ESP32, RFID, Flutter), and UI component libraries. I work on whatever the problem requires.',
        },
        {
            question: 'What are you currently exploring?',
            answer: 'Currently deep into Agentic AI systems, cloud-native deployment on GCP, and cross-platform mobile development with Flutter. Also exploring edge ML — running quantised models on ESP32 microcontrollers.',
        },
        {
            question: 'Are you available for opportunities?',
            answer: 'Yes! I\'m open to internships, collaborations, and freelance projects — particularly in AI engineering, full-stack development, IoT systems, and UI/UX. Reach out at arnabchatterjee281205@gmail.com.',
        },
        {
            question: 'What is your typical tech stack?',
            answer: 'For AI: Python, FastAPI, LangChain, Ollama, PyTorch. For web: Next.js, React, TypeScript, Tailwind CSS. For hardware/IoT: ESP32, C++, Firebase, MQTT. For mobile: Flutter & Dart.',
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'future-of-ai-agents',
            title: 'The Future of AI Agents in Enterprise',
            excerpt: 'How autonomous agents are redefining software architecture and decision-making processes — and what I\'ve learned building agentic systems firsthand.',
            content: '',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-20',
            category: 'applied-ai',
            tags: ['AI', 'Agents', 'Enterprise', 'LLM', 'Python'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '5'
        },
        {
            id: 'blog-2',
            slug: 'web3-ux-challenges',
            title: 'Overcoming Web3 UX Challenges',
            excerpt: 'Strategies for building decentralized applications that feel as smooth as Web2 — from a developer who\'s wrestled with wallets, gas fees, and onboarding friction.',
            content: '',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-15',
            category: 'more',
            tags: ['Web3', 'Blockchain', 'UX', 'DeFi'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '4'
        },
        {
            id: 'blog-3',
            slug: 'mastering-nextjs-performance',
            title: 'Mastering Next.js Performance',
            excerpt: 'Advanced techniques for optimizing Core Web Vitals in modern React applications — lessons from building this very portfolio and ESG Auditor 2.0.',
            content: '',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-05',
            category: 'software-development',
            tags: ['Next.js', 'React', 'Performance', 'Web Vitals'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-4',
            slug: 'ai-driven-security',
            title: 'AI-Driven Cybersecurity',
            excerpt: 'Using deep learning to detect and prevent modern network intrusion — my take on where behavioral AI is actually useful versus where it\'s just hype.',
            content: '',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-28',
            category: 'applied-ai',
            tags: ['AI', 'Security', 'Deep Learning', 'CyberSec'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '7'
        },
        {
            id: 'blog-5',
            slug: 'llm-fine-tuning',
            title: 'Fine-Tuning LLMs Locally',
            excerpt: 'A practical guide to adapting open-source models using Ollama, LoRA, and QLoRA — based on the exact stack I used for ESG Auditor 2.0.',
            content: '',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-15',
            category: 'applied-ai',
            tags: ['LLM', 'Python', 'Ollama', 'LoRA', 'FineTuning'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '8'
        },
        {
            id: 'blog-6',
            slug: 'smart-contract-security',
            title: 'Smart Contract Audit Patterns',
            excerpt: 'Common vulnerabilities and how to prevent them in Solidity — a study of the patterns that drain wallets and the tools that catch them before deployment.',
            content: '',
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
            date: '2026-02-01',
            category: 'more',
            tags: ['Solidity', 'Ethereum', 'Security', 'Web3', 'Audit'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '5'
        },
        {
            id: 'blog-7',
            slug: 'modern-state-management',
            title: 'Modern State Management in React',
            excerpt: 'Comparing Zustand, Redux Toolkit, and React Context for real projects — what I reached for when building Attendinn and this portfolio.',
            content: '',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop',
            date: '2026-01-25',
            category: 'software-development',
            tags: ['React', 'Zustand', 'Architecture', 'Frontend'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '4'
        },
        {
            id: 'blog-8',
            slug: 'iot-edge-computing',
            title: 'Edge Computing with ESP32',
            excerpt: 'Implementing real-time data processing at the edge for industrial IoT — the lessons from building ThermalSense AI and running TFLite on a microcontroller.',
            content: '',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
            date: '2026-01-10',
            category: 'software-development',
            tags: ['IoT', 'ESP32', 'Edge', 'TinyML', 'Embedded'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '6'
        },
        {
            id: 'blog-9',
            slug: 'ai-in-healthcare',
            title: 'AI Transformation in Healthcare',
            excerpt: 'How computer vision is assisting in medical diagnostics — and why explainability, not accuracy, is the real barrier to clinical adoption.',
            content: '',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
            date: '2026-01-05',
            category: 'applied-ai',
            tags: ['Healthcare', 'AI', 'Ethics', 'ComputerVision'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '7'
        },
        {
            id: 'blog-10',
            slug: 'the-architects-manifesto',
            title: "The Architect's Manifesto",
            excerpt: "My engineering philosophy — why I build what I build, the principles behind every project in this portfolio, and what I'm optimising for as a developer.",
            content: '',
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop',
            date: '2026-03-31',
            category: 'about-me',
            tags: ['Philosophy', 'Engineering', 'About Me', 'Career'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '5'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'CPS Lab Research',
            description: 'Deep Learning research workshop at Cyber Physical System Laboratory.',
            date: '2025-01-20',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            category: 'research'
        },
        {
            id: 'gal-2',
            title: 'Smart City Symposium',
            description: 'Presenting AIoT solutions for sustainable urban development.',
            date: '2024-12-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
            thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
            category: 'event'
        },
        {
            id: 'gal-3',
            title: 'Neural Network Visualization',
            description: 'Custom visualization of a Convolutional Neural Network architecture.',
            date: '2024-11-30',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        },
        {
            id: 'gal-4',
            title: 'Blockchain Hackathon',
            description: 'Building decentralized finance solutions in 48 hours.',
            date: '2024-10-25',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2000&auto=format&fit=crop',
            category: 'event'
        },
        {
            id: 'gal-5',
            title: 'IoT Prototype Demo',
            description: 'Testing real-time sensor integration with cloud platforms.',
            date: '2024-09-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
            category: 'technical'
        }
    ],
};
