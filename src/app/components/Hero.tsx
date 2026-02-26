import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-trail-1.png',
    subtitle: '꽃잎 따라 흐르는 강남둘레길',
  },
  {
    id: 2,
    image: '/images/hero-trail-2.png',
    subtitle: '초록빛 숲길을 걷는 강남둘레길',
  },
  {
    id: 3,
    image: '/images/hero-trail-3.jpg',
    subtitle: '도심 속 자연을 만나는 강남둘레길',
  },
];


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.02, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 5, times: [0, 0.5, 1] }
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`,
                filter: 'brightness(0.95) saturate(1.1)',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Warm Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(220, 140, 100, 0.45) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1280px] mx-auto px-5 md:px-20 flex flex-col justify-center">
        <div className="md:max-w-[600px]" style={{ marginTop: '-10vh' }}>
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-4"
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              textShadow: '0 0 30px rgba(220, 140, 100, 0.3)',
            }}
          >
            Fall in Love with Gangnam
          </motion.h1>

          {/* Subheadline - changes with slide */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: 1.4,
                color: 'rgba(255, 255, 255, 0.88)',
              }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-3 mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="w-full md:w-auto px-8 py-3 text-white rounded-full transition-all duration-300"
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                backgroundColor: '#e20047',
                minHeight: '48px',
                boxShadow: '0 4px 16px rgba(226, 0, 71, 0.3)',
              }}
            >
              Let's Explore
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="w-full md:w-auto px-8 py-3 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                minHeight: '48px',
              }}
            >
              <Play className="w-4 h-4 fill-white" />
              Watch the Story
            </motion.button>
          </motion.div>

          {/* Progress Circles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-2 justify-center md:justify-start"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="transition-all duration-300"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? '#e20047' : 'transparent',
                  border: currentSlide === index ? 'none' : '1px solid rgba(255, 255, 255, 0.4)',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p
          style={{
            fontFamily: 'Pretendard, -apple-system, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          Scroll to discover more
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
