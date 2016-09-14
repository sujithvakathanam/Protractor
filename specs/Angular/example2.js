describe('testroom\jswebapp homepage', function () {
    
    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
    });

    afterEach(function(){
    });

    it('should validate the homepage', function () {
        expect(browser.getCurrentUrl()).toContain("jsweb");
        expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    });

    describe('should greet the named user in the HomePage', function () {
        var textMessage;
        beforeEach(function () {
            inputTextMessage  = "Lion";
        });

        it('it should greet named user', function () {
            element(by.model("person.name")).sendKeys(inputTextMessage);
            element(by.binding("person.name")).getText().then(function (text) {
                expect(text).toEqual(inputTextMessage);
            });
        });
    });

    describe('should check the dropdown items in animal Page', function () {
        var expectedDropDownOption;
        beforeEach(function () {
            expectedDropDownOption = "George the Turtle";
        });

        it('Should check dropdown items', function(){

            element(by.buttonText("CONTINUE")).click();

            element.all(by.css(".ng-pristine option")).then(function(items) {
                expect(items.length).toBe(4);
                expect(items[1].getText()).toBe(expectedDropDownOption);
            });
        });
    });

    it('should check the Final Confirmation page', function(){
        element(by.buttonText("CONTINUE")).click();

        // Select an item from the dropdown
        element(by.model("animal")).$('[value="1"]').click();
        element(by.partialButtonText("CONTINU")).click();
        expect(browser.getCurrentUrl()).toContain("confirm");
    });

});