/**
 * Created by s.vakathanam on 08/07/2016.
 */

var loginPage = function() {
    
    this.setEmail = function(value){
        browser.driver.findElement(by.id('Email')).sendKeys(value);
    };

    this.setPassword = function(value){
        browser.driver.findElement(by.id('Password')).sendKeys(value);
    };

    this.ClickSubmit = function(){
        browser.driver.findElement(by.css('.btn.btn-default')).submit();
    };
    
    this.GetEmailFieldValidationErrorText = function() {
       return browser.driver.findElement(by.css('div.col-md-10 span.field-validation-error.text-danger')).getText();
    };
    
    this.GetPasswordFieldValidationErrorText = function(){
        return browser.driver.findElement(by.css('span.field-validation-error.text-danger')).getText();
    };   
    
    this.ClickForgotPassword = function(){
        browser.driver.findElement(by.partialLinkText('Forgot')).click();
    }
}
module.exports = new loginPage();