export const siteConfig = {
  name: 'Khiter Hamza',
  title: 'Full-Stack Developer',
  tagline: 'I build systems that work, scale, and think.',
  email: 'contact@khiterhamza.com',
  github: 'https://github.com/khiterhamza',
  linkedin: 'https://linkedin.com/in/khiterhamza',
};

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
];

export const stats = [
  { value: 2, label: 'Year coding', suffix: '+', color: '#6c63ff' },
  { value: 10, label: 'Project', suffix: '+', color: '#f59e0b' },
  { value: 3, label: 'Model deployed', suffix: '+', color: '#10b981' },
  { value: 3, label: 'Domains mastered', suffix: '', color: '#6c63ff' },
];

export const projects = [
  {
    id: 'microhack',
    title: 'MicroHack 3.0: Intelligence Engine & Strategic Surveillance',
    description: 'Advanced intelligence engine designed for strategic surveillance, real-time data harvesting, and multi-layered threat analysis.',
    category: 'AI/ML',
    image: '/images/projects_2.webp',
    tags: ['Python', 'AI Agents', 'Strategic Analytics', 'Surveillance Systems'],
    links: { github: 'https://github.com/alaa-gnt/MicroHack-3.0', external: '#' },
    type: 'screenshot',
  },
  {
    id: 'medical-gpt',
    title: 'Medical Question Answering with GPT-2 (Fine-Tuning)',
    description: 'Custom fine-tuned GPT-2 model specialized in medical literature, providing high-accuracy responses to complex clinical queries.',
    category: 'AI/ML',
    image: '/images/projects_2.webp',
    tags: ['GPT-2', 'Fine-Tuning', 'NLP', 'PyTorch', 'Medical Data'],
    links: { github: 'https://github.com/khiter-hamza/finetuningmodel', external: '#' },
    type: 'screenshot',
  },
  {
    id: 'sign-language',
    title: '🖐️ Sign Language MNIST Classifier (From Scratch)',
    description: 'Built a custom Convolutional Neural Network from the ground up using NumPy to recognize and classify sign language gestures.',
    category: 'AI/ML',
    image: '/images/projects_1.webp',
    tags: ['Computer Vision', 'CNN', 'NumPy', 'Deep Learning'],
    links: { github: 'https://github.com/khiter-hamza/SignLanguage', external: '#' },
    type: 'overlay',
    color: '#10b981',
  },
  {
    id: 'doxaa',
    title: 'Doxaa: AI Agent for Customer Support',
    description: 'Intelligent support bot leveraging LLMs to automate customer service workflows, resolve tickets, and integrate with helpdesk APIs.',
    category: 'AUTOMATION',
    image: '/images/projects_1.webp',
    tags: ['LangChain', 'OpenAI', 'Automation', 'Customer Support'],
    links: { github: '#', external: '#' },
    type: 'half',
    color: '#14b8a6',
  },
  {
    id: 'internship',
    title: 'Platform for Internship Management',
    description: 'Full-stack ecosystem for managing end-to-end internship lifecycles, from student applications to company evaluations and grading.',
    category: 'WEB',
    image: '/images/projects_1.webp',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    links: { github: 'https://github.com/khiter-hamza/Projet2cp', external: '#' },
    type: 'half',
    color: '#6c63ff',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'A modern, high-performance online store with real-time inventory, secure payments via Stripe, and a responsive admin dashboard.',
    category: 'WEB',
    image: '/images/projects_1.webp',
    tags: ['React', 'Node.js', 'Stripe', 'Framer Motion'],
    links: { github: 'https://github.com/khiter-hamza/ecom-backend', external: '#' },
    type: 'half',
    color: '#f59e0b',
  },
];

export const techStack = [
  {
    label: 'BACKEND',
    tags: ['Express.js', 'FastAPI', 'Bamboo', 'Node.js', 'Microservices Architecture', 'Django', 'REST APIs', 'PostgreSQL', 'Strapi'],
  },
  {
    label: 'FRONTEND',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'REST API Integration', 'Responsive Design', 'HTML / CSS', 'Bootstrap'],
  },
  {
    label: 'AI / DATA',
    tags: ['Machine Learning', 'Deep Learning', 'Scikit-Learn', 'NLP', 'Python', 'PyTorch', 'Vector Databases', 'TensorFlow', 'Keras'],
  },
  {
    label: 'AUTOMATION / AGENTIC AI & DEVOPS',
    tags: ['Agentix AI', 'LangChain', 'n8n', 'Huggingface', 'Groq', 'Cloud Infrastructure', 'Docker', 'Git', 'CI/CD'],
    gradient: true,
  },
];

export const socialLinks = [
  { name: 'Email', icon: 'Mail', label: 'EMAIL', color: '#f97316', bg: 'rgba(249,115,22,0.15)', href: 'mailto:contact@khiterhamza.com' },
  { name: 'Chat', icon: 'MessageCircle', label: 'CHAT', color: '#10b981', bg: 'rgba(16,185,129,0.15)', href: '#' },
  { name: 'LinkedIn', icon: 'Linkedin', label: 'LINKEDIN', color: '#3b82f6', bg: 'rgba(59,130,246,0.15)', href: 'https://linkedin.com/in/khiterhamza' },
  { name: 'GitHub', icon: 'Github', label: 'GITHUB', color: '#6c63ff', bg: 'rgba(108,99,255,0.15)', href: 'https://github.com/khiterhamza' },
];
