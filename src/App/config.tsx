import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Xinrui Tang',
  },
  title: {
    display: 'Researcher of Computer Science',
  },
  affiliation: {
    display: 'Zhejiang University · CAD&CG',
  },
  introduction: [
    'I study intelligent systems that perceive, generate, and interact with virtual worlds.',
    'My research focuses on generative models, multimodal AI, and world models.',
  ],
  researchFocus: ['Generative models', 'Multimodal AI', 'World models'],
  education: [
    {
      institution: 'Zhejiang University',
      detail: "Master's Student in Big Data Technology and Engineering",
      period: 'Sep 2026 – Present',
      advisorLabel: 'Advisor',
      advisors: [
        {
          name: 'Chunhua Shen (沈春华)',
          href: 'https://cshen.github.io/',
        },
      ],
    },
    {
      institution: 'University of Dundee',
      detail: 'Biomedical Engineering',
      period: '2025 – Jun 2026',
      advisorLabel: 'Undergraduate advisor',
      advisors: [
        {
          name: 'Cheng Wei (魏程)',
          affiliation: 'University of Dundee',
          href: 'https://www.dundee.ac.uk/people/cheng-wei',
        },
      ],
    },
    {
      institution: 'Northeastern University',
      detail: 'Biomedical Engineering',
      period: '2022 – Jun 2026',
      advisorLabel: 'Undergraduate advisors',
      advisors: [
        {
          name: 'Zhiqiong Wang (王之琼)',
          affiliation: 'Northeastern University',
          href: 'https://www.bmie.neu.edu.cn/2021/0228/c8375a187369/pagem.htm',
        },
        {
          name: 'Chao Li (李超)',
          affiliation: 'University of Cambridge',
          href: 'https://www.damtp.cam.ac.uk/person/cl647',
        },
      ],
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
  ],
  publications: [
    {
      title:
        'Hierarchical Brain Structure Modeling for Predicting Genotype of Glioma',
      venue: 'CMMCA at MICCAI 2025 · Springer LNCS',
      href: 'https://arxiv.org/abs/2508.09593',
    },
    {
      title:
        'Sex, Age, and Race Representation in Electromyography Research: A Cross-Sectional Methodological Survey',
      venue: 'Journal of Electromyography and Kinesiology 91 (2026), 103218',
      href: 'https://doi.org/10.1016/j.jelekin.2026.103218',
    },
  ],
  buttons: [
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      href: 'mailto:xrt404@gmail.com',
    },
    {
      name: 'google-scholar',
      display: 'Google Scholar',
      ariaLabel: 'Google Scholar publications (opens in new window)',
      href: 'https://scholar.google.com/citations?user=f1FFPwYAAAAJ&hl=en',
    },
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      href: 'https://github.com/auroey',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      href: 'https://www.linkedin.com/in/kyle-tang-8a4752395',
    },
    {
      name: 'x-twitter',
      display: 'X / Twitter',
      ariaLabel: 'X profile (opens in new window)',
      href: 'https://x.com/AuroeyWert',
    },
  ],
};
