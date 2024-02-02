import BacksiteSection from "./components/BacksiteSection";
import DisplaySection from "./components/DisplaySection";
import FrontsiteSection from "./components/FrontsiteSection";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import SidebarButtonSection from "./components/SidebarButtonSection";
import SoundSection from "./components/SoundSection";
import WebViewer from "./components/WebViewer";
import Loder from "./components/Loder";

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <SoundSection />
      <FrontsiteSection />
      <SidebarButtonSection />
      <BacksiteSection />
      <DisplaySection />
      <WebViewer />
      <Loder />
    </div>
  );
}

export default App;
