import { useEffect, useRef } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

setOptions({
  key: apiKey,
});

const location = {
  lat: 23.05888,
  lng: -109.69771,
};

function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadMap() {
      const { Map, InfoWindow } = await importLibrary('maps');
      const { AdvancedMarkerElement, PinElement } =
        await importLibrary('marker');

      const pin = new PinElement({
        background: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
        glyphColor: 'white',
      });

      const map = new Map(mapRef.current, {
        center: location,
        zoom: 12,
        mapId: 'DEMO_MAP',
      });

      const infoWindow = new InfoWindow({
        content: `
        <div>
            <h3>Medical Meeting</h3>
            <p>Centro Médico Especializado</p>
            <p>San José del Cabo, B.C.S.</p>
        </div>
        `,
      });

      const marker = new AdvancedMarkerElement({
        map,
        position: location,
        content: pin,
        gmpClickable: true
      });

      marker.addEventListener('gmp-click', () => {
        infoWindow.open({
            map,
            anchor: marker
        });
      })
    }
    loadMap();
  }, []);

  return (
    <section>
      <div ref={mapRef} className="h-96"></div>
    </section>
  );
}

export default Location;
