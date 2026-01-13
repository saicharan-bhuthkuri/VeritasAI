import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InputSection from './components/InputSection';
import Dashboard from './components/Results/Dashboard';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import API from './pages/API';

// API Client
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeText = async (text: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans relative flex flex-col">
        {/* Background Gradients/Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-emerald-400 opacity-20 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <Header />

        <main className="relative z-10 container mx-auto flex-grow flex flex-col items-center pt-24 pb-24">
          <Routes>
            <Route path="/" element={
              <>
                <InputSection onAnalyze={analyzeText} isLoading={isLoading} />

                {error && (
                  <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl animate-fade-in flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                )}

                {result && <Dashboard result={result} />}
              </>
            } />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/api" element={<API />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
