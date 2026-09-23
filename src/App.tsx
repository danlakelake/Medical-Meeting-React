import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTopBtn';
import {Hero, About, Specialties, Testimonials, Location, Contact} from "./components/sections";

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Specialties/>
    <Testimonials/>
    <Location/>
    <Contact/>
    <Footer/>
    <BackToTop/>
    </>
  )
}

export default App
