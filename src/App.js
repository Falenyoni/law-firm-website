import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id="home"/>
      <AboutPage id="about"/>
      <ServicesSection id="services"/>
      <ContactSection id="contact"/>
      <Footer id="home"/>
      
    </div>
  );
}

export default App;
