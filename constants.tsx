import { Project, ExperienceItem, Skill } from './types';
import { Code, Layout, Smartphone, Database, Cpu, Globe } from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'About', id: 'about' },
  { name: 'Research', id: 'research' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
];

export const SKILLS: { category: string; items: Skill[] }[] = [
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", icon: "Brain", level: 90 },
      { name: "Deep Learning", icon: "Network", level: 85 },
      { name: "Model Training", icon: "Zap", level: 88 },
    ]
  },
  {
    category: "VLSI & Systems",
    items: [
      { name: "CMOS Fundamentals", icon: "Cpu", level: 85 },
      { name: "Digital Logic", icon: "Binary", level: 90 },
      { name: "Computer Architecture", icon: "Server", level: 88 },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Python", icon: "Code", level: 95 },
      { name: "Linux / WSL", icon: "Terminal", level: 90 },
      { name: "CUDA", icon: "Cpu", level: 80 },
    ]
  }
];

export const EDUCATION_DATA: ExperienceItem[] = [
  {
    id: "edu1",
    role: "B.Tech in VLSI Design (ECE)",
    company: "Vellore Institute of Technology (VIT)",
    period: "2024 – Present",
    description: "Specialization in Electronics, Computer Architecture, and Hardware-Aware AI Systems.",
    achievements: []
  },
  {
    id: "edu2",
    role: "Higher Secondary Education",
    company: "Delhi Public School, Vasant Kunj",
    period: "2022 – 2024",
    description: "Foundation in Mathematics and Computer Science.",
    achievements: []
  }
];

export const TECHNICAL_EXPERTISE = [
  {
    category: "AI / Machine Learning",
    skills: ["PyTorch", "Deep Learning (CNNs, Ensembles)", "Reinforcement Learning", "Explainable AI (Grad-CAM, SHAP)"]
  },
  {
    category: "Systems & Embedded AI",
    skills: ["Raspberry Pi 5", "Embedded Linux", "Edge AI Deployment", "Local LLM Inference", "MPMC System Architecture"]
  },
  {
    category: "VLSI & Computer Architecture",
    skills: ["CMOS Fundamentals (NMOS / PMOS)", "Computer Architecture", "RISC-V Concepts", "Memory Hierarchy"]
  },
  {
    category: "Developer Tools",
    skills: ["WSL", "Jupyter Notebook", "Linux", "Git & GitHub", "CUDA (GPU-Accelerated Training)"]
  }
];

export const ACADEMIC_PROJECTS_LIST = [
  {
    title: "Explainable Hybrid Deep Learning for PCB Defect Detection",
    tech: "EfficientNet-B0 + Random Forest + XGBoost",
    details: [
      "97.9% test accuracy with Grad-CAM and SHAP explainability",
      "GPU-accelerated training (RTX 4060)"
    ]
  },
  {
    title: "Raspberry Pi 5 Powered Local LLM Server",
    tech: "MPMC Architecture",
    details: [
      "Standalone ARM-based AI inference server with concurrent request handling",
      "Focus on memory hierarchy, latency reduction, and concurrency"
    ]
  },
  {
    title: "Reinforcement Learning for Robot Locomotion",
    tech: "Deep RL (MuJoCo)",
    details: [
      "Controller policy learned from scratch without manual PID/LQR tuning",
      "Stability and robustness analysis of nonlinear dynamical system"
    ]
  }
];

// Deprecated but kept for type safety if needed elsewhere temporarily
export const WORK_DATA: ExperienceItem[] = [];
export const RESUME_SKILLS_DATA = [];
export const EXPERIENCE: ExperienceItem[] = []; 

export const PROJECTS: Project[] = [
  {
    id: "research-1",
    title: "Hybrid PCB Defect Detection",
    subtitle: "Explainable AI (XAI) for Industrial Inspection",
    category: "Computer Vision",
    image: "https://placehold.co/1200x800/1a1a1a/FFF?text=Insert+PCB+Grad-CAM+Heatmap+Here",
    description: "A high-precision PCB defect detection system combining EfficientNet-B0 with ensemble learning (Random Forest + XGBoost). Designed for reliability in industrial settings, it utilizes Grad-CAM and SHAP for dual-level interpretability.",
    technologies: ["PyTorch", "EfficientNet", "XGBoost", "Grad-CAM", "SHAP"],
    stats: [
      { label: "Test Accuracy", value: "97.9%" },
      { label: "Macro F1-Score", value: "0.963" },
      { label: "Inference", value: "Real-time" },
      { label: "Hardware", value: "RTX 4060" }
    ],
    features: [
      "Hybrid architecture: CNN feature extraction + Ensemble classification",
      "Interpretability: Visual heatmaps (Grad-CAM) & feature importance (SHAP)",
      "Optimized for detection of micro-defects on circuit boards"
    ]
  },
  {
    id: "research-2",
    title: "Local LLM Inference Server",
    subtitle: "Distributed Edge Computing on Raspberry Pi",
    category: "Embedded Systems",
    image: "https://placehold.co/1200x800/1a1a1a/FFF?text=Insert+System+Architecture+Diagram+Here",
    description: "A standalone, offline AI inference server running on Raspberry Pi 5. Implements a Multi-Producer Multi-Consumer (MPMC) architecture to handle concurrent requests from multiple client devices with efficient queue management.",
    technologies: ["Raspberry Pi 5", "Python", "Quantized LLMs", "Concurrency", "Networking"],
    stats: [
      { label: "Architecture", value: "MPMC" },
      { label: "Latency", value: "Low (Local)" },
      { label: "Privacy", value: "100% Offline" },
      { label: "Platform", value: "Edge" }
    ],
    features: [
      "Memory-efficient quantized model hosting",
      "Thread-safe request handling via producer-consumer queues",
      "Eliminates cloud dependency and reduces API costs"
    ]
  },
  {
    id: "research-3",
    title: "Deep Reinforcement Learning Control",
    subtitle: "End-to-End Robot Locomotion",
    category: "Robotics & RL",
    image: "https://placehold.co/1200x800/1a1a1a/FFF?text=Insert+MuJoCo+Simulation+Frame+Here",
    description: "A DeepMind-inspired approach to robot control where agents learn locomotion from scratch without manually tuned PID controllers. Modeled as a nonlinear dynamical system in MuJoCo, emphasizing robust closed-loop control.",
    technologies: ["Reinforcement Learning", "MuJoCo", "Control Theory", "Python", "Gymnasium"],
    stats: [
      { label: "Method", value: "Model-Free RL" },
      { label: "Controller", value: "Neural Policy" },
      { label: "Environment", value: "Continuous" },
      { label: "Optimization", value: "PPO/SAC" }
    ],
    features: [
      "Closed-loop control: Sensor → Neural Net → Actuator",
      "Evaluation via classical metrics: Overshoot, Settling Time, SS Error",
      "Robustness against external disturbances in simulation"
    ]
  },
];