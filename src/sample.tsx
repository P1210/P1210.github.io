// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Mail,
//   Linkedin,
//   Github,
//   BarChart3,
//   FileText,
//   Code2,
//   ArrowRight,
//   Terminal,
//   Layers,
//   Zap,
//   Users,
//   Award,
//   CheckCircle2,
//   ExternalLink,
//   Copy,
// } from "lucide-react";

// interface Skills {
//   frontend: string[];
//   tools: string[];
//   practices: string[];
// }

// interface ProjectItem {
//   title: string;
//   description: string;
//   impact: string;
//   tech: string[];
//   metrics: string[];
// }

// interface Experience {
//   company: string;
//   role: string;
//   duration: string;
//   highlights: string[];
// }

// export default function Portfolio() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [copiedText, setCopiedText] = useState<string>("");

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleCopy = (text: string) => {
//     navigator.clipboard.writeText(text);
//     setCopiedText(text);
//     setTimeout(() => setCopiedText(""), 2000);
//   };

//   const skills: Skills = {
//     frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "SCSS"],
//     tools: ["Vite", "Git", "Figma", "State Management", "REST APIs", "Responsive Design"],
//     practices: ["Component Architecture", "Performance Optimization", "Accessibility", "Code Review", "Agile/Scrum"],
//   };

//   const projects: ProjectItem[] = [
//     {
//       title: "Ambient Sound Mood Board",
//       description: "Web application designed to enhance productivity and mental wellness through curated ambient soundscapes.",
//       impact: "Integrated Pomodoro timer with customizable sound library, enabling users to create optimal work environments.",
//       tech: ["React.js", "Tailwind CSS", "Vite", "Custom Hooks", "State Management"],
//       metrics: ["Custom sound mixing", "Timer integration", "Responsive UI"],
//     },
//     {
//       title: "Aesthetic Clock Widget",
//       description: "Interactive time display featuring dynamic animations and time-responsive design elements.",
//       impact: "Implemented smooth animations and custom character artwork with time-based environmental changes.",
//       tech: ["React.js", "SCSS", "Framer Motion", "Vite", "Figma"],
//       metrics: ["60fps animations", "Dynamic theming", "Custom illustrations"],
//     },
//   ];

//   const experience: Experience = {
//     company: "QuickGov Solutions",
//     role: "Software Developer",
//     duration: "Current Position",
//     highlights: [
//       "Developing scalable frontend solutions using React and modern JavaScript",
//       "Collaborating with cross-functional teams to deliver user-centric features",
//       "Implementing responsive designs and ensuring cross-browser compatibility",
//       "Contributing to product strategy through technical and UX insights",
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
//                 <Terminal className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-slate-900">Pranjal Gupta</span>
//             </div>
//             <div className="hidden md:flex items-center gap-8">
//               <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
//                 About
//               </a>
//               <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
//                 Projects
//               </a>
//               <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
//                 Experience
//               </a>
//               <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
//                 Skills
//               </a>
//               <a
//                 href="#contact"
//                 className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all text-sm font-medium shadow-sm hover:shadow-md"
//               >
//                 Get in Touch
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="about" className="pt-32 pb-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-sm font-medium text-green-700">Open to opportunities</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
//                 Frontend Developer
//                 <br />
//                 <span className="text-slate-600">& Product Thinker</span>
//               </h1>

//               <p className="text-xl text-slate-600 leading-relaxed">
//                 Software Developer at QuickGov Solutions, specializing in building scalable, user-centered web applications
//                 with React and modern JavaScript.
//               </p>

//               <p className="text-slate-600 leading-relaxed">
//                 I combine technical expertise with product thinking to create digital solutions that balance user needs with
//                 business objectives. My approach focuses on clean code architecture, performance optimization, and intuitive
//                 user experiences.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <a
//                   href="#projects"
//                   className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 font-medium shadow-sm hover:shadow-md"
//                 >
//                   View Projects
//                   <ArrowRight className="w-4 h-4" />
//                 </a>
//                 <a
//                   href="/Pranjal_Gupta_resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 border-2 border-slate-300 rounded-lg hover:border-slate-900 transition-all flex items-center gap-2 font-medium"
//                 >
//                   <FileText className="w-4 h-4" />
//                   Resume
//                 </a>
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Code2 className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-900 mb-1">Clean Code</h3>
//                       <p className="text-sm text-slate-600">Writing maintainable, scalable solutions</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Users className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-900 mb-1">User-Focused</h3>
//                       <p className="text-sm text-slate-600">Prioritizing experience and accessibility</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Zap className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-900 mb-1">Performance</h3>
//                       <p className="text-sm text-slate-600">Optimized, fast-loading applications</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
//             <p className="text-slate-600 text-lg max-w-2xl mx-auto">Proficient in modern frontend technologies and development practices</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
//                 <Layers className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 text-slate-900">Frontend Development</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skills.frontend.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
//                 <Terminal className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 text-slate-900">Tools & Technologies</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skills.tools.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
//                 <Award className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4 text-slate-900">Best Practices</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skills.practices.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
//             <p className="text-slate-600 text-lg max-w-2xl mx-auto">Showcasing technical skills through real-world applications</p>
//           </div>

//           <div className="space-y-8">
//             {projects.map((project, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
//               >
//                 <div className="grid md:grid-cols-12 gap-8 p-8">
//                   <div className="md:col-span-8 space-y-4">
//                     <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
//                     <p className="text-slate-700 leading-relaxed">{project.description}</p>
//                     <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
//                       <p className="text-sm text-slate-700 leading-relaxed">
//                         <span className="font-semibold">Impact:</span> {project.impact}
//                       </p>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech, j) => (
//                         <span
//                           key={j}
//                           className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex gap-4 pt-2">
//                       <button className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors font-medium">
//                         <ExternalLink className="w-4 h-4" />
//                         Live Demo
//                       </button>
//                       <button className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors font-medium">
//                         <Github className="w-4 h-4" />
//                         Source Code
//                       </button>
//                     </div>
//                   </div>
//                   <div className="md:col-span-4">
//                     <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-200">
//                       <h4 className="text-sm font-semibold text-slate-900 mb-4">Key Features</h4>
//                       <div className="space-y-3">
//                         {project.metrics.map((metric, j) => (
//                           <div key={j} className="flex items-start gap-2">
//                             <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                             <span className="text-sm text-slate-700">{metric}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
//             <p className="text-slate-600 text-lg max-w-2xl mx-auto">Building impactful solutions in production environments</p>
//           </div>

//           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-4xl mx-auto">
//             <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
//               <div>
//                 <h3 className="text-2xl font-bold text-slate-900">{experience.role}</h3>
//                 <p className="text-lg text-slate-600 mt-1">{experience.company}</p>
//               </div>
//               <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">{experience.duration}</span>
//             </div>
//             <div className="space-y-4">
//               {experience.highlights.map((highlight, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <div className="w-2 h-2 bg-white rounded-full"></div>
//                   </div>
//                   <p className="text-slate-700 leading-relaxed">{highlight}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-slate-900 rounded-2xl p-12 text-white shadow-xl">
//             <div className="text-center mb-8">
//               <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
//               <p className="text-slate-300 max-w-2xl mx-auto">
//                 I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi,
//                 feel free to reach out.
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
//               {[
//                 { icon: Mail, label: "Email", value: "gpranjal1210@gmail.com" },
//                 { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pranjal-gupta-b3320719b" },
//                 { icon: Github, label: "GitHub", value: "github.com/P1210" },
//                 { icon: BarChart3, label: "Tableau", value: "public.tableau.com/profile/pranjal.gupta2945" },
//               ].map((contact, i) => (
//                 <div
//                   key={i}
//                   className="relative flex items-center gap-4 p-4 bg-white/10 rounded-xl transition-all group border border-white/10 hover:bg-white/20"
//                 >
//                   <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <contact.icon className="w-5 h-5" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-xs text-slate-400 mb-1">{contact.label}</div>
//                     <div className="font-medium text-sm truncate">{contact.value}</div>
//                   </div>
//                   <button
//                     onClick={() => handleCopy(contact.value)}
//                     className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
//                     title="Copy to clipboard"
//                   >
//                     <Copy className="w-4 h-4" />
//                   </button>
//                   {copiedText === contact.value && (
//                     <div className="absolute -top-8 right-0 px-2 py-1 bg-green-500 text-white text-xs rounded">Copied!</div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-200 py-8 px-6 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-slate-600">© 2024 Pranjal Gupta · Designed & Developed with React</p>
//         </div>
//       </footer>
//     </div>
//   );
// }


