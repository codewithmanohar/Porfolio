import next_logo from "../public/next.svg"
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export const imgs = {
    next_logo, 
}


export const projects = [
  {
    title: "Civix – Citizen Engagement Dashboard",
    description:
      "A full-stack web platform enabling citizens to report issues, submit feedback, and interact with local authorities seamlessly.",
    techStack: ["React", "Node.js", "MongoDB" , "Express.js", "react-toastify", "tailwind css" , "chart.js", "jspdf" , "framer motion", "papaparse" , "nodemailer"],
    website: "https://civix-demo.vercel.app",
    code: "https://github.com/codewithmanohar/Civix-Citizen-Engagement-Dashboard",
  },
  {
    title: "ChatFlow – Real-Time Chat Application",
    description:
      "A real-time messaging app with secure authentication, private chats, typing indicators, and persistent chat history.",
    techStack: ["React", "Daisy UI", "Node.js", "Socket.io" , "Express.js" , "MongoDB" , "React-toast", "Cloudinary"],
    website: "https://chatflow-demo.vercel.app",
    code: "https://github.com/codewithmanohar/Full-Stack-Chat-Application",
  },
  {
    title: "QuizForge – AI Quiz Generator",
    description:
      "An AI-powered quiz app that generates programming questions based on selected language and difficulty, with a 30-second timer.",
    techStack: ["React", "Google Gemini", "Tailwind CSS", "Node.js" , "Express.js" ,  ],
    website: "https://quizforge-demo.vercel.app",
    code: "https://github.com/codewithmanohar/AI_Quiz",
  },
  {
    title: "CodeSense – AI Code Reviewer",
    description:
      "An AI-driven code review tool that analyzes user-submitted code and returns refined, optimized, and corrected code suggestions.",
    techStack: ["React", "Node.js", "Express.js", "Prisma", "Zustand", "Google Gemini" , "react-markdown" , "react-toastify", "rehype-highlight" , "Daisy UI" ],
    website: "https://codesense-demo.vercel.app",
    code: "https://github.com/codewithmanohar/AI-Code-Reviwer",
  },
  
];


export const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "Shadcn UI" },
  { name: "GitHub" , icon : <FaGithub /> },
  { name: "Docker" , icon : <FaDocker /> },
  { name: "Git " ,icon : <FaGitAlt />},
  { name: "Vercel " , icon : <IoLogoVercel /> },
  { name: "Zustand " },
  { name: "Postman " },
  { name: "Daisy UI" },
  { name: "Cloudinary" },
  { name: "Figma" },
];