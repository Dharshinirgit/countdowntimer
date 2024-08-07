# countdowntimer
 * The goal of this project is to create a countdown timer web application using HTML, CSS and JavaScript.
 * This timer allows users ti set a specific date and time in the future and then it will countdowns to that moment and it displays the remaining time in days, hours, minutes and seconds.
# HTML structure 
 * The basic HTML structure includes following things
   1. A title section
   2. Input fields for date and time to get the target date and time fron the users.
   3. Calculate button to initiate the countdown.
   4. Stop and Reset button to stop the timer and reset the countdown timer.
   5. An area for displaying the remaining days, hours, minutes and seconds.
# CSS styling 
 * style.css file make this countdown timer interactive and visually appealing.
 * The font sizes, colour and background properties are customized here.
 * Thus this provies user interaction to countdown timer.
# JavaScript functionality 
* Here javascript functionality implementated using app.js file.
* When user provides date and time using input fields it is collected validated using javascript.
* When the "calculate" button is clicked the countdown timer is started .
* Before starting the timer the remaining time to be displayed is calculated first .
* The exceptions like incorrect date & time format and date & time in past is handled using isNAN() method and checking for negative values respectively.
* Once the correct input format and valid date and time is found then the remaining date and time calculated in stored in a variable.
* This remaining time is used to calculate the days, hours, minutes and seconds left to the target time.
* This values are upadted to the respective sections by calling updatecountdown() method in this method days, hour, minutes,seconds values are updated using innertext updation.
* The setInterval() function is used to update the countdown in realtime for every single second.
* When the stop button is clicked the timer stops at that moment when calculate button clicked it resumes.
* When the reset button is clicked all the values set to zero
