(function(previousMethods){

if (typeof previousMethods === 'undefined') {
  // Defining previously that object allows you to use that plugin even if you have overridden L.map
  previousMethods = {
    getTiledPixelBounds: L.GridLayer.prototype._getTiledPixelBounds
  };
}

L.GridLayer.include({

  _getTiledPixelBounds : function(center, zoom, tileZoom) {
    var pixelBounds = previousMethods.getTiledPixelBounds.call(this, center, zoom, tileZoom);

    // Default is to buffer one tiles beyond the pixel bounds (edgeBufferTiles = 1).
    var edgeBufferTiles = this.options.edgeBufferTiles || 1;

    if (edgeBufferTiles > 0) {
      var pixelEdgeBuffer = edgeBufferTiles * this.options.tileSize;
      pixelBounds = new L.Bounds(pixelBounds.min.subtract([pixelEdgeBuffer, pixelEdgeBuffer]), pixelBounds.max.add([pixelEdgeBuffer, pixelEdgeBuffer]));
    }

    return pixelBounds;
  }
});

})(window.leafletEdgeBufferPreviousMethods);
