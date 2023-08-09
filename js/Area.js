function convert() {
    var value = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (fromUnit === toUnit) {
        result = value;
    }
    //1.Square Meter
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Kilometer') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Centimeter') {
        result = value * 10000;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Millimeter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Micrometer') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Hectare') {
        result = value / 10000
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Mile') {
        result = value * 3.861e-7;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Yard') {
        result = value * 1.196;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Foot') {
        result = value * 10.764;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Square Inch') {
        result = value * 1550.003;
    }
    else if (fromUnit === 'Square Meter' && toUnit === 'Acre') {
        result = value * 0.0002471;
    }

    //2.Square Kilometer
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Meter') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Centimeter') {
        result = value * 10000000000;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Millimeter') {
        result = value * 1000000000000;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Micrometer') {
        result = value * 1000000000000000;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Hectare') {
        result = value * 100;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Mile') {
        result = value * 0.3861;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Yard') {
        result = value * 1195990.0463;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Foot') {
        result = value * 10763910.4167;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Square Inch') {
        result = value * 1550003100.0062;
    }
    else if (fromUnit === 'Square Kilometer' && toUnit === 'Acre') {
        result = value * 247.1053814672;
    }

    //3.Square Centimeter
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Meter') {
        result = value / 10000;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Kilometer') {
        result = value / 10000000000;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Millimeter') {
        result = value * 100;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Micrometer') {
        result = value * 10000000;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Hectare') {
        result = value / 10000000;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Mile') {
        result = value / 2590000000;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Yard') {
        result = value / 8361.2736;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Foot') {
        result = value / 929.0304;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Square Inch') {
        result = value / 6.4516;
    }
    else if (fromUnit === 'Square Centimeter' && toUnit === 'Acre') {
        result = value / 40468564.224;
    }

    //4.Square Millimeter
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Meter') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Kilometer') {
        result = value / 1000000000000;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Centimeter') {
        result = value / 100;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Micrometer') {
        result = value * 1000;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Hectare') {
        result = value / 10000000;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Mile') {
        result = value / 2590000000000;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Yard') {
        result = value / 836127.36;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Foot') {
        result = value / 9290.304;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Square Inch') {
        result = value / 645.16;
    }
    else if (fromUnit === 'Square Millimeter' && toUnit === 'Acre') {
        result = value / 4046856422.4;
    }

    //5.Square Micrometer
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Meter') {
        result = value / 1000000000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Kilometer') {
        result = value / 1000000000000000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Centimeter') {
        result = value / 10000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Millimeter') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Hectare') {
        result = value / 10000000000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Mile') {
        result = value / 25900000000000000003;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Yard') {
        result = value / 836127360000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Foot') {
        result = value / 9290304000;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Square Inch') {
        result = value / 6451600;
    }
    else if (fromUnit === 'Square Micrometer' && toUnit === 'Acre') {
        result = value / 4046856422400000;
    }

    //6.Hectare
    else if (fromUnit === 'Hectare' && toUnit === 'Square Meter') {
        result = value * 10000;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Kilometer') {
        result = value / 100;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Centimeter') {
        result = value * 10000000;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Millimeter') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Micrometer') {
        result = value * 1000000000000;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Mile') {
        result = value / 259;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Yard') {
        result = value * 11960;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Foot') {
        result = value * 107639;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Square Inch') {
        result = value * 15500031;
    }
    else if (fromUnit === 'Hectare' && toUnit === 'Acre') {
        result = value * 2.471;
    }

    //7.Square Mile
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Meter') {
        result = value * 2589988.110336;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Kilometer') {
        result = value * 2.589988110336;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Centimeter') {
        result = value * 25899881103.36;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Millimeter') {
        result = value * 2589988110336;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Micrometer') {
        result = value * 2589988110336000;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Hectare') {
        result = value * 259.0;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Yard') {
        result = value * 3097600;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Foot') {
        result = value * 27878400;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Square Inch') {
        result = value * 4014489600;
    }
    else if (fromUnit === 'Square Mile' && toUnit === 'Acre') {
        result = value * 640.0;
    }

    //8.Square Yard
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Meter') {
        result = value * 0.836127;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Kilometer') {
        result = value * 8.36127e-7;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Centimeter') {
        result = value * 8361.2736;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Millimeter') {
        result = value * 836127.36;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Micrometer') {
        result = value * 836127360000;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Hectare') {
        result = value * 8.3612736e-5;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Mile') {
        result = value * 3.228305785124e-7;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Foot') {
        result = value * 9;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Square Inch') {
        result = value * 1296;
    }
    else if (fromUnit === 'Square Yard' && toUnit === 'Acre') {
        result = value * 0.00020661157;
    }

    //9.Square Foot
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Meter') {
        result = value * 0.092903;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Kilometer') {
        result = value * 9.2903e-8;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Centimeter') {
        result = value * 929.0304;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Millimeter') {
        result = value * 92903.04;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Micrometer') {
        result = value * 92903040000;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Hectare') {
        result = value * 9.2903e-6;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Mile') {
        result = value * 3.587e-8;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Yard') {
        result = value * 0.111111;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Square Inch') {
        result = value * 144;
    }
    else if (fromUnit === 'Square Foot' && toUnit === 'Acre') {
        result = value * 2.2957e-5;
    }

    //10.Square Inch
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Meter') {
        result = value * 0.00064516;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Kilometer') {
        result = value * 6.4516e-10;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Centimeter') {
        result = value * 6.4516;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Millimeter') {
        result = value * 645.16;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Micrometer') {
        result = value * 645160000;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Hectare') {
        result = value * 6.4516e-8;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Mile') {
        result = value * 2.490976686052e-10;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Yard') {
        result = value * 0.000771605;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Square Foot') {
        result = value * 0.00694444;
    }
    else if (fromUnit === 'Square Inch' && toUnit === 'Acre') {
        result = value * 1.594225079073e-7;
    }

    //11.Acre
    else if (fromUnit === 'Acre' && toUnit === 'Square Meter') {
        result = value * 4046.8564224;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Kilometer') {
        result = value * 0.00404685642;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Centimeter') {
        result = value * 40468564.224;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Millimeter') {
        result = value * 4046856422.4;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Micrometer') {
        result = value * 4046856422400000;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Hectare') {
        result = value * 0.40468564224;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Mile') {
        result = value * 0.0015625;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Yard') {
        result = value * 4840;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Foot') {
        result = value * 43560;
    }
    else if (fromUnit === 'Acre' && toUnit === 'Square Inch') {
        result = value * 6272640;
    }

    document.getElementById('result').innerHTML = result;
}