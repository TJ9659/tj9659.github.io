import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import Projects from "./pages/ProjectPage";
import Footer from "./components/Footer";
import PageTransition from "./components/ui/PageTransitions";
import Education from "./pages/EducationPage";
import Experience from "./pages/ExperiencePage";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-16 pb-16">
        <Header />
        <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-16 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition key="home">
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition key="projects">
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition key="experience">
                  <Experience />
                </PageTransition>
              }
            />
            <Route
              path="/education"
              element={
                <PageTransition key="education">
                  <Education />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition key="contact">
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
