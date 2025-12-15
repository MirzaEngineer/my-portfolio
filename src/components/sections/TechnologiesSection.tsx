import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaJs, FaGitAlt, FaGithub,
  FaUserLock
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMui, SiFramer,
  SiRadixui, SiExpress, SiPrisma, SiDrizzle, SiJsonwebtokens,
  SiMongodb, SiPostgresql, SiFirebase, SiPostman, SiStripe,
  SiWebrtc, SiZod, SiStyledcomponents, SiRedux,
  SiSocketdotio, SiMysql, SiMongoose, SiDocker, SiKubernetes,SiAwsamplify,
   SiVercel, SiNetlify, SiHeroku, SiDigitalocean, SiLinux, SiUbuntu, SiNginx,
   SiExpo, SiReactrouter, SiReact, SiMaterialdesign, 
  SiReacthookform, SiReactquery, SiFacebook, SiFastlane
} from 'react-icons/si';
import { AnimatedCard } from '@/components/ui/animated-card';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTechnologiesByCategory } from '@/data/technologies';
import { DiMsqlServer } from "react-icons/di";
import { SlGhost } from "react-icons/sl";
const iconMap: Record<string, React.ComponentType<any>> = {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaGithub,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiRadixui,
  SiExpress,
  SiPrisma,
  SiDrizzle,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPostman,
  SiStripe,
  SiWebrtc,
  SiZod,
  SiStyledcomponents,
  SiRedux,
  SlGhost,
  SiSocketdotio,
  SiMysql,
  DiMsqlServer,
  SiMongoose,
  FaUserLock,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiLinux,
  SiUbuntu,
  SiNginx,
  SiAwsamplify,
  SiExpo,
  SiReactrouter,
  SiReact,
  SiMaterialdesign,
  SiReacthookform,
  SiReactquery,
  SiFacebook,
  SiFastlane
};

export function TechnologiesSection() {
  const categories = ['Frontend', 'Backend', 'Database',  'Tools', 'DevOps'] as const;
  // const categories = ['Frontend', 'Backend', 'Database', 'Mobile', 'Tools', 'DevOps'] as const;

  return (
    <section className="py-20 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technologies &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 p-2 lg:grid-cols-2  xl:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = getTechnologiesByCategory(category);

            return (
              <AnimatedCard key={category} delay={categoryIndex * 0.1}>
                <CardHeader>
                  <CardTitle className="text-xl  flex items-center space-x-2">
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {categoryTechs.map((tech, index) => {
                      const IconComponent = iconMap[tech.icon];

                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                        >
                          {IconComponent && (
                            <IconComponent
                              className="h-6 w-6 transition-colors"
                              style={{ color: tech.color }}
                            />
                          )}
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}