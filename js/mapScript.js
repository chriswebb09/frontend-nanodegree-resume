
var map;



function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

 
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  
  function locationFinder() {

    
    var locations = [];

    
    locations.push(bio.contacts.location);
    
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  
  function createMapMarker(placeData) {

   
    var lat = placeData.geometry.location.lat();  
    var lon = placeData.geometry.location.lng();  
    var name = placeData.formatted_address;   
    var bounds = window.mapBounds;           

    
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    
    google.maps.event.addListener(marker, 'click', function() {
    });


    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);

    map.setCenter(bounds.getCenter());
  }

  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);

    
      locations.forEach(function(place){
      
      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);

}


window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
