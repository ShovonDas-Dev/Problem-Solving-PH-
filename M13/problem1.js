// Task 13-2A: Hot, Cold, or Normal
// Problem Statement:
// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.


function checkTemperature(temperature) {
    if (temperature >= 30) {
        return "Hot";
    } else if (temperature <= 15) {
        return "Cold";
    } else {
        return "Normal";
    }
}
checkTemperature(32); // returns "Hot"
checkTemperature(10); // returns "Cold"
checkTemperature(20); // returns "Normal"
