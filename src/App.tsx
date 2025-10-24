import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { DienstleistungenPage } from './components/DienstleistungenPage';
import { UeberUnsPage } from './components/UeberUnsPage';
import { KontaktPage } from './components/KontaktPage';
import { PuzzlePage } from './components/PuzzlePage';
import { ImpressumPage } from './components/ImpressumPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/home':
        return <HomePage />;
      case '/dienstleistungen':
        return <DienstleistungenPage />;
      case '/ueber-uns':
        return <UeberUnsPage />;
      case '/kontakt':
        return <KontaktPage />;
      case '/puzzle':
        return <PuzzlePage />;
      case '/impressum':
        return <ImpressumPage />;
      case '/':
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <Toaster />
    </div>
  );
}