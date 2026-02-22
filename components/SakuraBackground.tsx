'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  endX: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function SakuraBackground() {
  const [petals, setPetals] = useState<Petal[]>([]);
  
  useEffect(() => {
    const newPetals = Array.from({ length: 20 }).map((_, i) => {
      const x = Math.random() * 100;
      return {
        id: i,
        x,
        y: -10,
        endX: x + (Math.random() * 20 - 10),
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.2,
      };
    });
    
    const timer = setTimeout(() => {
      setPetals(newPetals);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            top: `${petal.y}%`, 
            left: `${petal.x}%`, 
            rotate: petal.rotation,
            opacity: 0 
          }}
          animate={{ 
            top: '110%', 
            left: `${petal.endX}%`,
            rotate: petal.rotation + 360,
            opacity: [0, petal.opacity, petal.opacity, 0]
          }}
          transition={{ 
            duration: petal.duration, 
            repeat: Infinity, 
            delay: petal.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-pink-300/40 dark:fill-pink-400/20">
            <path d="M50 0 C60 20 90 30 100 50 C90 70 60 80 50 100 C40 80 10 70 0 50 C10 30 40 20 50 0" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
