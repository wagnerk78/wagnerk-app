import logo from '../../images/logo.png'
import shield from '../../images/ShieldCheck.png'
import truck from '../../images/Truck.png'
import card from '../../images/CreditCard.png'
import glass from '../../images/MagnifyingGlass.png'
import vector from '../../images/Vector.png'
import heart from '../../images/Heart.png'
import user from '../../images/UserCircle.png'
import shop from '../../images/ShoppingCart.png'
import crown from '../../images/CrownSimple.png'

import './header.sass'

const Header = () => {
    return (
        <div>
            <div class='header'>
                <div class='headerUp'>
                    <div> <img class="img-header" src={shield} alt='security-shop' /> </div>
                    <div>  <p>Compra <span>100% Segura</span></p> </div>
                </div>
                <div class='headerUp'>
                    <div> <img class="img-header" src={truck} alt='truck' /> </div>
                    <div>  <p> <span>Frete Grátis</span> acima de R$ 200</p> </div>
                </div>
                <div class='headerUp'>
                    <div> <img class="img-header" src={card} alt='card' /> </div>
                    <div> <p><span>Parcele</span> suas compras</p> </div>
                </div>
            </div>
            <hr></hr>
            <div class='header-middle'>
                <div> <img id="logo" src={logo} alt='logo' /> </div>
                <div id="input-all">
                    <input placeholder='O que está buscando ?'></input>
                    <div> <img id="glass" src={glass} alt='glass' /> </div>
                </div>
                <div> <img class="images-fast" src={vector} alt='account' /> </div>
                <div> <img class="images-fast" src={heart} alt='favourite' /> </div>
                <div> <img class="images-fast" src={user} alt='user' /> </div>
                <div> <img class="images-fast" src={shop} alt='shopping-cart' /> </div>
            </div>
            <hr></hr>
            <div class='header-down'>
                <div class='category'>TODAS AS CATEGORIAS </div>
                <div class='category'> <p>SUPERMERCADO </p></div>
                <div class='category'> <p>LIVROS </p></div>
                <div class='category'> <p>MODA</p></div>
                <div class='category'> <p>LANÇAMENTOS </p></div>
                <div class='category'> <span>OFERTAS DO DIA</span></div>
                <div class='category' id='header-down-2'>
                    <div><img id="crown" src={crown} alt='crown' /> </div>
                    <div><p>ASSINATURA </p></div>
                </div>

            </div>
        </div>

    )

}

export default Header