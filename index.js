var screen = document.querySelector("input");
var buttonPressed;
var screenValue = '';
$("button").click(function () {
    buttonPressed = $(this).text();
    console.log(buttonPressed);
    if (buttonPressed === 'X') {
        buttonPressed = '*';
        screenValue += buttonPressed;
        screen.value = screenValue;
    }
    else if (buttonPressed === 'C') {
        screenValue = '';
        screen.value = screenValue;
    }
    else if (buttonPressed === '=') {
        screen.value = eval(screenValue);
    }
    else {
        screenValue += buttonPressed;
        screen.value = screenValue;
    }

});



