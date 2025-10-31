import "./MyProject.css";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function MyProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<"dev" | "graphic">("dev");

  const devProjects = [
    {
      title: "Dashboard de FCRV Bank",
      description:
        "Il s'agit d'une application web de gestion dans une banque car de FCRV Bank",
      image: "/bank.png",
      tech: ["HTML 5", "CSS 3", "JavaScript"],
      github: "https://github.com/FoukengFranck/FRCVBank.git",
      category: "Dashboard de Bank",
    },
    {
      title: "FKBF Store",
      description:
        "Il s'agit d'une plateforme e-commerce (En ce qui concerne les telephone de la marque Iphone) pour acheter des Télephone et Accesoires Iphone variés en ligne.",
      image: "/fkbfstore.png",
      tech: ["HTML 5", "CSS 3", "JS"],
      github: "https://github.com/FoukengFranck/fkbf-store.git",
      category: "E-commerce Platform",
    },
    {
      title: "Calculatrice Simple",
      description:
        "Realisation d'une calculatrice simple utilisant HTML et CSS pour la structure et le style et PHP pour effectuer le calcul.",
      image: "/calculatrice.png",
      tech: ["HTML", "CSS", "PHP"],
      github: "https://github.com/FoukengFranck/Calculatrice.git",
      category: "Simple Calculator",
    },
    {
      title: "Avatar Generator",
      description:
        "Application web qui permet de générer des avatars d'alpaca personnalisés en utilisant différentes options de personnalisation.",
      image: "/avatar.png",
      tech: ["HTML", "CSS", "JS"],
      github: "https://github.com/FoukengFranck/g-n-rateur-d-avatar.git",
      category: "YouTube Channel Site",
    },
    {
      title: "My Portfolio Website",
      description: "Site vitrine présentant mes projets et compétences.",
      image: "/portfolio.png",
      tech: ["React", "TailwindCSS"],
      github: "https://github.com/user/luxury-offers",
      category: "Portfolio",
    },
    {
      title: "MediLink - Système de Suivi Médical",
      description:
        "Application web pour la gestion et le suivi des dossiers médicaux des patients.",
      image: "/suiviemedicale.png",
      tech: ["HTML", "TailwindCSS", "JavaScript"],
      github: "https://github.com/FoukengFranck/medilink.git",
      category: "Medical Tracking System",
    },
  ];

  const graphicProjects = [
    {
      title: "Logo Design pour FCRV Bank",
      description:
        "Conception d'un logo moderne et épuré pour une banque, intégrant des éléments symbolisant la finance et la confiance.",
      image: "/logofcrv.jpg",
      tools: ["Photoshop", "Illustrator"],
      category: "Logo Design",
    },
    {
      title: "Affiche BURGER",
      description: "Affiche publicitaire dynamique pour un restaurant.",
      image: "/Flyers.png",
      tools: ["Photoshop"],
      category: "Promotional Poster",
    },
    {
      title: "Flyers Boutique Girly Vibes",
      description: "Création d’un flyer attrayant pour une boutique de mode.",
      image: "/GIRLY VIBES SHOP1.png",
      tools: ["Canva"],
      category: "Digital Illustration",
    },
    {
      title: "Carte de Visite",
      description: "Identité visuelle complète avec carte de visite.",
      image: "/carte de visite.png",
      tools: ["Photoshop", "Canva"],
      category: "Visual Identity",
    },
    {
      title: "Flyers Menu",
      description: "Menu professionnel et appétissant pour un restaurant.",
      image: "/MENU.jpg",
      tools: ["Photoshop"],
      category: "Infographic",
    },
  ];

  const currentProjects = currentTab === "dev" ? devProjects : graphicProjects;
  const currentTitle =
    currentTab === "dev" ? "development projects" : "graphic design projects";

  const handleLeftClick = () => {
    if (currentTab === "graphic") {
      setCurrentTab("dev");
    }
  };

  const handleRightClick = () => {
    if (currentTab === "dev") {
      setCurrentTab("graphic");
    }
  };

  const isGraphic = currentTab === "graphic";

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-9">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          My <span className="text-purple-500">Projects</span>
        </h1>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="text-center mb-10">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4">
          <span className="text-purple-500">my</span> {currentTitle}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white rounded-lg shadow-lg overflow-hidden relative"
          >
            <div className="image-container relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover block cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  if (isGraphic) {
                    setSelectedImage(project.image);
                  }
                }}
              />
              {!isGraphic && (
                <div className="overlay">
                  <p className="overlay-text">{project.description}</p>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              {isGraphic && (
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {(isGraphic ? project.tools : project.tech)?.map(
                  (tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-semibold text-sm">
                  {project.category}
                </span>
                {!isGraphic && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-opacity duration-300 animate-fadeIn">
            <div className="relative max-w-4xl w-full p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-400 transition"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Aperçu"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <button
          onClick={handleLeftClick}
          disabled={currentTab === "dev"}
          className={`p-2 rounded-full transition-all ${
            currentTab === "dev"
              ? "opacity-50 cursor-not-allowed bg-gray-400"
              : "bg-white/20 hover:bg-white/30 text-white"
          }`}
          aria-label="Projets précédents (Développement)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleRightClick}
          disabled={currentTab === "graphic"}
          className={`p-2 rounded-full transition-all ${
            currentTab === "graphic"
              ? "opacity-50 cursor-not-allowed bg-gray-400"
              : "bg-white/20 hover:bg-white/30 text-white"
          }`}
          aria-label="Projets suivants (Graphisme)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/FoukengFranck"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
        >
          View All
        </a>
      </div>
    </div>
  );
}

export default MyProject;
