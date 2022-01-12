// pin generator
function generateKey(){
    const pinValue = document.getElementById('gneratePinValue');
    const pin = Math.floor(1000 + Math.random() * 9000);
    pinValue.value = pin;
    document.getElementById('rightPin').style.display = "none";
    screen.value = "";
}

// input buttons
let screen = document.getElementById('screen');
const inputButtons = document.getElementsByClassName('button');
let screenValue = '';
for (item of inputButtons){
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screen.value = screenValue;
        } else if (buttonText == '<'){
            screen.value = screen.value.substring(0, screen.value.length - 1);
        } else {
            screen.value += buttonText;
        }
    })
}

// pin inputter
function submitButton() {
    let pinNo = document.getElementById('gneratePinValue');
    if (pinNo.value == screen.value){
        document.getElementById('rightPin').style.display = "block";
        document.getElementById('wrongPin').style.display = "none";
        pinNo.value = "";
        screen.value = "";
    } else {
        generateKey()
        document.getElementById('wrongPin').style.display = "block";
    }
}