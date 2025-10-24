import { ImageWithFallback } from "./figma/ImageWithFallback";

export function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-primary via-green-700 to-primary text-white py-16 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-white rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '2s' }}></div>
          <div className="absolute top-1/3 left-2/3 w-4 h-4 bg-white rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '2.8s' }}></div>
        </div>

        {/* Gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>

        {/* Subtle growing circles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border border-white rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: '4s', animationDuration: '6s' }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
            Über uns
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Tradition und Moderne in der Landwirtschaft seit
            vielen Jahren
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1  gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rudolf Schmierer
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Als erfahrener Landwirt mit langjähriger
                Expertise in der Getreide- und
                Futtermitteltrocknung biete ich Ihnen
                professionelle Dienstleistungen rund um die
                Aufbereitung und Konservierung Ihrer
                landwirtschaftlichen Erzeugnisse.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Mein Unternehmen RS-Trocknung steht für
                Qualität, Zuverlässigkeit und moderne Technik.
                Mit jahrzehntelanger Erfahrung in der
                Landwirtschaft verstehe ich die Bedürfnisse der
                Landwirte und biete maßgeschneiderte Lösungen.
              </p>
              <p className="text-lg text-gray-700">
                Vertrauen Sie auf meine Expertise und moderne
                Anlagen für beste Ergebnisse bei der Trocknung
                Ihrer wertvollen Ernte.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Unsere Werte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">
                    🌾
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Nachhaltigkeit
                </h3>
                <p className="text-gray-600">
                  Effiziente Verfahren und nachhaltige
                  Landwirtschaft stehen im Mittelpunkt unseres
                  Handelns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">
                    🤝
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Partnerschaft
                </h3>
                <p className="text-gray-600">
                  Langfristige Partnerschaften mit unseren
                  Kunden basierend auf Vertrauen und
                  Zuverlässigkeit.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">
                    ⚡
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Kontinuierliche Weiterentwicklung unserer
                  Technik und Verfahren für beste Ergebnisse.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Lernen Sie uns kennen
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Gerne stehe ich Ihnen für ein persönliches
              Gespräch zur Verfügung. Überzeugen Sie sich selbst
              von meiner Kompetenz und meinem Service.
            </p>
            <a
              href="tel:+43676821262498"
              id="phoneNumberLink"
              data-phone-number="0676821262498"
              className="bg-primary text-white p-6 rounded-lg inline-block text-center no-underline hover:bg-primary-dark transition-colors duration-200"

            >
              <p className="text-xl font-semibold m-0">
                📞 0676/821262498
              </p>
              <p className="text-green-100 mt-2 m-0">
                Rudolf Schmierer
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}