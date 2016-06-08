(function() {
	'use strict';

	angular.module('sampleApp', [])
		.controller('SampleCtrl', SampleCtrl)
		.factory('messageService', messageService);

	SampleCtrl.$inject = ['messageService'];
	function SampleCtrl(messageService) {
		var vm = this;
		vm.showMessage = function(){
			return messageService.getMessage();
		};
	}

	function messageService() {
		return {
			getMessage: function(){
				return "Hello world.";
			}
		};
	}

})();
