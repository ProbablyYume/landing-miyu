import { LanguageProvider } from '../i18n/languageContext';
import Hero from './Hero';
import CurrentChallenge from './CurrentChallenge';
import About from './About';
import OtherContentV2 from './OtherContentV2';
import Footer from './Footer';
import LanguageSelector from './LanguageSelector';
import SectionDivider from './SectionDivider';
import { otherContentData } from '../data/otherContentData';

export default function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <CurrentChallenge />
      <SectionDivider />
      <OtherContentV2 games={otherContentData} />
      <SectionDivider />
      <Footer />
    </LanguageProvider>
  );
}
