import { Hero } from './components/Hero';
import { ThemedDestinations } from './components/ThemedDestinations';
import { StoryBookScroll } from './components/StoryBookScroll';
import { TreasureMap } from './components/TreasureMap';
import { HallyuTourismCourses } from './components/HallyuTourismCourses';
import { EditorialStories } from './components/EditorialStories';
import { PeopleOfGangnam } from './components/PeopleOfGangnam';
import { CulturalEvents } from './components/CulturalEvents';
import { VideoShowcase } from './components/VideoShowcase';
import { CTAFooter } from './components/CTAFooter';
import { FAQ } from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen" style={{
      fontFamily: 'Pretendard, -apple-system, sans-serif',
      backgroundColor: '#fffaf7',
      color: '#2d2926'
    }}>
      <Hero />
      <ThemedDestinations />
      <StoryBookScroll />
      <TreasureMap />
      <HallyuTourismCourses />
      <EditorialStories />
      <PeopleOfGangnam />
      <CulturalEvents />
      <VideoShowcase />
      <FAQ />
      <CTAFooter />
    </div>
  );
}