//les Composants
import NavBar from "./components/NavBar";

//les pages
import Home from "./pages/Home.tsx";
import MyProject from "./pages/MyProject.tsx";
import MyService from "./pages/MyService.tsx";
import MySkills from "./pages/MySkills.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4 sm:p-5 md:px-[15%]">
        <NavBar />
      </div>

      {/* Contenu principal : on ajoute un padding-top pour éviter que le contenu soit caché sous la navbar */}
      <main className="px-4 sm:px-6 md:px-8 pb-8 sm:pb-12">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-8 sm:py-12"
        >
          <Home />
        </section>
        <section
          id="project"
          className="min-h-screen flex items-center justify-center py-8 sm:py-12"
        >
          <MyProject />
        </section>
        <section
          id="service"
          className="min-h-screen flex items-center justify-center py-8 sm:py-12"
        >
          <MyService />
        </section>
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center py-8 sm:py-12"
        >
          <MySkills />
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-8 sm:py-12"
        >
          <About />
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-8 sm:py-12"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
