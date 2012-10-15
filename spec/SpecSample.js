define(["jasmine", "Sample"], function (jasmine, __SampleModule__) {
    describe("Sample", function () {
    	var sample;

    	beforeEach(function() {
    		sample  = new __SampleModule__.Sample();
    	});

    	it("should be able to create a new instance", function(){
    		expect(sample).not.toBe(undefined);
    	});
    });
});