// MAIN CONTROLLER
function trekController($scope, $http, NgMap) {
  NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });


}
