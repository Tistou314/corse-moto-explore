
interface SerpApiResponse {
  shopping_results?: Array<{
    title: string;
    price?: string;
    rating?: number;
    reviews?: number;
    thumbnail?: string;
    source?: string;
  }>;
  organic_results?: Array<{
    title: string;
    link: string;
    snippet: string;
    thumbnail?: string;
  }>;
  knowledge_graph?: {
    title?: string;
    image?: string;
    rating?: number;
    reviews?: number;
    phone?: string;
    website?: string;
    address?: string;
  };
}

export class SerpApiService {
  private apiKey: string;
  private baseUrl = 'https://serpapi.com/search.json';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async searchAccommodation(name: string, location: string = 'Corse') {
    const query = `${name} ${location}`;
    const params = new URLSearchParams({
      engine: 'google',
      q: query,
      api_key: this.apiKey,
      hl: 'fr',
      gl: 'fr',
      location: 'France'
    });

    try {
      const response = await fetch(`${this.baseUrl}?${params}`);
      const data: SerpApiResponse = await response.json();
      return this.extractAccommodationData(data, name);
    } catch (error) {
      console.error(`Erreur lors de la recherche pour ${name}:`, error);
      return null;
    }
  }

  private extractAccommodationData(data: SerpApiResponse, originalName: string) {
    const result = {
      name: originalName,
      image: null as string | null,
      rating: null as number | null,
      reviews: null as number | null,
      phone: null as string | null,
      website: null as string | null,
      address: null as string | null,
      source: null as string | null
    };

    // Priorité 1: Knowledge Graph (Google Business)
    if (data.knowledge_graph) {
      const kg = data.knowledge_graph;
      result.image = kg.image || result.image;
      result.rating = kg.rating || result.rating;
      result.reviews = kg.reviews || result.reviews;
      result.phone = kg.phone || result.phone;
      result.website = kg.website || result.website;
      result.address = kg.address || result.address;
      result.source = 'Google Business';
    }

    // Priorité 2: Shopping Results (Booking.com, Hotels.com, etc.)
    if (data.shopping_results && data.shopping_results.length > 0) {
      const bestMatch = data.shopping_results[0];
      result.image = result.image || bestMatch.thumbnail;
      result.rating = result.rating || bestMatch.rating;
      result.reviews = result.reviews || bestMatch.reviews;
      result.source = result.source || bestMatch.source;
    }

    // Priorité 3: Organic Results (sites officiels)
    if (data.organic_results && data.organic_results.length > 0) {
      const officialSite = data.organic_results.find(r => 
        r.link && (
          r.link.includes('hotel') || 
          r.link.includes('camping') || 
          r.link.includes('gite') ||
          r.title.toLowerCase().includes(originalName.toLowerCase())
        )
      );
      
      if (officialSite) {
        result.website = result.website || officialSite.link;
        result.image = result.image || officialSite.thumbnail;
      }
    }

    return result;
  }

  async enrichAllAccommodations(accommodations: any[]) {
    const results = [];
    
    for (const accommodation of accommodations) {
      console.log(`Enrichissement de ${accommodation.name}...`);
      
      const enrichedData = await this.searchAccommodation(accommodation.name, accommodation.location);
      
      if (enrichedData) {
        const updatedAccommodation = {
          ...accommodation,
          // Mise à jour de l'image si une meilleure est trouvée
          image: enrichedData.image && enrichedData.image !== accommodation.image 
            ? enrichedData.image 
            : accommodation.image,
          // Mise à jour du rating si disponible
          rating: enrichedData.rating || accommodation.rating,
          // Mise à jour des contacts si disponibles
          contact: {
            ...accommodation.contact,
            phone: enrichedData.phone || accommodation.contact?.phone,
            website: enrichedData.website || accommodation.contact?.website,
          },
          // Ajout de l'adresse si manquante
          address: enrichedData.address || accommodation.address,
          // Métadonnées d'enrichissement
          enrichment: {
            lastUpdated: new Date().toISOString(),
            source: enrichedData.source,
            hasRealPhoto: !!enrichedData.image,
            hasValidatedContact: !!(enrichedData.phone || enrichedData.website)
          }
        };
        
        results.push(updatedAccommodation);
      } else {
        results.push(accommodation);
      }
      
      // Délai pour éviter de surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return results;
  }
}
