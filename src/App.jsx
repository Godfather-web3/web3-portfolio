import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ---------------- ICONS ---------------- */
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const Menu = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const Discord = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>;
const Telegram = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.116 12.116 0 0 0-.056 0zm4.962 8.224c.186.978-.396 5.855-.696 7.575-.126.722-.393.96-.65.984-.56.052-1.05-.313-1.587-.665-.845-.55-1.312-.892-2.13-1.433-.946-.624-.333-.967.206-1.528.142-.146 2.607-2.392 2.657-2.603.006-.026.012-.124-.047-.176-.058-.052-.145-.034-.208-.02-.088.02-1.5 1.15-4.246 3.004-.403.277-.77.412-1.1.405-.36-.008-1.052-.204-1.566-.37-.633-.206-1.133-.315-1.09-.665.023-.182.272-.369.75-.562 2.926-1.272 4.876-2.112 5.85-2.52 2.783-1.162 3.36-1.364 3.738-1.37.083-.002.268.02.388.118.102.083.13.195.14.282.012.095.016.3.002.502z"/></svg>;
const LinkedIn = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>;
const Mail = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const XSocial = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;

/* ---------------- DATA ---------------- */
const stats = [
  { label: "Community Reach", value: 50, suffix: "K+" },
  { label: "Capital Influenced", value: 12, suffix: "M+" },
  { label: "Web3 Partners", value: 15, suffix: "+" },
  { label: "Retention", value: 85, suffix: "%" },
];

const ecosystems = ["ETHEREUM", "SOLANA", "BASE", "POLYGON", "AVALANCHE", "OPTIMISM", "ARBITRUM", "MONAD", "BERACHAIN"];

const projects = [
  { title: "Community Lead", company: "DEVINVEST", description: "Built builder-first positioning and long-term trust.", link: "https://www.devinvest.xyz" },
  { title: "Growth Builder", company: "$TFNY", description: "Drove narrative clarity and high-conversion growth.", link: "https://tfny.meme" },
  { title: "Marketing Strategist", company: "Litecoin", description: "Executed credibility-first Reddit organic campaigns.", link: "https://www.litvm.com/" },
];

const processSteps = [
  { title: "Audit", desc: "Deep dive into metrics and market positioning." },
  { title: "Narrative", desc: "Crafting a brand voice that commands attention." },
  { title: "Retention", desc: "Systems that turn visitors into long-term holders." },
  { title: "Execution", desc: "Aggressive marketing across X, TG, and Reddit." }
];

const socialContacts = [
  { name: "Telegram", icon: <Telegram />, link: "https://t.me/godfather_web3x", color: "hover:text-sky-400" },
  { name: "Discord", icon: <Discord />, link: "https://discord.gg/Z9HwNeH4", color: "hover:text-indigo-400" },
  { name: "X", icon: <XSocial />, link: "https://x.com/godfather_web3", color: "hover:text-white" },
  { name: "LinkedIn", icon: <LinkedIn />, link: "https://www.linkedin.com/in/dominion-charles-147284355", color: "hover:text-blue-500" },
  { name: "Email", icon: <Mail />, link: "mailto:godfatherarmyy@email.com", color: "hover:text-red-500" },
];

/* ---------------- COMPONENTS ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
  }, [open]);

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'process', href: '#process' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[110]">
        <div className="flex flex-col">
          <span className="text-white font-black text-xl tracking-tighter italic uppercase leading-none">GODFATHER</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-red-600 font-black">Web3 Growth Strategist</span>
        </div>
        
        <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-bold">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-neutral-400 hover:text-red-500 transition-colors">{item.name}</a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <XIcon /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[105] md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setOpen(false)}
                  className="text-5xl font-black italic uppercase tracking-tighter text-white hover:text-red-600 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const StatCounter = ({ value, label, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0; const duration = 2000; let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 md:p-10 border-b md:border-b-0 md:border-r border-white/5 last:border-0 group">
      <div className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-2 group-hover:text-red-600 transition-colors">{count}{suffix}</div>
      <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold">{label}</div>
    </div>
  );
};

export default function App() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden font-sans selection:bg-red-600 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03]" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      <Navbar />
      
      <main className="relative z-10">
        
        {/* HERO */}
        <section id="about" className="min-h-screen flex items-center px-6 pt-24 pb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 blur-[80px] md:blur-[140px] rounded-full" />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="text-red-600 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6">Web3 Marketer</div>
              <h1 className="text-5xl md:text-8xl font-black italic leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8">
                Make Offers <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 text-6xl md:text-8xl">They Can't Resist</span>
              </h1>
              <p className="text-neutral-400 text-base md:text-lg max-w-md leading-relaxed font-light mb-10 md:mb-12">I help Web3 projects turn attention into belief, and belief into communities that compound over time.</p>
              
              <motion.a 
                animate={{ boxShadow: ["0 0 10px rgba(220,38,38,0.2)", "0 0 30px rgba(220,38,38,0.5)", "0 0 10px rgba(220,38,38,0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                href="https://t.me/godfather_web3x" 
                className="inline-flex items-center gap-4 px-10 py-5 md:px-12 md:py-6 bg-red-600 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto justify-center"
              >
                Work With Me <ChevronRight />
              </motion.a>
            </motion.div>

            <div className="relative perspective-1000" onMouseMove={handleMouseMove}>
              <motion.div style={{ rotateX, rotateY }} className="relative mx-auto max-w-[400px] lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-600/20 to-transparent blur-xl rounded-lg" />
                <img src="brand.png" alt="Godfather" className="relative rounded-lg grayscale contrast-125 border border-white/10 shadow-2xl w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="py-8 md:py-12 bg-red-600/[0.03] border-y border-white/5 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-16 md:gap-24 px-6 md:px-12">
              {[...ecosystems, ...ecosystems].map((name, i) => (
                <span key={i} className="text-white/10 text-lg md:text-xl font-black tracking-[0.4em] uppercase italic">{name}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS */}
        <section className="bg-black border-b border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => <StatCounter key={i} {...stat} />)}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-20 md:py-32 px-6 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <FadeIn><h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-16 md:mb-24 text-center">How I <span className="text-red-600">Deploy</span></h3></FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group relative p-8 md:p-10 bg-black border border-white/5 hover:border-red-600/50 transition-all rounded-xl h-full">
                    <div className="text-lg md:text-xl font-black italic uppercase mb-4 md:mb-6 group-hover:text-red-500 transition-colors">{step.title}</div>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn><h3 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-12 md:mb-20 text-center">Proven <span className="text-red-600">Experience</span></h3></FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <motion.a href={p.link} target="_blank" whileHover={{ y: -10 }} className="p-8 md:p-10 bg-[#080808] border border-white/5 hover:border-red-600/40 transition-all block h-full">
                    <div className="text-red-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-10">{p.company}</div>
                    <h4 className="text-xl md:text-2xl font-black italic uppercase mb-4">{p.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-6 md:mb-10 font-light">{p.description}</p>
                  </motion.a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 md:py-48 text-center relative px-6 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-red-600/10 blur-[100px] md:blur-[180px] opacity-40" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter mb-10 md:mb-12 leading-[0.9]">
                Let’s Build <br/><span className="text-red-600">Something Real</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.a 
                animate={{ boxShadow: ["0 0 10px rgba(255,255,255,0.05)", "0 0 30px rgba(255,255,255,0.2)", "0 0 10px rgba(255,255,255,0.05)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                href="https://t.me/godfather_web3x" 
                className="inline-block px-10 py-5 md:px-14 md:py-7 bg-white text-black font-black uppercase tracking-widest text-sm md:text-lg hover:bg-red-600 hover:text-white transition-all mb-16 md:mb-20 shadow-2xl w-full md:w-auto"
              >
                Initialize Directive
              </motion.a>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {socialContacts.map((social, i) => (
                <FadeIn key={i} delay={0.3 + (i * 0.1)}>
                  <motion.a
                    href={social.link}
                    target="_blank"
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className={`flex flex-col items-center gap-3 md:gap-4 p-5 md:p-6 border border-white/5 bg-white/[0.02] rounded-xl md:rounded-2xl transition-all ${social.color}`}
                  >
                    {social.icon}
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-neutral-500">{social.name}</span>
                  </motion.a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 md:py-16 border-t border-white/5 text-center text-[8px] md:text-[10px] text-neutral-600 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] px-6">
          © {new Date().getFullYear()} GODFATHER — WEB3 GROWTH STRATEGIST
        </footer>
      </main>
    </div>
  );
}