let timer; // Variable to store the timer ID

window.onload = () => {

    // when the button clicked corresponding method will be called

    document.querySelector('#calculate').onclick = startCountdown;  // onclicking calculate button
    document.querySelector('#reset').onclick = resetCountdown;      // onclicking reset button
    document.querySelector('#stop').onclick = stopCountdown;        // onclicking stop button
}

//Method STARTCOUNTDOWN 
function startCountdown() {

    // getting date and time from user input
    const dateInput = document.querySelector("#date").value;
    const timeInput = document.querySelector("#time").value;
    
    // based on input calculating endtime or timeleft
    const endTime = new Date(`${dateInput}T${timeInput}`);

    // Validates whether the  endTime is a valid date
    if (isNaN(endTime.getTime())) {
        alert("Invalid date or time format. Please enter a valid date and time.");
        return;
    }
    else if(endTime<0)
    {
        alert("Given date and time is in past");
        return;
    }    

    // Start the countdown
    countdown(endTime);
}
//Method COUNTDOWN
function countdown(endTime) {

    //Method UPDATECOUNTDOWN
    function updateCountdown() {

        //current date and time
        const currentTime = new Date();
        // the remaining time 
        const timeLeft = Math.floor((endTime - currentTime) / 1000);

        // if the user entered current date & time then the timeleft will be 0 , diplaytimedown function called when timeleft>0
        if (timeLeft < 0) 
        {
            clearInterval(timer);
            // calling displaycountdown method
            displayCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
         else
          {
            // calculating days,hours,minutes,seconds left from the currenttime
            const days = Math.floor(timeLeft / (24 * 60 * 60));
            const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
            const seconds = Math.floor(timeLeft % 60);
            
            //displaying countdowns
            displayCountdown({ days, hours, minutes, seconds });
            timer = setTimeout(updateCountdown, 1000); // Update countdown every second
        }
    }
    updateCountdown();
}

//method DISPLAYCOUNTDOWN
function displayCountdown({ days, hours, minutes, seconds }) {
    //updating the day,hour,min,seconds left
    document.querySelector('#countdown-days').innerText = days;
    document.querySelector('#countdown-hours').innerText = hours;
    document.querySelector('#countdown-minutes').innerText = minutes;
    document.querySelector('#countdown-seconds').innerText = seconds;
}

//Method RESETCOUNTDOWN - Called when reset button clicked
function resetCountdown() {
    clearTimeout(timer);
    displayCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
}

//Method STOPCOUNTDOWN - Called when stop button clicked
function stopCountdown() {
    clearTimeout(timer);
}