

export async function get_neuro_data(selected_districts) {
    let request_url = 'http://87.242.92.163:5000/api?radius=REPLACE_TO_RADIUS&model=REPLACE_TO_MODEL_NUM&object_types=REPLACE_TO_OBJECTS&area=REPLACE_TO_TYPE&REPLACE_TO_CATEGORIES=REPLACE_TO_PLACES'
    //127.0.0.1:5000/api?radius=1000&model=1&object_types=kiosk,tc,mfc,dk,library,sport&area=rayon&rayons=район+Ясенево,район+Кунцево
    //127.0.0.1:5000/api?radius=1000&model=2&object_types=kiosk,tc,mfc,dk,library,sport&area=okrug&okrugas=Северный+административный+округ&partners=PickPoint,Цайняо
    let radius = document.getElementById("radiusSlider").value;
     let model_num = 1;
     let temp_area, temp_categories
    let district_names_right_format
    let partners = []
    if ( document.getElementById("model1").checked) {
        model_num = 1;
        temp_area = "rayon"
        temp_categories = "rayons"
        district_names_right_format = get_district_names(selected_districts)
    }
    else {
        model_num = 2;
        temp_area = "okrug"
        temp_categories = "okrugas"
        district_names_right_format = selected_districts.replaceAll(" ", "+")
            let selected = [];
            for (var option of document.getElementById('partners-select').options) {
                if (option.selected) {
                    selected.push(option.value);
                }
            }
            request_url += "&partners="+selected
    }
    let params = []


    console.log(district_names_right_format)

        if(document.getElementById("cultures_placemarks").checked) {
            params.push('dk');
        }
        if (document.getElementById("gosuslugies_placemarks").checked) {
            params.push('mfc');
        }
        if (document.getElementById("libraries_placemarks").checked)  {
            params.push('library');
        }
        if (document.getElementById("prints_placemarks").checked) {
            params.push('kiosk');
        }
        if (document.getElementById("shops_placemarks").checked) {
            params.push('tc');
        }
        if (document.getElementById("sports_placemarks").checked) {
            params.push('sport');
        }

        request_url = request_url.replaceAll("REPLACE_TO_RADIUS", radius.toString())
        request_url = request_url.replaceAll("REPLACE_TO_OBJECTS", params+"")
        request_url = request_url.replaceAll("REPLACE_TO_PLACES", district_names_right_format+"")
        request_url = request_url.replaceAll("REPLACE_TO_TYPE", temp_area)
        request_url = request_url.replaceAll("REPLACE_TO_CATEGORIES", temp_categories)
        request_url = request_url.replaceAll("REPLACE_TO_MODEL_NUM", model_num.toString())
        request_url = request_url.replaceAll(" ", "+")



    let result = []
    let neuro_data = await fetch(request_url)
        .then((response) => response.json())
            .then((data) => {
                    return data
            })
    let heat_map_data = {}
    let cultures_arr = []
    let gosusligi_arr = []
    let libraries_arr = []
    let prints_arr = []
    let shops_arr = []
    let sports_arr = []
    heat_map_data['type'] = 'FeatureCollection'
    heat_map_data['features'] = []
    let count = 0
    for (var key in neuro_data) {
        for (var i = 0; i < neuro_data[key].length; i++) {
            heat_map_data.features[count] = {
                id: 'id'+i.toString(),
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                properties: {
                    weight: neuro_data[key][i][2]
                }
            }
            count += 1;
            if (key === 'dk') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#orangeLeisureIcon',
                })
                cultures_arr.push(myGeoObject)
            }
            if (key === 'mfc') {
                let myGeoObject = new ymaps.GeoObject({
                    // Описание геометрии.
                    geometry: {
                        type: "Point",
                        coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                    },
                    // Свойства.
                    properties: {}
                    }, {
                    preset: 'islands#blueInfoIcon',
                })
                gosusligi_arr.push(myGeoObject)
            }
            if (key === 'library') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#brownBookIcon',
                })
                libraries_arr.push(myGeoObject)
            }
            if (key === 'kiosk') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#grayHomeIcon',
                })
                prints_arr.push(myGeoObject)
            }
            if (key === 'tc') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#redShoppingIcon',
                })
                shops_arr.push(myGeoObject)
            }
            if (key === 'sport') {
                let myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [neuro_data[key][i][0][1], neuro_data[key][i][0][0]]
                },
                // Свойства.
                properties: {}
                }, {
                preset: 'islands#yellowSportIcon',
                })
                sports_arr.push(myGeoObject)
            }
        }
    }

    result[0] = heat_map_data
    result[1] = cultures_arr
    result[2] = gosusligi_arr
    result[3] = libraries_arr
    result[4] = prints_arr
    result[5] = shops_arr
    result[6] = sports_arr
    return result
}
function get_district_names(selected_districts) {
    let names = []
    for (let i = 0; i < selected_districts.length; i++) {
        names.push(selected_districts[i].properties.name);
        names[i] = names[i].replaceAll(" ", "+")
    }
    return names
}