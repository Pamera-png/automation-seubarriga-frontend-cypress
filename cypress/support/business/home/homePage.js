let linkHome="[data-test=menu-home]"
let saldo=nome => `//td[contains(., '${nome}')]/../td[2]`

class HomePage{
    getLinkHome(){
        return linkHome
        }
        
        getSaldo(nome){
        return saldo(nome)
        }
        
}
export default new HomePage;