let btnSettings="[title=settings]"
let linkContas="//a[contains(., 'Contas')]"
let txtNomeConta="[data-test=nome]"
let btnSave = "//button[@alt='Salvar']"
let lblValidarContaSalva=".toast-message"
let typeNome="Conta de teste"
let caminho="//table//td[contains(., 'Banco')]/..//i[@class='far fa-edit']"

class ContasPage{
    getBtnSettings(){
        return btnSettings
    }

    getLinkContas(){
return linkContas
    }

    getTxtNomeConta(){
        return txtNomeConta
    }

    getBtnSalvar(){
        return btnSave
    }
   
    getLblValidarContaSalva(){
        return lblValidarContaSalva
    }

    getTypeNome(){
        return typeNome
    }

    getCaminho(){
        return caminho
    }

}
export default new ContasPage;