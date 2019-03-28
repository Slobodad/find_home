'use strict'

$(document).ready(function() {

    var btnShow = $('#js-show-btn');
    var saidbar = $('#saidbar');
    var header = $('#header');
    var logo = $('#js-logo');
    var logoSmall = $('#js-logo-small');
    var searchBtn = $('#js-search-btn');


    btnShow.on('click', function() {
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
var mapPosition1 = {lat: 51.5016188, lng: 31.2924649};
var mapPosition2 = {lat: 51.5028208, lng: 31.2874864};
var mapPosition3 = {lat: 51.4935383, lng: 31.2943086};
var mapPosition4 = {lat: 51.4961353, lng: 31.2981734};
var popupContent = '<p>Что угодно</p>';

function initMap() {
  map = new google.maps.Map(mapConteiner, {
      center: mapPosition1,
      zoom: 14,
      disableDefaultUI: true
  });

  var iconMarker = 'img/marker.png';
  var iconMarkerRed = 'img/marker-red.png';

    var marker1 = new google.maps.Marker({
        position: mapPosition1,
        map: map,
        icon: iconMarker    
    });

    infowindow = new google.maps.InfoWindow({
        content: popupContent
    });

    marker1.addEventListener('click', function() {
        infowindow.open(map, marker);
    });

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