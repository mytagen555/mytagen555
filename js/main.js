/**
 * Created by uppge on 31.10.2018.
 */
//add class
$(document).ready(function(){
    $('.link').hover(
         function() {
            $( this ).addClass('active');
        },
    function() {
        $( this ).removeClass('active');
    });
});
$(".link").click(function(e) {
    e.preventDefault();
    $(".link").removeClass('active');
    $(this).addClass('active');
})
//button

(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }
})();
//carousel
$('.next .prew').click(function(){
    slickk.slick('slickNext');
});

//numbers
var show = true;
var countbox = ".spincrement";
$(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $(document).ready(function(){
            $('.spincrement').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
        });
        show = false;
    }
});
//drag and drop
"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}
