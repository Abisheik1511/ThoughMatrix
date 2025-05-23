import './App.css';
import DesignedCarousal from './components/DesignedCarousel/DesignedCarousel';
import Footer from './components/Footer/Footer';
import FreashIdeaCarousel from './components/FreashIdeaCarousel/FreashIdeaCarousel';
import FullService from './components/FullService/FullService';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import MarketCarousal from './components/MarketCarousal/MarketCasousal';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <div>
      <Navbar />
      <HeroCarousel/>
      <MarketCarousal/>
      <FullService/>
      <DesignedCarousal/>
      <FreashIdeaCarousel/>
      <Footer/>
    </div>
  )
}

export default App
