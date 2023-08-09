function convert() {
    var value = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (fromUnit === toUnit) {
        result = value;
    }
    //1.Centimeters
    else if (fromUnit === 'cm' && toUnit === 'm') {
        result = value / 100;
    }
    else if (fromUnit === 'cm' && toUnit === 'km') {
        result = value / 100000;
    }
    else if (fromUnit === 'cm' && toUnit === 'mm') {
        result = value * 10;
    }
    else if (fromUnit === 'cm' && toUnit === 'µm') {
        result = value * 10000;
    }
    else if (fromUnit === 'cm' && toUnit === 'nm') {
        result = value * 10000000;
    }
    else if (fromUnit === 'cm' && toUnit === 'mi') {
        result = value / 160934;
    }
    else if (fromUnit === 'cm' && toUnit === 'yd') {
        result = value / 91.44;
    }
    else if (fromUnit === 'cm' && toUnit === 'ft') {
        result = value / 30.48;
    }
    else if (fromUnit === 'cm' && toUnit === 'in') {
        result = value / 5.54;
    }
    else if (fromUnit === 'cm' && toUnit === 'ly') {
        result = value / (9.461 * 1E17);
    }

    //2.Meters
    else if (fromUnit === 'm' && toUnit === 'cm') {
        result = value * 100;
    }
    else if (fromUnit === 'm' && toUnit === 'km') {
        result = value / 1000;
    }
    else if (fromUnit === 'm' && toUnit === 'mm') {
        result = value * 1000;
    }
    else if (fromUnit === 'm' && toUnit === 'µm') {
        result = value * 1000000;
    }
    else if (fromUnit === 'm' && toUnit === 'nm') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'm' && toUnit === 'mi') {
        result = value / 1609.34;
    }
    else if (fromUnit === 'm' && toUnit === 'yd') {
        result = value * 1.09361;
    }
    else if (fromUnit === 'm' && toUnit === 'ft') {
        result = value * 3.28084;
    }
    else if (fromUnit === 'm' && toUnit === 'in') {
        result = value * 39.3701;
    }
    else if (fromUnit === 'm' && toUnit === 'ly') {
        result = value / (9.461 * 1E15);
    }

    //3.Kilometers
    else if (fromUnit === 'km' && toUnit === 'cm') {
        result = value * 100000;
    }
    else if (fromUnit === 'km' && toUnit === 'm') {
        result = value * 1000;
    }
    else if (fromUnit === 'km' && toUnit === 'mm') {
        result = value * 1000000;
    }
    else if (fromUnit === 'km' && toUnit === 'µm') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'km' && toUnit === 'nm') {
        result = value * 1000000000000;
    }
    else if (fromUnit === 'km' && toUnit === 'mi') {
        result = value * 0.621371;
    }
    else if (fromUnit === 'km' && toUnit === 'yd') {
        result = value * 1093.61;
    }
    else if (fromUnit === 'km' && toUnit === 'ft') {
        result = value * 3280.84;
    }
    else if (fromUnit === 'km' && toUnit === 'in') {
        result = value * 39370.1;
    }
    else if (fromUnit === 'km' && toUnit === 'ly') {
        result = value * 1.057 * 1E-13;
    }

    //4.Millimeter
    else if (fromUnit === 'mm' && toUnit === 'cm') {
        result = value / 10;
    }
    else if (fromUnit === 'mm' && toUnit === 'm') {
        result = value / 1000;
    }
    else if (fromUnit === 'mm' && toUnit === 'km') {
        result = value / 1000000;
    }
    else if (fromUnit === 'mm' && toUnit === 'µm') {
        result = value * 1000;
    }
    else if (fromUnit === 'mm' && toUnit === 'nm') {
        result = value * 1000000;
    }
    else if (fromUnit === 'mm' && toUnit === 'mi') {
        result = value / 1609344;
    }
    else if (fromUnit === 'mm' && toUnit === 'yd') {
        result = value / 914.4;
    }
    else if (fromUnit === 'mm' && toUnit === 'ft') {
        result = value / 304.8;
    }
    else if (fromUnit === 'mm' && toUnit === 'in') {
        result = value / 25.4;
    }
    else if (fromUnit === 'mm' && toUnit === 'ly') {
        result = value / (9.461 * 1E18);
    }

    //5.Micrometer
    else if (fromUnit === 'µm' && toUnit === 'cm') {
        result = value / 10000;
    }
    else if (fromUnit === 'µm' && toUnit === 'm') {
        result = value / 1000000;
    }
    else if (fromUnit === 'µm' && toUnit === 'km') {
        result = value / 1000000000;
    }
    else if (fromUnit === 'µm' && toUnit === 'mm') {
        result = value / 1000;
    }
    else if (fromUnit === 'µm' && toUnit === 'nm') {
        result = value * 1000;
    }
    else if (fromUnit === 'µm' && toUnit === 'mi') {
        result = value / 1609344000;
    }
    else if (fromUnit === 'µm' && toUnit === 'yd') {
        result = value / 914400;
    }
    else if (fromUnit === 'µm' && toUnit === 'ft') {
        result = value / 304800;
    }
    else if (fromUnit === 'µm' && toUnit === 'in') {
        result = value / 25400;
    }
    else if (fromUnit === 'µm' && toUnit === 'ly') {
        result = value / (9.461 * 1E21);
    }

    //6.Nanometer
    else if (fromUnit === 'nm' && toUnit === 'cm') {
        result = value / 10000000;
    }
    else if (fromUnit === 'nm' && toUnit === 'm') {
        result = value / 1000000000;
    }
    else if (fromUnit === 'nm' && toUnit === 'km') {
        result = value / 1000000000000;
    }
    else if (fromUnit === 'nm' && toUnit === 'mm') {
        result = value / 1000000;
    }
    else if (fromUnit === 'nm' && toUnit === 'µm') {
        result = value / 1000;
    }
    else if (fromUnit === 'nm' && toUnit === 'mi') {
        result = value / 1609344000000;
    }
    else if (fromUnit === 'nm' && toUnit === 'yd') {
        result = value / 914400000;
    }
    else if (fromUnit === 'nm' && toUnit === 'ft') {
        result = value / 914400000;
    }
    else if (fromUnit === 'nm' && toUnit === 'in') {
        result = value / 25400000;
    }
    else if (fromUnit === 'nm' && toUnit === 'ly') {
        result = value / (9.461 * 1E21);
    }

    //7.Mile
    else if (fromUnit === 'mi' && toUnit === 'cm') {
        result = value * 160934;
    }
    else if (fromUnit === 'mi' && toUnit === 'm') {
        result = value * 1609.34;
    }
    else if (fromUnit === 'mi' && toUnit === 'km') {
        result = value * 1.60934;
    }
    else if (fromUnit === 'mi' && toUnit === 'mm') {
        result = value * 1609344;
    }
    else if (fromUnit === 'mi' && toUnit === 'µm') {
        result = value * 1609344000;
    }
    else if (fromUnit === 'mi' && toUnit === 'nm') {
        result = value * 1609344000000;
    }
    else if (fromUnit === 'mi' && toUnit === 'yd') {
        result = value * 1760;
    }
    else if (fromUnit === 'mi' && toUnit === 'ft') {
        result = value * 5280;
    }
    else if (fromUnit === 'mi' && toUnit === 'in') {
        result = value * 63, 360;
    }
    else if (fromUnit === 'mi' && toUnit === 'ly') {
        result = value * 1.70108 * 1E-13;
    }

    //8.Yard
    else if (fromUnit === 'yd' && toUnit === 'cm') {
        result = value * 91.44;
    }
    else if (fromUnit === 'yd' && toUnit === 'm') {
        result = value * 0.9144;
    }
    else if (fromUnit === 'yd' && toUnit === 'km') {
        result = value * 0.0009144;
    }
    else if (fromUnit === 'yd' && toUnit === 'mm') {
        result = value * 0.0009144;
    }
    else if (fromUnit === 'yd' && toUnit === 'µm') {
        result = value * 914, 400;
    }
    else if (fromUnit === 'yd' && toUnit === 'nm') {
        result = value * 914400000;
    }
    else if (fromUnit === 'yd' && toUnit === 'mi') {
        result = value * 0.000568182;
    }
    else if (fromUnit === 'yd' && toUnit === 'ft') {
        result = value * 3;
    }
    else if (fromUnit === 'yd' && toUnit === 'in') {
        result = value * 36;
    }
    else if (fromUnit === 'yd' && toUnit === 'ly') {
        result = value * 9.6652 * 1E-18
            ;
    }

    //9.Foot
    else if (fromUnit === 'ft' && toUnit === 'cm') {
        result = value * 30.48;
    }
    else if (fromUnit === 'ft' && toUnit === 'm') {
        result = value * 0.3048;
    }
    else if (fromUnit === 'ft' && toUnit === 'km') {
        result = value * 0.0003048;
    }
    else if (fromUnit === 'ft' && toUnit === 'mm') {
        result = value * 304.8;
    }
    else if (fromUnit === 'ft' && toUnit === 'µm') {
        result = value * 30400;
    }
    else if (fromUnit === 'ft' && toUnit === 'nm') {
        result = value * 304800000;
    }
    else if (fromUnit === 'ft' && toUnit === 'mi') {
        result = value * 0.000189394;
    }
    else if (fromUnit === 'ft' && toUnit === 'yd') {
        result = value * 0.333333;
    }
    else if (fromUnit === 'ft' && toUnit === 'in') {
        result = value * 12;
    }
    else if (fromUnit === 'ft' && toUnit === 'ly') {
        result = value * 9.6652 * 1E-17
            ;
    }

    //10.Inch
    else if (fromUnit === 'in' && toUnit === 'cm') {
        result = value * 2.54;
    }
    else if (fromUnit === 'in' && toUnit === 'm') {
        result = value * 0.0254;
    }
    else if (fromUnit === 'in' && toUnit === 'km') {
        result = value * 0.0000254;
    }
    else if (fromUnit === 'in' && toUnit === 'mm') {
        result = value * 25.4;
    }
    else if (fromUnit === 'in' && toUnit === 'µm') {
        result = value * 25, 400;
    }
    else if (fromUnit === 'in' && toUnit === 'nm') {
        result = value * 25400000;
    }
    else if (fromUnit === 'in' && toUnit === 'mi') {
        result = value * 25400000;
    }
    else if (fromUnit === 'in' && toUnit === 'yd') {
        result = value * 0.0277778;
    }
    else if (fromUnit === 'in' && toUnit === 'ft') {
        result = value * 0.0277778;
    }
    else if (fromUnit === 'in' && toUnit === 'ly') {
        result = value * 0.0277778 * 1E-18;
    }

    //11.Light Year
    else if (fromUnit === 'ly' && toUnit === 'cm') {
        result = value * 9.461 * 1E17;
    }
    else if (fromUnit === 'ly' && toUnit === 'm') {
        result = value * 9.461 * 1E15;
    }
    else if (fromUnit === 'ly' && toUnit === 'km') {
        result = value * 9.461 * 1E12;
    }
    else if (fromUnit === 'ly' && toUnit === 'mm') {
        result = value * 9.461 * 1E18;
    }
    else if (fromUnit === 'ly' && toUnit === 'µm') {
        result = value * 9.461 * 1E21;
    }
    else if (fromUnit === 'ly' && toUnit === 'nm') {
        result = value * 9.461 * 1E24;
    }
    else if (fromUnit === 'ly' && toUnit === 'mi') {
        result = value * 5.878 * 1E12;
    }
    else if (fromUnit === 'ly' && toUnit === 'yd') {
        result = value * 1.035 * 1E16;
    }
    else if (fromUnit === 'ly' && toUnit === 'ft') {
        result = value * 3.106 * 1E16;
    }
    else if (fromUnit === 'ly' && toUnit === 'in') {
        result = value * 3.727 * 1E17;
    }

    document.getElementById('result').innerHTML = result;
}