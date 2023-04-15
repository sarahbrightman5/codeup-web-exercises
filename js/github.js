import {GITHUB_APPID} from './keys.js';


export const getUser = async(username)=>{
    try{
        const url = `https://api.github.com/users/${username}/events/public`;
        const options = {
            headers: {
                'Authorization': `token ${GITHUB_APPID}`
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getLastCommit = (userEvents)=>{
    let commits = userEvents.filter(function(e){
        return e.type === "PushEvent";
    });
    return commits[0];
}
// export const getDate
