var size = 0;
var placement = 'point';
function categories_RAIL_STAT_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'תל אביב - אוניברסיטה':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [264, 141.3],
                  scale: 0.06060606060606061,
                  anchor: [132.0, 70.65],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/IsraelTrainLogoSymbolOnly.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תל אביב - ההגנה':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [264, 141.3],
                  scale: 0.06060606060606061,
                  anchor: [132.0, 70.65],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/IsraelTrainLogoSymbolOnly_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תל אביב - השלום':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [264, 141.3],
                  scale: 0.06060606060606061,
                  anchor: [132.0, 70.65],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/IsraelTrainLogoSymbolOnly_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'תל אביב - סבידור מרכז':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [264, 141.3],
                  scale: 0.06060606060606061,
                  anchor: [132.0, 70.65],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/IsraelTrainLogoSymbolOnly_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RAIL_STAT_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("NAME");
    var labelFont = "18.2px \'Alef\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 6.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("disp_name") !== null) {
        labelText = String(feature.get("disp_name"));
    }
    
    var style = categories_RAIL_STAT_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
