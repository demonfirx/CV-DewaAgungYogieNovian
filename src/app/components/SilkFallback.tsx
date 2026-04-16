import React from 'react';

// Fallback gradient component jika WebGL gagal
export const SilkFallback = ({ color = "#7B7481", className = "" }: { color?: string, className?: string }) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}>
      <div className="absolute inset-0 w-full h-full animate-pulse silk-fallback-bg" />
      <style>{`
        .silk-fallback-bg {
          background: linear-gradient(135deg, ${color}20 0%, ${color}60 50%, ${color}20 100%);
          background-size: 200% 200%;
          animation: silk-gradient 8s ease infinite;
        }
        @keyframes silk-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};
