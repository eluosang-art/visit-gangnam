import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Stories', bg: '#e8628c', text: 'white' },
  { id: 'oneday', name: '원데이 코스', bg: '#fef0ec', text: '#e8628c' },
  { id: 'hallyu', name: '한류 관광 코스', bg: '#fef4ec', text: '#c07840' },
  { id: 'local', name: '로컬 추천 코스', bg: '#f0faf5', text: '#4a9a6a' },
];

const stories = [
  {
    id: 1,
    featured: true,
    title: 'K-라이프스타일 따라잡기',
    category: 'oneday',
    categoryLabel: '원데이 코스',
    categoryBg: '#fef0ec',
    categoryText: '#e8628c',
    image: '/images/story-lifestyle.png',
    readTime: '',
  },
  {
    id: 2,
    featured: false,
    title: 'K-체험 데이',
    category: 'hallyu',
    categoryLabel: '한류 관광',
    categoryBg: '#fef4ec',
    categoryText: '#c07840',
    image: '/images/story-kexperience.png',
    readTime: '',
  },
  {
    id: 3,
    featured: false,
    title: 'Dessert 달콤한 강남 디저트 로드',
    category: 'local',
    categoryLabel: '로컬 추천',
    categoryBg: '#f0faf5',
    categoryText: '#4a9a6a',
    image: '/images/story-dessert.png',
    readTime: '',
  },
  {
    id: 4,
    featured: false,
    title: '한옥의 미를 만나다',
    category: 'oneday',
    categoryLabel: '원데이 코스',
    categoryBg: '#fef0ec',
    categoryText: '#e8628c',
    image: '/images/story-hanok.png',
    readTime: '',
  },
  {
    id: 5,
    featured: false,
    title: '오감이 즐거운 공연 예술',
    category: 'hallyu',
    categoryLabel: '한류 관광',
    categoryBg: '#fef4ec',
    categoryText: '#c07840',
    image: '/images/story-performance.png',
    readTime: '',
  },
  {
    id: 6,
    featured: false,
    title: '감성 로컬을 여행하다. 은마상가',
    category: 'oneday',
    categoryLabel: '원데이 코스',
    categoryBg: '#fef0ec',
    categoryText: '#e8628c',
    image: '/images/story-eunma.png',
    readTime: '',
  },
];

const BlobDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path
        d="M0,64 C240,32 480,96 720,80 C960,64 1200,32 1440,48 L1440,120 L0,120 Z"
        fill="#fffaf7"
      />
    </svg>
  </div>
);

const SparkleStars = () => (
  <>
    <motion.div
      className="absolute"
      style={{ top: '0px', right: '100px' }}
      animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L6.732 5.268L12 6L6.732 6.732L6 12L5.268 6.732L0 6L5.268 5.268L6 0Z" fill="#e8628c" opacity="0.25" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '16px', right: '60px' }}
      animate={{ scale: [1, 1.4, 1], rotate: [0, -180, -360] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L7.854 6.146L14 7L7.854 7.854L7 14L6.146 7.854L0 7L6.146 6.146L7 0Z" fill="#e8628c" opacity="0.25" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '8px', left: '200px' }}
      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0L5.61 4.39L10 5L5.61 5.61L5 10L4.39 5.61L0 5L4.39 4.39L5 0Z" fill="#e8628c" opacity="0.25" />
      </svg>
    </motion.div>
  </>
);

export function EditorialStories() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStories = activeFilter === 'all'
    ? stories
    : stories.filter(story => story.category === activeFilter);

  const featuredStory = filteredStories.find(s => s.featured) || filteredStories[0];
  const regularStories = filteredStories.filter(s => !s.featured && s.id !== featuredStory.id);

  return (
    <>
      {/* Top Blob Divider */}
      <BlobDivider />

      <section
        className="relative py-20"
        style={{ backgroundColor: '#fffaf7' }}
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
              Stories that make you want to pack
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
                  textShadow: '0 0 20px rgba(232, 98, 140, 0.08)',
                }}
              >
                Gangnam Stories
              </motion.h2>

              <motion.div
                animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Briefcase className="w-10 h-10" style={{ color: '#e8628c' }} />
              </motion.div>
            </div>

            {/* Sparkle Stars */}
            <div className="hidden md:block">
              <SparkleStars />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max md:min-w-0">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="px-5 py-2.5 rounded-full transition-all"
                  style={{
                    backgroundColor: activeFilter === category.id ? category.bg : '#f5ede8',
                    color: activeFilter === category.id ? category.text : '#b8a99a',
                    fontFamily: 'Pretendard, -apple-system, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: activeFilter === category.id ? 'none' : '1px solid #f0ebe6',
                  }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Featured Story */}
          {featuredStory && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden relative group cursor-pointer"
              style={{ boxShadow: '0 4px 20px rgba(180, 140, 120, 0.12)' }}
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${featuredStory.image})`,
                    filter: 'brightness(0.9)',
                  }}
                />

                {/* Frosted Glass Panel */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
                  style={{
                    background: 'rgba(255, 250, 247, 0.70)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                  }}
                >
                  {/* Category Pill */}
                  <div
                    className="inline-block px-3 py-1 rounded-full mb-4"
                    style={{
                      backgroundColor: featuredStory.categoryBg,
                      color: featuredStory.categoryText,
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {featuredStory.categoryLabel}
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: 'clamp(24px, 3vw, 30px)',
                      fontWeight: 700,
                      color: '#2d2926',
                      lineHeight: '1.3',
                    }}
                  >
                    {featuredStory.title}
                  </h3>

                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -4,
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
                  {/* Thumbnail */}
                  <div className="p-4">
                    <div
                      className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden"
                      style={{
                        backgroundImage: `url(${story.image})`,
                        filter: 'brightness(0.95)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-4">
                    {/* Category Pill */}
                    <div
                      className="inline-block px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor: story.categoryBg,
                        color: story.categoryText,
                        fontFamily: 'Pretendard, -apple-system, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      {story.categoryLabel}
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'Pretendard, -apple-system, sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#2d2926',
                        lineHeight: '1.4',
                      }}
                    >
                      {story.title}
                    </h3>

                    {/* Read Link */}
                    <div className="flex items-center justify-end">
                      <motion.div
                        className="flex items-center gap-1"
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
                          Read
                        </span>
                        <ArrowRight className="w-4 h-4" style={{ color: '#e8628c' }} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Blob Divider */}
      <BlobDivider flip />
    </>
  );
}
