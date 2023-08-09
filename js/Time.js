function convert() {
    var value = parseFloat(document.getElementById('valueInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = 0;

    if (fromUnit === toUnit) {
        result = value;
    }
    // 1.Second
    else if (fromUnit === 'Second' && toUnit === 'Millisecond') {
        result = value * 1000;
    }
    else if (fromUnit === 'Second' && toUnit === 'Microsecond') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Second' && toUnit === 'Nanosecond') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'Second' && toUnit === 'Picosecond') {
        result = value * 1000000000000;
    }
    else if (fromUnit === 'Second' && toUnit === 'Minute') {
        result = value / 60;
    }
    else if (fromUnit === 'Second' && toUnit === 'Hour') {
        result = value / 3600;
    }
    else if (fromUnit === 'Second' && toUnit === 'Day') {
        result = value / 86400;
    }
    else if (fromUnit === 'Second' && toUnit === 'Week') {
        result = value / 604800;
    }
    else if (fromUnit === 'Second' && toUnit === 'Month') {
        result = value / 2628000;
    }
    else if (fromUnit === 'Second' && toUnit === 'Yea*') {
        result = value / 31536000;
    }


    // 2.Millisecond
    else if (fromUnit === 'Millisecond' && toUnit === 'Second') {
        result = value / 1000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Microsecond') {
        result = value * 1000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Nanosecond') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Picosecond') {
        result = value * 1000000000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Minute') {
        result = value / 60000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Hour') {
        result = value / 3600000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Day') {
        result = value / 86400000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Week') {
        result = value / 604800000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Month') {
        result = value / 2628000000;
    }
    else if (fromUnit === 'Millisecond' && toUnit === 'Yea*') {
        result = value / 31536000000;
    }

    // 3.Microsecond
    else if (fromUnit === 'Microsecond' && toUnit === 'Second') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Millisecond') {
        result = value / 1000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Nanosecond') {
        result = value * 1000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Picosecond') {
        result = value * 1000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Minute') {
        result = value / 60000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Hour') {
        result = value / 3600000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Day') {
        result = value / 86400000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Week') {
        result = value / 604800000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Month') {
        result = value / 2628000000000;
    }
    else if (fromUnit === 'Microsecond' && toUnit === 'Year') {
        result = value / 31536000000000;
    }


    // 4.Nanosecond
    else if (fromUnit === 'Nanosecond' && toUnit === 'Second') {
        result = value / 1000000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Millisecond') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Microsecond') {
        result = value / 1000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Picosecond') {
        result = value * 1000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Minute') {
        result = value / 60000000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Hour') {
        result = value / 3600000000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Day') {
        result = value / 86400000000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Week') {
        result = value / 604800000000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Month') {
        result = value / 2628000000000000;
    }
    else if (fromUnit === 'Nanosecond' && toUnit === 'Year') {
        result = value / 31536000000000000;
    }


    // 5.Picosecond
    else if (fromUnit === 'Picosecond' && toUnit === 'Second') {
        result = value / 1000000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Millisecond') {
        result = value / 1000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Microsecond') {
        result = value / 1000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Nanosecond') {
        result = value / 1000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Minute') {
        result = value / 60000000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Hour') {
        result = value / 3600000000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Day') {
        result = value / 86400000000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Week') {
        result = value / 604800000000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Month') {
        result = value / 2628000000000000000;
    }
    else if (fromUnit === 'Picosecond' && toUnit === 'Year') {
        result = value / 31536000000000000000;
    }


    // 6.Minute
    else if (fromUnit === 'Minute' && toUnit === 'Second') {
        result = value * 60;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Millisecond') {
        result = value * 60000;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Microsecond') {
        result = value * 60000000;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Nanosecond') {
        result = value * 60000000000;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Picosecond') {
        result = value * 60000000000000;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Hour') {
        result = value / 60;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Day') {
        result = value / 1440;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Week') {
        result = value / 10080;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Month') {
        result = value / 43800;
    }
    else if (fromUnit === 'Minute' && toUnit === 'Year') {
        result = value / 525600;
    }


    // 7.Hour
    else if (fromUnit === 'Hour' && toUnit === 'Second') {
        result = value * 3600;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Millisecond') {
        result = value * 3600000;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Millisecond') {
        result = value * 3600000000;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Nanosecond') {
        result = value * 3600000000000;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Picosecond') {
        result = value * 3600000000000000;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Minute') {
        result = value * 60;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Day') {
        result = value / 24;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Week') {
        result = value / 168;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Month') {
        result = value / 730;
    }
    else if (fromUnit === 'Hour' && toUnit === 'Year') {
        result = value / 8760;
    }


    // 8.Day
    else if (fromUnit === 'Day' && toUnit === 'Second') {
        result = value * 86400;
    }
    else if (fromUnit === 'Day' && toUnit === 'Millisecond') {
        result = value * 86400000;
    }
    else if (fromUnit === 'Day' && toUnit === 'Microsecond') {
        result = value * 86400000000;
    }
    else if (fromUnit === 'Day' && toUnit === 'Nanosecond') {
        result = value * 86400000000000;
    }
    else if (fromUnit === 'Day' && toUnit === 'Picosecond') {
        result = value * 86400000000000;
    }
    else if (fromUnit === 'Day' && toUnit === 'Minute') {
        result = value * 1440;
    }
    else if (fromUnit === 'Day' && toUnit === 'Hour') {
        result = value * 24;
    }
    else if (fromUnit === 'Day' && toUnit === 'Week') {
        result = value / 7;
    }
    else if (fromUnit === 'Day' && toUnit === 'Month') {
        result = value / 30.44;
    }
    else if (fromUnit === 'Day' && toUnit === 'Year') {
        result = value / 365.25;
    }


    // 9.Week
    else if (fromUnit === 'Week' && toUnit === 'Second') {
        result = value * 604800;
    }
    else if (fromUnit === 'Week' && toUnit === 'Millisecond') {
        result = value * 604800000;
    }
    else if (fromUnit === 'Week' && toUnit === 'Microsecond') {
        result = value * 604800000000;
    }
    else if (fromUnit === 'Week' && toUnit === 'Nanosecond') {
        result = value * 604800000000000;
    }
    else if (fromUnit === 'Week' && toUnit === 'Picosecond') {
        result = value * 604800000000000000;
    }
    else if (fromUnit === 'Week' && toUnit === 'Minute') {
        result = value * 10080;
    }
    else if (fromUnit === 'Week' && toUnit === 'Hour') {
        result = value * 168;
    }
    else if (fromUnit === 'Week' && toUnit === 'Day') {
        result = value * 7;
    }
    else if (fromUnit === 'Week' && toUnit === 'Month') {
        result = value * 4.35;
    }
    else if (fromUnit === 'Week' && toUnit === 'Year') {
        result = value / 52.18;
    }


    // 10.Month
    else if (fromUnit === 'Month' && toUnit === 'Second') {
        result = value * 2628000;
    }
    else if (fromUnit === 'Month' && toUnit === 'Millisecond') {
        result = value * 2628000000;
    }
    else if (fromUnit === 'Month' && toUnit === 'Microsecond') {
        result = value * 2628000000000;
    }
    else if (fromUnit === 'Month' && toUnit === 'Nanosecond') {
        result = value * 2628000000000000;
    }
    else if (fromUnit === 'Month' && toUnit === 'Picosecond') {
        result = value * 2628000000000000000;
    }
    else if (fromUnit === 'Month' && toUnit === 'Minute') {
        result = value * 43800;
    }
    else if (fromUnit === 'Month' && toUnit === 'Hour') {
        result = value * 730;
    }
    else if (fromUnit === 'Month' && toUnit === 'Day') {
        result = value * 30.44;
    }
    else if (fromUnit === 'Month' && toUnit === 'Week') {
        result = value / 4.35;
    }
    else if (fromUnit === 'Month' && toUnit === 'Year') {
        result = value / 12;
    }


    // 11.Year
    else if (fromUnit === 'Year' && toUnit === 'Second') {
        result = value * 31536000;
    }
    else if (fromUnit === 'Year' && toUnit === 'Millisecond') {
        result = value * 31536000;
    }
    else if (fromUnit === 'Year' && toUnit === 'Microsecond') {
        result = value * 31536000000000;
    }
    else if (fromUnit === 'Year' && toUnit === 'Nanosecond') {
        result = value * 31536000000000000;
    }
    else if (fromUnit === 'Year' && toUnit === 'Picosecond') {
        result = value * 31536000000000000000;
    }
    else if (fromUnit === 'Year' && toUnit === 'Minute') {
        result = value * 525600;
    }
    else if (fromUnit === 'Year' && toUnit === 'Hour') {
        result = value * 8760;
    }
    else if (fromUnit === 'Year' && toUnit === 'Day') {
        result = value * 365.25;
    }
    else if (fromUnit === 'Year' && toUnit === 'Week') {
        result = value * 365.25;
    }
    else if (fromUnit === 'Year' && toUnit === 'Month') {
        result = value * 12;
    }


    document.getElementById('result').innerHTML = result;
}