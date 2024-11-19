let btnSettings="[title=settings]"
let linkContas="//a[contains(., 'Contas')]"
let txtNomeConta="[data-test=nome]"
let btnSave = "//button[@alt='Salvar']"
let lblValidarMensagem=".toast-message"
let typeNome="Conta de teste"
let caminho="//table//td[contains(., 'Banco')]/..//i[@class='far fa-edit']"
let typeContaRepetida="Conta mesmo nome"

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
   
    getLblValidarMensagem(){
        return lblValidarMensagem
    }

    getTypeNome(){
        return typeNome
    }

    getCaminho(){
        return caminho
    }

    getTypeContaRepetida(){
        return typeContaRepetida
            }
        
}
export default new ContasPage;