import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Video, Sparkles, Palette } from 'lucide-react';

const people = [
  {
    id: 1,
    name: '라힐 아마도바',
    role: '국제 커플 라힐의 강남 가족여행',
    quote: '강남은 봉은사와 선정릉 같은 유서 깊은 전통 공간과 코엑스, K-pop, 패션 등 현대적 한류 문화가 도심 한복판에서 절묘하게 공존하는 특별한 중심지입니다.',
    image: '/images/people-rahil.png',
    borderColor: '#f9d5e5',
    icon: Video,
  },
  {
    id: 2,
    name: '케이디',
    role: '서울 명예시민 케이디의 강남 예술 산책',
    quote: '강남은 고층 빌딩과 트렌디한 숍, 감각적인 카페와 갤러리가 어우러져 세련되고 스타일리시한 분위기가 돋보이며, 럭셔리와 역동적인 에너지가 공존하는 특별한 공간입니다.',
    image: '/images/people-keidy.png',
    borderColor: '#d5e8f9',
    icon: Sparkles,
  },
  {
    id: 3,
    name: '레라',
    role: '패션모델 레라의 강남 트렌드 투어',
    quote: '강남은 24시간 활기가 넘치는 역동적인 지역으로, 모든 생활 인프라가 집중된 최고의 편의성을 갖추고 있으며 최신 패션과 트렌드가 가장 빠르게 시작되는 트렌드 세터들의 중심지입니다.',
    image: '/images/people-lera.png',
    borderColor: '#f9ecd5',
    icon: Palette,
  },
];

const FloatingStars = () => (
  <>
    <motion.div
      className="absolute"
      style={{ top: '10%', left: '8%' }}
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L11.22 8.78L20 10L11.22 11.22L10 20L8.78 11.22L0 10L8.78 8.78L10 0Z" fill="#e8628c" opacity="0.15" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '25%', right: '12%' }}
      animate={{
        scale: [1, 1.4, 1],
        rotate: [0, -180, -360],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L8.976 7.024L16 8L8.976 8.976L8 16L7.024 8.976L0 8L7.024 7.024L8 0Z" fill="#e8628c" opacity="0.15" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ bottom: '20%', left: '15%' }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0L10.098 7.902L18 9L10.098 10.098L9 18L7.902 10.098L0 9L7.902 7.902L9 0Z" fill="#e8628c" opacity="0.15" />
      </svg>
    </motion.div>
  </>
);

const WavingHand = () => (
  <motion.div
    animate={{
      rotate: [0, 14, -8, 14, -4, 10, 0],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 1,
      ease: 'easeInOut',
    }}
    style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
  >
    <img src="/images/icon-hand.svg" alt="hand" className="w-10 h-10" />
  </motion.div>
);

export function PeopleOfGangnam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % people.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % people.length);
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + people.length) % people.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#faf5ef' }}
    >
      <FloatingStars />

      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: '#b8a99a',
              textTransform: 'lowercase',
              marginBottom: '8px',
            }}
          >
            The heart of Gangnam
          </motion.p>

          <div className="flex items-center justify-center gap-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                color: '#2d2926',
                textShadow: '0 0 20px rgba(232, 98, 140, 0.08)',
              }}
            >
              Meet the Locals
            </motion.h2>

            <WavingHand />
          </div>
        </div>

        {/* Desktop 3 Cards */}
        <div className="hidden md:flex items-start justify-center gap-6 mb-12">
          {people.map((person, index) => {
            const isActive = index === activeIndex;
            const Icon = person.icon;

            return (
              <motion.div
                key={person.id}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.95,
                  opacity: isActive ? 1 : 0.7,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer"
                style={{
                  width: '360px',
                  flexShrink: 0,
                }}
              >
                <div
                  className="bg-white rounded-3xl p-9 transition-shadow duration-300"
                  style={{
                    border: '1px solid #f0ebe6',
                    boxShadow: isActive
                      ? '0 8px 32px rgba(180, 140, 120, 0.15)'
                      : '0 4px 16px rgba(180, 140, 120, 0.10)',
                  }}
                >
                  {/* Portrait */}
                  <div className="relative mx-auto mb-6" style={{ width: '200px', height: '200px' }}>
                    <div
                      className="w-full h-full rounded-3xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${person.image})`,
                        border: `4px solid ${person.borderColor}`,
                      }}
                    />

                    <motion.div
                      className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                      animate={isActive ? {
                        rotate: [-5, 5, -5],
                        y: [-2, 2, -2],
                      } : {}}
                      transition={isActive ? {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      } : {}}
                    >
                      <Icon className="w-6 h-6" style={{ color: person.borderColor }} />
                    </motion.div>
                  </div>

                  {/* Name & Role */}
                  <h3
                    className="text-center mb-1.5"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#2d2926',
                    }}
                  >
                    {person.name}
                  </h3>

                  <p
                    className="text-center mb-5"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#b8a99a',
                    }}
                  >
                    {person.role}
                  </p>

                  {/* Quote */}
                  <p
                    className="text-center mb-6"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: '#2d2926',
                      lineHeight: '1.7',
                    }}
                  >
                    {person.quote}
                  </p>

                  {/* Read Link */}
                  <div className="flex items-center justify-center gap-1.5">
                    <motion.a
                      href="#"
                      className="flex items-center gap-1.5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <span
                        style={{
                          fontFamily: 'Pretendard, -apple-system, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#e8628c',
                        }}
                      >
                        Read their story
                      </span>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Heart className="w-3.5 h-3.5" style={{ color: '#e8628c', fill: '#e8628c' }} />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div
          className="md:hidden mb-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {(() => {
                const person = people[activeIndex];
                const Icon = person.icon;

                return (
                  <div
                    className="bg-white rounded-3xl p-8 mx-auto"
                    style={{
                      border: '1px solid #f0ebe6',
                      boxShadow: '0 8px 32px rgba(180, 140, 120, 0.15)',
                      maxWidth: '360px',
                    }}
                  >
                    <div className="relative mx-auto mb-6" style={{ width: '200px', height: '200px' }}>
                      <div
                        className="w-full h-full rounded-3xl bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${person.image})`,
                          border: `4px solid ${person.borderColor}`,
                        }}
                      />

                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                        <Icon className="w-6 h-6" style={{ color: person.borderColor }} />
                      </div>
                    </div>

                    <h3
                      className="text-center mb-1.5"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#2d2926',
                      }}
                    >
                      {person.name}
                    </h3>

                    <p
                      className="text-center mb-5"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#b8a99a',
                      }}
                    >
                      {person.role}
                    </p>

                    <p
                      className="text-center mb-6"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, sans-serif',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#2d2926',
                        lineHeight: '1.7',
                      }}
                    >
                      {person.quote}
                    </p>

                    <div className="flex items-center justify-center gap-1.5">
                      <a href="#" className="flex items-center gap-1.5">
                        <span
                          style={{
                            fontFamily: 'Pretendard, -apple-system, sans-serif',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#e8628c',
                          }}
                        >
                          Read their story
                        </span>
                        <Heart className="w-3.5 h-3.5" style={{ color: '#e8628c', fill: '#e8628c' }} />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2.5">
          {people.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="rounded-full transition-all"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: index === activeIndex ? '#e8628c' : '#e8d8ce',
                boxShadow: index === activeIndex ? '0 2px 8px rgba(232, 98, 140, 0.3)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
