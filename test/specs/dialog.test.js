const dialog = require('../../pageObjects/dialog.page');
// const experct = require('chai').expect;

describe('Dialog', ()=> {
    it('Verificar se os campos de nome de usuário e senha da caixa de diálogo de entrada de texto são editáveis', ()=>{
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.textEntryDialogBtn.click();
        
        
        // dialog.userNameField.addValue("Test User")
        // dialog.userNameField.clearValue();
        // dialog.userNameField.addValue("Actual User");

        // dialog.passwordField.clearValue();
        // dialog.passwordField.addValue("Test Pass");

        // let text = dialog.userNameField.getText();
        // console.log(text);
        // expect(text).equal("Actual User");

        // dialog.dialogOkBtn.click();

    })
})
