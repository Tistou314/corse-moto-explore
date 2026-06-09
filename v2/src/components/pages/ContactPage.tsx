import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../../../../src/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow bg-gray-50 py-12 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">Contactez-nous</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Une question sur un itinéraire ? Besoin de conseils pour votre voyage à moto en Corse ?
                N'hésitez pas à nous contacter !
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h2>
                <ContactForm />
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Informations</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-corsica-azure mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">pitameternam@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-corsica-azure mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Localisation</h3>
                      <p className="text-gray-600">Corse, France</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-corsica-azure mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Horaires de réponse</h3>
                      <p className="text-gray-600">Lundi - Vendredi: 9h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
