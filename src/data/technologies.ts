export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' |  'Tools';
  // category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Mobile' | 'Tools';
  icon: string;
  color: string;
}

export const technologies: Technology[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', icon: 'FaReact', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs', color: '#000000' },
  { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'JavaScript', category: 'Frontend', icon: 'FaJs', color: '#F7DF1E' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'Material-UI', category: 'Frontend', icon: 'SiMui', color: '#007FFF' },
  { name: 'Framer Motion', category: 'Frontend', icon: 'SiFramer', color: '#0055FF' },
  { name: 'Shadcn UI', category: 'Frontend', icon: 'SiRadixui', color: '#000000' },
  { name: 'Styled Components', category: 'Frontend', icon: 'SiStyledcomponents', color: '#DB7093' },
  // { name: 'Redux Toolkit', category: 'Frontend', icon: 'SiRedux', color: '#764ABC' },
  // { name: 'Jotai', category: 'Frontend', icon: 'SlGhost', color: '#67C3F3' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'FaNodeJs', color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', color: '#000000' },
  { name: 'Prisma ORM', category: 'Backend', icon: 'SiPrisma', color: '#2D3748' },
  { name: 'Drizzle ORM', category: 'Backend', icon: 'SiDrizzle', color: '#C5F74F' },
  { name: 'JWT', category: 'Backend', icon: 'SiJsonwebtokens', color: '#000000' },
  { name: 'OAuth', category: 'Backend', icon: 'FaUserLock', color: '#000000' },
  // { name: 'ClerkAuth', category: 'Backend', icon: 'FaUserLock', color: '#000000' },
  { name: 'Mongoose', category: 'Backend', icon: 'SiMongoose', color: '#47A248' },
  // { name: 'WebSocket', category: 'Backend', icon: 'SiSocketdotio', color: '#010101' },
  
  // Database
  { name: 'MongoDB', category: 'Database', icon: 'SiMongodb', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Database', icon: 'SiPostgresql', color: '#336791' },
  { name: 'Firebase', category: 'Database', icon: 'SiFirebase', color: '#FFCA28' },
  { name: 'MySQL', category: 'Database', icon: 'SiMysql', color: '#4479A1' },
  // { name: 'SQL Server', category: 'Database', icon: 'DiMsqlServer', color: '#CC2927' },
  
  // Mobile
  //   { name: 'React Native', category: 'Mobile', icon: 'FaReact', color: '#61DAFB' },
  // { name: 'Expo', category: 'Mobile', icon: 'SiExpo', color: '#000020' },
  // { name: 'React Navigation', category: 'Mobile', icon: 'SiReactrouter', color: '#CA4245' },
  // { name: 'Redux Toolkit', category: 'Mobile', icon: 'SiRedux', color: '#764ABC' },
  // { name: 'Async Storage', category: 'Mobile', icon: 'SiReact', color: '#61DAFB' },
  // { name: 'React Native Paper', category: 'Mobile', icon: 'SiMaterialdesign', color: '#757575' },
  // { name: 'React Hook Form', category: 'Mobile', icon: 'SiReacthookform', color: '#EC5990' },
  // { name: 'React Query', category: 'Mobile', icon: 'SiReactquery', color: '#FF4154' },
  // { name: 'Flipper', category: 'Mobile', icon: 'SiFacebook', color: '#1877F2' },
  //  { name: 'Fastlane', category: 'Mobile', icon: 'SiFastlane', color: '#00F5FF' },
  
  
  // Tools
  { name: 'Git', category: 'Tools', icon: 'FaGitAlt', color: '#F05032' },
  { name: 'GitHub', category: 'Tools', icon: 'FaGithub', color: '#181717' },
  { name: 'Postman', category: 'Tools', icon: 'SiPostman', color: '#FF6C37' },
  // { name: 'Stripe', category: 'Tools', icon: 'SiStripe', color: '#008CDD' },
  // { name: 'WebRTC', category: 'Tools', icon: 'SiWebrtc', color: '#333333' },
  { name: 'Zod', category: 'Tools', icon: 'SiZod', color: '#3E67B1' },
 // DevOps
//  { name: 'Docker', category: 'DevOps', icon: 'SiDocker', color: '#2496ED' },
  // { name: 'Kubernetes', category: 'DevOps', icon: 'SiKubernetes', color: '#326CE5' },
  { name: 'AWS', category: 'DevOps', icon: 'SiAwsamplify', color: '#FF9900' },
  { name: 'Vercel', category: 'DevOps', icon: 'SiVercel', color: '#000000' },
  { name: 'Netlify', category: 'DevOps', icon: 'SiNetlify', color: '#00C7B7' },
  // { name: 'Heroku', category: 'DevOps', icon: 'SiHeroku', color: '#430098' },
  // { name: 'DigitalOcean', category: 'DevOps', icon: 'SiDigitalocean', color: '#0080FF' },
  // { name: 'Linux', category: 'DevOps', icon: 'SiLinux', color: '#FCC624' },
  // { name: 'Ubuntu', category: 'DevOps', icon: 'SiUbuntu', color: '#E95420' },
  // { name: 'Nginx', category: 'DevOps'
  // , icon: 'SiNginx', color: '#009639' },
];

export const getTechnologiesByCategory = (category: Technology['category']) => {
  return technologies.filter(tech => tech.category === category);
};