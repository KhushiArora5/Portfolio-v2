import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Exp from './Components/Experience/Exp';
import Services from './Components/Services/Services';
import Testi from './Components/Testimonials/Testi';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Exp />
      <Services />
      <Testi />
      <Contact />
      <Footer />
    </>
  );
} 

export default App;