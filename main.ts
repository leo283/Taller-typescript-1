import {series} from './series.js';
import {Serie} from './serie.js';
//let pruebaSerie:Serie = series[0];
console.log("hola que hace");   
let tableSeries=document.getElementById("seriesTable")!;
let tbodySeries = document.createElement("tbody");

series.forEach(serie => {
    tbodySeries.innerHTML += `<tr>
    <th scope = "row">${serie.id}</td>
    <td  class ="text"><a href = ${serie.url}>${serie.title}</a></td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
    </tr>`;
    tableSeries.appendChild(tbodySeries);
});

let average = document.getElementById("promedio")!;
average.innerHTML = `Average of seasons: ${series.reduce((acc,serie) => acc + serie.seasons,0)/series.length}`;
