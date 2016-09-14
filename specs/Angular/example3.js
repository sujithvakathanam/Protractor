describe('Writing CSS expressions with Protractor', function(){

    beforeEach(function(){
        browser.ignoreSynchronization = false;
        browser.get('http://www.thetestroom.com/jswebapp/');
    });

    it('Write and Validate different CSS expressions', function(){

        // CSS by tag
        element(by.css('input')).sendKeys("I am a test user");

        //CSS by Class name
        element(by.css('.ng-binding')).getText().then(function(text){

            console.log(text);
        });

        // CSS BY id
        element(by.css('#continue_button')).click();

        // css by child nodes
        element(by.css('#table1 > tbody > tr:nth-child(3) > td > a')).getText().then( function(text){
            console.log(text);
        });

        // css by attributes (Thank you message)
        element(by.partialButtonText('CONT')).click();
        element(by.css('h1[id = "title"]')).getText().then(function(text){
            console.log(text);
        });
    });
});
