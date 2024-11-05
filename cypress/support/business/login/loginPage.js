let txtEmail = "[data-test=email]"
let txtPassword = "[data-test=passwd]"
let btnEntrar = "//button[contains(text(), 'Entrar')]"
let lblBemVindo = "//*[contains(text(), 'Bem vindo, André Automatizador!')]"

class LoginPage{
    getTxtEmail() {
        return txtEmail
    }

    getTxtPassword() {
        return txtPassword
    }

    getBtnEntrar() {
        return btnEntrar
    }

    getLblMsgBemVindo() {
        return lblBemVindo
    }

}
export default new LoginPage;