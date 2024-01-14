import './app.scss'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Parallalx from './Components/Parallalx/Parallalx';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
function App() {
  

  return (
    <div>
      <Cursor/>
      <section id="homepage">
        <Navbar/>
         <Hero/>
      </section>
      <section id="Services"><Parallalx type="services"/></section>
      <section ><Services/></section>
      <section id="portfolio"><Parallalx type="portfolio"/></section>
      <Portfolio/>
      <section id="contact">
  <Contact/>
  </section>
      
    </div>
  );
};

export default App;
