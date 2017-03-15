mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZWxlaW5lam9oYW5zb24iLCJhIjoiY2lzczduYzJ4MDZrODJucGh0Mm1xbmVxNCJ9.i7q4iT8FFgh_y5v4we5UhQ';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: [151.2056, -33.8572],

    // homebush [151.08223, -33.8680],
    // sydney pier [151.2056, -33.8572],
    zoom: 15,
    pitch: 45,
    bearing: -17.6,
    container: 'map'
});

  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    console.log('yes')
}
    //var files = evt.dataTransfer.files; // FileList object.
/*
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
  */

// the 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    map.addSource('json-buildings', {
                    'type': 'geojson',
                    'data': './GeoJSON/homebush.GeoJSON'
                }),
    map.addSource('json-buildings1', {
                    'type': 'geojson',
                    'data': './GeoJSON/naz.GeoJSON'
                }),
        map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });
    map.addLayer({
        "id": "fromgrasshopper",
        "type": "fill-extrusion",
        "source": "json-buildings",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 //'fill-extrusion-opacity': .6
            }
    });
    map.addLayer({
        "id": "fromgrasshopper2",
        "type": "fill-extrusion",
        "source": "json-buildings1",
           'paint': {
                'fill-extrusion-color' : {
                    'property': 'colour',
                    'type': 'identity'
                },
                'fill-extrusion-height' : {
                    'type': 'identity',
                    'property': 'height'
                },
                'fill-extrusion-base' : {
                    'type': 'identity',
                    'property': 'base_height'
                },
                 //'fill-extrusion-opacity': .6
            }
    });
    

});

var toggleableLayerIds = [ 'fromgrasshopper', 'fromgrasshopper2', '3d-buildings'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
         e.preventDefault();
         e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

// When a click event occurs near a polygon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: [ 'fromgrasshopper', 'fromgrasshopper2'] });
    if (!features.length) {
        return;
    }

    var feature = features[0];
    var feat = features.length;

    var popup = new mapboxgl.Popup()
        .setLngLat(map.unproject(e.point))
        .setHTML(feature.properties.tag)
        .addTo(map);

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: [ 'fromgrasshopper', 'fromgrasshopper2'] });
    map.getCanvas().style.cursor = feat ? 'pointer' : '';
});
});