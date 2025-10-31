import { FileText } from "lucide-react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8 md:mb-6 lg:px-16 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-16 w-full max-w-6xl">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            Hi, I'm <span className="text-[#A855F7]">...</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-white mb-4 sm:mb-6 leading-tight">
            Foukeng Kemayou
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#A855F7] mb-6">
            Développeur Full Stack & Graphiste Designer
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-prose mx-auto lg:mx-0">
            Je crée des applications web qui allient performance technique et
            design soigné. À la fois développeur full stack et graphiste, je
            conçois des solutions numériques complètes — du back-end robuste au
            front-end intuitif, en passant par l’identité visuelle, l’expérience
            utilisateur et l’interface. Ma force ? Comprendre à la fois le
            langage du code et celui de la forme. Cela me permet de livrer des
            produits fonctionnels, élégants, et centrés sur l’utilisateur — sans
            compromis entre esthétique et efficacité. Parce que le meilleur
            numérique naît là où la logique rencontre la créativité.
          </p>

          <motion.a
            href="/cv Foukeng Kemayou.pdf"
            download="CV_Foukeng_Kemayou.pdf"
            className="flex items-center justify-center gap-1.5 cursor-pointer bg-[#8c49ca] hover:bg-[#A855F7] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto mx-auto lg:mx-0"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
          </motion.a>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="/profil.png"
            alt="Ton portrait"
            className="w-full max-w-xs h-48 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover grayscale opacity-100 mx-auto lg:mx-0" // Grayscale pour matcher l'effet sombre
          />

          <div className="flex flex-col gap-4 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-custom-purple transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/FoukengFranck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-custom-purple transition-colors"
            >
              <Github />
            </a>
            {/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-custom-purple transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
