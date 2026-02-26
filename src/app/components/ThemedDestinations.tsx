import { motion } from 'motion/react';
import { Compass, Trees, UtensilsCrossed, Palette, ShoppingBag, Building2, Hotel } from 'lucide-react';

const StoreIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.92773 11.97C4.27292 11.97 4.61548 11.895 4.93442 11.7512C5.26 11.6046 5.55039 11.3956 5.78755 11.1375C6.03167 10.875 6.22461 10.5625 6.35586 10.22C6.48711 9.87749 6.55273 9.50999 6.55273 9.13999C6.54651 9.86994 6.81997 10.577 7.32186 11.1287C7.81405 11.6562 8.48211 11.9525 9.17773 11.9525C9.87336 11.9525 10.5427 11.6562 11.0336 11.1287C11.5355 10.577 11.809 9.86994 11.8027 9.13999C11.7965 9.86994 12.07 10.577 12.5719 11.1287C13.064 11.6562 13.7321 11.9525 14.4277 11.9525C15.1234 11.9525 15.7927 11.6562 16.2836 11.1287C16.7855 10.577 17.059 9.86994 17.0527 9.13999C17.0527 9.50874 17.121 9.87499 17.2522 10.2162C17.3835 10.5575 17.5777 10.8675 17.8219 11.1287C18.059 11.3854 18.3489 11.593 18.6737 11.7387C18.9878 11.8792 19.3307 11.952 19.6777 11.952C20.0248 11.952 20.3676 11.8792 20.6818 11.7387C21.007 11.5932 21.2974 11.3855 21.5349 11.1287C21.7777 10.8675 21.9707 10.5575 22.1032 10.2162C22.2358 9.87499 22.3027 9.50874 22.3027 9.13999C22.3027 7.92249 20.8485 4.32749 20.1791 2.73875C20.0829 2.51046 19.9168 2.31505 19.7024 2.17793C19.4879 2.04082 19.2351 1.96837 18.9769 1.97H4.52623C4.26064 1.96947 4.00126 2.04647 3.78302 2.19062C3.56478 2.33478 3.39816 2.53916 3.30561 2.77625C2.6743 4.42249 1.30273 8.10124 1.30273 9.13999C1.33292 9.87749 1.61905 10.575 2.10467 11.0987C2.5903 11.6212 3.23998 11.9325 3.92773 11.97ZM3.92773 11.97C4.35823 11.97 4.78217 11.8562 5.16148 11.6375C5.55145 11.411 5.87618 11.0957 6.10648 10.72H7.0003C7.22987 11.0954 7.55367 11.4106 7.94267 11.6375C8.3233 11.8562 8.74723 11.97 9.17905 11.97C9.61086 11.97 10.0335 11.8562 10.4128 11.6375C10.7934 11.42 11.1176 11.1037 11.3565 10.72H12.2503C12.4802 11.0955 12.8045 11.4108 13.194 11.6375C13.5733 11.8562 13.9972 11.97 14.4277 11.97C14.8595 11.97 15.2835 11.8562 15.6641 11.6375C16.0447 11.42 16.3676 11.1037 16.6065 10.72H17.5003C17.7405 11.1037 18.0647 11.42 18.444 11.6375C18.8246 11.855 19.2485 11.97 19.679 11.97C20.1799 11.9679 20.6671 11.8142 21.0703 11.5312M3.92773 11.97C3.35963 11.9561 2.81657 11.7445 2.4013 11.375M2.61523 11.97V20.72C2.61523 21.0515 2.75352 21.3694 2.99966 21.6039C3.2458 21.8383 3.57964 21.97 3.92773 21.97H6.55273V15.72H10.4902V21.97H19.6777C20.0258 21.97 20.3597 21.8383 20.6058 21.6039C20.852 21.3694 20.9902 21.0515 20.9902 20.72V11.97M14.4277 15.72V18.22H17.0527V15.72H14.4277Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9625 17.8359C14.4799 17.8359 17.3313 14.9845 17.3313 11.4672C17.3313 7.94978 14.4799 5.09839 10.9625 5.09839C7.44515 5.09839 4.59375 7.94978 4.59375 11.4672C4.59375 14.9845 7.44515 17.8359 10.9625 17.8359Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M16.0078 16.083L20.0078 20.083" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const themes = [
  {
    id: 1,
    name: '빌딩숲속 그린힐링',
    teaser: '도심 속 자연이 주는 여유로운 휴식.',
    image: '/images/theme-healing.png',
    icon: Trees,
    tint: 'rgba(0, 200, 120, 0.05)',
  },
  {
    id: 2,
    name: '강슐랭 가이드',
    teaser: '로컬 맛집부터 파인다이닝까지.',
    image: '/images/theme-food.png',
    icon: UtensilsCrossed,
    tint: 'rgba(255, 130, 80, 0.05)',
  },
  {
    id: 3,
    name: '미술관 옆 박물관',
    teaser: '영감을 채워주는 예술과 문화 공간.',
    image: '/images/theme-museum.png',
    icon: Palette,
    tint: 'rgba(140, 100, 220, 0.05)',
  },
  {
    id: 4,
    name: '쇼핑 가이드',
    teaser: '취향을 완성하는 완벽한 쇼핑 경험.',
    image: '/images/theme-shopping.png',
    icon: ShoppingBag,
    tint: 'rgba(255, 160, 200, 0.05)',
  },
  {
    id: 5,
    name: '플래그쉽 스토어',
    teaser: '브랜드의 철학이 담긴 특별한 공간.',
    image: '/images/theme-flagship.png',
    icon: StoreIcon,
    tint: 'rgba(100, 120, 255, 0.05)',
  },
  {
    id: 6,
    name: '아른다운 건축물',
    teaser: '시선을 사로잡는 감각적인 건축물.',
    image: '/images/theme-architecture.png',
    icon: Building2,
    tint: 'rgba(180, 120, 80, 0.05)',
  },
  {
    id: 7,
    name: '호텔',
    teaser: '완벽한 휴식을 위한 프리미엄 숙소.',
    image: '/images/theme-hotel.png',
    icon: Hotel,
    tint: 'rgba(200, 180, 255, 0.05)',
  },
  {
    id: 8,
    name: '강남 역사속으로',
    teaser: '도심 속에 간직된 오랜 역사의 숨결.',
    image: '/images/theme-history.png',
    icon: SearchIcon,
    tint: 'rgba(220, 140, 100, 0.05)',
  },
];

const BlobDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path
        d="M0,64 C240,32 480,96 720,80 C960,64 1200,32 1440,48 L1440,120 L0,120 Z"
        fill="#fef9f4"
      />
    </svg>
  </div>
);

const SparkleStars = () => (
  <>
    <motion.div
      className="absolute"
      style={{ top: '-8px', right: '120px' }}
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L7.854 6.146L14 7L7.854 7.854L7 14L6.146 7.854L0 7L6.146 6.146L7 0Z" fill="#e8628c" opacity="0.3" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '12px', right: '80px' }}
      animate={{ 
        scale: [1, 1.3, 1],
        rotate: [0, -180, -360],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L6.732 5.268L12 6L6.732 6.732L6 12L5.268 6.732L0 6L5.268 5.268L6 0Z" fill="#e8628c" opacity="0.3" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '20px', left: '180px' }}
      animate={{ 
        scale: [1, 1.4, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L8.976 7.024L16 8L8.976 8.976L8 16L7.024 8.976L0 8L7.024 7.024L8 0Z" fill="#e8628c" opacity="0.3" />
      </svg>
    </motion.div>
  </>
);

export function ThemedDestinations() {
  return (
    <>
      {/* Top Blob Divider */}
      <BlobDivider />

      <section 
        className="relative py-20"
        style={{ backgroundColor: '#fef9f4' }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          {/* Section Heading */}
          <div className="mb-12 relative">
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
              Discover your Gangnam
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
                  textShadow: '0 0 20px rgba(232, 98, 140, 0.10)',
                }}
              >
                Explore Gangnam
              </motion.h2>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Compass className="w-8 h-8" style={{ color: '#e8628c' }} />
              </motion.div>
            </div>

            {/* Sparkle Stars */}
            <div className="hidden md:block">
              <SparkleStars />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -6,
                    transition: { type: 'spring', stiffness: 400, damping: 17 }
                  }}
                  className="group cursor-pointer"
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      border: '1px solid #f0ebe6',
                      boxShadow: '0 2px 12px rgba(180, 140, 120, 0.08)',
                    }}
                  >
                    {/* Image Container with Tint */}
                    <div 
                      className="relative overflow-hidden"
                      style={{ 
                        backgroundColor: theme.tint,
                        padding: '16px 16px 0 16px',
                      }}
                    >
                      <div
                        className="w-full h-48 bg-cover bg-center rounded-xl transition-transform duration-500 group-hover:scale-105"
                        style={{ 
                          backgroundImage: `url(${theme.image})`,
                          filter: 'brightness(0.95) saturate(1.05)',
                        }}
                      />
                      
                      {/* Floating Icon */}
                      <motion.div
                        className="absolute top-6 right-6 bg-white rounded-full flex items-center justify-center"
                        style={{
                          width: '32px',
                          height: '32px',
                          boxShadow: '0 2px 8px rgba(180, 140, 120, 0.12)',
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className="w-4 h-4" style={{ color: '#e8628c' }} />
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '16px' }}>
                      <h3
                        style={{
                          fontFamily: 'Pretendard, -apple-system, sans-serif',
                          fontSize: '17px',
                          fontWeight: 700,
                          color: '#2d2926',
                          marginBottom: '8px',
                        }}
                      >
                        {theme.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Pretendard, -apple-system, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#b8a99a',
                        }}
                      >
                        {theme.teaser}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Blob Divider */}
      <BlobDivider flip />
    </>
  );
}
