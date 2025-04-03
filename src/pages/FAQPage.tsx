
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const faqItems = [
    {
      question: "Quelle est la meilleure période pour visiter la Corse à moto ?",
      answer: "La meilleure période pour visiter la Corse à moto est de mi-mai à fin juin et de septembre à mi-octobre. Vous éviterez ainsi la chaleur excessive de l'été, les routes encombrées et les prix élevés, tout en profitant d'un temps agréable et de paysages magnifiques."
    },
    {
      question: "Dois-je réserver le ferry à l'avance pour emmener ma moto en Corse ?",
      answer: "Oui, il est fortement recommandé de réserver votre passage en ferry plusieurs mois à l'avance, surtout si vous voyagez pendant la haute saison (juillet-août). Les places pour les motos sont limitées et les tarifs augmentent à l'approche des dates de départ."
    },
    {
      question: "Quel type de moto est recommandé pour explorer la Corse ?",
      answer: "Une moto de type trail ou roadster est idéale pour explorer la Corse. Elle offre un bon compromis entre confort sur les longues distances, maniabilité sur les routes sinueuses et capacité à emprunter occasionnellement des pistes. Les grosses routières peuvent être moins adaptées aux petites routes de montagne."
    },
    {
      question: "Quelles sont les limitations de vitesse en Corse ?",
      answer: "Les limitations de vitesse en Corse sont les mêmes que sur le continent français : 50 km/h en agglomération, 80 km/h sur routes secondaires, 90 km/h sur certaines portions à double sens et 110 km/h sur les voies rapides. Attention cependant, les routes corses étant souvent sinueuses, il est rarement possible (et sécuritaire) d'atteindre ces vitesses maximales."
    },
    {
      question: "Faut-il un équipement spécifique pour rouler en Corse ?",
      answer: "Un équipement de moto standard est suffisant, mais prévoyez des vêtements adaptés aux différentes conditions météorologiques. En montagne, les températures peuvent chuter rapidement, même en été. Un équipement ventilé pour la chaleur mais avec une couche imperméable est idéal. N'oubliez pas une protection solaire et des lunettes de soleil."
    },
    {
      question: "Est-il possible de faire le tour de la Corse en moto en une semaine ?",
      answer: "Oui, il est possible de faire le tour de la Corse en une semaine, mais ce sera un rythme assez soutenu. Pour vraiment profiter des paysages, des villages et des plages, prévoyez idéalement 10 à 14 jours. Cela vous permettra d'explorer plus en profondeur et de prendre le temps de vous reposer entre les étapes."
    },
    {
      question: "Où puis-je trouver des hébergements adaptés aux motards en Corse ?",
      answer: "De nombreux hôtels et chambres d'hôtes en Corse sont habitués à accueillir des motards. Consultez notre section 'Hébergements' pour trouver des établissements disposant de parkings sécurisés et d'installations pour l'entretien des motos. Pendant la haute saison, il est préférable de réserver à l'avance."
    },
    {
      question: "Quelles sont les routes à ne pas manquer en Corse ?",
      answer: "Parmi les routes incontournables : les Calanches de Piana (D81), le Col de Bavella, la route de la Restonica, le Cap Corse (D80), et la route des Cols (D84) entre Corte et Porto. Consultez notre section 'Itinéraires' pour des descriptions détaillées et des suggestions de parcours."
    },
    {
      question: "Y a-t-il des stations-service dans toute la Corse ?",
      answer: "Les stations-service sont relativement bien réparties sur les côtes et dans les villes principales, mais peuvent être plus rares dans l'intérieur montagneux de l'île. Prévoyez vos pleins d'essence et n'attendez jamais d'être en réserve, surtout lors de la traversée des régions montagneuses."
    },
    {
      question: "La Corse est-elle adaptée aux débutants en moto ?",
      answer: "La Corse peut être exigeante pour les débutants en raison de ses routes sinueuses et parfois étroites. Si vous êtes novice, privilégiez les routes côtières plus larges et évitez les passages de montagne les plus techniques. Prévoyez des étapes plus courtes pour ne pas vous fatiguer et roulez toujours à votre rythme, sans vous laisser influencer par d'autres motards plus expérimentés."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - La Corse à Moto</title>
        <meta name="description" content="Réponses aux questions fréquentes sur la découverte de la Corse à moto." />
      </Helmet>

      <Navbar />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-corsica-light py-16 min-h-screen"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-corsica-dark font-heading">
              Foire Aux Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquentes sur la découverte de la Corse à moto.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-medium text-corsica-dark py-4 hover:text-corsica-blue">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 pt-2 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default FAQPage;
