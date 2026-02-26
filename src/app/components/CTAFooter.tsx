import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Instagram, Youtube, Facebook, Heart } from 'lucide-react';

interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  isHeart: boolean;
}

const confettiColors = ['#f9c8d9', '#c8f9d5', '#c8d5f9', '#f9ecc8', '#e8628c'];

const legalLinks = [
  '이용약관',
  '기업상품 약관',
  '법적고지',
  '개인정보처리방침',
  '윤리위반신고',
  '사이트맵',
];

const partners = [
  'Gangnam-gu',
  'Gangnam Foundation for Arts & Culture',
  'VISIT SEOUL NET',
  'Korea Tourism Organization',
];

const SkylineIllustration = () => (
  <svg viewBox="0 0 1200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
    <path
      d="M0 48V32h20V24h16V16h20V8h16v8h24V8h20v16h16v8h24v-8h20V8h16v16h24V16h20v8h16v8h24v-8h20V16h16v16h24V24h20v8h16v8h24v-8h20V24h16v8h24V24h20v8h16v16h24V32h20v16h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8h24V40h20v8H0z"
      fill="white"
      fillOpacity="0.4"
    />
  </svg>
);

export function CTAFooter() {
  const [confettiParticles, setConfettiParticles] = useState<Confetti[]>([]);

  const handleCTAClick = () => {
    const particles: Confetti[] = [];
    const count = Math.floor(Math.random() * 6) + 15;

    for (let i = 0; i < count; i++) {
      particles.push({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        isHeart: Math.random() > 0.7,
      });
    }

    setConfettiParticles(particles);

    setTimeout(() => {
      setConfettiParticles([]);
    }, 1500);
  };

  return (
    <>
      {/* CTA Section */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          minHeight: 'clamp(400px, 65vh, 700px)',
          backgroundImage: 'url(https://images.unsplash.com/photo-1637073759376-3e1a38e1e84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEdhbmduYW0lMjBza3lsaW5lJTIwZ29sZGVuJTIwaG91ciUyMHN1bnNldCUyMHdhcm18ZW58MXx8fHwxNzcxNTkwNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(220, 140, 100, 0.45) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[720px] mx-auto px-5 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: 'clamp(36px, 6vw, 60px)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.01em',
              textShadow: '0 0 40px rgba(220, 140, 100, 0.4)',
              lineHeight: '1.1',
            }}
          >
            Your Gangnam Story Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.6',
            }}
          >
            Join thousands of travelers who've discovered the heart of Seoul's most vibrant district
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onClick={handleCTAClick}
                className="px-8 rounded-full relative overflow-visible"
                style={{
                  backgroundColor: '#e20047',
                  color: 'white',
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  height: '52px',
                  boxShadow: '0 8px 24px rgba(226, 0, 71, 0.3)',
                  minWidth: '200px',
                }}
              >
                여행지도 보기
              </motion.button>

              <AnimatePresence>
                {confettiParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                    animate={{
                      x: particle.x,
                      y: particle.y,
                      opacity: 0,
                      scale: 1,
                      rotate: Math.random() * 360,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  >
                    {particle.isHeart ? (
                      <Heart
                        className="w-4 h-4"
                        style={{ color: particle.color, fill: particle.color }}
                      />
                    ) : (
                      <div
                        className="rounded-full"
                        style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: particle.color,
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 250, 247, 0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-8 rounded-full flex items-center gap-2"
              style={{
                border: '1px solid white',
                backgroundColor: 'rgba(255, 250, 247, 0)',
                color: 'white',
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                height: '52px',
                minWidth: '200px',
              }}
            >
              <Download className="w-4 h-4" />
              Download Guide Book
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative"
        style={{ backgroundColor: '#3d3835' }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:w-[35%]">
              <img src="/images/logo-gangnam.png" alt="강남구" className="mb-4 h-8" />
              <p
                className="mb-6"
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#c4b8ad',
                  lineHeight: '1.6',
                }}
              >
                Discover the heartbeat of Seoul in Gangnam's vibrant streets, cozy cafés, and endless adventures.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                  { icon: Facebook, label: 'Facebook' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="flex items-center justify-center"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#c4b8ad',
                    }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Legal Links & Contact Info */}
            <div className="md:w-[65%]">
              {/* Legal Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                {legalLinks.map((link, index) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '14px',
                      fontWeight: index === 3 ? 700 : 500,
                      color: index === 3 ? 'white' : '#c4b8ad',
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#c4b8ad',
                    }}
                  >
                    02-3423-5114 (120 다산 콜센터로 연결)
                  </p>
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#c4b8ad',
                    }}
                  >
                    02-3423-6000~3 (당직실 / 야간·공휴일)
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(196, 184, 173, 0.7)',
                  }}
                >
                  06090, 서울특별시 강남구 학동로 426 (삼성동)
                </p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="mb-12">
            <p
              className="mb-4 text-center"
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.55)',
                textTransform: 'lowercase',
              }}
            >
              our partners
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {partners.map((partner) => (
                <span
                  key={partner}
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <p
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#c4b8ad',
                }}
              >
                ©2022 GANGNAM-GU OFFICE, ALL RIGHTS RESERVED.
              </p>

              <div className="flex items-center gap-2">
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
                  <Heart className="w-3 h-3" style={{ color: '#e8628c', fill: '#e8628c' }} />
                </motion.div>
                <p
                  style={{
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#c4b8ad',
                  }}
                >
                  Made with love in Gangnam
                </p>
              </div>
            </div>

            {/* Illustrated Skyline */}
            <div className="w-full max-w-3xl mx-auto">
              <SkylineIllustration />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
