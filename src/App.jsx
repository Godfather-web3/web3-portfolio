import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Final: Dark Cinematic (B) — Full App.jsx
 * - Self-contained single-file React component
 * - Responsive Navbar with hamburger (mobile slide menu)
 * - Cinematic Godfather theme (deep blacks, subtle red accents)
 * - Projects populated from your provided array
 * - Contact icons wired to your links
 *
 * Paste this entire file into src/App.jsx (replace existing).
 * Then run `npm run dev` (or commit & push -> Vercel will redeploy).
 */

/* --------------------------- Projects data --------------------------- */
const projects = [
  {
    title: "Community & Growth Lead — DEVINVEST",
    description:
      "Led community development and growth strategy for DEVINVEST from June (2025) — present, a Web3 platform empowering developers to launch ideas, form teams, and access early-stage funding. Focused on builder-first culture, transparent engagement, and long-term ecosystem growth through authentic community initiatives and Web3-native marketing.",
    link: "https://www.devinvest.xyz",
  },
  {
    title: "Marketing & Community Builder – $TFNY Project",
    description:
      "Led marketing strategy and community engagement for $TFNY, focusing on brand awareness, active investor community building, and visibility across X, Telegram and Web3 channels. Delivered content, campaign coordination, and trust-building comms to grow retention and participation.",
    link: "https://tfny.meme",
  },
  {
    title: "Reddit Marketing Strategist — Litecoin",
    description:
      "Planned and executed targeted Reddit marketing campaigns to boost Litecoin’s community engagement and visibility. Focused on organic growth via content strategy, community discussions and trend-led posts that strengthened Litecoin’s presence among retail crypto audiences.",
    link: "https://www.litvm.com/",
  },
  {
    title:
      "X (Twitter) Marketing & Community Strategist — Skitten (SKITTEN)",
    description:
      "Led social growth and engagement for Skitten, a meme token on Base aiming to save 10,000 kittens by 2027. Built X-first content, community campaigns, merch promos and NFT activations to amplify awareness and drive token holder engagement.",
    link: "https://t.me/Official_Skitten",
  },
];

/* --------------------------- Icons (inline SVGs) --------------------------- */
const IconTelegram = ({ className = "" }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path fill="currentColor" d="M21.999 3.002a1 1 0 0 0-.898-.996C20.686 2 4.943 6.357 3.04 6.974c-.618.075-.99.85-.633 1.354l2.633 3.277 3.16-1.006 7.116-4.436c.39-.243.889.106.68.512l-5.23 8.115-1.742 3.144c-.18.324.252.63.503.372l3.647-3.39 3.317 2.44c.696.51 1.405-.085 1.162-.857L21.999 3.002z" />
  </svg>
);

const IconX = ({ className = "" }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 5.5c-.6.3-1.3.5-2 .6.7-.4 1.1-.9 1.3-1.6-.6.4-1.4.7-2.2.9C18.6 4.4 17.3 4 16 4c-2.6 0-4.5 2.2-4 4.7C7.7 8.5 5.1 6.6 3 3.9c-.9 1.6-.5 3 .1 3.9-.5 0-1-.1-1.4-.4 0 1.6 1.1 3.1 2.6 3.5-.5.1-1 .2-1.5.1.4 1.8 2.3 3.1 4.2 3.2-1.9 1.4-4.3 2-6.8 1.7C3.9 19.7 6.7 21 9.6 21c6.5 0 10.1-5.6 9.9-10.6.7-.5 1.3-1.2 1.8-2-.6.3-1.4.5-2.6.5z"/>
  </svg>
);

const IconDiscord = ({ className = "" }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.317 4.369A19.736 19.736 0 0016.43 2.86a.069.069 0 00-.073.035c-.212.375-.446.864-.61 1.25a18.27 18.27 0 00-5.45 0 12.417 12.417 0 00-.617-1.25.067.067 0 00-.073-.035A19.736 19.736 0 003.683 4.37a.064.064 0 00-.03.026C.533 9.046-.32 13.58.1 18.057a.078.078 0 00.028.05 19.873 19.873 0 005.993 3.03.07.07 0 00.076-.025c.462-.63.873-1.295 1.226-1.993a.067.067 0 00-.038-.093 13.11 13.11 0 01-1.872-.878.067.067 0 01-.007-.111c.126-.094.253-.19.373-.287a.067.067 0 01.07-.01c3.907 1.793 8.13 1.793 12.002 0a.067.067 0 01.073.009c.12.098.247.194.374.288a.067.067 0 01-.006.111c-.603.35-1.228.642-1.873.878a.067.067 0 00-.037.094c.36.697.772 1.361 1.226 1.992a.067.067 0 00.075.025 19.873 19.873 0 005.995-3.03.067.067 0 00.028-.05c.5-5.177-.838-9.674-3.517-13.662a.055.055 0 00-.03-.025zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.336.955-2.42 2.157-2.42 1.21 0 2.175 1.093 2.157 2.42 0 1.335-.955 2.42-2.157 2.42zm7.974 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.336.955-2.42 2.157-2.42 1.21 0 2.175 1.093 2.157 2.42 0 1.335-.947 2.42-2.157 2.42z"/>
  </svg>
);

const IconMail = ({ className = "" }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M2 6.5V18a2 2 0 002 2h16a2 2 0 002-2V6.5L12 12 2 6.5zM22 4H2a2 2 0 00-2 2v.7L12 12l12-5.3V6a2 2 0 00-2-2z"/>
  </svg>
);

const IconLinkedIn = ({ className = "" }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.12 1 2.5 1 4.98 2 4.98 3.5zM.2 8.3h4.64V24H.2V8.3zM8.98 8.3h4.45v2.13h.06c.62-1.18 2.14-2.43 4.4-2.43 4.7 0 5.57 3.1 5.57 7.12V24h-4.64v-7.79c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.13V24H8.98V8.3z"/>
  </svg>
);

/* --------------------------- Navbar (responsive) --------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-sm bg-black/70 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Left: Brand + Tagline */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-bold tracking-wider text-white">
                GODFATHER
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 tracking-wide mt-1 hidden sm:block">
              Web3 Growth Strategist • Community Builder • Storyteller
            </span>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest">
            <a href="#about" className="text-neutral-200 hover:text-red-500 transition">About</a>
            <a href="#projects" className="text-neutral-200 hover:text-red-500 transition">Projects</a>
            <a href="#contact" className="text-neutral-200 hover:text-red-500 transition">Contact</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-700"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {/* simple animated icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
              {open ? (
                <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.71L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z" />
              ) : (
                <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile sliding menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`md:hidden overflow-hidden border-t border-red-900/30`}
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#about" className="text-neutral-200 hover:text-red-500 transition">About</a>
            <a onClick={() => setOpen(false)} href="#projects" className="text-neutral-200 hover:text-red-500 transition">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-neutral-200 hover:text-red-500 transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

/* --------------------------- Main App --------------------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* subtle cinematic overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 400px at 10% 10%, rgba(70,0,0,0.08), transparent 8%), radial-gradient(800px 300px at 90% 85%, rgba(80,0,0,0.05), transparent 10%)",
        }}
      />

      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section id="hero" className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
            >
              <span className="block">Make Offers</span>
              <span className="block text-red-600">They Can’t Refuse</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed"
            >
              I help Web3 brands grow through storytelling, community activation,
              and growth strategy — building engaged ecosystems and converting attention into long-term value.
            </motion.p>

            <motion.a
              href="https://t.me/GODFATHER_ARMYY"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-block mt-8 px-8 py-3 bg-transparent border border-red-700 text-white rounded-full hover:bg-red-700 hover:border-red-700 transition"
            >
              Work With Me
            </motion.a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-14 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold mb-4"
            >
              About Me
            </motion.h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              I'm Godfather — a Web3 community & growth strategist focused on turning complex projects into clear narratives and active communities.
              I’ve led initiatives at DEVINVEST, supported token & NFT launches, and executed short-form campaigns that scale awareness and retention.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            >
              Selected Projects
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.a
                  href={p.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="block bg-[#070707] border border-neutral-800 rounded-xl p-5 shadow-md hover:shadow-lg transition flex flex-col h-full"
                >
                  <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                  <p className="text-neutral-400 text-sm flex-grow leading-relaxed">{p.description}</p>
                  <span className="mt-4 text-red-600 text-sm font-medium">View Project →</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              Let’s Connect
            </motion.h3>

            <p className="text-neutral-400 text-sm sm:text-base mb-6">
              Open to collaborations, strategy consultations, and full-funnel community builds. Reach me on any of the platforms below.
            </p>

            <div className="flex items-center justify-center gap-6">
              <motion.a whileHover={{ scale: 1.15 }} href="https://t.me/GODFATHER_ARMYY" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-red-600">
                <IconTelegram />
              </motion.a>

              <motion.a whileHover={{ scale: 1.15 }} href="https://x.com/godfather_dev" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-red-600">
                <IconX />
              </motion.a>

              <motion.a whileHover={{ scale: 1.15 }} href="https://discord.com/users/godfather_army" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-red-600">
                <IconDiscord />
              </motion.a>

              <motion.a whileHover={{ scale: 1.15 }} href="mailto:godfatherarmyy@gmail.com" className="text-neutral-300 hover:text-red-600">
                <IconMail />
              </motion.a>

              <motion.a whileHover={{ scale: 1.15 }} href="https://www.linkedin.com/in/dominion-charles-147284355" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-red-600">
                <IconLinkedIn />
              </motion.a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-900/70 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-neutral-500 text-sm">
            <div>© {new Date().getFullYear()} GODFATHER • Web3 Strategy & Storytelling</div>
            <div className="mt-2">Built with intent & Purpose.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}