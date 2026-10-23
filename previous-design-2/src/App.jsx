import Contents from './components/Contents';
import Elements from './components/Elements';
import Enquiry from './components/Enquiry';
import FilmStrip from './components/FilmStrip';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Ledger from './components/Ledger';
import Masthead from './components/Masthead';
import Monographs from './components/Monographs';
import NoticeBar from './components/NoticeBar';
import Prescription from './components/Prescription';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <NoticeBar />
      <Masthead />
      <main id="main">
        <Hero />
        <Ledger />
        <Elements />
        <Monographs />
        <Prescription />
        <FilmStrip />
        <Contents />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
