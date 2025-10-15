import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shuffle, RotateCcw, Trophy, Gamepad2, Palette, Eye, EyeOff } from 'lucide-react';

// Sliding Puzzle Component
function SlidingPuzzle() {
  const [pieces, setPieces] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);

  const puzzleImage = "https://images.unsplash.com/photo-1665207052678-103915b0a03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhcnRvb24lMjBmYXJtJTIwdHJhY3RvciUyMHNpbXBsZXxlbnwxfHx8fDE3NTg4MjM3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

  // Initialize puzzle pieces (3x3 grid = 9 pieces, with empty space at position 8)
  const initializePuzzle = () => {
    const shuffled = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // 0 represents empty space
    // Shuffle the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPieces(shuffled);
    setIsComplete(false);
    setMoves(0);
    setTimer(0);
  };

  // Check if puzzle is complete
  const checkComplete = (currentPieces: number[]) => {
    const solution = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    return currentPieces.every((piece, index) => piece === solution[index]);
  };

  // Move piece if possible
  const movePiece = (clickedIndex: number) => {
    if (isComplete) return;

    const emptyIndex = pieces.indexOf(0);
    const validMoves = getValidMoves(emptyIndex);

    if (validMoves.includes(clickedIndex)) {
      const newPieces = [...pieces];
      [newPieces[emptyIndex], newPieces[clickedIndex]] = [newPieces[clickedIndex], newPieces[emptyIndex]];
      setPieces(newPieces);
      setMoves(moves + 1);

      if (checkComplete(newPieces)) {
        setIsComplete(true);
      }
    }
  };

  // Get valid moves for empty space
  const getValidMoves = (emptyIndex: number) => {
    const validMoves = [];
    const row = Math.floor(emptyIndex / 3);
    const col = emptyIndex % 3;

    // Up, Down, Left, Right
    if (row > 0) validMoves.push(emptyIndex - 3);
    if (row < 2) validMoves.push(emptyIndex + 3);
    if (col > 0) validMoves.push(emptyIndex - 1);
    if (col < 2) validMoves.push(emptyIndex + 1);

    return validMoves;
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isComplete && pieces.length > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isComplete, pieces.length]);

  // Initialize on mount
  useEffect(() => {
    initializePuzzle();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Puzzle Game */}
      <Card className="bg-white shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-between">
            <span>🎯 Züge: {moves}</span>
            <span>⏱️ Zeit: {formatTime(timer)}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto mb-6 bg-gray-100 p-3 rounded-lg">
            {pieces.map((piece, index) => (
              <div
                key={index}
                onClick={() => movePiece(index)}
                className={`
                  aspect-square cursor-pointer transition-all duration-200 rounded-md border-2 
                  ${piece === 0 
                    ? 'bg-gray-300 border-gray-400' 
                    : 'bg-white border-gray-200 hover:border-primary hover:scale-105 shadow-sm hover:shadow-md'
                  }
                `}
              >
                {piece !== 0 && (
                  <div 
                    className="w-full h-full rounded-md overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${puzzleImage})`,
                      backgroundSize: '300% 300%',
                      backgroundPosition: `${((piece - 1) % 3) * -50}% ${Math.floor((piece - 1) / 3) * -50}%`
                    }}
                  >
                    <div className="absolute bottom-1 right-1 bg-white bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-primary">
                      {piece}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              onClick={initializePuzzle}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Shuffle className="w-4 h-4" />
              Neu mischen
            </Button>
            <Button 
              onClick={() => {
                initializePuzzle();
                setTimer(0);
                setMoves(0);
              }}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Neustart
            </Button>
          </div>

          {isComplete && (
            <div className="text-center mt-6 p-4 bg-green-100 rounded-lg border-2 border-green-300">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-green-800 mb-2">
                🎉 Geschafft!
              </h3>
              <p className="text-green-700">
                Du hast das Puzzle in {moves} Zügen und {formatTime(timer)} gelöst!
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reference Image and Instructions */}
      <div className="space-y-6">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">🖼️ Zielbild</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-sm mx-auto">
              <ImageWithFallback
                src={puzzleImage}
                alt="Puzzle Zielbild"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>📋 Spielregeln - Schiebepuzzle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p>Klicke auf ein Puzzle-Teil neben dem leeren Feld</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p>Das Teil bewegt sich in das leere Feld</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p>Ordne alle Teile von 1-8 in der richtigen Reihenfolge</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Memory Matching Game Component
function MemoryGame() {
  const [cards, setCards] = useState<{id: number, emoji: string, isFlipped: boolean, isMatched: boolean}[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const emojis = ['🚜', '🐄', '🐷', '🐔', '🌽', '🥕', '🍎', '🌾'];

  const initializeGame = () => {
    // Create pairs of cards
    const cardPairs = emojis.flatMap((emoji, index) => [
      { id: index * 2, emoji, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, emoji, isFlipped: false, isMatched: false }
    ]);
    
    // Shuffle cards
    for (let i = cardPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
    }

    setCards(cardPairs);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setTimer(0);
    setIsComplete(false);
  };

  const flipCard = (cardId: number) => {
    if (flippedCards.length === 2 || isComplete) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newCards = cards.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlippedCards;
      const firstCard = newCards.find(c => c.id === first);
      const secondCard = newCards.find(c => c.id === second);

      if (firstCard?.emoji === secondCard?.emoji) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === first || c.id === second 
              ? { ...c, isMatched: true }
              : c
          ));
          setMatches(matches + 1);
          setFlippedCards([]);
          
          // Check if game is complete
          if (matches + 1 === emojis.length) {
            setIsComplete(true);
          }
        }, 500);
      } else {
        // No match, flip back
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === first || c.id === second 
              ? { ...c, isFlipped: false }
              : c
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isComplete && cards.length > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isComplete, cards.length]);

  useEffect(() => {
    initializeGame();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      {/* Game Stats */}
      <Card className="bg-white shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>📊 Spielstand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{matches}/{emojis.length}</div>
            <div className="text-sm text-gray-600">Gefundene Paare</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{moves}</div>
            <div className="text-sm text-gray-600">Versuche</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-foreground">{formatTime(timer)}</div>
            <div className="text-sm text-gray-600">Zeit</div>
          </div>
          
          <Button 
            onClick={initializeGame}
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Neues Spiel
          </Button>

          {isComplete && (
            <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-300">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-green-800 mb-2">
                🎉 Geschafft!
              </h3>
              <p className="text-sm text-green-700">
                Alle Paare in {moves} Versuchen gefunden!
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Memory Game Grid */}
      <Card className="bg-white shadow-lg lg:col-span-2">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Memory Spiel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => flipCard(card.id)}
                className={`
                  aspect-square cursor-pointer transition-all duration-300 rounded-lg border-2 flex items-center justify-center text-4xl
                  ${card.isFlipped || card.isMatched
                    ? 'bg-white border-primary shadow-md'
                    : 'bg-primary border-primary-foreground hover:bg-primary/90 hover:scale-105'
                  }
                  ${card.isMatched ? 'opacity-60' : ''}
                `}
              >
                {card.isFlipped || card.isMatched ? (
                  card.emoji
                ) : (
                  <Palette className="w-6 h-6 text-white" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="bg-white shadow-lg lg:col-span-3">
        <CardHeader>
          <CardTitle>📋 Spielregeln - Memory Spiel</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p>Klicke auf eine Karte, um sie umzudrehen</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p>Klicke auf eine zweite Karte</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p>Wenn die Symbole gleich sind, bleiben sie sichtbar</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <p>Finde alle 8 Paare so schnell wie möglich!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function PuzzlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            🎮 Spiele für Groß und Klein
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Wähle dein Lieblingsspiel und hab Spaß beim Knobeln!
          </p>
        </div>

        <Tabs defaultValue="sliding" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="sliding" className="flex items-center gap-2">
              <Shuffle className="w-4 h-4" />
              Schiebepuzzle
            </TabsTrigger>
            <TabsTrigger value="memory" className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              Memory Spiel
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="sliding">
            <SlidingPuzzle />
          </TabsContent>
          
          <TabsContent value="memory">
            <MemoryGame />
          </TabsContent>
        </Tabs>

        <Card className="bg-gradient-to-r from-primary to-green-600 text-white mt-8">
          <CardContent className="pt-6 text-center">
            <h3 className="text-lg font-bold mb-2">💡 Tipp für Kinder</h3>
            <p className="text-green-100">
              Beide Spiele helfen beim Denken und Konzentrieren. Lasst euch Zeit und habt Spaß!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}