function convert() {
    var value = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (fromUnit === toUnit) {
        result = value;
    }
    // 1.Cubic Meter
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Kilometer') {
        result = value * 0.000000001;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Centimeter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Millimeter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Liter') {
        result = value * 1000;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Milliliter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Gallon') {
        result = value * 264.172;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Quart') {
        result = value * 1056.688;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Pint') {
        result = value * 2113.376;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Cup') {
        result = value * 4226.752;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Fluid Ounce') {
        result = value * 33814.023;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Table Spoon') {
        result = value * 67628.045;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'US Tea Spoon') {
        result = value * 202884.136;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Imperial Gallon') {
        result = value * 219.969;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Imperial Quart') {
        result = value * 879.877;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Imperial Pint') {
        result = value * 1759.754;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 35195.08;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Imperial Table Spoon') {
        result = value * 56312.128;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Imperial Tea Spoon') {
        result = value * 168936.384;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Mile') {
        result = value * 2.399129e-10;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Yard') {
        result = value * 1.307951;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Foot') {
        result = value * 35.31472;
    }
    else if (fromUnit === 'Cubic Meter' && toUnit === 'Cubic Inch') {
        result = value * 61023.744;
    }


    // 2.Cubic Kilometer
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Meter') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Centimeter') {
        result = value * 1e+15;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Millimeter') {
        result = value * 1e+18;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Lite') {
        result = value * 1e+12;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Milliliter') {
        result = value * 1e+15;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Gallon') {
        result = value * 2.641721e+11;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Quart') {
        result = value * 1.0566884e+12;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Pint') {
        result = value * 2.1133768e+12;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Cup') {
        result = value * 4.226752e+12;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Fluid Ounce') {
        result = value * 3.3814023e+13;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Table Spoon') {
        result = value * 6.7628045e+13;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'US Tea Spoon') {
        result = value * 2.0288413e+14;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Imperial Gallon') {
        result = value * 2.1996924e+11;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Imperial Quart') {
        result = value * 8.7987696e+11;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Imperial Pint') {
        result = value * 1.7597539e+12;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 1.7597539e+12;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Imperial Table Spoon') {
        result = value * 5.6312123e+13;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Imperial Tea Spoon') {
        result = value * 1.6893637e+14;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Mile') {
        result = value * 0.2399129;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Yard') {
        result = value * 1307951000;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Foot') {
        result = value * 3.531472e+10;
    }
    else if (fromUnit === 'Cubic Kilometer' && toUnit === 'Cubic Inch') {
        result = value * 6.1023744e+13;
    }


    // 3.Cubic Centimeter
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Meter') {
        result = value * 0.000001;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Kilometer') {
        result = value * 1e-15;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Millimeter') {
        result = value * 1000;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Liter') {
        result = value * 0.001;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Milliliter') {
        result = value * 1;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Gallon') {
        result = value * 0.000264172;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Quart') {
        result = value * 0.001056688;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Pint') {
        result = value * 0.002113376;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Cup') {
        result = value * 0.004226752;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Fluid Ounce') {
        result = value * 0.033814023;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Table Spoon') {
        result = value * 0.067628045;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'US Tea Spoon') {
        result = value * 0.202884136;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Imperial Gallon') {
        result = value * 0.000219969;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Imperial Quart') {
        result = value * 0.000879877;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Imperial Pint') {
        result = value * 0.001759754;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.03519508;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Imperial Table Spoon') {
        result = value * 0.056312128;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Imperial Tea Spoon') {
        result = value * 0.168936384;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Mile') {
        result = value * 2.399129e-19;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Yard') {
        result = value * 0.000001308;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Foot') {
        result = value * 0.000035315;
    }
    else if (fromUnit === 'Cubic Centimeter' && toUnit === 'Cubic Inch') {
        result = value * 0.061023744;
    }


    // 4.Cubic Millimeter
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Meter') {
        result = value * 0.000000001;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Kilometer') {
        result = value * 1e-18;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Centimeter') {
        result = value * 0.001;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Liter') {
        result = value * 0.000001;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Milliliter') {
        result = value * 0.001;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Gallon') {
        result = value * 2.641721e-10;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Quart') {
        result = value * 1.0566884e-9;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Pint') {
        result = value * 2.1133768e-9;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Cup') {
        result = value * 4.2267528e-9;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Fluid Ounce') {
        result = value * 3.3814023e-8;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Table Spoon') {
        result = value * 6.7628045e-8;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'US Tea Spoon') {
        result = value * 2.0288414e-7;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Imperial Gallon') {
        result = value * 2.1996924e-10;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Imperial Quart') {
        result = value * 8.7987696e-10;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Imperial Pint') {
        result = value * 1.7597539e-9;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 3.5195077e-8;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Imperial Table Spoon') {
        result = value * 5.6312123e-8;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Imperial Tea Spoon') {
        result = value * 1.6893637e-7;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Mile') {
        result = value * 2.399129e-22;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Yard') {
        result = value * 1.307951e-9;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Foot') {
        result = value * 3.531472e-8;
    }
    else if (fromUnit === 'Cubic Millimeter' && toUnit === 'Cubic Inch') {
        result = value * 0.000061024;
    }


    // 5.Liter
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Meter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Kilometer') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Centimeter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Millimeter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Milliliter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Gallon') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Quart') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Pint') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Cup') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Fluid Ounce') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Table Spoon') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'US Tea Spoon') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Imperial Gallon') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Imperial Quart') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Imperial Pint') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Imperial Table Spoon') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Imperial Tea Spoon') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Mile') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Yard') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Foot') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Liter' && toUnit === 'Cubic Inch') {
        result = value * 1000000;
    }


    // 6.Milliliter
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Meter') {
        result = value * 0.000001;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Kilometer') {
        result = value * 1e-15;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Centimeter') {
        result = value * 1;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Millimeter') {
        result = value * 1000;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Liter') {
        result = value * 0.001;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Gallon') {
        result = value * 0.000264172;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Quart') {
        result = value * 0.001056688;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Pint') {
        result = value * 0.002113376;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Cup') {
        result = value * 0.004226752;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Fluid Ounce') {
        result = value * 0.033814023;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Table Spoon') {
        result = value * 0.067628045;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'US Tea Spoon') {
        result = value * 0.202884136;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Imperial Gallon') {
        result = value * 0.000219969;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Imperial Quart') {
        result = value * 0.000879877;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Imperial Pint') {
        result = value * 0.001759754;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.03519508;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Imperial Table Spoon') {
        result = value * 0.056312128;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Imperial Tea Spoon') {
        result = value * 0.168936384;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Mile') {
        result = value * 2.399129e-19;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Yard') {
        result = value * 0.000001308;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Foot') {
        result = value * 0.000035315;
    }
    else if (fromUnit === 'Milliliter' && toUnit === 'Cubic Inch') {
        result = value * 0.061023744;
    }


    // 7.US Gallon
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Meter') {
        result = value * 0.00378541;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Kilometer') {
        result = value * 3.78541e-12;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Centimeter') {
        result = value * 3785.41;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Millimeter') {
        result = value * 3785410;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Liter') {
        result = value * 3.78541;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Milliliter') {
        result = value * 3785.41;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'US Quart') {
        result = value * 4;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'US Pint') {
        result = value * 8;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'US Cup') {
        result = value * 16;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'US Fluid Ounce') {
        result = value * 128;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'US Table Spoon') {
        result = value * 256;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'US Tea Spoon') {
        result = value * 768;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Imperial Gallon') {
        result = value * 0.832674;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Imperial Quart') {
        result = value * 3.330694;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Imperial Pint') {
        result = value * 6.661388;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 133.22752;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Imperial Table Spoon') {
        result = value * 213.164032;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Imperial Tea Spoon') {
        result = value * 639.492096;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Mile') {
        result = value * 9.057e-13;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Yard') {
        result = value * 0.004951131;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Foot') {
        result = value * 0.133680556;
    }
    else if (fromUnit === 'US Gallon' && toUnit === 'Cubic Inch') {
        result = value * 231;
    }


    // 8.US Quart
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Meter') {
        result = value * 0.000946353;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Kilometer') {
        result = value * 9.46353e-13;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Centimeter') {
        result = value * 946.353;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Millimeter') {
        result = value * 946353;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Liter') {
        result = value * 0.946353;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Milliliter') {
        result = value * 946.353;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'US Gallon') {
        result = value * 0.25;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'US Pint') {
        result = value * 2;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'US Cup') {
        result = value * 4;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'US Fluid Ounce') {
        result = value * 32;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'US Table Spoon') {
        result = value * 64;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'US Tea Spoon') {
        result = value * 192;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Imperial Gallon') {
        result = value * 0.208168;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Imperial Quart') {
        result = value * 0.832674;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Imperial Pint') {
        result = value * 1.665348;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 33.30752;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Imperial Table Spoon') {
        result = value * 53.291008;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Imperial Tea Spoon') {
        result = value * 159.873024;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Mile') {
        result = value * 2.26425e-13;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Yard') {
        result = value * 0.001237782;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Foot') {
        result = value * 0.033420139;
    }
    else if (fromUnit === 'US Quart' && toUnit === 'Cubic Inch') {
        result = value * 57.75;
    }


    // 9.US Pint
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Meter') {
        result = value * 0.000473176;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Kilometer') {
        result = value * 4.73176e-13;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Centimeter') {
        result = value * 473.176;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Millimeter') {
        result = value * 473176;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Liter') {
        result = value * 0.473176;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Milliliter') {
        result = value * 473.176;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'US Gallon') {
        result = value * 0.125;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'US Quart') {
        result = value * 0.5;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'US Cup') {
        result = value * 2;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'US Fluid Ounce') {
        result = value * 16;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'US Table Spoon') {
        result = value * 32;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'US Tea Spoon') {
        result = value * 96;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Imperial Gallon') {
        result = value * 0.104084;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Imperial Quart') {
        result = value * 0.416337;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Imperial Pint') {
        result = value * 0.832674;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 16.653504;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Imperial Table Spoon') {
        result = value * 26.645504;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Imperial Tea Spoon') {
        result = value * 79.936512;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Mile') {
        result = value * 1.132125e-13;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Yard') {
        result = value * 0.000618891;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Foot') {
        result = value * 0.01671007;
    }
    else if (fromUnit === 'US Pint' && toUnit === 'Cubic Inch') {
        result = value * 28.875;
    }


    // 10.US cup
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Meter') {
        result = value * 0.000236588;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Kilometer') {
        result = value * 2.36588e-13;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Centimeter') {
        result = value * 236.588;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Millimeter') {
        result = value * 236588;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Liter') {
        result = value * 0.236588;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Milliliter') {
        result = value * 236.588;
    }
    else if (fromUnit === 'US cup' && toUnit === 'US Gallon') {
        result = value * 0.0625;
    }
    else if (fromUnit === 'US cup' && toUnit === 'US Quart') {
        result = value * 0.25;
    }
    else if (fromUnit === 'US cup' && toUnit === 'US Pint') {
        result = value * 0.5;
    }
    else if (fromUnit === 'US cup' && toUnit === 'US Fluid Ounce') {
        result = value * 8;
    }
    else if (fromUnit === 'US cup' && toUnit === 'US Table Spoon') {
        result = value * 16;
    }
    else if (fromUnit === 'US cup' && toUnit === 'US Tea Spoon') {
        result = value * 48;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Imperial Gallon') {
        result = value * 0.052042;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Imperial Quart') {
        result = value * 0.208168;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Imperial Pint') {
        result = value * 0.416337;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 8.326752;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Imperial Table Spoon') {
        result = value * 13.322752;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Imperial Tea Spoon') {
        result = value * 39.968256;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Mile') {
        result = value * 5.660625e-14;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Yard') {
        result = value * 0.000309445;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Foot') {
        result = value * 0.008355035;
    }
    else if (fromUnit === 'US cup' && toUnit === 'Cubic Inch') {
        result = value * 14.4375;
    }


    // 11.US Fluid Ounce
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Meter') {
        result = value * 2.957353e-05;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Kilometer') {
        result = value * 2.957353e-14;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Centimeter') {
        result = value * 29.57353;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Millimeter') {
        result = value * 29573.53;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Liter') {
        result = value * 0.02957353;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Milliliter') {
        result = value * 29.57353;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'US Gallon') {
        result = value * 0.0078125;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'US Quart') {
        result = value * 0.03125;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'US Pint') {
        result = value * 0.0625;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'US Cup') {
        result = value * 0.125;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'US Table Spoon') {
        result = value * 2;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'US Tea Spoon') {
        result = value * 6;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Imperial Gallon') {
        result = value * 0.00650527;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Imperial Quart') {
        result = value * 0.02602108;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Imperial Pint') {
        result = value * 0.05204217;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 1.040843;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Imperial Table Spoon') {
        result = value * 1.665389;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Imperial Tea Spoon') {
        result = value * 4.996167;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Mile') {
        result = value * 7.075781e-15;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Yard') {
        result = value * 0.00003868;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Foot') {
        result = value * 0.001044379;
    }
    else if (fromUnit === 'US Fluid Ounce' && toUnit === 'Cubic Inch') {
        result = value * 1.8046875;
    }


    // 12.US Table Spoon
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Meter') {
        result = value * 1.478676e-05;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Kilometer') {
        result = value * 1.478676e-14;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Centimeter') {
        result = value * 14.78676;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Millimeter') {
        result = value * 14786.76;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Liter') {
        result = value * 0.01478676;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Milliliter') {
        result = value * 14.78676;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'US Gallon') {
        result = value * 0.00390625;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'US Quart') {
        result = value * 0.015625;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'US Pint') {
        result = value * 0.03125;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'US Cup') {
        result = value * 0.0625;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'US Fluid Ounce') {
        result = value * 0.5;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'US Tea Spoon') {
        result = value * 3;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Imperial Gallon') {
        result = value * 0.003252635;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Imperial Quart') {
        result = value * 0.01301054;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Imperial Pint') {
        result = value * 0.02602108;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.5204217;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Imperial Table Spoon') {
        result = value * 0.8326747;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Imperial Tea Spoon') {
        result = value * 2.498024;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Mile') {
        result = value * 3.537891e-15;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Yard') {
        result = value * 0.000019226;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Foot') {
        result = value * 0.00052219;
    }
    else if (fromUnit === 'US Table Spoon' && toUnit === 'Cubic Inch') {
        result = value * 0.902344;
    }


    // 13.US Tea Spoon
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Meter') {
        result = value * 4.928922e-06;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Kilometer') {
        result = value * 4.928922e-15;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Centimeter') {
        result = value * 4.928922;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Millimeter') {
        result = value * 4928.922;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Liter') {
        result = value * 0.004928922;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Milliliter') {
        result = value * 4.928922;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'US Gallon') {
        result = value * 0.001302083;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'US Quart') {
        result = value * 0.005208333;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'US Pint') {
        result = value * 0.010416667;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'US Cup') {
        result = value * 0.020833333;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'US Fluid Ounce') {
        result = value * 0.166666667;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'US Table Spoon') {
        result = value * 0.333333333;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Imperial Gallon') {
        result = value * 0.001084211;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Imperial Quart') {
        result = value * 0.004336845;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Imperial Pint') {
        result = value * 0.00867369;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.1734738;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Imperial Table Spoon') {
        result = value * 0.2775581;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Imperial Tea Spoon') {
        result = value * 0.8326743;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Mile') {
        result = value * 1.179297e-15;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Yard') {
        result = value * 0.000006409;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Foot') {
        result = value * 0.000174063;
    }
    else if (fromUnit === 'US Tea Spoon' && toUnit === 'Cubic Inch') {
        result = value * 0.300781;
    }


    // 14.Imperial Gallon
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Meter') {
        result = value * 0.00454609;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Kilometer') {
        result = value * 4.54609e-12;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Centimeter') {
        result = value * 4546.09;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Millimeter') {
        result = value * 4546090;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Liter') {
        result = value * 4.54609;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Milliliter') {
        result = value * 4546.09;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Gallon') {
        result = value * 1.20095;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Quart') {
        result = value * 4.803802;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Pint') {
        result = value * 9.607604;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Cup') {
        result = value * 19.215208;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Fluid Ounce') {
        result = value * 153.721664;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Table Spoon') {
        result = value * 307.443328;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'US Tea Spoon') {
        result = value * 922.329984;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Imperial Quart') {
        result = value * 4;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Imperial Pint') {
        result = value * 8;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 160;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Imperial Table Spoon') {
        result = value * 256;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Imperial Tea Spoon') {
        result = value * 768;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Mile') {
        result = value * 1.09111e-12;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Yard') {
        result = value * 0.005946061;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Foot') {
        result = value * 0.160543653;
    }
    else if (fromUnit === 'Imperial Gallon' && toUnit === 'Cubic Inch') {
        result = value * 277.419432;
    }


    // 15.Imperial Quart
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Meter') {
        result = value * 0.001136522;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Kilometer') {
        result = value * 1.136522e-12;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Centimeter') {
        result = value * 1136.522;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Millimeter') {
        result = value * 1136522;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Liter') {
        result = value * 1.136522;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Milliliter') {
        result = value * 1136.522;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Gallon') {
        result = value * 0.300238;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Quart') {
        result = value * 1.20095;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Pint') {
        result = value * 2.4019;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Cup') {
        result = value * 2.4019;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Fluid Ounce') {
        result = value * 38.430464;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Table Spoon') {
        result = value * 76.860928;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'US Tea Spoon') {
        result = value * 230.582784;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Imperial Gallon') {
        result = value * 0.25;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Imperial Pint') {
        result = value * 2;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 40;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Imperial Table Spoon') {
        result = value * 64;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Imperial Tea Spoon') {
        result = value * 192;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Mile') {
        result = value * 2.727774e-13;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Yard') {
        result = value * 0.001486515;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Foot') {
        result = value * 0.001486515;
    }
    else if (fromUnit === 'Imperial Quart' && toUnit === 'Cubic Inch') {
        result = value * 69.354858;
    }


    // 16.Imperial Pint
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Meter') {
        result = value * 0.000568261;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Kilometer') {
        result = value * 5.68261e-13;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Centimeter') {
        result = value * 568.261;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Millimeter') {
        result = value * 568261;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Liter') {
        result = value * 0.568261;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Milliliter') {
        result = value * 568.261;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Gallon') {
        result = value * 0.150119;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Quart') {
        result = value * 0.600475;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Pint') {
        result = value * 1.20095;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Cup') {
        result = value * 2.4019;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Fluid Ounce') {
        result = value * 19.215208;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Table Spoon') {
        result = value * 38.430416;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'US Tea Spoon') {
        result = value * 115.291248;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Imperial Gallon') {
        result = value * 0.125;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Imperial Quart') {
        result = value * 0.5;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 20;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Imperial Table Spoon') {
        result = value * 32;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Imperial Tea Spoon') {
        result = value * 96;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Mile') {
        result = value * 1.363887e-13;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Yard') {
        result = value * 0.000743257;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Foot') {
        result = value * 0.020067957;
    }
    else if (fromUnit === 'Imperial Pint' && toUnit === 'Cubic Inch') {
        result = value * 34.677429;
    }


    // 17.Imperial Fluid Ounce
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Meter') {
        result = value * 2.841306e-05;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Kilometer') {
        result = value * 2.841306e-14;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Centimeter') {
        result = value * 28.41306;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Millimeter') {
        result = value * 28413.06;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Liter') {
        result = value * 0.02841306;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Milliliter') {
        result = value * 28.41306;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Gallon') {
        result = value * 0.007505942;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Quart') {
        result = value * 0.030023767;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Pint') {
        result = value * 0.060047534;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Cup') {
        result = value * 0.120095068;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Fluid Ounce') {
        result = value * 0.960760543;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Table Spoon') {
        result = value * 1.921521086;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'US Tea Spoon') {
        result = value * 5.764563258;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Imperial Gallon') {
        result = value * 0.00625;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Imperial Quart') {
        result = value * 0.025;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Imperial Pint') {
        result = value * 0.05;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Imperial Table Spoon') {
        result = value * 1.6;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Imperial Tea Spoon') {
        result = value * 4.8;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Mile') {
        result = value * 6.819435e-15;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Yard') {
        result = value * 0.000037163;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Foot') {
        result = value * 0.001003393;
    }
    else if (fromUnit === 'Imperial Fluid Ounce' && toUnit === 'Cubic Inch') {
        result = value * 1.733871;
    }


    // 18.Imperial Table Spoon
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Meter') {
        result = value * 1.775826e-05;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Kilometer') {
        result = value * 1.775826e-14;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Centimeter') {
        result = value * 17.75826;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Millimeter') {
        result = value * 17758.26;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Liter') {
        result = value * 0.01775826;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Milliliter') {
        result = value * 17.75826;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'US Gallon') {
        result = value * 0.004691214;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'US Quart') {
        result = value * 0.018764857;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'US Pint') {
        result = value * 0.037529714;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'US Cup') {
        result = value * 0.075059429;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'US Fluid Ounce') {
        result = value * 0.600475433;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'US Tea Spoon') {
        result = value * 0.600475433;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Imperial Gallon') {
        result = value * 0.00390625;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Imperial Quart') {
        result = value * 0.00390625;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Imperial Pint') {
        result = value * 0.03125;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.625;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Imperial Tea Spoon') {
        result = value * 3.2;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Mile') {
        result = value * 4.545926e-15;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Yard') {
        result = value * 0.000024932;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Foot') {
        result = value * 0.000671972;
    }
    else if (fromUnit === 'Imperial Table Spoon' && toUnit === 'Cubic Inch') {
        result = value * 1.159788;
    }

    // 19.Imperial Tea Spoon
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Meter') {
        result = value * 5.919421e-06;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Kilometer') {
        result = value * 5.919421e-15;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Centimeter') {
        result = value * 5.919421;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Millimeter') {
        result = value * 5919.421;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Liter') {
        result = value * 0.005919421;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Milliliter') {
        result = value * 5.919421;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Gallon') {
        result = value * 0.001552405;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Quart') {
        result = value * 0.006209618;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Pint') {
        result = value * 0.012419237;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Cup') {
        result = value * 0.024838474;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Fluid Ounce') {
        result = value * 0.198707792;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Table Spoon') {
        result = value * 0.397415584;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'US Tea Spoon') {
        result = value * 2.385856508;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Imperial Gallon') {
        result = value * 0.002604167;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Imperial Quart') {
        result = value * 0.010416667;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Imperial Pint') {
        result = value * 0.020833333;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.416666667;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Imperial Table Spoon') {
        result = value * 0.666666667;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Mile') {
        result = value * 9.469674e-16;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Yard') {
        result = value * 0.000005233;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Foot') {
        result = value * 0.000141166;
    }
    else if (fromUnit === 'Imperial Tea Spoon' && toUnit === 'Cubic Inch') {
        result = value * 0.244978;
    }


    // 20.Cubic Mile
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Meter') {
        result = value * 4168181825.44;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Kilometer') {
        result = value * 4.16818182544;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Centimeter') {
        result = value * 4.16818182544e+18;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Millimeter') {
        result = value * 4.16818182544e+21;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Liter') {
        result = value * 4.16818182544e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Milliliter') {
        result = value * 4.16818182544e+15;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Gallon') {
        result = value * 1.10117799391e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Quart') {
        result = value * 4.40471197564e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Pint') {
        result = value * 8.80942395129e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Cup') {
        result = value * 1.76188479026e+13;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Fluid Ounce') {
        result = value * 1.40950783221e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Table Spoon') {
        result = value * 2.81901566443e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'US Tea Spoon') {
        result = value * 8.45704699329e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Imperial Gallon') {
        result = value * 9.16198425805e+11;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Imperial Quart') {
        result = value * 3.66479370322e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Imperial Pint') {
        result = value * 7.32958740644e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 1.46591748129e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Imperial Table Spoon') {
        result = value * 2.34546796903e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Imperial Tea Spoon') {
        result = value * 7.0364039071e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Yard') {
        result = value * 5.45261023115e+12;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Foot') {
        result = value * 1.47276092723e+14;
    }
    else if (fromUnit === 'Cubic Mile' && toUnit === 'Cubic Inch') {
        result = value * 2.54379060676e+17;
    }


    // 21.Cubic Yard
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Meter') {
        result = value * 0.764554858;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Kilometer') {
        result = value * 7.64554858e-10;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Centimeter') {
        result = value * 764554.858;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Millimeter') {
        result = value * 764554858;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Liter') {
        result = value * 764.554858;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Milliliter') {
        result = value * 764554.858;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Gallon') {
        result = value * 201.974026;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Quart') {
        result = value * 807.896104;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Pint') {
        result = value * 1615.792208;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Cup') {
        result = value * 3231.584416;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Fluid Ounce') {
        result = value * 25852.675328;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Table Spoon') {
        result = value * 51705.350656;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'US Tea Spoon') {
        result = value * 155116.051968;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Imperial Gallon') {
        result = value * 168.178155;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Imperial Quart') {
        result = value * 672.712619;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Imperial Pint') {
        result = value * 1345.425238;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 26908.50476;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Imperial Table Spoon') {
        result = value * 43053.607616;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Imperial Tea Spoon') {
        result = value * 129160.822848;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Mile') {
        result = value * 1.847869e-10;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Foot') {
        result = value * 27;
    }
    else if (fromUnit === 'Cubic Yard' && toUnit === 'Cubic Inch') {
        result = value * 46656;
    }


    // 22.Cubic Foot
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Meter') {
        result = value * 0.028316847;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Kilometer') {
        result = value * 2.8316847e-11;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Centimeter') {
        result = value * 28316.847;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Millimeter') {
        result = value * 28316846.592;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Liter') {
        result = value * 28.316847;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Milliliter') {
        result = value * 28316.847;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Gallon') {
        result = value * 7.480519;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Quart') {
        result = value * 29.922076;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Pint') {
        result = value * 59.844152;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Cup') {
        result = value * 119.688305;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Fluid Ounce') {
        result = value * 957.50644;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Table Spoon') {
        result = value * 1915.01288;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'US Tea Spoon') {
        result = value * 5745.03864;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Imperial Gallon') {
        result = value * 6.228835;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Imperial Quart') {
        result = value * 24.91534;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Imperial Pint') {
        result = value * 49.830679;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 996.613578;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Imperial Table Spoon') {
        result = value * 996.613578;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Imperial Tea Spoon') {
        result = value * 996.613578;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Mile') {
        result = value * 6.793572e-12;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Yard') {
        result = value * 0.037037037;
    }
    else if (fromUnit === 'Cubic Foot' && toUnit === 'Cubic Inch') {
        result = value * 1728;
    }


    // 23.Cubic inch
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Meter') {
        result = value * 0.000016387;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Kilometer') {
        result = value * 1.63871e-14;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Centimeter') {
        result = value * 16.387064;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Millimeter') {
        result = value * 16387.064;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Liter') {
        result = value * 0.016387064;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Milliliter') {
        result = value * 16.387064;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Gallon') {
        result = value * 0.004329004;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Quart') {
        result = value * 0.004329004;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Pint') {
        result = value * 0.034632035;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Cup') {
        result = value * 0.069264071;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Fluid Ounce') {
        result = value * 0.554112567;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Table Spoon') {
        result = value * 1.108225134;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'US Tea Spoon') {
        result = value * 3.324675402;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Imperial Gallon') {
        result = value * 0.00360465;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Imperial Quart') {
        result = value * 0.014418601;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Imperial Pint') {
        result = value * 0.028837202;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Imperial Fluid Ounce') {
        result = value * 0.577744035;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Imperial Table Spoon') {
        result = value * 0.924390457;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Imperial Tea Spoon') {
        result = value * 2.773171372;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Mile') {
        result = value * 3.931472e-15;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Yard') {
        result = value * 0.000021433;
    }
    else if (fromUnit === 'Cubic inch' && toUnit === 'Cubic Foot') {
        result = value * 0.000578704;
    }

    document.getElementById('result').innerHTML = result;
}
