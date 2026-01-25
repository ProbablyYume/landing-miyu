import { LanguageProvider } from '../i18n/languageContext';
import Hero from './Hero';
import CurrentChallenge from './CurrentChallenge';
import About from './About';
import OtherChallenges from './OtherChallenges';
import Socials from './Socials';
import Footer from './Footer';
import LanguageSelector from './LanguageSelector';
import SectionDivider from './SectionDivider';

export default function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Hero />
      <SectionDivider />
      <CurrentChallenge />
      <SectionDivider />
      <About />
      <SectionDivider />
      <OtherChallenges />
      <SectionDivider />
      <Socials />
      <Footer />
    </LanguageProvider>
  );
}
