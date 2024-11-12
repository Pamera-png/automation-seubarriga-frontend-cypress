let linkEstrato="[data-test=menu-extrato]"
let linhas=".list-group > li"
let fnBuscarElemento= (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`
let fnAlterar=conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`
let txtDescricao="[data-test=descricao]"
let btnAlterarStatus="[data-test=status]"
let btnSalvar=".btn-primary"
let lblValidarMensagem=".toast-message"
let fnDeletar=conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`

class EstratoPage{
getLinkEstrato(){
    return linkEstrato
}

getLinhas(){
return linhas
}

getFnBuscarElemento(desc, value){
return fnBuscarElemento(desc, value)
}

getFnAlterar(conta){
    return fnAlterar(conta)
    }
    
    getTxtDescricao(){
    return txtDescricao
    }
    
    getBtnAlterarStatus(){
        return btnAlterarStatus
        }
        
    getBtnSalvar(){
    return btnSalvar
        }
    
        getLblValidarMensagem(){
return lblValidarMensagem
        }

        getFnDeletar(conta){
            return fnDeletar(conta)
        }
    
}
export default new EstratoPage;