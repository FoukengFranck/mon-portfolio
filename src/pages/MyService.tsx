import {
  Code,
  Database,
  ShoppingCart,
  Eye,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion"; // Installation : npm install framer-motion

function MyService() {
  const services = [
    {
      icon: Code,
      title: "Développement Front-End",
      description:
        "Création d'interfaces web modernes et responsives, fully responsive sur tous les appareils. Utilisation de HTML, CSS, JavaScript, React pour une expérience utilisateur fluide et intuitive.",
      tech: "HTML | CSS | JavaScript | React | TailwindCSS",
    },
    {
      icon: Database,
      title: "Gestion de Base de Données",
      description:
        "Conception et optimisation de bases de données robustes pour stocker et gérer efficacement les données. Intégration avec back-end pour une scalabilité optimale.",
      tech: "SQL | Node.js | Vue.js",
    },
    {
      icon: ShoppingCart,
      title: "Développement E-commerce",
      description:
        "Plateformes e-commerce complètes, scalables et sécurisées pour vendre en ligne. Intégration de paiements, gestion des stocks et optimisation SEO.",
      tech: "React | Stripe | WooCommerce | Shopify",
    },
    {
      icon: Eye,
      title: "Conception UI/UX",
      description:
        "Design d'interfaces utilisateur intuitives et attractives, centrées sur l'expérience utilisateur. Prototypage et tests pour une navigation fluide.",
      tech: "Figma",
    },
    {
      icon: Palette,
      title: "Design Graphique Personnalisé",
      description:
        "Création d'identités visuelles complètes : logos, bannières, illustrations. Adaptation à vos besoins pour une cohérence graphique parfaite.",
      tech: "Adobe Photoshop | Canvas",
    },
  ];

  // Variants pour l'animation staggered de la grille
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre chaque enfant (0.2s)
        delayChildren: 0.3, // Délai initial pour la grille
      },
    },
  };




  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl min-h-screen flex items-center justify-center flex-col">
      {/* Titre principal avec fade-in */}
      <motion.div
        className="text-center mb-12 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          My <span className="text-purple-500">Services</span>
        </h1>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Grille des services avec stagger */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={index}
              className="bg-purple-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full"
              whileHover="hover"
            >
              <motion.div
                className="mb-4 p-3 bg-white/10 rounded-full"
                whileHover="hover"
              >
                <IconComponent className="w-8 h-8 text-white" />
              </motion.div>
              <div className="p-4 rounded-lg flex flex-col flex-1">
                <motion.h3
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.description}
                </motion.p>
                <motion.p
                  className="text-xs text-purple-200 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.tech}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default MyService;