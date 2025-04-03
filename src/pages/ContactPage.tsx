
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une question sur un itinéraire ? Besoin de conseils pour votre voyage à moto en Corse ?
                N'hésitez pas à nous contacter !
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Informations</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-corsica-blue mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contact@lacorseamoto.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-corsica-blue mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-muted-foreground">+33 6 XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-corsica-blue mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Localisation</h3>
                      <p className="text-muted-foreground">Corse, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-corsica-blue mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Horaires de réponse</h3>
                      <p className="text-muted-foreground">Lundi - Vendredi: 9h - 18h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-3">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-corsica-blue text-white p-2 rounded-full hover:bg-corsica-blue/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-corsica-blue text-white p-2 rounded-full hover:bg-corsica-blue/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-corsica-blue text-white p-2 rounded-full hover:bg-corsica-blue/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quand est-il préférable de visiter la Corse à moto ?</h3>
                    <p className="text-muted-foreground">
                      Les meilleures périodes sont mai-juin et septembre-octobre, offrant un climat agréable 
                      et moins d'affluence touristique.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quels documents dois-je apporter pour ma moto ?</h3>
                    <p className="text-muted-foreground">
                      Votre permis de conduire, carte grise, attestation d'assurance et carte verte sont nécessaires.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Les itinéraires sont-ils adaptés aux débutants ?</h3>
                    <p className="text-muted-foreground">
                      Certains itinéraires sont accessibles aux débutants, d'autres plus techniques. Chaque parcours 
                      indique son niveau de difficulté.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Puis-je télécharger les tracés GPS ?</h3>
                    <p className="text-muted-foreground">
                      Oui, tous nos itinéraires proposent des traces GPS téléchargeables aux formats GPX et KML.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
