import About from './components/About';
import AdmissionCta from './components/AdmissionCta';
import Counters from './components/Counters';
import Departments from './components/Departments';
import Disclosures from './components/Disclosures';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Principal from './components/Principal';
import Programmes from './components/Programmes';
import TopBar from './components/TopBar';
import VideoBlock from './components/VideoBlock';
import WhyChoose from './components/WhyChoose';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Principal />
        <Counters />
        <Programmes />
        <VideoBlock />
        <WhyChoose />
        <AdmissionCta />
        <Departments />
        <Enquiry />
        <Gallery />
        <Disclosures />
      </main>
      <Footer />
    </>
  );
}
