import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bonjour";
    else if (hour < 19) return "Bonne après-midi";
    else return "Bonsoir";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-500">Me</span>
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex-shrink-0" variants={itemVariants}>
            <img
              src="/profil.png"
              alt="Foukeng Kemayou"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-purple-500/30"
            />
          </motion.div>

          <motion.div className="flex-1 max-w-lg" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {getGreeting()}, je suis{" "}
              <span className="text-purple-500">Foukeng Kemayou</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Développeur full-stack et graphiste designer passionné avec 2 ans
              d'expérience dans la création de sites web modernes et
              fonctionnels. Je me spécialise dans le développement front-end,
              les designs responsives, et les applications interactives, en
              m'assurant que chaque projet soit à la fois esthétique et
              performant.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Mon objectif est de créer des expériences utilisateur
              exceptionnelles en utilisant les dernières tendances et
              technologies de l'industrie. Que vous souhaitiez développer une
              nouvelle marque web, améliorer un site existant ou lancer un
              projet innovant, je suis là pour collaborer et transformer vos
              idées en réalité.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Si vous avez des questions ou souhaitez discuter d'un projet,
              n'hésitez pas à me contacter. J'adore travailler avec des clients
              passionnés pour donner vie à leurs visions.
            </p>
            <motion.a
              href="https://wa.me/qr/YJ4HQDGY3W63L1"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Me Contacter <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
