import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

export function KontaktPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email subject and body
      const emailSubject = encodeURIComponent(
        `Kontaktanfrage: ${formData.subject}`,
      );
      const emailBody = encodeURIComponent(
        `Hallo,\n\n` +
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `E-Mail: ${formData.email}\n` +
        `Telefon: ${formData.phone || "Nicht angegeben"}\n` +
        `Betreff: ${formData.subject}\n\n` +
        `Nachricht:\n${formData.message}\n\n` +
        `Mit freundlichen Grüßen,\n${formData.firstName} ${formData.lastName}`,
      );

      // Create mailto link
      const mailtoLink = `mailto:rudi.schmierer@aon.at?subject=${emailSubject}&body=${emailBody}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      toast.success("E-Mail-Client wird geöffnet", {
        description:
          "Ihre Nachricht wird in Ihrem Standard-E-Mail-Programm geöffnet.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Fehler beim Öffnen des E-Mail-Clients", {
        description:
          "Bitte senden Sie Ihre Nachricht direkt an rudi.schmierer@aon.at",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-l from-primary via-green-600 to-green-800 text-white py-16 overflow-hidden">
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.1s', animationDuration: '3s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '3.2s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '2.8s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '3.4s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.9s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '3.1s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '3.3s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '2.7s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '3.5s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '1.0s', animationDuration: '2.9s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '1.1s', animationDuration: '3.2s' }}></div>
            <div className="border border-white animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '3.0s' }}></div>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 opacity-10">
          <Mail className="absolute top-1/4 left-1/6 w-8 h-8 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <Phone className="absolute top-2/3 right-1/4 w-6 h-6 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
          <MapPin className="absolute bottom-1/4 left-1/3 w-7 h-7 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <Clock className="absolute top-1/3 right-1/3 w-5 h-5 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }} />
        </div>

        {/* Radial gradient animation */}
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
            Kontakt
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Nehmen Sie Kontakt mit uns auf - ich berate Sie
            gerne
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kontaktinformationen
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <span>Telefon</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>



                    <a
                      href="tel:+43676821262498"
                      id="phoneNumberLink"
                      data-phone-number="0676821262498"
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <p className="text-lg font-semibold text-gray-900 m-0">
                        0676 / 82 12 62 49 8
                      </p>
                      <p className="text-gray-600 m-0">
                        Rudolf Schmierer
                      </p>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <span>E-Mail</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:rudi.schmierer@aon.at"
                      className="email-link rounded-md hover:bg-gray-50 transition-colors duration-200"
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                      title="Auf dem Handy: Mail-App öffnen. Auf dem PC/Laptop: E-Mail-Adresse kopieren."
                    >
                      <p className="text-lg font-semibold text-gray-900 m-0">
                        rudi.schmierer@aon.at
                      </p>
                      <p className="text-gray-600 m-0">
                        Für Anfragen und Informationen
                      </p>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <span>Adresse</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Münsteuer+12+4980+Antiesenhofen+Österreich"
                      target="_blank" // Öffnet den Link in einem neuen Tab (empfohlen für externe Links)
                      rel="noopener noreferrer"
                      className=" rounded-md hover:bg-gray-50 transition-colors duration-200"
                      style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <p className="text-lg font-semibold text-gray-900 m-0">
                        RS-Trocknung
                      </p>
                      <p className="text-gray-600 m-0">
                        Rudolf Schmierer
                      </p>
                      <p className="text-gray-600 m-0 mt-1">
                        Münsteuer 12
                      </p>
                      <p className="text-gray-600 m-0">
                        4980 Antiesenhofen, Österreich
                      </p>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-primary" />
                      <span>Öffnungszeiten</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Montag - Freitag:
                        </span>
                        <span className="text-gray-900">
                          7:00 - 20:00 Uhr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Samstag:
                        </span>
                        <span className="text-gray-900">
                          9:00 - 12:00 Uhr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Sonntag:
                        </span>
                        <span className="text-gray-900">
                          Nach Vereinbarung
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nachricht senden
              </h2>

              <Card>
                <CardContent className="p-6">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block mb-2"
                        >
                          Vorname *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block mb-2"
                        >
                          Nachname *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2"
                      >
                        Betreff *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2"
                      >
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Beschreiben Sie hier Ihr Anliegen..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Nachricht senden
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-600">
                      * Pflichtfelder
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">
                            Hinweis zur E-Mail-Übertragung
                          </h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Ihre Nachricht wird in Ihrem
                            Standard-E-Mail-Programm geöffnet.
                            Falls das nicht funktioniert, senden
                            Sie Ihre Nachricht bitte direkt an:
                            <strong>
                              {" "}
                              rudi.schmierer@aon.at
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}