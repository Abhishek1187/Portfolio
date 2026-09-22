export const skillsData = {
  featured: [
    { name: "React.js", icon: "react", level: 95, category: "Frontend", tag: "UI & Hooks" },
    { name: "Node.js", icon: "node", level: 92, category: "Backend", tag: "Runtime" },
    { name: "Express.js", icon: "express", level: 90, category: "Backend", tag: "REST APIs" },
    { name: "JavaScript", icon: "javascript", level: 95, category: "Languages", tag: "ES6+" },
    { name: "TypeScript", icon: "typescript", level: 90, category: "Languages", tag: "Type-Safe" },
    { name: "C++", icon: "c++", level: 94, category: "Languages", tag: "DSA & Core" },
    { name: "Python", icon: "python", level: 88, category: "Languages", tag: "Scripting & Core" },
    { name: "Java", icon: "java", level: 85, category: "Languages", tag: "OOP & Backend" },
    { name: "MongoDB", icon: "mongo", level: 90, category: "Databases", tag: "NoSQL" },
    { name: "Firebase", icon: "firebase", level: 92, category: "Databases & Cloud", tag: "Auth & Firestore" },
    { name: "Supabase", icon: "supabase", level: 90, category: "Databases & Cloud", tag: "Postgres & Storage" },
    { name: "Tailwind CSS", icon: "tailwind", level: 95, category: "Styling", tag: "Modern UI" },
  ],

  categories: [
    {
      name: "Languages & Core CS",
      accent: "#ff7a00",
      skills: [
        { name: "C++ & Data Structures", icon: "c++", level: 94, exp: "200+ Solved" },
        { name: "JavaScript (ES6+) & TypeScript", icon: "javascript", level: 95, exp: "Core Web" },
        { name: "Python & Scripting", icon: "python", level: 88, exp: "Problem Solving" },
        { name: "Java & OOP Principles", icon: "java", level: 85, exp: "Academic Core" },
        { name: "SQL & Relational Logic", icon: "sql", level: 90, exp: "Queries & Schema" },
      ],
    },
    {
      name: "Frameworks & Backend Architecture",
      accent: "#38bdf8",
      skills: [
        { name: "React.js & Component Design", icon: "react", level: 95, exp: "Production" },
        { name: "Node.js & Express.js", icon: "node", level: 92, exp: "RESTful APIs" },
        { name: "Socket.io Real-Time Messaging", icon: "socket", level: 90, exp: "WebSockets" },
        { name: "REST API Integration & JWT Auth", icon: "node", level: 94, exp: "Secure Auth" },
        { name: "Tailwind CSS & Responsive Layout", icon: "tailwind", level: 95, exp: "Clean UI" },
      ],
    },
    {
      name: "Databases, Cloud & Dev Tools",
      accent: "#818cf8",
      skills: [
        { name: "MongoDB Persistent Storage", icon: "mongo", level: 90, exp: "Mongoose ODM" },
        { name: "Firebase (Auth, Firestore, Hosting)", icon: "firebase", level: 92, exp: "Serverless" },
        { name: "Supabase Database & Storage", icon: "supabase", level: 90, exp: "Cloud Storage" },
        { name: "Git, GitHub & CI/CD Actions", icon: "git", level: 94, exp: "Automated Deploy" },
        { name: "AWS & Cloud Infrastructure", icon: "aws", level: 82, exp: "Cloud Hosting" },
      ],
    },
  ],
};
