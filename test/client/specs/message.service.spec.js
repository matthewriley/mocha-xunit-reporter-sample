/*jshint -W030 */
describe('Message Service', function() {
	'use strict';
	var messageService;

	beforeEach(module('sampleApp'));

	beforeEach(function() {
		inject(function(_messageService_) {
			messageService = _messageService_;
		});
	});

	describe("getMessage()", function() {
		it("should return a message", function() {
			var result = messageService.getMessage();
			expect(result).to.equal('Hello world.');
		});
	});

});
