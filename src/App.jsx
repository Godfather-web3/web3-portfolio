import { motion } from "framer-motion";

// 🧱 PROJECT LIST — Replace with your real ones later
const projects = [
  {
    title: "Community & Growth Lead — DEVINVEST",
    description:
      " Led community development and growth strategy for DEVINVEST from june(2025) till present, a Web3 platform empowering real developers to launch ideas, form teams, and access early-stage funding. Focused on builder-first culture, transparent engagement, and long-term ecosystem growth through authentic community initiatives and Web3-native marketing.",
    link: "https://www.devinvest.xyz",
  },
  {
    title: " Marketing & Community Builder – $TFNY Project",
    description:
      "I lead marketing strategy and community engagement for $TFNY, focusing on growing brand awareness, building an active investor community, and strengthening project visibility across X (Twitter), Telegram, and other Web3 platforms. My work includes content creation, campaign coordination, and fostering long-term community trust through transparent communication and consistent engagement.",
    link: "https://tfny.meme",
  },
  {
    title: "Reddit Marketing Strategist — Litecoin",
    description:
      "Planned and executed targeted Reddit marketing campaigns to boost Litecoin’s community engagement and visibility. Focused on organic growth through content strategy, community discussions, and trend-based posts that strengthened Litecoin’s presence among crypto enthusiasts and retail investors.",
    link: "https://www.litvm.com/",
  },
  {
    title: "X (Twitter) Marketing & Community Strategist — Skitten (SKITTEN)",
    description:
      "Led social growth and engagement strategies for Skitten, a meme token on Base focused on saving 10,000 kittens by 2027. Developed high-performing X (Twitter) content, coordinated community-driven campaigns, and amplified brand awareness through creative meme marketing, merch promotions, and NFT activations.",
    link: "https://t.me/Official_Skitten",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-cinzel overflow-x-hidden scroll-smooth">
      {/* Navbar */}
     <nav className="w-full flex items-center justify-between py-6 px-10 bg-black border-b border-neutral-800">
  {/* Left brand block */}
  <div className="flex flex-col leading-none">
    <span className="text-2xl tracking-wider font-semibold text-white">
      GODFATHER
    </span>

    <span className="text-xs text-neutral-400 tracking-wide mt-1">
      Web3 Growth Strategist • Community Builder • Storyteller
    </span>
  </div>

  {/* Right navigation links */}
  <div className="flex items-center space-x-8 text-sm uppercase tracking-widest">
    <a href="#about" className="hover:text-red-400 transition">About</a>
    <a href="#projects" className="hover:text-red-400 transition">Projects</a>
    <a href="#contact" className="hover:text-red-400 transition">Contact</a>
  </div>
</nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 mt-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Make Offers <span className="text-red-600">They Can’t Refuse</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            I help Web3 brands grow through storytelling, content, and strategy
            that captivate audiences and convert loyalty.
          </p>
          
    {/* Work With Me Button */}
    <motion.a
  href="https://t.me/GODFATHER_ARMYY"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, backgroundColor: "#B22222" }}
  whileTap={{ scale: 0.95 }}
  className="mt-8 inline-block px-8 py-3 bg-gray-900 text-white border border-red-700 rounded-full hover:bg-red-700 transition"
>
  Work With Me
</motion.a>
    </motion.div>
  </section>


      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-24 bg-black border-t border-gray-900"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm Godfather, a Web3 community and growth specialist passionate about connecting people to
            decentralized brands. From NFT drops to DeFi campaigns, I craft
            strategies that build trust, authority, and engagement. My mission:
            to turn complex blockchain projects into clear, compelling
            narratives.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I’ve contributed to projects like DEVINVEST, Litecoin, and several meme and utility driven ecosystems leading initiatives that combine transparency, education, and innovation. My focus is simple: connect people, spark movement, and turn ideas into lasting impact in Web3.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-8 py-24 border-t border-gray-900"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-red-700 transition text-left"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <span className="text-red-600 text-sm font-medium hover:underline">
                  View Project →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
<section
  id="contact"
  className="py-24 bg-black text-center border-t border-neutral-800"
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-6 tracking-wide"
  >
    Let’s Connect
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    className="text-neutral-400 max-w-2xl mx-auto mb-12"
  >
    Whether you're building a Web3 project, scaling a community, or crafting a
    brand story that lasts. I’m here to make offers they can’t refuse.
  </motion.p>

  {/* ICONS */}
  <div className="flex justify-center space-x-8 mt-8">

    {/* TELEGRAM */}
    <motion.a
      href="https://t.me/GODFATHER_ARMYY"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 3 }}
      className="text-neutral-300 hover:text-red-600 transition"
    >
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.036 15.08l-.396 5.574c.567 0 .811-.244 1.105-.537l2.652-2.53 5.506 4.03c1.01.556 1.723.263 1.989-.936l3.603-16.89.001-.002c.328-1.53-.552-2.127-1.545-1.754L1.672 10.07c-1.49.578-1.472 1.407-.27 1.787l5.612 1.75L18.745 6.29c.552-.364 1.056-.162.642.202"/>
      </svg>
    </motion.a>

    {/* X (TWITTER) */}
    <motion.a
      href="https://x.com/godfather_dev"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: -3 }}
      className="text-neutral-300 hover:text-red-600 transition"
    >
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2H21l-6.659 7.63L22 22h-7.03L10.48 14.46 5.27 22H2.5l7.308-8.38L2 2h7.12l4.322 6.35L18.244 2z" />
      </svg>
    </motion.a>

    {/* DISCORD */}
    <motion.a
      href="https://discord.com/users/godfather_army"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="text-neutral-300 hover:text-red-600 transition"
    >
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.45 0 12.42 12.42 0 00-.617-1.25.067.067 0 00-.073-.035A19.736 19.736 0 003.677 4.37a.064.064 0 00-.03.025C.533 9.046-.32 13.58.1 18.057a.078.078 0 00.028.05 19.9 19.9 0 005.993 3.03.07.07 0 00.076-.025c.462-.63.873-1.295 1.226-1.993a.067.067 0 00-.038-.093 13.107 13.107 0 01-1.872-.878.067.067 0 01-.007-.111c.126-.094.253-.19.373-.287a.067.067 0 01.07-.01c3.907 1.793 8.13 1.793 12.002 0a.067.067 0 01.073.009c.12.098.247.194.374.288a.067.067 0 01-.006.111c-.603.35-1.228.642-1.873.877a.067.067 0 00-.037.094c.36.697.772 1.361 1.226 1.992a.067.067 0 00.075.025 19.873 19.873 0 005.995-3.03.067.067 0 00.028-.05c.5-5.177-.838-9.674-3.517-13.662a.055.055 0 00-.03-.025zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.336.955-2.42 2.157-2.42 1.21 0 2.175 1.093 2.157 2.42 0 1.335-.955 2.42-2.157 2.42zm7.974 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.336.955-2.42 2.157-2.42 1.21 0 2.175 1.093 2.157 2.42 0 1.335-.947 2.42-2.157 2.42z"/>
      </svg>
    </motion.a>

    {/* EMAIL */}
    <motion.a
      href="mailto:godfatherarmyy@gmail.com"
      whileHover={{ scale: 1.2 }}
      className="text-neutral-300 hover:text-red-600 transition"
    >
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.065L.015 4.5h23.97L12 13.065zM12 15l12-9v13.5H0V6l12 9z"/>
      </svg>
    </motion.a>

    {/* LINKEDIN */}
    <motion.a
      href="https://www.linkedin.com/in/dominion-charles-147284355"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="text-neutral-300 hover:text-red-600 transition"
    >
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.12 1 2.5 1s2.48 1 2.48 2.5zM.2 8.3h4.64V24H.2V8.3zM8.98 8.3h4.45v2.13h.06c.62-1.18 2.14-2.43 4.4-2.43 4.7 0 5.57 3.1 5.57 7.12V24h-4.64v-7.79c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.13V24H8.98V8.3z"/>
      </svg>
    </motion.a>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-black border-t border-neutral-900 py-6 mt-24">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm">

    <p className="tracking-wide">
      © {new Date().getFullYear()} GODFATHER • Web3 Strategy & Storytelling
    </p>

    <p className="mt-4 md:mt-0">
      Built With Honor • No Offers Refused
    </p>

  </div>
</footer>
    </div>
  );
}

export default App;