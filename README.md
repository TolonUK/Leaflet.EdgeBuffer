# Leaflet.EdgeBuffer
Leaflet 1.0 plugin to support pre-loading tiles outside the current viewport.

## Usage

Include `Leaflet.EdgeBuffer.js`. By default, a 1 tile buffer will be added beyond the viewport. To define a different buffer size use the options below. 

### Options

 - **edgeBufferTiles**: (number) The number of tiles that should be loaded beyond the edge of the map viewport. This may be a fractional number. Defaults to 1.


## Demos

This demo shows two maps, one without this plugin active and one with.

  - http://www.tolon.co.uk/Leaflet.EdgeBuffer/comparison.html

## License

Leaflet.loading is free software and may be redistributed under the MIT
License.

 [Leaflet]: https://github.com/Leaflet/Leaflet
