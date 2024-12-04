var convertType = 'fahrenheit';
var heading = document.querySelector('h1');
var title = document.querySelector('p');
var result = document.getElementById('result');
var form = document.getElementById('convert');

// function to convert
(function () {

    document.addEventListener('keydown', function (e) {
        var key = e.code;
        //alert(key);

        if (key === 'KeyK') {
            heading.innerHTML = 'Fahrenheit to Celsius' //change heading
            title.innerHTML = 'Enter temperature in Fahrenheit' //change title
            convertType = 'fahrenheit' //change convertType to 'fahrenheit'
        } else if (key === 'KeyM') {
            heading.innerHTML = 'Celsius to Fahrenheit' //change heading
            title.innerHTML = 'Enter temperature in Celsius' //change title
            convertType = 'celsius' //change convertType to 'celsius'
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var temperature = parseFloat(document.getElementById('temperature').value);

        if (temperature) {
            // Fahrenheit to Celsius 1 to -17.22222
            // Celsius to Fahrenheit 1 to 33.8

            if (convertType === 'fahrenheit') {
                var celsius = (temperature - 32) * 5 / 9;
                result.innerHTML = temperature.toFixed(2) + '°F is' + celsius.toFixed(2) + '°C';
            } else if (convertType === 'celsius') {
                var fahrenheit = (temperature * 9 / 5) + 32;
                result.innerHTML = temperature.toFixed(2) + '°C is' + fahrenheit.toFixed(2) + '°F';
            }
        }
        else {
            result.innerHTML = '<h2>Please enter a temperature.</h2>';
        }
    });

}());