document.addEventListener('DOMContentLoaded', function() {
    let rocket = document.getElementById('rocket');
    let takeoffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let height = 0;
    

    function moveRocket(direction) {
        let bottom = parseInt(window.getComputedStyle(rocket).bottom, 10);
        let left = parseInt(window.getComputedStyle(rocket).left, 10);
        const step = 10;

        switch (direction) {
            case 'up':
                if (bottom < 730) {
                    rocket.style.bottom = (bottom + step) + 'px';
                    height += 10;
                }
                break;
            case 'down':
                if (bottom > step) {
                    rocket.style.bottom = (bottom - step) + 'px';
                    height -= 10;
                }
                break;
            case 'left':
                if (left > step) {
                    rocket.style.left = (left - step) + 'px';
                }
                break;
            case 'right':
                if (left < 730) {
                    rocket.style.left = (left + step) + 'px';
                }
                break;
        }
        document.getElementById('spaceShuttleHeight').textContent = height;
    }

    takeoffButton.addEventListener('click', function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            moveRocket('up');
        }
    });

    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        rocket.style.bottom = "0px";
        height = 0;
        spaceShuttleHeight.textContent = height;
    });

    abortButton.addEventListener('click', function() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "red";
            rocket.style.bottom = "0px";
            height = 0;
            spaceShuttleHeight.textContent = height;
        }
    });

    upButton.addEventListener('click', function() { moveRocket('up'); });
    downButton.addEventListener('click', function() { moveRocket('down'); });
    rightButton.addEventListener('click', function() { moveRocket('right'); });
    leftButton.addEventListener('click', function() { moveRocket('left'); });
});