function convert() {
    var value = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (fromUnit === toUnit) {
        result = value;
    }
    // 1.Kilogram
    else if (fromUnit === 'Kilogram' && toUnit === 'Gram') {
        result = value * 1000;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Milligram') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Metric Ton') {
        result = value / 1000;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Long Ton') {
        result = value / 1016.0469088;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Short Ton') {
        result = value / 907.18474;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Pound') {
        result = value * 2.2046226218;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Ounce') {
        result = value * 35.27396195;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Carrat') {
        result = value * 5000;
    }
    else if (fromUnit === 'Kilogram' && toUnit === 'Atomic Mass Unit') {
        result = value * 6.02214179e+26;
    }


    // 2.Gram
    else if (fromUnit === 'Gram' && toUnit === 'Kilogram') {
        result = value / 1000;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Milligram') {
        result = value * 1000;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Metric Ton') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Long Ton') {
        result = value / 1016046.9088;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Short Ton') {
        result = value / 907184.74;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Pound') {
        result = value / 453.59237;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Ounce') {
        result = value / 28.349523125;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Carrat') {
        result = value * 5;
    }
    else if (fromUnit === 'Gram' && toUnit === 'Atomic Mass Unit') {
        result = value * 6.02214179e+23;
    }


    // 3.Milligram
    else if (fromUnit === 'Milligram' && toUnit === 'Kilogram') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Gram') {
        result = value / 1000;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Metric Ton') {
        result = value / 1000000000;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Long Ton') {
        result = value / 1016046.9088;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Short Ton') {
        result = value / 907184.74;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Pound') {
        result = value / 453592.37;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Ounce') {
        result = value / 28349.523125;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Carrat') {
        result = value / 200;
    }
    else if (fromUnit === 'Milligram' && toUnit === 'Atomic Mass Unit') {
        result = value * 6.02214179e+20;
    }


    // 4.Metric Ton
    else if (fromUnit === 'Metric Ton' && toUnit === 'Kilogram') {
        result = value * 1000;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Gram') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Milligram') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Long Ton') {
        result = value / 1.0160469088;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Short Ton') {
        result = value / 0.90718474;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Pound') {
        result = value * 2204.6226218;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Ounce') {
        result = value * 35273.96195;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Carrat') {
        result = value * 5000000;
    }
    else if (fromUnit === 'Metric Ton' && toUnit === 'Atomic Mass Unit') {
        result = value * 6.02214179e+29;
    }


    // 5.Long Ton
    else if (fromUnit === 'Long Ton' && toUnit === 'Kilogram') {
        result = value * 1016.0469088;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Gram') {
        result = value * 1016046.9088;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Milligram') {
        result = value * 1016046908.8;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Metric Ton') {
        result = value * 1.0160469088;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Short Ton') {
        result = value * 1.12;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Pound') {
        result = value * 2240;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Ounce') {
        result = value * 35840;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Carrat') {
        result = value * 5080234.545454545;
    }
    else if (fromUnit === 'Long Ton' && toUnit === 'Atomic Mass Unit') {
        result = value * 6.10387606e+29;
    }


    // 6.Short Ton
    else if (fromUnit === 'Short Ton' && toUnit === 'Kilogram') {
        result = value * 907.18474;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Gram') {
        result = value * 907184.74;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Milligram') {
        result = value * 907184740;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Metric Ton') {
        result = value * 0.90718474;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Long Ton') {
        result = value / 1.12;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Pound') {
        result = value * 2000;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Ounce') {
        result = value * 32000;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Carrat') {
        result = value * 4535923.670666667;
    }
    else if (fromUnit === 'Short Ton' && toUnit === 'Atomic Mass Unit') {
        result = value * 5.44310867e+29;
    }


    // 7.Pound
    else if (fromUnit === 'Pound' && toUnit === 'Kilogram') {
        result = value / 2.2046226218;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Gram') {
        result = value * 453.59237;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Milligram') {
        result = value * 453592.37;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Metric Ton') {
        result = value / 2204.6226218;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Long Ton') {
        result = value / 2240;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Short Ton') {
        result = value / 2000;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Ounce') {
        result = value * 16;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Carrat') {
        result = value * 2267.96185;
    }
    else if (fromUnit === 'Pound' && toUnit === 'Atomic Mass Unit') {
        result = value * 2.73159734e+26;
    }


    // 8.Ounce
    else if (fromUnit === 'Ounce' && toUnit === 'Kilogram') {
        result = value / 35.27396195;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Gram') {
        result = value * 28.349523125;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Milligram') {
        result = value * 28349.523125;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Metric Ton') {
        result = value / 35273.96195;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Long Ton') {
        result = value / 35840;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Short Ton') {
        result = value / 32000;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Pound') {
        result = value / 16;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Carrat') {
        result = value * 141.747615625;
    }
    else if (fromUnit === 'Ounce' && toUnit === 'Atomic Mass Unit') {
        result = value * 1.71574834e+25;
    }


    // 9.Carrat
    else if (fromUnit === 'Carrat' && toUnit === 'Kilogram') {
        result = value / 5000;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Gram') {
        result = value / 5;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Milligram') {
        result = value * 200;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Metric Ton') {
        result = value / 5000000;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Long Ton') {
        result = value / 5080234.545454545;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Short Ton') {
        result = value / 4535923.670666667;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Pound') {
        result = value / 2267.96185;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Ounce') {
        result = value / 141.747615625;
    }
    else if (fromUnit === 'Carrat' && toUnit === 'Atomic Mass Unit') {
        result = value * 1.20442745e+23;
    }


    // 10.Atomic Mass Unit
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Kilogram') {
        result = value / 6.02214179e+26;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Gram') {
        result = value / 6.02214179e+23;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Milligram') {
        result = value / 6.02214179e+20;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Metric Ton') {
        result = value / 6.02214179e+29;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Long Ton') {
        result = value / 6.10387606e+29;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Short Ton') {
        result = value / 5.44310867e+29;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Pound') {
        result = value / 2.73159734e+26;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Ounce') {
        result = value / 1.71574834e+25;
    }
    else if (fromUnit === 'Atomic Mass Unit' && toUnit === 'Carrat') {
        result = value / 1.20442745e+23;
    }


    document.getElementById('result').innerHTML = result;
}