import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // Start true for initial load

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on path change only

  return (
    <>
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {isLoading && <LoadingScreen />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
