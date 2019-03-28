'use strict'

$(document).ready(function () {

    var btnShow = $('#js-show-btn');
    var saidbar = $('#saidbar');
    var header = $('#header');
    var logo = $('#js-logo');
    var logoSmall = $('#js-logo-small');
    var searchBtn = $('#js-search-btn');


    btnShow.on('click', function () {
        btnShow.toggleClass('show__btn-active');
        saidbar.toggleClass('saidbar__active');
        header.toggleClass('saidbar__header-active');
        logo.toggleClass('saidbar__logo-hidden');
        logoSmall.toggleClass('saidbar__logo-small-active');
        searchBtn.toggleClass('saidbar__search-active');
    });
});

var map;
var mapConteiner = $('#map')[0];
var mapPosition1 = { lat: 51.5016188, lng: 31.2924649 };
// var mapPosition2 = {lat: 51.5028208, lng: 31.2874864};
// var mapPosition3 = {lat: 51.4935383, lng: 31.2943086};
// var mapPosition4 = {lat: 51.4961353, lng: 31.2981734};
// var popupContent = '<p>Что угодно</p>';

function initMap() {
    map = new google.maps.Map(mapConteiner, {
        center: mapPosition1,
        zoom: 14,
        disableDefaultUI: true
    });

    var iconMarker = 'img/marker.png';
    var iconMarkerRed = 'img/marker-red.png';

    var marker = new google.maps.Marker({
        position: mapPosition1,
        map: map,
        icon: iconMarker
    });

    // marker.id = 'marker-1'

    var contentS = '<div class="popup" id="marker-1">' +
        '<div class="popup__img">'
    '<img src="img/image.png" alt="Photo">'
    '</div>'
    '<h5 class="popup__title">Новый берег</h5>'
    '<div class="rating" id="js-rating" data-slide="4">'
    '<button class="rating__btn" data-rate="1">'
    '<i class="fas fa-star rating__star rating__star--active"></i>'
    '</button>'
    '<button class="rating__btn" data-rate="1">'
    '<i class="fas fa-star rating__star rating__star--active"></i>'
    '</button>'
    '<button class="rating__btn" data-rate="1">'
    '<i class="fas fa-star rating__star rating__star--active"></i>'
    '</button>'
    '<button class="rating__btn" data-rate="1">'
    '<i class="fas fa-star rating__star rating__star--active"></i>'
    '</button>'
    '<button class="rating__btn" data-rate="1">'
    '<i class="fas fa-star rating__star rating__star--active"></i>'
    '</button>'
    '</div>'
    '<p class="popup__description">'
    'Жилой комплекс «Новый Берег» имеет 24 этажей (+тех. этаж) и обеспечен подземным паркингом.'
    '</p>'
    '<div class="popup__link">'
    '<a href="#">Подробнее</a>'
    '</div>'
    '<div class="popup__logo">'
    '<img src="img/logo-popup.png" alt="logo">'
    '</div>'
    '<button class="popup__close" id="popup-close">'
    '</button>'
    '</div>'

    var infowindow = new google.maps.InfoWindow({
        content: contentS
    });

    marker.addListener('click', function () {
        // marker.classList.toggleClass('popup-active');
        infowindow.open(map, marker);
    });

    // infowindow = new google.maps.InfoWindow({
    //     content: popupContent
    // });

    // google.maps.event.addListener(marker1, 'click', function() {
    //     marker1.info.open(map, marker);

    // marker1.addEventListener('click', function() {
    //     infowindow.open(map, marker);
    // });

    // var marker2 = new google.maps.Marker({
    //     position: mapPosition2,
    //     map: map,
    //     icon: iconMarker    
    // });

    // var marker3 = new google.maps.Marker({
    //     position: mapPosition3,
    //     map: map,
    //     icon: iconMarkerRed    
    // });

    // var marker4 = new google.maps.Marker({
    //     position: mapPosition4,
    //     map: map,
    //     icon: iconMarker    
    // });
}