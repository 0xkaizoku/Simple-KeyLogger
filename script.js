let loggingEnabled = false;

        let logDiv = document.getElementById('log');
        let stateDiv = document.getElementById('state');
        let startBtn = document.getElementById("start");
        let stopBtn = document.getElementById("stop");

        startBtn.addEventListener("click", () => {
            document.addEventListener("keydown", handleDown);
            document.addEventListener("keyup", handleUp);
            startBtn.disabled = true;
            stopBtn.disabled = false;
            loggingEnabled = true;
            stateDiv.textContent = "Keylogging Enabled";
        });

        stopBtn.addEventListener("click", () => {
            document.removeEventListener("keydown", handleDown);
            document.removeEventListener("keyup", handleUp);
            logDiv.textContent = "";
            stateDiv.textContent = "Keylogging Disabled";
            stopBtn.disabled = true;
            startBtn.disabled = false;
            loggingEnabled = false;
        });

        function handleDown(e) {
            if (loggingEnabled) {
                logDiv.textContent = `Key "${e.key}" is pressed down`;
                stateDiv.textContent = "Key is Down";
            }
        }

        function handleUp(e) {
            if (loggingEnabled) {
                logDiv.textContent = `Key "${e.key}" is released`;
                stateDiv.textContent = "Key is Up";
            }
        }