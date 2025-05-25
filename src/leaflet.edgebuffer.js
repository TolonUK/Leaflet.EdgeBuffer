/**
 * Leaflet.EdgeBuffer plugin for Leaflet 2.0+ (ESM version)
 * Adds an edge buffer to GridLayer tile loading.
 */
import { GridLayer, Bounds } from 'leaflet';

const originalGetTiledPixelBounds = GridLayer.prototype._getTiledPixelBounds;

/**
 * Enables the EdgeBuffer extension for all GridLayers.
 */
export const enableEdgeBuffer = () => {
  if (GridLayer.prototype._edgeBufferEnabled) return;
  GridLayer.prototype._edgeBufferEnabled = true;

  GridLayer.include({
    _getTiledPixelBounds(center, zoom, tileZoom) {
      let pixelBounds = originalGetTiledPixelBounds.call(this, center, zoom, tileZoom);
      let edgeBufferTiles = 1;
      if (this.options.edgeBufferTiles !== undefined && this.options.edgeBufferTiles !== null) {
        edgeBufferTiles = this.options.edgeBufferTiles;
      }
      if (edgeBufferTiles > 0) {
        const tileSize = this.getTileSize();
        const pixelEdgeBuffer = tileSize.multiplyBy(edgeBufferTiles);
        pixelBounds = new Bounds(
          pixelBounds.min.subtract(pixelEdgeBuffer),
          pixelBounds.max.add(pixelEdgeBuffer)
        );
      }
      return pixelBounds;
    },
  });
};

export default enableEdgeBuffer;
