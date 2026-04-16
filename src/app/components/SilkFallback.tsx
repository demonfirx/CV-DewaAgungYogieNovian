import React from 'react';

// Fallback gradient component jika WebGL gagal
export const SilkFallback = ({ color = "#7B7481", className = "" }: { color?: string, className?: string }) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}>
      <div 
        className="absolute inset-0 w-full h-full animate-pulse"
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}60 50%, ${color}20 100%)`,
          backgroundSize: '200% 200%',
          animation: 'gradient 8s ease infinite',
        }}
      />
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};
