import HeroSection from "./components/HeroSection";
import ThemeTogglebutton from "./components/ui/theme-togggle";

function App() {
  return (
    <>
      <div className="fixed top-2 right-6">
        <ThemeTogglebutton />
      </div>
      <HeroSection />
    </>
  );
}

export default App;
