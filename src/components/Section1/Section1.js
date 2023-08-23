import photo from '../../images/logo_inital.png'
import tecno from '../../images/tecno.png'
import market from '../../images/market.png'

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
                    <button>
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

            </div>
        </div>
    )

}

export default Section1