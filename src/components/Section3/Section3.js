import parceiros from '../../images/parceiros.png'
import produtos from '../../images/produtos.png'
import './section3.sass'


const Section3 = () => {
    return (
        <div>
        <div class='principal'>
            <div>
                <div class='sombra'> <img class="images-middle" src={parceiros} alt='parceiros' /> </div>
                <div><h1>Parceiros</h1></div>
                <div class="text-middle"> Lorem ipsum dolor sit amet, consectetur </div>
                <button class="button-parceiro">CONFIRA</button>
            </div>
            <div>
                <div class='sombra'> <img class="images-middle" src={parceiros} alt='parceiros' /> </div>
                <div><h1>Parceiros</h1></div>
                <div class="text-middle"> Lorem ipsum dolor sit amet, consectetur </div>
                <button class="button-parceiro">CONFIRA</button>
            </div>
        </div>
        <div class='text-9'>
        <div class="text-products">Produtos Relacionados</div>
        <div class="see-all">Ver Todos</div>
        </div>
           <div class='principal'>
           <div>
               <div class='sombra'> <img class="images-middle" src={produtos} alt='produtos' /> </div>
               <div><h1>Produtos</h1></div>
               <div class="text-middle"> Lorem ipsum dolor sit amet, consectetur </div>
               <button class="button-parceiro">CONFIRA</button>
           </div>
           <div>
               <div class='sombra'> <img class="images-middle" src={produtos} alt='produtos' /> </div>
               <div><h1>Produtos</h1></div>
               <div class="text-middle"> Lorem ipsum dolor sit amet, consectetur </div>
               <button class="button-parceiro">CONFIRA</button>
           </div>
       </div>
       </div>
    )

}

export default Section3