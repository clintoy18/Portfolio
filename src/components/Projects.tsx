import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Github,
  MapPin,
  Recycle,
  Users,
  X,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  coverImage?: string;
  gallery?: string[];
  impactStats?: { icon: LucideIcon; label: string; value: string }[];
  fullDescription: string;
  features: string[];
  featured?: boolean;
  articles?: {
    title: string;
    url: string;
    outlet: string;
    thumbnail: string;
  }[];
};

const projects: Project[] = [
  {
    id: "aidvocate",
    title: "AidVocate",
    subtitle: "Cebu Calamity Response App",
    shortDesc:
      "A real-time disaster aid platform built and launched during the 2025 Cebu earthquake to help families request food, water, shelter, and rescue support.",
    tech: ["React", "Node.js", "MongoDB", "OpenStreetMap", "AWS S3", "Vercel"],
    liveUrl: "https://cebu-calamity-response.vercel.app/",
    coverImage:
      "https://insiderph.com/uploads/articles/built-in-24-hours-uc-it-students-launch-cebu-earthquake-relief-app-2-1024x768.webp",
    articles: [
      {
        title:
          "Built in 24 hours: UC IT students launch Cebu earthquake relief app",
        url: "https://insiderph.com/built-in-24-hours-uc-it-students-launch-cebu-earthquake-relief-app",
        outlet: "Insider PH",
        thumbnail:
          "https://insiderph.com/uploads/articles/built-in-24-hours-uc-it-students-launch-cebu-earthquake-relief-app-2-1024x768.webp",
      },
      {
        title: "Bayanihan goes digital: Every pin saves a life",
        url: "https://www.facebook.com/sunstarcebu/posts/bayanihan-goes-digital-every-pin-saves-a-lifea-group-of-students-from-the-univer/853538200678027/",
        outlet: "SunStar",
        thumbnail:
          "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/557623070_853536947344819_222818715669326065_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG4-rhav73GlNE98qeoCUI2qT2TfLxhmH6pPZN8vGGYfidSursr_qBgIQq1svTW2n9231dBUSnE8soqBB-c37Yt&_nc_ohc=mSM2_MxygO0Q7kNvwHoT4qb&_nc_oc=Adnpoi6LTW2tgzmsNFcWYIwXFCAmjfMYnZxel3Iub45TTz8vphtzsf0ZQAFnl2msP40&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=6eOECYiC0a1dcdBXyFe2Nw&oh=00_AfqLRDLjdwXSm2wzRQUuHtccF-xtFbduwOog8QBeclGu-w&oe=6962CDA2",
      },
      {
        title: "Cebu students connect calamity victims to help with app",
        url: "https://www.gmanetwork.com/regionaltv/youngminds/110567/cebu-students-connect-calamity-victims-to-help-with-app-website/story/",
        outlet: "GMA Regional TV",
        thumbnail:
          "https://images.gmanews.tv/regionaltv2023/content_images/article/RTV-Banner-Card---2025-10-04T230743_721_2025_10_04_23_09_59.png",
      },
    ],
    impactStats: [
      { icon: MapPin, label: "Reports", value: "2k+" },
      { icon: Users, label: "Families helped", value: "100+" },
      { icon: CheckCircle, label: "Resolved", value: "90%" },
      { icon: Clock, label: "Avg response", value: "<6 hrs" },
    ],
    fullDescription:
      "AidVocate was built in under 24 hours after families in Cebu began asking for urgent help online. The platform lets people pin their location, explain their needs, upload proof, and give responders a live map of requests that can be marked as delivered.",
    features: [
      "Location-based reporting with OpenStreetMap",
      "Report on behalf of affected families",
      "Image uploads stored on AWS S3",
      "Responder workflow for delivery updates",
      "Mobile-first interface for low-bandwidth crisis use",
    ],
    featured: true,
  },
  {
    id: "thriftit",
    title: "Thrift-It",
    subtitle: "Sustainable Fashion & Upcycling Platform",
    shortDesc:
      "A capstone marketplace connecting users with upcyclers through appointments, listings, chat, reviews, and admin workflows.",
    tech: ["Laravel", "Blade", "MySQL", "Tailwind", "Pusher"],
    liveUrl: "https://thrift-it-marketplace.laravel.cloud",
    coverImage:
      "https://clint-portfolio-bucket.s3.ap-southeast-1.amazonaws.com/Screenshot+2025-11-12+234139.png",
    gallery: [
      "https://clint-portfolio-bucket.s3.ap-southeast-1.amazonaws.com/Screenshot+2026-01-06+192552.png",
      "https://clint-portfolio-bucket.s3.ap-southeast-1.amazonaws.com/Screenshot+2026-01-06+192455.png",
      "https://clint-portfolio-bucket.s3.ap-southeast-1.amazonaws.com/Screenshot+2026-01-06+192530.png",
    ],
    impactStats: [
      { icon: Users, label: "Active users", value: "15+" },
      { icon: Calendar, label: "Appointments", value: "0+" },
      { icon: Recycle, label: "Items saved", value: "0+" },
    ],
    fullDescription:
      "Thrift-It promotes sustainable fashion by helping people turn old clothing into new value through skilled local upcyclers. It includes booking, chat, product listings, reviews, and admin analytics.",
    features: [
      "Role-based user, upcycler, and admin flows",
      "Real-time chat with Pusher",
      "Appointment booking and calendar views",
      "Review and rating system",
      "Admin dashboards and email templates",
    ],
  },
  {
    id: "student-performance-tracker",
    title: "Student Performance Tracker",
    subtitle: "Student Monitoring & Feedback Platform",
    shortDesc:
      "A full-stack school dashboard for monitoring outcomes, collecting feedback, managing courses, and exporting reports.",
    tech: [".NET 9", "React 19", "TypeScript", "Tailwind", "EF Core", "JWT"],
    fullDescription:
      "Student Performance Tracker helps administrators, teachers, and students stay aligned through role-based dashboards, course management, feedback tools, PDF exports, and structured logging.",
    features: [
      "Role-based student, teacher, and admin dashboards",
      "Course and enrollment management",
      "Feedback collection workflows",
      "PDF export for summaries and reports",
      "JWT authentication and Serilog logging",
    ],
  },
  {
    id: "shift-workspace",
    title: "Shift Workspace",
    subtitle: "Coworking Booking & Operations Platform",
    shortDesc:
      "A workspace booking experience with landing pages, role-based dashboards, cashier seat selection, booking timers, expiration alerts, and printable receipts.",
    tech: ["React", "TypeScript", "Vite", "shadcn-ui", "Tailwind", "Vitest"],
    liveUrl: "https://shiftworkingspace.com",
    githubUrl: "https://github.com/clintoy18/shift-workspace-launch",
    fullDescription:
      "Shift Workspace is a coworking space product prototype built with React, TypeScript, shadcn-ui, and Tailwind. It includes a public marketing site plus protected customer, admin, and cashier areas. The cashier flow manages seat bookings, pricing, timers, expiring-seat notifications, confirmation modals, and receipt printing.",
    features: [
      "Role-based customer, admin, and cashier dashboards",
      "Protected routing with mocked authentication",
      "Interactive seat booking state and occupancy tracking",
      "Expiration alerts for seats nearing checkout",
      "Cashier confirmation flow and printable booking receipts",
      "Marketing landing page with pricing, FAQ, location, and lead capture sections",
    ],
  },
  {
    id: "sit-in-monitoring",
    title: "Sit-In Monitoring System",
    subtitle: "College Laboratory Session Management",
    shortDesc:
      "A PHP and MySQL system for room reservations, session tracking, announcements, feedback, and PDF reports.",
    tech: ["PHP", "JavaScript", "MySQL", "Tailwind"],
    githubUrl:
      "https://github.com/clintoy18/CCS-Sitting-Monitoring-System---PHP",
    fullDescription:
      "The Sit-In Monitoring System organizes student laboratory sessions for the College of Computer Studies. Administrators can manage students, monitor sessions, post announcements, and generate reports, while students can reserve rooms and submit feedback.",
    features: [
      "Admin dashboard with statistics and recent activity",
      "Student search, profile, and session records",
      "Room reservation and scheduling",
      "Announcement and feedback modules",
      "PDF report generation",
    ],
  },
];

const featuredProject = projects.find((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function projectLabel(project: Project) {
  const url = project.liveUrl ?? project.githubUrl;

  if (!url) {
    return project.tech.slice(0, 2).join(" / ");
  }

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.coverImage) {
    return (
      <img
        src={project.coverImage}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-end bg-[linear-gradient(135deg,#fafafa,#a1a1aa_48%,#18181b)] p-5">
      <div className="h-20 w-full rounded-md border border-white/30 bg-white/40 backdrop-blur-xl" />
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="px-6 pb-24 pt-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-zinc-300/70 pb-8 md:flex-row md:items-end">
            <div>
              <Badge>Selected work</Badge>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 md:text-5xl">
                Projects with proof.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-600">
              Real products, public outcomes, and systems built for practical
              use instead of portfolio decoration.
            </p>
          </div>

          {featuredProject && (
            <button
              type="button"
              onClick={() => setSelectedProject(featuredProject)}
              className="group mb-6 block w-full text-left"
            >
              <Card className="overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(24,24,27,0.16)]">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <Badge className="bg-zinc-950 text-white">
                      Featured impact
                    </Badge>
                    <h3 className="mt-8 text-4xl font-semibold text-zinc-950 md:text-6xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-zinc-600">
                      {featuredProject.shortDesc}
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {featuredProject.impactStats?.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-md border border-zinc-200 bg-zinc-50 p-3"
                        >
                          <stat.icon className="mb-3 h-4 w-4 text-zinc-500" />
                          <p className="text-xl font-semibold text-zinc-950">
                            {stat.value}
                          </p>
                          <p className="text-xs text-zinc-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">
                      Read case study <ArrowUpRight size={16} />
                    </p>
                  </div>
                  <div className="relative min-h-80 overflow-hidden">
                    <ProjectVisual project={featuredProject} />
                  </div>
                </div>
              </Card>
            </button>
          )}

          <Card className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-zinc-950">
                Recent Projects
              </h3>
              <a
                href="https://github.com/clintoy18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-950"
              >
                View All <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="grid border-t border-l border-zinc-100 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group min-h-32 border-r border-b border-zinc-100 bg-white/45 p-5 text-left transition hover:bg-zinc-50"
                >
                  <h4 className="text-lg font-semibold leading-6 text-zinc-950">
                    {project.title}
                  </h4>
                  <p className="mt-2 line-clamp-1 text-sm leading-6 text-zinc-700">
                    {project.subtitle}
                  </p>
                  <span className="mt-3 inline-flex max-w-full rounded-sm bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700">
                    <span className="truncate">{projectLabel(project)}</span>
                  </span>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 24, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-zinc-200 bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/90 text-zinc-900 shadow-lg transition hover:bg-zinc-100"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>

              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="min-h-80 overflow-hidden">
                  <ProjectVisual project={selectedProject} />
                </div>

                <div className="p-6 sm:p-10">
                  <Badge>{selectedProject.subtitle}</Badge>
                  <h2 className="mt-5 text-4xl font-semibold text-zinc-950">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-zinc-600">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    Key features
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-7 text-zinc-700"
                      >
                        <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-950" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {selectedProject.articles && (
                    <div className="mt-10">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        Media features
                      </h3>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {selectedProject.articles.map((article) => (
                          <a
                            key={article.url}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-zinc-200 p-4 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
                          >
                            <span className="block text-zinc-950">
                              {article.outlet}
                            </span>
                            <span className="mt-1 block leading-6">
                              {article.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.gallery && (
                    <div className="mt-10 grid grid-cols-3 gap-3">
                      {selectedProject.gallery.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          loading="lazy"
                          className="h-24 w-full rounded-md object-cover"
                        />
                      ))}
                    </div>
                  )}

                  <div className="mt-10 flex flex-wrap gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>
                          Live demo <ExternalLink size={16} />
                        </Button>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">
                          Source code <Github size={16} />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
