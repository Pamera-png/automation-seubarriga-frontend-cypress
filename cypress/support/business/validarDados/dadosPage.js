let btnSettings = "[title=settings]"
let linkContas = "//a[contains(., 'Contas')]"
let txtNomeConta = "[data-test=nome]"
let btnSave = "//button[@alt='Salvar']"
let lblValidarMensagem = ".toast-message"
let typeNome = '{CONTROL}'

class DadosPage {
    getBtnSettings() {
        return btnSettings
    }

    getLinkContas() {
        return linkContas
    }

    getTxtNomeConta() {
        return txtNomeConta
    }

    getBtnSalvar() {
        return btnSave
    }

    getLblValidarMensagem() {
        return lblValidarMensagem
    }

    getTypeNome() {
        return typeNome
    }
}
export default new DadosPage;