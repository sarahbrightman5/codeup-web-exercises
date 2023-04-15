// export const data = async(info)=>{
//     try {
//         let url = await fetch('https://swapi.dev/api');
//         // let get = await fetch(url);
//         let got = await url.json();
//         return got;
//     }catch(naur){
//         console.log(naur);
//     }
// }
export const getPlanets = async (num)=>{
    try {
        let url = await fetch(`https://swapi.dev/api/planets/${num}`);
        // let get = await fetch(url);
        let got = await url.json();
        return got;
    }catch(naur){
        console.log(naur);
    }
}