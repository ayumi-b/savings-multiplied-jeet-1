/* global $: false, _: false */

(function () {  // Begin IIFE
  'use strict';

  $(document).ready(function(){});

  var FIREBASE_URL = 'https://savingsmultipliedssh.firebaseio.com/items.json';

  $.get(FIREBASE_URL, function(data) {
          console.log(data);
    _.forEach(data, function(item){
     var  endDate = moment.utc(item.endDate).fromNow(),
          image = item.image,
          price = item.price,
          seller = item.seller,
          title = item.title;

    var $figure = $('<figure><div><img src="' + image + '"></div><div>'
                    + title + '</div><div>'
                    +'$' + price + '</div><div>'
                    + seller + '</div><div>'
                    +'Item expires ' + endDate + '</div></figure>');
     $('#itemDisplay').append($figure);
   });
 });



})(); // End IIFE 
