import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CircularTextProps {
  text: string;
  spinDuration?: number; // seconds for full 360deg
  className?: string;
  radius?: number;
}

export const CircularText: React.FC<CircularTextProps> = ({ 
  text, 
  spinDuration = 20, 
  className,
  radius = 60
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom animation using frame loop to avoid jumps on hover
  const rotationRef = useRef(0);
  
  useAnimationFrame((time, delta) => {
    if (!containerRef.current) return;
    
    // Base rotation per ms = 360 / (spinDuration * 1000)
    const baseSpeed = 360 / (spinDuration * 1000);
    // Multiplier for hover
    const multiplier = isHovered ? 4 : 1;
    
    rotationRef.current = (rotationRef.current + (baseSpeed * delta * multiplier)) % 360;
    containerRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
  });
  
  const characters = text.split('');
  const totalChars = characters.length;
  const anglePerChar = 360 / totalChars;

  return (
    <div 
      className={cn("relative flex items-center justify-center rounded-full overflow-hidden cursor-pointer", className)}
      style={{ width: radius * 2.5, height: radius * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="absolute w-full h-full flex items-center justify-center origin-center"
      >
        {characters.map((char, index) => (
          <span
            key={index}
            className="absolute origin-center text-[10px] sm:text-xs font-bold tracking-widest text-white/80 uppercase font-['Rajdhani']"
            style={{
              transform: `rotate(${index * anglePerChar}deg) translateY(-${radius}px)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};