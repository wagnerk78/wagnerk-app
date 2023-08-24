import './footer.sass'
import redes from '../../images/redes_sociais.png'
import pagto from '../../images/formas_pagto.png'
import vtex from '../../images/logo-v.png'
import econo from '../../images/logo-e.png'



const Footer = () => {
    return (
        <div>
            <div class='footer'>
                <div class='box-footer'>
                    <div class='left-footer'> <h5 class='text-7'>Sobre nós</h5></div>
                    <div class='left-footer'> <p>Conheça </p></div>
                    <div class='left-footer'> <p>COMO COMPRAR </p></div>
                    <div class='left-footer'> <p>Indicação e Desconto</p></div>
                    <div class='left-footer'> <img id="redes" src={redes} alt='redes sociais' /></div>
                </div>
                <div class='box-footer'>
                    <div class='left-footer'> <h5 class='text-7'>INFORMAÇÕES ÚTEIS</h5> </div>
                    <div class='left-footer'> <p>FALE CONOSCO</p> </div>
                    <div class='left-footer'>  <p>DÚVIDAS</p></div>
                    <div class='left-footer'> <p>PRAZOS DE ENTREGA</p> </div>
                    <div class='left-footer'>  <p>FORMAS DE PAGAMENTO</p></div>
                    <div class='left-footer'>  <p>POLÍTICA DE PRIVACIDADE</p></div>
                    <div class='left-footer'> <p>TROCAS E DEVOLUÇÕES</p></div>
                </div>
                <div class='box-footer'>
                    <img id="pagto" src={pagto} alt='pagamento' />
                </div>
                <div class="footer-blank">
                    <p id="text-56">CADASTRE-SE E RECEBA NOSSAS</p>
                    <h5 id='new-footer'>NOVIDADES E PROMOÇÕES</h5>
                    <p id='text-57'>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    <div class="blank-right">
                        <div>    <input class='input-footer' placeholder='SEU E-MAIL'></input> </div>
                        <div> <button class="button-footer">OK</button></div>
                    </div>
                </div>
            </div>
            <div class="under-footer">
                <div><p id='text-under'>COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS.  
É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.</p></div>
                <div> <img id="logo365" src={econo} alt='logo' /></div>
                <div> <img id="logo366" src={vtex} alt='logo' /></div>
            </div>
        </div>
    )
}

export default Footer