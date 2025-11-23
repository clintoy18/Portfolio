// App.tsx
import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";

// Lazy load heavy sections
const TechStack = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-32">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content — Compact, Grok-style max-width */}
      <main className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* Above the fold — eager load */}
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <TechStack />
        </Suspense>
        {/* Below the fold — lazy + compact */}
    
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

         {/* <AboutMe /> */}
        <Contact />
      </main>

      {/* Footer — full width but content stays compact */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <Footer />
      </div>
    </div>
  );
};

export default App;
