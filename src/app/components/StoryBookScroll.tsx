import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Coffee, ShoppingBag, Camera, Sun, Moon } from 'lucide-react';

const WalkIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4088 28.2609L15.0824 21.5379L12.4521 18.1752C12.0635 17.5177 11.8585 16.768 11.8586 16.0043V8.4375M11.8586 8.4375H12.7768C13.0863 8.43742 13.3928 8.49832 13.6788 8.61672C13.9648 8.73512 14.2246 8.90869 14.4435 9.12754C14.6624 9.34638 14.8361 9.6062 14.9545 9.89216C15.073 10.1781 15.134 10.4846 15.134 10.7941V21.5379M11.8586 8.4375C9.67539 8.4375 7.49219 12.8045 7.49219 12.8045V17.1709M21.6836 16.0793L17.8105 13.5352M9.99004 28.0289L13.123 23.4375" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.1363 6.25605C16.3421 6.25605 17.3195 5.2786 17.3195 4.07285C17.3195 2.8671 16.3421 1.88965 15.1363 1.88965C13.9306 1.88965 12.9531 2.8671 12.9531 4.07285C12.9531 5.2786 13.9306 6.25605 15.1363 6.25605Z" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const chapters = [
  {
    id: 1,
    time: 'Morning',
    image: '/images/story-morning.png',
    overlay: 'rgba(255, 220, 100, 0.18)',
    activities: [
      { icon: WalkIcon, title: '봉은사', subtitle: '빌딩 숲 사이 자리한 천년 고찰에서 맑은 아침 공기와 함께 차분한 산책으로 하루를 시작해 보세요.' },
      { icon: WalkIcon, title: '선릉·정릉(선정릉)', subtitle: '복잡한 도심 한가운데서 옛 왕가의 무덤을 거닐며 고즈넉한 아침 풍경을 맞이하기 좋습니다.' },
    ],
  },
  {
    id: 2,
    time: 'Afternoon',
    image: '/images/story-afternoon.png',
    overlay: 'transparent',
    activities: [
      { icon: ShoppingBag, title: '코엑스 & 별마당 도서관', subtitle: '상징적인 별마당 도서관에서의 여유와 다채로운 실내 쇼핑, 대형 3D 전광판까지 한곳에서 즐겨보세요.' },
      { icon: Coffee, title: '가로수길 & 압구정 로데오거리', subtitle: '감각적인 카페와 팝업 스토어, 패션 숍이 가득한 강남의 가장 트렌디한 핫플레이스를 경험해 보세요.' },
    ],
  },
  {
    id: 3,
    time: 'Night',
    image: '/images/story-night.png',
    overlay: 'rgba(58, 58, 74, 0.45)',
    activities: [
      { icon: Camera, title: '청담대교 야경', subtitle: '한강을 가로지르는 대교와 화려한 도심의 불빛이 어우러진 강남의 대표적인 야경 감상 포인트입니다.' },
      { icon: Camera, title: '강남역 주변', subtitle: '화려한 네온사인과 맛집, 문화 시설이 어우러진 강남의 역동적인 밤을 경험해 보세요.' },
    ],
  },
];

const SunMoonArc = ({ progress }: { progress: number }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const getPointOnPath = (progress: number) => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const point = pathRef.current.getPointAtLength(progress * pathLength);
    return { x: point.x, y: point.y };
  };

  const position = getPointOnPath(progress);
  const isMorning = progress < 0.5;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] z-30 pointer-events-none hidden md:block">
      <svg viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          ref={pathRef}
          d="M 50 100 Q 500 20, 950 100"
          stroke="#e8628c"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.5"
          fill="none"
        />
        {pathLength > 0 && (
          <g transform={`translate(${position.x}, ${position.y})`}>
            <circle r="24" fill="white" opacity="0.9" filter="drop-shadow(0 2px 8px rgba(232, 98, 140, 0.3))" />
            {isMorning ? (
              <g transform="translate(-10, -10)">
                <Sun className="w-5 h-5" style={{ color: '#e8628c' }} />
              </g>
            ) : (
              <g transform="translate(-10, -10)">
                <Moon className="w-5 h-5" style={{ color: '#e8628c' }} />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};

export function StoryBookScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const chapterIndex = Math.min(Math.floor(latest * 3), 2);
      setCurrentChapter(chapterIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const arcProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [arcValue, setArcValue] = useState(0);

  useEffect(() => {
    const unsubscribe = arcProgress.on('change', setArcValue);
    return () => unsubscribe();
  }, [arcProgress]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh', position: 'relative' }}>
      {/* Sun/Moon Arc */}
      {arcValue > 0.01 && arcValue < 0.99 && <SunMoonArc progress={arcValue} />}

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {chapters.map((chapter, index) => {
            const isLast = index === chapters.length - 1;
            const opacity = useTransform(
              scrollYProgress,
              isLast
                ? [(index - 0.2) / 3, index / 3]
                : [
                    (index - 0.2) / 3,
                    index / 3,
                    (index + 0.8) / 3,
                    (index + 1) / 3,
                  ],
              isLast ? [0, 1] : [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={chapter.id}
                style={{ opacity }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${chapter.image})`,
                    filter: 'saturate(1.1)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: chapter.overlay }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Chapter Label */}
        <div className="absolute bottom-12 left-5 md:left-20 z-10">
          <motion.h2
            key={currentChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: 800,
              color: 'white',
              textShadow: '0 0 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            {chapters[currentChapter].time}
          </motion.h2>
        </div>

        {/* Activity Cards - Desktop */}
        <div className="hidden md:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col gap-6 z-10">
          {chapters[currentChapter].activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={`${currentChapter}-${index}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 flex items-center gap-4"
                style={{
                  width: '420px',
                  boxShadow: '0 4px 20px rgba(180, 140, 120, 0.15)',
                }}
              >
                {/* Hand-drawn Icon */}
                <div
                  className="flex-shrink-0 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl flex items-center justify-center"
                  style={{ width: '56px', height: '56px' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#e8628c' }} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#2d2926',
                      marginBottom: '4px',
                    }}
                  >
                    {activity.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#b8a99a',
                    }}
                  >
                    {activity.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Progress Line */}
        <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[80%] z-30">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${arcValue * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Activity Cards - Stacked Below */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        <div className="h-full flex flex-col">
          {chapters.map((chapter, chapterIndex) => (
            <div
              key={chapter.id}
              className="flex-1 flex items-end justify-center pb-24 pointer-events-auto"
            >
              {currentChapter === chapterIndex && (
                <div className="flex flex-col gap-4 px-5 w-full">
                  {chapter.activities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-3xl p-5 flex items-center gap-4"
                        style={{
                          boxShadow: '0 4px 20px rgba(180, 140, 120, 0.15)',
                        }}
                      >
                        <div
                          className="flex-shrink-0 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl flex items-center justify-center"
                          style={{ width: '48px', height: '48px' }}
                        >
                          <Icon className="w-5 h-5" style={{ color: '#e8628c' }} />
                        </div>

                        <div>
                          <h3
                            style={{
                              fontFamily: 'Pretendard, -apple-system, sans-serif',
                              fontSize: '17px',
                              fontWeight: 700,
                              color: '#2d2926',
                              marginBottom: '4px',
                            }}
                          >
                            {activity.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: 'Pretendard, -apple-system, sans-serif',
                              fontSize: '14px',
                              fontWeight: 400,
                              color: '#b8a99a',
                            }}
                          >
                            {activity.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}