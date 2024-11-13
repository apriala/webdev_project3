  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.8312, lng: -87.6272},
      zoom: 12
    });
	const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const infoWindow = new google.maps.InfoWindow({
      content: "<p>infoWindow</p>"
    });
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
}