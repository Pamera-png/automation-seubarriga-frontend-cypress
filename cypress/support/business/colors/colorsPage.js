let linkEstrato="[data-test=menu-extrato]"
let fnLinha=desc => `//span[contains(., '${desc}')]/../../../..`

class ColorsPage{
getLinkEstrato(){
    return linkEstrato
}

getFnLinha(desc){
    return fnLinha(desc)
    }

}
export default new ColorsPage;