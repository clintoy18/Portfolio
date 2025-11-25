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
      "Real-time disaster aid platform launched during the 2025 Cebu earthquake. Helped hundreds of families get food, water & shelter.",
    tech: ["React", "Node.js", "MongoDB", "OpenStreetMap", "AWS S3", "Vercel"],
    liveUrl: "https://cebu-calamity-response.vercel.app/",
    githubUrl: "#",
    coverImage:
      "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/557353345_3689327544696027_2813327237064096691_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEu0nqSedHdHXo2UCPnNDXVSwS3FsyLZyhLBLcWzItnKFjh3wiq_M6u7FLNq-R0iL3Uvy8hG_vUfQkDzoTXw_wU&_nc_ohc=CIiaF46gj8wQ7kNvwEuRMft&_nc_oc=Adl1eUyiDNf8CowWZFpIaCnFvWE9HDIGdS3Ko4_9O---19rvQb6hZcieAWv5hFi7h8A&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=gT3VrsubhfDeq_36wUUIHQ&oh=00_AfjdcOmOLuZBLQph7w_aEPyl_NyfYLhwGpU-8QlFiSWoBw&oe=6929A892",
    gallery: [
      "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/557034206_3688101421485306_8589708568887172690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHikREKPzsWsf5QYWPQskn1q-1R0O91W3Kr7VHQ73VbcqXnXYhc_y-tlyAoqKPDfZLy3jla9bi7rh5y4mT5_eGd&_nc_ohc=YqcdrSq5gjIQ7kNvwFHoENv&_nc_oc=Adla1DJtn8Upn2HPhPqSFZvcHg7VnDOK98BpdLEBl8YqU8Oe6Nb6kdXvkym7-YJ94eY&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=F3fQfLsZ3A39DDj11rGPeA&oh=00_AfhMvyWxyYuD_RGVPCaxVSPnt0bMzM9jrdAvSJhh5Vx3Ng&oe=6929BEEE",
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/556312920_3689079548054160_201533419871339728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF1Fknq-LxmY4Ckx8klbbMrNl4GWi-8icU2XgZaL7yJxenPyNKRBkg15NnZOkA2zKlo-fuz2J66jChwter1aULK&_nc_ohc=9x3mS_kh8MsQ7kNvwHxtkIF&_nc_oc=AdkCdI2NKfuMPvxP1hNBQtRLws6ChgFkzWhN0LIkDo0i5xRmHGFMrlRHkssFgEg_ev8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=F3fQfLsZ3A39DDj11rGPeA&oh=00_AfjPgjyH8HuN1y7IJkk_39TyoeSzItb6p0x-rB4rK1h9tQ&oe=6929B736",
      "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/557624587_853797553985425_5458163027310027796_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmfNHjkF6U7nJ9GKPL-7itrcm8MBodf7CtybwwGh1_sJV-BrrzRm_9nAyeYJkhJ6hiJsWrMjNa2DCY5O4LsL4b&_nc_ohc=_aYL_8WedwEQ7kNvwHSsyeQ&_nc_oc=Admmtz6HEjz3OWb6MvKO2YHVABL-QXDygIiiR8dfhCKpsRiJrr-ZIeXpCZ79aVfesJA&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=EpfgvOtdBGnfZ1EjIVdpSQ&oh=00_AfhRU7F1Yvwbg3a0-HGpElx4XA-6PIWd1pjfVeT5vjxWnQ&oe=6929AAA1",
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/558969170_3693836804245101_999296108504560358_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHZV9oIQTK7vEJZMRC_2N8QyTfmOHNN8evJN-Y4c03x62HC5zcKE5SuIp_CAHrSJHHb48aKQcY5IKMZEYS17-aX&_nc_ohc=paE2ntlpFiwQ7kNvwHQI0fP&_nc_oc=AdmD8zaaZVoXlRxgBwjD_GFVrAp5PTvBWZiTxD96r8MMOFUq8yTPt7QBsQncViGNgL4&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=G-t4b9A_BY7rI5YONoy7GA&oh=00_AfjExZqo97DatO0-VtHHJ9T9A2m6yCh9lWcHqs5dJozN8Q&oe=6929A1B4",
    ],
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
        title: "BAYANIHAN GOES DIGITAL: EVERY PIN SAVES A LIFE",
        url: "https://www.facebook.com/sunstarcebu/posts/bayanihan-goes-digital-every-pin-saves-a-lifea-group-of-students-from-the-univer/853538200678027/",
        outlet: "SunStar",
        thumbnail:
          "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/557623070_853536947344819_222818715669326065_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG4-rhav73GlNE98qeoCUI2qT2TfLxhmH6pPZN8vGGYfidSursr_qBgIQq1svTW2n9231dBUSnE8soqBB-c37Yt&_nc_ohc=l9llmb0uk2kQ7kNvwGF3Cee&_nc_oc=AdnsHpbQvaGhvbgizJLbC-8BwxjIZGNzjx0tGrJgQfIdCDLtteLO1mxON0l8HINVcx8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=f27J9x6toPGrYy46JzyHUw&oh=00_AfjKFeS2Ump3i033yGBoBg8nKSrA8h_Kt3K_qfGUxA8CAg&oe=6929ACA2",
      },
      {
        title:
          "Cebu students connect calamity victims to help with app, website",
        url: "https://www.gmanetwork.com/regionaltv/youngminds/110567/cebu-students-connect-calamity-victims-to-help-with-app-website/story/",
        outlet: "GMA REGIONAL TV",
        thumbnail:
          "https://images.gmanews.tv/regionaltv2023/content_images/article/RTV-Banner-Card---2025-10-04T230743_721_2025_10_04_23_09_59.png",
      },
      {
        title:
          "Website na kayang makahingi ng agarang relief aid, naimbento ng 3 estudyante sa Cebu",
        url: "https://ibctv13.com/website-na-kayang-makahingi-ng-agarang-relief-aid-naimbento-ng-3-estudyante-sa-cebu/",
        outlet: "IBCTV13",
        thumbnail:
          "https://ibctv13.com/wp-content/uploads/2025/10/AIDVOCATE.webp",
      },
    ],
    impactStats: [
      { icon: MapPin, label: "Reports", value: "2k+" },
      { icon: Users, label: "Families Helped", value: "100+" },
      { icon: CheckCircle, label: "Resolved", value: "90%" },
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

No family left unseen. Every pin = hope delivered.`,
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
    liveUrl: "https://thrift-it-marketplace.laravel.cloud",
    githubUrl: "https://github.com/yourusername/thrift-it",
    coverImage:
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/581039697_3727950757500372_2764432074123300700_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLqzz_0GUaqF8Idpj3y47iVhk6ILXSqyhWGTogtdKrKC_y8NOS-YSd2Ymih3vRRMT_45BxBVMDFuZngUhJoPgJ&_nc_ohc=t4yXJ8uD7fwQ7kNvwH1rrPj&_nc_oc=AdnldIKUiCBBFGZeg3zg2WCxzehSkTDnp8wKCDA8rBN50y6aOWbEJWm_AzxUf-qWUAI&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=F-BZHrAoVrcbRRkKiSY_Gg&oh=00_AfiJCH7DAUASBKpapzPZUokkRiyawyWp8Hszlj2kEiqh5A&oe=6929B1BF",
    gallery: [
      "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/580935203_3727952574166857_8583578493059796274_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEoc1Nn7JcThh8ce64ixEHqlsotA9bK5CeWyi0D1srkJ3BoXw3wztlMN6_WA97eKLCr8efUAXp0FoQtCHcdCBj-&_nc_ohc=8DiaQBCT91AQ7kNvwG0YdrM&_nc_oc=Adk423PuHv-iifNd7WG09ut6h-Ll_4G-I_P-nlM7SxZKIdeqDLk7N4kfL2uzqftaGNQ&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=JS7jqaawY1rWdSZuf5_abg&oh=00_AfgreiBKd7-IUeEHVSUaLXVnFjl_EkiBmOKurl3SaMucyA&oe=6929C006",
      "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/581933244_3727952327500215_6359554376474449493_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHcyjAeSXvW56soZvabuRXMRlRuMf0kC-dGVG4x_SQL564ZBMGrrkNquGY5Cr_31aXcKVz5In_mFpj_OTEdoaQq&_nc_ohc=5Y_lOaPiPA4Q7kNvwHTFQTk&_nc_oc=AdmUqYjA6IEnjXFiS73uJgwsfbIyA43zBMkDLDM3rOMFBURwo55IPGolhFFaMW_etvY&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=U74x5zSCrGZUMbiqBLUtpA&oh=00_AfgsSdODGXD7CgLyapwm668Gc4GIgJhr_7v3oAzjRkyuqQ&oe=6929950E",
      "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/579262597_3727952180833563_7157071138249456877_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE0IGbxIudOlIGinISgo1bgyfGvIufeJ_DJ8a8i594n8JDitrEM1lto583ezYAOMt62VKIYPWCFfyKgD-5F-ypY&_nc_ohc=0zuxqBhdJBMQ7kNvwHMkpwq&_nc_oc=AdlZR7LGXfz-z8mrvkKO2BEFGM6YVsbcTgn8QFDULmUciJ6MYzjJm1PpFsXbxuaXF7c&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=1EK3j4i-upLXbrfBeTMzWQ&oh=00_AfhEyhusp-XcK5mJJs13M-8B7Y2KLZ8YdZNL5Q6EZ02B6Q&oe=6929BAD9",
    ],
    impactStats: [
      { icon: Users, label: "Active Users", value: "15+" },
      { icon: Calendar, label: "Appointments", value: "0+" },
      { icon: Recycle, label: "Items Saved", value: "0+" },
    ],
    fullDescription: `Thrift-It promotes sustainable fashion by connecting people who want to upcycle old clothes with skilled local artisans.

A full-featured platform with appointment booking, real-time chat, product listings, reviews, and admin analytics — all built with Laravel + Blade Pages.

Because style shouldn’t cost the planet.`,
    features: [
      "Role-based system (User / Upcycler / Admin)",
      "Real-time chat with Pusher",
      "Item Listings",
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
  {
    id: "UC-CSS Sit-In Monitoring System",
    title: "Sit-In Monitoring System",
    subtitle:
      "A school project using Vanilla PHP and JavaScript designed for the College of Computer Studies.",
    shortDesc:
      "It manages and monitors student sit-in sessions, offering features like room reservations, session tracking, and feedback management for both admins and students.",
    tech: ["PHP ", "JavaScript ", "MySQL ", "Tailwind", "GitHub"],
    liveUrl: "https://your-live-url.com",
    githubUrl:
      "https://github.com/clintoy18/CCS-Sitting-Monitoring-System---PHP",
    coverImage:
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/cover.jpg",
    gallery: [
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/dashboard.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/student-grades.jpg",
      "https://your-s3-bucket.s3.ap-southeast-1.amazonaws.com/spt/pdf-export.jpg",
    ],
    fullDescription:  `The UC-CSS Sit-In Monitoring System is a school project developed using Vanilla PHP, JavaScript, and MySQL for the College of Computer Studies. It streamlines the tracking and management of student sit-in sessions while providing dedicated tools for both administrators and students. Administrators can monitor sit-in activity, manage students, post announcements, and generate PDF reports, while students can reserve rooms, track their sit-in status, update their profiles, and submit feedback. The system aims to improve laboratory utilization, enhance student accountability, and provide a more organized workflow for CCS sit-in operations.`,
    features: [
      "Admin Dashboard with statistics, charts, and recent activity",
      "Student Management with search, view, and record control",
      "Sit-In Monitoring for ongoing and completed sessions",
      "Manual Sit-In functionality based on purpose and laboratory",
      "Room reservation and scheduling system for students",
      "Announcements module for posting and deleting updates",
      "PDF report generation for sit-in records",
      "Search functionality for students by name or ID",
      "Student feedback submission to administrators",
      "Student profile management with image uploads",
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
                    {featuredProject.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                    {featuredProject.tech.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{featuredProject.tech.length - 3}
                      </span>
                    )}
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
                    <p className="text-xl opacity-90">October 2025</p>
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
                {/* Articles Section */}
                {selectedProject.articles && (
                  <>
                    <h3 className="text-3xl font-bold mb-8">Media Features</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                      {selectedProject.articles.map((article) => (
                        <a
                          key={article.url}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-xl overflow-hidden bg-gray-50 border hover:shadow-xl transition"
                        >
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={article.thumbnail}
                              alt={article.title}
                              className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                              {article.outlet}
                            </p>
                          </div>

                          <div className="p-4">
                            <p className="text-gray-800 font-semibold line-clamp-2">
                              {article.title}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </>
                )}
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
