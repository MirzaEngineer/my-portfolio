export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'fancentral',
    title: 'FanCentral',
    description: 'A fully functional e-learning platform built using Next.js (App Router). It allows users to buy, read, and track books online in a clean dashboard experience.',
    longDescription: 'FanCentral is a comprehensive e-learning platform that revolutionizes the way users interact with digital books. Built with modern web technologies, it provides a seamless experience for purchasing, reading, and tracking books online.',
    technologies: ['Next.js', 'Tailwind CSS', 'MUI', 'Stripe', 'Firebase', 'Styled-Components'],
    liveUrl: 'https://fancentral.vercel.app',
    featured: true,
    image: 'https://res.cloudinary.com/djaqdmsau/image/upload/v1760167650/cmiubr9gmami34pmlljo.svg'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management and secure payment processing.',
    longDescription: 'A full-featured e-commerce platform built with the MERN stack, featuring real-time inventory updates, secure payment processing, and an intuitive admin dashboard.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT'],
    featured: false,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A comprehensive task management solution that enables teams to collaborate effectively with real-time updates, deadline tracking, and progress visualization.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC'],
    featured: false,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  }
];