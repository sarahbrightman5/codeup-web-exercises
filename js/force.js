


const luke = async (bro)=> {
    try {
        let ask = await fetch('https://swapi.dev/api/people/1/')
        let got = await ask.json();
        return got;
    } catch (naur) {
        console.log(naur);
    }
}
(async()=>{
    let please = await luke();
    console.log(please)
})();