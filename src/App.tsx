// App.tsx
import React, { Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

// LAZY LOAD 
const Projects = React.lazy(() => import("./components/Projects"));
const LazyContact = React.lazy(() => import("./components/Contact"));
const LazyFooter = React.lazy(() => import("./components/Footer"));

const SectionLoader = () => (
  <div
    role="status"
    aria-label="Loading section content" // Use a more general label
    className="flex items-center justify-center py-16"
  >
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      // Defer the import until the browser is idle
      (window as any).requestIdleCallback(() => {
        import("./components/Projects");
      });
    } else {
      // Fallback
      setTimeout(() => {
        import("./components/Projects");
      }, 500); // 500ms delay
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <Hero />
        <Skills />

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LazyContact />
        </Suspense>
      </main>

      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <Suspense fallback={<SectionLoader />}>
          <LazyFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default App;