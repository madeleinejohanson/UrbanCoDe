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
	
	console.log('loading1')  
			var reader = new FileReader();
			reader.readAsText(files);
			reader.onload = readSuccess;
			console.log('loading2') 

				function readSuccess(evt) {
					file_contents = evt.target.result;
                	
                	console.log("loading3")

            		
                
    //            	 map.addSource('dragndrop', {
    //                		'type': 'geojson',
    //                		'data': 'files'
    //             	}),
 			// 	map.addLayer({
    //    					"id": "fromdragndrop",
    //    					"type": "fill-extrusion",
    //   					"source": "dragndrop",
    //        				'paint': {
    //             			'fill-extrusion-color' : {
    //                 		'property': 'colour',
    //                 		'type': 'identity'
    //             			},
    //             			'fill-extrusion-height' : {
    //                 			'type': 'identity',
    //                 			'property': 'height'
    //             			},
    //             			'fill-extrusion-base' : {
    //                 			'type': 'identity',
    //                 			'property': 'base_height'
    //             			}
    //        				}
				// })
				}
		
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
