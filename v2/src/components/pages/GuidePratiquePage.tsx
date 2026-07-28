import Hero from '../legacy-overrides/Hero';
import GuideTabs from '../../../../src/components/guide/GuideTabs';

export default function GuidePratiquePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero
        title="Guide Pratique"
        subtitle="Conseils, astuces et informations essentielles pour préparer et profiter pleinement de votre voyage à moto en Corse."
        imagePath="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?auto=format&fit=crop&q=80"
      />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <GuideTabs />
          </div>
        </div>
      </section>
    </div>
  );
}
