import "./MySkills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiFigma, SiAdobephotoshop } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { IconType } from "react-icons"; // Ajout pour typer les icônes

type Skill = {
  icon: IconType;
  title: string;
  description: string;
  iconColor: string;
};

function MySkills() {
  const [currentTab, setCurrentTab] = useState<"dev" | "graphic">("dev");

  const devSkills: Skill[] = [
    {
      icon: FaHtml5,
      title: "HTML",
      description:
        "Langage de balisage standard pour structurer le contenu web, créant la fondation sémantique des pages avec des éléments comme les sections, liens et formulaires.",
      iconColor: "#E34F26",
    },
    {
      icon: FaCss3Alt,
      title: "CSS",
      description:
        "Langage pour styliser et mettre en page les éléments HTML, permettant des designs responsives, animations et effets visuels pour une expérience utilisateur optimale.",
      iconColor: "#1572B6",
    },
    {
      icon: FaJsSquare,
      title: "JavaScript",
      description:
        "Langage de programmation dynamique pour ajouter de l'interactivité aux sites web, manipulant le DOM, gérant les événements et intégrant des API pour des applications riches.",
      iconColor: "#F7DF1E",
    },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      description:
        "Framework CSS utility-first pour construire des designs personnalisés rapidement, avec des classes prêtes à l'emploi pour une mise en page responsive et cohérente.",
      iconColor: "#38BDF8",
    },
    {
      icon: FaReact,
      title: "React JS",
      description:
        "Bibliothèque JavaScript pour créer des interfaces utilisateur composables, utilisant des composants réutilisables et un état virtuel pour des apps performantes et scalables.",
      iconColor: "#61DAFB",
    },
  ];

  const graphicSkills: Skill[] = [
    {
      icon: SiCanva,
      title: "Canva",
      description:
        "Outil en ligne intuitif pour créer des graphiques, affiches et visuels marketing sans compétences avancées, avec des templates prêts à l'emploi et une édition drag-and-drop.",
      iconColor: "#00C4CC",
    },
    {
      icon: SiFigma,
      title: "Figma",
      description:
        "Outil collaboratif de design vectoriel pour UI/UX, permettant le prototypage interactif, la conception d'interfaces et le travail en équipe en temps réel sur le cloud.",
      iconColor: "#F24E1E",
    },
    {
      icon: SiAdobephotoshop,
      title: "Photoshop",
      description:
        "Logiciel professionnel d'édition raster pour manipuler des images, retoucher des photos, créer des compositions et préparer des assets pour le web et l'impression.",
      iconColor: "#31A8FF",
    },
  ];

  const currentSkills = currentTab === "dev" ? devSkills : graphicSkills;
  const currentTitle =
    currentTab === "dev" ? "development skills" : "graphic design skills";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-9"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-500">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="text-purple-500">my</span> {currentTitle}
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                className="text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center h-64 transition-all duration-300 skill-group"
                whileHover="hover"
              >
                <motion.div
                  className="mb-4 p-3 bg-white/20 rounded-full"
                  whileHover="hover"
                >
                  <IconComponent color={skill.iconColor} className="w-8 h-8" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mb-4 text-gray-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p
                  className="text-sm leading-relaxed opacity-90 text-gray-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center items-center space-x-4 mb-8 mt-8">
          <button
            onClick={handleLeftClick}
            disabled={currentTab === "dev"}
            className={`p-2 rounded-full transition-all ${
              currentTab === "dev"
                ? "opacity-50 cursor-not-allowed bg-gray-400"
                : "bg-white/20 hover:bg-white/30 text-white"
            }`}
            aria-label="Compétences précédentes (Développement)"
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
            aria-label="Compétences suivantes (Graphisme)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
