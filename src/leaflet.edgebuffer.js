/* Leaflet EdgeBuffer Plugin - v2.0 Compatible version by sh4rkman */

// ES6 Module for Leaflet 2.0+
import { GridLayer, Bounds } from 'leaflet';

const originalPxBoundsToTileRange = GridLayer.prototype._pxBoundsToTileRange;

GridLayer.prototype._pxBoundsToTileRange = function (bounds) {
  const tileRange = originalPxBoundsToTileRange.call(this, bounds);

  // Default is to buffer one tile beyond the pixel bounds (edgeBufferTiles = 1)
  let edgeBufferTiles = 1;
  if ((this.options.edgeBufferTiles !== undefined) && (this.options.edgeBufferTiles !== null)) {
    edgeBufferTiles = this.options.edgeBufferTiles;
  }

  if (edgeBufferTiles > 0) {
    return new Bounds(
      tileRange.min.subtract([edgeBufferTiles, edgeBufferTiles]),
      tileRange.max.add([edgeBufferTiles, edgeBufferTiles])
    );
  }

  return tileRange;
};

export default {};