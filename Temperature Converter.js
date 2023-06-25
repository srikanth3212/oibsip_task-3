function convert() {
    var tempearture = document.getElementById("inputtemperature");
    var result = document.getElementById("result");
    var element = document.getElementById("degree");
    var optionSelectedText = element.options[element.selectedIndex].text;

    if (tempearture.value !== "") {
        if (optionSelectedText === "Fahrenheit") {
            result.value = ((tempearture.value - 32) * 5) / 9 + "°C";
        } else if (optionSelectedText === "Celcius") {
            result.value = (tempearture.value * 9) / 5 + 32 + "°F";
        }
    } else {
        alert("Enter the Tempearture");
    }
}