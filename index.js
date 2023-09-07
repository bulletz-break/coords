// Latitude     : 11, 22
// Sentido Lat  : 23, 24
// Longitude    : 25, 37
// Sentido Long : 38, 39

const COMPENSACAO_LAT   = 13.7;
const COMPENSACAO_LOG   = 9.9;

function give_formatted_coords(coords) {
    let result  = document.querySelector("#convert_result");

    latitude_dd         = String(coords).substring(11, 13);
    latitude_mm         = String(coords).substring(13, 15);
    latitude_mmmmmm     = String(coords).substring(16, 22);
    latitude_sense      = String(coords).substring(23, 24);

    longitude_dd        = String(coords).substring(26, 28);
    longitude_mm        = String(coords).substring(28, 30);
    longitude_mmmmmm    = String(coords).substring(31, 37);
    longitude_sense     = String(coords).substring(38, 39);

    latitude_result     = `${latitude_dd}°${latitude_mm}'${parseFloat(String(latitude_mmmmmm).substring(0, 2)) - (COMPENSACAO_LAT - 1.1)}${String(latitude_mmmmmm).substring(2)}"S`;
    longitude_result    = `${longitude_dd}°${longitude_mm}'${parseFloat(String(longitude_mmmmmm).substring(0, 2)) - (COMPENSACAO_LOG - 1)}${String(longitude_mmmmmm).substring(2)}"W`;
    // latitude_result     = `${latitude_dd}°${latitude_mm}'${parseInt(String(latitude_mmmmmm).substring(0, 2)) - 13.7}"S`;
    // longitude_result    = `${longitude_dd}°${longitude_mm}'${parseInt(String(longitude_mmmmmm).substring(0, 2)) - 9.9}"W`;

    // 23°13'16.37896"S 45°54'16.18686"W
    // 23°13'16.3"S 45°54'16.1"W


    result.innerText    = `${latitude_result} ${longitude_result}`;
}

window.onload = function() {
    let gprs    = "";
    let input   = document.querySelector("#convert_lat");

    input.addEventListener("change", function() {
        gprs = input.value;
        give_formatted_coords(gprs);
    });
}