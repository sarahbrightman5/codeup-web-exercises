(function(){
    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
let star = planets.splice(0,0,'The Sun');
    console.log(star);
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);
let pluto = planets.splice(9,0,'pluto');
    console.log(pluto);
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
let sunOut = planets.splice(0,1);
    console.log(sunOut);
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);
let plutoOut=planets.splice(9,9);
    console.log(plutoOut);
    console.log('Finding and logging the index of "Earth" in the planets array.');
let earth= planets.indexOf('Earth');
    console.log(earth);
    console.log("Reversing the order of the planets array.");
    console.log(planets);
let reverse =planets.reverse();
    console.log(reverse);
    console.log("Sorting the planets array.");
    console.log(planets);
let sort = planets.sort();
    console.log(sort);
})();
