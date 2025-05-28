import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Our Clients", href: "/clients" },
  { label: "Articles", href: "/articles" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const solutions = [
  {
    icon: "🤖", 
    title: "AI Automation",
    description: "AI Automation helps businesses streamline repetitive tasks and processes. By utilizing AI models, tasks are performed faster and more accurately, freeing up valuable human resources for more strategic work."
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description: "AI-powered Data Analytics turns large sets of data into actionable insights. By identifying trends and patterns, businesses can make informed decisions, improve efficiency, and uncover new opportunities."
  },
  {
    icon: "💬",
    title: "Virtual Assistants",
    description: "AI Virtual Assistants provide customer support, handle inquiries, and automate responses. They improve customer satisfaction by offering instant, personalized interactions while reducing the need for human intervention."
  },
  {
    icon: "⚙️",
    title: "AI Prototyping",
    description: "AI Prototyping accelerates the development process by automating the creation of functional prototypes. This helps teams quickly test ideas, iterate on designs, and bring innovations to market faster."
  },
  {
    icon: "🌐",
    title: "Predictive Analytics",
    description: "Predictive Analytics uses AI to forecast future trends and outcomes, helping businesses make proactive decisions. By analyzing past data, AI predicts customer behavior and market shifts to improve strategic planning."
  },
  {
    icon: "🔐",
    title: "AI Security Solutions",
    description: "AI Security Solutions enhance cybersecurity by detecting and responding to potential threats. AI identifies abnormal patterns in real-time, offering better protection against cyberattacks, data breaches, and fraud."
  },
];

export const aiSolutionChecklist = [
  {
    title: "AI-Powered Automation",
    description: "Automate repetitive tasks and processes, reducing human error and freeing up valuable time for strategic work."
  },
  {
    title: "Real-Time Data Insights",
    description: "Leverage AI to analyze business data in real-time, uncovering trends, patterns, and actionable insights to improve decision-making."
  },
  {
    title: "Predictive Analytics",
    description: "Utilize AI to forecast future trends, allowing your business to adapt to changes, improve efficiency, and stay ahead of the competition."
  },
  {
    title: "AI-Powered Customer Support",
    description: "Enhance your customer support operations with AI-driven chatbots and virtual assistants, providing quick, personalized, and accurate responses."
  },
  {
    title: "Improved Security with AI",
    description: "AI can detect unusual patterns and safeguard your business from cyber threats, ensuring secure transactions and data protection."
  },
  {
    title: "Streamlined Prototyping with AI",
    description: "Accelerate product development and innovation by using AI-driven tools to rapidly prototype, test, and refine ideas."
  }
];

export const articles = [
  {
    title: "The Future of AI in Business",
    excerpt: "AI is revolutionizing industries, bringing efficiencies and insights that were once impossible...",
    link: "/articles/the-future-of-ai-in-business",
  },
  {
    title: "How AI is Shaping the Future of Work",
    excerpt: "AI is increasingly being integrated into workflows, automating tasks and improving productivity...",
    link: "/articles/ai-shaping-the-future-of-work",
  },
  {
    title: "AI Automation: A Game Changer",
    excerpt: "Automation powered by AI is leading the charge in optimizing repetitive tasks and improving efficiency...",
    link: "/articles/ai-driven-automation",
  },
];


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
