let linkCadastrarMovimentacao="[data-test=menu-movimentacao]"
let txtDescricao="[data-test=descricao]"
let txtValor="[data-test=valor]"
let txtInteressado="[data-test=envolvido]"
let btnConta="[data-test=conta]"
let btnStatus="[data-test=status]"
let btnSalvar=".btn-primary"
let lblValidarMensagem=".toast-message"

class MovimentacaoPage{
    getLinkCadastrarMovimentacao(){
        return linkCadastrarMovimentacao
    }
    
    getTxtDescricao(){
        return txtDescricao
    }
    
    getTxtValor(){
        return txtValor
    }
    
    getTxtInteressado(){
        return txtInteressado
    }
    
    getBtnConta(){
return btnConta
    }

    getBtnStatus(){
    return btnStatus
    }
    
    getBtnSalvar(){
        return btnSalvar
        }
        
        getLblValidarMensagem(){
            return lblValidarMensagem
        }
}
export default new MovimentacaoPage;