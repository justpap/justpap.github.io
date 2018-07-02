'use strict';

$('button').click(function () {
    $.getJSON(
        "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",

        function (wyswietlDane) {
            var nowyDiv = $("<div id=\"dane-programisty\"></div>").append(
                (' Imię: ') + wyswietlDane.imie + '<br>' +
                (' Nazwisko: ') + wyswietlDane.nazwisko + '<br>' +
                (' Zawód: ') + wyswietlDane.zawod + '<br>' +
                (' Firma: ') + wyswietlDane.firma
            );
            $("body").append(nowyDiv);

        });
});
