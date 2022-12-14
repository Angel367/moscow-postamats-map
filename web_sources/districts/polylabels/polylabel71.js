
export function get_polylabel71(){
    return ({
        type: 'Feature',
        id: 71,
        geometry: {
            type: 'Polygon',
            coordinates: [[
                [55.7342686, 37.7672992],
[55.7341543, 37.767519],
[55.7332536, 37.7692666],
[55.7329049, 37.7699652],
[55.7309061, 37.7738525],
[55.7307436, 37.7741734],
[55.730387, 37.7748882],
[55.7299391, 37.7758967],
[55.729506, 37.7771428],
[55.7288887, 37.7790629],
[55.7253363, 37.7896666],
[55.7252929, 37.789796],
[55.7244619, 37.7923071],
[55.7239789, 37.7937189],
[55.7228929, 37.7967705],
[55.7221056, 37.7991182],
[55.7215389, 37.8008114],
[55.7202665, 37.8048077],
[55.7189991, 37.8085732],
[55.7178206, 37.812093],
[55.7173163, 37.8135815],
[55.7162257, 37.8167715],
[55.7148955, 37.8207278],
[55.713846, 37.8238797],
[55.7126833, 37.8273124],
[55.7104752, 37.8339009],
[55.709776, 37.8360239],
[55.7100786, 37.8361995],
[55.710676, 37.8365292],
[55.713115, 37.8377716],
[55.7140094, 37.8381905],
[55.7144828, 37.8383587],
[55.71552, 37.8386129],
[55.7166267, 37.8387626],
[55.718685, 37.8389634],
[55.7229853, 37.8395539],
[55.7264604, 37.8399181],
[55.7290063, 37.8402276],
[55.7304867, 37.8404157],
[55.7319557, 37.8406349],
[55.740493, 37.8416485],
[55.7430306, 37.8418104],
[55.7439448, 37.8418474],
[55.7440404, 37.8418528],
[55.7472241, 37.8420082],
[55.7471761, 37.8425433],
[55.7488839, 37.8426698],
[55.749073, 37.8426838],
[55.7461576, 37.8280834],
[55.745277, 37.8235747],
[55.7447628, 37.8207351],
[55.7443285, 37.8185106],
[55.7439465, 37.8165544],
[55.7434974, 37.8144166],
[55.7433178, 37.813562],
[55.742417, 37.8090669],
[55.7402577, 37.7980569],
[55.7401087, 37.7970005],
[55.7396865, 37.7947276],
[55.7393774, 37.7930928],
[55.7370032, 37.7818849],
[55.7363466, 37.7781958],
[55.7360011, 37.7764478],
[55.7355061, 37.7735886],
[55.7347544, 37.7696976],
[55.7342686, 37.7672992],

            ]]
        },
        properties: {
            name: 'район Вешняки'
        },
        options: {
            labelDefaults: 'light',
            labelLayout: '<div style="background: rgba(255, 255, 255, 0.3);'+
        'border-radius: 50%;'+
        'border: 6px solid rgb(160,233,255);'+
        'box-shadow: 0 0 5px rgb(160,233,255);'+
        'color: #FFF;'+
        'display: inline-block;'+
        'font-weight: bold;'+
        'line-height: 55px;'+
        'margin-right: 0;'+
        'text-align: center;'+
        'font-family: Arial;'+
        'width: 55px;height: 55px"<p>120953</p></div>' +
        '<div style="color: white;'+
        'font-family: Arial;'+
        'font-size: 12px;'+
        'font-weight: bold;'+
        'text-align: center;'+
        'text-shadow: 0 0 5px rgba(42,58,89,0.5);"'+
        ' <p>'+'район Вешняки</p></div>',
                                    fillColor: 'rgba(64,122,206,0.45)',
                // Цвет обводки.
                strokeColor: 'rgb(160,233,255)',
                strokeWidth: '2',
                // Отключим показ всплывающей подсказки при наведении на полигон.
                openHintOnHover: false,
                // Размер текста подписей зависит от масштаба.
                // На уровнях зума 3-6 размер текста равен 12, а на уровнях зума 7-18 равен 14.
                labelTextSize: {'3_6': 12, '7_18': 14},
                cursor: 'grab',
                labelDotCursor: 'pointer',
                // Допустимая погрешность в расчете вместимости подписи в полигон.
                labelPermissibleInaccuracyOfVisibility: 4,
                labelDotLayout: '<div style="background: #a0e9ff;width: 10px; height: 10px; border-radius: 5px;"></div>',
        },

    });
}
