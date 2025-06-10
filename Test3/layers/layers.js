var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1 = new ol.format.GeoJSON();
var features_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1 = format_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1.readFeatures(json_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1.addFeatures(features_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1);
var lyr_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1, 
                style: style_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1,
                popuplayertitle: 'rt_savidor_4edp_am_forOnline — rt_savidor_4edp_am',
                interactive: true,
    title: 'rt_savidor_4edp_am_forOnline — rt_savidor_4edp_am<br />\
    <img src="styles/legend/rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1_0.png" /> -1 - -1<br />\
    <img src="styles/legend/rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1_1.png" /> -1 - 16.7<br />\
    <img src="styles/legend/rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1_2.png" /> 15.0 - 20.0<br />\
    <img src="styles/legend/rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1_3.png" /> 20.0 - 30.0<br />\
    <img src="styles/legend/rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1_4.png" /> 30.0 - 100.0<br />' });
var format_RAIL_STAT_2 = new ol.format.GeoJSON();
var features_RAIL_STAT_2 = format_RAIL_STAT_2.readFeatures(json_RAIL_STAT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAIL_STAT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIL_STAT_2.addFeatures(features_RAIL_STAT_2);
var lyr_RAIL_STAT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIL_STAT_2, 
                style: style_RAIL_STAT_2,
                popuplayertitle: 'RAIL_STAT',
                interactive: false,
    title: 'RAIL_STAT<br />\
    <img src="styles/legend/RAIL_STAT_2_0.png" /> תל אביב - אוניברסיטה<br />\
    <img src="styles/legend/RAIL_STAT_2_1.png" /> תל אביב - ההגנה<br />\
    <img src="styles/legend/RAIL_STAT_2_2.png" /> תל אביב - השלום<br />\
    <img src="styles/legend/RAIL_STAT_2_3.png" /> תל אביב - סבידור מרכז<br />' });

lyr_CartoDbPositron_0.setVisible(true);lyr_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1.setVisible(true);lyr_RAIL_STAT_2.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1,lyr_RAIL_STAT_2];
lyr_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'journey_type': 'journey_type', 'total_time_min': 'total_time_min', 'orig_walk_dist_m': 'orig_walk_dist_m', 'orig_walk_time_min': 'orig_walk_time_min', 'vm_bus_route_id': 'vm_bus_route_id', 'vm_route_short_name': 'vm_route_short_name', 'vm_bus_time_min': 'vm_bus_time_min', 'vm_bus_dist_val': 'vm_bus_dist_val', 'dest_walk_dist_m': 'dest_walk_dist_m', 'dest_walk_time_min': 'dest_walk_time_min', 'vm_orig_stop_code': 'vm_orig_stop_code', 'vm_dest_stop_code': 'vm_dest_stop_code', });
lyr_RAIL_STAT_2.set('fieldAliases', {'ASSET_NO': 'ASSET_NO', 'NAME': 'NAME', 'MAAGAN_ID': 'MAAGAN_ID', 'MGN_TYPE': 'MGN_TYPE', 'SOURCE': 'SOURCE', 'STATUS': 'STATUS', 'KAV_CODE': 'KAV_CODE', 'MGN_UPD': 'MGN_UPD', 'TYPE': 'TYPE', 'YEARMONTH': 'YEARMONTH', 'disp_name': 'disp_name', });
lyr_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1.set('fieldImages', {'fid': '', 'osm_id': '', 'journey_type': '', 'total_time_min': '', 'orig_walk_dist_m': '', 'orig_walk_time_min': '', 'vm_bus_route_id': '', 'vm_route_short_name': '', 'vm_bus_time_min': '', 'vm_bus_dist_val': '', 'dest_walk_dist_m': '', 'dest_walk_time_min': '', 'vm_orig_stop_code': '', 'vm_dest_stop_code': '', });
lyr_RAIL_STAT_2.set('fieldImages', {'ASSET_NO': 'TextEdit', 'NAME': 'TextEdit', 'MAAGAN_ID': 'TextEdit', 'MGN_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUS': 'TextEdit', 'KAV_CODE': 'TextEdit', 'MGN_UPD': 'DateTime', 'TYPE': 'TextEdit', 'YEARMONTH': 'TextEdit', 'disp_name': '', });
lyr_rt_savidor_4edp_am_forOnlinert_savidor_4edp_am_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'journey_type': 'no label', 'total_time_min': 'no label', 'orig_walk_dist_m': 'no label', 'orig_walk_time_min': 'no label', 'vm_bus_route_id': 'no label', 'vm_route_short_name': 'no label', 'vm_bus_time_min': 'no label', 'vm_bus_dist_val': 'no label', 'dest_walk_dist_m': 'no label', 'dest_walk_time_min': 'no label', 'vm_orig_stop_code': 'no label', 'vm_dest_stop_code': 'no label', });
lyr_RAIL_STAT_2.set('fieldLabels', {'ASSET_NO': 'no label', 'NAME': 'no label', 'MAAGAN_ID': 'no label', 'MGN_TYPE': 'no label', 'SOURCE': 'no label', 'STATUS': 'no label', 'KAV_CODE': 'no label', 'MGN_UPD': 'no label', 'TYPE': 'no label', 'YEARMONTH': 'no label', 'disp_name': 'no label', });
lyr_RAIL_STAT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});