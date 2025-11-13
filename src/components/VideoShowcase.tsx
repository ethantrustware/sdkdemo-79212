import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VideoShowcaseProps {
  src: string;
}

export const VideoShowcase = ({ src }: VideoShowcaseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the video when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Auto-play was prevented, that's ok
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect background */}
      <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
      
      <motion.div
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -8 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 80px -20px hsl(var(--primary) / 0.3)"
        }}
      >
        {/* Video container with aspect ratio */}
        <div className="relative aspect-video bg-gradient-to-br from-surface-1 to-surface-2">
          {/* Subtle border gradient overlay */}
          <div className="absolute inset-0 rounded-2xl" 
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, transparent 50%, hsl(var(--blue-light) / 0.1) 100%)"
            }}
          />
          
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover relative z-10"
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }}
          >
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause overlay hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] z-20 pointer-events-none"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
            </div>
          </motion.div>
        </div>

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-50">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-50">
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};
