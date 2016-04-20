'use strict';

/**
 * @ngdoc function
 * @name emptyatlasgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emptyatlasgithubioApp
 */
angular.module('emptyatlasgithubioApp').controller('MainCtrl', function($http, $scope, $timeout, $location, $anchorScroll) {
	$scope.getShows = function() {
		// var url = 'https://www.reverbnation.com/widget_code/html_widget/artist_451527?widget_id=52&amp;posted_by=artist_451527&pwc[design]=default&pwc[background_color]=%23ffffff&pwc[layout]=detailed&pwc[show_map]=0&pwc[size]=fit';
		// var request = $http.get(url);
		// request.success(function(data, status) {
		// 	console.log(data);
		// 	console.log(status);
		// });
		$timeout(function() {
			var iframe = document.getElementById('reverb_iframe');
			console.log(iframe);
			var what = iframe.contentWindow.postMessage('message', '*');
			console.log(what);
			// var test = iframe.contentWindow.document;
			// console.log(test);
		}, 3000);
	};

	window.addEventListener('message', function(event) {
		console.log(event.orgin);

		// IMPORTANT: Check the origin of the data!
		if (~event.origin.indexOf('http://yoursite.com')) {
			// The data has been sent from your site

			// The data sent with postMessage is stored in event.data
			console.log(event.data);
		} else {
			// The data hasn't been sent from your site!
			// Be careful! Do not use it.
			console.log(event.data);
			return;
		}
	});
});