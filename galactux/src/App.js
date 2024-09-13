import './App.css';
import Home from './components/Sections/Home';
import Clients from './components/Sections/Clients';
import AboutUs from './components/Sections/AboutUs';
import Career from './components/Sections/Career';
import Discover from './components/Sections/Discover';
import OurWork from './components/Sections/OurWork';
import Testimonial from './components/Sections/Testimonial';
import Plan from './components/Sections/Plan';
import Footer from './components/Sections/Footer';
import UseIntersectionObserver from './components/Reuse/UseIntersectionObserver';
function App() {

  UseIntersectionObserver("scale-out", "scale-in");
  UseIntersectionObserver("move-out-left", "move-in");
  UseIntersectionObserver("move-out-right", "move-in");
  UseIntersectionObserver("move-out-top", "move-in");

  return (
    <div id="App">
      <Home />
      <Clients />
      <AboutUs />
      <Career />
      <Discover />
      <OurWork />
      <Testimonial />
      <Plan />
      <Footer />
    </div>
  );

}

export default App;
