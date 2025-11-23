// components/Projects.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  Recycle,
  Calendar,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  coverImage: string;
  gallery?: string[];
  impactStats?: { icon: any; label: string; value: string }[];
  fullDescription: string;
  features: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "aidvocate",
    title: "AidVocate",
    subtitle: "Cebu Calamity Response Platform",
    shortDesc:
      "Real-time disaster aid platform launched during the 2025 Cebu earthquake. Helped hundreds of families get food, water & shelter.",
    tech: ["React", "Node.js", "MongoDB", "OpenStreetMap", "AWS S3", "Vercel"],
    liveUrl: "https://aidvocate.vercel.app",
    githubUrl: "https://github.com/yourusername/aidvocate",
    coverImage:
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/aidvocate/cover.jpg",
    gallery: [
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/aidvocate/map-view.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/aidvocate/report-form.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/aidvocate/mobile-screenshot.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/aidvocate/admin-dashboard.jpg",
    ],
    impactStats: [
      { icon: MapPin, label: "Reports", value: "800+" },
      { icon: Users, label: "Families Helped", value: "400+" },
      { icon: CheckCircle, label: "Resolved", value: "89%" },
      { icon: Clock, label: "Avg Response", value: "<6 hrs" },
    ],
    fullDescription: `AidVocate — Giving Aid & Advocating for those in need.

Launched at 3:58 AM on October 2, 2025, right in the middle of the Cebu earthquake crisis.

We saw families posting on Facebook:  
"No food. No water. Relief hasn't reached us."

That was enough.

In under 24 hours, we built and deployed a full-stack real-time disaster response platform that:
• Lets anyone pin their exact location and needs
• Shows live reports on an interactive OpenStreetMap
• Enables responders to navigate and mark aid as delivered
• Stores all images & proof on AWS S3
• Runs fast and free using MongoDB Atlas + Vercel

No family left unseen. Every pin = hope delivered.

Built with the modern JAMstack + open-source tools so anyone, anywhere can fork and deploy it in their own community.`,
    features: [
      "Real-time GPS pinning (even on low-end phones)",
      "Report on behalf of others",
      "Interactive OpenStreetMap with clustering",
      "Secure image uploads via AWS S3",
      "Fully mobile responsive & PWA-ready",
    ],
    featured: true,
  },
  {
    id: "thriftit",
    title: "Thrift-It",
    subtitle: "Sustainable Fashion & Upcycling Platform",
    shortDesc:
      "Capstone project connecting users with upcyclers. Book appointments, chat in real-time, save clothes from landfills.",
    tech: ["Laravel", "Blade", "MySQL", "Tailwind", "Pusher"],
    liveUrl: "https://thrift-it.vercel.app",
    githubUrl: "https://github.com/yourusername/thrift-it",
    coverImage:
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/thriftit/cover.jpg",
    gallery: [
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/thriftit/home.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/thriftit/booking.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/thriftit/chat.jpg",
    ],
    impactStats: [
      { icon: Users, label: "Active Users", value: "120+" },
      { icon: Calendar, label: "Appointments", value: "85+" },
      { icon: Recycle, label: "Items Saved", value: "2k+" },
    ],
    fullDescription: `Thrift-It promotes sustainable fashion by connecting people who want to upcycle old clothes with skilled local artisans.

A full-featured platform with appointment booking, real-time chat, product listings, reviews, and admin analytics — all built with Laravel + Livewire.

Because style shouldn’t cost the planet.`,
    features: [
      "Role-based system (User / Upcycler / Admin)",
      "Real-time chat with Pusher",
      "Appointment booking & calendar",
      "Review & rating system",
      "Clean architecture & beautiful emails",
    ],
  },
  {
    id: "student-performance-tracker",
    title: "Student Performance Tracker",
    subtitle: "Full-Stack Student Monitoring & Feedback Platform",
    shortDesc:
      "Monitor student outcomes, collect feedback, and keep students, teachers, and admins aligned with real-time dashboards and PDF reports.",
    tech: [
      ".NET 9",
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind",
      "EF Core",
      "SQLite/SQL Server",
      "JWT",
      "Serilog",
      "TanStack Table",
    ],
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/yourusername/student-performance-tracker",
    coverImage:
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/cover.jpg",
    gallery: [
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/dashboard.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/student-grades.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/pdf-export.jpg",
    ],
    fullDescription: `Student Performance Tracker is a full-stack platform helping schools monitor student outcomes, collect feedback, and align administrators, teachers, and students. Built with a clean architecture backend (.NET 9 API) and a React + Vite dashboard. Features include RBAC, dashboards, course management, PDF exports, and logging.`,
    features: [
      "Role-based system (Student / Teacher / Admin)",
      "Student dashboard with grades & enrollment",
      "Teacher dashboard with courses & feedback management",
      "Admin dashboard with user management and course assignment",
      "PDF export for summaries and reports",
      "JWT authentication & structured logging with Serilog",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <section
        id="projects"
        className="py-24 bg-gradient-to-b from-gray-50/50 to-white"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-800">
              Projects That Matter
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              I build tools that solve real problems — from crisis response to
              sustainable living.
            </p>
          </motion.div>

          {/* Featured Hero: AidVocate */}
          {featuredProject && (
            <motion.div
              layoutId={featuredProject.id}
              onClick={() => setSelectedProject(featuredProject)}
              className="group cursor-pointer mb-24 overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-5 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-bold">
                      Featured • Real-World Impact
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {featuredProject.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {featuredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                    Click to see how we helped Cebu in 24 hours
                    <span className="animate-pulse">→</span>
                  </p>
                </div>
                <div className="relative h-96 lg:h-full min-h-96">
                  <img
                    src={featuredProject.coverImage}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-4xl font-bold">
                      Cebu Earthquake Response
                    </p>
                    <p className="text-xl opacity-90">October 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects — Minimal & Elegant */}
          {otherProjects.length > 0 && (
            <>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-gray-700">
                  More Projects
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layoutId={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h4 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
                        {project.title}
                      </h4>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-gray-500 font-medium mb-2">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 mb-4">
                        {project.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Shared Modal — unchanged, beautiful as ever */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
          >
            <motion.div
              layoutId={selectedProject.id}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-3xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/90 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-96">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h1 className="text-5xl md:text-7xl font-bold mb-2">
                    {selectedProject.title}
                  </h1>
                  <p className="text-2xl opacity-90">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-10 lg:p-16">
                <pre className="font-sans text-lg text-gray-700 whitespace-pre-wrap leading-relaxed mb-12">
                  {selectedProject.fullDescription}
                </pre>

                {selectedProject.impactStats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
                    {selectedProject.impactStats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                        <p className="text-4xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-8">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-4 mb-12">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {selectedProject.gallery && (
                  <>
                    <h3 className="text-3xl font-bold mb-8">Screenshots</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                      {selectedProject.gallery.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Screenshot ${i + 1}`}
                          className="rounded-xl object-cover w-full h-48 shadow-md hover:scale-105 transition"
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="flex flex-wrap gap-6">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-bold rounded-full hover:bg-gray-800 hover:text-white transition flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
