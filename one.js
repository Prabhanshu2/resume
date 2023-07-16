function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
}
const phrases=["Web develpoer", "Frontend Developer", "Programmer"];
const el= document.getElementById("textp")

let sleepTime = 100;
let curIndex = 0;
const writeLoop = async() => { 
    while(true){
        let curWord = phrases[curIndex];
        for(let i=0;i<curWord.length;i++){
            el.innerText =curWord.substring(0,i+1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*10);
        for(let i=curWord.length;i>=0;i--){
            el.innerText =curWord.substring(0,i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime*5);
        if (curIndex === phrases.length-1){
            curIndex=0;
        }else{
            curIndex++;
        }
    }
};
writeLoop();






