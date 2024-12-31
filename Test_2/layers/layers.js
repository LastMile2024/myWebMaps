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
var format_BikeLanes_2 = new ol.format.GeoJSON();
var features_BikeLanes_2 = format_BikeLanes_2.readFeatures(json_BikeLanes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeLanes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeLanes_2.addFeatures(features_BikeLanes_2);
var lyr_BikeLanes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeLanes_2, 
                style: style_BikeLanes_2,
                popuplayertitle: 'Bike Lanes',
                interactive: false,
                title: '<img src="styles/legend/BikeLanes_2.png" /> Bike Lanes'
            });
var format_BikeAccidentsWithoutBikeLane_3 = new ol.format.GeoJSON();
var features_BikeAccidentsWithoutBikeLane_3 = format_BikeAccidentsWithoutBikeLane_3.readFeatures(json_BikeAccidentsWithoutBikeLane_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeAccidentsWithoutBikeLane_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeAccidentsWithoutBikeLane_3.addFeatures(features_BikeAccidentsWithoutBikeLane_3);
var lyr_BikeAccidentsWithoutBikeLane_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeAccidentsWithoutBikeLane_3, 
                style: style_BikeAccidentsWithoutBikeLane_3,
                popuplayertitle: 'Bike Accidents Without BikeLane',
                interactive: true,
                title: '<img src="styles/legend/BikeAccidentsWithoutBikeLane_3.png" /> Bike Accidents Without BikeLane'
            });
var format_BikeAccidentswithBikeLane_4 = new ol.format.GeoJSON();
var features_BikeAccidentswithBikeLane_4 = format_BikeAccidentswithBikeLane_4.readFeatures(json_BikeAccidentswithBikeLane_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeAccidentswithBikeLane_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeAccidentswithBikeLane_4.addFeatures(features_BikeAccidentswithBikeLane_4);
var lyr_BikeAccidentswithBikeLane_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeAccidentswithBikeLane_4, 
                style: style_BikeAccidentswithBikeLane_4,
                popuplayertitle: 'Bike Accidents with BikeLane',
                interactive: true,
                title: '<img src="styles/legend/BikeAccidentswithBikeLane_4.png" /> Bike Accidents with BikeLane'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_BikeLanes_2.setVisible(true);lyr_BikeAccidentsWithoutBikeLane_3.setVisible(true);lyr_BikeAccidentswithBikeLane_4.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_OpenStreetMap_1,lyr_BikeLanes_2,lyr_BikeAccidentsWithoutBikeLane_3,lyr_BikeAccidentswithBikeLane_4];
lyr_BikeLanes_2.set('fieldAliases', {'fid': 'fid', 'oidshvil': 'oidshvil', 'width': 'width', 'shemmikta': 'shemmikta', 'direction': 'direction', 'bitzua': 'bitzua', 'msorech': 'msorech', 'miflas': 'miflas', 'datecreate': 'datecreate', 'dateimport': 'dateimport', 'ShapeLengt': 'ShapeLengt', });
lyr_BikeAccidentsWithoutBikeLane_3.set('fieldAliases', {'fid': 'fid', 'ACCIDENT_code_ralbad': 'ACCIDENT_code_ralbad', 'Year': 'Year', 'month': 'month', 'Day of the Week': 'Day of the Week', 'Accident Severity': 'Accident Severity', 'Accident Type': 'Accident Type', 'Time of Day': 'Time of Day', 'Road Type': 'Road Type', 'Intersection Name': 'Intersection Name', 'First Street': 'First Street', 'Second Street': 'Second Street', 'Anchor Coordinates (X)': 'Anchor Coordinates (X)', 'Anchor Coordinates (Y)': 'Anchor Coordinates (Y)', 'Anchor Quality': 'Anchor Quality', 'Total Bus Casualties': 'Total Bus Casualties', 'Total Minibus Casualties': 'Total Minibus Casualties', 'Total Motorcycle and Scooter Casualties': 'Total Motorcycle and Scooter Casualties', 'Total Bicycle Casualtie': 'Total Bicycle Casualtie', 'Total Electric Bicycle Casualties': 'Total Electric Bicycle Casualties', 'Total Other Casualties': 'Total Other Casualties', 'Total Ambulance Casualties': 'Total Ambulance Casualties', 'Total  Supporting/Towing Vehicle Casualties': 'Total  Supporting/Towing Vehicle Casualties', 'Total Pedestrian Casualties': 'Total Pedestrian Casualties', 'Total Tractor Casualties': 'Total Tractor Casualties', 'Total Unknown Casualties': 'Total Unknown Casualties', 'Total Taxi Casualties': 'Total Taxi Casualties', 'Total nonLicence other Casualties': 'Total nonLicence other Casualties', 'Total Electric Scooter Casualties': 'Total Electric Scooter Casualties', 'Total Commercial Vehicle and Truck Casualties': 'Total Commercial Vehicle and Truck Casualties', 'Total work Vehicle Casualties': 'Total work Vehicle Casualties', 'Total Private Vehicle Casualties': 'Total Private Vehicle Casualties', 'Total Casualties': 'Total Casualties', 'within30mBikelane': 'within30mBikelane', });
lyr_BikeAccidentswithBikeLane_4.set('fieldAliases', {'fid': 'fid', 'ACCIDENT_code_ralbad': 'ACCIDENT_code_ralbad', 'Year': 'Year', 'month': 'month', 'Day of the Week': 'Day of the Week', 'Accident Severity': 'Accident Severity', 'Accident Type': 'Accident Type', 'Time of Day': 'Time of Day', 'Road Type': 'Road Type', 'Intersection Name': 'Intersection Name', 'First Street': 'First Street', 'Second Street': 'Second Street', 'Anchor Coordinates (X)': 'Anchor Coordinates (X)', 'Anchor Coordinates (Y)': 'Anchor Coordinates (Y)', 'Anchor Quality': 'Anchor Quality', 'Total Bus Casualties': 'Total Bus Casualties', 'Total Minibus Casualties': 'Total Minibus Casualties', 'Total Motorcycle and Scooter Casualties': 'Total Motorcycle and Scooter Casualties', 'Total Bicycle Casualtie': 'Total Bicycle Casualtie', 'Total Electric Bicycle Casualties': 'Total Electric Bicycle Casualties', 'Total Other Casualties': 'Total Other Casualties', 'Total Ambulance Casualties': 'Total Ambulance Casualties', 'Total  Supporting/Towing Vehicle Casualties': 'Total  Supporting/Towing Vehicle Casualties', 'Total Pedestrian Casualties': 'Total Pedestrian Casualties', 'Total Tractor Casualties': 'Total Tractor Casualties', 'Total Unknown Casualties': 'Total Unknown Casualties', 'Total Taxi Casualties': 'Total Taxi Casualties', 'Total nonLicence other Casualties': 'Total nonLicence other Casualties', 'Total Electric Scooter Casualties': 'Total Electric Scooter Casualties', 'Total Commercial Vehicle and Truck Casualties': 'Total Commercial Vehicle and Truck Casualties', 'Total work Vehicle Casualties': 'Total work Vehicle Casualties', 'Total Private Vehicle Casualties': 'Total Private Vehicle Casualties', 'Total Casualties': 'Total Casualties', 'within30mBikelane': 'within30mBikelane', });
lyr_BikeLanes_2.set('fieldImages', {'fid': '', 'oidshvil': '', 'width': '', 'shemmikta': '', 'direction': '', 'bitzua': '', 'msorech': '', 'miflas': '', 'datecreate': '', 'dateimport': '', 'ShapeLengt': '', });
lyr_BikeAccidentsWithoutBikeLane_3.set('fieldImages', {'fid': '', 'ACCIDENT_code_ralbad': '', 'Year': '', 'month': '', 'Day of the Week': '', 'Accident Severity': '', 'Accident Type': '', 'Time of Day': '', 'Road Type': '', 'Intersection Name': '', 'First Street': '', 'Second Street': '', 'Anchor Coordinates (X)': '', 'Anchor Coordinates (Y)': '', 'Anchor Quality': '', 'Total Bus Casualties': '', 'Total Minibus Casualties': '', 'Total Motorcycle and Scooter Casualties': '', 'Total Bicycle Casualtie': '', 'Total Electric Bicycle Casualties': '', 'Total Other Casualties': '', 'Total Ambulance Casualties': '', 'Total  Supporting/Towing Vehicle Casualties': '', 'Total Pedestrian Casualties': '', 'Total Tractor Casualties': '', 'Total Unknown Casualties': '', 'Total Taxi Casualties': '', 'Total nonLicence other Casualties': '', 'Total Electric Scooter Casualties': '', 'Total Commercial Vehicle and Truck Casualties': '', 'Total work Vehicle Casualties': '', 'Total Private Vehicle Casualties': '', 'Total Casualties': '', 'within30mBikelane': '', });
lyr_BikeAccidentswithBikeLane_4.set('fieldImages', {'fid': '', 'ACCIDENT_code_ralbad': '', 'Year': '', 'month': '', 'Day of the Week': '', 'Accident Severity': '', 'Accident Type': '', 'Time of Day': '', 'Road Type': '', 'Intersection Name': '', 'First Street': '', 'Second Street': '', 'Anchor Coordinates (X)': '', 'Anchor Coordinates (Y)': '', 'Anchor Quality': '', 'Total Bus Casualties': '', 'Total Minibus Casualties': '', 'Total Motorcycle and Scooter Casualties': '', 'Total Bicycle Casualtie': '', 'Total Electric Bicycle Casualties': '', 'Total Other Casualties': '', 'Total Ambulance Casualties': '', 'Total  Supporting/Towing Vehicle Casualties': '', 'Total Pedestrian Casualties': '', 'Total Tractor Casualties': '', 'Total Unknown Casualties': '', 'Total Taxi Casualties': '', 'Total nonLicence other Casualties': '', 'Total Electric Scooter Casualties': '', 'Total Commercial Vehicle and Truck Casualties': '', 'Total work Vehicle Casualties': '', 'Total Private Vehicle Casualties': '', 'Total Casualties': '', 'within30mBikelane': '', });
lyr_BikeLanes_2.set('fieldLabels', {'fid': 'no label', 'oidshvil': 'no label', 'width': 'no label', 'shemmikta': 'no label', 'direction': 'no label', 'bitzua': 'no label', 'msorech': 'no label', 'miflas': 'no label', 'datecreate': 'no label', 'dateimport': 'no label', 'ShapeLengt': 'no label', });
lyr_BikeAccidentsWithoutBikeLane_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'ACCIDENT_code_ralbad': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'month': 'inline label - visible with data', 'Day of the Week': 'inline label - visible with data', 'Accident Severity': 'inline label - visible with data', 'Accident Type': 'inline label - visible with data', 'Time of Day': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', 'Intersection Name': 'inline label - visible with data', 'First Street': 'inline label - visible with data', 'Second Street': 'inline label - visible with data', 'Anchor Coordinates (X)': 'inline label - visible with data', 'Anchor Coordinates (Y)': 'inline label - visible with data', 'Anchor Quality': 'inline label - visible with data', 'Total Bus Casualties': 'inline label - visible with data', 'Total Minibus Casualties': 'inline label - visible with data', 'Total Motorcycle and Scooter Casualties': 'inline label - visible with data', 'Total Bicycle Casualtie': 'inline label - visible with data', 'Total Electric Bicycle Casualties': 'inline label - visible with data', 'Total Other Casualties': 'inline label - visible with data', 'Total Ambulance Casualties': 'inline label - visible with data', 'Total  Supporting/Towing Vehicle Casualties': 'inline label - visible with data', 'Total Pedestrian Casualties': 'inline label - visible with data', 'Total Tractor Casualties': 'inline label - visible with data', 'Total Unknown Casualties': 'inline label - visible with data', 'Total Taxi Casualties': 'inline label - visible with data', 'Total nonLicence other Casualties': 'inline label - visible with data', 'Total Electric Scooter Casualties': 'inline label - visible with data', 'Total Commercial Vehicle and Truck Casualties': 'inline label - visible with data', 'Total work Vehicle Casualties': 'inline label - visible with data', 'Total Private Vehicle Casualties': 'inline label - visible with data', 'Total Casualties': 'inline label - visible with data', 'within30mBikelane': 'hidden field', });
lyr_BikeAccidentswithBikeLane_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'ACCIDENT_code_ralbad': 'inline label - visible with data', 'Year': 'inline label - visible with data', 'month': 'inline label - visible with data', 'Day of the Week': 'inline label - visible with data', 'Accident Severity': 'inline label - visible with data', 'Accident Type': 'inline label - visible with data', 'Time of Day': 'inline label - visible with data', 'Road Type': 'inline label - visible with data', 'Intersection Name': 'inline label - visible with data', 'First Street': 'inline label - visible with data', 'Second Street': 'inline label - visible with data', 'Anchor Coordinates (X)': 'inline label - visible with data', 'Anchor Coordinates (Y)': 'inline label - visible with data', 'Anchor Quality': 'inline label - visible with data', 'Total Bus Casualties': 'inline label - visible with data', 'Total Minibus Casualties': 'inline label - visible with data', 'Total Motorcycle and Scooter Casualties': 'inline label - visible with data', 'Total Bicycle Casualtie': 'inline label - visible with data', 'Total Electric Bicycle Casualties': 'inline label - visible with data', 'Total Other Casualties': 'inline label - visible with data', 'Total Ambulance Casualties': 'inline label - visible with data', 'Total  Supporting/Towing Vehicle Casualties': 'inline label - visible with data', 'Total Pedestrian Casualties': 'inline label - visible with data', 'Total Tractor Casualties': 'inline label - visible with data', 'Total Unknown Casualties': 'inline label - visible with data', 'Total Taxi Casualties': 'inline label - visible with data', 'Total nonLicence other Casualties': 'inline label - visible with data', 'Total Electric Scooter Casualties': 'inline label - visible with data', 'Total Commercial Vehicle and Truck Casualties': 'inline label - visible with data', 'Total work Vehicle Casualties': 'inline label - visible with data', 'Total Private Vehicle Casualties': 'inline label - visible with data', 'Total Casualties': 'inline label - visible with data', 'within30mBikelane': 'hidden field', });
lyr_BikeAccidentswithBikeLane_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});