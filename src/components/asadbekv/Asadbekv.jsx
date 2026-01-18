import Imgt3 from '../../assets/застежки-тип3.png'
import Imgz from '../../assets/застежки.png'
import Imgp from '../../assets/производство1.png'
import Imgp2 from '../../assets/производство2.png'
import "./Asadbekv.css";

const Asadbekv = ({div1, div2, div3, div4, div5, div6, div7, div8}) => {
  return (
    <div className='container'>
    <div className="застежки_wrapper">
      <div className='застежки_text'>
        <h3>Тракторные застежки-молнии</h3>
        <p>Тракторная застёжка по форме отдалённо напоминает гусеницу трактора. В отличие от спиральной застёжки она состоит из отдельных пластиковых зубьев, закреплённых на тесьме. Зубья чаще всего имеют форму характерного «грибка» с канавкой, обеспечивающие надёжное зацепление, хотя могут применяться зубья и других форм. Такая молния износостойка и применяется в основном на верхней одежде.</p>

        <img className='z-img' src={Imgz} alt="" />
        <div className='тип-3'>
          <h3>Тракторная молния – тип 3</h3>
          <p>Предназначена для изделий из очень легких материалов с поверхностной плотностью до 200 г/м2 (трикотажные изделия, детская и спортивная одежда, платья, мелкая галантерея: кошельки, косметички, перчатки). (этот текст будет спрятан?)</p>

          <p>Минимально производимая длина тракторных молний:</p>

          <div className='info'>
            <ul>
              <li>неразъемная молния-8,5 см</li>
              <li>разъемная молния-8,5 см</li>
              <li>комбинированная двусторонняя 12,5</li>
            </ul>
          </div>

 <div className='тип-3_cards'>
          <div>{div1}</div>
          <div>{div2}</div>
          <div>{div3}</div>
          <div>{div4}</div>
          <div>{div5}</div>
          <div>{div6}</div>
          <div>{div7}</div>
          <div>{div8}</div>
        </div>

        <p>Производимый цвет звеньев: в тон тесьмы, серебро, антик, темный никель, бронза, перламутр.</p>

        <div className='тип-3_cards-2'>
           <div className='card1'><p>Тракторная молния тип 3 неразъемная</p> 
          <img src={Imgt3} alt="" />
          </div>
          <div className='card1'><p>Тракторная молния тип 3 неразъемная</p> 
          <img src={Imgt3} alt="" />
          </div>
           <div className='card1'><p>Тракторная молния тип 3 неразъемная</p> 
          <img src={Imgt3} alt="" />
          </div >
          <div className='card1'><p>Тракторная молния тип 3 неразъемная</p> 
          <img src={Imgt3} alt="" />
          </div>
        </div>
        </div>

      </div>
      <div className='производство'>
        <h3>Производство</h3>

        <div className="ul-wrapper">
          <ul className='ul_1'>
            <li> ▶Тракторные Молнии </li>
            <hr />
            <li> ▶Спиральнык молнии</li>
            <hr />
            <li> ▶Металлические молнии</li>
            <hr />
            <li> ▶Слайдеры</li>
            <hr />
            <li> ▼Пуллеры</li>
            <hr />
            </ul>
            <ul className='ul_2'>
            <li className='li1'>Металлические</li>
            <li className='li2'>Текстильные</li>
            <li className='li2'>Светоотражающие</li>
            <li className='li2'>Пластиковые</li>
            <li className='li2'>С логотипом</li>
            <li className='li2'>Под заказ</li>
            <li className='li2'>Распродажа</li>


          </ul>
          <hr  className='ohr'/>
          <h3>Услуги</h3>
          <ul className='ul_3'>
            <li>▶ Окраска темы</li>
            <hr />
            <li>▶ Нанесение логотипов</li>
            <hr />
          </ul>

          <img src={Imgp} alt="" />

        <img src={Imgp2} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Asadbekv
