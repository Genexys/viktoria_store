const $ = require("jquery");
window.jQuery = $;

const getMap = () => {
  /*
 * Карта
 */

  function initMap() {
    const WINDOW_WIDTH = window.innerWidth;
    const mapOffice = document.querySelector('.js-map-office');
    const locArrayOffice = [];
    const infoWindows = [];

    if (mapOffice) {
      const dataMap = JSON.parse(mapOffice.dataset.other);

      dataMap.forEach(function (el) {
        locArrayOffice.push(
          {
            "loc": el.MAP,
            info: {
              "name": el.NAME,
              "address": el.ADDRESS ? el.ADDRESS : '',
              "phone": el.PHONE ? el.PHONE : '',
            }
          }
        );
      });
    }

    const map = new google.maps.Map(mapOffice, {
      zoom: 4.6,
      center: {lat: 54.0293118, lng: 38.959727},
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
      rotateControl: false
    });

    locArrayOffice.forEach(function (el) {
      const loc = el.loc.replace(' ', '').split(',');
      const position = new google.maps.LatLng(loc[0], loc[1]);

      const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: '',
        animation: google.maps.Animation.DROP,
        icon: {
          url: mapOffice.dataset.pin
        }
      });

      // map.setCenter(position);
      addInfoWindow(marker, el.info);
    });

    function addInfoWindow(marker, message) {
      const telArr = Array.from(message.phone);
      const tel = telArr.map((el) => {
        return `<a href="tel:${el}">${el}</a>`
      }).join(',');
      const linkTitle = message.link ? '<b> <a href="' + message.link + '">' + message.name + '</a> </b>' : '<b>' + message.name + '</b>';
      const infoWindow = new google.maps.InfoWindow({
        content: '<div class="gm-infowindow">' + '<div class="map-modal-info">' + linkTitle + '<p>' + message.address + '</p>' + tel.replace(/,/g, '') + '</p>' + '</div>'
      });

      infoWindows.push(infoWindow);

      google.maps.event.addListener(marker, 'click', function () {
        closeAllInfoWindows();
        infoWindow.open(map, marker);
      });

      google.maps.event.addListener(map, 'click', function () {
        closeAllInfoWindows();
      });
    }

    function closeAllInfoWindows(){
      $.each(infoWindows, function(i){
        infoWindows[i].close();
      });
    }

    $(document).on('click', '.js-map__label', function(){
      if(WINDOW_WIDTH > 767){
        var loc = $(this).data('loc').replace(' ', '').split(','),
          mapOffsetTop = ($('.b-map').offset().top - 60);

        $('body, html').animate({
          scrollTop: mapOffsetTop
        }, 500);

        setTimeout(function(){
          // map.setCenter(new google.maps.LatLng(loc[0], loc[1]));
          // map.setZoom(15);
        }, 500);

        return false;
      }
    });

  }

  $(document).ready(function() {

  });

  document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.js-map-office')) {
      initMap();
    }
  })

};

export {getMap};
