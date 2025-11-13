export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle gradient mesh background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 50%, hsl(217 91% 60% / 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(262 83% 58% / 0.08) 0%, transparent 50%), radial-gradient(circle at 40% 90%, hsl(188 94% 43% / 0.05) 0%, transparent 50%)',
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '0s',
            animationDuration: '20s',
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(262 83% 58% / 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '5s',
            animationDuration: '25s',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full opacity-15 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(188 94% 43% / 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '10s',
            animationDuration: '30s',
          }}
        />
      </div>

      {/* Very subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(222 47% 11%) 1px, transparent 1px), linear-gradient(90deg, hsl(222 47% 11%) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};
