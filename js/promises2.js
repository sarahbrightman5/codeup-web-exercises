/*
    TODO: Using separation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the star wars api: https://swapi.dev/
        - returns a specific planet
        - returns the eye color of a specific character
        - returns all of the data on a specific movie
        *BONUS* - Add it onto the DOM however you want
 */
import {getPlanets} from './star_wars.js'

(async()=>{
    let planet = await getPlanets(1);
    console.log(planet);
})();