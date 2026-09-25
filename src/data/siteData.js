// Saari links aur repeated cheezein ek hi jagah — yahin se change karo.

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/ayush-pandey-407a74379/",
  github: "https://github.com/ap3543369-blip",
  leetcode: "https://leetcode.com/u/ayushpandey1/",
  email: "ap9122268057@gmail.com",
  phone: "+919122268057",
  phoneDisplay: "+91 9122268057",
};

// Resume ko public/resume/ayush-pandey-resume.pdf naam se rakhna
// (original me Hero aur About ke links alag file names par the)
export const RESUME_URL = "/resume/ayush-pandey-resume.pdf";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const PROFESSIONS = [
  "Full-Stack Developer",
  "Python Developer",
  "Django Developer",
  "Frontend Developer",
];

export const SOCIALS = [
  { label: "LinkedIn", href: LINKS.linkedin, icon: "fab fa-linkedin-in" },
  { label: "GitHub", href: LINKS.github, icon: "fab fa-github" },
  { label: "LeetCode", href: LINKS.leetcode, icon: "fa-solid fa-code" },
];

export const ABOUT_STATS = [
  { icon: "fa-solid fa-code", value: "10+", label: "Projects" },
  { icon: "fa-solid fa-graduation-cap", value: "CSE", label: "Engineering Student" },
  { icon: "fa-solid fa-rocket", value: "100%", label: "Learning Mindset" },
];
