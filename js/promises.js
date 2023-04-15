import {getUser, getLastCommit} from './github.js'

(async()=>{
    // main thread
    let user = await getUser('sarahbrightman5');
    console.log(user);
    let lastCommit = getLastCommit(user);
    console.log(lastCommit);
    let date = lastCommit.created_at;
    console.log(date);
})();