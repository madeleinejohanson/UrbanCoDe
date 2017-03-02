## Grasshopper Components
Currently two Grasshopper components exsist used for writing and reading GeoJSON.
### Polygon to GeoJSON 
#### Polyline Curve (P)
Polygon to convert to GeoJSON.
#### Key (K)
Properties used to describe geoemtry.
<br>
To specify the height, base height and colour of the polygon on Mapbox, use the following keys:

    height
    base_height
    colour 
Please note that the keys are case sensitive.

#### Value (V)
Valules of properties.The list should be structured so that the first branch of data is associated with the first key. This allows unique values to be associated with multiple polygons.

##### GeoJSON (J)
GeoJSON Feature Collection.

<br>

### GeoJSON to Polygon
#### GeoJSON (J)
Input GeoJSON File.
#### Polyline Curve (P)
Outputs Close Polygone Curve.
#### Closed Brep (B)
Outputs Closed Brep if the GeoJSON contains a property called 'height' with a numeric value.
#### Colour (C)
Outputs a colour value if the GeoJSON contains a property called 'colour'.
