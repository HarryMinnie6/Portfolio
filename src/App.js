import AboutPage from "./AboutPage/AboutPage";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import NavBar from "./NavBar/NavBar";
import SkillsPage from "./SkillsPage/SkillsPage";
import ProjectsPage from "./Projects/ProjectsPage";
import WorkingOnPage from "./Projects/WorkingOnPage";

function App() {
  return (
    <div className="site-wrapper">
      <NavBar />
      <LandingPage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <WorkingOnPage />
    </div>
  );
}

export default App;
