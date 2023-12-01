var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> BABADAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> BABADAN LOR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> BACEM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> BADER<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> BAGI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> BAJULAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> BAKUR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> BALEREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> BANARAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> BANARAN KULON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> BANCONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> BANDUNGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> BANGUNSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> BANJARASARI KULON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> BANJAREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> BANJARSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> BANJARSARI WETAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> BANTENGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> BANYUKAMBANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> BATOK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> BEDOHO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> BENDOLO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> BENER<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> BETEK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> BIBRIK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> BLABAKAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> BLIMBING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> BOBOL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> BODAG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> BOLO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> BONGSOPOTRO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> BRUMBUN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> BUDUG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> BUDURAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> BUKUR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> BULAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> BULAKREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> BULU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> CABEAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> CANDIMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> CERMO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> DAGANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> DARMOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> DAWUHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> DEMANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> DEMPELAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> DIMONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> DOHO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> DOLOPO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> DUKUH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> DUREN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> DURENAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> DUYUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> GADING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> GANDUL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> GARON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> GEGER<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> GEMARANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> GLONGGONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> GLONGGONGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> GOLAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> GONDOWIDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> GORANGGARENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> GROBOGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> GUNUNGSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> JATIREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> JATISARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> JERUKGULUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> JETIS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> JIWAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> JOGODAYUH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> JOHO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> JOSENAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> KAIBON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> KAJANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> KALIABU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> KALIGUNTING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> KANIGORO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> KANUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> KARANGANYAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> KARANGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> KARANGSONO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> KARE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_83.png" /> KEBONAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_84.png" /> KEBONSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_85.png" /> KEDONDONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_86.png" /> KEDUNGBANTENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_87.png" /> KEDUNGJATI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_88.png" /> KEDUNGMARON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_89.png" /> KEDUNGPANJI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_90.png" /> KEDUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_91.png" /> KEHUTANAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_92.png" /> KEL.BANGUNSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_93.png" /> KELUN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_94.png" /> KEMIRI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_95.png" /> KENONGOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_96.png" /> KEPEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_97.png" /> KEPET<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_98.png" /> KERAJAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_99.png" /> KERANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_100.png" /> KERTOBANYON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_101.png" /> KERTOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_102.png" /> KETANDAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_103.png" /> KETAWANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_104.png" /> KINANDANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_105.png" /> KINCANG WETAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_106.png" /> KIRINGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_107.png" /> KLAGEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_108.png" /> KLAGENGAMBIRAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_109.png" /> KLAGENSERUT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_110.png" /> KLANGON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_111.png" /> KLECOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_112.png" /> KLINO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_113.png" /> KLITIK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_114.png" /> KLOROGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_115.png" /> KLUMPIT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_116.png" /> KLUMUTAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_117.png" /> KRADINAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_118.png" /> KRANDEGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_119.png" /> KRANGGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_120.png" /> KREBET<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_121.png" /> KRESEK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_122.png" /> KROKEH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_123.png" /> KRONDONAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_124.png" /> KUNCEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_125.png" /> KUWIRAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_126.png" /> KUWU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_127.png" /> KWANGSEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_128.png" /> LEBAKAYU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_129.png" /> LEGUNDI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_130.png" /> LEMAHBANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_131.png" /> LEMBAH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_132.png" /> LUWORO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_133.png" /> MADIGONDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_134.png" /> MANCON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_135.png" /> MANGUNHARJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_136.png" /> MANISREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_137.png" /> MATESIH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_138.png" /> MEJAYAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_139.png" /> MENDAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_140.png" /> MIYONO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_141.png" /> MLILIR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_142.png" /> MOJOMANIS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_143.png" /> MOJOPURNO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_144.png" /> MOJORAYUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_145.png" /> MOJOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_146.png" /> MORANG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_147.png" /> MRUWAK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_148.png" /> MUNENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_149.png" /> MUNGGUT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_150.png" /> NAMBANGAN KIDUL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_151.png" /> NAMBANGAN LOR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_152.png" /> NAMPU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_153.png" /> NGADIPURO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_154.png" /> NGADIREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_155.png" /> NGALE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_156.png" /> NGAMPEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_157.png" /> NGEBEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_158.png" /> NGENGONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_159.png" /> NGENGOR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_160.png" /> NGEPEH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_161.png" /> NGETREP<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_162.png" /> NGLAMBANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_163.png" /> NGLAMES<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_164.png" /> NGLANDUK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_165.png" /> NGLANDUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_166.png" /> NGLIMAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_167.png" /> NGRANGET<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_168.png" /> NGROGUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_169.png" /> NGUDIKAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_170.png" /> PACINAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_171.png" /> PADAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_172.png" /> PAGOTAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_173.png" /> PAJARAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_174.png" /> PALUR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_175.png" /> PANDEAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_176.png" /> PANDEYAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_177.png" /> PATIHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_178.png" /> PILANGBANGO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_179.png" /> PILANGKENCENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_180.png" /> PILANGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_181.png" /> PLUMPUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_182.png" /> PRAMBON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_183.png" /> PUCANGANOM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_184.png" /> PUCANGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_185.png" /> PUHTI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_186.png" /> PULE<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_187.png" /> PULEREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_188.png" /> PUPUS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_189.png" /> PURWOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_190.png" /> PURWOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_191.png" /> PUTAT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_192.png" /> RANDUALAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_193.png" /> REJOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_194.png" /> REJOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_195.png" /> RINGINANOM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_196.png" /> RONOWIJAYAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_197.png" /> SAMBIREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_198.png" /> SANGEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_199.png" /> SARENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_200.png" /> SAWAHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_201.png" /> SAWO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_202.png" /> SEBAYI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_203.png" /> SEDAH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_204.png" /> SEGULUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_205.png" /> SEKAR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_206.png" /> SEMANDING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_207.png" /> SEMBUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_208.png" /> SEMEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_209.png" /> SEMPU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_210.png" /> SENDANGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_211.png" /> SEWULAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_212.png" /> SIDODADI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_213.png" /> SIDOMULYO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_214.png" /> SIDOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_215.png" /> SIMO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_216.png" /> SINGGAHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_217.png" /> SIRAPAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_218.png" /> SLAMBUR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_219.png" /> SOBRAH<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_220.png" /> SOGATEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_221.png" /> SOGO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_222.png" /> SRATEN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_223.png" /> SUDIMOROHARJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_224.png" /> SUGIHWARAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_225.png" /> SUKOHARJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_226.png" /> SUKOLILO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_227.png" /> SUKOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_228.png" /> SUKOSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_229.png" /> SUKOWIDI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_230.png" /> SULUK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_231.png" /> SUMBERBENDO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_232.png" /> SUMBERBENING<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_233.png" /> SUMBEREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_234.png" /> SUMBERGANDU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_235.png" /> SUMBERSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_236.png" /> SURATMAJAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_237.png" /> TALUNAMPEL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_238.png" /> TAMBAKMAS<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_239.png" /> TANJUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_240.png" /> TAPELAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_241.png" /> TAWANGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_242.png" /> TEGALARUM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_243.png" /> TEGUHAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_244.png" /> TEMPURSARI<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_245.png" /> TILENG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_246.png" /> TIRON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_247.png" /> TRISONO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_248.png" /> TRITIK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_249.png" /> TULUNG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_250.png" /> TULUNGREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_251.png" /> UTERAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_252.png" /> WADUK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_253.png" /> WARUREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_254.png" /> WAYUT<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_255.png" /> WILANGAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_256.png" /> WINONG<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_257.png" /> WONOAYU<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_258.png" /> WONOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_259.png" /> WUNGU<br />'
        });
var format_TitikKMLadministrasidesa_ar_25k_2 = new ol.format.GeoJSON();
var features_TitikKMLadministrasidesa_ar_25k_2 = format_TitikKMLadministrasidesa_ar_25k_2.readFeatures(json_TitikKMLadministrasidesa_ar_25k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikKMLadministrasidesa_ar_25k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikKMLadministrasidesa_ar_25k_2.addFeatures(features_TitikKMLadministrasidesa_ar_25k_2);
var lyr_TitikKMLadministrasidesa_ar_25k_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikKMLadministrasidesa_ar_25k_2, 
                style: style_TitikKMLadministrasidesa_ar_25k_2,
                interactive: true,
                title: 'Titik KML — administrasidesa_ar_25k'
            });
var format_TitikDesaMadiun_3 = new ol.format.GeoJSON();
var features_TitikDesaMadiun_3 = format_TitikDesaMadiun_3.readFeatures(json_TitikDesaMadiun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikDesaMadiun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikDesaMadiun_3.addFeatures(features_TitikDesaMadiun_3);cluster_TitikDesaMadiun_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TitikDesaMadiun_3
});
var lyr_TitikDesaMadiun_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TitikDesaMadiun_3, 
                style: style_TitikDesaMadiun_3,
                interactive: true,
                title: '<img src="styles/legend/TitikDesaMadiun_3.png" /> Titik Desa Madiun'
            });
var format_TITIKKMLBARUtitik_desa_madiun_4 = new ol.format.GeoJSON();
var features_TITIKKMLBARUtitik_desa_madiun_4 = format_TITIKKMLBARUtitik_desa_madiun_4.readFeatures(json_TITIKKMLBARUtitik_desa_madiun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKKMLBARUtitik_desa_madiun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKKMLBARUtitik_desa_madiun_4.addFeatures(features_TITIKKMLBARUtitik_desa_madiun_4);
var lyr_TITIKKMLBARUtitik_desa_madiun_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIKKMLBARUtitik_desa_madiun_4, 
                style: style_TITIKKMLBARUtitik_desa_madiun_4,
                interactive: true,
                title: 'TITIK KML BARU — titik_desa_madiun'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_TitikKMLadministrasidesa_ar_25k_2.setVisible(true);lyr_TitikDesaMadiun_3.setVisible(true);lyr_TITIKKMLBARUtitik_desa_madiun_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_TitikKMLadministrasidesa_ar_25k_2,lyr_TitikDesaMadiun_3,lyr_TITIKKMLBARUtitik_desa_madiun_4];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TitikKMLadministrasidesa_ar_25k_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TitikDesaMadiun_3.set('fieldAliases', {'id': 'id', 'Titik Desa': 'Titik Desa', });
lyr_TITIKKMLBARUtitik_desa_madiun_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Titik Desa': 'Titik Desa', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TitikKMLadministrasidesa_ar_25k_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TitikDesaMadiun_3.set('fieldImages', {'id': 'TextEdit', 'Titik Desa': 'TextEdit', });
lyr_TITIKKMLBARUtitik_desa_madiun_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id': '', 'Titik Desa': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TitikKMLadministrasidesa_ar_25k_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TitikDesaMadiun_3.set('fieldLabels', {'id': 'no label', 'Titik Desa': 'inline label', });
lyr_TITIKKMLBARUtitik_desa_madiun_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'Titik Desa': 'no label', });
lyr_TITIKKMLBARUtitik_desa_madiun_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});