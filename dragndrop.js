 function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    	for (var i = 0, f; f = files[i]; i++) {
      		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    	}
    //puts it into html as a list
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	var dropped_building = ''
		 for (var i = 0; i < files.length; i++) {
			var reader = new FileReader();
			reader.readAsText(files[i]);
			reader.onload = readSuccess; 

				function readSuccess(evt) {
					file_contents = evt.target.result;
                	dropped_building = JSON.parse(file_contents);
                	console.log(JSON.parse(file_contents)); //JSON.stringify(json)--> string
                	
                	
					// $.ajax({
     //    				type: 'POST',
     //   					dataType: 'geojson',     //  					url: '',
     //   					data: file_contents, 
     //  							  success: function (ret) {
     //   							   alert('AJAX successfully posted');          
     //   					   }
     //  				});

     			console.log(dropped_building['features'])
               	map.addSource('dragndrop', {
                		'type': 'geojson',
                  		'data': {
                  			"type":"FeatureCollection",
                  			"features": dropped_building.features
                  		}
                	})
				map.addLayer({
       					"id": "fromdragndrop",
       					"type": "fill-extrusion",
      					"source": "dragndrop",
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
                			}
           				}
				})




		//clear files? append list?
}

}

		}

function myFunction() {
	map.removeLayer('fromdragndrop')
	map.removeSource('dragndrop')

	console.log('button clicked')
}
		

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy'; 
}

// dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);


