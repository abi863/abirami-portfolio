export const personalData = {
  name: "Abirami R V",
  role: "Software Developer",
  tagline: "Aspiring Full Stack Developer",
  aboutMe: "I am a passionate aspiring Web Developer interested in building modern web applications.",
  location: "Rajapalayam, Virudhunagar, Tamil Nadu, India",
  email: "abiramishankar57@gmail.com",
  phone: "+91 7550194144",
  socials: {
    github: "https://github.com/abi863",
    linkedin: "https://www.linkedin.com/in/abirami-r-v-a13940330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    leetcode: "https://leetcode.com/u/abi_512"
  },
  resumePath: "/resume.pdf"
};

export const educationData = [
  {
    id: "college",
    degree: "B.Tech Computer Science and Business Systems",
    institution: "Ramco Institute of Technology",
    period: "2024–2028",
    scoreType: "CGPA",
    score: "6.97",
    status: "In Progress",
    description: "Specializing in core computer science, software engineering, business systems integration, and full-stack development."
  },
  {
    id: "school-12",
    degree: "Higher Secondary Education (12th Standard)",
    institution: "Sri Rao Bahadhur A K D Dharma Raja Girls Higher Secondary School, Rajapalayam",
    period: "2021–2023",
    scoreType: "Percentage",
    score: "69.83%",
    passYear: "2023",
    status: "Completed",
    description: "Completed higher secondary curriculum with mathematics, science, and computer science foundations."
  },
  {
    id: "school-10",
    degree: "Secondary School Leaving Certificate (10th Standard)",
    institution: "Sri Rao Bahadhur A K D Dharma Raja Girls Higher Secondary School, Rajapalayam",
    period: "2020–2021",
    scoreType: "Percentage",
    score: "74%",
    passYear: "2021",
    status: "Completed",
    description: "Successfully passed matriculation secondary examination with strong academic record."
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    level: "Intermediate",
    skills: [
      { name: "Java", level: "Intermediate", icon: "Coffee" },
      { name: "JavaScript", level: "Intermediate", icon: "FileCode2" },
      { name: "HTML", level: "Intermediate", icon: "Code" },
      { name: "CSS", level: "Intermediate", icon: "Palette" }
    ]
  },
  {
    category: "Frontend Development",
    level: "Intermediate",
    skills: [
      { name: "React.js", level: "Intermediate", icon: "Atom" }
    ]
  },
  {
    category: "Backend Development",
    level: "Currently Learning",
    skills: [
      { name: "Spring Boot", level: "Currently Learning", badge: "In Progress", icon: "Server" }
    ]
  },
  {
    category: "Databases",
    level: "Intermediate",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: "Database" },
      { name: "MongoDB", level: "Intermediate", icon: "Layers" }
    ]
  },
  {
    category: "Development Tools",
    level: "Tools & Platforms",
    skills: [
      { name: "Visual Studio Code", level: "Tool", icon: "Terminal" },
      { name: "GitHub", level: "Tool", icon: "GitBranch" },
      { name: "Arduino IDE", level: "Tool", icon: "Cpu" },
      { name: "Antigravity", level: "Tool", icon: "Sparkles" }
    ]
  }
];

export const projectsData = [
  {
    id: "lifeconnect",
    name: "LIFEConnect – Blood Bank Management System",
    shortDescription: "A web-based Blood Bank Management System developed using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript to connect donors, patients, and inventory in emergencies.",
    fullDescription: "LIFEConnect is a web-based Blood Bank Management System developed using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. It helps manage blood donors, patients, and blood inventory efficiently. The system allows donors to register, patients to submit emergency blood requests, and find nearby eligible donors based on blood group and location. It also provides a direct calling option to contact donors, real-time inventory management, and an admin dashboard to manage donor details and blood requests. The application focuses on data privacy, security, and quick access to blood during emergencies.",
    status: "Completed",
    category: "Full Stack & Healthcare",
    image: "/images/project-lifeconnect.jpg",
    githubUrl: null, // "GitHub link coming soon"
    technologies: [
      "Java 21",
      "Spring Boot 3.x",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "Thymeleaf",
      "Maven",
      "Swagger / OpenAPI",
      "JUnit 5",
      "Mockito",
      "Leaflet",
      "OpenStreetMap",
      "Browser Geolocation API",
      "Git",
      "GitHub"
    ],
    highlights: [
      "Emergency donor matching with Browser Geolocation API & Leaflet maps",
      "Direct calling mechanism for immediate patient-donor contact",
      "Secure authentication and data privacy with Spring Security",
      "Real-time blood inventory tracking and administrative triage dashboard"
    ]
  },
  {
    id: "smart-bus-stop",
    name: "Smart Bus Stop using ESP32",
    shortDescription: "An IoT-based public transit information station developed using an ESP32 microcontroller to provide real-time bus status updates to waiting passengers.",
    fullDescription: "The Smart Bus Stop Information System is an IoT-based project developed using an ESP32 microcontroller to provide real-time bus status information to passengers. It displays bus updates such as Waiting, Bus Arriving, Bus Arrived, and Bus Departed through an OLED display and LED indicators. Passengers can connect to the ESP32 Wi-Fi hotspot and access a webpage on their mobile phones to check the current bus status and next bus information. The operator can update the bus status using physical push buttons or through the webpage. A buzzer provides audio alerts for important bus events. This system aims to make public transportation information more accessible, improve passenger convenience, and reduce uncertainty while waiting for buses.",
    status: "Completed",
    category: "IoT & Embedded Systems",
    image: "/images/project-smart-bus-stop.jpg",
    githubUrl: null, // "GitHub link coming soon"
    technologies: [
      "ESP32 Microcontroller",
      "Embedded C++ (Arduino IDE)",
      "HTML",
      "CSS",
      "Wi-Fi Technology",
      "IoT (Internet of Things)",
      "OLED Display (SSD1306)",
      "ESP32 WebServer Library",
      "LED Indicators",
      "Push Button Interface",
      "Buzzer Alert System"
    ],
    highlights: [
      "Dual interface: physical push buttons and local Wi-Fi web captive portal",
      "Real-time status updates (Waiting, Arriving, Arrived, Departed) on SSD1306 OLED",
      "Audio buzzer alerts for visually impaired passenger accessibility",
      "Autonomous standalone operation requiring no active mobile carrier network"
    ]
  },
  {
    id: "online-shopping",
    name: "Online Shopping Website",
    shortDescription: "An e-commerce website developed as part of a one-month Web Development internship at Trios Technology Pvt. Ltd.",
    fullDescription: "Developed an Online Shopping Website as part of a one-month Web Development internship. The project uses HTML, CSS, and JavaScript for the frontend, Java for backend development, and MySQL for database management.",
    status: "Developed as part of internship work",
    category: "Full Stack E-Commerce",
    image: "/images/project-shopping.jpg",
    githubUrl: null, // "GitHub link coming soon"
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "MySQL"
    ],
    highlights: [
      "Dynamic catalog display and shopping cart state management",
      "Relational schema in MySQL for users, product catalog, and order handling",
      "Java backend handlers connecting user transactions with persistent records",
      "Delivered within a structured 1-month industry internship cycle"
    ]
  }
];

export const internshipData = {
  company: "Trios Technology Pvt. Ltd.",
  domain: "Web Development",
  duration: "1 Month",
  projectWork: "Online Shopping Website",
  technologiesUsed: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
  certificateAvailable: true,
  description: "Completed a one-month Web Development internship during which I worked on an Online Shopping Website using HTML, CSS, JavaScript, Java, and MySQL."
};

export const certificationsData = [
  { id: 1, title: "Digital Skills: Artificial Intelligence", category: "AI & Emerging Tech" },
  { id: 2, title: "Building AI-Powered Applications using AWS", category: "Cloud & AI" },
  { id: 3, title: "Cloud Computing", category: "Cloud" },
  { id: 4, title: "Digital Skills: Digital Marketing", category: "Digital Marketing" },
  { id: 5, title: "Digital Skills: Social Media", category: "Digital Marketing" },
  { id: 6, title: "Digital Skills: User Experience", category: "UI/UX & Design" },
  { id: 7, title: "Digital Skills: Digital Skills for Work and Life", category: "Professional Development" },
  { id: 8, title: "Digital Skills: Mobile", category: "Mobile Tech" },
  { id: 9, title: "Data Analytics Job Simulation", category: "Data Analytics" },
  { id: 10, title: "Ethical Hacker", category: "Cybersecurity" },
  { id: 11, title: "Java Basics", category: "Software Engineering" },
  { id: 12, title: "Data Structures and Algorithms using Java", category: "Computer Science" },
  { id: 13, title: "Node JS", category: "Web Development" },
  { id: 14, title: "Power BI", category: "Business Intelligence" },
  { id: 15, title: "GenAI Powered Data Analytics Job Simulation", category: "Data & Generative AI" }
];

export const partnerPlatforms = [
  "Accenture",
  "Intellipaat Academy",
  "Deloitte / Forage",
  "Cisco Networking Academy",
  "Unstop",
  "Infosys Springboard",
  "RECCSAR Private Limited",
  "Tata / Forage"
];

export const achievementsData = [
  {
    id: "ideathon-2026",
    title: "IDEATHON 2026",
    award: "Second Prize",
    institution: "AAA College of Engineering and Technology",
    year: "2026",
    prominent: true,
    description: "Secured Second Prize for innovative technical idea presentation and engineering prototype demonstration."
  },
  {
    id: "ideathon-2025",
    title: "IDEATHON 2025",
    award: "Second Prize",
    institution: "PSR College of Engineering and Technology",
    year: "2025",
    prominent: true,
    description: "Won Second Prize for formulating and pitching an impactful engineering solution to real-world challenges."
  },
  {
    id: "ramanujan-competition",
    title: "National Level Srinivasa Ramanujan Mathematical Competitions 2025–26",
    award: "National Level Participant",
    institution: "ISTE Tamil Nadu Section",
    year: "2025–2026",
    prominent: false,
    description: "Participated in the competitive national-level mathematical evaluations organized by ISTE Tamil Nadu Section."
  },
  {
    id: "ozone-day-2026",
    title: "World Ozone Day 2026 – Online Quiz Competition",
    award: "Online Competition Ranker",
    institution: "TCE EIACP PC-RP, Thiagarajar College of Engineering",
    year: "2026",
    prominent: false,
    description: "Demonstrated technical and scientific acumen in the state-level environmental quiz competition."
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Internship", href: "#internship" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
