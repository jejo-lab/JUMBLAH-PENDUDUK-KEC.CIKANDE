var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JUMBLAHPENDUDUKKECCIKANDE_1 = new ol.format.GeoJSON();
var features_JUMBLAHPENDUDUKKECCIKANDE_1 = format_JUMBLAHPENDUDUKKECCIKANDE_1.readFeatures(json_JUMBLAHPENDUDUKKECCIKANDE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUMBLAHPENDUDUKKECCIKANDE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUMBLAHPENDUDUKKECCIKANDE_1.addFeatures(features_JUMBLAHPENDUDUKKECCIKANDE_1);
var lyr_JUMBLAHPENDUDUKKECCIKANDE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUMBLAHPENDUDUKKECCIKANDE_1, 
                style: style_JUMBLAHPENDUDUKKECCIKANDE_1,
                popuplayertitle: 'JUMBLAH PENDUDUK KEC.CIKANDE',
                interactive: true,
    title: 'JUMBLAH PENDUDUK KEC.CIKANDE<br />\
    <img src="styles/legend/JUMBLAHPENDUDUKKECCIKANDE_1_0.png" /> RENDAH<br />\
    <img src="styles/legend/JUMBLAHPENDUDUKKECCIKANDE_1_1.png" /> SEDANG<br />\
    <img src="styles/legend/JUMBLAHPENDUDUKKECCIKANDE_1_2.png" /> TINGGI<br />' });
var format_POLYGONTOLINE_2 = new ol.format.GeoJSON();
var features_POLYGONTOLINE_2 = format_POLYGONTOLINE_2.readFeatures(json_POLYGONTOLINE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLYGONTOLINE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLYGONTOLINE_2.addFeatures(features_POLYGONTOLINE_2);
var lyr_POLYGONTOLINE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLYGONTOLINE_2, 
                style: style_POLYGONTOLINE_2,
                popuplayertitle: 'POLYGON TO LINE',
                interactive: true,
                title: '<img src="styles/legend/POLYGONTOLINE_2.png" /> POLYGON TO LINE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_JUMBLAHPENDUDUKKECCIKANDE_1.setVisible(true);lyr_POLYGONTOLINE_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_JUMBLAHPENDUDUKKECCIKANDE_1,lyr_POLYGONTOLINE_2];
lyr_JUMBLAHPENDUDUKKECCIKANDE_1.set('fieldAliases', {'NAMA_KAB': 'NAMA_KAB', 'NAMA_DES': 'NAMA_DES', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_PULAU': 'NAMA_PULAU', 'ID': 'ID', 'Kode_PUM': 'Kode_PUM', 'NAMA_DES_1': 'NAMA_DES_1', 'Tanggal': 'Tanggal', 'Laki_Laki': 'Laki_Laki', 'Perempuan': 'Perempuan', 'Jumlah_Pen': 'Jumlah_Pen', 'Jumlah_KK': 'Jumlah_KK', 'Kepadatan_': 'Kepadatan_', 'DATA KEPEN': 'DATA KEPEN', 'DATA KEP_1': 'DATA KEP_1', 'DATA KEP_2': 'DATA KEP_2', 'DATA KEP_3': 'DATA KEP_3', 'DATA KEP_4': 'DATA KEP_4', 'DATA KEP_5': 'DATA KEP_5', 'DATA KEP_6': 'DATA KEP_6', 'DATA KEP_7': 'DATA KEP_7', });
lyr_POLYGONTOLINE_2.set('fieldAliases', {'fid': 'fid', 'NAMA_KAB': 'NAMA_KAB', 'NAMA_DES': 'NAMA_DES', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_PULAU': 'NAMA_PULAU', 'ID': 'ID', 'Kode_PUM': 'Kode_PUM', 'NAMA_DES_1': 'NAMA_DES_1', 'Tanggal': 'Tanggal', 'Laki_Laki': 'Laki_Laki', 'Perempuan': 'Perempuan', 'Jumlah_Pen': 'Jumlah_Pen', 'Jumlah_KK': 'Jumlah_KK', 'Kepadatan_': 'Kepadatan_', 'DATA KEPEN': 'DATA KEPEN', 'DATA KEP_1': 'DATA KEP_1', 'DATA KEP_2': 'DATA KEP_2', 'DATA KEP_3': 'DATA KEP_3', 'DATA KEP_4': 'DATA KEP_4', 'DATA KEP_5': 'DATA KEP_5', 'DATA KEP_6': 'DATA KEP_6', 'DATA KEP_7': 'DATA KEP_7', });
lyr_JUMBLAHPENDUDUKKECCIKANDE_1.set('fieldImages', {'NAMA_KAB': 'Hidden', 'NAMA_DES': 'TextEdit', 'NAMA_KEC': 'Hidden', 'NAMA_PULAU': 'Hidden', 'ID': 'Hidden', 'Kode_PUM': 'Hidden', 'NAMA_DES_1': 'Hidden', 'Tanggal': 'Hidden', 'Laki_Laki': 'TextEdit', 'Perempuan': 'TextEdit', 'Jumlah_Pen': 'TextEdit', 'Jumlah_KK': 'TextEdit', 'Kepadatan_': 'TextEdit', 'DATA KEPEN': 'Hidden', 'DATA KEP_1': 'Hidden', 'DATA KEP_2': 'Hidden', 'DATA KEP_3': 'Hidden', 'DATA KEP_4': 'Hidden', 'DATA KEP_5': 'Hidden', 'DATA KEP_6': 'Hidden', 'DATA KEP_7': 'Hidden', });
lyr_POLYGONTOLINE_2.set('fieldImages', {'fid': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_DES': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_PULAU': 'TextEdit', 'ID': 'TextEdit', 'Kode_PUM': 'TextEdit', 'NAMA_DES_1': 'TextEdit', 'Tanggal': 'TextEdit', 'Laki_Laki': 'TextEdit', 'Perempuan': 'TextEdit', 'Jumlah_Pen': 'TextEdit', 'Jumlah_KK': 'TextEdit', 'Kepadatan_': 'TextEdit', 'DATA KEPEN': 'TextEdit', 'DATA KEP_1': 'TextEdit', 'DATA KEP_2': 'TextEdit', 'DATA KEP_3': 'TextEdit', 'DATA KEP_4': 'TextEdit', 'DATA KEP_5': 'TextEdit', 'DATA KEP_6': 'TextEdit', 'DATA KEP_7': 'TextEdit', });
lyr_JUMBLAHPENDUDUKKECCIKANDE_1.set('fieldLabels', {'NAMA_DES': 'inline label - always visible', 'Laki_Laki': 'inline label - always visible', 'Perempuan': 'inline label - always visible', 'Jumlah_Pen': 'inline label - always visible', 'Jumlah_KK': 'inline label - always visible', 'Kepadatan_': 'inline label - always visible', });
lyr_POLYGONTOLINE_2.set('fieldLabels', {'fid': 'no label', 'NAMA_KAB': 'no label', 'NAMA_DES': 'no label', 'NAMA_KEC': 'no label', 'NAMA_PULAU': 'no label', 'ID': 'no label', 'Kode_PUM': 'no label', 'NAMA_DES_1': 'no label', 'Tanggal': 'no label', 'Laki_Laki': 'no label', 'Perempuan': 'no label', 'Jumlah_Pen': 'no label', 'Jumlah_KK': 'no label', 'Kepadatan_': 'no label', 'DATA KEPEN': 'no label', 'DATA KEP_1': 'no label', 'DATA KEP_2': 'no label', 'DATA KEP_3': 'no label', 'DATA KEP_4': 'no label', 'DATA KEP_5': 'no label', 'DATA KEP_6': 'no label', 'DATA KEP_7': 'no label', });
lyr_POLYGONTOLINE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});