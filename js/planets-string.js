(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split('|');
    console.log(planetsArray);
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */




    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetJoin =planetsArray.join("<br>");
    console.log(planetJoin);
//let planetJoin= planetsArray.splice(0,7,"<br>");
//   let planetJoin = planetsString.join("<br>")

let planetList = planetsArray.join("</li> ")
    let planetListEnd = planetList.split(" ").join("<li>");
    console.log("<ul>"+"<li>"+planetListEnd+"</ul>");
})();
