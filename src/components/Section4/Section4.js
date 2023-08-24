import './section4.sass'
import Carousel from 'react-elastic-carousel'
import logo from '../../images/logo.png'

const Section4 = () => {
    return (
        <div>
            <div class='principal-4'>
            <div class="navegue">Navegue por marcas </div>
                <Carousel
                    itemsToShow={5}
                    showArrows={true}
                >
                    <div class='box-blank'>
                        <img class="img-marcas" src={logo} alt='logo' />
                    </div>
                    <div class='box-blank'>
                        <img class="img-marcas" src={logo} alt='logo' />
                    </div>
                    <div class='box-blank'>
                        <img class="img-marcas" src={logo} alt='logo' />
                    </div>
                    <div class='box-blank'>
                        <img class="img-marcas" src={logo} alt='logo' />
                    </div>
                    <div class='box-blank'>
                        <img class="img-marcas" src={logo} alt='logo' />
                    </div>
                    <div class='box-blank'>
                        <img class="img-marcas" src={logo} alt='logo' />
                    </div>

                </Carousel>

            </div>
        </div>
    )

}

export default Section4