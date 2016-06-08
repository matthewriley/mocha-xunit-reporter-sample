/*jshint -W030 */
describe('Sample Controller', function () {
	'use strict';

    var controller,
		mockMessageService,
		messageServiceSpy;

    beforeEach(module('sampleApp'));

    beforeEach(function () {

        // mock message service
        mockMessageService = {
			getMessage: function () {
                return 'sample';
            }
        };
        module(function ($provide) {
            $provide.value('messageService', mockMessageService);
        });
		messageServiceSpy = sinon.spy(mockMessageService, "getMessage");

		// Define controller
		inject(function ($controller) {
			controller = $controller("SampleCtrl");
		});

    });

    describe('Sample Controller', function () {

        it('should exist', function () {
            expect(controller).to.exist;
        });

        it("should call messageService.getMessage() from showMessage()", function () {
			var result = controller.showMessage();
			expect(result).to.equal('sample');
        });

    });

});
