import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative">
              <AnimatedCard className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-yellow-500">Featured Project</span>
                    </div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-3xl">{featuredProject.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featuredProject.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        {featuredProject.liveUrl && (
                          <Button asChild>
                            <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {featuredProject.githubUrl && (
                          <Button variant="outline" asChild>
                            <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 aspect-video"
                    >
                      {featuredProject.image && (
                        <img
                          src={featuredProject.image}
                          alt={featuredProject.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.2}>
              <CardHeader>
                <div className="relative mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10 aspect-video"
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </motion.div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}