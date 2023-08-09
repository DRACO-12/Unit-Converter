function convert() {
    var value = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (fromUnit === toUnit) {
        result = value;
    }
    //1.Celsius
    else if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        result = value * 9 / 5 + 32;
    }
    else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        result = value + 273.15;
    }

    //2.Fahrenheit
    else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        result = (value - 32) * 5 / 9;
    }
    else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (value + 459.67) * 5 / 9;
    }


    //3.Kelvin
    else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        result = value - 273.15;
    }
    else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = value * 9 / 5 - 459.67;
    }
    document.getElementById('result').innerHTML = result;
}