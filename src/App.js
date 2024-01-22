import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './/Components/Navbar';
import Home from './Components/Home';
import Activities from './Components/Activities';
import Booking from './Components/Booking';
import Gallery from './Components/Gallery';
import Contact from './Components/Contacts';
import Footer from './Components/Footer';
import Headroom from 'react-headroom';

function App() {
  return (
   <>

    <Topbar />

    <Headroom>
      <Navbar />
    </Headroom>

    <Home />
    <Activities />
    <Booking />
    <Gallery />
    <Contact />
    <Footer />

   </>
  );
}

export default App;
