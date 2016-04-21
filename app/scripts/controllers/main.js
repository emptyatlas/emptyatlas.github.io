'use strict';

/**
 * @ngdoc function
 * @name emptyatlasgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emptyatlasgithubioApp
 */
angular.module('emptyatlasgithubioApp').controller('MainCtrl', function($http, $scope, $timeout) {

	$scope.showContactForm = function() {
		console.log('trying to show contact form');
		_gscq.push(['trackPage','/contact']);
	};

	$scope.hideMenu = function() {
		angular.element('#js-navbar-collapse').collapse('hide')
	};

});