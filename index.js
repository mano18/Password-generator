const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let textL=document.getElementById('leftText')
let textR=document.getElementById('rightText')
let input=document.getElementById('inputNum')
let passGen=document.getElementById('generatePassword')


passGen.addEventListener("click", function () {
    textL.textContent = ""
    textR.textContent = ""
    textL.textContent = generatePassword()
    textR.textContent = generatePassword()
    input.textContent=generate()

})
//copy the content from left side box
textL.addEventListener("click", function () {
navigator.clipboard.writeText(textL.textContent);
alert("Copied to Clipboard  " + textL.textContent)
})
// copy the content from right side box
textR.addEventListener("click", function () {
navigator.clipboard.writeText(textR.textContent);
   alert("Copied to Clipboard  " + textR.textContent)

})


let maxlen=15

function generate(){
    if(input.value<7 || input.value>15)
    {
       console.log("please enter value in between 7 and 15")
    }
}

function generatePassword(){
    let newPass=''
    if(input.value>=7 && input.value<16){

    
    for(let i=0;i<=input.value;i++)
    {
        let randomNumber=Math.floor(Math.random()*characters.length)
        newPass+=characters[randomNumber]
    }
    
    return newPass
}
    
}
