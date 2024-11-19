import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import ResponsividadeLogic from '../responsiveness/responsividadeLogic';

Then('verifico se o link home está visível', () => {
ResponsividadeLogic.verificarHomeVisivel()
})

And('ajusto o tamanho da área de visualização do navegador', ()=>{
ResponsividadeLogic.ajustarTamanhoNavegador()
})

And('verifico se o link home não está visível', () =>{
ResponsividadeLogic.verificarHomeNaoVisivel()
})

And('ajusto o tamanho da área de visualização do navegador para iPhone 5',()=>{
ResponsividadeLogic.ajustarTamanhoIPhone()
})

And('verifico se o link home não está visível',()=>{
ResponsividadeLogic.verificarHomeNaoVisivel()
})

And('ajusto o tamanho da área de visualização do navegador para iPad 2',()=>{
ResponsividadeLogic.ajustarTamanhoIPad()
})

Then('verifico se o link home está visível',()=>{
ResponsividadeLogic.verificarHomeVisivel()
})