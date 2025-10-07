import { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'dienstleistungen':
        return <DienstleistungenPage />;
      case 'ueber-uns':
        return <UeberUnsPage />;
      case 'kontakt':
        return <KontaktPage />;
      case 'puzzle':
        return <PuzzlePage />;
      case 'impressum':
        return <ImpressumPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
      <Toaster />
    </div>
  );
}