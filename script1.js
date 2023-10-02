let loggingEnabled = false;

let log = document.getElementById('log');
let stateDiv = document.getElementById('state');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', ()=>{

document.addEventListener("keydown",handleDown);
document.addEventListener("keyup",handleUp);
startBtn.disabled = true;
stopBtn.disabled = false;
loggingEnabled = true;
stateDiv.innerText = "Keylogging is enabled"

})

stopBtn.addEventListener('click', ()=>{

    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    log.innerText = " "
    stopBtn.disabled = true;
    startBtn.disabled = false;
    loggingEnabled = false;
    stateDiv.innerText = " ";
    
    })

    function handleDown(e) {
if(loggingEnabled){

    stateDiv.textContent = `${e.key} has been pressed`
    log.innerText = "Key is down"
}

}

function handleUp(e) {
    if(loggingEnabled){
    
        stateDiv.textContent = `${e.key} has been released`
        log.innerText = "Key is up"
    }
    
    }

    

