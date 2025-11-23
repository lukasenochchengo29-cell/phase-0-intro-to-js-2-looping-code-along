// Code your solutions in this file
function writeCards(names, event){
    const messages = [];

    for (let i = 0; i < names.length; i++){
        const message = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        console.log(message);
        messages.push(message);
    } 
    return messages;   
}
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "birthday";
writeCards(names, event); 
function countDown(){
    let i = 10;
    while(i >= 0){ 
        console.log(i);
        --i;
    }
}
countDown();
