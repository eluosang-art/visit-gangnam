import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    featured: true,
    title: '강남 페스티벌 2026',
    date: 'Oct. 15',
    month: 'Oct',
    day: '15',
    venue: '놓칠수없는 강남의 페스티벌',
    image: '/images/event-festival.png',
    badgeColor: '#ff7a6e',
  },
  {
    id: 2,
    featured: false,
    title: '365일 FUN&FUN 강남 – DJ Party',
    date: '상시',
    month: '상시',
    day: '',
    venue: '365일 FUN&FUN 강남 특별 프로그램!',
    image: '/images/event-djparty.png',
    badgeColor: '#ffb07a',
  },
  {
    id: 3,
    featured: false,
    title: '2025 세계유산 조선왕릉축전',
    date: 'May 2025',
    month: 'May',
    day: '',
    venue: '조선왕릉, 500년의 영화(榮華:映畵)를 보다',
    image: '/images/event-royal.png',
    badgeColor: '#ff7a6e',
  },
  {
    id: 4,
    featured: false,
    title: '2025 강남아트',
    date: '2025',
    month: '2025',
    day: '',
    venue: '작품 설명이 더해져 유익한 전시 투어, 놓치지 마세요.',
    image: '/images/event-art.png',
    badgeColor: '#ffb07a',
  },
  {
    id: 5,
    featured: false,
    title: '원밀리언 댄스 플래시몹 in 코엑스',
    date: '2025',
    month: '2025',
    day: '',
    venue: '365일 FUN&FUN 강남 X 원밀리언',
    image: '/images/event-flashmob.png',
    badgeColor: '#ff7a6e',
  },
  {
    id: 6,
    featured: false,
    title: '2025 365일 FUN&FUN 강남',
    date: '상시',
    month: '상시',
    day: '',
    venue: '강남의 퇴근길을 책임지는 다양한 거리공연의 향연!',
    image: '/images/event-funafun.png',
    badgeColor: '#ffb07a',
  },
];

const LanternGlows = () => (
  <>
    <div
      className="absolute pointer-events-none"
      style={{
        top: '10%',
        left: '15%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,200,100,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        top: '50%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,200,100,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: '10%',
        left: '25%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(255,200,100,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  </>
);

const CalendarAnimation = () => (
  <motion.div
    animate={{
      y: [0, -4, 0],
      rotate: [0, -3, 3, 0],
    }}
    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <Calendar className="w-8 h-8" style={{ color: '#e8628c' }} />
  </motion.div>
);

export function CulturalEvents() {
  const featuredEvent = events.find(e => e.featured) || events[0];
  const regularEvents = events.filter(e => !e.featured && e.id !== featuredEvent.id);

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#3a3a4a' }}
    >
      <LanternGlows />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'lowercase',
              marginBottom: '8px',
            }}
          >
            What's happening
          </motion.p>

          <div className="flex items-center gap-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                color: 'white',
              }}
            >
              Coming Up in Gangnam
            </motion.h2>

            <CalendarAnimation />
          </div>
        </div>

        {/* Featured Event Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-2xl overflow-hidden relative group cursor-pointer"
          style={{
            height: 'clamp(300px, 40vh, 500px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${featuredEvent.image})`,
              filter: 'brightness(0.7)',
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between"
            style={{
              background: 'rgba(58, 58, 74, 0.60)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex-1 mb-4 md:mb-0">
              <p
                className="mb-2"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.75)',
                  letterSpacing: '0.5px',
                }}
              >
                {featuredEvent.date}
              </p>
              <h3
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: 'clamp(24px, 3vw, 28px)',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: '1.3',
                }}
              >
                {featuredEvent.title}
              </h3>
              <p
                className="mt-2"
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {featuredEvent.venue}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-6 py-3 rounded-full"
              style={{
                backgroundColor: '#e8628c',
                color: 'white',
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(232, 98, 140, 0.3)',
              }}
            >
              I'm Going!
            </motion.button>
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {regularEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: '0 0 0 2px rgba(232, 98, 140, 0.15), 0 8px 24px rgba(0, 0, 0, 0.2)',
                transition: { type: 'spring', stiffness: 400, damping: 17 }
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#4a4a5a',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    filter: 'brightness(0.85)',
                  }}
                />
              </div>

              <div className="p-4">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: '1.4',
                  }}
                >
                  {event.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.55)',
                  }}
                >
                  {event.venue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show Everything Link */}
        <div className="mt-12 text-center">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 group"
            whileHover={{ x: 4 }}
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
              Show me everything
            </span>
            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowRight className="w-4 h-4" style={{ color: '#e8628c' }} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
