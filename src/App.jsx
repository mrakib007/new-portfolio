import './App.css';
import StaticNav from './pages/staticNav/StaticNav';
import Hero from './pages/scrollableSections/Hero';
function App() {
  return (
    <div className="bg-darkBg text-darkText min-h-screen transition-colors duration-500 overflow-hidden">
      <div className="container max-w-container mx-auto h-full flex">
        <div className="w-1/2 bg-darkBg text-white p-8 sticky top-0 h-screen">
          <StaticNav />
        </div>
        <div className="w-1/2 overflow-y-auto h-screen p-8 scrollbar-hide">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
