import { Separator } from "./ui/separator";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-foreground">
              RS-Trocknung
            </h3>
            <p className="text-gray-300 mb-2">
              Rudolf Schmierer
            </p>
            <p className="text-gray-300">
              Professionelle Trocknung von Heu und Schüttgut
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">
              Kontakt
            </h4>
            <p className="text-gray-300 mb-2">
              📞 0676 / 82 12 82 49 8
            </p>
            <p className="text-gray-300">
              ✉️ rudi.schmierer@aon.at
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">
              Rechtliches
            </h4>
            <button
              onClick={() => onNavigate("/impressum")}
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Impressum
            </button>
          </div>
        </div>

        <Separator className="my-6 bg-gray-600" />

        <div className="text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} RS-Trocknung -
            Rudolf Schmierer. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}