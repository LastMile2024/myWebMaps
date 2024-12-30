var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Joinedlayer_1 = new ol.format.GeoJSON();
var features_Joinedlayer_1 = format_Joinedlayer_1.readFeatures(json_Joinedlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Joinedlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Joinedlayer_1.addFeatures(features_Joinedlayer_1);
var lyr_Joinedlayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Joinedlayer_1, 
                style: style_Joinedlayer_1,
                popuplayertitle: 'Joined layer',
                interactive: true,
    title: 'Joined layer<br />\
    <img src="styles/legend/Joinedlayer_1_0.png" /> <br />\
    <img src="styles/legend/Joinedlayer_1_1.png" /> 0<br />\
    <img src="styles/legend/Joinedlayer_1_2.png" /> 1<br />\
    <img src="styles/legend/Joinedlayer_1_3.png" /> 2<br />\
    <img src="styles/legend/Joinedlayer_1_4.png" /> 3<br />\
    <img src="styles/legend/Joinedlayer_1_5.png" /> 4<br />\
    <img src="styles/legend/Joinedlayer_1_6.png" /> 5<br />\
    <img src="styles/legend/Joinedlayer_1_7.png" /> 6<br />\
    <img src="styles/legend/Joinedlayer_1_8.png" /> 7<br />\
    <img src="styles/legend/Joinedlayer_1_9.png" /> 8<br />\
    <img src="styles/legend/Joinedlayer_1_10.png" /> 9<br />\
    <img src="styles/legend/Joinedlayer_1_11.png" /> 10<br />\
    <img src="styles/legend/Joinedlayer_1_12.png" /> 11<br />\
    <img src="styles/legend/Joinedlayer_1_13.png" /> 12<br />\
    <img src="styles/legend/Joinedlayer_1_14.png" /> 14<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Joinedlayer_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Joinedlayer_1];
lyr_Joinedlayer_1.set('fieldAliases', {'fid': 'fid', 'numberOfCasualties': 'numberOfCasualties', 'ACCIDENT_code_ralbad': 'ACCIDENT_code_ralbad', 'Year': 'Year', 'month': 'month', 'Day of the Week': 'Day of the Week', 'Accident Severity': 'Accident Severity', 'Accident Type': 'Accident Type', 'Time of Day': 'Time of Day', 'Road Type': 'Road Type', 'Intersection Name': 'Intersection Name', 'First Street': 'First Street', 'Second Street': 'Second Street', 'Anchor Quality': 'Anchor Quality', 'Total Bicycle Casualtie': 'Total Bicycle Casualtie', 'Total Electric Bicycle Casualties': 'Total Electric Bicycle Casualties', 'Total Other Casualties': 'Total Other Casualties', 'Total Pedestrian Casualties': 'Total Pedestrian Casualties', 'Total Electric Scooter Casualties': 'Total Electric Scooter Casualties', 'Total Private Vehicle Casualties': 'Total Private Vehicle Casualties', 'Total Casualties': 'Total Casualties', 'within30mBikelane': 'within30mBikelane', });
lyr_Joinedlayer_1.set('fieldImages', {'fid': '', 'numberOfCasualties': '', 'ACCIDENT_code_ralbad': '', 'Year': '', 'month': '', 'Day of the Week': '', 'Accident Severity': '', 'Accident Type': '', 'Time of Day': '', 'Road Type': '', 'Intersection Name': '', 'First Street': '', 'Second Street': '', 'Anchor Quality': '', 'Total Bicycle Casualtie': '', 'Total Electric Bicycle Casualties': '', 'Total Other Casualties': '', 'Total Pedestrian Casualties': '', 'Total Electric Scooter Casualties': '', 'Total Private Vehicle Casualties': '', 'Total Casualties': '', 'within30mBikelane': '', });
lyr_Joinedlayer_1.set('fieldLabels', {'fid': 'hidden field', 'numberOfCasualties': 'inline label - visible with data', 'ACCIDENT_code_ralbad': 'inline label - always visible', 'Year': 'inline label - always visible', 'month': 'inline label - always visible', 'Day of the Week': 'inline label - always visible', 'Accident Severity': 'inline label - always visible', 'Accident Type': 'inline label - always visible', 'Time of Day': 'inline label - always visible', 'Road Type': 'inline label - always visible', 'Intersection Name': 'inline label - always visible', 'First Street': 'inline label - always visible', 'Second Street': 'inline label - always visible', 'Anchor Quality': 'inline label - always visible', 'Total Bicycle Casualtie': 'inline label - always visible', 'Total Electric Bicycle Casualties': 'inline label - always visible', 'Total Other Casualties': 'inline label - always visible', 'Total Pedestrian Casualties': 'inline label - always visible', 'Total Electric Scooter Casualties': 'inline label - always visible', 'Total Private Vehicle Casualties': 'inline label - always visible', 'Total Casualties': 'inline label - always visible', 'within30mBikelane': 'inline label - always visible', });
lyr_Joinedlayer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});