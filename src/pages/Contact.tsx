import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_8ka6saf", // 🔹 Ton Service ID
        "template_fb70j96", // 🔹 Ton Template ID
        form.current,
        "Afq8QfNa7fY9fhiY9" // 🔹 Ta Public Key
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 4000); // Efface le message après 4s
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-purple-500">touch</span>
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full p-4 border border-purple-500 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            variants={formVariants}
          />
          <motion.input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full p-4 border border-purple-500 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            variants={formVariants}
          />
          <motion.textarea
            placeholder="Write your message"
            rows={5}
            name="message"
            required
            className="w-full p-4 border border-purple-500 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
            variants={formVariants}
          />

          <motion.button
            type="submit"
            disabled={status === "sending"}
            className={`cursor-pointer w-full ${
              status === "sending"
                ? "bg-purple-400"
                : "bg-purple-600 hover:bg-purple-700"
            } text-white p-4 rounded-lg font-semibold transition-colors`}
            variants={buttonVariants}
            whileHover="hover"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* ✅ Feedback visuel */}
        <div className="text-center h-6">
          {status === "success" && (
            <motion.p
              className="text-green-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message envoyé avec succès !
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Une erreur est survenue, réessaie plus tard.
            </motion.p>
          )}
        </div>

        <footer className="text-center text-gray-400 mt-10">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/"
              className="text-2xl hover:text-purple-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FoukengFranck"
              className="text-2xl hover:text-purple-500 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Foukeng Kemayou | All Rights
            Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
