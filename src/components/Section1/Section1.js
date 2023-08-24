import photo from '../../images/logo_inital.png'
import tecno from '../../images/tecno.png'
import market from '../../images/market.png'
import drink  from '../../images/drinks.png'
import tools  from '../../images/tools.png'
import bless  from '../../images/bless.png'
import sports  from '../../images/run.png'
import fashion  from '../../images/fashion.png'

import './section1.sass'

const Section1 = () => {
    return (
        <div>
            <div>
                <div>
                    <div class='linear-grad'>
                        <img class="img-section" src={photo} alt='ofers-pics' />
                    </div>
                    <div class='text-1'>
                        Venha conhecer nossas promoções
                    </div>
                    <div class='text-2'>
                        50% Off nos produtos
                    </div>
                    <button class='button-1'>
                        Ver produtos
                    </button>
                </div>
            </div>
            <div class='category'>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={tecno} alt='tecnology' />
                    </div>
                    <div class='text-box'>
                        Tecnologia
                    </div>
                </div>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={market} alt='market' />
                    </div>
                    <div class='text-box'>
                        Supermercado
                    </div>
                </div>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={drink} alt='drinks' />
                    </div>
                    <div class='text-box'>
                        Bebidas
                    </div>
                </div>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={tools} alt='tools' />
                    </div>
                    <div class='text-box'>
                        Ferramentas
                    </div>
                </div>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={bless} alt='healthy' />
                    </div>
                    <div class='text-box'>
                        Saúde
                    </div>
                </div>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={sports} alt='sports' />
                    </div>
                    <div class='text-box'>
                        Esporte e Fitness
                    </div>
                </div>
                <div class="items-category">
                    <div class='box'>
                        <img class="img-category" src={fashion} alt='trends' />
                    </div>
                    <div class='text-box'>
                        Moda
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Section1