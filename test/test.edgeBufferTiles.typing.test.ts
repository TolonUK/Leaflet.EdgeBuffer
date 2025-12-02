import L from 'leaflet';
import '../src/leaflet.edgebuffer';

// Positive test: should allow number
// eslint-disable-next-line no-unused-vars
const layer = L.gridLayer({
  edgeBufferTiles: 2,
});

// Should allow undefined (default)
L.gridLayer({});
