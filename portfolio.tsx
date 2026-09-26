import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight,
  Code2,
  Database,
  Terminal,
  Cpu,
  MonitorSmartphone,
  ShieldAlert,
  Award,
  BookOpen
} from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'NeuroEDU',
    category: 'AI / EDUCATION PLATFORM',
    description: 'AI-powered education platform focused on personalized learning, student discipline, distraction-free study and educational support.',
    tech: ['React', 'Python', 'AI/ML', 'Node.js'],
    github: 'https://github.com/Sargonitish/NeuroEDU',
    live: 'https://sargonitish.github.io/NeuroEDU/',
    featured: true,
    color: 'bg-[#0a2416]', // Dark green from reference
    textColor: 'text-white'
  },
  {
    id: 2,
    title: 'CyberDecrypt',
    category: 'CYBERSECURITY / CTF',
    description: 'Cybersecurity and Cryptography CTF platform created for student learning, challenges, and skill development.',
    tech: ['React', 'Cryptography', 'Express', 'MongoDB'],
    github: 'https://github.com/Sargonitish/CyberDecrypt',
    featured: false,
    color: 'bg-white',
    textColor: 'text-black'
  },
  {
    id: 3,
    title: 'Student Attendance System',
    category: 'WEB APP',
    description: 'Attendance management platform with QR-based/manual attendance and secure authentication.',
    tech: ['QR Systems', 'Auth', 'React'],
    featured: false,
    color: 'bg-white',
    textColor: 'text-black'
  },
  {
    id: 4,
    title: 'Live Bluetooth Audio Sync Pro',
    category: 'SOFTWARE',
    description: 'Desktop application related to synchronized Bluetooth audio playback across devices.',
    tech: ['C++', 'Audio Sync', 'Desktop'],
    featured: false,
    color: 'bg-white',
    textColor: 'text-black'
  },
  {
    id: 5,
    title: 'Sevalile Bot',
    category: 'HARDWARE / IOT',
    description: 'ESP32-based robotic project with motor control and remote operation capabilities.',
    tech: ['ESP32', 'IoT', 'C++'],
    featured: false,
    color: 'bg-white',
    textColor: 'text-black'
  },
  {
    id: 6,
    title: 'Event Registration System',
    category: 'MANAGEMENT SYSTEM',
    description: 'Event registration, QR generation, coordinator scanning and attendance management system.',
    tech: ['React', 'Node', 'QR'],
    featured: false,
    color: 'bg-[#f0ece1]', // Slightly darker cream for contrast
    textColor: 'text-black'
  },
  {
    id: 7,
    title: 'Birthday Surprise Website',
    category: 'INTERACTIVE WEB',
    description: 'Interactive personalized web experience built with modern frontend tools.',
    tech: ['HTML', 'CSS', 'JS', 'Animations'],
    featured: false,
    color: 'bg-[#f0ece1]',
    textColor: 'text-black'
  }
];

const SKILLS = {
  'PROGRAMMING': ['C++', 'Java', 'Python', 'JavaScript'],
  'WEB DEVELOPMENT': ['HTML', 'CSS', 'React', 'Node.js', 'Express', 'Tailwind'],
  'DATABASE': ['MySQL', 'SQLite', 'PostgreSQL', 'Firebase'],
  'TOOLS & OTHER': ['Git', 'GitHub', 'VS Code', 'REST APIs', 'Cybersecurity', 'AI/ML']
};

const ACHIEVEMENTS = [
  {
    title: 'TEAM MARVELZ 2nd Prize — Idea-thon',
    subtitle: 'AI for Quality Education • Quality Week 2026 • VIT Chennai',
    icon: <Award className="w-5 h-5" />
  },
  {
    title: 'NPTEL Cloud Computing Certification',
    subtitle: 'Elite Certificate for Cloud Architecture',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: 'Basics of Electronics and Embedded Systems',
    subtitle: 'IIT Madras Certification',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: 'Cybersecurity / Cryptography CTF',
    subtitle: 'Active participation and challenge completion',
    icon: <ShieldAlert className="w-5 h-5" />
  }
];

// The signature orange square badge from the reference image
const SectionBadge = ({ icon: Icon }) => (
  <div className="w-8 h-8 rounded bg-[#e84a27] text-white flex items-center justify-center shrink-0 shadow-sm">
    {Icon ? <Icon size={16} strokeWidth={3} /> : <div className="w-3 h-3 bg-white rounded-sm" />}
  </div>
);

const SectionTitle = ({ title, subtitle, icon, rightElement }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black/10 pb-6 mb-12">
    <div className="flex items-start gap-4">
      <SectionBadge icon={icon} />
      <div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base font-medium text-black/60 font-mono max-w-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
    {rightElement && (
      <div className="flex-shrink-0 font-mono text-sm font-bold text-black/40 tracking-widest">
        {rightElement}
      </div>
    )}
  </div>
);

const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-wide text-sm transition-all duration-300 rounded-full";
  const variants = {
    primary: "bg-[#e84a27] text-white hover:bg-[#d03d1c] shadow-[0_4px_14px_0_rgba(232,74,39,0.39)] hover:shadow-[0_6px_20px_rgba(232,74,39,0.23)] hover:-translate-y-1",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white"
  };

  const Element = href ? 'a' : 'button';
  
  return (
    <Element 
      href={href} 
      onClick={onClick}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Element>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="inline-block mb-6 px-4 py-1.5 border-2 border-black rounded-full font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
          <span className="text-[#e84a27] mr-2">///</span> Available for opportunities
        </div>
        
        <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-black mb-6">
          Nitish S<span className="text-[#e84a27]">.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-black mb-4">
              Computer Science Engineering Student & Developer
            </h2>
            <p className="text-base md:text-lg text-black/70 font-mono leading-relaxed max-w-xl">
              Building practical digital experiences, solving real-world problems, and exploring the intersection of software, AI, cybersecurity, and technology.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button href="#projects" variant="primary">
                View My Work <ArrowUpRight size={18} />
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 font-mono text-sm font-bold border-l-2 border-black/10 pl-6 md:pl-8">
            <a href="https://github.com/Sargonitish" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#e84a27] transition-colors">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nitish-ping-perfect" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#e84a27] transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="http://nitishportfolio.xo.je/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#e84a27] transition-colors">
              <ExternalLink size={20} /> Old Portfolio
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Stats = () => {
  return (
    <section id="about" className="py-20 border-t-2 border-black/10">
      <SectionTitle 
        title="Stats" 
        subtitle="A quick look at the measurable impact behind the journey." 
        rightElement="// 01"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { label: 'Projects Built', value: '15+' },
          { label: 'Hackathons', value: '05' },
          { label: 'Certifications', value: '08' },
          { label: 'Coffee Cups', value: '404' } // Placeholder fun stat
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col border-l-2 border-[#e84a27] pl-4 md:pl-6"
          >
            <span className="text-4xl md:text-6xl font-black tracking-tighter text-black">{stat.value}</span>
            <span className="text-xs md:text-sm font-mono font-bold text-black/60 uppercase mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const featuredProject = PROJECTS.find(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 border-t-2 border-black/10">
      <SectionTitle 
        title="Selected Work" 
        subtitle="Featured projects spanning AI, Web Development, and Hardware."
        rightElement="// 02"
        icon={Code2}
      />
      
      {/* Featured Project (Recreating the Dark Green Card from reference) */}
      {featuredProject && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${featuredProject.color} ${featuredProject.textColor} rounded-[2rem] p-8 md:p-16 mb-12 shadow-xl relative overflow-hidden group`}
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="text-[#4ade80] font-mono text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                {featuredProject.category}
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                {featuredProject.title}
              </h3>
              
              <p className="text-lg md:text-xl font-medium text-white/80 max-w-xl mb-8 leading-relaxed">
                {featuredProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {featuredProject.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-mono font-medium">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                {featuredProject.live && (
                  <Button href={featuredProject.live} variant="primary" className="!bg-[#e84a27] hover:!bg-[#d03d1c]">
                    Live Demo <ExternalLink size={16} />
                  </Button>
                )}
                {featuredProject.github && (
                  <Button href={featuredProject.github} className="bg-white text-[#0a2416] hover:bg-gray-200">
                    GitHub <Github size={16} />
                  </Button>
                )}
              </div>
            </div>
            
            {/* Visual Placeholder for Project App Interface */}
            <div className="flex-1 hidden lg:block relative min-h-[300px]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10 shadow-2xl transform group-hover:-translate-x-4 transition-transform duration-500">
                 <div className="w-full h-8 bg-black/20 rounded-t-xl mb-2 flex items-center px-3 gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="w-full h-48 bg-black/40 rounded-b-xl overflow-hidden relative">
                    {/* Simulated code/dashboard lines */}
                    <div className="absolute inset-4 flex flex-col gap-3">
                      <div className="w-3/4 h-4 bg-white/20 rounded" />
                      <div className="w-1/2 h-4 bg-white/10 rounded" />
                      <div className="w-5/6 h-4 bg-white/10 rounded" />
                      <div className="mt-auto w-full h-20 bg-white/5 rounded flex gap-2 p-2">
                        <div className="flex-1 bg-white/10 rounded" />
                        <div className="w-1/3 bg-[#4ade80]/20 rounded" />
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid for other projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group ${project.color} ${project.textColor} border-2 border-black/10 rounded-3xl p-6 md:p-8 flex flex-col hover:border-black transition-colors duration-300`}
          >
            <div className="font-mono text-xs font-bold tracking-widest uppercase mb-4 text-[#e84a27]">
              {project.category}
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#e84a27] transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm font-medium opacity-80 mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-1 rounded bg-black/5 text-xs font-mono font-bold">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-3 mt-auto pt-4 border-t-2 border-black/5">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Github size={18} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center hover:bg-[#e84a27] hover:border-[#e84a27] hover:text-white transition-all">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t-2 border-black/10">
      <SectionTitle 
        title="Technical Arsenal" 
        subtitle="Tools and technologies I use to bring ideas to life."
        rightElement="// 03"
        icon={Terminal}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {Object.entries(SKILLS).map(([category, skills], idx) => (
          <div key={category}>
            <h4 className="text-lg font-black uppercase tracking-tight mb-4 border-l-4 border-[#e84a27] pl-3">
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-white border-2 border-black/10 rounded-full text-sm font-mono font-bold hover:border-black hover:-translate-y-1 transition-all cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Journey = () => {
  return (
    <section id="achievements" className="py-20 border-t-2 border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Achievements Column */}
        <div>
           <SectionTitle 
            title="Achievements" 
            rightElement="// 04"
            icon={Award}
          />
          <div className="flex flex-col">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group border-b-2 border-black/10 py-6 last:border-0 flex items-start gap-4 hover:pl-2 transition-all duration-300"
              >
                <div className="mt-1 text-[#e84a27]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-[#e84a27] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm font-mono text-black/60 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Experience Column */}
        <div>
           <SectionTitle 
            title="Education" 
            rightElement="// 05"
            icon={BookOpen}
          />
          <div className="bg-white border-2 border-black/10 rounded-3xl p-8 shadow-sm">
             <div className="mb-8">
                <div className="font-mono text-xs font-bold text-[#e84a27] uppercase tracking-widest mb-2">
                  Current
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-1">
                  Bachelor of Engineering
                </h3>
                <h4 className="text-lg font-bold text-black/80 mb-2">
                  Computer Science and Engineering
                </h4>
                <p className="text-black/60 font-mono text-sm">
                  Tagore Engineering College • Chennai, India
                </p>
             </div>

             <div className="pt-8 border-t-2 border-black/10">
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                  Leadership & Activities
                </h3>
                <ul className="space-y-4 font-mono text-sm text-black/80">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-0.5 text-[#e84a27] shrink-0" />
                    Student Coordinator for STEM Club & technical activities.
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-0.5 text-[#e84a27] shrink-0" />
                    Organized multiple technical and cybersecurity events.
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-0.5 text-[#e84a27] shrink-0" />
                    Active involvement in Project Expos & Student Council.
                  </li>
                </ul>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t-2 border-black/10">
      <SectionTitle 
        title="Let's Talk" 
        subtitle="Open for opportunities, hackathons, and collaborative projects."
        rightElement="// 06"
        icon={Mail}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Got an idea?<br/>
            <span className="text-[#e84a27]">Let's build it.</span>
          </h3>
          <p className="font-mono text-black/70 mb-10 max-w-md">
            Whether you have a project in mind, need a developer for your team, or just want to chat about tech, feel free to reach out.
          </p>
          
          <div className="space-y-6 font-mono font-bold">
            <a href="mailto:contact@example.com" className="flex items-center gap-4 hover:text-[#e84a27] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:border-[#e84a27]">
                <Mail size={20} />
              </div>
              contact@example.com <span className="text-xs font-normal text-black/40">(Placeholder)</span>
            </a>
            <a href="https://github.com/Sargonitish" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#e84a27] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:border-[#e84a27]">
                <Github size={20} />
              </div>
              github.com/Sargonitish
            </a>
            <a href="https://www.linkedin.com/in/nitish-ping-perfect" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#e84a27] transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:border-[#e84a27]">
                <Linkedin size={20} />
              </div>
              LinkedIn Profile
            </a>
          </div>
        </div>

        <form className="bg-white border-2 border-black/10 rounded-3xl p-8 shadow-sm flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-[#f4f2ea] border-2 border-transparent focus:border-[#e84a27] rounded-xl px-4 py-3 font-mono outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">Email</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-[#f4f2ea] border-2 border-transparent focus:border-[#e84a27] rounded-xl px-4 py-3 font-mono outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">Message</label>
            <textarea 
              rows="4"
              placeholder="How can I help you?"
              className="w-full bg-[#f4f2ea] border-2 border-transparent focus:border-[#e84a27] rounded-xl px-4 py-3 font-mono outline-none transition-colors resize-none"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full mt-2">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t-2 border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="font-black uppercase tracking-tighter text-xl">
      NITISH S<span className="text-[#e84a27]">.</span>
    </div>
    <div className="font-mono text-xs font-bold text-black/50">
      © {new Date().getFullYear()} DESIGNED & BUILT BY NITISH S.
    </div>
    <div className="flex gap-4">
      <a href="#home" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#e84a27] transition-colors">
        <ChevronRight size={20} className="-rotate-90" />
      </a>
    </div>
  </footer>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 py-4 px-4 sm:px-6 md:px-8 flex items-center justify-between bg-[#f4f2ea]/90 backdrop-blur-md border-b-2 border-black/10">
        <a href="#home" className="text-2xl font-black uppercase tracking-tighter hover:text-[#e84a27] transition-colors">
          NITISH S.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-sm font-bold uppercase tracking-wider hover:text-[#e84a27] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="!py-2 !px-5 text-xs">
            Let's Connect
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 -mr-2 text-black"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0d2319] text-white flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-white hover:text-[#e84a27]">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 mt-12">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-[#e84a27]">
                Home
              </a>
              {links.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter hover:text-[#e84a27]"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter text-[#e84a27]">
                Contact
              </a>
            </div>
            
            <div className="mt-auto pb-8 font-mono text-sm text-white/50">
              © {new Date().getFullYear()} Nitish S.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  // Global CSS overrides for the specific font feeling and grid
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html { scroll-behavior: smooth; }
      body { 
        background-color: #e84a27; 
        font-family: 'Inter', system-ui, sans-serif;
      }
      /* Custom heading font simulation if Oswald/Anton not loaded */
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald', 'Impact', sans-serif;
      }
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6 lg:p-8 font-sans selection:bg-[#e84a27] selection:text-white">
      {/* Main Content Canvas with Cream Background and Grid */}
      <div className="bg-[#f4f2ea] bg-grid-pattern min-h-full rounded-2xl sm:rounded-[2rem] relative overflow-hidden shadow-2xl text-black">
        <Navbar />
        <main className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <Hero />
          <Stats />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}