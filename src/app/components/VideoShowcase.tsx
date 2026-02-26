import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: '강남 거리',
    category: '강남의 거리를 걸으며 도시 풍경',
    thumbnail: '/images/video-1.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: '카페 투어',
    category: '강남 카페 탐방 아름다운 인테리어',
    thumbnail: '/images/video-2.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: '맛집 탐방',
    category: '강남 핫플 맛집 리얼 후기',
    thumbnail: '/images/video-3.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: '꽃 여행',
    category: '4계절 꽃 가득 강남 공원 산책',
    thumbnail: '/images/video-4.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: '문화 체험',
    category: '강남의 전통 문화 체험 이야기',
    thumbnail: '/images/video-5.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: '뮤지엄 투어',
    category: '강남의 미술관과 갤러리 투어',
    thumbnail: '/images/video-6.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 7,
    title: '쇼핑 가이드',
    category: '강남 쇼핑 핫스팟 투어 가이드',
    thumbnail: '/images/video-7.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 8,
    title: '도심 탐험',
    category: '강남 도심 속 숨겨진 명소 탐험',
    thumbnail: '/images/video-8.png',
    videoId: 'dQw4w9WgXcQ',
  },
];

const PlayIcon = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.2 }}
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: '52px',
        height: '52px',
        backgroundColor: 'rgba(255, 250, 247, 0.90)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '12px solid #e8628c',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          marginLeft: '3px',
        }}
      />
    </div>
  </motion.div>
);

const SparkleStars = () => (
  <>
    <motion.div
      className="absolute"
      style={{ top: '8px', right: '120px' }}
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L6.732 5.268L12 6L6.732 6.732L6 12L5.268 6.732L0 6L5.268 5.268L6 0Z" fill="#e8628c" opacity="0.20" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '24px', right: '80px' }}
      animate={{
        scale: [1, 1.4, 1],
        rotate: [0, -180, -360],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0L5.61 4.39L10 5L5.61 5.61L5 10L4.39 5.61L0 5L4.39 4.39L5 0Z" fill="#e8628c" opacity="0.20" />
      </svg>
    </motion.div>
  </>
);

const BouncingPlay = () => (
  <motion.div
    animate={{
      y: [0, -6, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    <Play className="w-8 h-8" style={{ color: '#e8628c', fill: '#e8628c' }} />
  </motion.div>
);

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const scroll = () => {
      if (!isHovering) {
        scrollPositionRef.current += 0.5;
        ticker.scrollLeft = scrollPositionRef.current;

        if (ticker.scrollLeft >= ticker.scrollWidth / 2) {
          scrollPositionRef.current = 0;
          ticker.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const duplicatedVideos = [...videos, ...videos];

  return (
    <>
      <section
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: '#fffaf7' }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 mb-12">
          <div className="relative">
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
              Quick peeks at Gangnam
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
                  color: '#2d2926',
                }}
              >
                Catch Gangnam in a Moment
              </motion.h2>

              <BouncingPlay />
            </div>

            <div className="hidden md:block">
              <SparkleStars />
            </div>
          </div>
        </div>

        {/* Desktop Ticker */}
        <div className="hidden md:block relative">
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: '100px',
              background: 'linear-gradient(to right, rgba(255, 250, 247, 0.90), transparent)',
            }}
          />

          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: '100px',
              background: 'linear-gradient(to left, rgba(255, 250, 247, 0.90), transparent)',
            }}
          />

          <div
            ref={tickerRef}
            className="flex gap-5 overflow-x-hidden"
            style={{
              scrollBehavior: 'auto',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredId(null);
            }}
          >
            {duplicatedVideos.map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                className="flex-shrink-0 cursor-pointer relative group"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ width: '180px' }}
              >
                <div
                  className="rounded-2xl overflow-hidden relative transition-all duration-300"
                  style={{
                    width: '180px',
                    height: '320px',
                    border: hoveredId === video.id ? '2px solid #e8628c' : '2px solid transparent',
                    boxShadow: hoveredId === video.id
                      ? '0 8px 24px rgba(232, 98, 140, 0.20)'
                      : '0 2px 8px rgba(180, 140, 120, 0.10)',
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${video.thumbnail})`,
                      filter: 'brightness(0.95)',
                    }}
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: 'rgba(255, 220, 200, 0.08)',
                      mixBlendMode: 'multiply',
                    }}
                  />



                  <AnimatePresence>
                    {hoveredId === video.id && <PlayIcon />}
                  </AnimatePresence>
                </div>

                <p
                  className="mt-2 text-center"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#b8a99a',
                  }}
                >
                  {video.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 px-5" style={{ width: 'max-content' }}>
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="flex-shrink-0 cursor-pointer relative snap-start"
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideo(video)}
                style={{ width: '160px' }}
              >
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    width: '160px',
                    height: '284px',
                    border: '2px solid transparent',
                    boxShadow: '0 2px 8px rgba(180, 140, 120, 0.10)',
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${video.thumbnail})`,
                      filter: 'brightness(0.95)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: 'rgba(255, 220, 200, 0.08)',
                      mixBlendMode: 'multiply',
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(255, 250, 247, 0.90)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: '10px solid #e8628c',
                          borderTop: '7px solid transparent',
                          borderBottom: '7px solid transparent',
                          marginLeft: '2px',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <p
                  className="mt-2 text-center"
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#b8a99a',
                  }}
                >
                  {video.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{
              backgroundColor: 'rgba(58, 58, 74, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 md:-top-16 md:-right-16 p-2 rounded-full transition-transform hover:scale-110"
                style={{
                  backgroundColor: 'rgba(255, 250, 247, 0.90)',
                  color: '#2d2926',
                }}
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  paddingBottom: '56.25%',
                  boxShadow: '0 20px 60px rgba(180, 140, 120, 0.3)',
                }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 text-center">
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'rgba(255, 250, 247, 0.7)',
                    marginBottom: '4px',
                  }}
                >
                  {selectedVideo.category}
                </p>
                <h3
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'rgba(255, 250, 247, 0.95)',
                  }}
                >
                  {selectedVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
