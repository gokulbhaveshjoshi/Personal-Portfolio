import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import MySkills from './components/MySkills/MySkills';
import MyServices from './components/MyServices/MyServices';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='main-container'>
        <Home />
        <About />
        <MySkills />
        <MyServices />
        <MyPortfolio />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
