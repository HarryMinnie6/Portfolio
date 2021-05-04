import AboutPage from "./AboutPage/AboutPage";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import NavBar from "./NavBar/NavBar";
import SkillsPage from "./SkillsPage/SkillsPage";
import ProjectsPage from "./Projects/ProjectsPage";
import WorkingOnPage from "./Projects/WorkingOnPage";
import Footer from "./Footer/Footer";
import ContactPage from "./ContactPage/ContactPage";

function App() {
  return (
    <div className="site-wrapper">
      <NavBar />
      <LandingPage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
