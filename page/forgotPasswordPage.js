/**
 * Created by s.vakathanam on 08/07/2016.
 */
var forgotPasswordPage = function(){

    this.setEmailId = function(value){
        browser.driver.findElement(by.id('Email')).sendKeys(value);
    };

    this.ClickSubmit = function(){
        browser.driver.findElement(by.css('.btn.btn-default')).submit();
    };
    
    this.GetForgotPasswordFormText = function(){
        return browser.driver.findElement(by.css('#forgotPasswordForm')).getText();  
    };

    this.GetEmailFieldValidationErrorText = function() {
        return browser.driver.findElement(by.css('span.field-validation-error.text-danger')).getText();
    };
};
module.exports = new forgotPasswordPage();
