//
    let input =parseFloat(prompt(`please enter a odd number between 1 and 50`));
    // let isEven= (input%2===0);
while(true){
    if( input % 2 === 0) {
        input = parseFloat(prompt(`please enter a odd number between 1 and 50`));
    }else  {
        for (let j = 1; j < 51; j += 2) {
            if (input === j) {
                continue;
            }
                console.log(`here is a odd number: ${j}`)

        }
        break;
    }
}
