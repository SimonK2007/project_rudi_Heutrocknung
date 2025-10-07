import Korntrocknung from "../assets/images/Korntrocknung.png"; // ✅ Default import (no curly braces)

export function DienstleistungenPage() {
  const services = [
    {
      id: 1,
      title: "Heutrocknung",
      videoId: "5NdNkhPxEgY",
      description:
        "Professionelle Heutrocknung mit modernster Technik. Wir sorgen für optimale Trocknungsbedingungen und beste Qualität Ihres Heus. Durch schonende Trocknung bei kontrollierten Temperaturen erhalten wir den Nährwert und die Qualität optimal.",
      textLeft: true,
    },
    {
      id: 2,
      title: "Getreidetrocknung",
      videoId: "MDXupM1P1VQ",
      description:
        "Schonende Getreidetrocknung für alle Arten von Getreide. Unsere Anlagen sind speziell für die Erhaltung der Keimfähigkeit und des Nährwerts konzipiert. Präzise Steuerung garantiert optimale Ergebnisse für Weizen, Gerste, Roggen und mehr.",
      textLeft: false,
    },
    {
      id: 3,
      title: "Korntrocknung in Aktion",
      mediaType: "image",
      mediaSrc: Korntrocknung, // ✅ use imported image variable here
      description:
        "Sehen Sie unsere moderne Korntrockungsanlage in Aktion. Diese hochmoderne Technik gewährleistet eine gleichmäßige und schonende Trocknung Ihres Getreides. Mit präziser Temperaturkontrolle und optimaler Luftzirkulation erreichen wir beste Ergebnisse.",
      textLeft: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary via-green-600 to-green-800 text-white py-16 overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 left-1/6 w-40 h-40 border-2 border-white rotate-45 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-32 h-32 border-2 border-white rounded-full animate-bounce"
            style={{
              animationDelay: "1s",
              animationDuration: "3s",
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
            Dienstleistungen
          </h1>
          <p
            className="text-xl text-green-100 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Professionelle landwirtschaftliche Dienstleistungen mit modernster Technik
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Media (Video or Image) */}
                <div className={`${service.textLeft ? "lg:order-2" : "lg:order-1"}`}>
                  {service.mediaType === "image" ? (
                    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={service.mediaSrc}
                        alt={service.title}
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${service.videoId}`}
                        title={service.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className={`${service.textLeft ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Unsere Vorteile:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Modernste Trocknungstechnik
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Schonende Verfahren
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Qualitätsgarantie
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Faire Preise
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
