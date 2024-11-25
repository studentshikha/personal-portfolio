
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div className=" text-neutral-300 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
<Navbar/>
<Home/>

<SocialLinks/>
<About/>
<Portfolio/>

<Contact/>
    </div>
  
  );
}

export default App;
