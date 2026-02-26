import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: '강남페스티벌은 언제 열리나요?',
    answer: '강남 페스티벌은 매년 가을 (10월경)에 개최됩니다. 2026년 일정은 확정 후 비짓강남 홈페이지에서 안내드릴 예정입니다.',
  },
  {
    id: 2,
    question: '강남 둘레길 코스는 어떻게 이용하나요?',
    answer: '강남 둘레길은 총 6개 코스로 구성되어 있으며, 누구나 무료로 이용 가능합니다. 각 코스별 출발점과 안내 표지판이 설치되어 있어 편리하게 걸을 수 있습니다.',
  },
  {
    id: 3,
    question: '외국인 관광객을 위한 서비스가 있나요?',
    answer: '강남 관광안내소에서 영어, 중국어, 일본어 안내 서비스를 제공하고 있으며, 다국어 관광 지도와 가이드북을 무료로 배포하고 있습니다.',
  },
  {
    id: 4,
    question: '강남 지역 대중교통은 어떻게 이용하나요?',
    answer: '지하철 2호선, 분당선, 신분당선 등 다양한 노선이 강남을 지나며, 버스 노선도 촘촘하게 연결되어 있습니다. 교통카드 한 장이면 편리하게 이동할 수 있습니다.',
  },
  {
    id: 5,
    question: '추천 당일 관광 코스가 있나요?',
    answer: '강남역 출발 → 카페거리 탐방 → 봉은사 방문 → 코엑스몰 쇼핑 → 한강공원 석양 감상 코스를 추천합니다. 비짓강남 홈페이지에서 더 다양한 코스를 확인하세요.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="relative py-20"
      style={{ backgroundColor: '#fef9f4' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
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
              color: '#b8a99a',
              textTransform: 'lowercase',
              marginBottom: '8px',
            }}
          >
            customer support
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
              FAQ
            </motion.h2>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HelpCircle className="w-8 h-8" style={{ color: '#e8628c' }} />
            </motion.div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[1400px] mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: faq.id * 0.05 }}
                className="mb-4"
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? 'white' : 'transparent',
                    border: isOpen ? '1px solid #f9d5e5' : '1px solid transparent',
                    boxShadow: isOpen ? '0 4px 20px rgba(232, 98, 140, 0.08)' : 'none',
                  }}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span
                      style={{
                        fontFamily: 'Pretendard, -apple-system, sans-serif',
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#2d2926',
                      }}
                    >
                      {faq.question}
                    </span>

                    <div
                      className="flex-shrink-0 ml-4 flex items-center justify-center"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: isOpen ? '50%' : '8px',
                        backgroundColor: isOpen ? '#e8628c' : 'transparent',
                        border: isOpen ? '1px solid #e8628c' : '1px solid #f9d5e5',
                        color: isOpen ? 'white' : '#e8628c',
                        transition: 'border-radius 0.3s, background-color 0.3s, color 0.3s',
                      }}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p
                            style={{
                              fontFamily: 'Pretendard, -apple-system, sans-serif',
                              fontSize: '15px',
                              fontWeight: 400,
                              color: '#7a7067',
                              lineHeight: '1.7',
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
