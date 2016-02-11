
 angular.module('NORWESApp.services',[])

 .service('searchServiceData',['$http', function($http) 
 {
 	
 	this.getSearchData = function(){
	 	return $http.get("data/bookData.json");
	 	
	 };
 }])
