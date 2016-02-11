
NORWESApp.controller('searchControllerData',['$scope', 'searchServiceData', '$filter', function($scope, searchServiceData, $filter)
{	

	
    $scope.getSearchResults = function()
    {
    	searchServiceData.getSearchData().success(function(data,header){
            $scope.items = data.items;
            $scope.items = $filter('filter')(data.items, $scope.searchString);
    	}).error(function(){});

    }


}])