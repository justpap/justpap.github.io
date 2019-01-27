

var inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {

    var pushed = obj.innerHTML;

    if (pushed == '=') {

        inputLabel.value = eval(inputLabel.value);

    } else if (pushed == 'DEL') {

        inputLabel.value = '0';

    } else if (pushed == 'x') {
        inputLabel.value += '*';

    } else if (pushed == '%') {

        inputLabel.value = eval(inputLabel.value) * 0.01;
    }else {
        if (inputLabel.value == '0') {
            inputLabel.value = pushed;

        } else {
            inputLabel.value += pushed;

        }
    }
}
