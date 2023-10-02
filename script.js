let loggingEnabled = false;

let keylogDiv = document.getElementById('keylogDiv'); 
let stateDiv = document.getElementById('stateDiv'); 
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    loggingEnabled = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
  
    stateDiv.textContent = "Keylogging Enabled";
});

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    keylogDiv.textContent = ""; 
    stateDiv.textContent = "Keylogging Disabled";
    loggingEnabled = false;
    stopBtn.disabled = true;
    startBtn.disabled = false;
   
});

function handleDown(e) {
    if (loggingEnabled) {
        keylogDiv.textContent = `Key "${e.key}" is pressed down`;
        stateDiv.textContent = "Key is Down";
    }
}

function handleUp(e) {
    if (loggingEnabled) {
        keylogDiv.textContent = `Key "${e.key}" is released`; 
        stateDiv.textContent = "Key is Up";
    }
}
