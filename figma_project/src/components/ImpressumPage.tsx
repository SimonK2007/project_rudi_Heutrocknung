export function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary via-green-700 to-green-800 text-white py-16 overflow-hidden">
        {/* Legal document animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/5 w-32 h-40 border-2 border-white rounded-md animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }}>
            <div className="p-2">
              <div className="w-full h-2 bg-white mb-1"></div>
              <div className="w-3/4 h-1 bg-white mb-1"></div>
              <div className="w-full h-1 bg-white mb-1"></div>
              <div className="w-2/3 h-1 bg-white"></div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/5 w-28 h-36 border-2 border-white rounded-md animate-float" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
            <div className="p-2">
              <div className="w-full h-2 bg-white mb-1"></div>
              <div className="w-3/4 h-1 bg-white mb-1"></div>
              <div className="w-full h-1 bg-white mb-1"></div>
              <div className="w-2/3 h-1 bg-white"></div>
            </div>
          </div>
          
          <div className="absolute top-3/4 left-1/3 w-24 h-32 border-2 border-white rounded-md animate-float" style={{ animationDelay: '2s', animationDuration: '4.5s' }}>
            <div className="p-1">
              <div className="w-full h-1 bg-white mb-1"></div>
              <div className="w-3/4 h-1 bg-white mb-1"></div>
              <div className="w-full h-1 bg-white"></div>
            </div>
          </div>
        </div>
        
        {/* Diagonal stripes animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '6s' }}></div>
        </div>
        
        {/* Scale and shield icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4">
            <svg className="w-16 h-16 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.9 16,12.4 16,13V16C16,17.1 15.1,18 14,18H10C8.9,18 8,17.1 8,16V13C8,12.4 8.6,11.9 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
            </svg>
          </div>
          
          <div className="absolute bottom-1/3 left-1/4">
            <svg className="w-12 h-12 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
              <path d="M6,2C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2H6M6,4H13V9H18V20H6V4Z"/>
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
            Impressum
          </h1>
          <p className="text-xl text-green-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Rechtliche Informationen zu RS-Trocknung
          </p>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Firmeninformationen
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Firmenname:</strong> RS-Trocknung
                  </p>
                  <p>
                    <strong>Inhaber:</strong> Rudolf Schmierer
                  </p>
                  <p>
                    <strong>Adresse:</strong> Musterstraße 123,
                    1234 Musterort, Österreich
                  </p>
                  <p>
                    <strong>Telefon:</strong> 0000000000 8
                  </p>
                  <p>
                    <strong>E-Mail:</strong>{" "}
                    info@rs-trocknung.at
                  </p>
                </div>
              </div>

              {/* Business Registration */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Gewerberechtliche Angaben
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Gewerbe:</strong>{" "}
                    Landwirtschaftliche Dienstleistungen
                  </p>
                  <p>
                    <strong>Gewerbebehörde:</strong>{" "}
                    Bezirkshauptmannschaft Musterort
                  </p>
                  <p>
                    <strong>UID-Nummer:</strong> ATU12345678
                  </p>
                </div>
              </div>

              {/* Responsible for Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Verantwortlich für den Inhalt
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>Rudolf Schmierer</p>
                  <p>RS-Trocknung</p>
                  <p>Musterstraße 123</p>
                  <p>1234 Musterort, Österreich</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Haftungsausschluss
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Haftung für Inhalte
                    </h3>
                    <p>
                      Die Inhalte unserer Seiten wurden mit
                      größter Sorgfalt erstellt. Für die
                      Richtigkeit, Vollständigkeit und
                      Aktualität der Inhalte können wir jedoch
                      keine Gewähr übernehmen. Als
                      Diensteanbieter sind wir gemäß § 7 Abs.1
                      TMG für eigene Inhalte auf diesen Seiten
                      nach den allgemeinen Gesetzen
                      verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Haftung für Links
                    </h3>
                    <p>
                      Unser Angebot enthält Links zu externen
                      Webseiten Dritter, auf deren Inhalte wir
                      keinen Einfluss haben. Deshalb können wir
                      für diese fremden Inhalte auch keine
                      Gewähr übernehmen. Für die Inhalte der
                      verlinkten Seiten ist stets der jeweilige
                      Anbieter oder Betreiber der Seiten
                      verantwortlich.
                    </p>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Urheberrecht
                </h2>
                <div className="text-gray-700">
                  <p>
                    Die durch die Seitenbetreiber erstellten
                    Inhalte und Werke auf diesen Seiten
                    unterliegen dem österreichischen
                    Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der
                    Verwertung außerhalb der Grenzen des
                    Urheberrechtes bedürfen der schriftlichen
                    Zustimmung des jeweiligen Autors bzw.
                    Erstellers.
                  </p>
                </div>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Datenschutz
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Die Nutzung unserer Webseite ist in der
                    Regel ohne Angabe personenbezogener Daten
                    möglich. Soweit auf unseren Seiten
                    personenbezogene Daten (beispielsweise Name,
                    Anschrift oder eMail-Adressen) erhoben
                    werden, erfolgt dies, soweit möglich, stets
                    auf freiwilliger Basis.
                  </p>

                  <p>
                    Wir weisen darauf hin, dass die
                    Datenübertragung im Internet (z.B. bei der
                    Kommunikation per E-Mail) Sicherheitslücken
                    aufweisen kann. Ein lückenloser Schutz der
                    Daten vor dem Zugriff durch Dritte ist nicht
                    möglich.
                  </p>

                  <p>
                    Der Nutzung von im Rahmen der
                    Impressumspflicht veröffentlichten
                    Kontaktdaten durch Dritte zur Übersendung
                    von nicht ausdrücklich angeforderter Werbung
                    und Informationsmaterialien wird hiermit
                    ausdrücklich widersprochen.
                  </p>
                </div>
              </div>

              {/* Contact for Legal Questions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Rechtliche Fragen
                </h2>
                <p className="text-gray-700">
                  Bei rechtlichen Fragen zu diesem Impressum
                  oder unserer Website kontaktieren Sie uns
                  bitte:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>
                    <strong>E-Mail:</strong>{" "}
                    info@rs-trocknung.at
                  </p>
                  <p>
                    <strong>Telefon:</strong> 000000000
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
                <p>Letzte Aktualisierung: September 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}