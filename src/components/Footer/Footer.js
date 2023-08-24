import './footer.sass'
import redes from '../../images/redes_sociais.png'
import pagto from '../../images/formas_pagto.png'
const Footer = () => {
    return (
        <div class='footer'>
            <div>
                <h5>Sobre nós</h5>
                <p>Conheça </p>
                <p>COMO COMPRAR </p>
                <p>Indicação e Desconto</p>
                <img id="redes" src={redes} alt='redes sociais' />
            </div>
            <div>
                <h5>INFORMAÇÕES ÚTEIS</h5>
                <p>FALE CONOSCO</p>
                <p>DÚVIDAS</p>
                <p>PRAZOS DE ENTREGA</p>
                <p>FORMAS DE PAGAMENTO</p>
                <p>POLÍTICA DE PRIVACIDADE</p>
                <p>TROCAS E DEVOLUÇÕES</p>
            </div>
            <div>
                <img id="pagto" src={pagto} alt='pagamento' />
            </div>
            <div>
                <p>CADASTRE-SE E RECEBA NOSSAS</p>
                <h5>NOVIDADES E PROMOÇÕES</h5>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                <input placeholder='Seu e-mail'></input>
                <button></button>
            </div>
        </div>
    )
}

export default Footer