import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  hover?: boolean;
}

export function AnimatedCard({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up',
  hover = true 
}: AnimatedCardProps) {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className="h-full"
    >
      <Card className={cn(
        "h-full backdrop-blur-lg bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/10",
        className
      )}>
        {children}
      </Card>
    </motion.div>
  );
}