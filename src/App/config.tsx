import { Email, GitHub, LinkedIn, Resume } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Xinrui Tang',
  },
  title: {
    display: 'AI Researcher · Generative Models · Embodied Intelligence',
  },
  introduction: [
    'I study intelligent systems that perceive, generate, and interact with virtual worlds.',
    'My current interests include generative models, embodied intelligence, reinforcement learning, spatial memory, and controllable world generation.',
  ],
  researchFocus: [
    'Generative models',
    'Embodied intelligence',
    'Reinforcement learning',
    'World models',
    'Spatial reasoning',
  ],
  education: [
    {
      institution: 'Northeastern University',
      detail: 'Biomedical Engineering',
      period: '2022 – 2025',
    },
    {
      institution: 'University of Dundee',
      detail: 'Biomedical Engineering studies',
      period: '2025 – present',
    },
  ],
  projects: [
    {
      name: 'IMVA',
      description:
        'An interactive mixed-reality anatomy learning project built with Unity and MRTK3.',
      href: 'https://github.com/auroey/mr-IMVA-unity',
      tags: ['Unity', 'MRTK3', 'Mixed Reality'],
    },
    {
      name: 'Digital Garden',
      description:
        'A public knowledge base for research notes and technical learning, built with Quartz and Obsidian.',
      href: 'https://auroey.github.io/web-digital-garden-ts/',
      tags: ['Quartz', 'Obsidian', 'TypeScript'],
    },
    {
      name: 'Markdown Note Triage',
      description:
        'A keyboard-first desktop app for organizing Markdown files with optional LLM suggestions.',
      href: 'https://github.com/auroey/llm-file-organizer',
      tags: ['Python', 'PySide6', 'LLM'],
    },
    {
      name: 'Research Skill',
      description:
        'A local-first Codex research workbench for literature discovery, deep reading, experiment planning, and resumable research.',
      href: 'https://github.com/auroey/research-skill',
      tags: ['Codex', 'Research', 'Python'],
    },
    {
      name: 'Cursor with Codex',
      description:
        'A local collaboration workflow that combines Codex planning and review with Cursor implementation.',
      href: 'https://github.com/auroey/cursor-with-codex',
      tags: ['Codex', 'Cursor', 'Automation'],
    },
    {
      name: 'Turtle Soup AI',
      description:
        'An online lateral-thinking puzzle game with conversational AI-assisted play.',
      href: 'https://auroey.github.io/turtle-soup-ai/',
      tags: ['React', 'TypeScript', 'AI'],
    },
  ],
  // No verified publication records were present in the legacy site. Add only
  // publications that have been reviewed and confirmed by the site owner.
  publications: [],
  buttons: [
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume (opens in new window)',
      icon: <Resume />,
      href: `${process.env.PUBLIC_URL ?? ''}/Resume.pdf`,
    },
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/auroey',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/kyle-tang-8a4752395',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:xrt404@gmail.com',
    },
  ],
};
