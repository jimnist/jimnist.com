function loadMotel() {
  if (GBrowserIsCompatible()) {
	
	var icon = new GIcon();
	
	icon.image = "http://kellyconner.jimnist.com/img/maps/pointy0.png";
    icon.iconSize = new GSize(22, 31);
	icon.iconAnchor = new GPoint(11, 31);	
	
	icon.shadow = "http://kellyconner.jimnist.com/img/maps/shadow-pointy.png";	
	icon.shadowSize = new GSize(38, 31);
	icon.infoShadowAnchor = new GPoint(19, 31);
	
    var map = new GMap2(document.getElementById("MotelMap"));
    map.addControl(new GSmallMapControl());    
    map.setCenter(new GLatLng(37.23679, -76.50830626487732), 15);  // a little bit south of the freight shed
    
    map.addOverlay(createHomeMarker());
    map.addOverlay(createMarker(new GLatLng(37.23687158523587, -76.50741577148438), icon, "0")); // Duke of York
    map.addOverlay(createMarker(new GLatLng(37.23504364723849, -76.50891780853271), icon, "1")); // Marl Inn
    map.addOverlay(createMarker(new GLatLng(37.23842615183287, -76.51108503341675), icon, "2")); // York River Inn
  }
}

function loadAirport() {
  if (GBrowserIsCompatible()) {
	  
	var icon = new GIcon();
	
	icon.image = "http://kellyconner.jimnist.com/img/maps/pointy0.png";
  icon.iconSize = new GSize(22, 31);
	icon.iconAnchor = new GPoint(11, 31);	
	
	icon.shadow = "http://kellyconner.jimnist.com/img/maps/shadow-pointy.png";	
	icon.shadowSize = new GSize(38, 31);
	icon.infoShadowAnchor = new GPoint(19, 31);
	
    var map = new GMap2(document.getElementById("AirportMap"));
    
    map.addControl(new GSmallMapControl());    
    map.setCenter(new GLatLng(37.996162679728116, -76.871337890625), 7); // SE of fredericksburg
    
    map.addOverlay(createHomeMarker());
    map.addOverlay(createUpsideDownMarker(new GLatLng(37.130187, -76.50341), icon, "0"));  // Newport News
    map.addOverlay(createMarker(new GLatLng(36.897658, -76.215362), icon, "1")); // Norfolk
    map.addOverlay(createMarker(new GLatLng(37.510928, -77.333411), icon, "2")); // Richmond
    map.addOverlay(createMarker(new GLatLng(38.95557, -77.446692), icon, "3"));  // Dulles
    map.addOverlay(createMarker(new GLatLng(39.183399, -76.673858), icon, "4")); // BWI
    map.addOverlay(createMarker(new GLatLng(38.849802, -77.039775), icon, "5")); // Reagan

  }
}


function createMarker(point, baseIcon, iconIndex) {

  var icon = new GIcon(baseIcon);
  
  icon.image = "http://kellyconner.jimnist.com/img/maps/pointy"+ iconIndex +".png";
  
  var marker = new GMarker(point, icon);

  return marker;
}

function createUpsideDownMarker(point, baseIcon, iconIndex) {

  var icon = new GIcon(baseIcon);
  
  icon.image = "http://kellyconner.jimnist.com/img/maps/pointuppy"+ iconIndex +".png";
  icon.iconAnchor = new GPoint(11, 0);	
	
  icon.shadow = "http://kellyconner.jimnist.com/img/maps/shadow-pointuppy.png";	
  
  var marker = new GMarker(point, icon);

  return marker;
}

function createHomeMarker() {

  var icon = new GIcon();
  
  icon.image = "http://kellyconner.jimnist.com/img/maps/heart.png";
  icon.iconSize = new GSize(24, 25);
  icon.iconAnchor = new GPoint(12, 25);

  icon.shadow = "http://kellyconner.jimnist.com/img/maps/shadow-heart.png";
  icon.shadowSize = new GSize(37, 25);
  icon.infoShadowAnchor = new GPoint(18, 25);
 
  icon.infoWindowAnchor = new GPoint(12, 2);
  
  var marker = new GMarker(new GLatLng(37.23864823015821, -76.50830626487732), icon);  // freight shed

  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("<b>Freight Shed</b><br/>reception site");
  });
  
  return marker;
}



// Creates a marker whose info window displays the letter corresponding
// to the given index.
/*
function createMarker(point, index) {
  // Create a lettered icon for this point using our icon class
  var letter = String.fromCharCode("A".charCodeAt(0) + index);
  var icon = new GIcon(baseIcon);
  icon.image = "http://www.google.com/mapfiles/marker" + letter + ".png";
  var marker = new GMarker(point, icon);

  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("Marker <b>" + letter + "</b>");
  });
  return marker;
}
*/

