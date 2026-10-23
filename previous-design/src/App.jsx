import Admissions from './components/Admissions';
import CampusLife from './components/CampusLife';
import Disclosures from './components/Disclosures';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Programmes from './components/Programmes';
import ScrollProgress from './components/ScrollProgress';
import Stats from './components/Stats';
import TopBar from './components/TopBar';
import WhyVipw from './components/WhyVipw';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <WhyVipw />
        <Programmes />
        <Admissions />
        <CampusLife />
        <Disclosures />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
