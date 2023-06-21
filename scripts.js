// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", event => {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    takeOff.addEventListener("click", event => {
        const ready = confirm("Confirm that the shuttle is ready to takeoff.");
        if(ready) {
            flightStatus.innerHTML = "Shuttle in flight.";
        }
    });

    const rocket = document.getElementById("rocket");
    const shuttle = document.getElementById("shuttleBackground");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const topLimit = 0;
    const bottomLimit = shuttle.offsetHeight - rocket.offsetHeight;
    const leftLimit = -rocket.offsetLeft;
    const rightLimit = shuttle.offsetWidth - rocket.offsetLeft - rocket.offsetWidth;
    rocket.style.top = 0;
    rocket.style.left = 0;
    up.addEventListener("click", () => {
        const x = parseInt(rocket.style.top);
        const position = x < topLimit + 10 ? topLimit : x - 10;
        rocket.style.top = position + "px";
    });
    down.addEventListener("click", () => {
        const x = parseInt(rocket.style.top);
        const position = x > bottomLimit - 10 ? bottomLimit : x + 10;
        rocket.style.top = position + "px";
    });
    left.addEventListener("click", () => {
        const y = parseInt(rocket.style.left);
        const position = y < leftLimit + 10 ? leftLimit : y - 10;
        rocket.style.left = position + "px";
    });
    right.addEventListener("click", () => {
        const y = parseInt(rocket.style.left);
        const position = y > rightLimit - 10 ? rightLimit : y + 10;
        rocket.style.left = position + "px";
    });
});
