// App.tsx
import React, { Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const Projects = React.lazy(() => import("./components/Projects"));
const LazyContact = React.lazy(() => import("./components/Contact"));
const LazyFooter = React.lazy(() => import("./components/Footer"));

const SectionLoader = () => (
  <div
    role="status"
    aria-label="Loading section content"
    className="flex items-center justify-center py-16"
  >
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-950" />
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const preloadProjects = () => import("./components/Projects");
    const idleCallback = window.requestIdleCallback;

    if (idleCallback) {
      idleCallback(() => {
        import("./components/Projects");
      });
    } else {
      setTimeout(preloadProjects, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(212,212,216,0.45),transparent_34%),linear-gradient(135deg,#fafafa_0%,#f4f4f5_38%,#e4e4e7_100%)] text-zinc-950 antialiased">
      <Navbar />

      <main>
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
