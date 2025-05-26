// TypeScript declaration for Leaflet.EdgeBuffer plugin
import 'leaflet';

declare module 'leaflet' {
  export interface GridLayerOptions {
    /**
     * Number of extra tiles to load beyond the map view on each edge.
     */
    edgeBufferTiles?: number | null;
  }
}
