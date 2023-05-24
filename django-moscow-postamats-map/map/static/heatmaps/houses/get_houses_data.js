import * as houses_json from './full_house_final.json' assert {type: 'json'};

export function get_houses_data() {
    let data = {
        type: 'FeatureCollection',
    }

    data.features = houses_json.default.map(({lon, lat, population}, i) => ({
        id: `id${i}`,
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [lat, lon]
        },
        properties: {
            weight: Math.trunc(population),
        }
    }))

    return data
}