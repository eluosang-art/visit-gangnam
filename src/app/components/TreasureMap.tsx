import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, MapPin, UtensilsCrossed, TrainFront, Droplets } from 'lucide-react';

const landmarks = [
  {
    id: 1,
    name: '강남역',
    icon: TrainFront,
    description: '상업, 대중문화가 가장 활발하게 교차하는 심장부.',
    rating: 4,
    image: '/images/gangnam-station.png',
    x: 38, y: 66,
  },
  {
    id: 2,
    name: '양재천 친환경 생물센터',
    icon: Droplets,
    description: '도심 속 자연 생태를 체험할 수 있는 친환경 공간.',
    rating: 4,
    image: '/images/gangnam-station.png',
    x: 52, y: 60,
  },
  {
    id: 3,
    name: '탄천 대교 센터',
    icon: UtensilsCrossed,
    description: '탄천과 양재천이 만나는 수변 휴식 공간.',
    rating: 5,
    image: '/images/gangnam-station.png',
    x: 62, y: 42,
  },
];

const LandmarkCard = ({ landmark, onClose }: { landmark: typeof landmarks[0]; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    className="bg-white rounded-3xl overflow-hidden"
    style={{ width: '280px', boxShadow: '0 8px 32px rgba(180, 140, 120, 0.2)' }}
  >
    <div className="relative">
      <div
        className="w-full h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${landmark.image})` }}
      />
      <button onClick={onClose} className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors z-10">
        <X className="w-4 h-4" style={{ color: '#2d2926' }} />
      </button>
    </div>
    <div style={{ padding: '24px' }}>
      <h3 style={{ fontFamily: 'Pretendard', fontSize: '18px', fontWeight: 700, color: '#2d2926', marginBottom: '8px' }}>
        {landmark.name}
      </h3>
      <p style={{ fontFamily: 'Pretendard', fontSize: '14px', fontWeight: 400, color: '#b8a99a', marginBottom: '16px', lineHeight: '1.6' }}>
        {landmark.description}
      </p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Heart key={star} className="w-4 h-4" style={{ color: star <= landmark.rating ? '#e8628c' : '#e5e5e5', fill: star <= landmark.rating ? '#e8628c' : 'none' }} />
        ))}
      </div>
    </div>
  </motion.div>
);

export function TreasureMap() {
  const [activeLandmark, setActiveLandmark] = useState<number | null>(null);
  const selectedLandmark = activeLandmark !== null ? landmarks.find(l => l.id === activeLandmark) : null;

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#fffaf7' }}>
      <div className="max-w-[1480px] mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="mb-8">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Pretendard', fontSize: '13px', fontWeight: 600, color: '#b8a99a', textTransform: 'lowercase', marginBottom: '8px' }}>
            navigate your adventure
          </motion.p>
          <div className="flex items-center gap-3">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'Pretendard', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, color: '#2d2926', lineHeight: 1, margin: 0 }}>
              Dulle-gil Map
            </motion.h2>
            <motion.div
              animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/images/icon-map.svg" alt="map" className="w-10 h-10" />
            </motion.div>
          </div>
        </div>

        {/* Map + Card Row */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Map Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{
              width: '950px',
              height: '540px',
              maxWidth: '100%',
              backgroundColor: '#fef9f4',
              borderRadius: '24px',
              border: '1px solid #f0ebe6',
              boxShadow: '0 4px 20px rgba(180, 140, 120, 0.12)',
              flexShrink: 0,
            }}
          >
            {/* Map Image */}
            <div className="w-full h-full flex items-center justify-center p-6">
              <img
                src="/images/dulle-gil-map.png"
                alt="강남 둘레길 지도"
                className="h-auto"
                style={{ maxWidth: '80%', maxHeight: '80%' }}
              />
            </div>

            {/* Landmark Icons on Map */}
            {landmarks.map((landmark) => {
              const Icon = landmark.icon;
              return (
              <button
                key={landmark.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${landmark.x}%`,
                  top: `${landmark.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 6,
                }}
                onClick={() => setActiveLandmark(activeLandmark === landmark.id ? null : landmark.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-white flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
                    border: activeLandmark === landmark.id ? '2px solid #e8628c' : '2px solid transparent',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: activeLandmark === landmark.id ? '#e8628c' : '#b8a99a', transition: 'color 0.2s ease' }} />
                </motion.div>
                <div
                  className="flex items-center justify-center mt-1"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '12px',
                    padding: '2px 8px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    whiteSpace: 'nowrap',
                    border: activeLandmark === landmark.id ? '1.5px solid #e8628c' : '1.5px solid transparent',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <p style={{ fontSize: '11px', fontWeight: 600, color: activeLandmark === landmark.id ? '#e8628c' : '#2d2926', fontFamily: 'Pretendard', textAlign: 'center', transition: 'color 0.2s ease' }}>
                    {landmark.name}
                  </p>
                </div>
              </button>
              );
            })}
          </motion.div>

          {/* Card Area */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-1 min-w-[280px]">
            <AnimatePresence mode="wait">
              {selectedLandmark ? (
                <LandmarkCard key={selectedLandmark.id} landmark={selectedLandmark} onClose={() => setActiveLandmark(null)} />
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl p-8 text-center"
                  style={{ width: '280px', boxShadow: '0 8px 32px rgba(180, 140, 120, 0.15)' }}
                >
                  <MapPin className="w-10 h-10 mx-auto mb-3" style={{ color: '#e8628c', opacity: 0.3 }} />
                  <p style={{ fontFamily: 'Pretendard', fontSize: '14px', fontWeight: 400, color: '#b8a99a' }}>
                    아이콘을 선택하여<br />주변 내용을 확인하세요
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Card */}
        <div className="lg:hidden mt-6">
          <AnimatePresence mode="wait">
            {selectedLandmark && (
              <LandmarkCard key={selectedLandmark.id} landmark={selectedLandmark} onClose={() => setActiveLandmark(null)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
