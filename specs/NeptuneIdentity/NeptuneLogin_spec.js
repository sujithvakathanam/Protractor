describe('Neptune HomePage', function() {
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:63634/');
    });

    var loginPage = require('../../page/loginPage.js')

    describe('loginPage checking', function(){
        it('should validate the Omnia Login details and return to the return URL', function () {
            loginPage.setEmail('sujithemail@test.com');
            loginPage.setPassword('1234567');
            loginPage.ClickSubmit();

            expect(browser.driver.getCurrentUrl()).toContain("ReturnUrl");
        });

        it('should validate email field to be mandatory',function(){
            loginPage.setPassword('1234567');
            loginPage.ClickSubmit();

            var errorMessage = loginPage.GetEmailFieldValidationErrorText();
            expect(errorMessage).toBe("The Email field is required.");
        });

        it('should validate password field to be mandatory',function(){
            loginPage.setEmail('sujithemail@test.com');
            loginPage.ClickSubmit();

            var errorMessage = loginPage.GetPasswordFieldValidationErrorText();
            expect(errorMessage).toEqual("The Password field is required.");
        });

        it('should validate email field format',function(){
            loginPage.setEmail('xxxx');
            loginPage.setPassword('1234567');
            loginPage.ClickSubmit();

            var errorMessage = loginPage.GetEmailFieldValidationErrorText();
            expect(errorMessage).toBe("The Email field is not a valid e-mail address.");
        });
    });
});

