// import 'ol/ol.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: [-0.1279688, 51.5077286],
//     zoom: 4
//   })
// });

      // import Map from 'ol/Map.js';
      // import View from 'ol/View.js';
      // import TileLayer from 'ol/layer/Tile.js';
      // import OSM from 'ol/source/OSM.js';
      // import {fromLonLat} from 'ol/proj';

      // const brasil = [-51.925282,-14.235004];
      //  // caution partner, read on...
      //   // since we are using OSM, we have to transform the coordinates...
      // const center = fromLonLat(brasil);

      // var map = new Map({
      //   layers: [
      //     new TileLayer({
      //       source: new OSM()
      //     })
      //   ],
      //   target: 'map',
      //   view: new View({
      //     center: center,
      //     zoom: 4
      //   })
      // });

      // CODE HERE!
      import Map from 'ol/Map.js';
      import Overlay from 'ol/Overlay.js';
      import View from 'ol/View.js';
      import {toStringHDMS} from 'ol/coordinate.js';
      import TileLayer from 'ol/layer/Tile.js';
      import {fromLonLat, toLonLat} from 'ol/proj.js';
      import OSM from 'ol/source/OSM.js';

      const brasil = [-51.925282,-14.235004];
       // caution partner, read on...
        // since we are using OSM, we have to transform the coordinates...
      const center = fromLonLat(brasil);

      var layer = new TileLayer({
        source: new OSM()
      });

      var map = new Map({
        layers: [layer],
        target: 'map',
        view: new View({
          center: center,
          zoom: 4
        })
      });

      var pos = [[-46.6388,-23.5489],[-23.5489,-46.6388],[0,0]];

      // var pos1 = fromLonLat([-46.6388,-23.5489]);

          // UM MARCADOR APENAS
          // var marker = new Overlay({
          //   position: pos1,
          //   positioning: 'center-center',
          //   element: document.getElementById('marker'),
          //   stopEvent: false
          // });
          // map.addOverlay(marker);
      
       var marker = []

          for(var i=0; i<pos.length; i++){

            var div = document.createElement("div")
            div.title = "Marker"
            div.id = "marker"+i
            div.className = "fa fa-map-pin"

            marker[i] = new Overlay({
                position: fromLonLat(pos[i]),
                positioning: 'center-center',
                element: div,
                stopEvent: false
            });
            map.addOverlay(marker[i]);
          }
    


      // Vienna marker
      // var marker = new Overlay({
      //   position: pos,
      //   positioning: 'center-center',
      //   element: document.getElementById('marker'),
      //   stopEvent: false
      // });
      // map.addOverlay(marker);

      // CODE FINISH

      // Vienna label
      // var brasil = new Overlay({
        // position: pos,
        // element: document.getElementById('brasil')
      // });
      // map.addOverlay(brasil);

      // Popup showing the position the user clicked
      // var popup = new Overlay({
      //   element: document.getElementById('popup')
      // });
      // map.addOverlay(popup);

      // map.on('click', function(evt) {
      //   var element = popup.getElement();
      //   var coordinate = evt.coordinate;
      //   var hdms = toStringHDMS(toLonLat(coordinate));

      //   $(element).popover('destroy');
      //   popup.setPosition(coordinate);
      //   $(element).popover({
      //     placement: 'top',
      //     animation: false,
      //     html: true,
      //     content: '<p>The location you clicked was:</p><code>' + hdms + '</code>'
      //   });
      //   $(element).popover('show');
      // });
  