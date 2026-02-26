import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Gangnam Festival',
    tags: ['#강남페스티벌', '#GangnamFestival', '#서울축제', '#가을축제', '#K-pop'],
    image: '/images/hallyu-festival.png',
  },
  {
    id: 2,
    title: 'Dulle-gil',
    tags: ['#강남둘레길', '#강남산책', '#도심속휴식', '#강남가볼만한곳', '#강남데이트'],
    image: '/images/hallyu-dullegil.png',
  },
  {
    id: 3,
    title: 'People of Gangnam',
    tags: ['#강남에세이', '#강남의사람들', '#강민구셰프', '#밍글스', '#미쉐린가이드'],
    image: '/images/hallyu-people.png',
  },
];

const BouncingHeart = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1], y: [0, -4, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <Heart className="w-4 h-4" style={{ color: '#e8628c', fill: '#e8628c' }} />
  </motion.div>
);

const SlideContent = ({ slide }: { slide: typeof slides[0] }) => (
  <>
    <div className="flex items-center gap-2 mb-4">
      <BouncingHeart />
      <p
        style={{
          fontFamily: 'Pretendard, -apple-system, sans-serif',
          fontSize: '13px',
          fontWeight: 600,
          color: '#b8a99a',
          textTransform: 'lowercase',
        }}
      >
        your k-culture adventure
      </p>
    </div>

    <h2
      style={{
        fontFamily: 'Pretendard, -apple-system, sans-serif',
        fontSize: 'clamp(40px, 5vw, 52px)',
        fontWeight: 800,
        color: '#2d2926',
        letterSpacing: '-0.01em',
        marginBottom: '32px',
        lineHeight: '1.1',
      }}
    >
      {slide.title}
    </h2>

    <div className="flex flex-wrap gap-2 mb-8">
      {slide.tags.map((tag) => (
        <motion.span
          key={tag}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="inline-flex items-center px-4 py-2 rounded-full cursor-pointer"
          style={{
            backgroundColor: 'rgba(254, 240, 236, 0.8)',
            border: '1px solid #e8628c',
            fontFamily: 'Pretendard, -apple-system, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            color: '#e8628c',
          }}
        >
          {tag}
        </motion.span>
      ))}
    </div>

    <motion.a
      href="#"
      className="inline-flex items-center gap-2"
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span
        style={{
          fontFamily: 'Pretendard, -apple-system, sans-serif',
          fontSize: '15px',
          fontWeight: 600,
          color: '#e8628c',
        }}
      >
        자세히보기
      </span>
      <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <ArrowRight className="w-4 h-4" style={{ color: '#e8628c' }} />
      </motion.div>
    </motion.a>
  </>
);

export function HallyuTourismCourses() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const slideIndex = Math.min(Math.floor(latest * slides.length), slides.length - 1);
      setCurrentSlide(slideIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => {
            const isLast = index === slides.length - 1;
            const n = slides.length;
            const t = 0.03; // very narrow transition for snappy crossfade
            const opacity = useTransform(
              scrollYProgress,
              isLast
                ? [(index - t) / n, index / n]
                : [
                    (index - t) / n,
                    index / n,
                    (index + 1 - t) / n,
                    (index + 1) / n,
                  ],
              isLast ? [0, 1] : [0, 1, 1, 0]
            );

            return (
              <motion.div key={slide.id} style={{ opacity }} className="absolute inset-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Left Semi-transparent Block - Desktop */}
        <div
          className="absolute top-0 left-0 bottom-0 hidden lg:flex items-center z-10"
          style={{
            width: '750px',
            backgroundColor: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              style={{ padding: '0 80px', width: '100%' }}
            >
              <SlideContent slide={slides[currentSlide]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Info Panel */}
        <div className="lg:hidden w-full px-5 py-20 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <SlideContent slide={slides[currentSlide]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Heart Navigation - right side */}
        <div className="hidden lg:flex flex-col gap-5 items-center absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20">
          {slides.map((_, index) => (
            <div key={index} className="transition-all">
              <motion.div
                animate={currentSlide === index ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart
                  className={currentSlide === index ? 'w-6 h-6' : 'w-5 h-5'}
                  style={{
                    color: '#e8628c',
                    fill: currentSlide === index ? '#e8628c' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile Progress Line */}
        <div className="lg:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[80%] z-30">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${(currentSlide + 1) / slides.length * 100}%`, transition: 'width 0.3s ease' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
