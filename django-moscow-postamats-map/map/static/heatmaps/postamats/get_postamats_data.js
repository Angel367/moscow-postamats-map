import * as postamats_yandex_coords from './postamats_yandex_coords_final.json' assert {type: 'json'};

export const get_postamats_data = () => postamats_yandex_coords.default.map(({coordinates}) => [coordinates[1], coordinates[0]])
