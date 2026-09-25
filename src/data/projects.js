// github: "#" ko apne asli repo link se replace kar dena.
// layout: "third" = 3 cards per row (col-lg-4), "half" = 2 cards per row (col-lg-6)

export const PROJECT_CATEGORIES = [
  {
    title: "Full-Stack Projects",
    layout: "third",
    projects: [
      {
        name: "File Tracking Management System",
        icon: "fa-solid fa-folder-open",
        description:
          "Django-based file management system where administrators manage departments and employees, while employees can upload, receive, forward and track files with complete status and history.",
        tech: ["Python", "Django", "SQLite", "Bootstrap"],
        github: "#",
      },
      {
        name: "Online Admission System",
        icon: "fa-solid fa-user-graduate",
        description:
          "Web-based admission platform where students can submit applications online. Administrators can review applications, verify details and manage the admission process.",
        tech: ["Python", "Django", "HTML", "Bootstrap"],
        github: "#",
      },
      {
        name: "Global Alumni Portal",
        icon: "fa-solid fa-users",
        description:
          "A web-based alumni platform that connects students and graduates through profiles, information sharing and a responsive user-friendly interface.",
        tech: ["Python", "Django", "HTML", "CSS"],
        github: "#",
      },
    ],
  },
  {
    title: "Frontend Projects",
    layout: "third",
    projects: [
      {
        name: "Personal Portfolio",
        icon: "fa-solid fa-globe",
        description:
          "Responsive personal portfolio website showcasing skills, projects, achievements and professional information.",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap","React","vite"],
        github: "#",
      },
      {
        name: "Blinkit Clone",
        icon: "fa-solid fa-cart-shopping",
        description:
          "Responsive frontend clone inspired by quick-commerce interfaces with modern layouts and reusable UI sections.",
        tech: ["HTML", "CSS", "Bootstrap"],
        github: "#",
      },
      {
        name: "Random Quote Generator",
        icon: "fa-solid fa-quote-left",
        description:
          "JavaScript-based application that dynamically displays motivational quotes with a simple and interactive user interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
      },
    ],
  },
  {
    title: "Other Projects",
    layout: "half",
    small: true,
    projects: [
      {
        name: "To-Do List Application",
        icon: "fa-solid fa-list-check",
        description:
          "Task management application with add, update, delete and completion functionality.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
      },
      {
        name: "College Website",
        icon: "fa-solid fa-building-columns",
        description:
          "Educational website containing course information, events, admission details and responsive UI sections.",
        tech: ["HTML", "CSS", "Bootstrap"],
        github: "#",
      },
    ],
  },
];
