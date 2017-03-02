#UrbanCoDe
This the documentation and practical work of Madeleine Johanson and Nazmul Azim Khan, as we conduct our Computational  Design Honours research at UNSW and in collaboration with COX Architects Sydney.  Our previous study at COX included developing a data 'pipe' between computational tools such as grasshopper and web platforms, enabling designers to create computational tools to perform tasks with a simpler user interface. This visual, graphical interface therefore has the potential to increase communication not only between the architect and the client, but also within the architectural firm. 
<br><br>
Continuing from this research, we will aid in the developmental 'UrbanPinboard.' Urban Pinboard is a new tool for collaboration that connects the public, private and community sectors in a single conversation with innovative digital technology to drive smart city transformation. Urban Pinboard will be also unique and powerful because, unlike other one-way e-platforms in use around the world, it will allow these three sectors to not just access data but also exchange their ideas, thus creating a real and powerful feedback loop. It can be considered as a library of open urban data, represented graphically in a global map interface. The platform creates an interface between unreadable datasets and its users such as government policies, survey information and development proposals. UrbanPinboard has the potential to unlock communication barriers through technology, and produce accurate data flows where site potential can be determined through a dynamic platform.
<br><br>
The current research project, UrbanCoDe, aims to be an invaluable to the community and architects alike. With an aim to improve design culture and equality of information, design proposals can be presented to the public in a clear graphical format, engaging the wider community of Sydney in urban design outcomes and solutions. Creating a platform for informed community discussion, individuals actively engage in public issues and solutions, allowing  a glimpse into the psychology behind decision making processes. Aspects such as environment, transport connections and aesthetics can be judged for their function and form.  Design variables and their relationships to one another can be simulated and understood. This exploration into the capabilities of computational design showcases how we can algorithmically deal with urban space possibilities.
<br><br>
###Project Progress 
Stage one of the research progress requires showing geometry created in Rhino and Grasshopper in a dynamic website, in this case we are using Mapbox. Mapbox is a flexible mapping platform used in the development of many apps that require live data visualisations and directions in traffic. It sources its geographical data from Open Street Maps. A new feature in Mapbox is visualising buildings in 3D. 
![Alt text](/mapbox.jpg)

how geoJSON works (attributes, features etc)
what grasshopper needs
what html is needed
show testing
explicitly say what you are not doing
eg workflows: exporting from gh, compatible with mapbox
add images of gh - tool to be packaged soon <br><br>


## Grasshopper Components
Currently two Grasshopper components exist used for writing and reading GeoJSON.
### Polygon to GeoJSON 
![Alt text](/PolygonJSON.png)
#### Polyline Curve (P)
Polygon to convert to GeoJSON.
#### Key (K)
Properties used to describe geometry.
<br>
To specify the height, base height and colour of the polygon on Mapbox, use the following keys:

    height
    base_height
    colour 
Please note that the keys are case sensitive.

#### Value (V)
Values of properties. The list should be structured so that the first branch of data is associated with the first key. This allows unique values to be associated with multiple polygons.

##### GeoJSON (J)
GeoJSON Feature Collection.


### GeoJSON to Polygon
![Alt text](/JSONPolygon.png)
#### GeoJSON (J)
Input GeoJSON File.
#### Polyline Curve (P)
Outputs Close Polygon Curve.
#### Closed Brep (B)
Outputs Closed Brep if the GeoJSON contains a property called 'height' with a numeric value.
#### Colour (C)
Outputs a colour value if the GeoJSON contains a property called 'colour'.
