import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs } from 'react-icons/si';

export function Hero() {
  const techIcons = [
    { Icon: FaReact, name: 'React', color: '#61DAFB' },
    { Icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { Icon: SiExpress, name: 'Express', color: '#000000' },
    { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { Icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-primary/80 font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Mirza Usama
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I am Full Stack Developer with hands-on experience in building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in designing responsive UIs, developing robust backend APIs, and integrating third-party services like Stripe and Firebase. Passionate about clean code, performance optimization, and delivering user-focused solutions. Proven ability to work in both startup and team environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a
                href="/public/usama.pdf"
                download="Mirza_Usama_Resuma.pdf"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/MirzaEngineer"

              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mirza-usama-69b299375/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a> 
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="pt-12"
          >
            <p className="text-sm text-muted-foreground mb-6">Built with</p>
            <div className="flex flex-wrap justify-center gap-6  py-2">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 rounded-xl bg-muted/30 backdrop-blur-sm hover:bg-muted/50 transition-colors cursor-pointer group"
                  style={{ '--tech-color': tech.color } as React.CSSProperties}
                >
                  <tech.Icon
                    className="h-8 w-8 text-muted-foreground group-hover:text-[var(--tech-color)] transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}