let linkEstrato="[data-test=menu-extrato]"
let linhas=".list-group > li"
let fnBuscarElemento= (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`

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

}
export default new EstratoPage;