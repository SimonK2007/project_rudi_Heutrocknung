import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ✅ Import local images
import NewHolland from "../assets/images/New_Holland.jpg";
import Heutrocknung from "../assets/images/Heutrocknung.jpg";
import HeutrocknungInArbeit from "../assets/images/Heutrocknung-in-arbeit.png";
import Holzbringung from "../assets/images/Holzbringung.png";
import Korntrocknung from "../assets/images/Korntrocknung.png";
import Ballenparty from "../assets/images/Ballenparty.png";

export function HomePage() {
  const vehicles = [
    {
      id: 1,
      title: "Traktor New Holland T5.95/4020",
      description:
        "Unser leistungsstarker Traktor für alle Feldarbeiten. Mit 115 PS und modernster Technik ausgestattet.",
      image: NewHolland,
    },
    {
      id: 2,
      title: "Heutrocknung",
      description:
        "Effiziente Heutrocknung mit modernster Technik für optimale Qualität und Haltbarkeit.",
      image: Heutrocknung,
    },
    {
      id: 3,
      title: "Heutrocknung in Arbeit",
      description:
        "Live-Einblick in unsere Heutrocknung – moderne Technik in Aktion.",
      image: HeutrocknungInArbeit,
    },
    {
      id: 4,
      title: "Holzbringung",
      description:
        "Zuverlässige Holzbringung mit modernen Maschinen – sicher, effizient und präzise.",
      image: Holzbringung,
    },
    {
      id: 5,
      title: "Korntrocknung",
      description:
        "Schonende Korntrocknung mit präziser Temperaturkontrolle für beste Ergebnisse.",
      image: Korntrocknung,
    },
    {
      id: 6,
      title: "Ballenparty",
      description:
        "Feldarbeit darf auch Spaß machen – Impressionen von unserer Ballenparty!",
      image: Ballenparty,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-green-600 to-green-700 text-white py-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse">
            <div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-3/4 right-1/3 w-24 h-24 bg-white rounded-full animate-ping"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full animate-ping"
              style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            ></div>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl mb-8 text-green-100 font-medium animate-fade-in-up">
            Professionelle Trocknung von Heu und Schüttgut
          </p>
          <p
            className="text-lg max-w-3xl mx-auto text-green-100 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Rudolf Schmierer bietet Ihnen moderne
            Trocknungsdienstleistungen für beste Qualität und optimale Lagerung
            Ihrer landwirtschaftlichen Erzeugnisse.
          </p>
        </div>

        {/* Moving border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-300 to-green-400 animate-pulse"></div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unsere Fahrzeuge & Anlagen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modernste Technik für professionelle landwirtschaftliche
              Dienstleistungen
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="overflow-hidden hover:shadow-lg transition-shadow h-[420px] flex flex-col"
              >
                {/* Fixed image area */}
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Card content */}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                    {vehicle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center text-center">
                  <CardDescription className="text-gray-600 px-4">
                    {vehicle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
