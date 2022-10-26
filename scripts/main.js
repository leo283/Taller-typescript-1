import { series } from './series.js';
//let pruebaSerie:Serie = series[0];
console.log("hola que hace");
var tableSeries = document.getElementById("seriesTable");
var tbodySeries = document.createElement("tbody");
series.forEach(function (serie) {
    tbodySeries.innerHTML += "<tr>\n    <th scope = \"row\">".concat(serie.id, "</td>\n    <td  class =\"text\"><a href = ").concat(serie.url, ">").concat(serie.title, "</a></td>\n    <td>").concat(serie.channel, "</td>\n    <td>").concat(serie.seasons, "</td>\n    </tr>");
    tableSeries.appendChild(tbodySeries);
});
var average = document.getElementById("promedio");
average.innerHTML = "Average of seasons: ".concat(series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / series.length);
