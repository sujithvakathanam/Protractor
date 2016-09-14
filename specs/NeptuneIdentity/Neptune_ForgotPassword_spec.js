/**
 * Created by s.vakathanam on 08/07/2016.
 */
describe('Neptune Forgot Password functionality', function() {
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:63634/');
    });

    var loginPage = require('../../page/loginPage.js');
    var forgotPasswordPage = require('../../page/forgotPasswordPage.js');

    describe('Forgot Password Page checking', function(){
        it('should validate the Forgot Password page', function () {
            loginPage.ClickForgotPassword();
            expect(browser.driver.getCurrentUrl()).toContain("ForgotPassword");
        });

        it('should validate password reset message',function(){
            loginPage.ClickForgotPassword();
            forgotPasswordPage.setEmailId('sujithemail@test.com');
            forgotPasswordPage.ClickSubmit();

            var resetSuccessMessage = forgotPasswordPage.GetForgotPasswordFormText();
            expect(resetSuccessMessage).toBe("The password reset link will be sent to your registerd email address along with the instructions to change the password");
        });

        it('should validate the email address format', function(){
            loginPage.ClickForgotPassword();
            forgotPasswordPage.setEmailId('xxx');
            forgotPasswordPage.ClickSubmit();

            var errorMessage = forgotPasswordPage.GetEmailFieldValidationErrorText();
            expect(errorMessage).toBe('The entered email is not valid.Please enter a valid email address.');
        });
    });
});
