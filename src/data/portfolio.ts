import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Arnab Chatterjee',
        title: 'AI & Full Stack Engineer',
        subtitle: 'AI Engineer & Full Stack Developer | Building Intelligent Systems from Edge to Cloud',
        bio: 'A B.Tech CSE (AIML) student at IEM Saltlake, Kolkata, building across disciplines — AI/ML systems, full-stack web apps, IoT & embedded hardware, and cross-platform mobile apps. My projects combine multiple domains: ThermalSense AI fuses ESP32 sensors with TFLite inference; ESG Auditor 2.0 runs local LLMs via Ollama; Attendinn spans Flutter, ESP32 RFID, and Firebase. Founder of ENGImitra, Neo4j Certified, and Google Cloud GenAI Academy Graduate. Driven to ship real things that work in the real world.',
        avatar: '/about/ArnabCh.jpeg',
        location: 'Kolkata, India',
        email: 'arnabchatterjee281205@gmail.com',
        phone: '',
        resumeUrl: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/',
        website: 'https://github.com/ArnabOPP',
        languages: [
            { name: 'Bengali', level: 'Native' },
            { name: 'Hindi', level: 'Professional' },
            { name: 'English', level: 'Professional Working' },
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
                { title: 'Clone & Install', code: 'git clone https://github.com/ArnabOPP/thermalsense-ai\ncd thermalsense-ai\npip install -r requirements.txt', type: 'code' },
                { title: 'Flash ESP32 Firmware', code: 'cd firmware\n# Open in Arduino IDE and upload to ESP32', type: 'code' },
                { title: 'Start Backend & Dashboard', code: 'python mqtt_bridge.py\ncd dashboard && npm install && npm run dev', type: 'code' }
            ],
            challengesAndSolutions: [
                { problem: 'Low-resolution thermal data accuracy', solution: 'Applied bicubic interpolation to upscale 8×8 sensor grids to 64×64 before feeding into the CNN, significantly improving classification accuracy without requiring expensive high-res sensors.' },
                { problem: 'Latency over MQTT on congested networks', solution: 'Implemented delta encoding — only pixels that changed by more than 0.5°C are transmitted, reducing payload size by ~70% and keeping end-to-end latency under 200 ms.' },
                { problem: 'Model size constraints on edge device', solution: 'Post-training quantisation reduced the TFLite model from 2.1 MB to 380 KB while maintaining 94% accuracy, fitting comfortably in ESP32 flash.' }
            ],
            images: ['/project/thermalsenseai1.png'],
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
                { title: 'Clone and Setup', code: 'git clone https://github.com/ArnabOPP/ESG-AUDITOR-2.0\ncd ESG-AUDITOR-2.0\npython -m venv venv && venv\\Scripts\\activate\npip install -r requirements.txt', type: 'code' },
                { title: 'Run Local AI', code: 'ollama pull phi3\nollama serve', type: 'code' },
                { title: 'Start Backend & Frontend', code: 'python main.py\ncd frontend && npm install && npm run dev', type: 'code' }
            ],
            challengesAndSolutions: [
                { problem: 'Hidden Supply Chain Risks Not in Public Disclosures', solution: 'Built a document ingestion pipeline that processes uploaded PDFs and internal supplier reports, using LangChain to extract risk factors beyond what public ESG ratings capture.' },
                { problem: 'Data Privacy for Enterprise Documents', solution: 'All LLM inference runs locally via Ollama (Phi3), ensuring sensitive corporate and supplier data never reaches external cloud AI APIs.' },
                { problem: 'Multi-Role Access Complexity', solution: 'Designed a RBAC middleware layer in FastAPI that controls document visibility, analysis scope, and dashboard features per role at the API level.' }
            ],
            images: ['/project/esgauditor21.png'],
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
                { title: 'Flutter App', code: 'git clone https://github.com/ArnabOPP/attendinn-app\ncd attendinn-app\nflutter pub get\nflutter run', type: 'code' },
                { title: 'Hardware Setup', code: 'git clone https://github.com/ArnabOPP/attendinn-gate-entry-dock\n# Flash ESP32 via PlatformIO\n# Configure WiFi credentials and Firebase URL in config.h', type: 'code' }
            ],
            challengesAndSolutions: [
                { problem: 'Unreliable WiFi in Institutional Environments', solution: 'Implemented exponential backoff reconnection logic in the ESP32 firmware and local card caching so attendance is not lost during brief disconnections.' },
                { problem: 'Cross-Platform Flutter Consistency', solution: 'Used Firebase\'s Flutter SDK which provides a unified API across all targets, and tested UI layouts on both mobile and web breakpoints during development.' },
                { problem: 'RFID Duplicate Scan Prevention', solution: 'Added a debounce timer in firmware that ignores subsequent scans of the same card within a configurable cooldown window, preventing accidental double-logging.' }
            ],
            images: ['/project/attendinnsystem1.png'],
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
                { title: 'Hardware Requirements', code: 'ESP32 / STM32 Flight Controller\n4G/5G LTE Modem Module\nSatellite Communication Module\nCustom PDB + 4x ESC + 4x Motors', type: 'text' },
                { title: 'Firmware Flash', code: '# Flash custom firmware via PlatformIO\npio run --target upload\n# Configure cellular APN and satellite module in config.h', type: 'code' }
            ],
            challengesAndSolutions: [
                { problem: 'Latency in Cellular Control Loop', solution: 'Optimized the control packet size and used UDP over TCP for flight commands to minimize round-trip latency to sub-80ms, sufficient for stable FPV flight.' },
                { problem: 'Power Budget with Modem + Satellite Modules', solution: 'Custom PDB design with dedicated power rails for communication modules, and sleep modes activated when satellite backup is not needed to conserve battery.' },
                { problem: 'Cellular Handoff During Flight', solution: 'Implemented tower-switch logic that pre-connects to the next tower before dropping the current one, preventing control gaps during cell transitions.' }
            ],
            images: ['/project/fpvdroneplatform1.png'],
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
                { title: 'Frontend Setup', code: 'git clone https://github.com/ArnabOPP/JKFITNESS\ncd JKFITNESS\nnpm install\nnpm run dev', type: 'code' },
                { title: 'Backend Setup', code: 'cd backend\npip install -r requirements.txt\n# Set SUPABASE_URL and SUPABASE_KEY in .env\nuvicorn main:app --reload', type: 'code' }
            ],
            challengesAndSolutions: [
                { problem: 'Complex Nested Workout Data Structure', solution: 'Designed a normalized PostgreSQL schema (routines → sessions → exercises → sets) with Supabase JOINs that keep query complexity low while supporting flexible routine structures.' },
                { problem: 'Real-Time UI Updates During Active Workouts', solution: 'Leveraged Supabase real-time subscriptions to push set completions to the UI without polling, keeping the active workout view always in sync.' },
                { problem: 'Mobile Usability in Gym Environment', solution: 'Prioritized large tap targets, minimal text input, and one-thumb reachability in the mobile layout so the app can be used with sweaty hands in a gym setting.' }
            ],
            images: ['/project/jkfitnessapp1.png'],
        },
    ],
    experiences: [
        {
            id: 'prof-1',
            company: 'IEEE SIGHT IEM Student Chapter',
            position: 'Web Developer',
            description: 'Building and maintaining the web presence for the IEEE SIGHT IEM Student Chapter at Salt Lake City. Contributing to the chapter\'s digital initiatives and technical outreach programs.',
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
            description: 'Founded ENGImitra — India\'s EdTech platform built for engineering students. Helping students go from confusion to confidence through structured courses, expert-made notes, MPQs, and mentorship.',
            responsibilities: [
                'Built and launched the full ENGImitra platform — courses, notes, MPQs, and certification system',
                'Designed the learning experience for 1st year engineering students across core subjects',
                'Architecting scalable full-stack infrastructure to support growing student base',
                'Driving community growth, content strategy, and go-to-market execution',
            ],
            skills: ['EdTech', 'Full Stack Development', 'Product Management', 'Entrepreneurship', 'Leadership'],
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
            description: 'Active member of Lions Clubs International, contributing to community development and humanitarian initiatives in Kolkata, West Bengal.',
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
            description: 'Selected for the Young Innovators Internship Challenge (YIIC) by Scaler School of Technology — a competitive program equipping young students with hands-on experience in technology, no-code tools, AI, and innovation.',
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
            id: 'prog-google',
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
            id: 'hack-phycathon',
            company: 'PHYCATHON',
            position: 'Hackathon Participant — Smart Shoe Project',
            description: 'Competed in PHYCATHON, a hardware-software co-design hackathon. Built a smart shoe prototype with foot tracking, fall detection, and emergency signaling.',
            responsibilities: [
                'Designed and built embedded sensor fusion system within footwear chassis',
                'Implemented fall detection and emergency signal triggering logic',
                'Integrated GPS and cellular communication modules for location signaling',
                'Debugged erratic sensor data during real-world foot movement testing',
            ],
            skills: ['Embedded Systems', 'Sensor Fusion', 'IoT', 'C++', 'Hardware Prototyping'],
            startDate: '2025-01-01',
            endDate: '2025-01-03',
            isOngoing: false,
            location: 'On-site',
            type: 'volunteer',
            logo: '/achievements/61.jpg',
            externalLink: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/',
        },
    ],    education: [
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
            logo: '/achievements/logo-2.png',
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
                'Pursued Science stream with focus on Physics, Chemistry, Mathematics & Computer Science',
            ],
            logo: '/achievements/images.jpeg',
        },
    ],
    achievements: [
        {
            id: 'ach-1',
            title: 'PHYCATHON Hackathon — Smart Shoe Build',
            issuer: 'PHYCATHON',
            date: '2025-01-01',
            description: 'Competed in PHYCATHON, a hardware-software co-design hackathon. Built a smart shoe with embedded sensors for foot tracking, fall detection, and emergency signaling.',
            image: '/achievements/61.jpg',
            category: 'award',
        },
        {
            id: 'cert-neo4j',
            title: 'Neo4j Certified Professional',
            issuer: 'Neo4j',
            date: '2025-06-01',
            description: 'Earned the Neo4j Certified Professional credential, demonstrating proficiency in graph database concepts, Cypher query language, data modeling, and building applications with Neo4j.',
            credentialUrl: 'https://graphacademy.neo4j.com/certifications/',
            image: '/achievements/1750931680516.jpeg',
            category: 'certification',
            tags: ['Neo4j', 'Graph Database', 'Cypher', 'Knowledge Graphs'],
        },
        {
            id: 'cert-scaler',
            title: "Young Innovator Internship Challenge '24",
            issuer: 'Scaler School of Technology',
            date: '2024-12-01',
            description: 'Selected and recognised in the Young Innovator Internship Challenge 2024 by Scaler School of Technology.',
            credentialUrl: 'https://moonshot.scaler.com/s/sl/Zmtrw5WjNj',
            image: '/achievements/1735301791752.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-postman',
            title: 'Postman API Fundamentals Student Expert',
            issuer: 'Postman',
            date: '2025-04-01',
            description: 'Earned the Postman API Fundamentals Student Expert badge by demonstrating proficiency in core API concepts and hands-on use of Postman.',
            credentialUrl: 'https://badges.parchment.com/public/assertions/c7x4T0h6S5u6YL5nvejoUg',
            image: '/achievements/1745308950779.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-linkedin-genai',
            title: 'Career Essentials in Generative AI',
            issuer: 'Microsoft & LinkedIn',
            date: '2024-06-17',
            description: 'Completed Microsoft and LinkedIn\'s professional learning path on Generative AI covering LLMs, Microsoft Copilot, AI-powered search, and ethical AI.',
            credentialUrl: 'https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin',
            image: '/achievements/linkedin1/1718627942024.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-google-arcade',
            title: 'Google Cloud Arcade Facilitator Program 2025 — Cohort 1',
            issuer: 'Google Cloud Skills Boost & TechXNinjas',
            date: '2025-05-01',
            description: 'Recognised as a Facilitator for the Google Cloud Arcade Program 2025, Cohort 1. Facilitated hands-on cloud learning for participants.',
            image: '/achievements/1749415838286.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-deloitte',
            title: 'Deloitte Australia — Cyber Job Simulation',
            issuer: 'Deloitte via Forage',
            date: '2025-04-01',
            description: 'Completed Deloitte Australia\'s Cyber Job Simulation on Forage, gaining hands-on exposure to cybersecurity tasks including threat analysis and incident response.',
            credentialUrl: 'https://www.theforage.com/simulations/deloitte/cyber-security-p43d',
            image: '/achievements/1750862251922.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-gemini',
            title: 'Build with AI: Gemini Powered YouTube Summarizer',
            issuer: 'GDG MAD, Mumbai & NSDC',
            date: '2025-02-01',
            description: 'Built a Gemini-powered YouTube video summarizer using Google\'s generative AI APIs in collaboration with GDG MAD Mumbai and NSDC.',
            image: '/achievements/1743598872968.png',
            category: 'certification',
        },
        {
            id: 'cert-csi',
            title: 'Industrial Workshop — Quadrupedal Locomotion over Challenging Terrains',
            issuer: 'Computer Society of India, Kolkata Chapter',
            date: '2024-11-01',
            description: 'Attended an industrial workshop on enhancing efficiency of quadrupedal locomotion over challenging terrains with extensible feet.',
            credentialUrl: 'https://www.linkedin.com/in/arnab-chatterjee-prsnl/details/certifications/',
            image: '/achievements/1750861793753.jpeg',
            category: 'certification',
        },
        {
            id: 'cert-instagram',
            title: 'Instagram Creator Course',
            issuer: 'Instagram',
            date: '2024-08-01',
            description: 'Completed Instagram\'s official Creator Course covering content strategy, audience growth, monetisation tools, and analytics.',
            credentialUrl: 'https://creators.instagram.com',
            image: '/achievements/1736268765600.jpeg',
            category: 'certification',
        },
    ],
    techStack: [
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'AI & ML' },
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow', category: 'AI & ML' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch', category: 'AI & ML' },
        { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain', category: 'AI & ML' },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi', category: 'Backend' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'Frontend' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'Frontend' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'Language' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'Language' },
        { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter', category: 'Mobile' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'Database' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase', category: 'Database' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'DevOps' },
        { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud', category: 'Cloud' },
    ],
    hardSkills: [
        { name: 'Machine Learning', level: 'advanced', category: 'AI & ML', description: 'Building and training ML models for classification, regression, and anomaly detection tasks.' },
        { name: 'Deep Learning', level: 'advanced', category: 'AI & ML', description: 'Designing CNNs, RNNs, and transformer-based architectures for vision and NLP tasks.' },
        { name: 'Large Language Models (LLM)', level: 'advanced', category: 'AI & ML', description: 'Fine-tuning open-source models, RAG architecture, and complex prompt engineering.' },
        { name: 'Computer Vision', level: 'advanced', category: 'AI & ML', description: 'Real-time object detection, thermal anomaly classification, and image processing pipelines.' },
        { name: 'Full Stack Development', level: 'expert', category: 'Software', description: 'Building scalable web architectures from pixel-perfect frontends to robust databases.' },
        { name: 'Data Science', level: 'advanced', category: 'AI & ML', description: 'Statistical analysis and predictive modelling to extract insights from complex datasets.' },
        { name: 'System Architecture', level: 'intermediate', category: 'Software', description: 'Designing robust, scalable, and high-performance system architectures for complex applications.' },
        { name: 'DevOps', level: 'intermediate', category: 'DevOps', description: 'Streamlining development workflows and infrastructure management through automation.' },
        { name: 'SQL & DBMS', level: 'advanced', category: 'Database', description: 'Designing and optimising relational database schemas for high-performance applications.' },
        { name: 'Google Cloud Platform', level: 'intermediate', category: 'Cloud', description: 'Leveraging cloud infrastructure and AI services for scalable application hosting.' },
    ],
    softSkills: [
        { name: 'Leadership', description: 'Leading teams and managing complex projects across technical and community initiatives.' },
        { name: 'Critical Thinking', description: 'Analytical approach to complex technical and strategic problems.' },
        { name: 'Communication', description: 'Clear technical and stakeholder communication across diverse audiences.' },
        { name: 'Teamwork', description: 'Collaborative work in multidisciplinary teams across AI, hardware, and web domains.' },
        { name: 'Problem Solving', description: 'Innovative solutions to real-world engineering and product challenges.' },
        { name: 'Adaptability', description: 'Thriving in fast-changing environments and rapidly acquiring new technologies.' },
        { name: 'Entrepreneurship', description: 'Founder of ENGImitra — visionary approach to value creation in EdTech.' },
        { name: 'Mentorship', description: 'Guiding and developing talent through academic and community programs.' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Editor' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'Version Control' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'API Testing' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'DevOps' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'Design' },
        { name: 'Arduino IDE', icon: 'https://cdn.simpleicons.org/arduino', category: 'Embedded' },
        { name: 'PlatformIO', icon: 'https://cdn.simpleicons.org/platformio', category: 'Embedded' },
        { name: 'Ollama', icon: 'https://cdn.simpleicons.org/ollama', category: 'AI Tools' },
    ],
    faqs: [
        {
            question: 'What technologies do you specialise in?',
            answer: 'I specialise in AI/ML (Python, TensorFlow, LangChain, Ollama), Full Stack Web (Next.js, React, FastAPI), Embedded Systems (ESP32, MQTT, TFLite), and Mobile Development (Flutter). I enjoy working across the full stack from edge hardware to cloud deployments.',
        },
        {
            question: 'Are you available for internships or collaborations?',
            answer: 'Yes! I am actively open to internships, research collaborations, and project partnerships in AI, Full Stack Development, and IoT. Feel free to reach out at arnabchatterjee281205@gmail.com.',
        },
        {
            question: 'What are you currently working on?',
            answer: 'Currently building Attendinn — a smart attendance system with Flutter, ESP32 RFID, and Firebase — and ENGImitra, an EdTech platform for engineering students. Also deepening expertise in AI Agents and multi-agent orchestration.',
        },
        {
            question: 'What is ThermalSense AI?',
            answer: 'ThermalSense AI is an embedded AI project combining ESP32 thermal sensors with a TFLite CNN model for real-time anomaly detection. The system streams data over MQTT to a Python backend and displays live heatmaps on a Next.js dashboard.',
        },
        {
            question: 'How can I contact you?',
            answer: 'Best way is email at arnabchatterjee281205@gmail.com or via LinkedIn at linkedin.com/in/arnab-chatterjee-prsnl/. I typically respond within 24 hours.',
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'future-of-ai-agents',
            title: 'The Future of AI Agents in Software Engineering',
            excerpt: 'How autonomous agents are redefining software architecture and decision-making pipelines.',
            content: 'AI agents are moving from research labs into production systems. Multi-agent orchestration frameworks like LangGraph and Pydantic AI are enabling developers to build pipelines where specialised agents handle research, writing, validation, and deployment — each with defined roles and typed interfaces.',
            image: '/about/ArnabCh.jpeg',
            date: '2025-11-01',
            category: 'AI & ML',
            tags: ['AI Agents', 'LangChain', 'LLM', 'Multi-Agent'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '6 min read',
        },
        {
            id: 'blog-2',
            slug: 'iot-edge-computing',
            title: 'Edge Computing with ESP32 for Industrial IoT',
            excerpt: 'Implementing real-time data processing at the edge for industrial IoT applications.',
            content: 'Running ML inference on microcontrollers like ESP32 requires aggressive optimisation — INT8 quantisation, model pruning, and careful memory management. TensorFlow Lite for Microcontrollers makes this tractable, enabling on-device anomaly detection without cloud round-trips.',
            image: '/about/ArnabCh.jpeg',
            date: '2025-09-15',
            category: 'IoT',
            tags: ['ESP32', 'Edge AI', 'TFLite', 'MQTT', 'IoT'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '8 min read',
        },
        {
            id: 'blog-3',
            slug: 'llm-fine-tuning',
            title: 'Fine-Tuning LLMs Locally with Ollama and LoRA',
            excerpt: 'A practical guide to optimising open-source models using Ollama and LoRA techniques.',
            content: 'Local LLM inference with Ollama removes the dependency on external APIs for sensitive workloads. Combined with LoRA fine-tuning, you can adapt models like Phi-3 or Llama 3 to domain-specific tasks — keeping data on-premise and dramatically reducing inference cost.',
            image: '/about/ArnabCh.jpeg',
            date: '2025-10-01',
            category: 'AI & ML',
            tags: ['LLM', 'Ollama', 'LoRA', 'Fine-Tuning', 'Local AI'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '7 min read',
        },
        {
            id: 'blog-4',
            slug: 'mastering-nextjs-performance',
            title: 'Mastering Next.js Performance for Production',
            excerpt: 'Advanced techniques for optimising Core Web Vitals on modern React applications.',
            content: 'Next.js App Router brings RSC, streaming, and granular caching to production. The key levers: use Server Components by default, stream expensive data fetches, leverage the fetch cache with revalidation, and apply dynamic() imports for client-heavy components.',
            image: '/about/ArnabCh.jpeg',
            date: '2025-08-20',
            category: 'Web Development',
            tags: ['Next.js', 'React', 'Performance', 'Core Web Vitals'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '5 min read',
        },
        {
            id: 'blog-5',
            slug: 'ai-in-healthcare',
            title: 'AI Transforming Healthcare Diagnostics',
            excerpt: 'How computer vision is assisting medical diagnosis and patient data analysis.',
            content: 'Computer vision models trained on medical imaging datasets are achieving radiologist-level accuracy on specific diagnostic tasks. The key challenges are data scarcity, regulatory compliance, and model interpretability — areas where techniques like GradCAM and federated learning are making meaningful progress.',
            image: '/about/ArnabCh.jpeg',
            date: '2025-07-10',
            category: 'AI & ML',
            tags: ['Healthcare AI', 'Computer Vision', 'Deep Learning', 'Medical Imaging'],
            author: { name: 'Arnab Chatterjee', avatar: '/about/ArnabCh.jpeg' },
            readTime: '6 min read',
        },
    ],
    gallery: [
        {
            id: 'gallery-1',
            title: 'Professional Portrait',
            description: 'Professional profile photo.',
            date: '2025-01-01',
            type: 'photo',
            url: '/about/ArnabCh.jpeg',
            thumbnail: '/about/ArnabCh.jpeg',
            category: 'Personal',
        },
        {
            id: 'gallery-2',
            title: 'PHYCATHON Hackathon',
            description: 'Competing in PHYCATHON hardware-software co-design hackathon.',
            date: '2025-01-03',
            type: 'photo',
            url: '/achievements/61.jpg',
            thumbnail: '/achievements/61.jpg',
            category: 'Events',
        },
        {
            id: 'gallery-3',
            title: 'Google Cloud GenAI Academy',
            description: 'Completing the Google Cloud GenAI Academy program.',
            date: '2025-06-01',
            type: 'photo',
            url: '/achievements/1749415838286.jpeg',
            thumbnail: '/achievements/1749415838286.jpeg',
            category: 'Achievements',
        },
    ],
};
