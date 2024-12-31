var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'שבילי אופניים',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> שבילי אופניים'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'תאונות אופניים הכל',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> תאונות אופניים הכל'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'תאונות ברחוב ללא שביל (או לפני הקמת השביל)',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> תאונות ברחוב ללא שביל (או לפני הקמת השביל)'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'תאונות ברחוב עם שביל',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> תאונות ברחוב עם שביל'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr__2.setVisible(true);lyr__3.setVisible(false);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_OpenStreetMap_1,lyr__2,lyr__3,lyr__4,lyr__5];
lyr__2.set('fieldAliases', {'fid': 'fid', 'oidshvil': 'oidshvil', 'width': 'width', 'shemmikta': 'shemmikta', 'direction': 'direction', 'bitzua': 'bitzua', 'msorech': 'msorech', 'miflas': 'miflas', 'datecreate': 'datecreate', 'dateimport': 'dateimport', 'ShapeLengt': 'ShapeLengt', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'ACCIDENT_code_ralbad': 'ACCIDENT_code_ralbad', 'Year': 'Year', 'month': 'month', 'Day of the Week': 'Day of the Week', 'Accident Severity': 'Accident Severity', 'Accident Type': 'Accident Type', 'Time of Day': 'Time of Day', 'Road Type': 'Road Type', 'Intersection Name': 'Intersection Name', 'First Street': 'First Street', 'Second Street': 'Second Street', 'Anchor Coordinates (X)': 'Anchor Coordinates (X)', 'Anchor Coordinates (Y)': 'Anchor Coordinates (Y)', 'Anchor Quality': 'Anchor Quality', 'Total Bus Casualties': 'Total Bus Casualties', 'Total Minibus Casualties': 'Total Minibus Casualties', 'Total Motorcycle and Scooter Casualties': 'Total Motorcycle and Scooter Casualties', 'Total Bicycle Casualtie': 'Total Bicycle Casualtie', 'Total Electric Bicycle Casualties': 'Total Electric Bicycle Casualties', 'Total Other Casualties': 'Total Other Casualties', 'Total Ambulance Casualties': 'Total Ambulance Casualties', 'Total  Supporting/Towing Vehicle Casualties': 'Total  Supporting/Towing Vehicle Casualties', 'Total Pedestrian Casualties': 'Total Pedestrian Casualties', 'Total Tractor Casualties': 'Total Tractor Casualties', 'Total Unknown Casualties': 'Total Unknown Casualties', 'Total Taxi Casualties': 'Total Taxi Casualties', 'Total nonLicence other Casualties': 'Total nonLicence other Casualties', 'Total Electric Scooter Casualties': 'Total Electric Scooter Casualties', 'Total Commercial Vehicle and Truck Casualties': 'Total Commercial Vehicle and Truck Casualties', 'Total work Vehicle Casualties': 'Total work Vehicle Casualties', 'Total Private Vehicle Casualties': 'Total Private Vehicle Casualties', 'Total Casualties': 'Total Casualties', 'within30mBikelane': 'within30mBikelane', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'ACCIDENT_code_ralbad': 'ACCIDENT_code_ralbad', 'Year': 'Year', 'month': 'month', 'Day of the Week': 'Day of the Week', 'Accident Severity': 'Accident Severity', 'Accident Type': 'Accident Type', 'Time of Day': 'Time of Day', 'Road Type': 'Road Type', 'Intersection Name': 'Intersection Name', 'First Street': 'First Street', 'Second Street': 'Second Street', 'Anchor Coordinates (X)': 'Anchor Coordinates (X)', 'Anchor Coordinates (Y)': 'Anchor Coordinates (Y)', 'Anchor Quality': 'Anchor Quality', 'Total Bus Casualties': 'Total Bus Casualties', 'Total Minibus Casualties': 'Total Minibus Casualties', 'Total Motorcycle and Scooter Casualties': 'Total Motorcycle and Scooter Casualties', 'Total Bicycle Casualtie': 'Total Bicycle Casualtie', 'Total Electric Bicycle Casualties': 'Total Electric Bicycle Casualties', 'Total Other Casualties': 'Total Other Casualties', 'Total Ambulance Casualties': 'Total Ambulance Casualties', 'Total  Supporting/Towing Vehicle Casualties': 'Total  Supporting/Towing Vehicle Casualties', 'Total Pedestrian Casualties': 'Total Pedestrian Casualties', 'Total Tractor Casualties': 'Total Tractor Casualties', 'Total Unknown Casualties': 'Total Unknown Casualties', 'Total Taxi Casualties': 'Total Taxi Casualties', 'Total nonLicence other Casualties': 'Total nonLicence other Casualties', 'Total Electric Scooter Casualties': 'Total Electric Scooter Casualties', 'Total Commercial Vehicle and Truck Casualties': 'Total Commercial Vehicle and Truck Casualties', 'Total work Vehicle Casualties': 'Total work Vehicle Casualties', 'Total Private Vehicle Casualties': 'Total Private Vehicle Casualties', 'Total Casualties': 'Total Casualties', 'within30mBikelane': 'within30mBikelane', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'ACCIDENT_code_ralbad': 'ACCIDENT_code_ralbad', 'Year': 'Year', 'month': 'month', 'Day of the Week': 'Day of the Week', 'Accident Severity': 'Accident Severity', 'Accident Type': 'Accident Type', 'Time of Day': 'Time of Day', 'Road Type': 'Road Type', 'Intersection Name': 'Intersection Name', 'First Street': 'First Street', 'Second Street': 'Second Street', 'Anchor Coordinates (X)': 'Anchor Coordinates (X)', 'Anchor Coordinates (Y)': 'Anchor Coordinates (Y)', 'Anchor Quality': 'Anchor Quality', 'Total Bus Casualties': 'Total Bus Casualties', 'Total Minibus Casualties': 'Total Minibus Casualties', 'Total Motorcycle and Scooter Casualties': 'Total Motorcycle and Scooter Casualties', 'Total Bicycle Casualtie': 'Total Bicycle Casualtie', 'Total Electric Bicycle Casualties': 'Total Electric Bicycle Casualties', 'Total Other Casualties': 'Total Other Casualties', 'Total Ambulance Casualties': 'Total Ambulance Casualties', 'Total  Supporting/Towing Vehicle Casualties': 'Total  Supporting/Towing Vehicle Casualties', 'Total Pedestrian Casualties': 'Total Pedestrian Casualties', 'Total Tractor Casualties': 'Total Tractor Casualties', 'Total Unknown Casualties': 'Total Unknown Casualties', 'Total Taxi Casualties': 'Total Taxi Casualties', 'Total nonLicence other Casualties': 'Total nonLicence other Casualties', 'Total Electric Scooter Casualties': 'Total Electric Scooter Casualties', 'Total Commercial Vehicle and Truck Casualties': 'Total Commercial Vehicle and Truck Casualties', 'Total work Vehicle Casualties': 'Total work Vehicle Casualties', 'Total Private Vehicle Casualties': 'Total Private Vehicle Casualties', 'Total Casualties': 'Total Casualties', 'within30mBikelane': 'within30mBikelane', });
lyr__2.set('fieldImages', {'fid': '', 'oidshvil': '', 'width': '', 'shemmikta': '', 'direction': '', 'bitzua': '', 'msorech': '', 'miflas': '', 'datecreate': '', 'dateimport': '', 'ShapeLengt': '', });
lyr__3.set('fieldImages', {'fid': '', 'ACCIDENT_code_ralbad': '', 'Year': '', 'month': '', 'Day of the Week': '', 'Accident Severity': '', 'Accident Type': '', 'Time of Day': '', 'Road Type': '', 'Intersection Name': '', 'First Street': '', 'Second Street': '', 'Anchor Coordinates (X)': '', 'Anchor Coordinates (Y)': '', 'Anchor Quality': '', 'Total Bus Casualties': '', 'Total Minibus Casualties': '', 'Total Motorcycle and Scooter Casualties': '', 'Total Bicycle Casualtie': '', 'Total Electric Bicycle Casualties': '', 'Total Other Casualties': '', 'Total Ambulance Casualties': '', 'Total  Supporting/Towing Vehicle Casualties': '', 'Total Pedestrian Casualties': '', 'Total Tractor Casualties': '', 'Total Unknown Casualties': '', 'Total Taxi Casualties': '', 'Total nonLicence other Casualties': '', 'Total Electric Scooter Casualties': '', 'Total Commercial Vehicle and Truck Casualties': '', 'Total work Vehicle Casualties': '', 'Total Private Vehicle Casualties': '', 'Total Casualties': '', 'within30mBikelane': '', });
lyr__4.set('fieldImages', {'fid': '', 'ACCIDENT_code_ralbad': '', 'Year': '', 'month': '', 'Day of the Week': '', 'Accident Severity': '', 'Accident Type': '', 'Time of Day': '', 'Road Type': '', 'Intersection Name': '', 'First Street': '', 'Second Street': '', 'Anchor Coordinates (X)': '', 'Anchor Coordinates (Y)': '', 'Anchor Quality': '', 'Total Bus Casualties': '', 'Total Minibus Casualties': '', 'Total Motorcycle and Scooter Casualties': '', 'Total Bicycle Casualtie': '', 'Total Electric Bicycle Casualties': '', 'Total Other Casualties': '', 'Total Ambulance Casualties': '', 'Total  Supporting/Towing Vehicle Casualties': '', 'Total Pedestrian Casualties': '', 'Total Tractor Casualties': '', 'Total Unknown Casualties': '', 'Total Taxi Casualties': '', 'Total nonLicence other Casualties': '', 'Total Electric Scooter Casualties': '', 'Total Commercial Vehicle and Truck Casualties': '', 'Total work Vehicle Casualties': '', 'Total Private Vehicle Casualties': '', 'Total Casualties': '', 'within30mBikelane': '', });
lyr__5.set('fieldImages', {'fid': '', 'ACCIDENT_code_ralbad': '', 'Year': '', 'month': '', 'Day of the Week': '', 'Accident Severity': '', 'Accident Type': '', 'Time of Day': '', 'Road Type': '', 'Intersection Name': '', 'First Street': '', 'Second Street': '', 'Anchor Coordinates (X)': '', 'Anchor Coordinates (Y)': '', 'Anchor Quality': '', 'Total Bus Casualties': '', 'Total Minibus Casualties': '', 'Total Motorcycle and Scooter Casualties': '', 'Total Bicycle Casualtie': '', 'Total Electric Bicycle Casualties': '', 'Total Other Casualties': '', 'Total Ambulance Casualties': '', 'Total  Supporting/Towing Vehicle Casualties': '', 'Total Pedestrian Casualties': '', 'Total Tractor Casualties': '', 'Total Unknown Casualties': '', 'Total Taxi Casualties': '', 'Total nonLicence other Casualties': '', 'Total Electric Scooter Casualties': '', 'Total Commercial Vehicle and Truck Casualties': '', 'Total work Vehicle Casualties': '', 'Total Private Vehicle Casualties': '', 'Total Casualties': '', 'within30mBikelane': '', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'oidshvil': 'no label', 'width': 'no label', 'shemmikta': 'no label', 'direction': 'no label', 'bitzua': 'no label', 'msorech': 'no label', 'miflas': 'no label', 'datecreate': 'no label', 'dateimport': 'no label', 'ShapeLengt': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'inline label - visible with data', 'ACCIDENT_code_ralbad': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'month': 'inline label - visible with data', 'Day of the Week': 'inline label - visible with data', 'Accident Severity': 'inline label - visible with data', 'Accident Type': 'inline label - visible with data', 'Time of Day': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', 'Intersection Name': 'inline label - visible with data', 'First Street': 'inline label - visible with data', 'Second Street': 'inline label - visible with data', 'Anchor Coordinates (X)': 'inline label - visible with data', 'Anchor Coordinates (Y)': 'inline label - visible with data', 'Anchor Quality': 'inline label - visible with data', 'Total Bus Casualties': 'inline label - visible with data', 'Total Minibus Casualties': 'inline label - visible with data', 'Total Motorcycle and Scooter Casualties': 'inline label - visible with data', 'Total Bicycle Casualtie': 'inline label - visible with data', 'Total Electric Bicycle Casualties': 'inline label - visible with data', 'Total Other Casualties': 'inline label - visible with data', 'Total Ambulance Casualties': 'inline label - visible with data', 'Total  Supporting/Towing Vehicle Casualties': 'inline label - visible with data', 'Total Pedestrian Casualties': 'inline label - visible with data', 'Total Tractor Casualties': 'inline label - visible with data', 'Total Unknown Casualties': 'inline label - visible with data', 'Total Taxi Casualties': 'inline label - visible with data', 'Total nonLicence other Casualties': 'inline label - visible with data', 'Total Electric Scooter Casualties': 'inline label - visible with data', 'Total Commercial Vehicle and Truck Casualties': 'inline label - visible with data', 'Total work Vehicle Casualties': 'inline label - visible with data', 'Total Private Vehicle Casualties': 'inline label - visible with data', 'Total Casualties': 'inline label - visible with data', 'within30mBikelane': 'hidden field', });
lyr__4.set('fieldLabels', {'fid': 'inline label - visible with data', 'ACCIDENT_code_ralbad': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'month': 'inline label - visible with data', 'Day of the Week': 'inline label - visible with data', 'Accident Severity': 'inline label - visible with data', 'Accident Type': 'inline label - visible with data', 'Time of Day': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', 'Intersection Name': 'inline label - visible with data', 'First Street': 'inline label - visible with data', 'Second Street': 'inline label - visible with data', 'Anchor Coordinates (X)': 'inline label - visible with data', 'Anchor Coordinates (Y)': 'inline label - visible with data', 'Anchor Quality': 'inline label - visible with data', 'Total Bus Casualties': 'inline label - visible with data', 'Total Minibus Casualties': 'inline label - visible with data', 'Total Motorcycle and Scooter Casualties': 'inline label - visible with data', 'Total Bicycle Casualtie': 'inline label - visible with data', 'Total Electric Bicycle Casualties': 'inline label - visible with data', 'Total Other Casualties': 'inline label - visible with data', 'Total Ambulance Casualties': 'inline label - visible with data', 'Total  Supporting/Towing Vehicle Casualties': 'inline label - visible with data', 'Total Pedestrian Casualties': 'inline label - visible with data', 'Total Tractor Casualties': 'inline label - visible with data', 'Total Unknown Casualties': 'inline label - visible with data', 'Total Taxi Casualties': 'inline label - visible with data', 'Total nonLicence other Casualties': 'inline label - visible with data', 'Total Electric Scooter Casualties': 'inline label - visible with data', 'Total Commercial Vehicle and Truck Casualties': 'inline label - visible with data', 'Total work Vehicle Casualties': 'inline label - visible with data', 'Total Private Vehicle Casualties': 'inline label - visible with data', 'Total Casualties': 'inline label - visible with data', 'within30mBikelane': 'hidden field', });
lyr__5.set('fieldLabels', {'fid': 'inline label - visible with data', 'ACCIDENT_code_ralbad': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'month': 'inline label - visible with data', 'Day of the Week': 'inline label - visible with data', 'Accident Severity': 'inline label - visible with data', 'Accident Type': 'inline label - visible with data', 'Time of Day': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', 'Intersection Name': 'inline label - visible with data', 'First Street': 'inline label - visible with data', 'Second Street': 'inline label - visible with data', 'Anchor Coordinates (X)': 'inline label - visible with data', 'Anchor Coordinates (Y)': 'inline label - visible with data', 'Anchor Quality': 'inline label - visible with data', 'Total Bus Casualties': 'inline label - visible with data', 'Total Minibus Casualties': 'inline label - visible with data', 'Total Motorcycle and Scooter Casualties': 'inline label - visible with data', 'Total Bicycle Casualtie': 'inline label - visible with data', 'Total Electric Bicycle Casualties': 'inline label - visible with data', 'Total Other Casualties': 'inline label - visible with data', 'Total Ambulance Casualties': 'inline label - visible with data', 'Total  Supporting/Towing Vehicle Casualties': 'inline label - visible with data', 'Total Pedestrian Casualties': 'inline label - visible with data', 'Total Tractor Casualties': 'inline label - visible with data', 'Total Unknown Casualties': 'inline label - visible with data', 'Total Taxi Casualties': 'inline label - visible with data', 'Total nonLicence other Casualties': 'inline label - visible with data', 'Total Electric Scooter Casualties': 'inline label - visible with data', 'Total Commercial Vehicle and Truck Casualties': 'inline label - visible with data', 'Total work Vehicle Casualties': 'inline label - visible with data', 'Total Private Vehicle Casualties': 'inline label - visible with data', 'Total Casualties': 'inline label - visible with data', 'within30mBikelane': 'hidden field', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});