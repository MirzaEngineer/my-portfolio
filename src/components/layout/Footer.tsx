import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MirzaEngineer',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mirza-usama-69b299375/',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mirza.codes7@gmail.com&su=Hello%20Usama&body=I%20want%20to%20connect%20with%20you.',
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors group"
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-2"
          >
            <p className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="h-4 w-4 text-red-500" />
              </motion.span>
              <span>by Mirza Usama</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}