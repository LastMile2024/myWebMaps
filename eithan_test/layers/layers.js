var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_city_bound_1 = new ol.format.GeoJSON();
var features_city_bound_1 = format_city_bound_1.readFeatures(json_city_bound_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_bound_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_bound_1.addFeatures(features_city_bound_1);
var lyr_city_bound_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_city_bound_1, 
                style: style_city_bound_1,
                popuplayertitle: 'city_bound',
                interactive: true,
                title: '<img src="styles/legend/city_bound_1.png" /> city_bound'
            });
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
                interactive: true,
                title: 'RAIL_STAT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_city_bound_1.setVisible(true);lyr_RAIL_STAT_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_city_bound_1,lyr_RAIL_STAT_2];
lyr_city_bound_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'build_all': 'build_all', 'build_in_buffer': 'build_in_buffer', 'per_nayadut': 'per_nayadut', });
lyr_RAIL_STAT_2.set('fieldAliases', {'ASSET_NO': 'ASSET_NO', 'NAME': 'NAME', 'MAAGAN_ID': 'MAAGAN_ID', 'MGN_TYPE': 'MGN_TYPE', 'SOURCE': 'SOURCE', 'STATUS': 'STATUS', 'KAV_CODE': 'KAV_CODE', 'MGN_UPD': 'MGN_UPD', 'TYPE': 'TYPE', 'YEARMONTH': 'YEARMONTH', 'disp_name': 'disp_name', });
lyr_city_bound_1.set('fieldImages', {'fid': '', 'name': '', 'build_all': '', 'build_in_buffer': '', 'per_nayadut': '', });
lyr_RAIL_STAT_2.set('fieldImages', {'ASSET_NO': 'TextEdit', 'NAME': 'TextEdit', 'MAAGAN_ID': 'TextEdit', 'MGN_TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUS': 'TextEdit', 'KAV_CODE': 'TextEdit', 'MGN_UPD': 'DateTime', 'TYPE': 'TextEdit', 'YEARMONTH': 'TextEdit', 'disp_name': '', });
lyr_city_bound_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'build_all': 'no label', 'build_in_buffer': 'no label', 'per_nayadut': 'no label', });
lyr_RAIL_STAT_2.set('fieldLabels', {'ASSET_NO': 'no label', 'NAME': 'no label', 'MAAGAN_ID': 'no label', 'MGN_TYPE': 'no label', 'SOURCE': 'no label', 'STATUS': 'no label', 'KAV_CODE': 'no label', 'MGN_UPD': 'no label', 'TYPE': 'no label', 'YEARMONTH': 'no label', 'disp_name': 'no label', });
lyr_RAIL_STAT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});