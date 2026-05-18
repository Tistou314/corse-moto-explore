import { useEffect, useRef } from 'react';
import maplibregl, { type LngLatLike, type StyleSpecification } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export interface MapMarker {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: 'itinerary' | 'accommodation' | 'gas-station';
  href?: string;
}

interface Props {
  markers: MapMarker[];
  maptilerKey: string;
  center?: [number, number];
  zoom?: number;
  height?: string;
}

const COLORS: Record<MapMarker['type'], string> = {
  itinerary: '#0EA5E9',
  accommodation: '#10B981',
  'gas-station': '#F97316',
};

const TYPE_LABEL: Record<MapMarker['type'], string> = {
  itinerary: 'Itinéraire',
  accommodation: 'Hébergement',
  'gas-station': 'Station-service',
};

const LINK_LABEL: Record<MapMarker['type'], string> = {
  itinerary: "Voir l'itinéraire",
  accommodation: "Voir l'hébergement",
  'gas-station': '',
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default function Map({
  markers,
  maptilerKey,
  center = [9.1, 42.15],
  zoom = 8,
  height = '70vh',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const style: StyleSpecification | string = maptilerKey
      ? `https://api.maptiler.com/maps/landscape/style.json?key=${maptilerKey}`
      : {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap contributors',
            },
          },
          layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
        };

    const map = new maplibregl.Map({
      container: ref.current,
      style,
      center: center as LngLatLike,
      zoom,
      cooperativeGestures: true,
      attributionControl: { compact: true },
    });
    mapRef.current = map;
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    map.on('load', () => {
      const features: GeoJSON.Feature[] = markers.map((m) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [m.longitude, m.latitude] },
        properties: { id: m.id, name: m.name, type: m.type, href: m.href ?? '' },
      }));
      map.addSource('markers', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features },
        cluster: true,
        clusterMaxZoom: 13,
        clusterRadius: 50,
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'markers',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#0EA5E9',
          'circle-opacity': 0.85,
          'circle-radius': ['step', ['get', 'point_count'], 16, 5, 22, 20, 28],
        },
      });
      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'markers',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-size': 12,
          'text-font': ['Noto Sans Regular'],
        },
        paint: { 'text-color': '#ffffff' },
      });
      map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'markers',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-radius': 6,
          'circle-color': [
            'match',
            ['get', 'type'],
            'itinerary',
            COLORS.itinerary,
            'accommodation',
            COLORS.accommodation,
            COLORS['gas-station'],
          ],
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 2,
        },
      });

      map.on('click', 'clusters', (e) => {
        const feat = map.queryRenderedFeatures(e.point, { layers: ['clusters'] })[0];
        const clusterId = feat.properties?.cluster_id as number | undefined;
        if (clusterId == null) return;
        (map.getSource('markers') as maplibregl.GeoJSONSource)
          .getClusterExpansionZoom(clusterId)
          .then((expansionZoom: number) => {
            const coords = (feat.geometry as GeoJSON.Point).coordinates as [number, number];
            map.easeTo({ center: coords, zoom: expansionZoom });
          });
      });

      map.on('click', 'points', (e) => {
        const f = e.features?.[0];
        if (!f) return;
        const coords = (f.geometry as GeoJSON.Point).coordinates.slice() as [number, number];
        const props = f.properties as { name: string; href: string; type: MapMarker['type'] };
        const color = COLORS[props.type];
        const typeLabel = TYPE_LABEL[props.type];
        const linkLabel = LINK_LABEL[props.type];
        const safeName = escapeHtml(props.name);
        const safeHref = escapeHtml(props.href);
        const linkHtml =
          props.href && linkLabel
            ? `<a href="${safeHref}" style="color:${color};font-size:12px;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:4px;margin-top:6px">${linkLabel} <span aria-hidden="true">→</span></a>`
            : '';
        const html = `
          <div style="min-width:160px;font-family:inherit">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color}"></span>
              <span style="font-size:11px;letter-spacing:0.04em;text-transform:uppercase;color:#6b7280;font-weight:600">${typeLabel}</span>
            </div>
            <div style="font-size:13px;font-weight:600;color:#111827;line-height:1.3">${safeName}</div>
            ${linkHtml}
          </div>
        `;
        new maplibregl.Popup({ closeButton: true, offset: 14 })
          .setLngLat(coords)
          .setHTML(html)
          .addTo(map);
      });

      map.on('mouseenter', 'points', () => (map.getCanvas().style.cursor = 'pointer'));
      map.on('mouseleave', 'points', () => (map.getCanvas().style.cursor = ''));
      map.on('mouseenter', 'clusters', () => (map.getCanvas().style.cursor = 'pointer'));
      map.on('mouseleave', 'clusters', () => (map.getCanvas().style.cursor = ''));
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [markers, maptilerKey, center, zoom]);

  return <div ref={ref} style={{ height, width: '100%' }} className="bg-bg-subtle" />;
}
