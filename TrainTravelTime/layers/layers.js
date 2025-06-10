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

        var lyr_googlemaps_1 = new ol.layer.Tile({
            'title': 'google maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDBDarkMatter_2 = new ol.layer.Tile({
            'title': 'CartoDB Dark Matter',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            })
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
                popuplayertitle: 'זמן הגעה לרכבת האוניברסיטה',
                interactive: true,
    title: 'זמן הגעה לרכבת האוניברסיטה<br />\
    <img src="styles/legend/_3_0.png" /> עד 10 דקות<br />\
    <img src="styles/legend/_3_1.png" /> בין 10 ל20 דקות<br />\
    <img src="styles/legend/_3_2.png" /> בין 20 ל30 דקות<br />\
    <img src="styles/legend/_3_3.png" /> מעל 30 דקות<br />\
    <img src="styles/legend/_3_4.png" /> אין קו ישיר<br />' });
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
                popuplayertitle: 'זמן הגעה לרכבת ההגנה',
                interactive: true,
    title: 'זמן הגעה לרכבת ההגנה<br />\
    <img src="styles/legend/_4_0.png" /> עד 10 דקות<br />\
    <img src="styles/legend/_4_1.png" /> בין 10 ל20 דקות<br />\
    <img src="styles/legend/_4_2.png" /> בין 20 ל30 דקות<br />\
    <img src="styles/legend/_4_3.png" /> מעל 30 דקות<br />\
    <img src="styles/legend/_4_4.png" /> אין קו ישיר<br />' });
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
                popuplayertitle: 'זמן הגעה לרכבת השלום',
                interactive: true,
    title: 'זמן הגעה לרכבת השלום<br />\
    <img src="styles/legend/_5_0.png" /> עד 10 דקות<br />\
    <img src="styles/legend/_5_1.png" /> בין 10 ל20 דקות<br />\
    <img src="styles/legend/_5_2.png" /> בין 20 ל30 דקות<br />\
    <img src="styles/legend/_5_3.png" /> מעל 30 דקות<br />\
    <img src="styles/legend/_5_4.png" /> אין קו ישיר<br />' });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'זמן הגעה לרכבת סבידור',
                interactive: true,
    title: 'זמן הגעה לרכבת סבידור<br />\
    <img src="styles/legend/_6_0.png" /> עד 10 דקות<br />\
    <img src="styles/legend/_6_1.png" /> בין 10 ל20 דקות<br />\
    <img src="styles/legend/_6_2.png" /> בין 20 ל30 דקות<br />\
    <img src="styles/legend/_6_3.png" /> מעל 30 דקות<br />\
    <img src="styles/legend/_6_4.png" /> אין קו ישיר<br />' });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'תחנות רכבת',
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> תחנות רכבת'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_googlemaps_1.setVisible(true);lyr_CartoDBDarkMatter_2.setVisible(true);lyr__3.setVisible(false);lyr__4.setVisible(false);lyr__5.setVisible(false);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_googlemaps_1,lyr_CartoDBDarkMatter_2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'journey_type': 'journey_type', 'total_time_min': 'total_time_min', 'orig_walk_dist_m': 'orig_walk_dist_m', 'orig_walk_time_min': 'orig_walk_time_min', 'vm_bus_route_id': 'vm_bus_route_id', 'vm_route_short_name': 'vm_route_short_name', 'route_tuesday_dep': 'route_tuesday_dep', 'route_weekly_dep': 'route_weekly_dep', 'route_am_rush_dep': 'route_am_rush_dep', 'route_pm_rush_dep': 'route_pm_rush_dep', 'vm_bus_time_min': 'vm_bus_time_min', 'vm_bus_dist_val': 'vm_bus_dist_val', 'dest_walk_dist_m': 'dest_walk_dist_m', 'dest_walk_time_min': 'dest_walk_time_min', 'vm_orig_stop_code': 'vm_orig_stop_code', 'vm_dest_stop_code': 'vm_dest_stop_code', 'gtfs_sched_bus_time_min': 'gtfs_sched_bus_time_min', 'gtfs_trip_id_used': 'gtfs_trip_id_used', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'journey_type': 'journey_type', 'total_time_min': 'total_time_min', 'orig_walk_dist_m': 'orig_walk_dist_m', 'orig_walk_time_min': 'orig_walk_time_min', 'vm_bus_route_id': 'vm_bus_route_id', 'vm_route_short_name': 'vm_route_short_name', 'route_tuesday_dep': 'route_tuesday_dep', 'route_weekly_dep': 'route_weekly_dep', 'route_am_rush_dep': 'route_am_rush_dep', 'route_pm_rush_dep': 'route_pm_rush_dep', 'vm_bus_time_min': 'vm_bus_time_min', 'vm_bus_dist_val': 'vm_bus_dist_val', 'dest_walk_dist_m': 'dest_walk_dist_m', 'dest_walk_time_min': 'dest_walk_time_min', 'vm_orig_stop_code': 'vm_orig_stop_code', 'vm_dest_stop_code': 'vm_dest_stop_code', 'gtfs_sched_bus_time_min': 'gtfs_sched_bus_time_min', 'gtfs_trip_id_used': 'gtfs_trip_id_used', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'journey_type': 'journey_type', 'total_time_min': 'total_time_min', 'orig_walk_dist_m': 'orig_walk_dist_m', 'orig_walk_time_min': 'orig_walk_time_min', 'vm_bus_route_id': 'vm_bus_route_id', 'vm_route_short_name': 'vm_route_short_name', 'route_tuesday_dep': 'route_tuesday_dep', 'route_weekly_dep': 'route_weekly_dep', 'route_am_rush_dep': 'route_am_rush_dep', 'route_pm_rush_dep': 'route_pm_rush_dep', 'vm_bus_time_min': 'vm_bus_time_min', 'vm_bus_dist_val': 'vm_bus_dist_val', 'dest_walk_dist_m': 'dest_walk_dist_m', 'dest_walk_time_min': 'dest_walk_time_min', 'vm_orig_stop_code': 'vm_orig_stop_code', 'vm_dest_stop_code': 'vm_dest_stop_code', 'gtfs_sched_bus_time_min': 'gtfs_sched_bus_time_min', 'gtfs_trip_id_used': 'gtfs_trip_id_used', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'journey_type': 'journey_type', 'total_time_min': 'total_time_min', 'orig_walk_dist_m': 'orig_walk_dist_m', 'orig_walk_time_min': 'orig_walk_time_min', 'vm_bus_route_id': 'vm_bus_route_id', 'vm_route_short_name': 'vm_route_short_name', 'route_tuesday_dep': 'route_tuesday_dep', 'route_weekly_dep': 'route_weekly_dep', 'route_am_rush_dep': 'route_am_rush_dep', 'route_pm_rush_dep': 'route_pm_rush_dep', 'vm_bus_time_min': 'vm_bus_time_min', 'vm_bus_dist_val': 'vm_bus_dist_val', 'dest_walk_dist_m': 'dest_walk_dist_m', 'dest_walk_time_min': 'dest_walk_time_min', 'vm_orig_stop_code': 'vm_orig_stop_code', 'vm_dest_stop_code': 'vm_dest_stop_code', 'gtfs_sched_bus_time_min': 'gtfs_sched_bus_time_min', 'gtfs_trip_id_used': 'gtfs_trip_id_used', });
lyr__7.set('fieldAliases', {'ASSET_NO': 'ASSET_NO', 'NAME': 'NAME', 'MAAGAN_ID': 'MAAGAN_ID', 'MGN_TYPE': 'MGN_TYPE', 'SOURCE': 'SOURCE', 'STATUS': 'STATUS', 'KAV_CODE': 'KAV_CODE', 'MGN_UPD': 'MGN_UPD', 'TYPE': 'TYPE', 'YEARMONTH': 'YEARMONTH', 'disp_name': 'disp_name', });
lyr__3.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', 'journey_type': '', 'total_time_min': '', 'orig_walk_dist_m': '', 'orig_walk_time_min': '', 'vm_bus_route_id': '', 'vm_route_short_name': '', 'route_tuesday_dep': '', 'route_weekly_dep': '', 'route_am_rush_dep': '', 'route_pm_rush_dep': '', 'vm_bus_time_min': '', 'vm_bus_dist_val': '', 'dest_walk_dist_m': '', 'dest_walk_time_min': '', 'vm_orig_stop_code': '', 'vm_dest_stop_code': '', 'gtfs_sched_bus_time_min': '', 'gtfs_trip_id_used': '', });
lyr__4.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', 'journey_type': '', 'total_time_min': '', 'orig_walk_dist_m': '', 'orig_walk_time_min': '', 'vm_bus_route_id': '', 'vm_route_short_name': '', 'route_tuesday_dep': '', 'route_weekly_dep': '', 'route_am_rush_dep': '', 'route_pm_rush_dep': '', 'vm_bus_time_min': '', 'vm_bus_dist_val': '', 'dest_walk_dist_m': '', 'dest_walk_time_min': '', 'vm_orig_stop_code': '', 'vm_dest_stop_code': '', 'gtfs_sched_bus_time_min': '', 'gtfs_trip_id_used': '', });
lyr__5.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', 'journey_type': '', 'total_time_min': '', 'orig_walk_dist_m': '', 'orig_walk_time_min': '', 'vm_bus_route_id': '', 'vm_route_short_name': '', 'route_tuesday_dep': '', 'route_weekly_dep': '', 'route_am_rush_dep': '', 'route_pm_rush_dep': '', 'vm_bus_time_min': '', 'vm_bus_dist_val': '', 'dest_walk_dist_m': '', 'dest_walk_time_min': '', 'vm_orig_stop_code': '', 'vm_dest_stop_code': '', 'gtfs_sched_bus_time_min': '', 'gtfs_trip_id_used': '', });
lyr__6.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', 'journey_type': '', 'total_time_min': '', 'orig_walk_dist_m': '', 'orig_walk_time_min': '', 'vm_bus_route_id': '', 'vm_route_short_name': '', 'route_tuesday_dep': '', 'route_weekly_dep': '', 'route_am_rush_dep': '', 'route_pm_rush_dep': '', 'vm_bus_time_min': '', 'vm_bus_dist_val': '', 'dest_walk_dist_m': '', 'dest_walk_time_min': '', 'vm_orig_stop_code': '', 'vm_dest_stop_code': '', 'gtfs_sched_bus_time_min': '', 'gtfs_trip_id_used': '', });
lyr__7.set('fieldImages', {'ASSET_NO': 'TextEdit', 'NAME': 'TextEdit', 'MAAGAN_ID': 'TextEdit', 'MGN_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUS': 'TextEdit', 'KAV_CODE': 'TextEdit', 'MGN_UPD': 'DateTime', 'TYPE': 'TextEdit', 'YEARMONTH': 'TextEdit', 'disp_name': '', });
lyr__3.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'journey_type': 'inline label - visible with data', 'total_time_min': 'inline label - visible with data', 'orig_walk_dist_m': 'inline label - visible with data', 'orig_walk_time_min': 'inline label - visible with data', 'vm_bus_route_id': 'inline label - visible with data', 'vm_route_short_name': 'inline label - visible with data', 'route_tuesday_dep': 'hidden field', 'route_weekly_dep': 'hidden field', 'route_am_rush_dep': 'hidden field', 'route_pm_rush_dep': 'hidden field', 'vm_bus_time_min': 'inline label - visible with data', 'vm_bus_dist_val': 'inline label - visible with data', 'dest_walk_dist_m': 'inline label - visible with data', 'dest_walk_time_min': 'inline label - visible with data', 'vm_orig_stop_code': 'hidden field', 'vm_dest_stop_code': 'hidden field', 'gtfs_sched_bus_time_min': 'hidden field', 'gtfs_trip_id_used': 'hidden field', });
lyr__4.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'journey_type': 'inline label - visible with data', 'total_time_min': 'inline label - visible with data', 'orig_walk_dist_m': 'inline label - visible with data', 'orig_walk_time_min': 'inline label - visible with data', 'vm_bus_route_id': 'inline label - visible with data', 'vm_route_short_name': 'inline label - visible with data', 'route_tuesday_dep': 'hidden field', 'route_weekly_dep': 'hidden field', 'route_am_rush_dep': 'hidden field', 'route_pm_rush_dep': 'hidden field', 'vm_bus_time_min': 'inline label - visible with data', 'vm_bus_dist_val': 'inline label - visible with data', 'dest_walk_dist_m': 'inline label - visible with data', 'dest_walk_time_min': 'inline label - visible with data', 'vm_orig_stop_code': 'hidden field', 'vm_dest_stop_code': 'hidden field', 'gtfs_sched_bus_time_min': 'hidden field', 'gtfs_trip_id_used': 'hidden field', });
lyr__5.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'journey_type': 'inline label - visible with data', 'total_time_min': 'inline label - visible with data', 'orig_walk_dist_m': 'inline label - visible with data', 'orig_walk_time_min': 'inline label - visible with data', 'vm_bus_route_id': 'inline label - visible with data', 'vm_route_short_name': 'inline label - visible with data', 'route_tuesday_dep': 'hidden field', 'route_weekly_dep': 'hidden field', 'route_am_rush_dep': 'hidden field', 'route_pm_rush_dep': 'hidden field', 'vm_bus_time_min': 'inline label - visible with data', 'vm_bus_dist_val': 'inline label - visible with data', 'dest_walk_dist_m': 'inline label - visible with data', 'dest_walk_time_min': 'inline label - visible with data', 'vm_orig_stop_code': 'hidden field', 'vm_dest_stop_code': 'hidden field', 'gtfs_sched_bus_time_min': 'hidden field', 'gtfs_trip_id_used': 'hidden field', });
lyr__6.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'journey_type': 'inline label - visible with data', 'total_time_min': 'inline label - visible with data', 'orig_walk_dist_m': 'inline label - visible with data', 'orig_walk_time_min': 'inline label - visible with data', 'vm_bus_route_id': 'inline label - visible with data', 'vm_route_short_name': 'inline label - always visible', 'route_tuesday_dep': 'hidden field', 'route_weekly_dep': 'hidden field', 'route_am_rush_dep': 'hidden field', 'route_pm_rush_dep': 'hidden field', 'vm_bus_time_min': 'inline label - visible with data', 'vm_bus_dist_val': 'inline label - visible with data', 'dest_walk_dist_m': 'inline label - visible with data', 'dest_walk_time_min': 'inline label - visible with data', 'vm_orig_stop_code': 'hidden field', 'vm_dest_stop_code': 'hidden field', 'gtfs_sched_bus_time_min': 'hidden field', 'gtfs_trip_id_used': 'hidden field', });
lyr__7.set('fieldLabels', {'ASSET_NO': 'no label', 'NAME': 'no label', 'MAAGAN_ID': 'no label', 'MGN_TYPE': 'no label', 'SOURCE': 'no label', 'STATUS': 'no label', 'KAV_CODE': 'no label', 'MGN_UPD': 'no label', 'TYPE': 'no label', 'YEARMONTH': 'no label', 'disp_name': 'no label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});